// Addon Controller
// Handles subscription addon operations

import { Response } from 'express';
import prisma from '../utils/prisma';
import {
  sendSuccess,
  sendCreated,
  sendNotFound,
  sendError,
} from '../utils/response';
import type { AuthenticatedRequest } from '../types';
import { Decimal } from '../generated/prisma/runtime/library';

// =============================================================================
// HELPER: SERIALIZE ADDON (Convert Decimal fields to numbers)
// =============================================================================

const serializeAddon = (addon: any) => ({
  ...addon,
  pricePerUnit: addon.pricePerUnit ? Number(addon.pricePerUnit) : 0,
  subtotal: addon.subtotal ? Number(addon.subtotal) : 0,
  taxPercent: addon.taxPercent ? Number(addon.taxPercent) : 0,
  taxAmount: addon.taxAmount ? Number(addon.taxAmount) : 0,
  totalAmount: addon.totalAmount ? Number(addon.totalAmount) : 0,
});

// =============================================================================
// GET SUBSCRIPTION ADDONS
// =============================================================================

export const getSubscriptionAddons = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const { status } = req.query;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    const where: any = { subscriptionId };
    if (status) where.status = status;

    const addons = await prisma.subscriptionAddon.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    sendSuccess(res, { addons: addons.map(serializeAddon) });
  } catch (error) {
    console.error('Error fetching subscription addons:', error);
    sendError(res, 'Failed to fetch subscription addons', 500);
  }
};

// =============================================================================
// GET SINGLE ADDON
// =============================================================================

export const getAddonById = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const addon = await prisma.subscriptionAddon.findUnique({
      where: { id },
      include: {
        subscription: {
          select: {
            id: true,
            clientId: true,
            clientName: true,
            productId: true,
            productName: true,
            status: true,
          },
        },
      },
    });

    if (!addon) {
      sendNotFound(res, 'Addon not found');
      return;
    }

    sendSuccess(res, { addon: serializeAddon(addon) });
  } catch (error) {
    console.error('Error fetching addon:', error);
    sendError(res, 'Failed to fetch addon', 500);
  }
};

// =============================================================================
// PURCHASE ADDON (creates pending addon)
// =============================================================================

export const purchaseAddon = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { subscriptionId } = req.params;
    const {
      addonCode,
      addonName,
      addonDescription,
      pricingType,
      pricePerUnit,
      quantity = 1,
      billingCycle,
      isRecurring = true,
      taxPercent = 18,
      notes,
    } = req.body;

    // Validate subscription exists and is active
    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status !== 'ACTIVE') {
      sendError(res, 'Can only add addons to active subscriptions', 400);
      return;
    }

    // Check if addon already exists for this subscription
    const existingAddon = await prisma.subscriptionAddon.findUnique({
      where: {
        subscriptionId_addonCode: {
          subscriptionId,
          addonCode,
        },
      },
    });

    if (existingAddon && existingAddon.status === 'ACTIVE') {
      sendError(res, 'This addon is already active for this subscription', 400);
      return;
    }

    // Calculate amounts
    const price = Number(pricePerUnit);
    const qty = pricingType === 'PER_SEAT' ? (quantity || subscription.seats) : 1;
    const subtotal = price * qty;
    const tax = (subtotal * Number(taxPercent)) / 100;
    const total = subtotal + tax;

    // Calculate expiration date (same as subscription or based on billing cycle)
    let expirationDate = subscription.expirationDate;
    if (billingCycle === 'MONTHLY') {
      expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1);
    } else if (billingCycle === 'YEARLY') {
      expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    }

    // Create or update addon
    const addon = existingAddon
      ? await prisma.subscriptionAddon.update({
          where: { id: existingAddon.id },
          data: {
            addonName,
            addonDescription,
            pricingType,
            pricePerUnit: new Decimal(price),
            quantity: qty,
            subtotal: new Decimal(subtotal),
            taxPercent: new Decimal(taxPercent),
            taxAmount: new Decimal(tax),
            totalAmount: new Decimal(total),
            billingCycle,
            isRecurring,
            status: 'PENDING_PAYMENT',
            paymentStatus: 'PENDING',
            expirationDate,
            cancelledAt: null,
            cancelReason: null,
            notes,
          },
        })
      : await prisma.subscriptionAddon.create({
          data: {
            subscriptionId,
            addonCode,
            addonName,
            addonDescription,
            pricingType,
            pricePerUnit: new Decimal(price),
            quantity: qty,
            subtotal: new Decimal(subtotal),
            taxPercent: new Decimal(taxPercent),
            taxAmount: new Decimal(tax),
            totalAmount: new Decimal(total),
            currency: subscription.currency,
            billingCycle,
            isRecurring,
            status: 'PENDING_PAYMENT',
            paymentStatus: 'PENDING',
            expirationDate,
            purchasedAt: new Date(),
            notes,
          },
        });

    // Record the change
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId,
        changeType: 'ADDON_ADDED',
        newAmount: new Decimal(total),
        effectiveDate: new Date(),
        paymentStatus: 'PENDING',
        reason: `Addon purchased: ${addonName}`,
        notes: `Addon code: ${addonCode}, Quantity: ${qty}, Price: ${total}`,
      },
    });

    sendCreated(res, serializeAddon(addon), 'Addon purchase initiated. Please confirm payment to activate.');
  } catch (error) {
    console.error('Error purchasing addon:', error);
    sendError(res, 'Failed to purchase addon', 500);
  }
};

