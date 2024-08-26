import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './Pages/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import LeadershipRoles from './components/LeadershipRoles';
import ExtracurricularActivities from './components/ExtracurricularActivities';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, e.g., fetching data
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <LoadingScreen isLoading={isLoading}>
      <div className="bg-gray-900 text-white">
        {/* <Navbar /> */}
        {/* <Header /> */}
        <Home />
        <Skills />
        <Projects />
        <Achievements />
        <LeadershipRoles />
        <ExtracurricularActivities />
        {/* <Section /> */}
        <Footer />

      </div>
    </LoadingScreen>
  );
};

export default App;
