import dotenv from 'dotenv';
dotenv.config();

export const mongoDbUri = process.env.MONGODB_URI;
export const mongoDbName = process.env.MONGODB_NAME;

export const JWTSecretKey = process.env.SECRET_KEY || 'default_secret_key';
export const JWTExpiresIn = process.env.JWT_EXPIRES_IN || '1h';

export const HashSaltRounds = parseInt(process.env.SALT_ROUNDS || '10', 10);
