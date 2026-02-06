// Change Controller
// Handles subscription changes: upgrades, downgrades, seat changes, cancellation

import { Response } from 'express';
import prisma from '../utils/prisma';
import {
  sendSuccess,
  sendCreated,
  sendNotFound,
  sendError,
  sendPaginated,
} from '../utils/response';
import type { AuthenticatedRequest } from '../types';
import {
  publishSubscriptionUpgraded,
  publishSubscriptionDowngraded,
  publishSubscriptionCancelled,
  publishSeatsAdded,
  publishSeatsRemoved,
} from '../events/publisher';
import { Decimal } from '../generated/prisma/runtime/library';

// =============================================================================
// GET ALL CHANGES
// =============================================================================

export const getAllChanges = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const {
      page = '1',
      limit = '20',
      changeType,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = Math.min(parseInt(limit as string, 10), 100);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (changeType) where.changeType = changeType;

    const [changes, total] = await Promise.all([
      prisma.subscriptionChange.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { [sortBy as string]: sortOrder },
        include: {
          subscription: {
            select: {
              id: true,
              clientName: true,
              productName: true,
              productCode: true,
            },
          },
        },
      }),
      prisma.subscriptionChange.count({ where }),
    ]);

    sendPaginated(res, changes, pageNum, limitNum, total);
  } catch (error) {
    console.error('Error fetching changes:', error);
    sendError(res, 'Failed to fetch changes', 500);
  }
};

// =============================================================================
// GET SUBSCRIPTION CHANGES
// =============================================================================

export const getSubscriptionChanges = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const { page = '1', limit = '20' } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = Math.min(parseInt(limit as string, 10), 100);
    const skip = (pageNum - 1) * limitNum;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    const [changes, total] = await Promise.all([
      prisma.subscriptionChange.findMany({
        where: { subscriptionId },
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.subscriptionChange.count({ where: { subscriptionId } }),
    ]);

    sendPaginated(res, changes, pageNum, limitNum, total);
  } catch (error) {
    console.error('Error fetching subscription changes:', error);
    sendError(res, 'Failed to fetch subscription changes', 500);
  }
};

// =============================================================================
// UPGRADE SUBSCRIPTION
// =============================================================================

export const upgradeSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const {
      newLicenseTypeId,
      newLicenseTypeName,
      newPricePerSeat,
      effectiveDate,
      reason,
      notes,
      changedById,
      changedByName,
    } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status !== 'ACTIVE') {
      sendError(res, 'Only active subscriptions can be upgraded', 400);
      return;
    }

    // Calculate prorated amount (remaining days * price difference)
    const now = new Date();
    const expiration = subscription.expirationDate;
    const remainingDays = Math.max(0, Math.ceil((expiration.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const totalDays = 30; // Assuming monthly billing
    
    const oldDailyRate = Number(subscription.pricePerSeat) / totalDays;
    const newDailyRate = newPricePerSeat / totalDays;
    const priceDifference = newDailyRate - oldDailyRate;
    const proratedAmount = priceDifference * remainingDays * subscription.seats;

    // Create change record
    const change = await prisma.subscriptionChange.create({
      data: {
        subscriptionId,
        changeType: 'UPGRADE',
        previousLicenseTypeId: subscription.licenseTypeId,
        previousLicenseTypeName: subscription.licenseTypeName,
        previousSeats: subscription.seats,
        previousAmount: subscription.totalAmount,
        newLicenseTypeId,
        newLicenseTypeName,
        newSeats: subscription.seats,
        newAmount: new Decimal(subscription.seats * newPricePerSeat),
        proratedAmount: new Decimal(proratedAmount),
        effectiveDate: effectiveDate ? new Date(effectiveDate) : now,
        paymentStatus: 'PENDING',
        changedById: changedById || req.userId,
        changedByName,
        reason,
        notes,
      },
    });

    // Update subscription
    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id: subscriptionId },
      data: {
        licenseTypeId: newLicenseTypeId,
        licenseTypeName: newLicenseTypeName,
        pricePerSeat: new Decimal(newPricePerSeat),
      },
    });

    // Publish event
    await publishSubscriptionUpgraded({
      subscriptionId: subscription.id,
      changeId: change.id,
      previousLicenseTypeId: subscription.licenseTypeId,
      newLicenseTypeId,
      proratedAmount,
    });

    sendCreated(res, {
      change,
      subscription: updatedSubscription,
      proratedAmount,
    }, 'Subscription upgraded successfully');
  } catch (error) {
    console.error('Error upgrading subscription:', error);
    sendError(res, 'Failed to upgrade subscription', 500);
  }
};

