import React, { useEffect, useState } from 'react';
import Rental from './Rental.js';

function RentalsGrid() {
  const [rentals, setRentals] = useState([]);
  useEffect(fetchRentals, []);
  function fetchRentals() {
    fetch('rentals.json')
      .then((res) => res.json())
      .then((res) => setRentals(res))
      .catch(console.error);
  }
  return (
    <div className="rentalsGrid">
      {rentals.map((rental, i) => (
        <Rental
          key={i}
          title={rental.title}
          coverImage={rental.cover}
          id={rental.id}
        />
      ))}
    </div>
  );
}

export default RentalsGrid;
