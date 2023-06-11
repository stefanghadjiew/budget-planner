import ApiResponse from '../APIResponse';
import { StatusCode, ResponseStatus } from '../enums';

class ConflictResponse extends ApiResponse {
  constructor(message: string) {
    super(StatusCode.FAILURE, ResponseStatus.CONFLICT, message);
  }
}

export default ConflictResponse;
