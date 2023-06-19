import express from 'express';
import signup from './signup';

// eslint-disable-next-line import/prefer-default-export
const accessRouter = express.Router();
accessRouter.use('/signup', signup);
/* accessRouter.use('/login', login);
accessRouter.use('/logout', logout); */

export default accessRouter;
