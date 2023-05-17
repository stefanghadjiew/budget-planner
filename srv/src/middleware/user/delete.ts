import { Request, Response, NextFunction } from 'express';
import { UserModel } from 'db/models';
import { UserInterface } from 'db/interfaces';

const deleteUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<UserInterface | null> => {
  const { email } = req.body;
  try {
    const userToDelete = await UserModel.findOne({ email });
    if (!userToDelete) {
      res
        .status(404)
        .json({ message: `User with e-mail ${email} does not exist!` });
    } else {
      await UserModel.findOneAndDelete({ email });
    }
  } catch (err) {
    next(err);
  }
};

export default deleteUserMiddleware;
