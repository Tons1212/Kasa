import React, { useState } from 'react';

function RentalBanner(props) {
  const pictures = props.rentalPics;
  const [currentPic, setCurrentPic] = useState(0);
  const addClassName = (i) => {
    if (i === currentPic) return 'visible';
    return '';
  };
  const nextPic = () => {
    setCurrentPic((currentPic + 1) % pictures.lenght);
  };
  const prevPic = () => {
    const newCurrentPic = currentPic - 1;
    if (newCurrentPic < 0) {
      setCurrentPic(currentPic - 1);
      return;
    }
    setCurrentPic(currentPic - 1);
  };
  return (
    <div className="rentalBanner">
      <i onClick={prevPic} className="chevron fa-solid fa-chevron-left"></i>
      <i onClick={nextPic} className="chevron fa-solid fa-chevron-right"></i>
      {pictures.map((pic, i) => (
        <img
          key={pic}
          src={pic}
          alt="carousel de la location"
          className={addClassName(i)}
        ></img>
      ))}
      ;
    </div>
  );
}

export default RentalBanner;
