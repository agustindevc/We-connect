import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <h1>Producto Publicado</h1>
      <p>Aquí se muestra un producto que un emprendedor ha publicado.</p>

      <div className="links">
        <Link to="/dashboard" className="link-pagina-principal">Volver</Link>
        <Link to="/dashboard/profile" className="link-a-perfil">Ver Perfil</Link>
      </div>
    </div>
  );
};

export default Product;
