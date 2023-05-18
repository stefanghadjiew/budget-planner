import ApiResponse from './APIResponse';
import { StatusCode, ResponseStatus } from './enums';

class FailureResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.CONFLICT, message);
  }
}

export default FailureResponse;
