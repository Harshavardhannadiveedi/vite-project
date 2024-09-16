import React from 'react';

function DateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString(); 

  return (
    <div className="datetime">
      <h2>Current Date and Time</h2>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  );
}

export default DateTime;
