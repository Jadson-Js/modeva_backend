import { UserRepository } from '../../../infra/database/mongoose/repositories/UserRepository';
import { User } from '../../../domain/entities/User';
import { NotFoundError } from '../../../shared/errors/NotFoundError';

export class FindByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundError('User');
    }

    return user;
  }
}
