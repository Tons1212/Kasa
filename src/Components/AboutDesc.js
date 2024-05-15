import React from 'react';
import { useState } from 'react';

function AboutDesc() {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));

  const toggleOpen = (index) => {
    const updatedOpen = [...isOpen];
    updatedOpen[index] = !updatedOpen[index];
    setIsOpen(updatedOpen);
  };

  const aboutSections = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondamentales de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        'Nous mettons tout en œuvre pour vous offrir un service irréprochable. Notre équipe se tient à votre disposition pour répondre à toutes vos questions, avant, pendant et après votre séjour.',
    },
    {
      title: 'Sécurité',
      content:
        'La sécurité est notre priorité. Tous nos logements sont équipés des dernières technologies en matière de sécurité. De plus, nous organisons régulièrement des formations sur la sécurité domestique pour nos hôtes.',
    },
  ];

  return (
    <div>
      {aboutSections.map((section, index) => (
        <div key={index} className="aboutDesc">
          <span className="aboutDescTitle" onClick={() => toggleOpen(index)}>
            {section.title}
            <i
              className={`fa-solid fa-chevron-${isOpen[index] ? 'down' : 'up'}`}
            ></i>
          </span>
          {isOpen[index] && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default AboutDesc;
