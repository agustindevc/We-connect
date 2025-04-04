import React from "react";
import { Link } from "react-router-dom";  // Importa el Link de React Router
import "./Dashboard.css"; // Importa los estilos específicos

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>¡Bienvenido a tu Dashboard!</h1>
      <button className="add-product-btn">Agregar Producto</button>

      <div className="links">
        <Link to="/profile" className="go-to-profile-link">Ir a mi perfil</Link>
        <Link to="/product" className="go-to-product-link">Ver Producto</Link>
      </div>
    </div>
  );
};

export default Dashboard;
