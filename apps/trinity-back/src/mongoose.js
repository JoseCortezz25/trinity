import * as mongoose from 'mongoose';

import { Environment } from './environments/envFile';

const { USER_MONGO, PASS_MONGO } = Environment;
const DB_URI = `mongodb+srv://${USER_MONGO}:${PASS_MONGO}@trinity.pxefqkg.mongodb.net/?retryWrites=true&w=majority`;

export const initMongoConnect = () =>
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDB is connected'))
    .catch((err) => console.error("hasn't can connect to mongodb", { tracer: err }));
