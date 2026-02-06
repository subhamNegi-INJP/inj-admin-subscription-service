// Authorization middleware for Product Service
// Checks user permissions for resources

import { Response, NextFunction } from 'express';
import { sendForbidden } from '../utils/response';
import type { AuthenticatedRequest } from '../types';

// Resource and Action types matching identity service
type ResourceCode = 'USERS' | 'ROLES' | 'PRODUCTS' | 'CLIENTS' | 'LICENSES' | 'TICKETS' | 'FEATURE_REQUESTS' | 'REPORTS' | 'SETTINGS' | string;
type ActionType = 'VIEW' | 'READ' | 'CREATE' | 'UPDATE' | 'DELETE' | 'MANAGE' | 'EXPORT' | 'IMPORT' | 'APPROVE' | 'REJECT' | 'ASSIGN';

interface PermissionCheck {
  resource: ResourceCode;
  action: ActionType;
}

/**
 * Check if user has a specific permission
 */
const hasPermission = (
  user: AuthenticatedRequest['user'],
  resource: ResourceCode,
  action: ActionType
): boolean => {
  if (!user) return false;

  // Admin role has all permissions
  if (user.roleName === 'admin' || user.roleName === 'ADMIN') {
    return true;
  }

  // Check permissions array
  const permissions = user.permissions;
  if (permissions && Array.isArray(permissions)) {
    // Check exact permission match
    const hasExactPermission = permissions.some(
      (p: { resourceCode: string; action: string }) => p.resourceCode === resource && p.action === action
    );
    
    if (hasExactPermission) {
      return true;
    }
    
    // For MANAGE action, check if user has any action on this resource
    if (action === 'MANAGE') {
      return permissions.some((p: { resourceCode: string }) => p.resourceCode === resource);
    }
  }

  return false;
};

/**
 * Require permission middleware
 * @param permission - The permission to check { resource, action }
 */
export const requirePermission = (permission: PermissionCheck) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      sendForbidden(res, 'Authentication required');
      return;
    }

    if (!hasPermission(req.user, permission.resource, permission.action)) {
      sendForbidden(res, `You don't have permission to ${permission.action.toLowerCase()} ${permission.resource.toLowerCase()}`);
      return;
    }

    next();
  };
};

/**
 * Require any of the specified permissions
 */
export const requireAnyPermission = (permissions: PermissionCheck[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      sendForbidden(res, 'Authentication required');
      return;
    }

    const hasAny = permissions.some(({ resource, action }) =>
      hasPermission(req.user, resource, action)
    );

    if (!hasAny) {
      sendForbidden(res, 'Insufficient permissions');
      return;
    }

    next();
  };
};

/**
 * Require all of the specified permissions
 */
export const requireAllPermissions = (permissions: PermissionCheck[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      sendForbidden(res, 'Authentication required');
      return;
    }

    const hasAll = permissions.every(({ resource, action }) =>
      hasPermission(req.user, resource, action)
    );

    if (!hasAll) {
      sendForbidden(res, 'Insufficient permissions');
      return;
    }

    next();
  };
};

/**
 * Admin only middleware - requires admin role
 * Also allows internal service-to-service calls
 */
export const adminOnly = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    sendForbidden(res, 'Authentication required');
    return;
  }

  // Allow internal service calls (set by auth middleware)
  if ((req.user as any).isInternal) {
    next();
    return;
  }

  if (req.user.roleName !== 'admin' && req.user.roleName !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN') {
    sendForbidden(res, 'Admin access required');
    return;
  }

  next();
};

/**
 * Manager or Admin only middleware
 * Also allows internal service-to-service calls
 */
export const managerOrAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    sendForbidden(res, 'Authentication required');
    return;
  }

  // Allow internal service calls (set by auth middleware)
  if ((req.user as any).isInternal) {
    next();
    return;
  }

  const allowedRoles = ['admin', 'ADMIN', 'manager', 'MANAGER', 'SUPER_ADMIN'];
  if (!allowedRoles.includes(req.user.roleName || '') && !allowedRoles.includes(req.user.role || '')) {
    sendForbidden(res, 'Manager or Admin access required');
    return;
  }

  next();
};
