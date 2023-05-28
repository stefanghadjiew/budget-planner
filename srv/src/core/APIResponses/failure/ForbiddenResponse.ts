import ApiResponse from '../APIResponse';
import { StatusCode, ResponseStatus } from '../enums';

class ForbiddenResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.FORBIDDEN, message);
  }
}

export default ForbiddenResponse;
