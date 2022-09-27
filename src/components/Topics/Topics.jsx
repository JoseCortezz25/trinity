import React from "react";
import { Link } from "react-router-dom";
import "./Topics.css";

const Topics = ({ title, ide, children }) => {
  return (
    <div className="Topics" id={ide}>
      <h3>{title}</h3>

      <div className="ContainerTopics">{children}</div>
    </div>
  );
};

export default Topics;
