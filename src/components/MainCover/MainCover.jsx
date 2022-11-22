import React from 'react'
import { mainCoverImg } from '../../assets'
// import { programmerIcon as imageCoverProgrammer } from '../../assets'
import './MainCover.css'

const MainCover = () => {
  return (
    <section className="MainCover">
      <div className="container">
        <div className="boxInfo">
          <p>No te limites, sueña en grande. <br/>
            Diseñamos y desarrollamos el software a tu medida.</p>
        </div>
        <div className="boxImage">
          <div className="ImageCover">
            <div className="ImageCover__image">
              <img src={mainCoverImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainCover
