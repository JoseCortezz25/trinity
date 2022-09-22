import { Link } from 'react-router-dom';

import notFoundImage from 'apps/trinity-front/src/assets/NotFound.png';

import './NotFound.css';

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound__info">
        <h2>
          Hmm.{' '}
          <span role="img" aria-label="emoji">
            🤔
          </span>
        </h2>
        <p>
          Parece que estás perdido en un agujero negro perpetuo. Permítanos
          ayudarlo a guiarlo y llevarlo de regreso a casa.
        </p>
        <Link to="/">
          <button className="btnNormal">Regresar a casa</button>
        </Link>
      </div>
      <div className="NotFound__image">
        <img src={notFoundImage} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
