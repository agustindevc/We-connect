import React from "react";
import { Link } from "react-router-dom";  // Importa el Link de React Router
import "./Home.css"; // Importa los estilos específicos

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenidos a We-Connect</h1>
      <p>Una comunidad para emprendedores que se apoyan mutuamente.</p>
      <button className="cta-btn">Únete ahora</button>

      <div className="links">
        <Link to="/dashboard" className="go-to-dashboard-link">Ir al Dashboard</Link>
        <Link to="/profile" className="go-to-profile-link">Ver perfil</Link>
      </div>
    </div>
  );
};

export default Home;
