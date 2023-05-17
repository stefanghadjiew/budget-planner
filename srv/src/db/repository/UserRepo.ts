/* eslint-disable no-param-reassign */
import { KeystoreInterface, UserInterface } from '../interfaces';
import { UserModel } from '../models';
import { createKeystore } from './KeystoreRepo';

export const createUser = async (
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

export const userExists = async (): Promise<void> => undefined;

/* export const findUserById = async (params:type) => {
};

export const findUserByEmail = async (params:type) => {
};

export const updateUserCredentials = async (params:type) => {
}; */
