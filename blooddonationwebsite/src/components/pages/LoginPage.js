import React, { useState } from 'react'; // Importing useState from React
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory
import './LoginPage.css';
import Header from '../HomePage/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State for success or error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login Successful!'); // Set success message
        navigate('/'); // Redirect to the homepage or another page
      } else {
        setMessage(`Login Failed: ${data.error || 'Invalid credentials'}`); // Set error message
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`); // Handle network or other errors
    }
  };

  return (
    <div>
      <Header />
      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
