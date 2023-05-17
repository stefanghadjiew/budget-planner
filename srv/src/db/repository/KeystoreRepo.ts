import { KeystoreInterface, UserInterface } from '../interfaces';
import { KeystoreModel } from '../models';

export const createKeystore = async (
  client: UserInterface,
  primaryKey: string,
  secondaryKey: string,
): Promise<KeystoreInterface> => {
  const now = new Date();
  const keystore = await KeystoreModel.create({
    client,
    primaryKey,
    secondaryKey,
    createdAt: now,
    updatedAt: now,
  });
  return keystore.toObject();
};

export const test = () => {};
