import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CoverGreetings, Loader } from '../../../components/Utils/Utils'
import Table from '../../../components/Table/Table'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import ModalAlert from '../../../components/ModalAlert/ModalAlert'
import Pagination from '../../../components/Pagination/Pagination'
import { deleteContent, getAllContents } from '../../../services/service'
import { getToken } from '../../../services/localStorage'

const Content = () => {
  const [contents, setContents] = useState([{}])
  const [contentsLength, setContentsLength] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    getAllContents(getToken())
      .then((res) => {
        setContentsLength(Object.values(res.data.result[0].attributes).length + 1)
        setContents(res.data.result)
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
      <CoverGreetings greeting="Gestión del contenido" isHome={false} />

      <Link to="/admin/contenidos/añadir">
        <button className="btnStandard btnBlue">Añadir nuevo contenido</button>
      </Link>

      <Table
        headers={[
          'Título',
          'Descripción',
          'Link',
          'Nivel',
          'Temario',
          'Acciones',
        ]}
      >
        {contents.length > 0 ? (
          <Pagination data={contents}>
            {contents.map(({ id, attributes }) => (
              <div
                key={`${attributes?.title}${id}`}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${
                    contentsLength
                  }, 250px)`,
                }}
              >
                <li>{attributes?.title}</li>
                <li className="TextClipped">{attributes?.description}</li>
                <li className="TextClipped">{attributes?.link}</li>
                <li className={`TextClipped Level${attributes?.level.data?.attributes?.title}`}>{attributes?.level.data?.attributes?.title}</li>
                {attributes?.temario.data?.attributes?.title ? (
                  <li>{attributes?.temario.data?.attributes?.title}</li>
                  ) : (
                  <li>Temario eliminado, se requiere reasignar a otro temario.</li>
                )}
                <li className="Table__actions">
                  <button onClick={() => handleOpenModal(id)}>
                    <AiFillDelete className="BtnDelete" />
                  </button>
                  <Link to={`/admin/contenidos/actualizar/${id}`}>
                    <button>
                      <MdModeEdit />
                    </button>
                  </Link>
                </li>
              </div>
            ))}
          </Pagination>
        ) : (
          <Loader />
        )}
      </Table>
      {openModal && (
        <ModalAlert
          elementSeleted={elementSeleted}
          setOpenModal={setOpenModal}
          deleteItem={deleteContent}
        />
      )}
    </div>
  )
}

export default Content
