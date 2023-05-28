import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../../db/models';
import SuccessResponse from '../../core/APIResponses/success/SuccessResponse';
import FailureResponse from '../../core/APIResponses/failure/NotFoundResponse';
import {
  createResponseMessage,
  responseMessageTypes,
} from '../../core/APIResponses/responseMessages';

const updateUserService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;
  const { updateInfo } = req.body;
  try {
    const userToUpdate = await UserModel.findById(userId);
    if (!userToUpdate) {
      return new FailureResponse(
        createResponseMessage(
          responseMessageTypes.conflict.user.UPDATE_CONFLICT,
          userId,
        ),
      ).send(res);
    }
    const updatedUser = await UserModel.findByIdAndUpdate(userId, {
      ...updateInfo,
    });
    return new SuccessResponse(
      createResponseMessage(
        responseMessageTypes.success.user.UPDATE_SUCCESS,
        userId,
      ),
    ).send(res, updatedUser);
  } catch (e) {
    return next(e);
  }
};

export default updateUserService;
