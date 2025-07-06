import { Request, Response } from 'express';
import { findAllUsersUseCase, createUserUseCase } from '../container/user';
import { ApiResponse } from '../dtos/IApiResponse';
import { CreateUserOutput } from '../dtos/user/CreateUserDTO';
import { UserMapper } from '../mapper/UserMapper';

export class UserController {
  static async findAll(req: Request, res: Response): Promise<Response> {
    const users = await findAllUsersUseCase.execute();
    const response: ApiResponse<CreateUserOutput[]> = {
      success: true,
      message: 'Users found',
      data: users.map((user) => UserMapper.toCreateUserOutput(user)),
    };

    return res.status(200).json(response);
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const data = { email, password };

    const user = await createUserUseCase.execute(data);
    const userDTO = UserMapper.toCreateUserOutput(user);
    const response: ApiResponse<typeof userDTO> = {
      success: true,
      message: 'User created',
      data: userDTO,
    };

    return res.status(201).json(response);
  }
}
