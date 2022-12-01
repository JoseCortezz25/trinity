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
import Users from '../pages/Admin/Users/Users'
import UsersForm from '../pages/Admin/Users/UsersForm'
import Resources from '../pages/Admin/Resources/Resources'
import ResourcesForm from '../pages/Admin/Resources/ResourcesForm'
import Syllabus from '../pages/Admin/Syllabus/Syllabus'
import SyllabusForm from '../pages/Admin/Syllabus/SyllabusForm'
import Content from '../pages/Admin/Content/Content'
import ContentForm from '../pages/Admin/Content/ContentForm'
import LearningPath from '../pages/Admin/LearningPath/LearningPath'
import LearningPathForm from '../pages/Admin/LearningPath/LearningPathForm'
import ContentUserQr from '../components/UserQR/ContentUserQr'
import FormUserQr from '../components/UserQR/FormUserQr'



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
            {protectedRoutes.map(({ to, component }) => (
              <Route key={to} path={to} element={component} />
            ))}
          </Route>
        </Route>
        <Route path="/" element={<FormLayout />}>
          {formRoutes.map(({ to, component }) => (
            <Route key={to} path={to} element={component} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

const formRoutes = [
  {
    to: '/formulario/login',
    component: <Login />,
  },
  {
    to: '/formulario/register',
    component: <Register />,
  },
]

const protectedRoutes = [
  {
    to: '/aprender/:ruta',
    component: <Path />,
  },
  {
    to: '/aprender/:ruta/:content',
    component: <Contents />,
  },
  {
    to: '/admin',
    component: <Dashboard />,
  },
  {
    to: '/admin/usuarios',
    component: <Users />,
  },
  {
    to: '/admin/usuarios/añadir',
    component: <UsersForm />,
  },
  {
    to: '/admin/usuarios/actualizar/:id',
    component: <UsersForm />,
  },
  {
    to: '/admin/recursos',
    component: <Resources />,
  },
  {
    to: '/admin/recursos/añadir',
    component: <ResourcesForm />,
  },
  {
    to: '/admin/recursos/actualizar/:id',
    component: <ResourcesForm />,
  },
  {
    to: '/admin/temario',
    component: <Syllabus />,
  },
  {
    to: '/admin/temario/añadir',
    component: <SyllabusForm />,
  },
  {
    to: '/admin/temario/actualizar/:id',
    component: <SyllabusForm />,
  },
  {
    to: '/admin/rutas',
    component: <LearningPath />,
  },
  {
    to: '/admin/rutas/añadir',
    component: <LearningPathForm />,
  },
  {
    to: '/admin/rutas/actualizar/:id',
    component: <LearningPathForm />,
  },
  {
    to: '/admin/rutas',
    component: <LearningPath />,
  },
  {
    to: '/admin/contenidos',
    component: <Content />,
  },
  {
    to: '/admin/contenidos/añadir',
    component: <ContentForm />,
  },
  {
    to: '/admin/contenidos/actualizar/:id',
    component: <ContentForm />,
  },
  {
    to: '/admin/usuarioqr',
    component: <ContentUserQr />,
  },
  {
    to: '/admin/usuarioqr/añadirusuario',
    component: <FormUserQr />,
  },
]

export default AppRoutes
