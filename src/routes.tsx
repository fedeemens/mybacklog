import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Tasks from "./pages/Tasks";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/goals",
    element: <Goals />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
]);
