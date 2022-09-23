import { Router } from 'express';

import { userRouter } from './users.routes';
import { handleAuth } from 'apps/trinity-back/src/app/middlewares/handleAuth';

const router = Router();
const { sessionController } = require('../controllers/SessionController');

router.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello world' }).end();
});

router.use(handleAuth);

// session || login route
router.post('/login', sessionController.login);

router.use('/users', userRouter);

export default router;
