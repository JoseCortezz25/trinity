import React, { useEffect, useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { useLocation, useParams } from "react-router-dom";

const ContentForm = () => {
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
    link: "",
    temario: "",
    level: "",
    importance: "",
  });

  useEffect(() => {
    if (location.pathname.includes("/añadir")) {
      setInformativeMessages({
        greetings: "Añadir contenido",
        btnSubmitMessage: "Crear contenido",
      });
    } else {
      console.log("email", id);
      setInformativeMessages({
        greetings: "Actualizar contenido",
        btnSubmitMessage: "Actualizar contenido",
      });
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputs);

    setInputError({ error: true, message: "" });
  };

  const levels = [
    {
      name: "Principiante",
      value: "Principiante",
    },
    {
      name: "Intermedio",
      value: "Intermedio",
    },
    {
      name: "Avanzado",
      value: "Avanzado",
    },
  ];

  const temarios = [
    {
      name: "CSS",
      value: "CSS",
    },
    {
      name: "HTML",
      value: "HTML",
    },
    {
      name: "JavaScript",
      value: "JavaScript",
    },
  ];

  return (
    <div className="Dashboard">
      <CoverGreetings greeting={informativeMessages.greetings} isHome={false} />
      <form onSubmit={handleSubmit}>
        <div className="groupInputs">
          <label htmlFor="title">Título del contenido</label>
          <input
            required
            type="text"
            id="title"
            placeholder="Escribe el título del contenido"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="description">Descripción</label>
          <input
            required
            type="text"
            id="description"
            placeholder="Escribe la descripción de la ruta"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="link">URL del contenido</label>
          <input
            required
            type="text"
            id="link"
            placeholder="Escribe el link donde se encuentra el contenido"
            onChange={(e) =>
              setInputs((prevState) => ({ ...prevState, link: e.target.value }))
            }
          />
        </div>

        <div className="groupInputs">
          <label htmlFor="temario">Temario</label>
          <select
            required
            name="temario"
            id="temario"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                temario: e.target.value,
              }))
            }
          >
            <option key="defaultmessage" disabled>
              --Seleccionar el tema al que pertenece el contenido--
            </option>
            {temarios.map((temario) => (
              <option key={temario.value} value={temario.value}>
                {temario.name}
              </option>
            ))}
          </select>
        </div>
        <div className="groupInputs">
          <label htmlFor="level">Nivel</label>
          <select
            required
            name="level"
            id="level"
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                level: e.target.value,
              }))
            }
          >
            <option key="defaultmessage" disabled>
              --Seleccionar el nivel del tema escogido--
            </option>
            {levels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.name}
              </option>
            ))}
          </select>
        </div>

        <div className="groupInputs">
          <label htmlFor="importance">Grado de importancia</label>
          <p>
            Escribe en numero el orden en el que se posicionará el contenido en
            la página.
          </p>
          <input
            type="number"
            name="importance"
            id="importance"
            required
            onChange={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                importance: e.target.value,
              }))
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

export default ContentForm;
