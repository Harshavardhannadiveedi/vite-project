import React from 'react';
import PropTypes from 'prop-types'; 
const UserProfile = ({ name, age, location = 'Unknown' }) => { 
  return (
    <div className="user-profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string,
};

export default UserProfile;
