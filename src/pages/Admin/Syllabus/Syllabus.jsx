import React, { useState, useEffect } from 'react'
import { CoverGreetings, Loader } from '../../../components/Utils/Utils'
import { Link } from 'react-router-dom'
import Table from '../../../components/Table/Table'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
import ModalAlert from '../../../components/ModalAlert/ModalAlert'
import Pagination from '../../../components/Pagination/Pagination'
import { getAllSyllabus, deleteSyllabus } from '../../../services/service'
import { getToken } from '../../../services/localStorage'

const Syllabus = () => {
  const [syllabus, setSyllabus] = useState([{}])
  const [syllabusLength, setSyllabusLength] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [elementSeleted, setElementSeleted] = useState(null)

  useEffect(() => {
    getAllSyllabus(getToken())
      .then((res) => {
        setSyllabusLength(5)
        console.log(res.data.data)
        setSyllabus(res.data.data)
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
      <CoverGreetings greeting="Gestión del temario" isHome={false} />

      <Link to="/admin/temario/añadir">
        <button className="btnStandard btnBlue">Crear nuevo temario</button>
      </Link>

      <Table
        headers={[
          'Titulo',
          'Descripción',
          'Nivel',
          'Ruta de aprendizaje',
          'Acciones',
        ]}
      >
        {syllabus.length > 0 ? (
          <Pagination data={syllabus}>
            {syllabus?.map(({ id, attributes }) => (
              <div
                key={`${attributes?.title}${id}`}
                className="Table__row"
                style={{
                  gridTemplateColumns: `repeat(${syllabusLength}, 250px)`,
                }}
              >
                <li>{attributes?.title}</li>
                <li className="TextClipped">{attributes?.description}</li>
                <li className={`Level${attributes?.level.data.attributes.title}`}>
                  {attributes?.level.data.attributes.title}
                </li>
                <li>{attributes?.learning_path?.data.attributes.title}</li>
                <li className="Table__actions">
                  <button onClick={() => handleOpenModal(id)}>
                    <AiFillDelete className="BtnDelete" />
                  </button>
                  <Link to={`/admin/temario/actualizar/${id}`}>
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
          deleteItem={deleteSyllabus}
        />
      )}
    </div>
  )
}

export default Syllabus
