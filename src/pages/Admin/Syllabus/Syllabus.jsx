import React, { useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Link } from "react-router-dom";
import Table from "../../../components/Table/Table";
import { syllabus } from "../../../assets/mocks";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";

const Syllabus = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState);
    setElementSeleted(id);
  };

  return (
    <div className="Dashboard">
      <CoverGreetings greeting="Gestión del temario" isHome={false} />

      <Link to="/admin/temario/añadir">
        <button className="btnStandard btnBlue">
          Crear nuevo temario
        </button>
      </Link>

      <Table
        headers={[
          "Titulo",
          "Descripción",
          "Nivel",
          "Ruta de aprendizaje",
          "Acciones",
        ]}
      >
        {syllabus.map(({title, description, level, learningpath }) => (
          <>
            <li>{title}</li>
            <li className="TextClipped">{description}</li>
            <li className={`Level${level}`}>{level}</li>
            <li>{learningpath}</li>
            <li className="Table__actions">
              <button onClick={() => handleOpenModal(title)}>
                <AiFillDelete className="BtnDelete" />
              </button>
              <Link to="/">
                <button>
                  <MdModeEdit />
                </button>
              </Link>
            </li>
          </>
        ))}
      </Table>
      {openModal && (
        <ModalAlert elementSeleted={elementSeleted} setOpenModal={setOpenModal}/>
      )}
    </div>
  );
};

export default Syllabus;
