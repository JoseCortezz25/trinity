import React, { useEffect, useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { useLocation, useParams } from "react-router-dom";

const SyllabusForm = () => {
  const location = useLocation();
  const { id } = useParams();
  const [inputError, setInputError] = useState({ error: false, message: "" });
  const [informativeMessages, setInformativeMessages] = useState({
    greetings: "",
    btnSubmitMessage: "",
  });

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    level: "",
    learningpath: ""
  });

  useEffect(() => {
    if (location.pathname.includes("/añadir")) {
      setInformativeMessages({
        greetings: "Crear nuevo tema",
        btnSubmitMessage: "Crear tema",
      });
    } else {
      console.log("email", id);
      setInformativeMessages({
        greetings: "Actualizar tema",
        btnSubmitMessage: "Actualizar tema",
      });
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputs);

    setInputError({ error: true, message: "" });
  };

  const learningPaths = [
    {
      name: "Ruta Frontned",
      value: "RutaFrontned",
    },
    {
      name: "Ruta Backend",
      value: "RutaBackend",
    },
    {
      name: "Ruta Complemento",
      value: "RutaComplemento",
    },
  ];

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit}>
        <div className="groupInputs">
          <label htmlFor="title">Nombre del tema</label>
          <input
            required
            type="text"
            id="title"
            placeholder="Escribe el nombre del tema"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, title: e.target.value }))
            }
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="description">Descripción</label>
          <input
            required
            type="text"
            id="description"
            placeholder="Escribe la descripción del tema"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, description: e.target.value }))
            }
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="description">Nivel</label>
          <input
            required
            type="text"
            id="level"
            placeholder="Escribe la descripción del tema"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, level: e.target.value }))
            }
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="learningpath">Ruta de aprendizaje</label>
          <select
            required
            name="learningpath"
            id="learningpath"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                learningpath: e.target.value,
              }))
            }
          >
            <option key="defaultmessage" disabled>
              --Seleccionar la ruta de aprendizaje a la que pertenece el tema--
            </option>
            {learningPaths.map((path) => (
              <option key={path.value} value={path.value}>
                {path.name}
              </option>
            ))}
          </select>
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

export default SyllabusForm;
