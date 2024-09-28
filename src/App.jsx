import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutBarkingTrump from './components/AboutBarkingTrump';
import MemecoinFeatures from './components/MemecoinFeatures';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroSection />
        <AboutBarkingTrump />
        <MemecoinFeatures />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default App;
