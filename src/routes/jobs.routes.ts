// Jobs Routes
// API endpoints for running background jobs

import { Router, Response } from 'express';
import { sendSuccess, sendError } from '../utils/response';
import {
  runSubscriptionStatusCheck,
  reactivateSubscription,
} from '../jobs';
import type { AuthenticatedRequest } from '../types';

const router = Router();

// =============================================================================
// RUN SUBSCRIPTION STATUS CHECK
// Triggers the job to transition expired subscriptions to GRACE_PERIOD
// and grace-period-expired subscriptions to SUSPENDED
// =============================================================================

router.post(
  '/run-status-check',
  async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const result = await runSubscriptionStatusCheck();
      sendSuccess(res, result, 'Subscription status check completed');
    } catch (error) {
      console.error('Error running subscription status check:', error);
      sendError(res, 'Failed to run subscription status check', 500);
    }
  }
);

// =============================================================================
// REACTIVATE SUBSCRIPTION
// Manually reactivate a suspended/grace-period subscription after payment
// =============================================================================

router.post(
  '/reactivate/:subscriptionId',
  async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const { subscriptionId } = req.params;
      const { paymentId, durationMonths = 1 } = req.body;

      if (!paymentId) {
        sendError(res, 'paymentId is required', 400);
        return;
      }

      // Calculate new expiration date
      const newExpirationDate = new Date();
      newExpirationDate.setMonth(newExpirationDate.getMonth() + durationMonths);

      const result = await reactivateSubscription(
        subscriptionId,
        paymentId,
        newExpirationDate,
        {
          changedById: req.userId,
          changedByName: req.user?.email,
        }
      );

      if (result.success) {
        sendSuccess(res, {
          subscription: result.subscription,
          newExpirationDate,
        }, 'Subscription reactivated successfully');
      } else {
        sendError(res, result.error || 'Failed to reactivate subscription', 400);
      }
    } catch (error) {
      console.error('Error reactivating subscription:', error);
      sendError(res, 'Failed to reactivate subscription', 500);
    }
  }
);

export default router;
