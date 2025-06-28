import { AppError } from './AppError';

export class InternalServerError extends AppError {
  constructor() {
    super(`Something went wrong on the server`, 500);
  }
}
