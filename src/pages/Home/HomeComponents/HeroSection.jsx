import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard'); // Esta ruta debe existir en tu router
  };

  return (
    <section style={{ backgroundColor: '#FFC107', color: '#000', textAlign: 'center', padding: '50px' }}>
      <h2>Bienvenidos a We-Connect</h2>
      <p>Conectamos emprendedores para colaborar y crecer juntos.</p>
      <button onClick={handleClick} style={{ padding: '10px 20px', backgroundColor: '#000', color: '#FFF' }}>
        Únete a la comunidad
      </button>
    </section>
  );
};

export default HeroSection;