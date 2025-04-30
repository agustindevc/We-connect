import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom'; // Asegúrate de que Link está importado

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">We-connect</Link>
        <nav className="navigation">
          <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
          <NavLink to="/dashboard" activeClassName="active">Productos</NavLink>
          <NavLink to="/contacto" activeClassName="active">Contacto</NavLink>
        </nav>
        <div className="user-actions">
          <Link to="/login" className="login-button">Iniciar Sesión</Link> {/* Usamos Link para el inicio de sesión */}
          <Link to="/register" className="register-button">Registrarse</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;