// =============================================================================
// CONFIRM ADDON PAYMENT (activates addon)
// =============================================================================

export const confirmAddonPayment = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { paymentId, invoiceId, transactionId, notes } = req.body;

    const addon = await prisma.subscriptionAddon.findUnique({
      where: { id },
      include: {
        subscription: true,
      },
    });

    if (!addon) {
      sendNotFound(res, 'Addon not found');
      return;
    }

    if (addon.status === 'ACTIVE') {
      sendError(res, 'Addon is already active', 400);
      return;
    }

    const now = new Date();

    // Calculate next billing date
    let nextBillingDate: Date | null = null;
    if (addon.isRecurring && addon.billingCycle) {
      nextBillingDate = new Date(now);
      if (addon.billingCycle === 'MONTHLY') {
        nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);
      } else if (addon.billingCycle === 'YEARLY') {
        nextBillingDate.setFullYear(nextBillingDate.getFullYear() + 1);
      }
    }

    // Update addon status
    const updatedAddon = await prisma.subscriptionAddon.update({
      where: { id },
      data: {
        status: 'ACTIVE',
        paymentStatus: 'COMPLETED',
        paymentId,
        invoiceId,
        activatedAt: now,
        nextBillingDate,
        notes: notes || addon.notes,
      },
    });

    // Record the change
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId: addon.subscriptionId,
        changeType: 'ADDON_ADDED',
        newAmount: addon.totalAmount,
        effectiveDate: now,
        paymentId,
        invoiceId,
        paymentStatus: 'COMPLETED',
        reason: `Addon activated: ${addon.addonName}`,
        notes: `Payment confirmed. Transaction: ${transactionId || 'N/A'}`,
      },
    });

    sendSuccess(res, serializeAddon(updatedAddon), 'Addon payment confirmed and activated');
  } catch (error) {
    console.error('Error confirming addon payment:', error);
    sendError(res, 'Failed to confirm addon payment', 500);
  }
};

// =============================================================================
// CANCEL ADDON
// =============================================================================

export const cancelAddon = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { reason, cancelImmediately = false } = req.body;
    const userId = req.user?.userId;
    const userName = req.user?.email;

    const addon = await prisma.subscriptionAddon.findUnique({
      where: { id },
    });

    if (!addon) {
      sendNotFound(res, 'Addon not found');
      return;
    }

    if (addon.status === 'CANCELLED') {
      sendError(res, 'Addon is already cancelled', 400);
      return;
    }

    const now = new Date();

    // If cancel immediately, set status to cancelled now
    // Otherwise, mark for cancellation at end of billing period
    const updateData: any = {
      cancelledAt: now,
      cancelReason: reason,
      cancelledById: userId,
      cancelledByName: userName,
      isRecurring: false, // Stop auto-renewal
    };

    if (cancelImmediately || addon.status === 'PENDING_PAYMENT') {
      updateData.status = 'CANCELLED';
    }
    // If not cancelled immediately, addon stays active until expiration

    const updatedAddon = await prisma.subscriptionAddon.update({
      where: { id },
      data: updateData,
    });

    // Record the change
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId: addon.subscriptionId,
        changeType: 'ADDON_REMOVED',
        previousAmount: addon.totalAmount,
        effectiveDate: cancelImmediately ? now : addon.expirationDate || now,
        changedById: userId,
        changedByName: userName,
        reason: reason || `Addon cancelled: ${addon.addonName}`,
        notes: cancelImmediately 
          ? 'Cancelled immediately' 
          : 'Marked for cancellation at end of billing period',
      },
    });

    sendSuccess(res, { addon: serializeAddon(updatedAddon) }, 
      cancelImmediately 
        ? 'Addon cancelled successfully' 
        : 'Addon marked for cancellation at end of billing period'
    );
  } catch (error) {
    console.error('Error cancelling addon:', error);
    sendError(res, 'Failed to cancel addon', 500);
  }
};

// =============================================================================
// UPDATE ADDON (change quantity, etc.)
// =============================================================================

export const updateAddon = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { quantity, isRecurring, notes } = req.body;

    const addon = await prisma.subscriptionAddon.findUnique({
      where: { id },
      include: { subscription: true },
    });

    if (!addon) {
      sendNotFound(res, 'Addon not found');
      return;
    }

    const updateData: any = {};

    // If quantity changed and pricing is per-seat, recalculate amounts
    if (quantity !== undefined && addon.pricingType === 'PER_SEAT') {
      const price = Number(addon.pricePerUnit);
      const subtotal = price * quantity;
      const tax = (subtotal * Number(addon.taxPercent)) / 100;
      const total = subtotal + tax;

      updateData.quantity = quantity;
      updateData.subtotal = new Decimal(subtotal);
      updateData.taxAmount = new Decimal(tax);
      updateData.totalAmount = new Decimal(total);
    }

    if (isRecurring !== undefined) {
      updateData.isRecurring = isRecurring;
    }

    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const updatedAddon = await prisma.subscriptionAddon.update({
      where: { id },
      data: updateData,
    });

    sendSuccess(res, { addon: serializeAddon(updatedAddon) }, 'Addon updated successfully');
  } catch (error) {
    console.error('Error updating addon:', error);
    sendError(res, 'Failed to update addon', 500);
  }
};
