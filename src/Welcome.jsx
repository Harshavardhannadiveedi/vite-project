import React from 'react';
import PropTypes from 'prop-types'; 

const Welcome = ({ name }) => { 
  return (
    <div className="welcome-message">
      <h1>Hello, {name}!</h1>
    </div>
  );
};
Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;
