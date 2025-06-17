import { UserRepository } from '../../../infra/database/mongoose/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

export class FindAllUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
