import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../hooks/UserContext";
import logoIcon from "../../assets/icons/logo.svg";
import iconButton from "../../assets/icons/toggleButton.svg";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useContext(UserContext);

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

      <nav className="Header__desktop">
        {location.pathname.includes("/aprender") ||
        location.pathname.includes("/admin") ? (
          <div className="PlatformMenu">
            {user.rol === "ADMIN" && (
              <>
                <Link to="/admin">Dashboard</Link>
                <Link to="/aprender">Plataforma</Link>
              </>
            )}
            <button className="btnLogout" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div className="InformativePageMenu">
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
        )}
      </nav>

      <button className={`btnMenu`} onClick={toggleMenu}>
        <img src={iconButton} alt="" />
      </button>
      <nav className={`Header__mobile ${isOpen ? "open" : "close"}`}>
        {location.pathname.includes("/aprender") ||
        location.pathname.includes("/admin") ? (
          <div className="PlatformMenu">
            {user.rol === "ADMIN" && (
              <>
                <Link to="/admin">Dashboard</Link>
                <Link to="/aprender">Plataforma</Link>
              </>
            )}
            <button className="btnLogout" onClick={logout}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <div className="InformativePageMenu">
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
        )}
      </nav>
    </header>
  );
};

export default Header;
