import React, { useState } from "react";
import SearchBar from "./DashboardComponents/SearchBar";
import FeaturedProducts from "./DashboardComponents/FeaturedProducts";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import "./Dashboard.css";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="dashboard-container">
      <div className="dashboard-header"> {/* Nuevo contenedor para la barra de búsqueda y el botón */}
        <SearchBar search={search} setSearch={setSearch} />
        <Link to="/AddProduct" className="add-product-button">
          Crear Producto
        </Link>
      </div>
      <FeaturedProducts search={search} />
    </div>
  );
};

export default Dashboard;