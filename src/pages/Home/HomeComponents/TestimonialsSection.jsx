import React from 'react';
import './TestimonialsSection.css'; // Creamos un archivo de estilos para esta sección
import TestimonialCard from './TestimonialCard'; // Asumiendo un componente para cada testimonio

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Ana Pérez',
      role: 'Fundadora de TechStart',
      quote: 'We-connect ha sido fundamental para conectar con otros emprendedores y encontrar colaboradores increíbles para mi proyecto.',
      image: '/images/ana-perez.jpg', // Placeholder para la imagen del usuario
    },
    {
      id: 2,
      name: 'Carlos López',
      role: 'Creador de EcoSolutions',
      quote: 'Gracias a We-connect pude dar a conocer mis servicios a una audiencia de jóvenes emprendedores realmente comprometidos.',
      image: '/images/carlos-lopez.jpg', // Placeholder para la imagen del usuario
    },
    {
      id: 3,
      name: 'Sofía Gómez',
      role: 'Desarrolladora Freelance',
      quote: 'La plataforma es genial para encontrar proyectos interesantes y colaborar con gente con talento. ¡Muy recomendable!',
      image: '/images/sofia-gomez.jpg', // Placeholder para la imagen del usuario
    },
    // Puedes añadir más testimonios aquí
  ];

  return (
    <section className="testimonials-section">
      <h2 >Lo que dicen nuestros emprendedores</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;