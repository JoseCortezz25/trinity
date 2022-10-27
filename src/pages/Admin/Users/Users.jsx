import React, { useState } from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Link } from "react-router-dom";
import { users } from "../../../assets/mocks";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import Table from "../../../components/Table/Table";
import ModalAlert from "../../../components/ModalAlert/ModalAlert";
import Pagination from "../../../components/Pagination/Pagination";

const Users = () => {
  const [openModal, setOpenModal] = useState(false);
  const [elementSeleted, setElementSeleted] = useState(null);

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState);
    setElementSeleted(id);
  };

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
        <Pagination data={users}>
          {users.map(({ id, fullname, email, status, role }) => (
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

export default Users;
