import React from "react";
import Table from "../../../components/Table/Table";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { RecommendedResources } from "../../../assets/mocks";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="Dashboard">
      <CoverGreetings
        greeting="Gestión de los Recursos Recomendados"
        isHome={false}
      />

      <Link to="/admin/recurso/añadir">
        <button className="btnStandard btnBlue">
          Crear nuevo recurso recomendado
        </button>
      </Link>

      <Table columns={4} headers={["Titulo", "Link", "Tipo", " Acciones"]}>
        {RecommendedResources.map((resource) => (
          <>
            <li>{resource.title}</li>
            <li className="TextClipped">{resource.link}</li>
            <li>{resource.type}</li>
            <li>{resource.acciones}</li>
          </>
        ))}
      </Table>
    </div>
  );
};

export default Resources;
