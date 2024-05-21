import React, { useState } from 'react';

function RentalDesc(props) {
  const [isOpen, setIsOpen] = useState({
    description: false,
    equipments: false,
  });

  const openSlide = (section) => {
    setIsOpen((slideOpen) => ({
      ...slideOpen,
      [section]: !slideOpen[section],
    }));
  };

  return (
    <div className="rentDescHeader">
      <div className="rentalDescAndEquip">
        <span className="rentalDescAndEquipTitle">
          Description
          <i
            onClick={() => openSlide('description')}
            className={`fa-solid fa-chevron-${
              isOpen['description'] ? 'down' : 'up'
            }`}
          />
        </span>
        {isOpen['description'] && <p>{props.description}</p>}
      </div>
      <div className="rentalDescAndEquip">
        <span className="rentalDescAndEquipTitle">
          Equipements
          <i
            onClick={() => openSlide('equipments')}
            className={`fa-solid fa-chevron-${
              isOpen['equipments'] ? 'down' : 'up'
            }`}
          />
        </span>
        {isOpen['equipments'] && <p>{props.equipments}</p>}
      </div>
    </div>
  );
}

export default RentalDesc;
