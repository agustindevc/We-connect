// src/pages/Profile/ProfileComponents/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", margin: "10px 0", width: "100%" }}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
