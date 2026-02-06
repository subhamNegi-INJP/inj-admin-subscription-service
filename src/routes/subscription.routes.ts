// Subscription Routes
// Main subscription CRUD and actions

import { Router } from 'express';
import { body, param, query } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { adminOnly } from '../middleware/authorize';
import { validate } from '../middleware/validate';
import {
  getAllSubscriptions,
  getSubscriptionById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  activateSubscription,
  confirmPayment,
  updateFeatures,
  getSubscriptionStats,
} from '../controllers/subscription.controller';
import {
  getSubscriptionRenewals,
  renewSubscription,
} from '../controllers/renewal.controller';
import {
  getSubscriptionChanges,
  upgradeSubscription,
  downgradeSubscription,
  addSeats,
  removeSeats,
  cancelSubscription,
} from '../controllers/change.controller';

const router = Router();

// Apply authentication to all routes
router.use(authenticate);

// =============================================================================
// VALIDATION SCHEMAS
// =============================================================================

const paginationValidation = [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 1000 }).withMessage('Limit must be between 1 and 1000'),
  query('sortBy').optional().isString(),
  query('sortOrder').optional().isIn(['asc', 'desc']),
];

const subscriptionIdValidation = [
  param('id').isString().notEmpty().withMessage('Subscription ID is required'),
];

const createSubscriptionValidation = [
  body('clientId').isString().notEmpty().withMessage('Client ID is required'),
  body('clientName').isString().notEmpty().withMessage('Client name is required'),
  body('productId').isString().notEmpty().withMessage('Product ID is required'),
  body('productName').isString().notEmpty().withMessage('Product name is required'),
  body('productCode').isString().notEmpty().withMessage('Product code is required'),
  body('licenseTypeId').isString().notEmpty().withMessage('License type ID is required'),
  body('licenseTypeName').isString().notEmpty().withMessage('License type name is required'),
  // pricingPlanId is optional for custom pricing (Enterprise plans)
  body('pricingPlanId').optional().isString(),
  body('isCustomPricing').optional().isBoolean(),
  body('seats').isInt({ min: 1 }).withMessage('Seats must be at least 1'),
  body('pricePerSeat').isFloat({ min: 0 }).withMessage('Price per seat must be non-negative'),
  body('expirationDate').isISO8601().withMessage('Valid expiration date is required'),
  body('gracePeriodDays').optional().isInt({ min: 0 }),
  body('availableFeatures').optional().isArray(),
  body('selectedFeatures').optional().isArray(),
  body('discountPercent').optional().isFloat({ min: 0, max: 100 }),
  body('taxPercent').optional().isFloat({ min: 0, max: 100 }),
  body('autoRenew').optional().isBoolean(),
  // Custom validation: pricingPlanId required unless isCustomPricing is true
  body().custom((value, { req }) => {
    if (!req.body.isCustomPricing && !req.body.pricingPlanId) {
      throw new Error('Pricing plan ID is required for non-custom pricing');
    }
    return true;
  }),
];

const updateSubscriptionValidation = [
  ...subscriptionIdValidation,
  body('name').optional().isString(),
  body('selectedFeatures').optional().isArray(),
  body('autoRenew').optional().isBoolean(),
  body('gracePeriodDays').optional().isInt({ min: 0 }),
  body('status').optional().isIn(['PENDING', 'ACTIVE', 'EXPIRED', 'CANCELLED', 'SUSPENDED', 'GRACE_PERIOD']),
];

const activateValidation = [
  ...subscriptionIdValidation,
  body('paymentId').optional().isString(),
  body('licensePoolId').optional().isString(),
];

const renewValidation = [
  param('subscriptionId').isString().notEmpty().withMessage('Subscription ID is required'),
  body('durationMonths').optional().isInt({ min: 1, max: 36 }),
  body('pricePerSeat').optional().isFloat({ min: 0 }),
  body('discountPercent').optional().isFloat({ min: 0, max: 100 }),
  body('paymentId').optional().isString(),
];

const upgradeDowngradeValidation = [
  param('subscriptionId').isString().notEmpty().withMessage('Subscription ID is required'),
  body('newLicenseTypeId').isString().notEmpty().withMessage('New license type ID is required'),
  body('newLicenseTypeName').isString().notEmpty().withMessage('New license type name is required'),
  body('newPricePerSeat').isFloat({ min: 0 }).withMessage('New price per seat is required'),
  body('effectiveDate').optional().isISO8601(),
  body('reason').optional().isString(),
];

const addSeatsValidation = [
  param('subscriptionId').isString().notEmpty().withMessage('Subscription ID is required'),
  body('additionalSeats').isInt({ min: 1 }).withMessage('Additional seats must be at least 1'),
  body('pricePerSeat').optional().isFloat({ min: 0 }),
  body('reason').optional().isString(),
];

const removeSeatsValidation = [
  param('subscriptionId').isString().notEmpty().withMessage('Subscription ID is required'),
  body('seatsToRemove').isInt({ min: 1 }).withMessage('Seats to remove must be at least 1'),
  body('reason').optional().isString(),
];

const cancelValidation = [
  param('subscriptionId').isString().notEmpty().withMessage('Subscription ID is required'),
  body('reason').optional().isString(),
  body('effectiveImmediately').optional().isBoolean(),
];

