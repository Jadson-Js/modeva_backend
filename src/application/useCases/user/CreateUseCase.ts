import { UserRepository } from '../../../infra/database/mongoose/repositories/UserRepository';
import { User } from '../../../domain/entities/User';
import { CreateUserInput } from '../../../presentation/dtos/user/CreateUserDTO';

export class CreateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(params: CreateUserInput): Promise<User> {
    return await this.userRepository.create(params);
  }
}
