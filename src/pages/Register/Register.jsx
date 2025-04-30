import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    alias: '',
    email: '',
    contrasena: '',
    confirmPassword: ''
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
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px'
        }}
      >
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: '#333'
        }}>Crear cuenta</h2>
        
        <label 
          htmlFor="nombre"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#666'
          }}
        >Nombre completo</label>
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
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />

        <label 
          htmlFor="contrasena"
          style={{
            display: 'block',
            marginBottom: '0.5rem',
            color: '#666'
          }}
        >Contraseña</label>
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

        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginBottom: '1rem'
          }}
        >Registrarse</button>
        
        <div style={{
          marginTop: '15px',
          textAlign: 'center'
        }}>
          <Link 
            to="/login"
            style={{
              color: '#007bff',
              textDecoration: 'none'
            }}
          >¿Ya tienes una cuenta? Inicia sesión aquí</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;