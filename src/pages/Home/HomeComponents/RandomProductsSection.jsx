import React, { useState, useEffect, useRef } from 'react';
import styles from './RandomProductsSection.module.css';
import ProductCard from '../../../components/ProductCard'; // Asegúrate de que la ruta sea correcta

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
      imageUrl: `https://via.placeholder.com/220x200?text=Producto+${i + 1}`,
      price: `$${Math.floor(Math.random() * 100) + 1}.99`, // Añadimos un precio de ejemplo
    }));
    setProducts(mockProducts);
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const transformValue = `translateX(-${(100 / totalPages) * currentPage}%)`;

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Productos Destacados</h2> {/* Renombrar el título */}

      <div className={styles.carouselWrapper}>
        <div className={styles.slider} ref={sliderRef} style={{ width: `${100 * totalPages}%`, transform: transformValue }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <div key={i} className={styles.slide} style={{ width: `${100 / totalPages}%` }}>
              {products
                .slice(i * productsPerPage, (i + 1) * productsPerPage)
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigation}>
        <button
          className={styles.button}
          onClick={() => setCurrentPage(prev => (prev > 0 ? prev - 1 : 0))}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        <span className={styles.pagination}>{currentPage + 1} de {totalPages}</span>
        <button
          className={styles.button}
          onClick={() => setCurrentPage(prev => (prev + 1) % totalPages)}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default RandomProductsSection;