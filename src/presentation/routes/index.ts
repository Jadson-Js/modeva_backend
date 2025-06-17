import { Router } from 'express';
import { userRoutes } from './userRoutes';

const setupRouter = Router();

setupRouter.use('/users', userRoutes);

export { setupRouter };
