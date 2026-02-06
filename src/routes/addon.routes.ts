// Addon Routes
// Subscription addon management endpoints

import { Router } from 'express';
import { body, param, query } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { adminOnly } from '../middleware/authorize';
import { validate } from '../middleware/validate';
import {
  getSubscriptionAddons,
  getAddonById,
  purchaseAddon,
  confirmAddonPayment,
  cancelAddon,
  updateAddon,
} from '../controllers/addon.controller';

const router = Router();

// Apply authentication to all routes
router.use(authenticate);

// =============================================================================
// VALIDATION SCHEMAS
// =============================================================================

const subscriptionIdValidation = [
  param('subscriptionId').isString().notEmpty().withMessage('Subscription ID is required'),
];

const addonIdValidation = [
  param('id').isString().notEmpty().withMessage('Addon ID is required'),
];

const purchaseAddonValidation = [
  ...subscriptionIdValidation,
  body('addonCode').isString().notEmpty().withMessage('Addon code is required'),
  body('addonName').isString().notEmpty().withMessage('Addon name is required'),
  body('addonDescription').optional().isString(),
  body('pricingType').isIn(['ONE_TIME', 'PER_SEAT', 'FLAT_RATE']).withMessage('Invalid pricing type'),
  body('pricePerUnit').isFloat({ min: 0 }).withMessage('Price must be non-negative'),
  body('quantity').optional().isInt({ min: 1 }),
  body('billingCycle').optional().isIn(['MONTHLY', 'YEARLY']),
  body('isRecurring').optional().isBoolean(),
  body('taxPercent').optional().isFloat({ min: 0, max: 100 }),
  body('notes').optional().isString(),
];

const confirmPaymentValidation = [
  ...addonIdValidation,
  body('paymentId').optional().isString(),
  body('invoiceId').optional().isString(),
  body('transactionId').optional().isString(),
  body('notes').optional().isString(),
];

const cancelAddonValidation = [
  ...addonIdValidation,
  body('reason').optional().isString(),
  body('cancelImmediately').optional().isBoolean(),
];

const updateAddonValidation = [
  ...addonIdValidation,
  body('quantity').optional().isInt({ min: 1 }),
  body('isRecurring').optional().isBoolean(),
  body('notes').optional().isString(),
];

// =============================================================================
// ADDON ROUTES
// =============================================================================

/**
 * @route   GET /api/subscriptions/:subscriptionId/addons
 * @desc    Get all addons for a subscription
 * @access  Private (Admin)
 */
router.get(
  '/:subscriptionId/addons',
  adminOnly,
  validate([
    ...subscriptionIdValidation,
    query('status').optional().isIn(['PENDING_PAYMENT', 'ACTIVE', 'CANCELLED', 'EXPIRED', 'SUSPENDED']),
  ]),
  getSubscriptionAddons
);

/**
 * @route   POST /api/subscriptions/:subscriptionId/addons
 * @desc    Purchase an addon for a subscription
 * @access  Private (Admin)
 */
router.post(
  '/:subscriptionId/addons',
  adminOnly,
  validate(purchaseAddonValidation),
  purchaseAddon
);

/**
 * @route   GET /api/addons/:id
 * @desc    Get addon by ID
 * @access  Private (Admin)
 */
router.get(
  '/:id',
  adminOnly,
  validate(addonIdValidation),
  getAddonById
);

/**
 * @route   POST /api/addons/:id/confirm-payment
 * @desc    Confirm addon payment and activate
 * @access  Private (Admin)
 */
router.post(
  '/:id/confirm-payment',
  adminOnly,
  validate(confirmPaymentValidation),
  confirmAddonPayment
);

/**
 * @route   PUT /api/addons/:id
 * @desc    Update addon
 * @access  Private (Admin)
 */
router.put(
  '/:id',
  adminOnly,
  validate(updateAddonValidation),
  updateAddon
);

/**
 * @route   POST /api/addons/:id/cancel
 * @desc    Cancel addon
 * @access  Private (Admin)
 */
router.post(
  '/:id/cancel',
  adminOnly,
  validate(cancelAddonValidation),
  cancelAddon
);

export default router;
