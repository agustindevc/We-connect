import React from 'react';
import './FeaturedProducts.css';
import ProductCard from '../../../components/ProductCard'; // Asegúrate de que la ruta sea correcta

function FeaturedProducts() {
  // Datos de ejemplo de productos destacados (REEMPLAZAR CON DATOS REALES)
  const featuredProducts = [
    {
      id: 1,
      name: 'Producto Innovador X',
      description: 'Descripción breve y atractiva del Producto Innovador X para emprendedores.',
      price: '$29.99',
      imageUrl: '/images/producto-x.jpg', // Asegúrate de que la ruta de la imagen sea correcta
    },
    {
      id: 2,
      name: 'Servicio de Consultoría Estratégica',
      description: 'Asesoramiento experto para hacer crecer tu emprendimiento. ¡Reserva tu sesión!',
      price: 'Consultar',
      imageUrl: '/images/consultoria.jpg', // Asegúrate de que la ruta de la imagen sea correcta
    },
    {
      id: 3,
      name: 'Herramienta de Marketing Digital Pro',
      description: 'Potencia tu presencia online con esta increíble herramienta de marketing.',
      price: '$49/mes',
      imageUrl: '/images/marketing-tool.jpg', // Asegúrate de que la ruta de la imagen sea correcta
    },
    {
      id: 4,
      name: 'Curso Online de Finanzas para Startups',
      description: 'Aprende a gestionar las finanzas de tu startup de manera efectiva.',
      price: '$99',
      imageUrl: '/images/curso-finanzas.jpg', // Asegúrate de que la ruta de la imagen sea correcta
    },
    // Puedes añadir más productos de ejemplo aquí
  ];

  return (
    <section className="featured-products">
      <h2 className="featured-products-title">Productos y Servicios Destacados</h2>
      <div className="featured-products-grid">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="featured-products-actions">
        <button className="view-all-button">Ver Todos los Productos y Servicios</button>
      </div>
    </section>
  );
}

export default FeaturedProducts;