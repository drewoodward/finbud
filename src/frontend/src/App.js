import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components
import Home from './pages/Home';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Chatbot from './components/Chatbot/Chatbot'; // Import Chatbot

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>FinBud</h1>
        </header>

        {/* Navigation using Link for client-side routing */}
        <nav>
          <Link to="/">Home</Link>    {/*default landing page*/}
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
