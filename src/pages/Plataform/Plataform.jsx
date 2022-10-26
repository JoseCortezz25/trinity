import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getLearningPaths,
  getListOfRecommendations,
} from "../../services/service";
import { getToken } from "../../services/localStorage";
import YoutubeIcon from "../../assets/images/youTube.png";
import WebIcon from "../../assets/images/Web.png";
import { Loader } from "../../components/Utils";

import "./Plataform.css";

const Plataform = () => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [listOfRecommendations, setListOfRecommendations] = useState([{}]);

  useEffect(() => {
    getLearningPaths(getToken()).then((data) => {
      setLearningPaths(data);
    });
    getListOfRecommendations(getToken()).then((data) => {
      setListOfRecommendations(data);
    });
  }, []);

  return learningPaths && listOfRecommendations ? (
    <main className="Plataform">
      <h2 className="tittleh2">Rutas de aprendizaje</h2>
      <div className="Content_paths">
        {learningPaths?.map((paths) => (
          <CardPath
            image={paths.image}
            title={paths.title}
            key={paths.title}
            description={paths.description}
            link={paths.link}
          />
        ))}
      </div>

      <h2 className="tittleh2">Recursos recomendados</h2>
      <div className="RecomemdedCards">
        {listOfRecommendations?.map((recomended) => (
          <Recomended
            title={recomended.title}
            key={`${recomended.title}${recomended.subtitle}`}
            subtitle={recomended.subtitle}
            typeSite={recomended.typeSite}
            link={recomended.link}
          />
        ))}
      </div>
    </main>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  );
};

const CardPath = ({ title, description, image, link }) => (
  <Link to={link} className="contenedorTargetas">
    <div className="contenedorImage">
      <img src={image} />
      <h2 className="text">{title}</h2>
    </div>
    <p className="textDescription">{description}</p>
  </Link>
);

const Recomended = ({ title, subtitle, typeSite, link }) => (
  <a href={link} className="Recomended" target="_blank" rel="noreferrer">
    <div className="Recomended__image">
      {typeSite === "youtube" ? (
        <img className="img_Online" src={YoutubeIcon} />
      ) : (
        <img className="img_Online" src={WebIcon} />
      )}
    </div>
    <div className="Recomended__content">
      <p>{title}</p>
      <p className="Recomended__content-p">{subtitle}</p>
    </div>
  </a>
);

export default Plataform;
