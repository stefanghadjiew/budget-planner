import bcrypt from 'bcrypt';
import { generateKeys } from '../utils';
import { UserInterface } from '../../db/interfaces';
import { createUserDBLayer } from '../../db/repository';

type UserInfo = {
  name: string;
  email: string;
  password: string;
};

// eslint-disable-next-line import/prefer-default-export
export const createUserService = async (userInfo: UserInfo) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = userInfo;
  const { accessTokenKey, refreshTokenKey } = generateKeys();
  const passwordHash = await bcrypt.hash(password, 10);

  const createdUser = await createUserDBLayer(
    { name, email, password: passwordHash } as UserInterface,
    accessTokenKey,
    refreshTokenKey,
  );
  return createdUser;
};
