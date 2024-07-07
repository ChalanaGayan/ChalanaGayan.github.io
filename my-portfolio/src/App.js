// src/App.js
import React from 'react';
import ThreeDScene from './ThreeDScene';
import SocialIcons from './SocialIcons';
import './App.css';

function App() {
  return (
    <div className="App">
      <video className="background-video" autoPlay loop muted>
        <source src="/path/to/your/video.mp4" type="video/mp4" />
      </video>
      <ThreeDScene />
      <SocialIcons />
      <a href="https://wa.me/your-number" className="whatsapp-button">
        <img src="/path/to/whatsapp-icon.png" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default App;
