import React from 'react';

const Greeting = () => {
  const currentHour = new Date().getHours(); 
  const isMorning = currentHour < 12; 

  return (
    <div className="Greeting">
      <h2>{isMorning ? 'Good morning!' : 'Good evening!'}</h2>
    </div>
  );
};

export default Greeting;
