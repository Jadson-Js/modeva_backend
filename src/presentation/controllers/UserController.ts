import { Request, Response } from 'express';
import {
  findAllUsersUseCase,
  createUserUseCase,
} from '../../shared/factories/user';
import { UserMapper } from '../mappers/UserMapper';
import { ApiResponse } from '../../application/dtos/IApiResponse';

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

  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const data = { email, password };

      const user = await createUserUseCase.execute(data);
      const userDTO = UserMapper.toDTO(user);
      const response: ApiResponse<typeof userDTO> = {
        success: true,
        message: 'User created',
        data: userDTO,
      };

      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error creating user' });
    }
  }
}
