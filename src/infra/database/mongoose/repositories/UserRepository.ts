import { IUserInput } from '../../../../application/dtos/user/IUser';
import { User } from '../../../../domain/entities/User';
import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { IUserDocument, UserModel } from '../models/UserModel';

function toEntity(doc: IUserDocument): User {
  return new User(
    doc.id,
    doc.email,
    doc.password,
    doc.createdAt,
    doc.updatedAt
  );
}

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const docs = await UserModel.find();
    return docs.map(toEntity);
  }

  async create(params: IUserInput): Promise<User> {
    //const docs = await UserModel.create(params);
    return {
      id: '1',
      email: params.email,
      password: params.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
