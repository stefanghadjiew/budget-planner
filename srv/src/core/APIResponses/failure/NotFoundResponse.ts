import ApiResponse from '../APIResponse';
import { StatusCode, ResponseStatus } from '../enums';

class NotFoundResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.NOT_FOUND, message);
  }
}

export default NotFoundResponse;
