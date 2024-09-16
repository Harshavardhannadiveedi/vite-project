import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = ({ contact }) => {
  const { email, phone, address } = contact;

  return (
    <div className="contact-card">
      <h2>Contact Information</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};
ContactCard.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactCard;
