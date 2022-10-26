import { useContext } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import Modal from "../../components/Modal";
import UserContext from "../../hooks/UserContext";

import "./ProtectedLayout.css";

const ProtectedRoute = ({ redirectPath = "/formulario/login" }) => {
  const isAuthenticated = localStorage.getItem("token");
  const { user, logout } = useContext(UserContext);

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  if(user.rol === 'ADMIN') {
    return (
      <>
      <Outlet/>
      </>
    )
  }

  return (
    <>
      {!user.status ? (
        <Modal>
          <div className="DisabledContainer">
            <span>{":("}</span>
            <h2>Lo lamentamos, aun no tienes acceso.</h2>
            <p>
              Para accerder al contenido debes pedirle al administrador la
              activación de la cuenta.
            </p>
            <Link to="/formulario/login">
              <button className="btnStandard btnDark" onClick={logout}>
                Cerrar Sesión
              </button>
            </Link>
          </div>
        </Modal>
      ) : null}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
