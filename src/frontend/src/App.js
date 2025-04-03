import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components (placeholders for now)
import Home from './Home'; // Will need to create these components if you don't have them yet
import About from './About'; // Will need to create these components if you don't have them yet
import Analytics from './Analytics'; // Analytics page
import Profile from './Profile'; //profile 
// The App component
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
          <Link to="/Analytics">Analytics</Link> {/* Corrected Link to Analytics page */}
          <Link to="/Profile">Profile</Link>
        </nav>

        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


            
