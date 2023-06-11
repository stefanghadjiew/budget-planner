import express, { Request, Response } from 'express';
import validator from '../../helpers/validator';
import accessRoutesSchema from './schema';
import { createUserService, findByEmail } from '../../service/user';
import ConflictResponse from '../../core/APIResponses/failure/ConflictResponse';
import SuccessResponse from '../../core/APIResponses/success/SuccessResponse';
import {
  createResponseMessage,
  responseMessageTypes,
} from '../../core/APIResponses/responseMessages';

const router = express.Router();

router.post(
  '/users/signup',
  validator(accessRoutesSchema.signup),
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user = await findByEmail(email);
    if (user) {
      return new ConflictResponse(
        createResponseMessage(
          responseMessageTypes.conflict.user.CREATION_CONFLICT,
          email,
        ),
      ).send(res, email);
    }
    const createdUser = await createUserService({ name, email, password });
    return new SuccessResponse(
      createResponseMessage(
        responseMessageTypes.success.user.CREATION_SUCCESS,
        email,
      ),
    ).send(res, createdUser);
  },
);

export default router;
