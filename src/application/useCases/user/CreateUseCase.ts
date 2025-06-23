import { UserRepository } from '../../../infra/database/mongoose/repositories/UserRepository';
import { User } from '../../../domain/entities/User';
import { IUserInput } from '../../dtos/user/IUser';

export class CreateUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(params: IUserInput): Promise<User> {
    return await this.userRepository.create(params);
  }
}
