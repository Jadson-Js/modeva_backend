import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor(private readonly entityName: string) {
    super(`The ${entityName} was not found`, 404);
  }
}