// =============================================================================
// SUBSCRIPTION CRUD ROUTES
// =============================================================================

/**
 * @route   GET /api/subscriptions
 * @desc    Get all subscriptions
 * @access  Private (Admin)
 */
router.get(
  '/',
  adminOnly,
  validate(paginationValidation),
  getAllSubscriptions
);

/**
 * @route   GET /api/subscriptions/stats
 * @desc    Get subscription statistics
 * @access  Private (Admin)
 */
router.get(
  '/stats',
  adminOnly,
  getSubscriptionStats
);

/**
 * @route   GET /api/subscriptions/:id
 * @desc    Get subscription by ID
 * @access  Private (Admin)
 */
router.get(
  '/:id',
  adminOnly,
  validate(subscriptionIdValidation),
  getSubscriptionById
);

/**
 * @route   POST /api/subscriptions
 * @desc    Create new subscription
 * @access  Private (Admin)
 */
router.post(
  '/',
  adminOnly,
  validate(createSubscriptionValidation),
  createSubscription
);

/**
 * @route   PUT /api/subscriptions/:id
 * @desc    Update subscription
 * @access  Private (Admin)
 */
router.put(
  '/:id',
  adminOnly,
  validate(updateSubscriptionValidation),
  updateSubscription
);

/**
 * @route   DELETE /api/subscriptions/:id
 * @desc    Delete subscription (pending only)
 * @access  Private (Admin)
 */
router.delete(
  '/:id',
  adminOnly,
  validate(subscriptionIdValidation),
  deleteSubscription
);

/**
 * @route   POST /api/subscriptions/:id/activate
 * @desc    Activate subscription (after payment)
 * @access  Private (Admin)
 */
router.post(
  '/:id/activate',
  adminOnly,
  validate(activateValidation),
  activateSubscription
);

/**
 * @route   POST /api/subscriptions/:id/confirm-payment
 * @desc    Confirm payment and activate subscription
 * @access  Private (Admin)
 */
router.post(
  '/:id/confirm-payment',
  adminOnly,
  validate([
    ...subscriptionIdValidation,
    body('paymentMethod').optional().isString(),
    body('transactionId').optional().isString(),
    body('notes').optional().isString(),
  ]),
  confirmPayment
);

/**
 * @route   PATCH /api/subscriptions/:id/features
 * @desc    Update subscription selected features
 * @access  Private (Admin)
 */
router.patch(
  '/:id/features',
  adminOnly,
  validate([
    ...subscriptionIdValidation,
    body('selectedFeatures').isArray().withMessage('selectedFeatures must be an array'),
  ]),
  updateFeatures
);

// =============================================================================
// RENEWAL ROUTES
// =============================================================================

/**
 * @route   GET /api/subscriptions/:subscriptionId/renewals
 * @desc    Get subscription renewals
 * @access  Private (Admin)
 */
router.get(
  '/:subscriptionId/renewals',
  adminOnly,
  validate([param('subscriptionId').isString().notEmpty()]),
  getSubscriptionRenewals
);

/**
 * @route   POST /api/subscriptions/:subscriptionId/renew
 * @desc    Renew subscription
 * @access  Private (Admin)
 */
router.post(
  '/:subscriptionId/renew',
  adminOnly,
  validate(renewValidation),
  renewSubscription
);

// =============================================================================
// CHANGE ROUTES (Upgrade/Downgrade/Seats/Cancel)
// =============================================================================

/**
 * @route   GET /api/subscriptions/:subscriptionId/changes
 * @desc    Get subscription change history
 * @access  Private (Admin)
 */
router.get(
  '/:subscriptionId/changes',
  adminOnly,
  validate([param('subscriptionId').isString().notEmpty()]),
  getSubscriptionChanges
);

/**
 * @route   POST /api/subscriptions/:subscriptionId/upgrade
 * @desc    Upgrade subscription
 * @access  Private (Admin)
 */
router.post(
  '/:subscriptionId/upgrade',
  adminOnly,
  validate(upgradeDowngradeValidation),
  upgradeSubscription
);

/**
 * @route   POST /api/subscriptions/:subscriptionId/downgrade
 * @desc    Downgrade subscription
 * @access  Private (Admin)
 */
router.post(
  '/:subscriptionId/downgrade',
  adminOnly,
  validate(upgradeDowngradeValidation),
  downgradeSubscription
);

/**
 * @route   POST /api/subscriptions/:subscriptionId/add-seats
 * @desc    Add seats to subscription
 * @access  Private (Admin)
 */
router.post(
  '/:subscriptionId/add-seats',
  adminOnly,
  validate(addSeatsValidation),
  addSeats
);

/**
 * @route   POST /api/subscriptions/:subscriptionId/remove-seats
 * @desc    Remove seats from subscription
 * @access  Private (Admin)
 */
router.post(
  '/:subscriptionId/remove-seats',
  adminOnly,
  validate(removeSeatsValidation),
  removeSeats
);

/**
 * @route   POST /api/subscriptions/:subscriptionId/cancel
 * @desc    Cancel subscription
 * @access  Private (Admin)
 */
router.post(
  '/:subscriptionId/cancel',
  adminOnly,
  validate(cancelValidation),
  cancelSubscription
);

export default router;
