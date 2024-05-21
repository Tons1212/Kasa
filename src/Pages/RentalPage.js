import React, { useState, useEffect } from 'react';
import '../Styles/main.css';
import RentalDesc from '../Components/RentalDesc';
import Carroussel from '../Components/Carroussel';
import RentalDetails from '../Components/RentalDetails';
import { useParams } from 'react-router-dom';

function RentalPage() {
  const { id } = useParams();
  const [choosenRental, setChoosenRental] = useState(null);
  useEffect(() => {
    fetchRentalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchRentalData() {
    fetch('/rentals.json')
      .then((res) => res.json())
      .then((rentals) => {
        const flat = rentals.find((rental) => rental.id === id);
        setChoosenRental(flat);
      })
      .catch(console.error);
  }
  return (
    <div className="rentalPage">
      {choosenRental == null ? (
        <div>...Loading</div>
      ) : (
        <>
          <Carroussel rentalPics={choosenRental.pictures} />
          <RentalDetails rental={choosenRental} />
          <RentalDesc
            description={choosenRental.description}
            equipments={choosenRental.equipments.map((equipment, i) => (
              <li key={i}>{equipment}</li>
            ))}
          />
        </>
      )}
    </div>
  );
}

export default RentalPage;
