import { User } from '../../domain/entities/User';
import { IUserModel } from '../../infra/database/mongoose/models/UserModel';
import { UserDTO } from '../dtos/user/UserDTO';

export class UserMapper {
  static toDTO(user: User): UserDTO {
    return {
      id: user.id,
      email: user.email,
      active: user.active,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toModel(userDoc: IUserModel): User {
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
