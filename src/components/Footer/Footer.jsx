import { LinkedinIcon, FacebookIcon, TwitterIcon, logoTrinityNegro } from '../../assets'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav__item">
          <div className="logo">
            <img src={logoTrinityNegro} alt="" />
          </div>
          <p>
            <b>Teléfono:</b> (+57) 314 3478428
          </p>
          <p>
            <b>Correo de gerencia:</b> gerencia@trinityfs.com.co
          </p>
          <p>
            <b>Auxiliar administrativo:</b> personal@trinityfs.com.co
          </p>
          <p>
            <b>Localización:</b> Neiva, Huila, Colombia
          </p>
        </div>
        <div className="nav__item">
          <b>Servicios</b>
          <ul className="ListOfService">
            <li>
              Procesos de acompañamiento y asesoría personalizada para
              desarrolladores.
            </li>
            <li>
              Diseño y Desarrollo de plataformas web y móviles a la medida.
            </li>
            <li>
              <p>Servicio in-House, consultoría y formación.</p>
            </li>
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
  )
}

export default Footer
