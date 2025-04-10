// components/Navbar.jsx
import React from 'react';
import UserPanel from './Dashboard/UserPanel'; // Asegúrate de la ruta correcta

const Navbar = () => {
  const mockUser = {
    name: "Ernesto",
    email: "juanperez@example.com",
    role: "Administrador",
  };

  return (
    <nav style={{ 
      backgroundColor: '#000', 
      color: '#FFF', 
      padding: '10px 20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        margin: 0, 
        padding: 0 
      }}>
        <li style={{ margin: '0 20px' }}><a href="#home" style={{ color: '#FFF' }}>Inicio</a></li>
        <li style={{ margin: '0 20px' }}><a href="#about" style={{ color: '#FFF' }}>Acerca de</a></li>
        <li style={{ margin: '0 20px' }}><a href="#features" style={{ color: '#FFF' }}>Servicios</a></li>
        <li style={{ margin: '0 20px' }}><a href="#contact" style={{ color: '#FFF' }}>Contacto</a></li>
      </ul>

      {/* Panel de usuario en Navbar */}
      <div style={{ backgroundColor: '#222', padding: '10px 15px', borderRadius: '8px' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{mockUser.name}</p>
        <p style={{ margin: 0, fontSize: '12px' }}>{mockUser.role}</p>
      </div>
    </nav>
  );
};

export default Navbar;
