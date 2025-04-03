import './App.css';
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components
import Home from './Home';
import About from './About';
import Analytics from './Analytics';
import Profile from './Profile';
import Chatbot from './Chatbot'; // Import Chatbot

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components (placeholders for now)
import Home from './Home'; // Will need to create these components if you don't have them yet
import About from './About'; // Will need to create these components if you don't have them yet

// The App component
>>>>>>> fbc0992c (directory cleanup)
function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>FinBud</h1>
        </header>

<<<<<<< HEAD
        {/* Navigation using Link for client-side routing */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/analytics">Analytics</Link> {/* Lowercase for consistency */}
          <Link to="/profile">Profile</Link>
=======
        {/* Navigation (you can use Link from react-router-dom for client-side navigation) */}
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
>>>>>>> fbc0992c (directory cleanup)
        </nav>

        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Floating Chatbot - appears on all pages */}
        <Chatbot />
=======
        </Routes>
>>>>>>> fbc0992c (directory cleanup)
      </div>
    </Router>
  );
}

export default App;

<<<<<<< HEAD
=======

          
          

>>>>>>> fbc0992c (directory cleanup)
            
