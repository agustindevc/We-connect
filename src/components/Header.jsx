import React from 'react';
import Navbar from './NavBar';
import Menu from '../pages/Home/HomeComponents/Menu';

const Header = () => {
  return (
    <header style={{
      width: "100%",
      backgroundColor: '#000',
      color: '#ffffff',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0, color: '#ffffff' }}>We-Connect</h1>
      <Menu style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }} />
    </header>
  );
};

export default Header;
