import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="Button">
      {label}
    </button>
  );
};

export default Button;
