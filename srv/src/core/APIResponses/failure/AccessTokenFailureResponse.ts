import ApiResponse from '../APIResponse';
import { StatusCode, ResponseStatus } from '../enums';

class AccessTokenFailureResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.INVALID_TOKEN, ResponseStatus.UNAUTHORIZED, message);
  }
}

export default AccessTokenFailureResponse;
