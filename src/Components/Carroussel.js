import React, { useState } from 'react';

function Carroussel(props) {
  const pictures = props.rentalPics;
  const length = pictures.length;
  const [currentPic, setCurrentPic] = useState(0);
  const addClassName = (i) => {
    if (i === currentPic) return 'visible';
    return '';
  };
  const nextPic = () => {
    setCurrentPic((currentPic + 1) % pictures.length);
  };
  const prevPic = () => {
    setCurrentPic((currentPic - 1 + pictures.length) % pictures.length);
  };
  return (
    <div className="carroussel">
      {length > 1 && (
        <i onClick={prevPic} className="chevron fa-solid fa-chevron-left"></i>
      )}
      {pictures.map((pic, i) => (
        <img
          key={i}
          src={pic}
          alt="Carroussel de la location"
          className={addClassName(i)}
        />
      ))}
      {length > 1 && (
        <i onClick={nextPic} className="chevron fa-solid fa-chevron-right"></i>
      )}
      {length > 1 && (
        <div className="carrousselCounter">
          {currentPic + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carroussel;
