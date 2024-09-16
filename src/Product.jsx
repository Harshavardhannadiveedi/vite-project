import React from 'react';
const Product = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <p className="product-price">₹{price.toFixed(2)}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default Product;
