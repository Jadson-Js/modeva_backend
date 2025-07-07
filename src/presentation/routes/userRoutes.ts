import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { asyncHandler } from '../middlewares/asyncHandler';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validate } from '../middlewares/validate';
import {
  createUserSchema,
  findUserByEmailSchema,
} from '../middlewares/userSchema';

const userRoutes = Router();

userRoutes.get('/', authMiddleware, asyncHandler(UserController.findAll));

userRoutes.get(
  '/email/:email',
  authMiddleware,
  validate(findUserByEmailSchema),
  asyncHandler(UserController.findByEmail)
);

userRoutes.post(
  '/',
  validate(createUserSchema),
  asyncHandler(UserController.create)
);

export { userRoutes };
