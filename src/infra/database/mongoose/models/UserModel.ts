import { Schema, model, Document } from 'mongoose';
import { User } from '../../../../domain/entities/User';

export interface IUserDocument extends User, Document {
  id: string;
}

const UserSchema = new Schema<IUserDocument>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUserDocument>('User', UserSchema);
