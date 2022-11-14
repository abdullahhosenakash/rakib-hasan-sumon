import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  const activeStyle = {
    color: '#fff',
    fontWeight: 'bold'
  };
  const notActiveStyle = {
    color: '#97a4af'

  };
  return (
    <NavLink
      to={to}
      className="text-decoration-none hover-effect"
      style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
