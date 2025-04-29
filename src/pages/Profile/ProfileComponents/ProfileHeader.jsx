
import React from "react";

const ProfileHeader = ({ profile, isOwner }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "30px" }}>
      <img
        src={profile.image}
        alt="Logo"
        style={{ borderRadius: "50%", width: "150px", height: "150px", objectFit: "cover", marginBottom: "20px" }}
      />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <p><strong>Ciudad:</strong> {profile.city}</p>
      <p><strong>Productos:</strong> {profile.category}</p>
      {isOwner && <button style={{ padding: "10px 20px", backgroundColor: "#FFA500", border: "none", cursor: "pointer" }}>Editar perfil</button>}
    </div>
  );
};

export default ProfileHeader;
