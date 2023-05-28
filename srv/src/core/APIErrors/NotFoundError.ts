import { ApiError, ErrorTypes } from './APIError';

class NotFoundError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.NOT_FOUND, message);
  }
}

export default NotFoundError;
