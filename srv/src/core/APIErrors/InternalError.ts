import { ApiError, ErrorTypes } from './APIError';

class InternalError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.INTERNAL, message);
  }
}

export default InternalError;
