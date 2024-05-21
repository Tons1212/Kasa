import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Footer';
import ErrorPage from './Pages/ErrorPage';
import RentalPage from './Pages/RentalPage';

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/rental/:id',
        element: <RentalPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);
