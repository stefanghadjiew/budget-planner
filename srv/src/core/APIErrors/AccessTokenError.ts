import { ApiError, ErrorTypes } from './APIError';

class AccessTokenError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.ACCESS_TOKEN_ERROR, message);
  }
}

export default AccessTokenError;
