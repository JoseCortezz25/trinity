import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiAlertCircle } from 'react-icons/fi'
import { getToken } from '../../services/localStorage'
import { deleteUser } from '../../services/service'
import Modal from '../Modal/Modal'

const ModalAlert = ({ elementSeleted, setOpenModal }) => {
  const handleKeyPress = (event) => {
    if (event.code === 'Escape' || event.keyCode === 27) {
      setOpenModal((prevState) => !prevState)
    }
  }

  const deleteUserSeleted = (id) => {
    deleteUser(id, getToken())
      .then((res) => {
        setOpenModal((prevState) => !prevState)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <Modal>
      <div className="ModalContainer">
        <button
          className="btnCloseModal"
          onClick={() => setOpenModal((prevState) => !prevState)}
        >
          <AiOutlineClose />
        </button>

        <div className="Modal__alert">
          <FiAlertCircle />
        </div>

        <h2>¿Realmente quieres eliminar este elemento?</h2>
        <p>No podrás recuperar este elemento después de haberlo eliminado.</p>

        <button
          className="btnStandard btnNormal"
          onClick={() => setOpenModal((prevState) => !prevState)}
        >
          Cancelar
        </button>
        <button className="btnStandard btnRed" onClick={() => deleteUserSeleted(elementSeleted)}>Eliminar</button>
      </div>
    </Modal>
  )
}

export default ModalAlert
