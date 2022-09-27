import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Plataform from "../pages/Plataform/Plataform";
import Path from "../pages/Path/Path";
import Contents from "../pages/Contents/Contents";

import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aprender" element={<Plataform />} />
          <Route path="/aprender/:ruta" element={<Path />} />
          <Route path="/aprender/:ruta/:topic/:level" element={<Contents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
