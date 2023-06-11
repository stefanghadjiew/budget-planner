/* eslint-disable no-param-reassign */
import { KeystoreInterface, UserInterface } from '../interfaces';
import { UserModel } from '../models';
import { createKeystore } from './KeystoreRepo';

// eslint-disable-next-line import/prefer-default-export
export const createUserDBLayer = async (
  user: UserInterface,
  accessTokenKey: string,
  refreshTokenKey: string,
): Promise<{ user: UserInterface; keystore: KeystoreInterface }> => {
  const now = new Date();
  user.createdAt = now;
  user.updatedAt = now;
  const createdUser = await UserModel.create(user);
  const keystore = await createKeystore(
    createdUser,
    accessTokenKey,
    refreshTokenKey,
  );
  return {
    user: createdUser,
    keystore,
  };
};
