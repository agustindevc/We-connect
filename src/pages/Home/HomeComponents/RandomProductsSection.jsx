import React, { useState, useEffect, useRef } from 'react';

const RandomProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 5;
  const sliderRef = useRef(null);

  useEffect(() => {
    // Simulación de productos desde backend
    const mockProducts = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `Producto ${i + 1}`,
      description: `Descripción ${i + 1}`,
      image: `https://via.placeholder.com/220x200?text=Producto+${i + 1}`
    }));
    setProducts(mockProducts);
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const containerStyle = {
    padding: '50px 20px',
    backgroundColor: '#f5f5f5'
  };

  const carouselWrapperStyle = {
    overflow: 'hidden',
    width: '100%',
    position: 'relative'
  };

  const sliderStyle = {
    display: 'flex',
    width: `${100 * totalPages}%`,
    transform: `translateX(-${(100 / totalPages) * currentPage}%)`,
    transition: 'transform 0.6s ease-in-out'
  };

  const slideStyle = {
    width: `${100 / totalPages}%`,
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    boxSizing: 'border-box',
    padding: '20px 0'
  };

  const productCardStyle = {
    width: '220px',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    flexShrink: 0
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

  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < totalPages; i++) {
      const group = products.slice(i * productsPerPage, (i + 1) * productsPerPage);
      slides.push(
        <div key={i} style={slideStyle}>
          {group.map(product => (
            <div key={product.id} style={productCardStyle}>
              <img src={product.image} alt={product.name} style={imageStyle} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      );
    }
    return slides;
  };

  return (
    <section style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Productos Destacados</h2>

      <div style={carouselWrapperStyle}>
        <div style={sliderStyle} ref={sliderRef}>
          {getSlides()}
        </div>
      </div>

      <div style={navigationStyle}>
        <button
          style={buttonStyle}
          onClick={() => setCurrentPage(prev => (prev > 0 ? prev - 1 : 0))}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <span>{currentPage + 1} de {totalPages}</span>
        <button
          style={buttonStyle}
          onClick={() => setCurrentPage(prev => (prev + 1) % totalPages)}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default RandomProductsSection;
