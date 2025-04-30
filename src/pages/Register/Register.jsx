import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css'; // Importa el archivo de estilos

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    alias: '',
    email: '',
    contrasena: '',
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

    // if (formData.contrasena !== formData.confirmPassword) {
    //   alert('Las contraseñas no coinciden');
    //   return;
    // }

    try {
      const response = await axios.post(
        'https://mediumblue-sheep-674670.hostingersite.com/We-Connect/backend/register.php',
        {
          nombre: formData.nombre,
          alias: formData.alias,
          email: formData.email,
          contrasena: formData.contrasena
        }
      );

      alert('Registro exitoso');
      window.location.href = './Login'; // Redirigir a la página de inicio de sesión

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
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />

        {/* Añado alias necesito que lo acomodes*/}
        <label htmlFor="alias">Alias</label>
        <input
          type="text"
          id="alias"
          name="alias"
          value={formData.alias}
          onChange={handleChange}
          required
        />


        <label 
          htmlFor="email"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#666'
          }}
        >Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />

        <label htmlFor="contrasena" className="form-label">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />

        {/* <label 
          htmlFor="confirmPassword"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#666'
          }}
        >Confirmar contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }} 
        />*/}

        <button type="submit" className="register-button">Registrarse</button>

        <div className="login-link-container">
          <Link to="/login" className="login-link">¿Ya tienes una cuenta? Inicia sesión aquí</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;