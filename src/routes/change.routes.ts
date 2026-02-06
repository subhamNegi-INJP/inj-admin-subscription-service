// Change Routes
// Standalone change history endpoints

import { Router } from 'express';
import { query } from 'express-validator';
import { authenticate } from '../middleware/auth';
import { adminOnly } from '../middleware/authorize';
import { validate } from '../middleware/validate';
import { getAllChanges } from '../controllers/change.controller';

const router = Router();

router.use(authenticate);

// =============================================================================
// VALIDATION
// =============================================================================

const paginationValidation = [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('changeType').optional().isIn([
    'ACTIVATION',
    'UPGRADE',
    'DOWNGRADE',
    'SEATS_ADDED',
    'SEATS_REMOVED',
    'DURATION_EXTENDED',
    'CANCELLED',
    'RENEWED',
  ]),
  query('sortBy').optional().isString(),
  query('sortOrder').optional().isIn(['asc', 'desc']),
];

// =============================================================================
// ROUTES
// =============================================================================

/**
 * @route   GET /api/changes
 * @desc    Get all subscription changes
 * @access  Private (Admin)
 */
router.get(
  '/',
  adminOnly,
  validate(paginationValidation),
  getAllChanges
);

export default router;
