import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components (placeholders for now)
import Home from './Home'; // Will need to create these components if you don't have them yet
import About from './About'; // Will need to create these components if you don't have them yet

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
        </nav>

        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
       

            
