import React, { useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Link } from "react-router-dom";
import Table from "../../../components/Table/Table";
import { syllabus } from "../../../assets/mocks";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import ReactPaginate from "react-paginate";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";

const Syllabus = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);
  const [data, setData] = useState(syllabus);
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const displayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map(({ title, description, level, learningpath }) => (
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
    ));

  const pageCount = Math.ceil(data.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState);
    setElementSeleted(id);
  };

  return (
    <div className="Dashboard">
      <CoverGreetings greeting="Gestión del temario" isHome={false} />

      <Link to="/admin/temario/añadir">
        <button className="btnStandard btnBlue">Crear nuevo temario</button>
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
        {displayData}
        <ReactPaginate
          previousLabel="Atras"
          nextLabel="Siguiente"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="ButtonsPagination"
          previousLinkClassName="BtnAtras"
          nextLinkClassName="BtnSiguiente"
          disabledClassName="PaginationDisabled"
          activeClassName="PaginationActive"
        />
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

export default Syllabus;
