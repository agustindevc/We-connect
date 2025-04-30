import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Importa el archivo de estilos

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.post(
        'https://tudominio.com/backend/register.php',
        {
          nombre: formData.nombre,
          email: formData.email,
          password: formData.password
        }
      );

      alert('Registro exitoso');
      window.location.href = '/login';

    } catch (error) {
      alert(error.response?.data?.error || 'Error en el registro');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Crear cuenta</h2>

        <label htmlFor="nombre" className="form-label">Nombre </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-input"
        />

        <button type="submit" className="register-button">Registrarse</button>

        <div className="login-link-container">
          <Link to="/login" className="login-link">¿Ya tienes una cuenta? Inicia sesión aquí</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;