import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import FormLayout from "../layouts/FormLayout/FormLayout";
import NotFound from "../pages/NotFound/NotFound";
import Plataform from "../pages/Plataform/Plataform";
import Path from "../pages/Path/Path";
import Contents from "../pages/Contents/Contents";

import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aprender" element={<Plataform />} />
          <Route path="/aprender/:ruta" element={<Path />} />
          <Route path="/aprender/:ruta/:topic/:level" element={<Contents />} />
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
