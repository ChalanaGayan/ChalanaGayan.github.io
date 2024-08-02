import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Header />
      <Section id="projects" title="My Projects" />
      <Section id="education" title="My Education" />
      <Section id="achievements" title="My Achievements" />
      <Section id="interests" title="What I'm Interested In" />
      <Section id="cv" title="My CV" />
      <Section id="experience" title="My Experience" />
      <Footer />
    </div>
  );
};

export default App;
