import { Link } from "react-router-dom";

const CardTopics = ({ ide, title, description, link, level }) => {
  return (
    <Link to={link} id={ide}>
      <div className={`TopicsCard ${level}`}>
        <h4>{title}</h4>
        <span className={`${level}__span`}>{level}</span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CardTopics;
