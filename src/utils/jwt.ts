// JWT utility functions

import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { config } from '../config';
import type { JWTPayload } from '../types';

/**
 * Calculate expires in seconds from a string like "1h" or "7d"
 */
export const getExpiresInSeconds = (expiresIn: string): number => {
  const match = expiresIn.match(/^(\d+)([smhd])$/);
  
  if (!match) {
    return 3600; // Default to 1 hour
  }
  
  const value = parseInt(match[1], 10);
  const unit = match[2];
  
  switch (unit) {
    case 's':
      return value;
    case 'm':
      return value * 60;
    case 'h':
      return value * 60 * 60;
    case 'd':
      return value * 24 * 60 * 60;
    default:
      return 3600;
  }
};

/**
 * Generate an access token for a user
 */
export const generateAccessToken = (payload: Omit<JWTPayload, 'iat' | 'exp'>): string => {
  // Use numeric expiration (in seconds) for type safety
  const expiresInSeconds = getExpiresInSeconds(config.jwt.expiresIn);
  return jwt.sign(payload, config.jwt.secret, { expiresIn: expiresInSeconds });
};

/**
 * Generate a refresh token
 */
export const generateRefreshToken = (): string => {
  return crypto.randomBytes(64).toString('hex');
};

/**
 * Verify and decode an access token
 */
export const verifyAccessToken = (token: string): JWTPayload | null => {
  try {
    const decoded = jwt.verify(token, config.jwt.secret) as JWTPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};

// Alias for verifyAccessToken for backward compatibility
export const verifyToken = verifyAccessToken;

/**
 * Decode a token without verification (useful for expired tokens)
 */
export const decodeToken = (token: string): JWTPayload | null => {
  try {
    return jwt.decode(token) as JWTPayload;
  } catch (error) {
    return null;
  }
};

/**
 * Get token expiration date
 */
export const getTokenExpiration = (expiresIn: string): Date => {
  const now = new Date();
  const match = expiresIn.match(/^(\d+)([smhd])$/);
  
  if (!match) {
    // Default to 1 hour
    return new Date(now.getTime() + 60 * 60 * 1000);
  }
  
  const value = parseInt(match[1], 10);
  const unit = match[2];
  
  switch (unit) {
    case 's':
      return new Date(now.getTime() + value * 1000);
    case 'm':
      return new Date(now.getTime() + value * 60 * 1000);
    case 'h':
      return new Date(now.getTime() + value * 60 * 60 * 1000);
    case 'd':
      return new Date(now.getTime() + value * 24 * 60 * 60 * 1000);
    default:
      return new Date(now.getTime() + 60 * 60 * 1000);
  }
};

/**
 * Generate a password reset token
 */
export const generatePasswordResetToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};