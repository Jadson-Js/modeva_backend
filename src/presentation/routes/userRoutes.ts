import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { asyncHandler } from '../../shared/utils/asyncHandler';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validate } from '../middlewares/validate';
import { createUserSchema } from '../middlewares/userSchema';

const userRoutes = Router();

userRoutes.get('/', authMiddleware, asyncHandler(UserController.findAll));

userRoutes.post(
  '/',
  validate(createUserSchema),
  asyncHandler(UserController.create)
);

export { userRoutes };
