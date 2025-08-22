import { Request, Response } from 'express';
import { ApiResponse } from '../dtos/IApiResponse';
import { SignupInput, SignupOutput } from '../dtos/auth/SignupDTO';
import { SignupUseCase } from '../../application/useCases/auth/SignupUseCase';
import { LoginInput, LoginOutput } from '../dtos/auth/LoginDTO';
import { LoginUseCase } from '../../application/useCases/auth/LoginUseCase';

export class AuthController {
  static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as LoginInput;

    const result = await LoginUseCase.execute({ email, password });

    const response: ApiResponse<LoginOutput> = {
      success: true,
      message: 'User logged in successfully',
      data: result,
    };

    return res.status(200).json(response);
  }

  static async signup(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as SignupInput;

    const result = await SignupUseCase.execute({ email, password });

    const response: ApiResponse<SignupOutput> = {
      success: true,
      message: 'User signed up successfully',
      data: result,
    };

    return res.status(201).json(response);
  }
}
