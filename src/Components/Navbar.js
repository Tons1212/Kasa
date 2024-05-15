import React from 'react';
import '../Styles/main.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink to="/">
        <img src="/logo.png" alt="logo Kasa" />
      </NavLink>
      <div className="navBarLink">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A Propos</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
