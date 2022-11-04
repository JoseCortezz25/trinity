import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { RecommendedResources } from "../../../assets/mocks";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";
import Pagination from "../../../components/Pagination/Pagination";

const Resources = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState);
    setElementSeleted(id);
  };

  return (
    <div className="Dashboard">
      <CoverGreetings
        greeting="Gestión de los Recursos Recomendados"
        isHome={false}
      />

      <Link to="/admin/recursos/añadir">
        <button className="btnStandard btnBlue">
          Crear nuevo recurso recomendado
        </button>
      </Link>

      <Table headers={["Titulo", "Link", "Tipo", " Acciones"]}>
        <Pagination data={RecommendedResources}>
          {RecommendedResources.map(({ title, link, type }) => (
            <>
              <li key={title}>{title}</li>
              <li key={link} className="TextClipped">{link}</li>
              <li key={type}>{type}</li>
              <li key={`${type}${title}`} className="Table__actions">
                <button onClick={() => handleOpenModal(title)}>
                  <AiFillDelete className="BtnDelete" />
                </button>
                <Link to={`/admin/recursos/actualizar/${title}`}>
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

export default Resources;
