import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Title } from '../Utils'
import GYLIcon from '../../assets/icons/gylsystems.png'
import GMLIcon from '../../assets/icons/GML.png'
import ImsoftarIcon from '../../assets/icons/insoftar.png'
import BanColombiaIcon from '../../assets/icons/Banco_de_Bogotá_logo.svg'
import TodoSistemasIcon from '../../assets/icons/todo sistemas.png'
import AlgarTechIcon from '../../assets/icons/algar-tech.svg'
import TivitIcon from '../../assets/icons/tivit.png'
import CafeterosIcon from '../../assets/icons/cafeteros.png'
import UCHIcon from '../../assets/icons/LogoCorhuila.png'
import IndraIcon from '../../assets/icons/indra.jpg'
import 'swiper/css/pagination'
import 'swiper/css'
import './Customers.css'

const Customers = () => {
  return (
    <section className="Customers">
      <Title title="Nosotros" />

      <div className="Customers__container">
        <Swiper
          className="Customers__slider"
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '#pagination',
            clickable: true,
          }}
          slidesPerView={4}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            '@0.50': {
              slidesPerView: 1.25,
              spaceBetween: 25,
            },
            '@1.00': {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            '@1.25': {
              slidesPerView: 2.25,
              spaceBetween: 25,
            },
            '@1.50': {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            '@1.75': {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          <SwiperSlide>
            <div className="Customers__item">
              <img src={IndraIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={GYLIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={GMLIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={ImsoftarIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={BanColombiaIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={TodoSistemasIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={AlgarTechIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={TivitIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={CafeterosIcon} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Customers__item">
              <img src={UCHIcon} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div id="pagination"></div>
      </div>
    </section>
  )
}

export default Customers
