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

      <Footer />
    </div>
  );
};

export default App;
