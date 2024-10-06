import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/HomePage/Header';
import Home from './components/HomePage/Home';
import Donate from './components/HomePage/Donate';
import AboutSection from './components/HomePage/AboutSection';
import ContactSection from './components/HomePage/ContactSection';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
