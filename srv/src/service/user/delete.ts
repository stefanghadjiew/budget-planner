import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../../db/models';
import SuccessResponse from '../../core/APIResponses/success/SuccessResponse';

import {
  createResponseMessage,
  responseMessageTypes,
} from '../../core/APIResponses/responseMessages';
import NotFoundError from '../../core/APIErrors/NotFoundError';

// eslint-disable-next-line import/prefer-default-export
export const deleteUserService = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  const { userId } = req.params;
  try {
    const userToDelete = await UserModel.findById(userId);
    if (!userToDelete) {
      throw new NotFoundError(
        createResponseMessage(
          responseMessageTypes.failure.user.DELETION_ERROR,
          userId,
        ),
      );
    }
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    return new SuccessResponse(
      createResponseMessage(
        responseMessageTypes.success.user.DELETION_SUCCESS,
        userId,
      ),
    ).send(res, deletedUser);
  } catch (err) {
    return next(err);
  }
};
