// Subscription Controller
// Handles subscription CRUD operations

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
import { publishSubscriptionCreated, publishSubscriptionActivated } from '../events/publisher';
import { Decimal } from '../generated/prisma/runtime/library';

// =============================================================================
// HELPER: SERIALIZE SUBSCRIPTION (Convert Decimal fields to numbers)
// =============================================================================

const serializeSubscription = (sub: any) => ({
  ...sub,
  pricePerSeat: sub.pricePerSeat ? Number(sub.pricePerSeat) : 0,
  subtotal: sub.subtotal ? Number(sub.subtotal) : 0,
  discountPercent: sub.discountPercent ? Number(sub.discountPercent) : 0,
  discountAmount: sub.discountAmount ? Number(sub.discountAmount) : 0,
  couponDiscount: sub.couponDiscount ? Number(sub.couponDiscount) : 0,
  taxPercent: sub.taxPercent ? Number(sub.taxPercent) : 0,
  taxAmount: sub.taxAmount ? Number(sub.taxAmount) : 0,
  totalAmount: sub.totalAmount ? Number(sub.totalAmount) : 0,
});

// =============================================================================
// GET ALL SUBSCRIPTIONS
// =============================================================================

export const getAllSubscriptions = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const {
      page = '1',
      limit = '20',
      clientId,
      productId,
      status,
      paymentStatus,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = Math.min(parseInt(limit as string, 10), 1000);
    const skip = (pageNum - 1) * limitNum;

    // Build where clause
    const where: any = {};
    if (clientId) where.clientId = clientId;
    if (productId) where.productId = productId;
    if (status) where.status = status;
    if (paymentStatus) where.paymentStatus = paymentStatus;

    // Get subscriptions with count
    const [subscriptions, total] = await Promise.all([
      prisma.clientSubscription.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { [sortBy as string]: sortOrder },
        include: {
          renewals: {
            take: 5,
            orderBy: { renewedAt: 'desc' },
          },
          changes: {
            take: 5,
            orderBy: { createdAt: 'desc' },
          },
        },
      }),
      prisma.clientSubscription.count({ where }),
    ]);

    sendPaginated(res, subscriptions.map(serializeSubscription), pageNum, limitNum, total);
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    sendError(res, 'Failed to fetch subscriptions', 500);
  }
};

// =============================================================================
// GET SUBSCRIPTION BY ID
// =============================================================================

export const getSubscriptionById = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id },
      include: {
        renewals: {
          orderBy: { renewedAt: 'desc' },
        },
        changes: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    sendSuccess(res, serializeSubscription(subscription));
  } catch (error) {
    console.error('Error fetching subscription:', error);
    sendError(res, 'Failed to fetch subscription', 500);
  }
};

// =============================================================================
// CREATE SUBSCRIPTION
// =============================================================================

export const createSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const {
      clientId,
      clientName,
      clientEmail,
      productId,
      productName,
      productCode,
      licenseTypeId,
      licenseTypeName,
      pricingPlanId,
      pricingPlanName,
      billingCycle = 'MONTHLY',
      isCustomPricing = false,
      name,
      seats,
      pricePerSeat,
      expirationDate,
      gracePeriodDays = 7,
      availableFeatures = [],
      selectedFeatures = [],
      discountPercent = 0,
      couponId,
      couponCode,
      couponDiscount = 0,
      gstin,
      taxPercent = 18,
      orderId,
      orderItemId,
      autoRenew = true,
    } = req.body;

    // For custom pricing (Enterprise plans), use placeholder if no pricingPlanId provided
    const effectivePricingPlanId = pricingPlanId || (isCustomPricing ? 'CUSTOM_PRICING' : '');
    const effectivePricingPlanName = pricingPlanName || (isCustomPricing ? 'Custom Enterprise Pricing' : undefined);

    // Calculate amounts
    const subtotal = seats * pricePerSeat;
    const manualDiscount = (subtotal * discountPercent) / 100;
    const totalDiscount = manualDiscount + couponDiscount;
    const taxableAmount = subtotal - totalDiscount;
    const taxAmount = (taxableAmount * taxPercent) / 100;
    const totalAmount = taxableAmount + taxAmount;

    const subscription = await prisma.clientSubscription.create({
      data: {
        clientId,
        clientName,
        clientEmail,
        productId,
        productName,
        productCode,
        licenseTypeId,
        licenseTypeName,
        pricingPlanId: effectivePricingPlanId,
        pricingPlanName: effectivePricingPlanName,
        billingCycle,
        name,
        seats,
        pricePerSeat: new Decimal(pricePerSeat),
        expirationDate: new Date(expirationDate),
        gracePeriodDays,
        availableFeatures,
        selectedFeatures,
        subtotal: new Decimal(subtotal),
        discountPercent: new Decimal(discountPercent),
        discountAmount: new Decimal(manualDiscount),
        couponId,
        couponCode,
        couponDiscount: new Decimal(couponDiscount),
        gstin,
        taxPercent: new Decimal(taxPercent),
        taxAmount: new Decimal(taxAmount),
        totalAmount: new Decimal(totalAmount),
        orderId,
        orderItemId,
        autoRenew,
        status: 'PENDING',
        paymentStatus: 'PENDING',
      },
    });

    // Publish event
    await publishSubscriptionCreated({
      subscriptionId: subscription.id,
      clientId: subscription.clientId,
      productId: subscription.productId,
      seats: subscription.seats,
      totalAmount: Number(subscription.totalAmount),
    });

    // Return wrapped in { subscription } to match frontend API expectations
    sendCreated(res, { subscription: serializeSubscription(subscription) }, 'Subscription created successfully');
  } catch (error) {
    console.error('Error creating subscription:', error);
    sendError(res, 'Failed to create subscription', 500);
  }
};

