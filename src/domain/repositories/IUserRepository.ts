import { CreateUserInput } from '../../presentation/dtos/user/CreateUserDTO';
import { User } from '../entities/User';

export interface IUserRepository {
  findAll(): Promise<User[] | null>;
  create(params: CreateUserInput): Promise<User>;
}
