// Renewal Routes
// Standalone renewal endpoints

import { Router } from 'express';
import { param, query } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { adminOnly } from '../middleware/authorize';
import { validate } from '../middleware/validate';
import {
  getAllRenewals,
  getRenewalById,
  completeRenewal,
} from '../controllers/renewal.controller';

const router = Router();

router.use(authenticate);

// =============================================================================
// VALIDATION
// =============================================================================

const paginationValidation = [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('status').optional().isString(),
  query('sortBy').optional().isString(),
  query('sortOrder').optional().isIn(['asc', 'desc']),
];

// =============================================================================
// ROUTES
// =============================================================================

/**
 * @route   GET /api/renewals
 * @desc    Get all renewals
 * @access  Private (Admin)
 */
router.get(
  '/',
  adminOnly,
  validate(paginationValidation),
  getAllRenewals
);

/**
 * @route   GET /api/renewals/:renewalId
 * @desc    Get renewal by ID
 * @access  Private (Admin)
 */
router.get(
  '/:renewalId',
  adminOnly,
  validate([param('renewalId').isString().notEmpty()]),
  getRenewalById
);

/**
 * @route   POST /api/renewals/:renewalId/complete
 * @desc    Complete renewal payment
 * @access  Private (Admin)
 */
router.post(
  '/:renewalId/complete',
  adminOnly,
  validate([param('renewalId').isString().notEmpty()]),
  completeRenewal
);

export default router;
