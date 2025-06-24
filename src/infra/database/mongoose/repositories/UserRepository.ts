import { IUserInput } from '../../../../application/dtos/user/IUser';
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
          userDoc.createdAt,
          userDoc.updatedAt
        )
    );
  }

  async create(params: IUserInput): Promise<User> {
    const userDoc = await UserModel.create(params);

    return new User(
      userDoc.id,
      userDoc.email,
      userDoc.password,
      userDoc.createdAt,
      userDoc.updatedAt
    );
  }
}
