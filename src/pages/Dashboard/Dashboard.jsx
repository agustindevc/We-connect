import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Pagina de inicio de usuario registrado</h1>
      <Link to="/AddProduct" className="add-product-btn">Agregar Producto</Link>

      <div className="links">
        <Link to="/profile" className="link-perfil-usuario">Ir a perfil de usuario</Link>
        <Link to="/Product" className="link-producto">Producto/s</Link>
      </div>
    </div>
  );
};

export default Dashboard;
