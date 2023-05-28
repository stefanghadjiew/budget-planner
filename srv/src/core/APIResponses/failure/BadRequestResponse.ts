import ApiResponse from '../APIResponse';
import { StatusCode, ResponseStatus } from '../enums';

class BadRequestResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.BAD_REQUEST, message);
  }
}

export default BadRequestResponse;
