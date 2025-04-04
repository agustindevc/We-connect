import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#000', color: '#FFF', padding: '10px 0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={{ margin: '0 20px' }}><a href="#home" style={{ color: '#FFF' }}>Inicio</a></li>
        <li style={{ margin: '0 20px' }}><a href="#about" style={{ color: '#FFF' }}>Acerca de</a></li>
        <li style={{ margin: '0 20px' }}><a href="#features" style={{ color: '#FFF' }}>Servicios</a></li>
        <li style={{ margin: '0 20px' }}><a href="#contact" style={{ color: '#FFF' }}>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;