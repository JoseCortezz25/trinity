import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FloatingButtons from "../../components/FloatingButtons/FloatingButtons";
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
