import { Request, Response } from 'express';
import {
  findAllUsersUseCase,
  createUserUseCase,
  findByEmailUseCase,
} from '../container/user';
import { ApiResponse } from '../dtos/IApiResponse';
import { UserMapper } from '../mapper/UserMapper';
import { UserDTO } from '../dtos/user/UserDTO';

export class UserController {
  static async findAll(req: Request, res: Response): Promise<Response> {
    const users = await findAllUsersUseCase.execute();
    const response: ApiResponse<UserDTO[]> = {
      success: true,
      message: 'Users found',
      data: users.map((user) => UserMapper.toDTO(user)),
    };

    return res.status(200).json(response);
  }

  static async findByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;

    const user = await findByEmailUseCase.execute(email);

    const response: ApiResponse<UserDTO> = {
      success: true,
      message: 'Users found',
      data: UserMapper.toDTO(user),
    };

    return res.status(200).json(response);
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const user = await createUserUseCase.execute({ email, password });

    const response: ApiResponse<UserDTO> = {
      success: true,
      message: 'Users found',
      data: UserMapper.toDTO(user),
    };

    return res.status(201).json(response);
  }
}
