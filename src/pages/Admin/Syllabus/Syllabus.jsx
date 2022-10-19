import React from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Link } from "react-router-dom";
import Table from "../../../components/Table/Table";
import { syllabus } from "../../../assets/mocks";

const Syllabus = () => {
  return (
    <div className="Dashboard">
      <CoverGreetings greeting="Gestión del temario" isHome={false} />

      <Link to="/admin/temario/añadir">
        <button className="btnStandard btnBlue">
          Crear nuevo temario
        </button>
      </Link>

      <Table
        columns={5}
        headers={[
          "Titulo",
          "Descripción",
          "Nivel",
          "Ruta de aprendizaje",
          "Acciones",
        ]}
      >
        {syllabus.map(topic => (
          <>
            <li>{topic.title}</li>
            <li className="TextClipped">{topic.description}</li>
            <li className={`Level${topic.level}`}>{topic.level}</li>
            <li>{topic.learningpath}</li>
            <li>{topic.acciones}</li>
          </>
        ))}

      </Table>
    </div>
  );
};

export default Syllabus;
