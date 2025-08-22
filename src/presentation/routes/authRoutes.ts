import { Router } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler';
import { validate } from '../middlewares/validate';
import { loginUserSchema, signupUserSchema } from '../middlewares/authSchema';
import { AuthController } from '../controllers/AuthController';

const authRoutes = Router();

authRoutes.post(
  '/login',
  validate(loginUserSchema),
  asyncHandler(AuthController.login)
);

authRoutes.post(
  '/signup',
  validate(signupUserSchema),
  asyncHandler(AuthController.signup)
);

export { authRoutes };
