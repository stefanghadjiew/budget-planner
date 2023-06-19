import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
/* import dotenv from 'dotenv'; */
import './db';
import compression from 'compression';
import Logger from './core/Logger';
import updateUserService from './service/user/update';
import accessRouter from './routes/access';

const app = express();

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

const serverPort = process.env.PORT || 5001;

/* app.use('/v1/api', routes); */
/* app.use('/v1/api', routes); */
/* app.use('/v1/api', routes); */
app.get('/healthcheck', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Server up and running!' });
});
/* app.post('/users/login', loginUserMiddleware); */
app.use('/v1/api/access', accessRouter);

/* app.post('/users/:userId/delete', deleteUserService); */
app.put('/users/:userId/update', updateUserService);

app.listen(serverPort, () => {
  Logger.info(`Server listening on PORT: ${serverPort}`);
});
