// pages/Dashboard.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import UserPanel from "../../components/Dashboard/UserPanel";

const Dashboard = () => {
  const mockUser = {
    name: "Juan Pérez",
    email: "juanperez@example.com",
    role: "Administrador",
  };

  return (
    <div className="dashboard">
      <h1>Pagina de inicio de usuario registrado</h1>
      <button className="add-product-btn">Agregar Producto</button>

      <div className="links">
        <Link to="/dashboard/profile" className="link-perfil-usuario">
          Ir a perfil de usuario
        </Link>
        <Link to="/dashboard/product" className="link-producto">
          Producto/s
        </Link>
      </div>

      {/* Panel de Usuario */}
      <div className="user-panel-container">
        <UserPanel user={mockUser} />
      </div>

      {/* Para renderizar componentes de rutas anidadas */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
