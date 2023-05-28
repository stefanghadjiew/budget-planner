import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { generateKeys } from '../utils';
import SuccessResponse from '../../core/APIResponses/success/SuccessResponse';
import {
  createResponseMessage,
  responseMessageTypes,
} from '../../core/APIResponses/responseMessages';
import { UserInterface } from '../../db/interfaces';
import { createUserDBLayer } from '../../db/repository';

const createUserService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;
  const { accessTokenKey, refreshTokenKey } = generateKeys();
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const createdUser = await createUserDBLayer(
      { name, email, password: passwordHash } as UserInterface,
      accessTokenKey,
      refreshTokenKey,
    );
    return new SuccessResponse(
      createResponseMessage(
        responseMessageTypes.success.user.CREATION_SUCCESS,
        email,
      ),
    ).send(res, createdUser);
  } catch (e) {
    return next(e);
  }
};

export default createUserService;
