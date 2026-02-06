// Subscription Status Job
// Handles automatic status transitions for subscriptions
// - ACTIVE → GRACE_PERIOD when expiration date passes
// - GRACE_PERIOD → SUSPENDED when grace period ends without payment

import prisma from '../utils/prisma';
import { publishSubscriptionExpired, publishSubscriptionSuspended } from '../events/publisher';

interface StatusTransitionResult {
  subscriptionId: string;
  clientId: string;
  productName: string;
  previousStatus: string;
  newStatus: string;
  reason: string;
}

// =============================================================================
// CHECK AND TRANSITION EXPIRED SUBSCRIPTIONS TO GRACE PERIOD
// =============================================================================

export const transitionExpiredToGracePeriod = async (): Promise<StatusTransitionResult[]> => {
  const now = new Date();
  const results: StatusTransitionResult[] = [];

  try {
    // Find ACTIVE subscriptions that have passed their expiration date
    const expiredSubscriptions = await prisma.clientSubscription.findMany({
      where: {
        status: 'ACTIVE',
        expirationDate: {
          lt: now,
        },
      },
    });

    console.log(`Found ${expiredSubscriptions.length} expired subscriptions to move to grace period`);

    for (const subscription of expiredSubscriptions) {
      try {
        // Update status to GRACE_PERIOD
        await prisma.clientSubscription.update({
          where: { id: subscription.id },
          data: {
            status: 'GRACE_PERIOD',
          },
        });

        // Record the change
        await prisma.subscriptionChange.create({
          data: {
            subscriptionId: subscription.id,
            changeType: 'CANCELLED', // Using CANCELLED as the closest change type
            previousSeats: subscription.seats,
            newSeats: subscription.seats,
            previousAmount: subscription.totalAmount,
            newAmount: subscription.totalAmount,
            effectiveDate: now,
            reason: `Subscription expired. Grace period started (${subscription.gracePeriodDays} days)`,
          },
        });

        // Publish event
        await publishSubscriptionExpired({
          subscriptionId: subscription.id,
          clientId: subscription.clientId,
          productId: subscription.productId,
          expirationDate: subscription.expirationDate.toISOString(),
          gracePeriodDays: subscription.gracePeriodDays,
          gracePeriodEndsAt: getGracePeriodEndDate(subscription.expirationDate, subscription.gracePeriodDays).toISOString(),
        });

        results.push({
          subscriptionId: subscription.id,
          clientId: subscription.clientId,
          productName: subscription.productName,
          previousStatus: 'ACTIVE',
          newStatus: 'GRACE_PERIOD',
          reason: `Expiration date passed. Grace period: ${subscription.gracePeriodDays} days`,
        });
      } catch (error) {
        console.error(`Error transitioning subscription ${subscription.id} to grace period:`, error);
      }
    }

    return results;
  } catch (error) {
    console.error('Error in transitionExpiredToGracePeriod:', error);
    throw error;
  }
};

// =============================================================================
// CHECK AND TRANSITION GRACE PERIOD SUBSCRIPTIONS TO SUSPENDED
// =============================================================================

export const transitionGracePeriodToSuspended = async (): Promise<StatusTransitionResult[]> => {
  const now = new Date();
  const results: StatusTransitionResult[] = [];

  try {
    // Find subscriptions in GRACE_PERIOD where grace period has ended
    const gracePeriodSubscriptions = await prisma.clientSubscription.findMany({
      where: {
        status: 'GRACE_PERIOD',
      },
    });

    console.log(`Found ${gracePeriodSubscriptions.length} subscriptions in grace period to check`);

    for (const subscription of gracePeriodSubscriptions) {
      // Calculate when grace period ends
      const gracePeriodEndDate = getGracePeriodEndDate(
        subscription.expirationDate,
        subscription.gracePeriodDays
      );

      // If grace period has ended, suspend the subscription
      if (now > gracePeriodEndDate) {
        try {
          // Update status to SUSPENDED
          await prisma.clientSubscription.update({
            where: { id: subscription.id },
            data: {
              status: 'SUSPENDED',
            },
          });

          // Record the change
          await prisma.subscriptionChange.create({
            data: {
              subscriptionId: subscription.id,
              changeType: 'CANCELLED', // Using CANCELLED as the closest change type
              previousSeats: subscription.seats,
              newSeats: subscription.seats,
              previousAmount: subscription.totalAmount,
              newAmount: subscription.totalAmount,
              effectiveDate: now,
              reason: 'Grace period ended without payment. Subscription suspended.',
            },
          });

          // Publish event
          await publishSubscriptionSuspended({
            subscriptionId: subscription.id,
            clientId: subscription.clientId,
            productId: subscription.productId,
            suspendedAt: now.toISOString(),
            reason: 'Grace period expired without payment',
          });

          results.push({
            subscriptionId: subscription.id,
            clientId: subscription.clientId,
            productName: subscription.productName,
            previousStatus: 'GRACE_PERIOD',
            newStatus: 'SUSPENDED',
            reason: 'Grace period ended without payment',
          });
        } catch (error) {
          console.error(`Error suspending subscription ${subscription.id}:`, error);
        }
      }
    }

    return results;
  } catch (error) {
    console.error('Error in transitionGracePeriodToSuspended:', error);
    throw error;
  }
};

