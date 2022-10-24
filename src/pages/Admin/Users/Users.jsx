import React, { useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Link } from "react-router-dom";
import { users } from "../../../assets/mocks";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import Table from "../../../components/Table/Table";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";
import ReactPaginate from 'react-paginate'

const Users = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);
  const [allUsers, setUsers] = useState(users);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayData = allUsers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(({ id, fullname, email, status, role }) => (
      <>
        <li>{fullname}</li>
        <li>{email}</li>
        {status ? (
          <li className="darkGreen">Activado</li>
        ) : (
          <li className="darkBlue">Desactivado</li>
        )}
        <li>{role}</li>
        <li className="Table__actions">
          <button onClick={() => handleOpenModal(id)}>
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

    
  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState);
    setElementSeleted(id);
  };
  
  const pageCount = Math.ceil(allUsers.length/usersPerPage)
    
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className="Dashboard">
      <CoverGreetings
        title="Dashboard"
        isHome={false}
        greeting="Gestión de Usuarios"
      />

      <Link to="/admin/usuarios/añadir">
        <button className="btnStandard btnBlue">Crear nuevo usuario</button>
      </Link>
        
      <Table headers={["Nombre", "Email", "Estado", "Rol", "Acciones"]}>
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

export default Users;
