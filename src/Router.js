import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
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
        element: <About />,
      },
    ],
  },
]);
