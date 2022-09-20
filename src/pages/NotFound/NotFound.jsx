import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/NotFound.png";

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound__info">
        <h2>Hmm. 🤔</h2>
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
