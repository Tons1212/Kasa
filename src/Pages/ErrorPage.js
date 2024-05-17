import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/main.css';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="errorPage">
        <h1 className="errorTitle">404</h1>
        <p className="errorText">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/">
          <p className="homeReturn">Retourner à la page d'accueil</p>
        </NavLink>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
