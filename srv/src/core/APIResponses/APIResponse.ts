import { Response } from 'express';
import { ResponseStatus, StatusCode } from './enums';

abstract class ApiResponse {
  constructor(
    protected statusCode: StatusCode,
    protected status: ResponseStatus,
    protected message: string,
  ) {}

  public send<T>(res: Response, response?: T): Response {
    return res.status(this.status).json({ ...this, response });
  }
}

export default ApiResponse;
