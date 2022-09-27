import React from "react";
import { Link } from "react-router-dom";
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

export const ItemContent = ({ item }) => (
  <Link
    onClick={() => toScroll(item)}
    className="ItemContent"
    to={`/aprender/frontend#${item}`}
  >
    <div>{item}</div>
  </Link>
);
