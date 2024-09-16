import React from 'react';
function PersonalizedGreeting({ name }) {
  const getGreetingMessage = (name) => {
    return `Hello, ${name}!`; 
  };

  return (
    <div className="personalized-greeting">
      <h1>{getGreetingMessage(name)}</h1>
    </div>
  );
}

export default PersonalizedGreeting;
