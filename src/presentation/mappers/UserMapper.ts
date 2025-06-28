import { User } from '../../domain/entities/User';
import { CreateUserOutput } from '../../application/dtos/user/CreateUserDTO';

export class UserMapper {
  static toDTO(user: User): CreateUserOutput {
    return {
      id: user.id,
      email: user.email,
      active: user.active,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
