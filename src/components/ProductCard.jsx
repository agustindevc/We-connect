import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom'; // Si usas Link aquí

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        {product.image && <img src={product.image} alt={product.name} />}
      </div>
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <Link to={`/producto/${product.id}`} className="view-details-button">Ver Detalles</Link>
      </div>
    </article>
  );
}

export default ProductCard;