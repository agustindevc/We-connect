import React from 'react';
import './FeaturesSection.css'; // Creamos un archivo de estilos para esta sección
import FeatureCard from './FeatureCard'; // Asumiendo un componente para cada característica

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Conecta con Emprendedores',
      description: 'Encuentra y conecta con otros jóvenes emprendedores con ideas afines.',
      icon: '/../imagenes/', // Placeholder para un icono
    },
    {
      id: 2,
      title: 'Colabora en Proyectos',
      description: 'Forma equipos, comparte habilidades y trabaja en proyectos innovadores juntos.',
      icon: '/imagen/cohete', // Placeholder para un icono
    },
    {
      id: 3,
      title: 'Ofrece tus Productos y Servicios',
      description: 'Vende tus creaciones y ofrece tus servicios a una comunidad activa.',
      icon: '/images/icon-offer.svg', // Placeholder para un icono
    },
    {
      id: 4,
      title: 'Descubre Nuevas Oportunidades',
      description: 'Encuentra oportunidades de negocio, financiación y crecimiento para tu emprendimiento.',
      icon: '/images/icon-discover.svg', // Placeholder para un icono
    },
    // Puedes añadir más características aquí
  ];

  return (
    <section className="features-section">
      <h2>Impulsa tu Emprendimiento con We-connect</h2>
      <div className="features-grid">
        {features.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;