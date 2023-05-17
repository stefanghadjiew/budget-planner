import { Request, Response, NextFunction } from 'express';
import * as crypto from 'crypto';
import bcrypt from 'bcrypt';
import SuccessResponse from '../../core/APIResponses/SuccessResponse';
import {
  createResponseMessage,
  responseMessageTypes,
} from '../../core/APIResponses/responseMessages';
import { UserInterface } from '../../db/interfaces';
import { createUser } from '../../db/repository';

const createUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;
  const accessTokenKey = crypto.randomBytes(64).toString('hex');
  const refreshTokenKey = crypto.randomBytes(64).toString('hex');
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const createdUser = await createUser(
      { name, email, password: passwordHash } as UserInterface,
      accessTokenKey,
      refreshTokenKey,
    );
    return new SuccessResponse(
      createResponseMessage(responseMessageTypes.USER, email),
    ).send(res, createdUser);
  } catch (e) {
    return next(e);
  }
};

export default createUserMiddleware;
