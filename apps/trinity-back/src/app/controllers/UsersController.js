import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import { PrimaryController } from './PrimaryController';
import { User } from 'apps/trinity-back/src/app/models/User';
import { Environment } from 'apps/trinity-back/src/environments/envFile';

class UsersController extends PrimaryController {
  constructor() {
    super(User);
  }

  create = async (req, res, next) => {
    try {
      const { body } = req;
      const { username, email, password, rol } = body;
      const { JWT_PASSWORD } = Environment;
      const userValidateUsername = await User.findOne({ username });
      const message = `this username already exist`;

      if (userValidateUsername) return res.status(409).json({ error: 409, message }).end();

      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);
      const userSchema = {
        username,
        email,
        rol,
      };
      const user = new User({ ...userSchema, passwordHash });
      const token = jwt.sign({ id: user.id, userSchema }, JWT_PASSWORD);

      await user.save();
      return res
        .status(201)
        .json({ ...userSchema, token })
        .end();
    } catch (e) {
      next(e);
    }
  };
}

export const userController = new UsersController();
