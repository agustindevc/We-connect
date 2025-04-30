import React from 'react';
import './Footer.css'; // Creamos un archivo de estilos para este componente
import { Link } from 'react-router-dom'; // Si vas a usar enlaces internos

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>We-connect</h3>
          <p>Conectando jóvenes emprendedores para un futuro innovador.</p>
        </div>
        <div className="footer-section links">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li><Link to="/terminos">Términos de Servicio</Link></li>
            <li><Link to="/privacidad">Política de Privacidad</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Email: info@we-connect.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
        <div className="footer-section social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/facebook-icon.svg" alt="Facebook" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/twitter-icon.svg" alt="Twitter" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin-icon.svg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} We-connect. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;