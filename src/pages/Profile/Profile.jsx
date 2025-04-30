import React from "react";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import ProductList from "./ProfileComponents/ProductList";

const Profile = () => {
  const styles = {
    page: {
      width: "100%",
      height: "auto",
      padding: "20px",
      boxSizing: "border-box",
    },
    heading: {
      color: "var(--color-negro)",
    },
  };

  //obtener datos de la de la base de datos
  const profileData = {
    image: "https://via.placeholder.com/150", // Aquí colocarás la imagen del perfil o logo
    name: "Tienda Camisetas",
    description: "Diseñamos camisetas personalizadas",
    city: "Málaga",
    category: "Indumentaria",
    products: [
      { id: 1, title: "Camiseta Logo", description: "Camiseta con logo estampado" },
      { id: 2, title: "Camiseta Personalizada", description: "Diseña tu propia camiseta" },
    ],
  };

  const isOwner = true; // Puedes usar lógica de autenticación para determinar si el usuario es el propietario

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Perfil de Usuario</h1>
      <ProfileHeader profile={profileData} isOwner={isOwner} />
      <ProductList products={profileData.products} />
    </div>
  );
};

export default Profile;
