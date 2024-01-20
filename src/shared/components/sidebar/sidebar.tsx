import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  let routes = [
    {
      link: "/home",
      title: "Inicio",
      icon: "home",
    },
    {
      link: "/goals",
      title: "Objetivos",
      icon: "description",
    },
    {
      link: "/tasks",
      title: "Tareas",
      icon: "task",
    },
    {
      link: "/home",
      title: "Estadisticas",
      icon: "analytics",
    },
  ];

  return (
    <div className="sidebar">
      <div className="profile sidebar-element">
        <span className="material-icons-round">account_circle</span>
        Perfil
      </div>

      <div className="pages">
        {routes.map((route, i) => {
          return (
            <Link to={route.link} key={i} className="link sidebar-element">
              <span className="material-icons-round">{route.icon}</span>
              {route.title}
            </Link>
          );
        })}
      </div>

      <div className="config sidebar-element">
        <span className="material-icons-round">settings</span>
        Configuracion
      </div>
    </div>
  );
}

export default Sidebar;
