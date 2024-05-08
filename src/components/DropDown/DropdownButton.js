import React, { useState } from 'react';
import { Good, Plus, StrelkaVniz, StrelkaVverh } from '../../ui-kit/icons';
const DropdownButton = () => {
  const [selectedOption, setSelectedOption] = useState('Выгодная цена');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: 'Выгодная цена', icon: Good },
    { label: 'Дороже', icon: StrelkaVniz},
    { label: 'Дешевле', icon: StrelkaVverh },
    { label: 'новинки', icon: Plus }
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        {selectedOption}
        <StrelkaVniz className={`arrow-icon ${isOpen ? 'open' : ''}`} /> {/* Используем компонент для стрелки вниз */}
        </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              <div src={option.icon} alt={option.label} className="option-icon"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;