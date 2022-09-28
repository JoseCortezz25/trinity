import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login__form">
        <h2>¡Hola de nuevo!</h2>
        <p>Es un gusto volver a verte. Ingresa tus datos.</p>
        <form action="">
          <div className="InputsGroup">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Escribe tu correo" />
          </div>
          <div className="InputsGroup">
            <label htmlFor="password">Contraseña</label>
            <input
              type="text"
              name="password"
              placeholder="Escribe tu contraseña"
            />
          </div>
          <button type="button" className="btnStandard btnDark">
            Iniciar Sesión
          </button>
          <p className="MessageForm">¿No tienes cuenta? <Link to="/formulario/register">Creala ahora mismo</Link></p>
        </form>
      </div>
      <div className="Login__image">
        <img src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
      </div>
    </div>
  );
};

export default Login;