// =============================================================================
// RUN ALL STATUS CHECKS
// =============================================================================

export interface StatusCheckResult {
  timestamp: string;
  toGracePeriod: StatusTransitionResult[];
  toSuspended: StatusTransitionResult[];
  summary: {
    totalTransitions: number;
    movedToGracePeriod: number;
    movedToSuspended: number;
  };
}

export const runSubscriptionStatusCheck = async (): Promise<StatusCheckResult> => {
  console.log('Starting subscription status check...');
  const startTime = Date.now();

  // First, move expired subscriptions to grace period
  const toGracePeriod = await transitionExpiredToGracePeriod();

  // Then, suspend subscriptions whose grace period has ended
  const toSuspended = await transitionGracePeriodToSuspended();

  const result: StatusCheckResult = {
    timestamp: new Date().toISOString(),
    toGracePeriod,
    toSuspended,
    summary: {
      totalTransitions: toGracePeriod.length + toSuspended.length,
      movedToGracePeriod: toGracePeriod.length,
      movedToSuspended: toSuspended.length,
    },
  };

  console.log(`Subscription status check completed in ${Date.now() - startTime}ms`);
  console.log(`Summary: ${result.summary.movedToGracePeriod} → GRACE_PERIOD, ${result.summary.movedToSuspended} → SUSPENDED`);

  return result;
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

function getGracePeriodEndDate(expirationDate: Date, gracePeriodDays: number): Date {
  const endDate = new Date(expirationDate);
  endDate.setDate(endDate.getDate() + gracePeriodDays);
  return endDate;
}

// =============================================================================
// REACTIVATE SUBSCRIPTION (Called when payment is received for suspended/grace period subscription)
// =============================================================================

export const reactivateSubscription = async (
  subscriptionId: string,
  paymentId: string,
  newExpirationDate: Date,
  options?: {
    changedById?: string;
    changedByName?: string;
  }
): Promise<{
  success: boolean;
  subscription?: any;
  error?: string;
}> => {
  try {
    const subscription = await prisma.clientSubscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      return { success: false, error: 'Subscription not found' };
    }

    // Only allow reactivation from SUSPENDED or GRACE_PERIOD status
    if (!['SUSPENDED', 'GRACE_PERIOD'].includes(subscription.status)) {
      return {
        success: false,
        error: `Cannot reactivate subscription with status: ${subscription.status}. Only SUSPENDED or GRACE_PERIOD subscriptions can be reactivated.`,
      };
    }

    const previousStatus = subscription.status;
    const now = new Date();

    // Update subscription to ACTIVE
    const updatedSubscription = await prisma.clientSubscription.update({
      where: { id: subscriptionId },
      data: {
        status: 'ACTIVE',
        expirationDate: newExpirationDate,
        paymentStatus: 'COMPLETED',
        paymentId,
        paymentCompletedAt: now,
        renewalRemindedAt: null,
        nextRenewalDate: subscription.autoRenew ? newExpirationDate : null,
      },
    });

    // Record the change
    await prisma.subscriptionChange.create({
      data: {
        subscriptionId,
        changeType: 'RENEWED',
        previousSeats: subscription.seats,
        newSeats: subscription.seats,
        previousAmount: subscription.totalAmount,
        newAmount: subscription.totalAmount,
        effectiveDate: now,
        paymentId,
        paymentStatus: 'COMPLETED',
        changedById: options?.changedById,
        changedByName: options?.changedByName,
        reason: `Subscription reactivated from ${previousStatus} after payment received`,
      },
    });

    console.log(`Subscription ${subscriptionId} reactivated from ${previousStatus} to ACTIVE`);

    return { success: true, subscription: updatedSubscription };
  } catch (error) {
    console.error(`Error reactivating subscription ${subscriptionId}:`, error);
    return { success: false, error: 'Failed to reactivate subscription' };
  }
};
