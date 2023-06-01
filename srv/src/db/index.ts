import mongoose from 'mongoose';
import Logger from '../core/Logger';
import 'dotenv/config';
import {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_COLLECITON_NAME,
} from '../../config';

const dbOptions = {
  /*  autoIndex: true, */
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 60000,
  socketTimeoutMS: 45000,
};

const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_CLUSTER}/${MONGO_COLLECITON_NAME}?retryWrites=true&w=majority`,
      dbOptions,
    );

    Logger.info('Succesfully connected to Mongo Atlas');
  } catch (e) {
    Logger.error(`Could not connect to Mongo Atlas! Reason:${e}`);
  }
};

connectToDB();
