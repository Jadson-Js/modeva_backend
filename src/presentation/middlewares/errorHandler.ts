import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../shared/errors/AppError';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  if (error instanceof AppError) {
    // Adicione 'return' aqui para finalizar a execução
    return res.status(error.statusCode).json({
      success: false,
      message: error.name,
      errors: [error.message],
    });
  }

  // Opcional mas recomendado: Logar o erro inesperado no console
  console.error(error);

  // Este bloco só será executado se o 'if' acima for falso
  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    errors: ['Something went wrong!'],
  });
}
