import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>
          Conecta Colabora Crece <br />
          <b>We-connect</b>
        </h2>
        <p className="hero-subtitle">
          La plataforma ideal para jóvenes emprendedores que buscan comprar, ofrecer y crecer.
        </p>
        <Link to="/register">
          <button className="hero-cta">Únete a la Comunidad</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
