import { Router } from 'express';
import { userRoutes } from './userRoutes';
import { authRoutes } from './authRoutes';

const setupRouter = Router();

setupRouter.use('/users', userRoutes);
setupRouter.use('/auth', authRoutes);

export { setupRouter };
