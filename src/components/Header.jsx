import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isCurrent = (path) => location.pathname === path;

  const headerStyle = {
    backgroundColor: 'black',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    display: 'inline-block',
    animation: 'wave 1.5s ease-in-out 0s 1, pause 8.5s ease-in-out 1',
  };

  const logoLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const navStyle = {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: '#646cff',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    gap: '5px',
  };

  const barStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: 'white',
  };

  const dropdownMenuStyle = {
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'absolute',
    top: '100%',
    right: '2rem',
    padding: '1rem',
    borderRadius: '8px',
    zIndex: 1000,
  };

  const handleLogout = () => {
    // Tu lógica de logout aquí
  };

  const renderNavItems = () => {
    const items = [];

    if (location.pathname === '/') {
      items.push(
        <Link key="login" to="/login" style={linkStyle}>Iniciar Sesión</Link>,
        <Link key="register" to="/register" style={linkStyle}>Registrarse</Link>
      );
    }

    if (
      location.pathname === '/dashboard' ||
      location.pathname === '/profile' ||
      location.pathname === '/AddProduct'
    ) {
      if (!isCurrent('/profile')) {
        items.push(<Link key="profile" to="/profile" style={linkStyle}>Mi Perfil</Link>);
      }
      if (!isCurrent('/AddProduct')) {
        items.push(<Link key="addproduct" to="/AddProduct" style={linkStyle}>Añadir Producto</Link>);
      }

      // "Volver al Inicio" solo si no estás en / ni /dashboard
      if (location.pathname !== '/' && location.pathname !== '/dashboard') {
        items.push(<Link key="home" to="/dashboard" style={linkStyle}>Volver al Inicio</Link>);
      }

      // "Cerrar Sesión" siempre al final
      items.push(
        <button
          key="logout"
          onClick={handleLogout}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#535bf2'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#646cff'}
        >
          Cerrar Sesión
        </button>
      );
    }

    return items;
  };

  return (
    <>
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            20% { transform: translateY(-5px); }
            40% { transform: translateY(5px); }
            60% { transform: translateY(-3px); }
            80% { transform: translateY(3px); }
          }
          @keyframes pause {
            0% { transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .nav-desktop {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
          }
        `}
      </style>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <Link to="/" style={logoLinkStyle}>We-Connect</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-desktop" style={navStyle}>
          {renderNavItems()}
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger" style={hamburgerStyle} onClick={toggleMenu}>
          <div style={barStyle}></div>
          <div style={barStyle}></div>
          <div style={barStyle}></div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div style={dropdownMenuStyle}>
            {renderNavItems()}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
