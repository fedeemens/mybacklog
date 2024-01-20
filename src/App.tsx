import { Outlet } from "react-router-dom";
import Sidebar from "./shared/components/sidebar/sidebar";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
