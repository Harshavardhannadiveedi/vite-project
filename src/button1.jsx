import React from 'react';
const button = ({ text, color }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className="button" style={buttonStyle}>
      {text} 
    </button>
  );
};

export default button;
