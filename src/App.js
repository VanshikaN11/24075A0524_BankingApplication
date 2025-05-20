import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

import Registration from './components/Registration';
import Login from './components/Login';
import BalanceEnquiry from './components/BalanceEnquiry';
import Transfers from './components/Transfers';
import Profile from './components/Profile';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(1000);

  const handleRegister = (userData) => {
    setUser(userData);
    alert('Registration successful! Please login.');
  };

  const handleLogin = ({ email, password }) => {
    if (user && user.email === email && user.password === password) {
      alert('Login successful!');
      setUser(user); 
    } else {
      alert('Invalid credentials or user not registered.');
    }
  };

  const handleTransfer = (recipient, amount) => {
    setBalance(prevBalance => prevBalance - amount);
    alert(`Sent $${amount.toFixed(2)} to ${recipient}`);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-links">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/balance">Balance Enquiry</Link></li>
            <li><Link to="/transfers">Transfers</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            {user && (
              <li>
                <button onClick={() => setUser(null)} className="logout-button">Logout</button>
              </li>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to={user ? "/balance" : "/login"} />} />
          <Route path="/register" element={<Registration onRegister={handleRegister} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/balance" element={<BalanceEnquiry balance={balance} />} />
          <Route path="/transfers" element={<Transfers balance={balance} onTransfer={handleTransfer} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
