// src/components/Donate.js
import React from 'react';
import './Donate.css'; // Import the CSS file for styling

const Donate = () => {
  return (
    <div className="donate">
      <h1>Donate Blood</h1>
      <p>
        Thank you for considering donating blood. Your donation can help save lives and improve the health of those in need.
      </p>
      <h2>How to Donate:</h2>
      <ul>
        <li>Check your eligibility.</li>
        <li>Find a donation center near you.</li>
        <li>Schedule an appointment.</li>
        <li>Bring a friend and make a difference together!</li>
      </ul>
      <div className="donate-button">
        <a href="#contact" className="get-in-touch-button">Get in Touch</a>
      </div>
    </div>
  );
};

export default Donate;
