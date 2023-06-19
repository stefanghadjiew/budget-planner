/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable newline-per-chained-call */
import joi from 'joi';

const accessRoutesSchema = {
  signup: joi.object().keys({
    name: joi.string().alphanum().min(1).max(30).required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'bg'] } })
      .required(),
    password: joi
      .string()
      /* .pattern(/'^[a-zA-Z0-9]{3,30}$'/) */
      .min(8)
      .required(),
    repeatedPassword: joi.ref('password'),
  }),
  login: joi.object().keys({
    email: joi.string().required().email(),
    password: joi.string().required().min(8).max(30),
  }),
  refreshToken: joi.object().keys({
    refreshToken: joi.string().required().min(1),
  }),
  auth: joi.object().keys({
    authorization: () =>
      joi.string().custom((value: string, helpers) => {
        if (!value.startsWith('Bearer ')) return helpers.error('any.invalid');
        if (!value.split(' ')[1]) return helpers.error('any.invalid');
        return value;
      }, 'Authorization Header Validation'),
  }),
};

export default accessRoutesSchema;
