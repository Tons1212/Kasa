import React from 'react';

function RentalDetails(props) {
  return (
    <div className="rentalHeader">
      <div className="rentalTitle">
        <h1>{props.rental.title}</h1>
        <h2>{props.rental.location}</h2>
        <div className="rentalTags">
          {props.rental.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="rentalOwnerDetails">
        <div className="rentalOwner">
          <h3>{props.rental.host.name}</h3>
          <div className="rentalOwnerPic">
            <img src={props.rental.host.picture} alt="profil du propriétaire" />
          </div>
        </div>
        <div className="rentalOwnerRating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={props.rental.rating >= star ? 'on' : ''}
            >
              <i className="fa-solid fa-star"></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RentalDetails;
