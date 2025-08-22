import { Request, Response } from 'express';
import { ApiResponse } from '../dtos/IApiResponse';
import { SignupInput, SignupOutput } from '../dtos/auth/SignupDTO';
import { SignupUseCase } from '../../application/useCases/auth/SignupUseCase';

export class AuthController {
  static async signup(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as SignupInput;

    const user = await SignupUseCase.execute({ email, password });

    const response: ApiResponse<SignupOutput> = {
      success: true,
      message: 'User signed up successfully',
      data: user,
    };

    return res.status(201).json(response);
  }
}
