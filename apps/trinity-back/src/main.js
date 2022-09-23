import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

import { initMongoConnect } from 'apps/trinity-back/src/mongoose';

import { handleErrors } from 'apps/trinity-back/src/app/middlewares/handleErrors';
import { handleNotFound } from 'apps/trinity-back/src/app/middlewares/handleNotFound';
import ApiRouter from 'apps/trinity-back/src/app/routes/index.routes';

// Initializer
const app = express();

// Settings
const port = process.env.port || 3100;

dotenv.config({ path: path.resolve(process.cwd(), 'apps/trinity-back/.env') });
// console.log(result);
initMongoConnect();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// initial path: /
app.get('/', (_, res) => {
  res.status(200).send('<h1>Hello world!</h1>').end();
});

// path: /api
app.use('/api', ApiRouter);

// handle the url if this hasn't exist
app.use(handleNotFound);

// handle errors
app.use(handleErrors);

// Starting server
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
