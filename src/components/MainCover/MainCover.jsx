import React from "react";
import "./MainCover.css";
import imageCoverProgrammer from "../../assets/programmer.svg";

const MainCover = () => {
  return (
    <section className="MainCover">
      <div className="container">
        <div className="boxInfo">
          <p>Lorem ipsum dolor sit amet. Ut molestiae perferendis.</p>
        </div>
        <div className="boxImage">
          <img src={imageCoverProgrammer} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MainCover;
