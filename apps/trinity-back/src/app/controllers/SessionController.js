import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import { User } from 'apps/trinity-back/src/app/models/User';
import { Environment } from 'apps/trinity-back/src/environments/envFile';

class SessionController {
  login = async (req, res, next) => {
    try {
      const { body } = req;
      const { username, password } = body;
      const { JWT_PASSWORD } = Environment;
      const user = await User.findOne({ username });
      const passwordCorrect =
        user === null ? false : await bcrypt.compare(password, user.passwordHash);

      if (!(user && passwordCorrect))
        return res.status(401).json({ error: 'invalid user or password' }).end();

      const userForToken = { id: user._id, username: user.username };
      const token = jwt.sign(userForToken, JWT_PASSWORD);

      return res
        .status(200)
        .json({ ...userForToken, token })
        .end();
    } catch (e) {
      next(e);
    }
  };

  sigOut = async (req, res, next) => {
    try {
      const { headers } = req;
      const { authorization } = headers;
      console.log('missing complete');
      console.log('need broke or remove the token created from user');
    } catch (e) {
      next(e);
    }
  };
}

export const sessionController = new SessionController();
