import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="Register">
      <div className="Register__form">
        <h2>Crear una nueva cuenta</h2>
        <p>Bienvenido a la familia. Ingresa los datos para crear la cuenta.</p>

        <form action="">
          <div className="InputsGroup">
            <label htmlFor="fullname">Nombre</label>
            <input
              type="text"
              name="fullname"
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="InputsGroup">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Escribe tu correo" />
          </div>
          <div className="InputsGroup">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Escribe tu contraseña"
            />
          </div>
          <div className="InputsGroup">
            <label htmlFor="confirmpassword">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Escribe de nuevo tu contraseña"
            />
          </div>
          <button type="button" className="btnStandard btnDark">
            Crear cuenta
          </button>
          <p className="MessageForm">¿Ya tienes cuenta? <Link to="/formulario/login">Inicia sesión ahora</Link></p>
        </form>
      </div>
      <div className="Register__image">
        <img src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      </div>
    </div>
  );
};

export default Register;
