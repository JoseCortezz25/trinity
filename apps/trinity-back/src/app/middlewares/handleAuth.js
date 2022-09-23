import { request } from 'express';
import * as jwt from 'jsonwebtoken';

import { Environment } from 'apps/trinity-back/src/environments/envFile';

export const handleAuth = (req, res, next) => {
  const { headers, method, path } = req;
  const { authorization } = headers;
  const { JWT_PASSWORD } = Environment;
  let token = '';
  let decodedToken = {};
  const pathname = path.substring(1);
  request.pathname = pathname;

  if ((pathname === 'users' && method === 'POST') || pathname === 'login') return next();

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }

  try {
    decodedToken = jwt.verify(token, JWT_PASSWORD);
    // eslint-disable-next-line no-empty
  } catch {}

  if (!token || !decodedToken.id)
    return res.status(401).json({ error: 401, message: 'token missing or invalid' }).end();

  request.decodedToken = decodedToken;

  return next();
};
