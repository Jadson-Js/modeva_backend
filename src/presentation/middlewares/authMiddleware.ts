import { JWTService } from '../../infra/services/JWTService';
import { UnauthorizedError } from '../../shared/errors/UnauthorizedError';
import { Request, Response, NextFunction } from 'express';

// Extend Express Request interface to include 'user'
import 'express';

declare module 'express' {
  export interface Request {
    user?: {
      id: string;
      email: string;
    };
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers['authorization'];
  if (!authHeader) throw new UnauthorizedError();

  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) throw new UnauthorizedError();

  try {
    const decoded = JWTService.decodedToken(token) as {
      id: string;
      email: string;
    };

    req.user = { id: decoded.id, email: decoded.email };

    next();
  } catch (err) {
    next(new UnauthorizedError());
    return;
  }
}