// =============================================================================
// DOWNGRADE SUBSCRIPTION
// =============================================================================

export const downgradeSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const {
      newLicenseTypeId,
      newLicenseTypeName,
      newPricePerSeat,
      effectiveDate,
      reason,
      notes,
      changedById,
      changedByName,
    } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status !== 'ACTIVE') {
      sendError(res, 'Only active subscriptions can be downgraded', 400);
      return;
    }

    // Calculate credit for downgrade (remaining days * price difference)
    const now = new Date();
    const expiration = subscription.expirationDate;
    const remainingDays = Math.max(0, Math.ceil((expiration.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const totalDays = 30;
    
    const oldDailyRate = Number(subscription.pricePerSeat) / totalDays;
    const newDailyRate = newPricePerSeat / totalDays;
    const priceDifference = oldDailyRate - newDailyRate;
    const creditAmount = priceDifference * remainingDays * subscription.seats;

    // Determine effective date (usually at next renewal for downgrades)
    const effectiveDateValue = effectiveDate ? new Date(effectiveDate) : subscription.expirationDate;

    // Create change record
    const change = await prisma.subscriptionChange.create({
      data: {
        subscriptionId,
        changeType: 'DOWNGRADE',
        previousLicenseTypeId: subscription.licenseTypeId,
        previousLicenseTypeName: subscription.licenseTypeName,
        previousSeats: subscription.seats,
        previousAmount: subscription.totalAmount,
        newLicenseTypeId,
        newLicenseTypeName,
        newSeats: subscription.seats,
        newAmount: new Decimal(subscription.seats * newPricePerSeat),
        creditAmount: new Decimal(creditAmount),
        effectiveDate: effectiveDateValue,
        changedById: changedById || req.userId,
        changedByName,
        reason,
        notes,
      },
    });

    // If effective immediately, update subscription now
    // Otherwise, the change will be applied at renewal
    let updatedSubscription = subscription;
    if (effectiveDate && new Date(effectiveDate) <= now) {
      updatedSubscription = await prisma.clientSubscription.update({
        where: { id: subscriptionId },
        data: {
          licenseTypeId: newLicenseTypeId,
          licenseTypeName: newLicenseTypeName,
          pricePerSeat: new Decimal(newPricePerSeat),
        },
      });
    }

    // Publish event
    await publishSubscriptionDowngraded({
      subscriptionId: subscription.id,
      changeId: change.id,
      previousLicenseTypeId: subscription.licenseTypeId,
      newLicenseTypeId,
      creditAmount,
    });

    sendCreated(res, {
      change,
      subscription: updatedSubscription,
      creditAmount,
      effectiveDate: effectiveDateValue,
    }, 'Subscription downgrade scheduled');
  } catch (error) {
    console.error('Error downgrading subscription:', error);
    sendError(res, 'Failed to downgrade subscription', 500);
  }
};

// =============================================================================
// ADD SEATS
// =============================================================================

export const addSeats = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const {
      additionalSeats,
      pricePerSeat,
      reason,
      changedById,
      changedByName,
    } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status !== 'ACTIVE') {
      sendError(res, 'Only active subscriptions can add seats', 400);
      return;
    }

    const seatPrice = pricePerSeat || Number(subscription.pricePerSeat);
    const newSeats = subscription.seats + additionalSeats;
    
    // Calculate prorated cost for new seats
    const now = new Date();
    const expiration = subscription.expirationDate;
    const remainingDays = Math.max(0, Math.ceil((expiration.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const totalDays = 30;
    const proratedAmount = (seatPrice * additionalSeats * remainingDays) / totalDays;

    // Create change record
    const change = await prisma.subscriptionChange.create({
      data: {
        subscriptionId,
        changeType: 'SEATS_ADDED',
        previousSeats: subscription.seats,
        previousAmount: subscription.totalAmount,
        newSeats,
        newAmount: new Decimal(newSeats * seatPrice),
        proratedAmount: new Decimal(proratedAmount),
        effectiveDate: now,
        paymentStatus: 'PENDING',
        changedById: changedById || req.userId,
        changedByName,
        reason: reason || `Added ${additionalSeats} seats`,
      },
    });

    // Update subscription
    const newSubtotal = newSeats * seatPrice;
    const newTaxAmount = (newSubtotal * Number(subscription.taxPercent)) / 100;
    const newTotalAmount = newSubtotal + newTaxAmount;

    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id: subscriptionId },
      data: {
        seats: newSeats,
        subtotal: new Decimal(newSubtotal),
        taxAmount: new Decimal(newTaxAmount),
        totalAmount: new Decimal(newTotalAmount),
      },
    });

    // Publish event
    await publishSeatsAdded({
      subscriptionId: subscription.id,
      previousSeats: subscription.seats,
      newSeats,
      additionalSeats,
    });

    sendCreated(res, {
      change,
      subscription: updatedSubscription,
      proratedAmount,
    }, `Added ${additionalSeats} seats successfully`);
  } catch (error) {
    console.error('Error adding seats:', error);
    sendError(res, 'Failed to add seats', 500);
  }
};

