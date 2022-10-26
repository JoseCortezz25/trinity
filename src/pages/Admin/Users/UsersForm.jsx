import React, { useEffect, useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { useLocation, useParams } from "react-router-dom";

const UsersForm = () => {
  const location = useLocation();
  const { id } = useParams();
  const [messageGreetings, setMessageGreetings] = useState("");
  // const [typeOfForm, setTypeOfForm] = useState("");
  const [inputs, setInputs] = useState({fullname: "", email: "", password: "", confirmpassword: "", usertype: "", userstate: false})
  const [inputError, setInputError] = useState({error: false, message: ""})


  useEffect(() => {
    if (location.pathname.includes("/añadir")) {
      console.log("add new element");
      // setTypeOfForm('ADD')
      setMessageGreetings("Crear nuevo usuario");
    } else {
      console.log("update new element");
      console.log("email", id);
      // setTypeOfForm('UPDATE')
      setMessageGreetings("Actualizar usuario");
    }

  }, [location]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inputs', inputs);
  
    if (inputs.confirmpassword.toLowerCase() !== inputs.password.toLowerCase()) return setInputError({error: true, message: "Las contraseñas no coinciden."})
    setInputError({error: false, message: ""})

  };

  const typesOfUsers = [
    {
      name: "Administrador",
      value: "ADMIN",
    },
    {
      name: "Usuario",
      value: "USER",
    },
  ];

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={messageGreetings} isHome={false} />
      <form onSubmit={handleSubmit}>
        <div className="groupInputs">
          <label htmlFor="fullname">Nombre</label>
          <input type="text" id="fullname" placeholder="Escribe el nombre del usuario" onChange={(e) => setInputs(prevState => ({...prevState, fullname: e.target.value}))}/>
        </div>

        <div className="groupInputs">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Escribe el email del usuario" onChange={(e) => setInputs(prevState => ({...prevState, email: e.target.value}))}/>
        </div>

        <div className="groupInputs">
          <label htmlFor="password">Contraseña</label>
          <input type="text" id="password" placeholder="Escribe la contraseña del usuario" onChange={(e) => setInputs(prevState => ({...prevState, password: e.target.value}))}/>
        </div>

        <div className="groupInputs">
          <label htmlFor="confirmpassword">Confirmar contraseña</label>
          <input
            id="confirmpassword"
            type="text"
            placeholder="Escribe de nuevo la contraseña del usuario" onChange={(e) => setInputs(prevState => ({...prevState, confirmpassword: e.target.value}))}
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="usertype">Seleccionar tipo de usuario</label>
          <select name="select" id="usertype" onChange={(e) => setInputs(prevState => ({...prevState, usertype: e.target.value}))}>
            {typesOfUsers.map((types) => (
              <option key={types.value} value={types.value}>{types.name}</option>
            ))}
          </select>
        </div>

        <div className="groupInputs">
          <label htmlFor="userstate">Estado del usuario</label>
          <input type="checkbox" name="" id="userstate" value={inputs.userstate} onChange={(e) => setInputs(prevState => ({...prevState, userstate: !inputs.userstate}))}/>
        </div>
        {inputError.error && <p className="ErrorMessage"> {inputError.message}</p>}


        <button type="submit" className="btnStandard btnDark">
          Crear nuevo usuario
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
