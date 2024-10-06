import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing the CSS for styling

const Header = () => {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = React.useState('Home');

  const handleLinkClick = (link) => { 
    setActiveLink(link);
    // You can add navigation logic here if using React Router
    console.log(`${link} clicked`);
  };

  return (
    <header className="header">
      <div className="logo">Blood Donation</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a 
              href="/" 
              onClick={() => handleLinkClick('Home')} 
              className={activeLink === 'Home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/#about" 
              onClick={() => handleLinkClick('About')} 
              className={activeLink === 'About' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/#contact" 
              onClick={() => handleLinkClick('Contact')} 
              className={activeLink === 'Contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="/#donate" 
              onClick={() => handleLinkClick('Donate')} 
              className={activeLink === 'Donate' ? 'active' : ''}
            >
              Donate
            </a>
          </li>
          <li>
            <Link
              to="/login" 
              onClick={() => handleLinkClick('Login')} 
              className={activeLink === 'Login' ? 'active' : ''}
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/signup" 
              onClick={() => handleLinkClick('Signup')} 
              className={activeLink === 'Signup' ? 'active' : ''}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
