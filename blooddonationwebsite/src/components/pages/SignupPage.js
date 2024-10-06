import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../HomePage/Header';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for success or error messages
  const navigate = useNavigate();

  // Make sure handleSignup is defined inside the SignupPage component
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Signup Successful!'); // Set success message
        navigate('/login'); // Redirect to the login page after signup
      } else {
        setMessage(`Signup Failed: ${data.error || 'Something went wrong'}`); // Set error message
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`); // Handle network or other errors
    }
  };

  return (
    <div>
      <Header />
      <div className="signup-page">
        <form onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor='username'>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          {message && <p>{message}</p>} {/* Display the message */}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
