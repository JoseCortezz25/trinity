import React from "react";
import Modal from "../Modal/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { useEffect } from "react";

const ModalAlert = ({ elementSeleted, setOpenModal }) => {
  const handleKeyPress = (event) => {
    if(event.code === 'Escape' || event.keyCode === 27){
      setOpenModal((prevState) => !prevState)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
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
        <button className="btnStandard btnRed">Eliminar</button>
      </div>
    </Modal>
  );
};

export default ModalAlert;
