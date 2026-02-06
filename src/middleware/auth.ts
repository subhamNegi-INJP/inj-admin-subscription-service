// Authentication middleware for Subscription Service
// Validates JWT tokens (issued by Identity Service) and handles internal service calls

import { Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { sendUnauthorized, sendForbidden } from '../utils/response';
import type { AuthenticatedRequest, JWTPayload } from '../types';

// List of trusted internal services
const TRUSTED_INTERNAL_SERVICES = [
  'license-service',
  'billing-service',
  'product-service',
  'identity-service',
  'client-service',
  'support-service',
];

/**
 * Check if request is from a trusted internal service
 */
const isInternalServiceRequest = (req: AuthenticatedRequest): string | null => {
  const internalService = req.headers['x-internal-service'] as string;
  if (internalService && TRUSTED_INTERNAL_SERVICES.includes(internalService)) {
    return internalService;
  }
  return null;
};

/**
 * Extract JWT token from Authorization header or cookies
 */
const extractToken = (req: AuthenticatedRequest): string | null => {
  // Check Authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Check cookies
  if (req.cookies?.accessToken) {
    return req.cookies.accessToken;
  }

  return null;
};

/**
 * Authenticate middleware - validates JWT token and attaches user info to request
 * Also allows internal service-to-service calls with X-Internal-Service header
 */
export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Check for internal service call first
    const internalService = isInternalServiceRequest(req);
    if (internalService) {
      // Set system context for internal service calls
      req.user = {
        userId: 'system',
        email: `${internalService}@internal.system`,
        role: 'SUPER_ADMIN', // Internal services have full access
        isInternal: true,
      } as JWTPayload;
      req.userId = 'system';
      req.userType = 'internal-service';
      (req as any).internalService = internalService;
      next();
      return;
    }

    const token = extractToken(req);

    if (!token) {
      sendUnauthorized(res, 'Authentication required');
      return;
    }

    // Verify token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      sendUnauthorized(res, 'Invalid or expired token');
      return;
    }

    // Attach user info to request
    req.user = decoded;
    req.userId = decoded.userId;
    req.userType = 'user';

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    sendUnauthorized(res, 'Authentication failed');
  }
};

/**
 * Optional authentication - doesn't fail if no token, but attaches user if valid
 */
export const optionalAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = extractToken(req);

    if (token) {
      const decoded = verifyToken(token);
      if (decoded) {
        req.user = decoded;
        req.userId = decoded.userId;
        req.userType = 'user';
      }
    }

    next();
  } catch (error) {
    // Silent fail for optional auth
    next();
  }
};
