import React from "react";
import { Link } from "react-router-dom";  // Importa el Link de React Router
import "./Dashboard.css"; // Importa los estilos específicos

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Pagina de inicio de usuario registrado</h1>
      <button className="add-product-btn">Agregar Producto</button>

      <div className="links">
        <Link to="/profile" className="link-perfil-usuario">Ir a perfil de usuario</Link> {/*Lleva a la pagina que muestra los detalles del producto publicado*/}
        <Link to="/product" className="link-producto">Producto/s</Link> {/*Lleva a la pagina que muestra los detalles del producto publicado*/}
      </div>
    </div>
  );
};

export default Dashboard;
