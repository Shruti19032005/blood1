import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Save a Life, Donate Blood</h1>
        <p>Your blood donation can save lives. Join us today in this noble cause.</p>
        <button className="donate-btn">Become a Donor</button>
      </div>
    </section>
  );
}

export default HeroSection;
