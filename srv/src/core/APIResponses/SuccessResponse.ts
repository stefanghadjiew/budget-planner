import ApiResponse from './APIResponse';
import { StatusCode, ResponseStatus } from './enums';

class SuccessResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.SUCCESS, ResponseStatus.SUCCESS, message);
  }
}

export default SuccessResponse;
