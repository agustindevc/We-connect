import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" style={{ backgroundColor: '#000', color: '#FFF', padding: '50px 20px' }}>
      <h2>¿Por qué elegir We-Connect?</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ marginBottom: '10px' }}>Conexión directa entre emprendedores</li>
        <li style={{ marginBottom: '10px' }}>Plataforma fácil de usar</li>
        <li style={{ marginBottom: '10px' }}>Oportunidades para crecimiento mutuo</li>
        <li style={{ marginBottom: '10px' }}>Espacio para colaboración y feedback</li>
      </ul>
    </section>
  );
};

export default FeaturesSection;