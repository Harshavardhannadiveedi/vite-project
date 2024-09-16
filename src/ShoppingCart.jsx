import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = ({ products }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};
ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShoppingCart;
