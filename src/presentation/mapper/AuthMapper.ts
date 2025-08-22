import { User } from '../../domain/entities/User';
import { SignupOutput } from '../dtos/auth/SignupDTO';

export class AuthMapper {
  static toSignup(user: User): SignupOutput {
    return {
      id: user.id,
      email: user.email,
    };
  }
}
