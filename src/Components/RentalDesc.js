import React, { useState } from 'react';

function RentalDesc(props) {
  const [isOpen, setIsOpen] = useState({
    description: false,
    equipments: false,
  });

  const toggleOpen = (section) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [section]: !prevOpen[section],
    }));
  };

  return (
    <div className="rentDescHeader">
      <div className="rentalDesc">
        <span
          className="rentalDescTitle"
          onClick={() => toggleOpen('description')}
        >
          Description
          <i
            className={`fa-solid fa-chevron-${
              isOpen['description'] ? 'down' : 'up'
            }`}
          />
        </span>
        {isOpen['description'] && <p>{props.description}</p>}
      </div>
      <div className="rentalEquipements">
        <span
          className="rentalEquipementsTitle"
          onClick={() => toggleOpen('equipments')}
        >
          Equipements
          <i
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
