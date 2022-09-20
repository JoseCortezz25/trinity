import React from "react";
import "./Header.css";
import iconButton from "../../assets/toggleButton.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <header>
      <nav>
        <span className="logo">{"<Trinity />"}</span>
      </nav>
      <nav>
        <button className={`menuBtn`} onClick={toggleMenu}>
          <img src={iconButton} alt="" />
        </button>
        <div className="menuDesktop">
          <a href="#Nosotros">Nosotros</a>
          <a href="#Servicios">Servicios</a>
          <a href="#Ubicacion">Ubicación</a>
        </div>
        <div className={`menuMobile ${isOpen ? "open" : "close"}`}>
          <a onClick={toggleMenu} href="#Nosotros">
            Nosotros
          </a>
          <a onClick={toggleMenu} href="#Servicios">
            Servicios
          </a>
          <a onClick={toggleMenu} href="#Ubicacion">
            Ubicación
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
