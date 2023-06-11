import { Response } from 'express';
import UnauthorizedResponse from '../APIResponses/failure/UnauthorizedResponse';
import AccessTokenFailureResponse from '../APIResponses/failure/AccessTokenFailureResponse';
import GenericFailureResponse from '../APIResponses/failure/GenericFailureResponse';
import InternalErrorResponse from '../APIResponses/failure/InternalErrorResponse';
import ForbiddenResponse from '../APIResponses/failure/ForbiddenResponse';
import NotFoundResponse from '../APIResponses/failure/NotFoundResponse';
import BadRequestResponse from '../APIResponses/failure/BadRequestResponse';
import ConflictResponse from '../APIResponses/failure/ConflictResponse';

export enum ErrorTypes {
  BAD_TOKEN = 'BadTokenError',
  TOKEN_EXPIRED = 'TokenExpiredError',
  UNAUTHORIZED = 'AuthFailureError',
  ACCESS_TOKEN_ERROR = 'AccessTokenError',
  INTERNAL = 'InternalError',
  NOT_FOUND = 'NotFoundError',
  BAD_REQUEST = 'BadRequestError',
  FORBIDDEN = 'ForbiddenError',
  CONFLICT = 'ConflictError',
}

export abstract class ApiError extends Error {
  constructor(
    public type: ErrorTypes,
    public override message: string = 'Error !!!',
  ) {
    super(type);
  }

  public static handle(err: ApiError, res: Response): Response {
    switch (err.type) {
      case ErrorTypes.BAD_TOKEN:
      case ErrorTypes.TOKEN_EXPIRED:
      case ErrorTypes.UNAUTHORIZED:
        return new UnauthorizedResponse(err.message).send(res);
      case ErrorTypes.ACCESS_TOKEN_ERROR:
        return new AccessTokenFailureResponse(err.message).send(res);
      case ErrorTypes.INTERNAL:
        return new InternalErrorResponse(err.message).send(res);
      case ErrorTypes.NOT_FOUND:
        return new NotFoundResponse(err.message).send(res);
      case ErrorTypes.BAD_REQUEST:
        return new BadRequestResponse(err.message).send(res);
      case ErrorTypes.FORBIDDEN:
        return new ForbiddenResponse(err.message).send(res);
      case ErrorTypes.CONFLICT:
        return new ConflictResponse(err.message).send(res);
      default:
        return new GenericFailureResponse(err.message).send(res);
    }
  }
}
