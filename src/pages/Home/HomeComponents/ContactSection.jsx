import React from 'react';
import './ContactSection.css'; // Creamos un archivo de estilos para esta sección

function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">¿Tienes alguna pregunta? ¡Contáctanos!</h2>
      <p className="contact-subtitle">Nuestro equipo está listo para ayudarte en tu camino emprendedor.</p>
      <div className="contact-form-wrapper">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="Tu mensaje"></textarea>
          </div>
          <button type="submit" className="contact-button">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;