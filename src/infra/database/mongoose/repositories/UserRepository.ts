import { CreateUserInput } from '../../../../presentation/dtos/user/CreateUserDTO';
import { User } from '../../../../domain/entities/User';
import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { UserModel } from '../models/UserModel';
import { UserMapper } from '../../../../presentation/mapper/UserMapper';

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const usersDoc = await UserModel.find();
    return usersDoc.map((userDoc) => UserMapper.toModel(userDoc));
  }

  async findById(id: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ _id: id });

    if (!userDoc) {
      return null;
    }

    return UserMapper.toModel(userDoc);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ email: email });

    console.log('User found by email:', userDoc);
    if (!userDoc) {
      return null;
    }

    return UserMapper.toModel(userDoc);
  }

  async create(params: CreateUserInput): Promise<User> {
    const userDoc = await UserModel.create(params);

    return UserMapper.toModel(userDoc);
  }
}
