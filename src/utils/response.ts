// API response helper functions

import { Response } from 'express';
import type { ApiResponse, PaginatedResponse, ValidationError } from '../types';

/**
 * Send a success response
 */
export const sendSuccess = <T>(
  res: Response,
  data: T,
  message?: string,
  statusCode: number = 200
): Response => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    message,
  };
  return res.status(statusCode).json(response);
};

/**
 * Send a created response (201)
 */
export const sendCreated = <T>(
  res: Response,
  data: T,
  message: string = 'Resource created successfully'
): Response => {
  return sendSuccess(res, data, message, 201);
};

/**
 * Send a no content response (204)
 */
export const sendNoContent = (res: Response): Response => {
  return res.status(204).send();
};

/**
 * Send an error response
 */
export const sendError = (
  res: Response,
  message: string,
  statusCode: number = 400,
  errors?: ValidationError[]
): Response => {
  const response: ApiResponse = {
    success: false,
    error: message,
    errors,
  };
  return res.status(statusCode).json(response);
};

/**
 * Send an unauthorized response (401)
 */
export const sendUnauthorized = (
  res: Response,
  message: string = 'Unauthorized'
): Response => {
  return sendError(res, message, 401);
};

/**
 * Send a forbidden response (403)
 */
export const sendForbidden = (
  res: Response,
  message: string = 'Forbidden'
): Response => {
  return sendError(res, message, 403);
};

/**
 * Send a not found response (404)
 */
export const sendNotFound = (
  res: Response,
  message: string = 'Resource not found'
): Response => {
  return sendError(res, message, 404);
};

/**
 * Send a conflict response (409)
 */
export const sendConflict = (
  res: Response,
  message: string = 'Resource already exists'
): Response => {
  return sendError(res, message, 409);
};

/**
 * Send a validation error response (422)
 */
export const sendValidationError = (
  res: Response,
  errors: ValidationError[],
  message: string = 'Validation failed'
): Response => {
  return sendError(res, message, 422, errors);
};

/**
 * Send an internal server error response (500)
 */
export const sendServerError = (
  res: Response,
  message: string = 'Internal server error'
): Response => {
  return sendError(res, message, 500);
};

/**
 * Send a paginated response
 */
export const sendPaginated = <T>(
  res: Response,
  data: T[],
  page: number,
  limit: number,
  total: number
): Response => {
  const totalPages = Math.ceil(total / limit);
  const response: PaginatedResponse<T> = {
    success: true,
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasMore: page < totalPages,
    },
  };
  return res.status(200).json(response);
};
