import { UserModel } from '../../db/models/User';

// eslint-disable-next-line import/prefer-default-export
export const findByEmail = async (email: string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  UserModel.findOne({ email });
