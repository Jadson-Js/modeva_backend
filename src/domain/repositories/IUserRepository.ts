import { CreateUserInput } from '../../presentation/dtos/user/CreateUserDTO';
import { User } from '../entities/User';

export interface IUserRepository {
  findAll(): Promise<User[] | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(params: CreateUserInput): Promise<User>;
}
