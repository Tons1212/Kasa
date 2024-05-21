import React from 'react';
import { NavLink } from 'react-router-dom';

function RentalCard(props) {
  return (
    <NavLink to={`/rental/${props.id}`}>
      <div className="rental">
        <img src={props.coverImage} alt="vue de l'hébergement" />
        <p className="rentalTitle">{props.title}</p>
      </div>
    </NavLink>
  );
}

export default RentalCard;
