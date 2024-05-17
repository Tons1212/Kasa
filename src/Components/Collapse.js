import React from 'react';
import { useState, useEffect } from 'react';

function Collapse() {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false));

  useEffect(() => {
    const titles = document.querySelectorAll('.aboutDescTitle i');

    const onClick = (i) => {
      const updatedOpen = [...isOpen];
      updatedOpen[i] = !updatedOpen[i];
      setIsOpen(updatedOpen);
    };

    titles.forEach((title, i) => {
      title.addEventListener('click', () => onClick(i));
    });

    return () => {
      titles.forEach((title, i) => {
        title.removeEventListener('click', () => onClick(i));
      });
    };
  }, [isOpen]);

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
          <span className="aboutDescTitle">
            {section.title}
            <i
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
