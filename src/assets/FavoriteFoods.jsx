import React from 'react';

const FavoriteFoods = () => {
  const foods = ['Biryani', 'Noodles', 'Burger', 'Pizza', 'Icecream'];
  return (
    <div className="FavoriteFoods">
      <h2>Favorite Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
};
export default FavoriteFoods;
