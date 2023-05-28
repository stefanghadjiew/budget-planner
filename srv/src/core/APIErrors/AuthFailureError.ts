import { ApiError, ErrorTypes } from './APIError';

class AuthFailureError extends ApiError {
  constructor(message: string) {
    super(ErrorTypes.UNAUTHORIZED, message);
  }
}

export default AuthFailureError;
