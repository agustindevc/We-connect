//barra lateral
// components/Dashboard/Sidebar.jsx
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Inicio</Link></li>
        <li><Link to="/dashboard/otra-vista">Otra Vista</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
