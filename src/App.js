import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import RentalsGrid from "./Components/RentalsGrid";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RentalsGrid />
      <Footer />
    </div>
  );
}

export default App;
