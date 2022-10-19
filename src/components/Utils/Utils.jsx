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

export const Loader = () => {
  return <span class="loader"></span>;
};


export const CoverGreetings = ({greeting, isHome=false}) => (
  <div className="Greetings">
    <h1>Dashboard</h1>
    {isHome 
      ? (<p>¡Hola, {greeting}!</p>)
      : (<p>{greeting}</p>)
    }
    
  </div>
)