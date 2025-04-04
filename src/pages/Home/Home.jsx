import React from "react";
import { Link } from "react-router-dom";  // Importa el Link de React Router
import "./Home.css"; // Importa los estilos específicos

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenidos a We-Connect</h1>
      <p>comunidad de emprendedores</p>
      <button className="cta-btn">Únete ahora</button>

      <div className="links">
        <Link to="/dashboard" className="link-iniciar-sesion">iniciar sesion (demo)</Link> {/*lleva a la pagina principal de usuario registrado*/}
      </div>
    </div>
  );
};

export default Home;
