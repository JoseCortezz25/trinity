import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import { CoverGreetings, MessageEmptyData } from '../../../components/Utils';
import ModalAlert from '../../../components/ModalAlert/ModalAlert';
import { deleteMember, getAllMembers, getMembersPerPage } from '../../../services/service';
import { getToken } from '../../../services/localStorage';
import { NO_RECORDS } from '../../../helpers/messages';
import { Pagination } from '../../../components/Pagination/Pagination'; 
import Table from '../../../components/Table/Table';
import './Member.css'

const Member = () => {
  const [elementLength, setElementLength] = useState(0)
  const [pagination, setPagination] = useState({})
  const [members, setMembers] = useState([{}])
  const [memberLength, setMemberLength] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    getAllMembers(getToken())
      .then(({data: {data, meta}}) => {
        setMembers(data)
        setMemberLength(Object.values(data[0].attributes).length + 1)
        setPagination(meta.pagination)
        setElementLength(data.length)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const getDataPerPage = async ({ selected }) => {
    getMembersPerPage(selected + 1, getToken())
      .then(({data}) => {
        setMembers(data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState)
    setElementSeleted(id)
  }

  return (
    <div className='Dashboard'>
      <CoverGreetings
        greeting="Gestión de usuarios registrados"
        isHome={false}
      />
      <Link to="/admin/miembros/añadir">
        <button className="btnStandard btnBlue">
          Añadir un nuevo usuario
        </button>
      </Link>

      <Table headers={['Nombre Completo', 'Descripción', 'Imagen', 'URL', 'Acciones']}>
        {elementLength > 0 ? (
          <Pagination
            pageCount={pagination.pageCount}
            changePage={getDataPerPage}
          >
            {members?.map(({ id, attributes }) => (
              <div
                key={`${attributes?.title}${id}`}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${memberLength-3}, 250px)`,
                }}
              >
                <li>{attributes?.fullName}</li>
                <li className="TextClipped">{attributes?.description}</li>
                <li className='Table__image'>
                  <img src={`http://localhost:1337${attributes?.thumbnail}`} alt="" />
                </li>
                <li>{attributes?.url}</li>
                <li className="Table__actions">
                  <button onClick={() => handleOpenModal(id)}>
                    <AiFillDelete className="BtnDelete" />
                  </button>
                  <Link to={`/admin/miembros/actualizar/${id}`}>
                    <button>
                      <MdModeEdit />
                    </button>
                  </Link>
                </li>
              </div>
            ))}
          </Pagination>
        ) : (
          <MessageEmptyData message={NO_RECORDS}/>
        )}
      </Table>

      {openModal && (
        <ModalAlert
          elementSeleted={elementSeleted}
          setOpenModal={setOpenModal}
          deleteItem={deleteMember}
        />
      )}
    </div>
  )
}

export default Member; 