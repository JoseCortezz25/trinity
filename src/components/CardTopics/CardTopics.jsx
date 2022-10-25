import { Link } from "react-router-dom";

const CardTopics = ({ title, description, link }) => {
  return (
    <Link to={link}>
      <div className={`TopicsCard ${title}`}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CardTopics;
