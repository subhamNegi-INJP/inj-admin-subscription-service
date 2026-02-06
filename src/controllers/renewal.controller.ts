// Renewal Controller
// Handles subscription renewal operations

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
import { publishSubscriptionRenewed } from '../events/publisher';
import { Decimal } from '../generated/prisma/runtime/library';

// =============================================================================
// GET ALL RENEWALS
// =============================================================================

export const getAllRenewals = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const {
      page = '1',
      limit = '20',
      status,
      sortBy = 'renewedAt',
      sortOrder = 'desc',
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = Math.min(parseInt(limit as string, 10), 100);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {};
    if (status) where.status = status;

    const [renewals, total] = await Promise.all([
      prisma.subscriptionRenewal.findMany({
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
      prisma.subscriptionRenewal.count({ where }),
    ]);

    sendPaginated(res, renewals, pageNum, limitNum, total);
  } catch (error) {
    console.error('Error fetching renewals:', error);
    sendError(res, 'Failed to fetch renewals', 500);
  }
};

// =============================================================================
// GET SUBSCRIPTION RENEWALS
// =============================================================================

export const getSubscriptionRenewals = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const { page = '1', limit = '20' } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = Math.min(parseInt(limit as string, 10), 100);
    const skip = (pageNum - 1) * limitNum;

    // Check subscription exists
    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    const [renewals, total] = await Promise.all([
      prisma.subscriptionRenewal.findMany({
        where: { subscriptionId },
        skip,
        take: limitNum,
        orderBy: { renewedAt: 'desc' },
      }),
      prisma.subscriptionRenewal.count({ where: { subscriptionId } }),
    ]);

    sendPaginated(res, renewals, pageNum, limitNum, total);
  } catch (error) {
    console.error('Error fetching subscription renewals:', error);
    sendError(res, 'Failed to fetch subscription renewals', 500);
  }
};

// =============================================================================
// RENEW SUBSCRIPTION
// =============================================================================

export const renewSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const {
      durationMonths = 1,
      pricePerSeat,
      discountPercent = 0,
      couponCode,
      paymentId,
      initiatedBy,
      initiatedByName,
    } = req.body;

    // Get subscription
    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    // Check if subscription can be renewed
    if (subscription.status === 'CANCELLED') {
      sendError(res, 'Cannot renew a cancelled subscription', 400);
      return;
    }

    // Calculate new dates
    const previousEndDate = subscription.expirationDate;
    const baseDate = previousEndDate > new Date() ? previousEndDate : new Date();
    const newEndDate = new Date(baseDate);
    newEndDate.setMonth(newEndDate.getMonth() + durationMonths);

    // Calculate amounts
    const renewalPricePerSeat = pricePerSeat || Number(subscription.pricePerSeat);
    const subtotal = subscription.seats * renewalPricePerSeat;
    const discountAmount = (subtotal * discountPercent) / 100;
    const taxableAmount = subtotal - discountAmount;
    const taxAmount = (taxableAmount * Number(subscription.taxPercent)) / 100;
    const totalAmount = taxableAmount + taxAmount;

    // Create renewal record
    const renewal = await prisma.subscriptionRenewal.create({
      data: {
        subscriptionId,
        previousEndDate,
        newEndDate,
        seats: subscription.seats,
        pricePerSeat: new Decimal(renewalPricePerSeat),
        subtotal: new Decimal(subtotal),
        discountAmount: new Decimal(discountAmount),
        taxAmount: new Decimal(taxAmount),
        totalAmount: new Decimal(totalAmount),
        paymentId,
        paymentStatus: paymentId ? 'COMPLETED' : 'PENDING',
        initiatedBy: initiatedBy || req.userId || 'SYSTEM',
        initiatedByName: initiatedByName || 'System Auto-Renewal',
        isAutoRenewal: !req.userId,
        status: paymentId ? 'COMPLETED' : 'PENDING',
      },
    });

    // Update subscription if payment completed
    if (paymentId) {
      await prisma.clientSubscription.update({
        where: { id: subscriptionId },
        data: {
          expirationDate: newEndDate,
          status: 'ACTIVE',
          renewalRemindedAt: null,
          nextRenewalDate: subscription.autoRenew ? newEndDate : null,
        },
      });

      // Record the change
      await prisma.subscriptionChange.create({
        data: {
          subscriptionId,
          changeType: 'RENEWED',
          previousSeats: subscription.seats,
          previousAmount: subscription.totalAmount,
          newSeats: subscription.seats,
          newAmount: new Decimal(totalAmount),
          effectiveDate: new Date(),
          paymentId,
          paymentStatus: 'COMPLETED',
          changedById: initiatedBy || req.userId,
          changedByName: initiatedByName,
          reason: 'Subscription renewed',
        },
      });

      // Publish event
      await publishSubscriptionRenewed({
        subscriptionId: subscription.id,
        renewalId: renewal.id,
        previousEndDate: previousEndDate.toISOString(),
        newEndDate: newEndDate.toISOString(),
        totalAmount,
      });
    }

    sendCreated(res, {
      renewal,
      subscription: paymentId ? {
        id: subscription.id,
        expirationDate: newEndDate,
        status: 'ACTIVE',
      } : undefined,
    }, 'Subscription renewal ' + (paymentId ? 'completed' : 'initiated'));
  } catch (error) {
    console.error('Error renewing subscription:', error);
    sendError(res, 'Failed to renew subscription', 500);
  }
};

