import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/formulario/login" }) => {
  const isAuthenticated = localStorage.getItem('token');
  console.log('isAuthenticated',isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace={true}/>
  }

  return <Outlet />;
};

export default ProtectedRoute;