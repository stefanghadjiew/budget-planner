import ApiResponse from '../APIResponse';
import { StatusCode, ResponseStatus } from '../enums';

class InternalErrorResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.INTERNAL_ERROR, message);
  }
}

export default InternalErrorResponse;
