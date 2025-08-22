import { createUserUseCase } from '../../../presentation/container/user';
import {
  SignupInput,
  SignupOutput,
} from '../../../presentation/dtos/auth/SignupDTO';
import { AuthMapper } from '../../../presentation/mapper/AuthMapper';

export class SignupUseCase {
  constructor() {}

  static async execute(params: SignupInput): Promise<SignupOutput> {
    const user = await createUserUseCase.execute(params);

    return AuthMapper.toSignup(user);
  }
}