// =============================================================================
// UPDATE SUBSCRIPTION
// =============================================================================

export const updateSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, selectedFeatures, autoRenew, gracePeriodDays, status } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (selectedFeatures !== undefined) updateData.selectedFeatures = selectedFeatures;
    if (autoRenew !== undefined) updateData.autoRenew = autoRenew;
    if (gracePeriodDays !== undefined) updateData.gracePeriodDays = gracePeriodDays;
    if (status !== undefined) updateData.status = status;

    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id },
      data: updateData,
    });

    sendSuccess(res, serializeSubscription(updatedSubscription), 'Subscription updated successfully');
  } catch (error) {
    console.error('Error updating subscription:', error);
    sendError(res, 'Failed to update subscription', 500);
  }
};

// =============================================================================
// DELETE SUBSCRIPTION
// =============================================================================

export const deleteSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    // Only allow deletion of pending subscriptions
    if (subscription.status !== 'PENDING') {
      sendError(res, 'Only pending subscriptions can be deleted. Use cancel for active subscriptions.', 400);
      return;
    }

    await prisma.clientSubscription.delete({
      where: { id },
    });

    sendSuccess(res, { id }, 'Subscription deleted successfully');
  } catch (error) {
    console.error('Error deleting subscription:', error);
    sendError(res, 'Failed to delete subscription', 500);
  }
};

// =============================================================================
// ACTIVATE SUBSCRIPTION (after payment)
// =============================================================================

export const activateSubscription = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { paymentId, licensePoolId, durationMonths } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status === 'ACTIVE') {
      sendError(res, 'Subscription is already active', 400);
      return;
    }

    // Allow activation from PENDING, SUSPENDED, or GRACE_PERIOD
    if (!['PENDING', 'SUSPENDED', 'GRACE_PERIOD'].includes(subscription.status)) {
      sendError(res, `Cannot activate subscription with status: ${subscription.status}`, 400);
      return;
    }

    const now = new Date();
    const previousStatus = subscription.status;
    
    // Calculate new expiration date if reactivating from suspended/grace period
    let newExpirationDate = subscription.expirationDate;
    if (['SUSPENDED', 'GRACE_PERIOD'].includes(previousStatus) && durationMonths) {
      newExpirationDate = new Date();
      newExpirationDate.setMonth(newExpirationDate.getMonth() + durationMonths);
    }

    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id },
      data: {
        status: 'ACTIVE',
        paymentStatus: 'COMPLETED',
        paymentId,
        activationDate: subscription.activationDate || now,
        expirationDate: newExpirationDate,
        licensePoolId,
        renewalRemindedAt: null,
        nextRenewalDate: subscription.autoRenew ? newExpirationDate : null,
      },
    });

    // Record the change
    const isReactivation = ['SUSPENDED', 'GRACE_PERIOD'].includes(previousStatus);
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId: id,
        changeType: isReactivation ? 'RENEWED' : 'ACTIVATION',
        newSeats: subscription.seats,
        newAmount: subscription.totalAmount,
        effectiveDate: now,
        paymentId,
        paymentStatus: 'COMPLETED',
        reason: isReactivation 
          ? `Subscription reactivated from ${previousStatus} after payment received`
          : 'Payment completed',
      },
    });

    // Publish event
    await publishSubscriptionActivated({
      subscriptionId: subscription.id,
      clientId: subscription.clientId,
      productId: subscription.productId,
      activatedAt: now.toISOString(),
    });

    sendSuccess(res, serializeSubscription(updatedSubscription), 
      isReactivation 
        ? `Subscription reactivated from ${previousStatus}` 
        : 'Subscription activated successfully'
    );
  } catch (error) {
    console.error('Error activating subscription:', error);
    sendError(res, 'Failed to activate subscription', 500);
  }
};

// =============================================================================
// CONFIRM PAYMENT (activates subscription with payment details)
// =============================================================================

