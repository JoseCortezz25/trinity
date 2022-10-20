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
        {Contents.map(({ title, description, link, level, syllabus, order, acciones }) => (
          <>
            <li>{title}</li>
            <li className="TextClipped">{description}</li>
            <li className="TextClipped">{link}</li>
            <li className={`TextClipped Level${level}`}>{level}</li>
            <li className="TextClipped">{syllabus}</li>
            <li className="TextClipped">{order}</li>
            <li>{acciones}</li>
          </>
        ))}
      </Table>
    </div>
  );
};

export default Content;
