import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";

import "./MainLayout.css";

const MainLayout = () => {
  return (
    <main>
      <FloatingButtons />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
