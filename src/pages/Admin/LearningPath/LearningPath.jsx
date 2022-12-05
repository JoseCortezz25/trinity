import React, { useState, useEffect } from 'react'
import { CoverGreetings, MessageEmptyData } from '../../../components/Utils/Utils'
import { Link } from 'react-router-dom'
import Table from '../../../components/Table/Table'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import ModalAlert from '../../../components/ModalAlert/ModalAlert'
import { Pagination } from '../../../components/Pagination/Pagination'
import {
  getAllLearningPaths,
  deleteLearningPath,
  getLearningPathsByPage,
} from '../../../services/service'
import { getToken } from '../../../services/localStorage'
import { NO_RECORDS } from '../../../helpers/messages'
const DOMINIO = import.meta.env.VITE_API_DOS


const LearningPath = () => {
  const [elementLength, setElementLength] = useState(0)
  const [pagination, setPagination] = useState({})
  const [learningPaths, setLearningPaths] = useState([{}])
  const [learningPathLength, setLearningPathsLength] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    getAllLearningPaths(getToken())
      .then((res) => {
        setElementLength(res.data.data.length);
        setLearningPathsLength(
          Object.values(res.data.data[0].attributes).length + 1
        )
        setLearningPaths(res.data.data)
        setPagination(res.data.meta.pagination)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const getDataPerPage = async ({ selected }) => {
    getLearningPathsByPage(selected + 1, getToken())
      .then((res) => {
        setLearningPaths(res.data.data)
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
    <div className="Dashboard">
      <CoverGreetings
        greeting="Gestión de las rutas de aprendizaje"
        isHome={false}
      />

      <Link to="/admin/rutas/añadir">
        <button className="btnStandard btnBlue">Crear nueva ruta</button>
      </Link>

      <Table headers={['Nombre de la ruta', 'Descripción', 'Imagen', 'Acciones']}>
        {elementLength > 0 ? (
          <Pagination
            pageCount={pagination.pageCount}
            changePage={getDataPerPage}
          >
            {learningPaths.map(({ id, attributes }) => (
              <div
                key={`${attributes?.title}${id}`}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${learningPathLength}, 250px)`,
                }}
              >
                <li>{attributes?.title}</li>
                <li className="TextClipped">{attributes?.description}</li>
                <li className='Table__image'>
                  <img src={`${DOMINIO}${attributes?.thumbnail}`} alt="" />
                </li>
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
          <MessageEmptyData message={NO_RECORDS}/>
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
