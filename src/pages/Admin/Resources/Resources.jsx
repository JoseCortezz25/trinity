import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { RecommendedResources } from "../../../assets/mocks";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import ReactPaginate from "react-paginate";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";

const Resources = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);
  const [data, setData] = useState(RecommendedResources)
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const displayData = data
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map(({ title, link, type }) => (
      <>
        <li>{title}</li>
        <li className="TextClipped">{link}</li>
        <li>{type}</li>
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
    ))

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
      <CoverGreetings
        greeting="Gestión de los Recursos Recomendados"
        isHome={false}
      />

      <Link to="/admin/recurso/añadir">
        <button className="btnStandard btnBlue">
          Crear nuevo recurso recomendado
        </button>
      </Link>

      <Table headers={["Titulo", "Link", "Tipo", " Acciones"]}>
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

export default Resources;
