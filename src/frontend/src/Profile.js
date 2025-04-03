import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [colorTheme, setColorTheme] = useState("#3498db");
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [netWorth, setNetWorth] = useState("$50,000"); // Example value

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`profile-container ${darkMode ? "dark" : ""}`}>
      <h2>Profile</h2>

      {/* Avatar Section */}
      <div className="avatar-section">
        <img src="/default-avatar.png" alt="User Avatar" className="avatar" />
        <button className="upload-btn">Upload New Avatar</button>
      </div>

      {/* Settings */}
      <div className="settings">
        <h3>Settings</h3>

        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>

        <label>
          Theme Color: 
          <input
            type="color"
            value={colorTheme}
            onChange={(e) => setColorTheme(e.target.value)}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={locationEnabled}
            onChange={() => setLocationEnabled(!locationEnabled)}
          />
          Enable Location Services
        </label>
      </div>

      {/* Net Worth Display */}
      <div className="net-worth">
        <h3>Net Worth</h3>
        <p>{netWorth}</p>
      </div>
    </div>
  );
};

export default Profile;
