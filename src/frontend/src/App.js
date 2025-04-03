import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components
import Home from './Home';
import About from './About';
import Analytics from './Analytics';
import Profile from './Profile';
import Chatbot from './Chatbot'; // Import Chatbot

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>FinBud</h1>
        </header>

        {/* Navigation using Link for client-side routing */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/analytics">Analytics</Link> {/* Lowercase for consistency */}
          <Link to="/profile">Profile</Link>
        </nav>

        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Floating Chatbot - appears on all pages */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;

            
