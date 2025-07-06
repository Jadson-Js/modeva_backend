import dotenv from 'dotenv';
dotenv.config();

export const mongoDbUri = process.env.MONGODB_URI;
export const mongoDbName = process.env.MONGODB_NAME;
