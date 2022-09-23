import { Environment } from 'apps/trinity-back/src/environments/envFile';

const { BASE_URL_PRODUCTION, BASE_URL_DEVELOPMENT, NODE_ENV } = Environment;

export const baseUrl = NODE_ENV === 'development' ? BASE_URL_DEVELOPMENT : BASE_URL_PRODUCTION;
