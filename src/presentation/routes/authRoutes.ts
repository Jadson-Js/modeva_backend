import { Router } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validate } from '../middlewares/validate';
import { createUserSchema } from '../middlewares/userSchema';
import { AuthController } from '../controllers/AuthController';

const authRoutes = Router();

authRoutes.post(
  '/signup',
  validate(createUserSchema),
  asyncHandler(AuthController.signup)
);

export { authRoutes };
