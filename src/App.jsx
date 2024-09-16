import React, { useState } from 'react';
import Header from './assets/Header'; 
import Footer from './assets/Footer';
import Profile from './assets/Profile';
import UserCard from './assets/UserCard';
import Content from './Content';
import FavoriteFoods from './assets/FavoriteFoods';
import Greeting from './Greeting'; 
import Button from './Button';
import Counter from './Counter';
import ComplexComponent from './ComplexComponent'; 
import PersonalizedGreeting from './PersonalizedGreeting'; 
import DateTime from './DateTime';
import Welcome from './Welcome'; 
import UserProfile from './UserProfile';
import Product from './Product';
import button1 from './button1';
import ContactCard from './ContactCard';
import ShoppingCart from './ShoppingCart';
const headingStyle = {
  color: 'blue',
};

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(30);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const names = ['Harsha', 'Ram', 'Akhil', 'Sai'];

  return (
    <div className="App">
      <Header /> 
      <Greeting /> 
      <Content />
      <div className="intro-text">
        {/* JSX is a syntax extension for JavaScript. It looks similar to HTML but is used in React to describe the UI structure. 
        JSX allows us to write elements inside JavaScript code and makes it easier to create React components. */}
        <h1 style={headingStyle}>Welcome to React</h1> 
        <p>React is a JavaScript library for building user interfaces.</p>
      </div>
      <div className="profile-inputs">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <Profile name={name} age={age} />
      <div className="user-cards">
        <UserCard name="Harsha" location="Madanapalli" />
        <UserCard name="Sai" location="Bangalore" />
      </div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <FavoriteFoods />
      <div className="button-container">
        <Button label="Button 1" onClick={() => alert('Button 1 clicked!')} />
        <Button label="Button 2" onClick={() => alert('Button 2 clicked!')} />
        <Button label="Button 3" onClick={() => alert('Button 3 clicked!')} />
      </div>
      
      <Counter />
      <ComplexComponent />
      <PersonalizedGreeting name={name} />
      <DateTime />
      <Welcome name="Harsha" />
      <Welcome name="Sai" />
      <Welcome name="Bittu" />
      <UserProfile name="Harsha" age={30} />
      <UserProfile name="Sai" age={25} />
      <UserProfile name="Raj" age={40} location="Hyderabad" />
      <div className="product-list">
        <Product name="Product 1" price={49000} description="A great product for everyday use." />
        <Product name="Product 2" price={56000} description="An amazing product with high quality." />
        <Product name="Product 3" price={77000} description="The best product you can find." />
      </div>
      <div className="button-container">
        <button1 text="Primary Button" color="#007bff" />
        <button1 text="Secondary Button" color="#6c757d" />
        <button1 text="Success Button" color="#28a745" />
        <button1 text="Danger Button" color="#dc3545" />
      </div>
      <ContactCard contact={contact} />
      <ShoppingCart products={products} /> 
      <Footer />
    </div>
  );
}

export default App;
