import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
/* import dotenv from 'dotenv'; */
import compression from 'compression';

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

/* app.use('/api/v1', routes); */

app.get('/test', (req, res) => {
  const reqHeaders = req.headers;
  res.status(200).json({
    msg: 'Hello from Budget Planner Server',
    headers: reqHeaders,
  });
});

app.listen(serverPort, () => {
  console.log(`Server listening on PORT: ${serverPort}`);
});
