import { AppError } from './AppError';

export class ForbiddenError extends AppError {
  constructor() {
    super('User is not allowed to perform this action', 403);
  }
}
