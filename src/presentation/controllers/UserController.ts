import { Request, Response } from 'express';
import { findAllUsersUseCase } from '../../shared/factories/user/findAllDependency';
import { UserMapper } from '../mappers/UserMapper';
import { ApiResponse } from '../../application/dtos/ApiResponse';

export class UserController {
  static async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await findAllUsersUseCase.execute();
      const usersDTO = users.map((user) => UserMapper.toDTO(user));
      const response: ApiResponse<typeof usersDTO> = {
        success: true,
        message: 'Users found',
        data: usersDTO,
      };
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error finding all users' });
    }
  }
}
