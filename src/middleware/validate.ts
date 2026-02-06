// Request validation middleware using express-validator
// License Service specific validation utilities

import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { sendValidationError } from '../utils/response';

/**
 * Validation error structure
 */
interface ValidationError {
  field: string;
  message: string;
}

/**
 * Middleware to run validation and return errors
 * @param validations Array of express-validator validation chains
 * @returns Express middleware function
 */
export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Run all validations in parallel
    await Promise.all(validations.map((validation) => validation.run(req)));
    
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
      next();
      return;
    }
    
    // Transform errors to our format
    const validationErrors: ValidationError[] = errors.array().map((err: any) => ({
      field: err.path || err.param,
      message: err.msg,
    }));
    
    sendValidationError(res, validationErrors);
  };
};
