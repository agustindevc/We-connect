import React from 'react';
import Navbar from './NavBar';
import Menu from '../pages/Home/HomeComponents/Menu';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#000',
      color: '#ffffff',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0, color: '#ffffff' }}>We-Connect</h1>
      <Navbar>
        <Menu style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}/>
        
      </Navbar>
      
    </header>
  );
};

export default Header;
