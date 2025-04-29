import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          padding: "15px",
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#666",
          }}
        >
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
