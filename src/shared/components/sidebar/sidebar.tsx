import { Link } from "react-router-dom";
import "./sidebar.scss";
import { useState } from "react";

function Sidebar() {
  const [sidebarColapsed, setSidebarColapsed] = useState<boolean>(false);

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

  const changeSidebarColapsedValue = () => {
    setSidebarColapsed(!sidebarColapsed);
  };

  return (
    <div className={`${sidebarColapsed ? "sidebar-colapsed" : ""} sidebar`}>
      <span
        className={`material-icons-round arrow-sidebar ${
          sidebarColapsed ? "rotate" : ""
        }`}
        onClick={changeSidebarColapsedValue}
      >
        arrow_back_ios
      </span>

      <h2 className="title">
        <span>My</span>
        <p className={sidebarColapsed ? "hide" : ""}>backlog</p>
      </h2>

      <div className="pages">
        {routes.map((route, i) => {
          return (
            <Link to={route.link} key={i} className="link sidebar-element">
              <span className="material-icons-round">{route.icon}</span>
              <p className={sidebarColapsed ? "hide" : ""}>{route.title}</p>
            </Link>
          );
        })}
      </div>

      <div className="config sidebar-element">
        <span className="material-icons-round">settings</span>
        <p className={sidebarColapsed ? "hide" : ""}>Configuracion</p>
      </div>
    </div>
  );
}

export default Sidebar;
