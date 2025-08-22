import { createUserUseCase } from '../../../presentation/container/user';
import {
  SignupInput,
  SignupOutput,
} from '../../../presentation/dtos/auth/SignupDTO';

export class SignupUseCase {
  constructor() {}

  static async execute(params: SignupInput): Promise<SignupOutput> {
    // Cria Usuario
    const user = await createUserUseCase.execute(params);

    // Gera Token

    return {
      email: user.email,
      token: 'generated_token', // Aqui você deve implementar a lógica para gerar o token
    };
    // Retorna Token
  }
}
