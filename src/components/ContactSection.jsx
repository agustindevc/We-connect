import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" style={{ backgroundColor: '#FFC107', color: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px 20px' }}>
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta o quieres saber más sobre nuestra plataforma?</p>
      <form style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '10px', flexWrap: 'wrap' }}>
        <input 
          type="email" 
          placeholder="Tu correo electrónico" 
          required 
          style={{ padding: '10px', flex: '1 1 40%' }} 
        />
        <textarea 
          placeholder="Tu mensaje" 
          required 
          style={{ padding: '10px', flex: '1 1 40%' }} 
        />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: '#000', color: '#FFF', flex: '1 1 100%' }}
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
