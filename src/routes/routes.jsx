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
            <Route path="/aprender/:ruta" element={<Path />} />
            <Route path="/aprender/:ruta/:topic/:level" element={<Contents />}/>
            <Route path="/admin" element={<Dashboard />}/> 
            <Route path="/admin/usuarios" element={<Users />}/>
            <Route path="/admin/recursos" element={<Resources />}/>
            <Route path="/admin/temario" element={<Syllabus />}/>
            <Route path="/admin/rutas" element={<LearningPath />}/>
            <Route path="/admin/contenidos" element={<Content />}/>
          </Route>
        </Route>
        <Route path="/" element={<FormLayout />}>
          <Route path="/formulario/login" element={<Login />} />
          <Route path="/formulario/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
