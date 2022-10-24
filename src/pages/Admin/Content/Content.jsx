import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Contents } from "../../../assets/mocks";
import Table from "../../../components/Table/Table";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import ReactPaginate from "react-paginate";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";

const Content = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);
  const [data, setData] = useState(Contents);
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const displayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map(({ title, description, link, level, syllabus, order }) => (
      <>
        <li>{title}</li>
        <li className="TextClipped">{description}</li>
        <li className="TextClipped">{link}</li>
        <li className={`TextClipped Level${level}`}>{level}</li>
        <li className="TextClipped">{syllabus}</li>
        <li className="TextClipped">{order}</li>
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
      <CoverGreetings greeting="Gestión del contenido" isHome={false} />

      <Link to="/admin/ruta/añadir">
        <button className="btnStandard btnBlue">Añadir nuevo contenido</button>
      </Link>

      <Table
        headers={[
          "Título",
          "Descripción",
          "Link",
          "Nivel",
          "Temario",
          "Prioridad",
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

export default Content;