// =============================================================================
// COMPLETE RENEWAL (after payment)
// =============================================================================

export const completeRenewal = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { renewalId } = req.params;
    const { paymentId, invoiceId } = req.body;

    const renewal = await prisma.subscriptionRenewal.findUnique({
      where: { id: renewalId },
      include: { subscription: true },
    });

    if (!renewal) {
      sendNotFound(res, 'Renewal not found');
      return;
    }

    if (renewal.status === 'COMPLETED') {
      sendError(res, 'Renewal is already completed', 400);
      return;
    }

    const previousStatus = renewal.subscription.status;

    // Update renewal
    const updatedRenewal = await prisma.subscriptionRenewal.update({
      where: { id: renewalId },
      data: {
        paymentId,
        invoiceId,
        paymentStatus: 'COMPLETED',
        status: 'COMPLETED',
      },
    });

    // Update subscription - always activate if payment is received
    // This handles reactivation from SUSPENDED or GRACE_PERIOD
    await prisma.clientSubscription.update({
      where: { id: renewal.subscriptionId },
      data: {
        expirationDate: renewal.newEndDate,
        status: 'ACTIVE',
        renewalRemindedAt: null,
        nextRenewalDate: renewal.subscription.autoRenew ? renewal.newEndDate : null,
        paymentCompletedAt: new Date(),
      },
    });

    // Record the change with appropriate reason based on previous status
    const isReactivation = ['SUSPENDED', 'GRACE_PERIOD'].includes(previousStatus);
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId: renewal.subscriptionId,
        changeType: 'RENEWED',
        previousSeats: renewal.seats,
        newSeats: renewal.seats,
        newAmount: renewal.totalAmount,
        effectiveDate: new Date(),
        paymentId,
        invoiceId,
        paymentStatus: 'COMPLETED',
        reason: isReactivation 
          ? `Renewal payment completed - subscription reactivated from ${previousStatus}`
          : 'Renewal payment completed',
      },
    });

    // Publish event
    await publishSubscriptionRenewed({
      subscriptionId: renewal.subscriptionId,
      renewalId: renewal.id,
      previousEndDate: renewal.previousEndDate.toISOString(),
      newEndDate: renewal.newEndDate.toISOString(),
      totalAmount: Number(renewal.totalAmount),
    });

    sendSuccess(res, {
      renewal: updatedRenewal,
      previousStatus,
      reactivated: isReactivation,
    }, isReactivation 
      ? `Renewal completed - subscription reactivated from ${previousStatus}`
      : 'Renewal completed successfully'
    );
  } catch (error) {
    console.error('Error completing renewal:', error);
    sendError(res, 'Failed to complete renewal', 500);
  }
};

// =============================================================================
// GET RENEWAL BY ID
// =============================================================================

export const getRenewalById = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { renewalId } = req.params;

    const renewal = await prisma.subscriptionRenewal.findUnique({
      where: { id: renewalId },
      include: {
        subscription: {
          select: {
            id: true,
            clientId: true,
            clientName: true,
            productId: true,
            productName: true,
            productCode: true,
            licenseTypeName: true,
            seats: true,
            status: true,
          },
        },
      },
    });

    if (!renewal) {
      sendNotFound(res, 'Renewal not found');
      return;
    }

    sendSuccess(res, renewal);
  } catch (error) {
    console.error('Error fetching renewal:', error);
    sendError(res, 'Failed to fetch renewal', 500);
  }
};
