import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const headerStyle = {
    backgroundColor: 'black',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold'
  };

  const logoLinkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  const navStyle = {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease'
  };

  const buttonStyle = {
    backgroundColor: '#646cff',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const renderButtons = () => {
    switch(location.pathname) {
      case '/':
        return (
          <>
            <Link to="/login" style={linkStyle}>Iniciar Sesión</Link>
            <Link to="/register" style={linkStyle}>Registrarse</Link>
          </>
        );
      case '/dashboard':
        return (
          <>
            <Link to="/profile" style={linkStyle}>Mi Perfil</Link>
            <Link to="/AddProduct" style={linkStyle}>Añadir Producto</Link>
            <button 
              onClick={() => handleLogout()} 
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#535bf2'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#646cff'}
            >
              Cerrar Sesión
            </button>
          </>
        );
      case '/profile':
        return (
          <>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/AddProduct" style={linkStyle}>Añadir Producto</Link>
            <button 
              onClick={() => handleLogout()} 
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#535bf2'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#646cff'}
            >
              Cerrar Sesión
            </button>
          </>
        );
      default:
        return (
          <Link to="/" style={linkStyle}>Volver al Inicio</Link>
        );
    }
  };

  const handleLogout = () => {
    // Aquí tu lógica de logout
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Link to="/" style={logoStyle}>We-Connect</Link>
      </div>
      <nav style={navStyle}>
        {renderButtons()}
      </nav>
    </header>
  );
};

export default Header;