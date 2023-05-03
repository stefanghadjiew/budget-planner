import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

const serverPort = process.env.PORT || 5001;

app.get('/test', (req, res, next) => {
  res.json('Hello from Budget Planner Server');
});

app.listen(serverPort, () => {
  console.log(`Server listening on PORT: ${serverPort}`);
});
