import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../hooks/UserContext";
import logoIcon from "../../assets/icons/logo.svg";
import iconButton from "../../assets/icons/toggleButton.svg";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { logout } = useContext(UserContext);
  
  const toggleMenu = (e) => {
    if (e.nativeEvent.target.hash !== undefined) {
      document
        .getElementById(
          e.nativeEvent.target.hash?.slice(3, e.nativeEvent.target.hash.length)
        )
        .scrollIntoView();
    }
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <span className="logo">
            <img src={logoIcon} alt="" />
          </span>
        </Link>
      </nav>
      {location.pathname.includes("/aprender") ? (
        <nav>
          <button className="btnLogout" onClick={logout}>
            Cerrar Sesión
          </button>
        </nav>
      ) : (
        <nav>
          <button className={`menuBtn`} onClick={toggleMenu}>
            <img src={iconButton} alt="" />
          </button>
          <div className="menuDesktop">
            <Link
              to="/#Nosotros"
              onClick={() =>
                document.getElementById("Nosotros").scrollIntoView()
              }
            >
              Nosotros
            </Link>
            <Link
              to="/#Servicios"
              onClick={() =>
                document.getElementById("Servicios").scrollIntoView()
              }
            >
              Servicios
            </Link>
            <Link
              to="/#Ubicacion"
              onClick={() =>
                document.getElementById("Ubicacion").scrollIntoView()
              }
            >
              Ubicación
            </Link>
          </div>
          <div className={`menuMobile ${isOpen ? "open" : "close"}`}>
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
      )}
    </header>
  );
};

export default Header;