// =============================================================================
// REMOVE SEATS
// =============================================================================

export const removeSeats = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const {
      seatsToRemove,
      reason,
      changedById,
      changedByName,
    } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status !== 'ACTIVE') {
      sendError(res, 'Only active subscriptions can remove seats', 400);
      return;
    }

    const newSeats = subscription.seats - seatsToRemove;
    if (newSeats < 1) {
      sendError(res, 'Cannot remove all seats. Use cancel instead.', 400);
      return;
    }

    // Calculate credit for removed seats
    const now = new Date();
    const expiration = subscription.expirationDate;
    const remainingDays = Math.max(0, Math.ceil((expiration.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const totalDays = 30;
    const creditAmount = (Number(subscription.pricePerSeat) * seatsToRemove * remainingDays) / totalDays;

    // Create change record
    const change = await prisma.subscriptionChange.create({
      data: {
        subscriptionId,
        changeType: 'SEATS_REMOVED',
        previousSeats: subscription.seats,
        previousAmount: subscription.totalAmount,
        newSeats,
        newAmount: new Decimal(newSeats * Number(subscription.pricePerSeat)),
        creditAmount: new Decimal(creditAmount),
        effectiveDate: now,
        changedById: changedById || req.userId,
        changedByName,
        reason: reason || `Removed ${seatsToRemove} seats`,
      },
    });

    // Update subscription
    const newSubtotal = newSeats * Number(subscription.pricePerSeat);
    const newTaxAmount = (newSubtotal * Number(subscription.taxPercent)) / 100;
    const newTotalAmount = newSubtotal + newTaxAmount;

    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id: subscriptionId },
      data: {
        seats: newSeats,
        subtotal: new Decimal(newSubtotal),
        taxAmount: new Decimal(newTaxAmount),
        totalAmount: new Decimal(newTotalAmount),
      },
    });

    // Publish event
    await publishSeatsRemoved({
      subscriptionId: subscription.id,
      previousSeats: subscription.seats,
      newSeats,
      removedSeats: seatsToRemove,
    });

    sendCreated(res, {
      change,
      subscription: updatedSubscription,
      creditAmount,
    }, `Removed ${seatsToRemove} seats successfully`);
  } catch (error) {
    console.error('Error removing seats:', error);
    sendError(res, 'Failed to remove seats', 500);
  }
};

// =============================================================================
// CANCEL SUBSCRIPTION
// =============================================================================

export const cancelSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const {
      reason,
      cancelledById,
      cancelledByName,
      effectiveImmediately = false,
    } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status === 'CANCELLED') {
      sendError(res, 'Subscription is already cancelled', 400);
      return;
    }

    const now = new Date();
    
    // Create change record
    const change = await prisma.subscriptionChange.create({
      data: {
        subscriptionId,
        changeType: 'CANCELLED',
        previousSeats: subscription.seats,
        previousAmount: subscription.totalAmount,
        effectiveDate: effectiveImmediately ? now : subscription.expirationDate,
        changedById: cancelledById || req.userId,
        changedByName: cancelledByName,
        reason,
      },
    });

    // Update subscription
    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id: subscriptionId },
      data: {
        status: effectiveImmediately ? 'CANCELLED' : subscription.status,
        cancelledAt: now,
        cancelReason: reason,
        cancelledById: cancelledById || req.userId,
        cancelledByName,
        autoRenew: false,
      },
    });

    // Publish event
    await publishSubscriptionCancelled({
      subscriptionId: subscription.id,
      clientId: subscription.clientId,
      productId: subscription.productId,
      reason,
      cancelledAt: now.toISOString(),
    });

    sendSuccess(res, {
      change,
      subscription: updatedSubscription,
      effectiveDate: effectiveImmediately ? now : subscription.expirationDate,
    }, effectiveImmediately ? 'Subscription cancelled immediately' : 'Subscription will be cancelled at end of billing period');
  } catch (error) {
    console.error('Error cancelling subscription:', error);
    sendError(res, 'Failed to cancel subscription', 500);
  }
};
