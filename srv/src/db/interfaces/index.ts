import { Types } from 'mongoose';

export interface UserInterface {
  _id: Types.ObjectId;
  name?: string;
  email?: string;
  profilePictureUrl?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface KeystoreInterface {
  _id: Types.ObjectId;
  client: UserInterface;
  primaryKey: string;
  secondaryKey: string;
  createdAt?: Date;
  updatedAt?: Date;
}
