import React from "react";
import "./Utils.css";

export const Title = ({ title, styles = "" }) => {
  return (
    <div className={`MainTitle ${styles}`}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
};

