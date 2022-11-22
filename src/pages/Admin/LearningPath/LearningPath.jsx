import React, { useState, useEffect } from 'react'
import { CoverGreetings, Loader } from '../../../components/Utils/Utils'
import { Link } from 'react-router-dom'
import Table from '../../../components/Table/Table'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import ModalAlert from '../../../components/ModalAlert/ModalAlert'
import Pagination from '../../../components/Pagination/Pagination'
import { getAllLearningPaths, deleteLearningPath } from '../../../services/service'
import { getToken } from '../../../services/localStorage'

const LearningPath = () => {
  const [learningPaths, setLearningPaths] = useState([{}])
  const [learningPathLength, setLearningPathsLength] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    getAllLearningPaths(getToken())
      .then((res) => {
        setLearningPathsLength(
          Object.values(res.data.data[0].attributes).length + 1
        )
        setLearningPaths(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [openModal, learningPathLength])

  const handleOpenModal = (id) => {
    setOpenModal((prevState) => !prevState)
    setElementSeleted(id)
  }

  return (
    <div className="Dashboard">
      <CoverGreetings
        greeting="Gestión de las rutas de aprendizaje"
        isHome={false}
      />

      <Link to="/admin/rutas/añadir">
        <button className="btnStandard btnBlue">Crear nueva ruta</button>
      </Link>

      <Table
        headers={[
          'Nombre de la ruta',
          'Descripción',
          'Acciones',
        ]}
      >
        {learningPaths.length > 0 ? (
          <Pagination data={learningPaths}>
            {learningPaths.map(({ id, attributes }) => (
              <div
                key={`${attributes?.title}${id}`}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${
                    learningPathLength
                  }, 250px)`,
                }}
              >
                <li>{attributes?.title}</li>
                <li className="TextClipped">{attributes?.description}</li>
                <li className="Table__actions">
                  <button onClick={() => handleOpenModal(id)}>
                    <AiFillDelete className="BtnDelete" />
                  </button>
                  <Link to={`/admin/rutas/actualizar/${id}`}>
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
          deleteItem={deleteLearningPath}
        />
      )}
    </div>
  )
}

export default LearningPath
