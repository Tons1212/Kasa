import React from 'react';
import { NavLink } from 'react-router-dom';

function Rental(props) {
  return (
    <NavLink to={`/rental/${props.id}`}>
      <div className="rental">
        <img src={props.coverImage} alt="dfskj" />
        <p className="rentalTitle">{props.title}</p>
      </div>
    </NavLink>
  );
}

export default Rental;
