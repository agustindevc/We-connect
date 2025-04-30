import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios'; // npm install axios

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí va tu lógica de login
    //Si quieres lo comentas
    try {
      const response = await axios.post(
        'https://tudominio.com/backend/login.php', // URL de tu endpoint PHP
        {
          email: email,
          password: password
        }
      );
      
      // Si el login es exitoso
      alert(response.data.message);
      // Aquí guardarías el token de autenticación o redirigirías
      // Ejemplo: localStorage.setItem('token', response.data.token);
      // Ejemplo de redirección: window.location.href = '/home';
      
    } catch (error) {
      alert(error.response?.data?.error || "Error desconocido");
    }
  };

  // console.log("Componente Login renderizado");  // Esto debería aparecer en la consola si el componente se está renderizando.

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
        <div className="register-link">
          <Link to="/Register">¿No tienes una cuenta? Regístrate aquí</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
