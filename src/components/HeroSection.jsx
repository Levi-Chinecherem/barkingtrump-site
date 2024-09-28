import React from 'react';

const HeroSection = () => {
  return (
    <div id="hero" className="bg-yellow-300 text-green-700 text-center h-[70vh] relative flex flex-col items-center justify-center">
      {/* Animated Banner Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="animate-bounce">
          <span className="text-6xl">🐶💰</span> {/* Emoji representation for comic feel */}
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-4 animate-pulse z-20">Barking Trump: The Memecoin President!</h1>
      <p className="text-xl mb-8 z-20">Join the Fun and Invest in Laughter!</p>
      
      {/* Positioning the button absolutely to ensure it's clickable */}
      <a 
        href="https://your-desired-url" // Replace with your actual URL
        target="_blank"
        rel="noopener noreferrer"
        className="z-20" // Ensuring the button is above other elements
      >
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition duration-300 ease-in-out cursor-pointer">
          Buy $BARKTRUMP
        </button>
      </a>
    </div>
  );
};

export default HeroSection;
