import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "./shared/components/sidebar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="main">
      <Sidebar />
      <RouterProvider router={routes} />
    </div>
  </React.StrictMode>
);
