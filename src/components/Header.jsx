import React from 'react';
import Menu from '../pages/Home/HomeComponents/Menu';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#000', color: '#FFF' }}>
      <h1 style={{ margin: 0, color: 'white' }}>We-Connect</h1>
      <Menu style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, color: '#FFF' }} />
    </header>
  );
};

export default Header;
