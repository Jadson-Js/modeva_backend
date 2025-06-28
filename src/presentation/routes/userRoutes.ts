import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { asyncHandler } from '../../shared/utils/asyncHandler';
import { authMiddleware } from '../middlewares/authMiddleware';

const userRoutes = Router();

userRoutes.get('/', authMiddleware, asyncHandler(UserController.findAll));

userRoutes.post('/', asyncHandler(UserController.create));

export { userRoutes };
