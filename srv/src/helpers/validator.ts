import joi from 'joi';
import { Request, Response, NextFunction } from 'express';
/* import Logger from '../core/Logger';
import BadRequestError from '../core/APIErrors/BadRequestError'; */

export enum ValidationSource {
  BODY = 'body',
  HEADER = 'header',
  QUERY = 'query',
  PARAMS = 'params',
}

export default function validator(
  schema: joi.AnySchema,
  source: ValidationSource = ValidationSource.BODY,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate(req[source]);
      if (!error) return next();
      console.log(error);
      res.status(500).json(error);
    } catch (err) {
      return next(err);
    }
    return null;
  };
}
