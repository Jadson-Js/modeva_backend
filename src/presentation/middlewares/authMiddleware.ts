import { UnauthorizedError } from '../../domain/errors/UnauthorizedError';
import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    next(new UnauthorizedError());
  }

  next();
}
