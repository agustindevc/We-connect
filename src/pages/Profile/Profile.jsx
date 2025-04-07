import React from "react";
import { Link } from "react-router-dom";  // Importa el Link de React Router
import "./Profile.css";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <div className="profile">
      <h1>Mi Perfil</h1>
      <p>Aquí puedes editar tu perfil y ver tu información personal.</p>

      <div className="links">
        <Link to="/dashboard" className="go-to-dashboard-link">Ir al Dashboard</Link>
        <Link to="/product" className="go-to-product-link">Ver Producto</Link>
      </div>
    </div>
  );
};

export default Profile;
