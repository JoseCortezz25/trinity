import { useContext } from 'react'
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom'
import Modal from '../../components/Modal'
import UserContext from '../../hooks/UserContext'
import { getRoleUser } from '../../services/localStorage'
import './ProtectedLayout.css'

const ProtectedRoute = ({ redirectPath = '/formulario/login' }) => {
  const isAuthenticated = localStorage.getItem('token')
  const { user, logout } = useContext(UserContext)
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace={true} />
  }

  if (user?.roles_trinity?.name === 'USER' && location.pathname.includes('/admin')) {
    return <Navigate to="/aprender" replace={true} />
  }

  if (getRoleUser() === 'ADMIN') {
    return <Outlet />
  }

  return (
    <>
      {!user.status ? (
        <Modal>
          <div className="DisabledContainer">
            <span>{':('}</span>
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
  )
}

export default ProtectedRoute
