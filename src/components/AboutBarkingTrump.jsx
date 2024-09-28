import React from 'react';

const AboutBarkingTrump = () => {
  return (
    <div id="about" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-green-600 animate-bounce">About BarkingTrump</h2>

      {/* First Section: Image on top and text below */}
      <div className="flex flex-col items-center mb-8">
        <img 
          src="src/assets/pic1.png" // Updated to use pic1.png
          alt="Comic Strip" 
          className="w-full max-w-sm border-4 border-green-500 rounded-lg shadow-lg" // Reduced size
        />
        <p className="text-lg mt-4 text-green-700 px-4 sm:px-8 md:px-12"> {/* Added padding for smaller screens */}
          🐶 BarkingTrump is here to shake up the crypto scene with a wagging tail and a whole lot of fun! 💰
        </p>
        <p className="text-lg mb-8 text-green-700 px-4 sm:px-8 md:px-12"> {/* Added padding for smaller screens */}
          Join us on this wild ride as we unleash the power of laughter and investment in the world of memes!
        </p>
      </div>

      {/* Second Section: Text on top and image below */}
      <div className="flex flex-col items-center mb-8">
        <img 
          src="src/assets/pic2.png" // Updated to use pic2.png
          alt="Comic Element" 
          className="w-1/2 max-w-sm"
        />
        <p className="text-lg mb-4 text-green-700 px-4 sm:px-8 md:px-12"> {/* Added padding for smaller screens */}
          🌟 Our mascot, Barking Trump, believes that every investment should come with a side of laughter!
        </p>
        <p className="text-lg mb-8 text-green-700 px-4 sm:px-8 md:px-12"> {/* Added padding for smaller screens */}
          Join the pack and let’s make crypto fun again!
        </p>
      </div>
    </div>
  );
};

export default AboutBarkingTrump;
