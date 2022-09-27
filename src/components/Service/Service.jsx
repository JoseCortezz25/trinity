import React from "react";
import { Title } from "../Utils/Utils";
import "./Service.css";

import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'

const Service = () => {
  return (
    <section className="Service" id="Servicios">
      <Title title="Servicios" />
      <div className="ServiceCards">
        <div className="ServiceCard">
          <div className="ServiceCard__image">
            <img src={icon1} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceCard__image">
            <img src={icon2} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="ServiceCard">
          <div className="ServiceCard__image">
            <img src={icon3} alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
