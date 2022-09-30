import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Utils.css";

export const Title = ({ title, styles = "" }) => {
  return (
    <div className={`MainTitle ${styles}`}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
};

const toScroll = (item) => document.getElementById(item).scrollIntoView();

export const ItemContent = ({ item }) => {
  const { ruta } = useParams();
  return (
    <Link
      onClick={() => toScroll(item)}
      className="ItemContent"
      to={`/aprender/${ruta}#${item}`}
    >
      <div>{item}</div>
    </Link>
  );
};
