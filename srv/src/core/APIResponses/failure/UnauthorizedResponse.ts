import ApiResponse from '../APIResponse';
import { StatusCode, ResponseStatus } from '../enums';

class UnauthorizedResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.UNAUTHORIZED, message);
  }
}

export default UnauthorizedResponse;
