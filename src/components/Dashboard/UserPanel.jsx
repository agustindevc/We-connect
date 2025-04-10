// src/components/Dashboard/UserPanel.jsx
import React from 'react';

const UserPanel = ({ user }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Panel de Usuario</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Correo:</strong> {user.email}</p>
      <p><strong>Rol:</strong> {user.role}</p>
    </div>
  );
};

export default UserPanel;
