import { HashRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../layouts/ProtectedLayout/ProtectedLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import FormLayout from "../layouts/FormLayout/FormLayout";
import NotFound from "../pages/NotFound/NotFound";
import Plataform from "../pages/Plataform/Plataform";
import Path from "../pages/Path/Path";
import Contents from "../pages/Contents/Contents";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Users from "../pages/Admin/Users/Users";
import Resources from "../pages/Admin/Resources/Resources";
import Syllabus from "../pages/Admin/Syllabus/Syllabus";
import Content from "../pages/Admin/Content/Content";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import LearningPath from "../pages/Admin/LearningPath/LearningPath";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index path="/aprender" element={<Plataform />} />
            {protectedRoutes.map(({to, component}) => (
              <Route key={to} path={to} element={component}/>
            ))}
          </Route>
        </Route>
        <Route path="/" element={<FormLayout />}>
          {formRoutes.map(({to, component}) => (
            <Route key={to} path={to} element={component}/>
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

const formRoutes = [
  {
    to: '/formulario/login',
    component: <Login />,
  },
  {
    to: '/formulario/register',
    component: <Register />,
  },
];

const protectedRoutes = [
  {
    to: '/aprender/:ruta',
    component: <Path />,
  },
  {
    to: '/aprender/:ruta/:topic/:level',
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
    to: '/admin/recursos',
    component: <Resources />,
  },
  {
    to: '/admin/temario',
    component: <Syllabus />,
  },
  {
    to: '/admin/rutas',
    component: <LearningPath />,
  },
  {
    to: '/admin/rutas',
    component: <LearningPath />,
  },
  {
    to: '/admin/contenidos',
    component: <Content />,
  },
];

export default AppRoutes;
