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

      <Table headers={["Titulo", "Link", "Tipo", " Acciones"]}>
        {RecommendedResources.map(({title, link, type, acciones}) => (
          <>
            <li>{title}</li>
            <li className="TextClipped">{link}</li>
            <li>{type}</li>
            <li>{acciones}</li>
          </>
        ))}
      </Table>
    </div>
  );
};

export default Resources;
