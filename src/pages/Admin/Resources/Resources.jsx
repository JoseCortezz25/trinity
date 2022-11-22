import React, { useState, useEffect } from 'react'
import Table from '../../../components/Table/Table'
import { CoverGreetings, Loader } from '../../../components/Utils/Utils'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import ModalAlert from '../../../components/ModalAlert/ModalAlert'
import Pagination from '../../../components/Pagination/Pagination'
import { getAllRecommendations, deleteRecommendation } from '../../../services/service'
import { getToken } from '../../../services/localStorage'

const Resources = () => {
  const [resources, setResources] = useState([{}])
  const [resourcesLength, setResourcesLength] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    getAllRecommendations(getToken())
      .then((res) => {
        setResourcesLength(Object.values(res.data.result[0].attributes).length + 1)
        setResources(res.data.result)
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
        greeting="Gestión de los Recursos Recomendados"
        isHome={false}
      />

      <Link to="/admin/recursos/añadir">
        <button className="btnStandard btnBlue">
          Crear nuevo recurso recomendado
        </button>
      </Link>
      <Table headers={['Titulo', 'Link', 'Tipo', ' Acciones']}>
        {resources.length > 0 ? (
          <Pagination data={resources}>
            {resources?.map(({ id, attributes }) => (
              <div
                key={`${attributes?.title}${id}`}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${
                    resourcesLength
                  }, 250px)`,
                }}
              >
                <li>{attributes?.title}</li>
                <li className="TextClipped">{attributes?.link}</li>
                <li>{attributes?.type}</li>
                <li className="Table__actions">
                  <button onClick={() => handleOpenModal(id)}>
                    <AiFillDelete className="BtnDelete" />
                  </button>
                  <Link to={`/admin/recursos/actualizar/${id}`}>
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
          deleteItem={deleteRecommendation}
        />
      )}
    </div>
  )
}

export default Resources
