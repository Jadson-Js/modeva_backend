import { User } from '../../domain/entities/User';
import { IUserOutput } from '../../application/dtos/user/IUser';

export class UserMapper {
  static toDTO(user: User): IUserOutput {
    return {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
