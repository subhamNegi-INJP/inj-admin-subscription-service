// API Key Authentication Middleware
// For external service-to-service authentication

import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { config } from '../config';

export interface ExternalApiRequest extends Request {
  serviceId?: string;
  serviceName?: string;
}

/**
 * Authenticate external API requests using service API key
 * 
 * The API key is sent in the X-API-Key header
 * This allows other services to make internal API calls
 */
export const authenticateApiKey = async (
  req: ExternalApiRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const apiKey = req.headers['x-api-key'] as string;

    if (!apiKey) {
      res.status(401).json({
        success: false,
        error: 'API key is required',
        code: 'MISSING_API_KEY',
      });
      return;
    }

    // Validate the API key against known service keys
    // In production, these would be stored in a database or secrets manager
    const validServiceKeys: Record<string, string> = {
      [process.env.SUBSCRIPTION_SERVICE_API_KEY || 'subscription-service-key']: 'subscription-service',
      [process.env.IDENTITY_SERVICE_API_KEY || 'identity-service-key']: 'identity-service',
      [process.env.LICENSE_SERVICE_API_KEY || 'license-service-key']: 'license-service',
      [process.env.PRODUCT_SERVICE_API_KEY || 'product-service-key']: 'product-service',
    };

    // Hash the provided key for comparison
    const keyHash = crypto.createHash('sha256').update(apiKey).digest('hex');
    const serviceName = validServiceKeys[apiKey] || validServiceKeys[keyHash];

    if (!serviceName) {
      res.status(401).json({
        success: false,
        error: 'Invalid API key',
        code: 'INVALID_API_KEY',
      });
      return;
    }

    // Attach service info to request
    req.serviceId = keyHash.substring(0, 16);
    req.serviceName = serviceName;

    next();
  } catch (error) {
    console.error('API key authentication error:', error);
    res.status(500).json({
      success: false,
      error: 'Authentication error',
    });
  }
};

/**
 * Middleware to check if request is from a specific service
 */
export const requireService = (...allowedServices: string[]) => {
  return (req: ExternalApiRequest, res: Response, next: NextFunction): void => {
    if (!req.serviceName) {
      res.status(401).json({
        success: false,
        error: 'Service authentication required',
        code: 'SERVICE_AUTH_REQUIRED',
      });
      return;
    }

    if (!allowedServices.includes(req.serviceName)) {
      res.status(403).json({
        success: false,
        error: 'Service not authorized for this operation',
        code: 'SERVICE_NOT_AUTHORIZED',
      });
      return;
    }

    next();
  };
};

export default authenticateApiKey;
