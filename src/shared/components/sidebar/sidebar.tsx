import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">Perfil</div>
      <div className="pages">
        <Link to="/home" className="link">
          Inicio
        </Link>
        <Link to="/goals" className="link">
          Objetivos
        </Link>
        <Link to="/tasks" className="link">
          Tareas
        </Link>
        <Link to="/goals" className="link">
          Estadisticas
        </Link>
      </div>
      <div className="config">Configuracion</div>
    </div>
  );
}

export default Sidebar;
