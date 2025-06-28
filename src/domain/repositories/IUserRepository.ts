import { IUserInput } from '../../application/dtos/user/CreateUserDTO';
import { User } from '../entities/User';

export interface IUserRepository {
  findAll(): Promise<User[] | null>;
  create(params: IUserInput): Promise<User>;
}
