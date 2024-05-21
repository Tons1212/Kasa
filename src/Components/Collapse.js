import React, { useState } from 'react';
import aboutSections from '../Datas/aboutSections.json';

function Collapse() {
  const [isOpen, setIsOpen] = useState(Array(aboutSections.length).fill(false));

  const openCollapse = (collapse) => {
    const collapseOpen = [...isOpen];
    collapseOpen[collapse] = !collapseOpen[collapse];
    setIsOpen(collapseOpen);
  };

  return (
    <div className="aboutCollapse">
      {aboutSections.map((section, index) => (
        <div key={index} className="aboutDesc">
          <span className="aboutDescTitle">
            {section.title}
            <i
              onClick={() => openCollapse(index)}
              className={`fa-solid fa-chevron-${
                isOpen[index] ? `down` : `up`
              } ${isOpen[index] ? `open` : ``}`}
            ></i>
          </span>
          {isOpen[index] && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Collapse;
