import { UserRepository } from '../../../infra/database/mongoose/repositories/UserRepository';
import { User } from '../../../domain/entities/User';
import { NotFoundError } from '../../../shared/errors/NotFoundError';

export class FindByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('User');
    }

    return user;
  }
}
