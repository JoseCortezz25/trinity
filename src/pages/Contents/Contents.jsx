import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Utils/Utils";
import Modal from "../../components/Modal/Modal";
import { AiOutlineClose } from "react-icons/ai";
import "./Contents.css";

const Contents = () => {
  const { topic, level } = useParams();

  const topics = [
    {
      order: 1,
      title: "TUTORIAL PHP YA",
      description:
        "Acorde a este curso aprenderás a instalar xampp, variables, condicionales, estructuras repetitivas, creación de formularios, vectores, funciones, conexiona BD con mysql, CRUD, Borrado de cookies, variables de sesion, creacion de imagenes dinamicas, Poo",
      level: "Principiante",
      link: "https://www.tutorialesprogramacionya.com/phpya/index.php?inicio=0",
      contents: [],
    },
    {
      order: 2,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "Etiquetas multimedia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
    {
      order: 3,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "Formularios",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
    {
      order: 4,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
    {
      order: 5,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
    {
      order: 6,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
    {
      order: 7,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
    {
      order: 8,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
    {
      order: 9,
      link: "https://developer.mozilla.org/es/docs/Web/CSS/text-transform",
      title: "title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
      contents: [],
    },
  ];

  return topics ? (
    <div className="Plataform Contents">
      <div className="Contents__head">
        <h2>{topic}</h2>
        <div className="Contents__line">
          <span>{level}</span>
          <hr />
        </div>
      </div>

      <div className="Contents__body">
        {topics.map((topic) => (
          <CardContent
            key={`${topic.description}${topic.order}`}
            number={topic.order}
            description={topic.description}
            title={topic.title}
            level={level}
            contents={topic.contents}
            link={topic.link}
          />
        ))}
      </div>
    </div>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  );
};

const CardContent = ({ number, title, level, link, description }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="CardContents"
        onClick={() => setOpenModal((prevState) => !prevState)}
      >
        <span className={`${level.toLowerCase()}`}>{number}</span>
        <div className="CardContents__body">
          <p>{title}</p>
        </div>
      </div>
      {openModal && (
        <Modal>
          <div className="ModalContents">
            <button
              className="btnCloseModal"
              onClick={() => setOpenModal((prevState) => !prevState)}
            >
              <AiOutlineClose />
            </button>
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="btnStandard btnDark" target="_blank" href={link}>
              ir al contenido
            </a>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Contents;
const handleOpenModel = () => {};
