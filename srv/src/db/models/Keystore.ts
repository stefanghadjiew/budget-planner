import { model, Schema } from 'mongoose';
import { KeystoreInterface } from '../interfaces';

export const KEYSTORE_DOCUMENT_NAME = 'Keystore';
export const KEYSTORE_COLLECTION_NAME = 'keystores';

const schema = new Schema<KeystoreInterface>({
  client: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  primaryKey: {
    type: Schema.Types.String,
    required: true,
    trim: true,
  },
  secondaryKey: {
    type: Schema.Types.String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true,
  },
  updatedAt: {
    type: Schema.Types.Date,
    required: true,
  },
});

export const KeystoreModel = model<KeystoreInterface>(
  KEYSTORE_DOCUMENT_NAME,
  schema,
  KEYSTORE_COLLECTION_NAME,
);
