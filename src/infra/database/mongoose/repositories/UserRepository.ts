import { User } from '../../../../domain/entities/User';
import { IUserRepository } from '../../../../domain/repositories/IUserRepository';

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return [];
  }
}
