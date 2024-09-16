import React from 'react';

function ComplexComponent() {
  return (
    <div className="complex-container">
      <header className="complex-header">
        <h1>Complex Component Header</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="complex-section">
        <h2>Main Section</h2>
        <p>This is a section of the complex component. It contains some text and other elements.</p>
        <div className="sub-section">
          <h3>Sub-section</h3>
          <p>This is a sub-section within the main section.</p>
        </div>
      </section>
      <footer className="complex-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default ComplexComponent;
