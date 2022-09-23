import * as path from 'path';
import * as dotenv from 'dotenv';

export const Environment = dotenv.config({
  path: path.resolve(process.cwd(), 'apps/trinity-back/.env'),
}).parsed;
