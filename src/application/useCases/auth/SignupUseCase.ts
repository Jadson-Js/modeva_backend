import { HashService } from '../../../infra/services/HashService';
import { createUserUseCase } from '../../../presentation/container/user';
import {
  SignupInput,
  SignupOutput,
} from '../../../presentation/dtos/auth/SignupDTO';

export class SignupUseCase {
  constructor() {}

  static async execute(params: SignupInput): Promise<SignupOutput> {
    const passwordHash = await HashService.generateHash(params.password);

    const data = {
      email: params.email,
      password: passwordHash,
    };

    const user = await createUserUseCase.execute(data);

    return {
      id: user.id,
      email: user.email,
    };
  }
}
