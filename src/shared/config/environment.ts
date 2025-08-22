import dotenv from 'dotenv';
dotenv.config();

export const mongoDbUri = process.env.MONGODB_URI;
export const mongoDbName = process.env.MONGODB_NAME;

export const secretKey = process.env.SECRET_KEY || 'default_secret_key';
