import { model, Schema } from 'mongoose';
import { UserInterface } from '../interfaces';

export const USER_DOCUMENT_NAME = 'User';
export const USER_COLLECTION_NAME = 'users';

const schema = new Schema<UserInterface>({
  name: {
    type: Schema.Types.String,
    trim: true,
    maxlength: 200,
  },
  email: {
    type: Schema.Types.String,
    unique: true,
    trim: true,
  },
  password: {
    type: Schema.Types.String,
    select: false,
  },
  profilePictureUrl: {
    type: Schema.Types.String,
    trim: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
    select: false,
  },
  updatedAt: {
    type: Schema.Types.Date,
    required: true,
    select: false,
  },
});

export const UserModel = model<UserInterface>(
  USER_DOCUMENT_NAME,
  schema,
  USER_COLLECTION_NAME,
);
