import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav__item">
          <div className="logo">
            <span>{"<Trinity />"}</span>
          </div>
          <p>
            <b>Teléfono:</b>
            ---- ------ -----
          </p>
          <p>
            <b>Correo electrónico:</b> correo@correo.com
          </p>
          <p>
            <b>Localización:</b> Neiva, Huila, Colombia
          </p>
        </div>
        <div className="nav__item">
          <b>Servicios</b>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div className="nav__item">
          <b>Nuestras redes sociales</b>
          <p>
            Únete a nosotros en las redes sociales para recibir las últimas
            noticias y actualizaciones.
          </p>
        </div>
      </nav>
      <nav>
        <p>© 2022. Todos los derechos reservados.</p>
      </nav>
    </footer>
  );
};

export default Footer;
