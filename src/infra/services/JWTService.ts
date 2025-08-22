import jwt from 'jsonwebtoken';
import { JWTSecretKey, JWTExpiresIn } from '../../shared/config/environment';
import { ForbiddenError } from '../../shared/errors/ForbiddenError';

export interface IJWTPayload {
  id: string;
  email: string;
}

export class JWTService {
  static generateToken(payload: IJWTPayload): string {
    if (!payload) {
      throw new ForbiddenError();
    }

    return jwt.sign(payload, JWTSecretKey as jwt.Secret, {
      expiresIn: JWTExpiresIn as jwt.SignOptions['expiresIn'],
    });
  }

  static decodedToken(token: string): IJWTPayload {
    const decoded = jwt.verify(token, JWTSecretKey) as IJWTPayload;

    return decoded;
  }
}
