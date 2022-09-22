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
  <Link className="ItemContent" to={`/#${item}`}>
    <div>{item}</div>
  </Link>
);
