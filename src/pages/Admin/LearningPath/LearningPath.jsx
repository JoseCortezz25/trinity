import React, { useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { LearningPaths } from "../../../assets/mocks";
import { Link } from "react-router-dom";
import Table from "../../../components/Table/Table";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";
import Pagination from "../../../components/Pagination/Pagination";

const LearningPath = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState);
    setElementSeleted(id);
  };

  return (
    <div className="Dashboard">
      <CoverGreetings
        greeting="Gestión de las rutas de aprendizaje"
        isHome={false}
      />

      <Link to="/admin/rutas/añadir">
        <button className="btnStandard btnBlue">Crear nueva ruta</button>
      </Link>

      <Table
        headers={[
          "Nombre de la ruta",
          "Descripción",
          "Link",
          "Imagen",
          "Acciones",
        ]}
      >
        <Pagination data={LearningPaths}>
          {LearningPaths.map(({ title, description, link, imagen }) => (
            <>
              <li>{title}</li>
              <li className="TextClipped">{description}</li>
              <li className="TextClipped">{link}</li>
              <li className="TextClipped">{imagen}</li>
              <li className="Table__actions">
                <button onClick={() => handleOpenModal(title)}>
                  <AiFillDelete className="BtnDelete" />
                </button>
                <Link to={`/admin/rutas/actualizar/${title}`}>
                  <button>
                    <MdModeEdit />
                  </button>
                </Link>
              </li>
            </>
          ))}
        </Pagination>
      </Table>
      {openModal && (
        <ModalAlert
          elementSeleted={elementSeleted}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default LearningPath;
