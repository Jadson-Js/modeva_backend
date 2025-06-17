import { User } from '../../domain/entities/User';
import { UserResponseDTO } from '../../application/dtos/UserResponseDTO';

export class UserMapper {
  static toDTO(user: User): UserResponseDTO {
    return {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}
