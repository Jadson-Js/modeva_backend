import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { setupRouter } from './presentation/routes/index';
import { errorHandler } from './presentation/middlewares/errorHandler';

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', setupRouter);
app.use(errorHandler);

export { app };
