import { Outlet } from "react-router-dom";

import "./FormLayout.css";

const FormLayout = () => {
  return (
    <main className="FormLayout">
      <Outlet />
    </main>
  );
};

export default FormLayout;
