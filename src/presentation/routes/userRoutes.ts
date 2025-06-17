import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { asyncHandler } from '../../shared/utils/asyncHandler';

const userRoutes = Router();

userRoutes.get('/', asyncHandler(UserController.findAll));

export { userRoutes };
