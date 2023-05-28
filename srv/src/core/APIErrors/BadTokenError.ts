import { ApiError, ErrorTypes } from './APIError';

class BadTokenError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.BAD_TOKEN, message);
  }
}

export default BadTokenError;
