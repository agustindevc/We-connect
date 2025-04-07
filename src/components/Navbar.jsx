import React from 'react';
import Menu from '../pages/Home/HomeComponents/Menu';

const Navbar = ({ children }) => {
  return (
    <nav style={{ backgroundColor: '#000', color: '#FFF', padding: '10px 0', marginRight: '3%' }}>
      { children }
    </nav>
  );
};

export default Navbar;