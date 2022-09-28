import React from "react";
import YoutubeIcon from "../../assets/images/youTube.png";
import WebIcon from "../../assets/images/Web.png";
import ImgBack from "../../assets/images/back-end.jpg";
import ImgFront from "../../assets/images/Front-end.jpg";
import Imgrutes from "../../assets/images/img_rutes.jpg";
import { Link } from "react-router-dom";
import "./Plataform.css";

const Plataform = () => {
  return (
    <main className="Plataform">
      <h2 className="tittleh2">Learning Paths</h2>
      <div className="Content_paths">
        <CardPath
          image={ImgFront}
          title="Front-End Rute"
          description="Hola dev, aquí encontrarás la ruta sugerida por Trinity FS si deseas convertirte en desarrollador Front-End <Disfruta del proceso />"
          link="/aprender/frontend"
        />
        <CardPath
          image={ImgBack}
          title="Back-End Rute"
          description="Hola dev, aquí encontrarás la ruta sugerida por Trinity FS si deseas convertirte en desarrollador Back-End <Disfruta del proceso />"
          link="/aprender/backend"
        />
        <CardPath
          image={Imgrutes}
          title="Complements"
          description="Hola dev, Aquí encontrarás temas que te puede ayudar de complemento  <Disfruta del proceso />"
          link="/aprender/complementos"
        />
      </div>

      <h2 className="tittleh2">Recomended Resources</h2>
      <div className="RecomemdedCards">
        <Recomended
          tittle="Udemy"
          subtitle="Curso de Front-end Developer"
          typeSite="sitioweb"
          link="https://www.udemy.com/course/curso-de-front-end-developer/"
        />
        <Recomended
          tittle="YouTube"
          subtitle="Minudev"
          typeSite="youtube"
          link="https://www.youtube.com/channel/UC8LeXCWOalN8SxlrPcG-PaQ"
        />
        <Recomended
          tittle="YouTube"
          subtitle="HolaMundo"
          typeSite="youtube"
          link="https://www.youtube.com/c/HolaMundoDev"
        />
        <Recomended
          tittle="Platzi"
          subtitle="Curso Práctico de Front-end"
          typeSite="sitioweb"
          link="https://platzi.com/cursos/frontend-developer-practico/"
        />
        <Recomended tittle="Web" subtitle="Profe Alex" typeSite="sitioweb" />
        <Recomended
          tittle="Platzi"
          subtitle="MDN Web Docs"
          typeSite="youtube"
        />
      </div>
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

const Recomended = ({ tittle, subtitle, typeSite, link }) => (
  <a href={link} className="Recomended" target="_blank" rel="noreferrer">
    <div className="Recomended__image">
      {typeSite === "youtube" ? (
        <img className="img_Online" src={YoutubeIcon} />
      ) : (
        <img className="img_Online" src={WebIcon} />
      )}
    </div>
    <div className="Recomended__content">
      <p>{tittle}</p>
      <p className="Recomended__content-p">{subtitle}</p>
    </div>
  </a>
);

export default Plataform;
