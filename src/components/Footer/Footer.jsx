import React from "react";
import LinkedinIcon from "../../assets/icons/LinkedinIcon.svg";
import FacebookIcon from "../../assets/icons/FacebookIcon.svg";
import TwitterIcon from "../../assets/icons/TwitterIcon.svg";
import logoIcon from "../../assets/icons/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav__item">
          <div className="logo">
            <img src={logoIcon} alt="" />
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
          <ul className="ListOfService">
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

          <ul className="ListOfSocialMedia">
            <li>
              <img src={FacebookIcon} alt="" />
            </li>
            <li>
              <img src={TwitterIcon} alt="" />
            </li>
            <li>
              <img src={LinkedinIcon} alt="" />
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <p>© 2022. Todos los derechos reservados.</p>
      </nav>
    </footer>
  );
};

export default Footer;
