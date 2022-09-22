import { useState } from 'react';
import { Link } from 'react-router-dom';

import iconButton from 'apps/trinity-front/src/assets/toggleButton.svg';

import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <header>
      <nav>
        <Link to="/">
          <span className="logo">{'<Trinity />'}</span>
        </Link>
      </nav>
      <nav>
        <button className={`menuBtn`} onClick={toggleMenu}>
          <img src={iconButton} alt="" />
        </button>
        <div className="menuDesktop">
          <Link to="/#Nosotros">Nosotros</Link>
          <Link to="/#Servicios">Servicios</Link>
          <Link to="/#Ubicacion">Ubicación</Link>
        </div>
        <div className={`menuMobile ${isOpen ? 'open' : 'close'}`}>
          <Link onClick={toggleMenu} to="/#Nosotros">
            Nosotros
          </Link>
          <Link onClick={toggleMenu} to="/#Servicios">
            Servicios
          </Link>
          <Link onClick={toggleMenu} to="/#Ubicacion">
            Ubicación
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
