import React, { useEffect, useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { useLocation, useParams } from "react-router-dom";

const ResourcesForm = () => {
  const location = useLocation();
  const { id } = useParams();
  const [inputError, setInputError] = useState({ error: false, message: "" });
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: "",
    btnSubmitMessage: "",
  });

  const [inputs, setInputs] = useState({
    title: "",
    resourcetype: "",
    link: "",
  });

  useEffect(() => {
    if (location.pathname.includes("/añadir")) {
      setInformativeMessages({
        greetings: "Añadir nuevo recurso recomendado",
        btnSubmitMessage: "Añadir recurso",
      });
    } else {
      console.log("email", id);
      setInformativeMessages({
        greetings: "Actualizar recurso recomendado",
        btnSubmitMessage: "Actualizar recurso",
      });
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputs);

    setInputError({ error: true, message: "" });
  };

  const typeOfResources = [
    {
      name: "Página web",
      value: "Página web",
    },
    {
      name: "Youtube",
      value: "Youtube",
    },
    {
      name: "Curso",
      value: "Curso",
    },
  ];

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit}>
        <div className="groupInputs">
          <label htmlFor="title">Titulo del recurso</label>
          <input
            required
            type="text"
            id="title"
            placeholder="Escribe el titulo del recurso"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, title: e.target.value }))
            }
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="resourcetype">Tipo del recursos</label>
          <select
            required
            name="select"
            id="resourcetype"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                resourcetype: e.target.value,
              }))
            }
          >
            <option key="defaultmessage" disabled>
              --Seleccionar tipo de recursos--
            </option>
            {typeOfResources.map((resource) => (
              <option key={resource.value} value={resource.value}>
                {resource.name}
              </option>
            ))}
          </select>
        </div>

        <div className="groupInputs">
          <label htmlFor="link">Link</label>
          <input
            required
            type="text"
            id="link"
            placeholder="Escribe el nombre de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
        </div>


        {inputError.error && (
          <p className="ErrorMessage"> {inputError.message}</p>
        )}

        <button type="submit" className="btnStandard btnDark">
          {informativeMessages.btnSubmitMessage}
        </button>
      </form>
    </div>
  );
};

export default ResourcesForm;
