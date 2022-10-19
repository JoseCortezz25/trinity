import React from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { LearningPaths } from "../../../assets/mocks";
import { Link } from "react-router-dom";
import Table from "../../../components/Table/Table";


const LearningPath = () => {
  return (
    <div className="Dashboard">
      <CoverGreetings greeting="Gestión de las rutas de aprendizaje" isHome={false} />

      <Link to="/admin/ruta/añadir">
        <button className="btnStandard btnBlue">Crear nueva ruta</button>
      </Link>

      <Table
        columns={5}
        headers={[
          "Nombre de la ruta",
          "Descripción",
          "Link",
          "Imagen",
          "Acciones",
        ]}
      >
        {LearningPaths.map((path) => (
          <>
            <li>{path.title}</li>
            <li className="TextClipped">{path.description}</li>
            <li className="TextClipped">{path.link}</li>
            <li className="TextClipped">{path.imagen}</li>
            <li>{path.acciones}</li>
          </>
        ))}
      </Table>
    </div>
  );
};

export default LearningPath;
