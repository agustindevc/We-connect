import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./FeaturedProducts.css"; // Importa los estilos

// Generador de productos simulados
const generateProducts = () =>
  Array.from({ length: 30 }, (_, i) => ({
    id: i,
    name: `Producto ${i + 1}`,
    description: "Descripción breve del producto.",
    image: `https://via.placeholder.com/200x150?text=Producto+${i + 1}`,
  }));

const FeaturedProducts = ({ search }) => {
  const [products, setProducts] = useState(generateProducts());

  useEffect(() => {
    const interval = setInterval(() => {
      setProducts((prev) => {
        const newProducts = [...prev];
        const index = Math.floor(Math.random() * newProducts.length);
        newProducts[index] = {
          ...newProducts[index],
          name: `Producto ${Math.floor(Math.random() * 100) + 1}`,
          description: "Descripción actualizada.",
          image: `https://via.placeholder.com/200x150?text=Producto+${Math.floor(
            Math.random() * 100 + 1
          )}`,
        };
        return newProducts;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="featured-products-grid">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;