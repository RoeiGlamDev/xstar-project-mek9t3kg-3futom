import React from 'react';
import './Button.css'; // Assuming you will create a CSS file for styles

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button 
      className={`glam-button ${disabled ? 'disabled' : ''}`} 
      onClick={disabled ? undefined : onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;