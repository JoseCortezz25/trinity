import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemContent } from "../../components/Utils/Utils";
import { getTopicsByPath } from "../../services/service";
import Topics from "../../components/Topics/Topics";
import CardTopics from "../../components/CardTopics/CardTopics";
import "./Path.css";

const Path = () => {
  const [topics, setTopics] = useState([{}]);
  const { ruta } = useParams();

  useEffect(() => {
    getTopicsByPath(ruta)
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ruta]);

  return (
    <section className="Plataform Path">
      <h2>{ruta}</h2>
      <p>{topics.description}</p>

      <div className="ListOfContent">
        <h3>Contenidos</h3>
        {topics?.topics?.map((topic) => (
          <ItemContent 
            paht={ruta} 
            item={topic.topic} 
            key={topic.topic} 
            />
        ))}
      </div>

      <div className="ListOfTopics">
        {topics?.topics?.map((topic) => (
          <Topics title={topic.topic} ide={topic.topic} key={topic.topic}>
            {topic?.sections?.map((section) => (
              <CardTopics
                key={`${topic.topic}/${section.level}`}
                title={section.level}
                link={`/aprender/${ruta}/${topic.topic}/${section.level}`}
                description={section.description}
              />
            ))}
          </Topics>
        ))}
      </div>
    </section>
  );
};

export default Path;
