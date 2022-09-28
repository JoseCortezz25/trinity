import React from "react";
import { useParams } from "react-router-dom";
import { ItemContent } from "../../components/Utils/Utils";
import Topics from "../../components/Topics/Topics";
import CardTopics from "../../components/CardTopics/CardTopics";
import "./Path.css";

const Path = () => {
  const { ruta } = useParams();

  const techs = ["HTML", "CSS", "JavaScript", "React", "Angular", "TypeScript"];
  return (
    <section className="Plataform Path">
      <h2>{ruta}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo
        tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate
        consequuntur consectetur quod eos, tempora debitis repellendus, dolores
        veritatis. At.
      </p>

      <div className="ListOfContent">
        <h3>Contenidos</h3>
        {techs.map((tech) => (
          <ItemContent item={tech} key={tech} />
        ))}
      </div>

      <div className="ListOfTopics">
        <Topics title="HTML" ide="HTML">
          <CardTopics
            title="Principiante"
            link={`/aprender/${ruta}/html/principiante`}
            description="Aprende sobre la estructura basica de las etiquetas y atributos"
            />
          <CardTopics
            title="Intermedio"
            link={`/aprender/${ruta}/html/intermedio`}
            description="Conoce conceptos intermedios como el modelo de caja y HTML semántico"
            />
          <CardTopics
            title="Avanzado"
            link={`/aprender/${ruta}/html/avanzado`}
            description="Conoce etiquetas avanzadas y normas importantes sobre las etiquetas para mejorar SEO"
            />
        </Topics>
        <Topics title="CSS" ide="CSS">
          <CardTopics
            title="Principiante"
            link={`/html/principiante`}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
            />
          <CardTopics
            title="Intermedio"
            link={`/html/intermedio`}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
            />
          <CardTopics
            title="Avanzado"
            link={`/html/avanzado`}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
          />
        </Topics>
        <Topics title="JavaScript" ide="JavaScript">
          <CardTopics
            title="Principiante"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
          />
          <CardTopics
            title="Intermedio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
          />
          <CardTopics
            title="Avanzado"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
          />
        </Topics>
        <Topics title="TypeScript" ide="TypeScript">
          <CardTopics
            title="Principiante"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
          />
          <CardTopics
            title="Intermedio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
          />
          <CardTopics
            title="Avanzado"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus quo tempore laboriosam amet hic! Dolore reiciendis labore tenetur voluptate consequuntur consectetur quod eos, tempora debitis repellendus, dolores veritatis. At."
          />
        </Topics>
      </div>
      
    </section>
  );
};

export default Path;
