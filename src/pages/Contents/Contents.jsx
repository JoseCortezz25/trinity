import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Utils/Utils";
import "./Contents.css";

const Contents = () => {
  const { topic, level } = useParams();

  const topics = [
    {
      order: 1,
      link: "asdasdsadsa",
      title: "title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 6,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 7,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 9,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
    {
      order: 11,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae",
      level: "Principiante",
    },
  ];

  return topics ? (
    <div className="Plataform Contents">
      <div className="Contents__head">
        <h2>{topic}</h2>
        <div className="Contents__line">
          <span>{level}</span>
          <hr />
        </div>
      </div>

      <div className="Contents__body">
        {topics.map((topic) => (
          <CardContent
            key={`${topic.description}${topic.order}`}
            number={topic.order}
            description={topic.description}
            level={level}
          />
        ))}
      </div>
    </div>
  ) : (
    <main className="LoaderBackground">
      <Loader />
    </main>
  );
};

const CardContent = ({ number, description, level }) => (
  <div className="CardContents">
    <span className={`${level.toLowerCase()}`}>{number}</span>
    <div className="CardContents__body">
      <p>{description}</p>
    </div>
  </div>
);

export default Contents;
