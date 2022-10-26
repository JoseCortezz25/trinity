import { HashRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../layouts/ProtectedLayout/ProtectedLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import FormLayout from '../layouts/FormLayout/FormLayout'
import NotFound from '../pages/NotFound/NotFound'
import Plataform from '../pages/Plataform/Plataform'
import Path from '../pages/Path/Path'
import Contents from '../pages/Contents/Contents'
import Home from '../pages/Home/Home'
import { DevelopmentPage } from '../pages/Development'
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        {import.meta.env.DEV && (
          <Route path="/development" element={<DevelopmentPage />} />
        )}
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index path="/aprender" element={<Plataform />} />
            <Route path="/aprender/:ruta" element={<Path />} />
            <Route
              path="/aprender/:ruta/:topic/:level"
              element={<Contents />}
            />
            <Route path="/admin" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="/" element={<FormLayout />}>
          <Route path="/formulario/login" element={<Login />} />
          <Route path="/formulario/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes
