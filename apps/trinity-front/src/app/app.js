import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from 'apps/trinity-front/src/app/layouts/MainLayout';
import NotFound from 'apps/trinity-front/src/app/pages/NotFound';
import Plataform from 'apps/trinity-front/src/app/pages/Plataform';
import Path from 'apps/trinity-front/src/app/pages/Path';
import Home from 'apps/trinity-front/src/app/pages/Home';

const AppRoutes = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aprender" element={<Plataform />} />
          <Route path="/aprender/:ruta" element={<Path />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
