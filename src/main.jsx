import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/routes";
import { UserContextProvider } from "./hooks/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  </React.StrictMode>
);
