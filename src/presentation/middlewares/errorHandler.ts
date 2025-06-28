import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../shared/errors/AppError';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.name,
      errors: [error.message],
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    errors: ['Something went wrong!'],
  });
}
