import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../../db/models';
import SuccessResponse from '../../core/APIResponses/SuccessResponse';
import FailureResponse from '../../core/APIResponses/FailureResponse';
import {
  createResponseMessage,
  responseMessageTypes,
} from '../../core/APIResponses/responseMessages';

const deleteUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  try {
    const userToDelete = await UserModel.findById(userId);
    if (!userToDelete) {
      return new FailureResponse(
        createResponseMessage(
          responseMessageTypes.user.DELETION_CONFLICT,
          userId,
        ),
      ).send(res);
    }
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    return new SuccessResponse(
      createResponseMessage(responseMessageTypes.user.DELETION_SUCCESS, userId),
    ).send(res, deletedUser);
  } catch (err) {
    return next(err);
  }
};

export default deleteUserMiddleware;
