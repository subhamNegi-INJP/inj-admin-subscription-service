// Global error handling middleware

import { Request, Response, NextFunction } from 'express';
import { sendServerError, sendError } from '../utils/response';

// Custom error class for API errors
export class ApiError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ApiError';
  }
}

// Not found error
export class NotFoundError extends ApiError {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

// Unauthorized error
export class UnauthorizedError extends ApiError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
    this.name = 'UnauthorizedError';
  }
}

// Forbidden error
export class ForbiddenError extends ApiError {
  constructor(message: string = 'Forbidden') {
    super(message, 403);
    this.name = 'ForbiddenError';
  }
}

// Conflict error
export class ConflictError extends ApiError {
  constructor(message: string = 'Resource already exists') {
    super(message, 409);
    this.name = 'ConflictError';
  }
}

// Validation error
export class ValidationError extends ApiError {
  errors: { field: string; message: string }[];
  
  constructor(message: string = 'Validation failed', errors: { field: string; message: string }[] = []) {
    super(message, 422);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

/**
 * Global error handler middleware
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', err);
  
  // Handle known API errors
  if (err instanceof ApiError) {
    if (err instanceof ValidationError) {
      sendError(res, err.message, err.statusCode, err.errors);
      return;
    }
    sendError(res, err.message, err.statusCode);
    return;
  }
  
  // Handle Prisma errors
  if (err.name === 'PrismaClientKnownRequestError') {
    const prismaError = err as any;
    
    switch (prismaError.code) {
      case 'P2002':
        // Unique constraint violation
        const field = prismaError.meta?.target?.[0] || 'field';
        sendError(res, `A record with this ${field} already exists`, 409);
        return;
      case 'P2025':
        // Record not found
        sendError(res, 'Record not found', 404);
        return;
      default:
        sendError(res, 'Database error', 400);
        return;
    }
  }
  
  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    sendError(res, 'Invalid token', 401);
    return;
  }
  
  if (err.name === 'TokenExpiredError') {
    sendError(res, 'Token expired', 401);
    return;
  }
  
  // Handle unknown errors
  const isDev = process.env.NODE_ENV === 'development';
  sendServerError(res, isDev ? err.message : 'Internal server error');
};

/**
 * 404 handler for unknown routes
 */
export const notFoundHandler = (req: Request, res: Response): void => {
  sendError(res, `Route ${req.method} ${req.path} not found`, 404);
};

/**
 * Async handler wrapper to catch errors in async route handlers
 */
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
