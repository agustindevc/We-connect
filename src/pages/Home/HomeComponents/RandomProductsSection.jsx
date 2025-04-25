import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  
  useEffect(() => {
    // Aquí deberás hacer la llamada a tu API para obtener productos aleatorios
    // Este es un ejemplo de estructura de datos
    const mockProducts = [
      { id: 1, name: 'Producto 1', description: 'Descripción 1', image: 'url1' },
      { id: 2, name: 'Producto 2', description: 'Descripción 2', image: 'url2' },
      // ... más productos
    ];
    setProducts(mockProducts);
  }, []);

  const containerStyle = {
    padding: '50px 20px',
    backgroundColor: '#f5f5f5'
  };

  const carouselStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    margin: '20px 0',
    flexWrap: 'wrap'
  };

  const productCardStyle = {
    width: '220px',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px'
  };

  const navigationStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#FFC107',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const productsPerPage = 5;  // Cambiado de 3 a 5
  const totalPages = Math.ceil(products.length / productsPerPage);

  const getCurrentPageProducts = () => {
    const start = currentPage * productsPerPage;
    return products.slice(start, start + productsPerPage);
  };

  return (
    <section style={containerStyle}>
      <h2>Productos Destacados</h2>
      <div style={carouselStyle}>
        {getCurrentPageProducts().map(product => (
          <div key={product.id} style={productCardStyle}>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div style={navigationStyle}>
        <button 
          style={buttonStyle}
          onClick={() => setCurrentPage(prev => prev > 0 ? prev - 1 : prev)}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <span>{currentPage + 1} de {totalPages}</span>
        <button 
          style={buttonStyle}
          onClick={() => setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev)}
          disabled={currentPage === totalPages - 1}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default RandomProductsSection;