export const confirmPayment = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { paymentMethod, transactionId, notes } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    if (subscription.status === 'ACTIVE') {
      sendError(res, 'Subscription is already active', 400);
      return;
    }

    const now = new Date();
    
    // Calculate expiration date if not set
    let expirationDate = subscription.expirationDate;
    if (!expirationDate || expirationDate < now) {
      // Set expiration based on billing cycle
      expirationDate = new Date(now);
      if (subscription.billingCycle === 'YEARLY') {
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
      } else {
        expirationDate.setMonth(expirationDate.getMonth() + 1);
      }
    }

    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id },
      data: {
        status: 'ACTIVE',
        paymentStatus: 'COMPLETED',
        activationDate: now,
        expirationDate,
        paymentMethod: paymentMethod || 'OTHER',
        paymentTransactionId: transactionId,
        paymentNotes: notes,
        paymentCompletedAt: now,
      },
    });

    // Record the change
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId: id,
        changeType: 'ACTIVATION',
        newSeats: subscription.seats,
        newAmount: subscription.totalAmount,
        effectiveDate: now,
        paymentStatus: 'COMPLETED',
        reason: notes || `Payment confirmed via ${paymentMethod || 'OTHER'}. Transaction: ${transactionId || 'N/A'}`,
      },
    });

    // Publish event
    await publishSubscriptionActivated({
      subscriptionId: subscription.id,
      clientId: subscription.clientId,
      productId: subscription.productId,
      activatedAt: now.toISOString(),
    });

    sendSuccess(res, serializeSubscription(updatedSubscription), 'Payment confirmed and subscription activated');
  } catch (error) {
    console.error('Error confirming payment:', error);
    sendError(res, 'Failed to confirm payment', 500);
  }
};

// =============================================================================
// UPDATE SUBSCRIPTION FEATURES
// =============================================================================

export const updateFeatures = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { selectedFeatures } = req.body;

    const subscription = await prisma.clientSubscription.findUnique({
      where: { id },
    });

    if (!subscription) {
      sendNotFound(res, 'Subscription not found');
      return;
    }

    // Validate that selectedFeatures is a subset of availableFeatures
    if (selectedFeatures && subscription.availableFeatures.length > 0) {
      const invalidFeatures = selectedFeatures.filter(
        (f: string) => !subscription.availableFeatures.includes(f)
      );
      if (invalidFeatures.length > 0) {
        sendError(res, `Invalid features: ${invalidFeatures.join(', ')}. Features must be from available features list.`, 400);
        return;
      }
    }

    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id },
      data: {
        selectedFeatures: selectedFeatures || [],
      },
    });

    // Record the change
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId: id,
        changeType: 'ACTIVATION', // Using ACTIVATION as a generic change type
        previousSeats: subscription.seats,
        newSeats: subscription.seats,
        previousAmount: subscription.totalAmount,
        newAmount: subscription.totalAmount,
        effectiveDate: new Date(),
        reason: `Features updated: ${selectedFeatures?.length || 0} features selected`,
      },
    });

    sendSuccess(res, serializeSubscription(updatedSubscription), 'Features updated successfully');
  } catch (error) {
    console.error('Error updating features:', error);
    sendError(res, 'Failed to update features', 500);
  }
};

// =============================================================================
// GET SUBSCRIPTION STATS
// =============================================================================

export const getSubscriptionStats = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { clientId, productId } = req.query;

    const where: any = {};
    if (clientId) where.clientId = clientId;
    if (productId) where.productId = productId;

    const [
      totalCount,
      activeCount,
      pendingCount,
      expiredCount,
      cancelledCount,
      expiringIn7Days,
    ] = await Promise.all([
      prisma.clientSubscription.count({ where }),
      prisma.clientSubscription.count({ where: { ...where, status: 'ACTIVE' } }),
      prisma.clientSubscription.count({ where: { ...where, status: 'PENDING' } }),
      prisma.clientSubscription.count({ where: { ...where, status: 'EXPIRED' } }),
      prisma.clientSubscription.count({ where: { ...where, status: 'CANCELLED' } }),
      prisma.clientSubscription.count({
        where: {
          ...where,
          status: 'ACTIVE',
          expirationDate: {
            lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            gte: new Date(),
          },
        },
      }),
    ]);

    // Revenue stats
    const revenueStats = await prisma.clientSubscription.aggregate({
      where: { ...where, paymentStatus: 'COMPLETED' },
      _sum: { totalAmount: true },
      _avg: { totalAmount: true },
    });

    sendSuccess(res, {
      counts: {
        total: totalCount,
        active: activeCount,
        pending: pendingCount,
        expired: expiredCount,
        cancelled: cancelledCount,
        expiringIn7Days,
      },
      revenue: {
        total: Number(revenueStats._sum.totalAmount || 0),
        average: Number(revenueStats._avg.totalAmount || 0),
      },
    });
  } catch (error) {
    console.error('Error fetching subscription stats:', error);
    sendError(res, 'Failed to fetch subscription stats', 500);
  }
};
