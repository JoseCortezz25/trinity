import React from 'react';
import { Link } from 'react-router-dom';
import { CoverGreetings } from '../Utils/Utils';
import './UserQr.css'

const ContentUserQr = () => {
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
    </div>
  )
}

export default ContentUserQr; 