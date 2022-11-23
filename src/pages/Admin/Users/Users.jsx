/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { CoverGreetings, Loader } from '../../../components/Utils/Utils'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import { getAllUsers, deleteUser } from '../../../services/service'
import { getToken } from '../../../services/localStorage'
import Table from '../../../components/Table/Table'
import ModalAlert from '../../../components/ModalAlert/ModalAlert'
import { PaginationAdapted } from '../../../components/Pagination/Pagination'

const Users = () => {
  const [allUsers, setAllUsers] = useState([{}])
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    getAllUsers(getToken())
      .then((res) => {
        console.log(res.data);
        setAllUsers(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [openModal])

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState)
    setElementSeleted(id)
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

      <Table headers={['Nombre', 'Email', 'Estado', 'Rol', 'Acciones']}>
        {allUsers.length > 0 ? (
          <PaginationAdapted data={allUsers}>
            {allUsers.map(({ id, fullName, email, status, roles_trinity }) => (
              <div
                key={fullName}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${
                    Object.values(allUsers[0]).length + 1
                  }, 250px)`,
                }}
              >
                <li key={fullName}>{fullName}</li>
                <li key={email}>{email}</li>
                {status ? (
                  <li key={status} className="darkGreen">
                    Activado
                  </li>
                ) : (
                  <li key={status} className="darkBlue">
                    Desactivado
                  </li>
                )}
                <li>{roles_trinity?.name}</li>
                <li className="Table__actions">
                  <button onClick={() => handleOpenModal(id)}>
                    <AiFillDelete className="BtnDelete" />
                  </button>
                  <Link to={`/admin/usuarios/actualizar/${id}`}>
                    <button>
                      <MdModeEdit />
                    </button>
                  </Link>
                </li>
              </div>
            ))}
          </PaginationAdapted>
        ) : (
          <Loader />
        )}
      </Table>
      {openModal && (
        <ModalAlert
          elementSeleted={elementSeleted}
          setOpenModal={setOpenModal}
          deleteItem={deleteUser}
        />
      )}
    </div>
  )
}

export default Users
