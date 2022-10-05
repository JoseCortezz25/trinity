import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import WhatsAppIcon from "../../assets/icons/WhatsappIcon.svg";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="FloatingButtons">
      <div className="WhatsappButton">
        <a href="https://wa.me/3143478428?text=Hola,%20Trinity" target="_blank">
          <img src={WhatsAppIcon} alt="" className="WhatsappButton__icon" />
        </a>
      </div>
      <button
        className="ButtonTop"
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowCircleUp onClick={scrollToTop} />
      </button>
    </div>
  );
};

export default FloatingButtons;
