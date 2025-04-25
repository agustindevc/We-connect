import React from 'react';
import HeroSection from './HomeComponents/HeroSection';
import AboutSection from './HomeComponents/AboutSection';
import FeaturesSection from './HomeComponents/FeaturesSection';
import TestimonialsSection from './HomeComponents/TestimonialsSection';
import ContactSection from './HomeComponents/ContactSection';
import RandomProductsSection from './HomeComponents/RandomProductsSection';

const styles = {
  container: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem', // Añadido espacio entre secciones
    backgroundColor: '#ffffff',
    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.05)' // Sombra interior sutil
  },
  heading: {
    color: 'var(--color-amarillo)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' // Sombra suave para títulos
  },
  ctaButton: {
    backgroundColor: 'var(--color-amarillo)',
    color: 'var(--color-negro)',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra para botones
    '&:hover': {
      backgroundColor: 'var(--color-negro)',
      color: 'var(--color-blanco)',
      transform: 'translateY(-2px)', // Efecto de elevación al hover
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)' // Sombra más pronunciada en hover
    }
  },
  links: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)' // Sombra sutil para contenedor de enlaces
  },
  link: {
    display: 'block',
    marginTop: '20px',
    color: 'var(--color-amarillo)',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.05)', // Sombra sutil para texto
    '&:hover': {
      color: 'var(--color-negro)',
      transform: 'translateX(5px)' // Efecto de deslizamiento al hover
    }
  },
  section: {
    width: '100%',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Sombra para secciones
    margin: '0',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)' // Efecto de elevación al hover
    }
  }
};

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.section}><HeroSection /></div>
      <div style={styles.section}><AboutSection /></div>
      <div style={styles.section}><RandomProductsSection /></div>
      <div style={styles.section}><FeaturesSection /></div>
      <div style={styles.section}><TestimonialsSection /></div>
      <div style={styles.section}><ContactSection /></div>
    </div>
  );
};

export default Home;