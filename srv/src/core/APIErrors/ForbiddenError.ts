import { ApiError, ErrorTypes } from './APIError';

class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.FORBIDDEN, message);
  }
}

export default ForbiddenError;
