import React from "react";
import { Link } from "react-router-dom";  // Importa el Link de React Router
import "./Product.css"; // Importa los estilos específicos

const Product = () => {
  return (
    <div className="product">
      <h1>Producto Publicado</h1>
      <p>Aquí se muestra un producto que un emprendedor ha publicado.</p>

      <div className="links">
        <Link to="/dashboard" className="link-pagina-principal">Volver</Link>
        <Link to="/profile" className="link-a-perfil">Ver Perfil</Link>
      </div>
    </div>
  );
};

export default Product;