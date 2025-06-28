import { Schema, model, Document } from 'mongoose';
import { User } from '../../../../domain/entities/User';

export interface IUserModel extends User, Document {
  id: string;
}

const UserSchema = new Schema<IUserModel>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'The password must be at least 6 characters long'],
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUserModel>('User', UserSchema);
