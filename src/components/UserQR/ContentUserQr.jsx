import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PaginationAdapted } from '../../components/Pagination/Pagination'
import Table from '../Table/Table';
import { CoverGreetings, MessageEmptyData } from '../Utils/Utils';
import { Members } from '../../assets/mocks'
import './UserQr.css'
import { NO_RECORDS } from '../../helpers/messages';
import ModalAlert from '../ModalAlert/ModalAlert';
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'

const ContentUserQr = () => {
  const [elementLength, setElementLength] = useState(0)
  // const [pagination, setPagination] = useState({})
  // const [memberLength, setMemberLength] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    // setMemberLength(4)
    setElementLength(2);
  }, [])

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState)
    setElementSeleted(id)
  }

  return (
    <div className='Dashboard '>
      <CoverGreetings
        greeting="Gestión de usuarios registrados"
        isHome={false}
      />
      <Link to="/admin/usuarioqr/añadirusuario">
        <button className="btnStandard btnBlue">
          Añadir un nuevo usuario
        </button>
      </Link>
      <Table headers={['Nombre', 'Descripción', 'Imagen', 'Acciones']}>
        {elementLength > 0 ? (
          <PaginationAdapted data={Members}>
            {Members.map(({ id, fullName, image, description }) => (
              <div
                key={`${fullName}${id}`}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${Object.values(Members[0]).length + 1
                    }, 250px)`,
                }}
              >
                <li key={fullName}>{fullName}</li>
                <li key={description}>{description}</li>
                <div className='img_user'>
                  <img src={image} />
                </div>
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
          <MessageEmptyData message={NO_RECORDS} />
        )}
      </Table>


      {openModal && (
        <ModalAlert
          elementSeleted={elementSeleted}
          setOpenModal={setOpenModal}
          deleteItem={() => { }}
        />
      )}
    </div>
  )
}

export default ContentUserQr; 