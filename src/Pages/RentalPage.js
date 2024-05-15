import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import RentalDesc from '../Components/RentalDesc';
import RentalBanner from '../Components/RentalBanner';
import RentalDetails from '../Components/RentalDetails';
import { useParams } from 'react-router-dom';

function RentalPage() {
  const { id } = useParams();
  const [choosenRental, setChoosenRental] = useState(null);
  useEffect(() => {
    fetchRentalData();
  }, []);

  function fetchRentalData() {
    console.log('toto');
    fetch('/rentals.json')
      .then((res) => res.json())
      .then((rentals) => {
        const flat = rentals.find((rental) => rental.id === id);
        setChoosenRental(flat);
      })
      .catch(console.error);
  }
  if (choosenRental == null) return <div>...loading</div>;
  return (
    <div className="rentalPage">
      <RentalBanner rentalPics={choosenRental.pictures} />
      <RentalDetails rental={choosenRental} />
      <RentalDesc
        description={choosenRental.description}
        equipments={choosenRental.equipments.map((equipment, i) => (
          <ul key={i}>
            <li>{equipment}</li>
          </ul>
        ))}
      />
    </div>
  );
}

export default RentalPage;
