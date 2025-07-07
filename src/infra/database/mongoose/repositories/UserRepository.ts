import { CreateUserInput } from '../../../../presentation/dtos/user/CreateUserDTO';
import { User } from '../../../../domain/entities/User';
import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { UserModel } from '../models/UserModel';

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const usersDoc = await UserModel.find();
    return usersDoc.map(
      (userDoc) =>
        new User(
          userDoc.id,
          userDoc.email,
          userDoc.password,
          userDoc.active,
          userDoc.createdAt,
          userDoc.updatedAt
        )
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const usersDoc = await UserModel.findOne({ email: email });

    if (!usersDoc) {
      return null;
    }

    return new User(
      usersDoc.id,
      usersDoc.email,
      usersDoc.password,
      usersDoc.active,
      usersDoc.createdAt,
      usersDoc.updatedAt
    );
  }

  async create(params: CreateUserInput): Promise<User> {
    const userDoc = await UserModel.create(params);

    return new User(
      userDoc.id,
      userDoc.email,
      userDoc.password,
      userDoc.active,
      userDoc.createdAt,
      userDoc.updatedAt
    );
  }
}
