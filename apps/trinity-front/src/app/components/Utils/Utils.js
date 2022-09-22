import { Link } from 'react-router-dom';

import './Utils.css';

export const Title = ({ title, styles = '' }) => {
  return (
    <div className={`MainTitle ${styles}`}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
};

export const ItemContent = ({ item }) => (
  <a className="ItemContent" href={`#${item}`}>
    <div>{item}</div>
  </a>
);
