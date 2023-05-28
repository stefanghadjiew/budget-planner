import { ApiError, ErrorTypes } from './APIError';

class TokenExpiredError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.TOKEN_EXPIRED, message);
  }
}

export default TokenExpiredError;
