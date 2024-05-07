import React from "react";
import "../Styles/main.css";

function Navbar() {
  return (
    <nav className="navBar">
      <img src="logo.png" alt="logo Kasa" />
      <div className="navBarLink">
        <a href="">Accueil</a>
        <a href="">A Propos</a>
      </div>
    </nav>
  );
}

export default Navbar;
