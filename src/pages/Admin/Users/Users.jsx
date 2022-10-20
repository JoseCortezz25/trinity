import React from "react";
import { CoverGreetings } from "../../../components/Utils/Utils";
import { Link } from "react-router-dom";
import { users } from "../../../assets/mocks";
import Table from "../../../components/Table/Table";

const Users = () => {

  return (
    <div className="Dashboard">
      <CoverGreetings
        title="Dashboard"
        isHome={false}
        greeting="Gestión de Usuarios"
      />

      <Link to="/admin/usuarios/añadir">
        <button className="btnStandard btnBlue">Crear nuevo usuario</button>
      </Link>

      <Table headers={["Nombre", "Email", "Estado", "Rol", "Acciones"]}>
        {users.map((user) => (
          <>
            <li>{user.fullname}</li>
            <li>{user.email}</li>
            {user.status ? (
              <li className="darkGreen">Activado</li>
            ) : (
              <li className="darkBlue">Desactivado</li>
            )}
            <li>{user.role}</li>
            <li>iconitos</li>
          </>
        ))}
      </Table>
    </div>
  );
};

export default Users;
