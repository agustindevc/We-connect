import React from "react";
import { BsSearch } from "react-icons/bs"; // Si estás usando React Icons

const SearchBar = ({ search, setSearch }) => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f1f1f1", // Fondo suave
          borderRadius: "30px", // Bordes redondeados más suaves
          padding: "10px 20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Sombra sutil
          width: "100%",
          maxWidth: "600px", // Ancho máximo
          margin: "0 auto", // Centrado
          transition: "box-shadow 0.3s ease", // Transición de la sombra
        }}
      >
        <BsSearch
          style={{
            width: "20px",
            height: "20px",
            color: "#888", // Lupa con color gris claro
            marginRight: "15px",
            transition: "color 0.3s ease", // Transición para el color
          }}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Busca productos..."
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            padding: "8px 12px", // Mejor espacio dentro del input
            fontSize: "16px",
            color: "#333", // Color de texto oscuro
            backgroundColor: "transparent", // Fondo transparente
            borderRadius: "20px", // Bordes redondeados
            transition: "border-color 0.3s ease", // Transición de borde al foco
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
