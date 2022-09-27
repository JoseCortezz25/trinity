import React from "react";
import YoutubeIcon from '../../assets/img/youTube.png'
import WebIcon from '../../assets/img/Web.png'
import ImgBack from '../../assets/img/back-end.jpg'
import ImgFront from '../../assets/img/Front-end.jpg'
import Imgrutes from '../../assets/img/img_rutes.jpg'
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
        <Recomended tittle="Udemy" subtitle="Fransisco" typeSite='sitioweb' />
        <Recomended tittle="YouTube" subtitle="Minudev" typeSite='youtube' />
        <Recomended tittle="YouTube" subtitle="HolaMundo" typeSite='youtube' />
        <Recomended tittle="Platzi" subtitle="Freddy" typeSite='sitioweb' />
        <Recomended tittle="Web" subtitle="Profe Alex" typeSite='sitioweb' />
        <Recomended tittle="Platzi" subtitle="MDN Web Docs" typeSite='youtube' />
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

const Recomended = ({ tittle, subtitle, typeSite }) => (
  <div className="Recomended">
    <div className="Recomended__image">

      {typeSite === 'youtube' ? (
        <img className="img_Online" src={YoutubeIcon} />
      ) : (
        <img className="img_Online" src={WebIcon} />
      )
      }
    </div>
    <div className="Recomended__content">
      <p>{tittle}</p>
      <h2 className="tittle_recomended">{subtitle}</h2>
    </div>
  </div>
);

export default Plataform;
