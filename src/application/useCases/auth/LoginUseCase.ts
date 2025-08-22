import { HashService } from '../../../infra/services/HashService';
import { JWTService } from '../../../infra/services/JWTService';
import { findByEmailUseCase } from '../../../presentation/container/user';
import {
  LoginInput,
  LoginOutput,
} from '../../../presentation/dtos/auth/LoginDTO';
import { NotFoundError } from '../../../shared/errors/NotFoundError';
import { UnauthorizedError } from '../../../shared/errors/UnauthorizedError';

export class LoginUseCase {
  constructor() {}

  static async execute(params: LoginInput): Promise<LoginOutput> {
    const user = await findByEmailUseCase.execute(params.email);

    if (!user) {
      throw new NotFoundError('User');
    }

    const isMatchPassword = await HashService.compareHash(
      params.password,
      user.password
    );

    if (!isMatchPassword) {
      throw new UnauthorizedError();
    }

    const token = JWTService.generateToken({
      id: user.id,
      email: user.email,
    });

    return {
      id: user.id,
      email: user.email,
      token,
    };
  }
}
