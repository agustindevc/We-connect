import React from 'react';
import Navbar from './NavBar';

const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#000', 
      color: '#FFF', 
      padding: '20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <h1 style={{ margin: 0 }}>We-Connect</h1>
      <Navbar />
    </header>
  );
};

export default Header;
