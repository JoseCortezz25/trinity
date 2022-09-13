import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <span className="logo">
        {'<Trinity />'}
        </span>
      </nav>
      <nav>
        <a href="">Servicios</a>
        <a href="">Nosotros</a>
        <a href="">Ubicación</a>
      </nav>
    </header>
  )
}

export default Header