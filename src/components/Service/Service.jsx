import React from 'react'
import { Title } from '../Utils'
import './Service.css'

import { icon1, icon2, icon3 } from '../../assets'

const Service = () => {
  return (
    <section className="Service" id="Servicios">
      <Title title="¿Qué hacemos?" />
      <div className="ServiceCards">
        <div className="ServiceCard">
          <div className="ServiceCard__image">
            <img src={icon3} alt="" />
          </div>
          <p>
            Procesos de acompañamiento y asesoría personalizada para
            desarrolladores
          </p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceCard__image">
            <img src={icon1} alt="" />
          </div>
          <p>Diseño y Desarrollo de plataformas web y móviles a la medida</p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceCard__image">
            <img src={icon2} alt="" />
          </div>
          <p>Servicio in-House, consultoría y formación</p>
        </div>
      </div>
    </section>
  )
}

export default Service
