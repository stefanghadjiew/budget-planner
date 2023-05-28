import { ApiError, ErrorTypes } from './APIError';

class BadRequestError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.BAD_REQUEST, message);
  }
}

export default BadRequestError;
