import React from "react";
import { Link } from "react-router-dom";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Contents } from "../../../assets/mocks";
import Table from "../../../components/Table/Table";

const Content = () => {
  return (
    <div className="Dashboard">
      <CoverGreetings greeting="Gestión del contenido" isHome={false} />

      <Link to="/admin/ruta/añadir">
        <button className="btnStandard btnBlue">Añadir nuevo contenido</button>
      </Link>

      <Table
        columns={7}
        headers={[
          "Título",
          "Descripción",
          "Link",
          "Nivel",
          "Temario",
          "Prioridad",
          "Acciones",
        ]}
      >
        {Contents.map((path) => (
          <>
            <li>{path.title}</li>
            <li className="TextClipped">{path.description}</li>
            <li className="TextClipped">{path.link}</li>
            <li className={`TextClipped Level${path.level}`}>{path.level}</li>
            <li className="TextClipped">{path.syllabus}</li>
            <li className="TextClipped">{path.order}</li>
            <li>{path.acciones}</li>
          </>
        ))}
      </Table>
    </div>
  );
};

export default Content;
