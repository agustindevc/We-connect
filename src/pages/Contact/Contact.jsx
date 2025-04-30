import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Datos del formulario de contacto:', formData);
    alert('Mensaje enviado (funcionalidad backend no implementada)'); // Mensaje temporal
    // Después de enviar, podrías resetear el formulario:
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      <p>¿Tienes alguna pregunta o comentario? ¡No dudes en contactarnos!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-button">Enviar Mensaje</button>
      </form>

      {/* Opcional: Información de contacto adicional */}
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p>Puedes contactarnos también a través de:</p>
        <ul>
          <li>Email: <a href="mailto:info@tuemail.com">info@tuemail.com</a></li>
          <li>Teléfono: +34 123 456 789</li>
          {/* <li>Redes Sociales: [Enlaces a tus redes sociales]</li> */}
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;