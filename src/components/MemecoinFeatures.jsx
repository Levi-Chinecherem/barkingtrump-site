import React from 'react';

const MemecoinFeatures = () => {
  return (
    <div id="features" className="py-20 bg-gray-200 text-center">
      <h2 className="text-4xl font-bold mb-6 text-green-600 animate-bounce">🌟 Memecoin Features 🌟</h2>
      
      {/* Visual Infographics replaced with Video */}
      <div className="flex justify-center mb-8">
        <video 
          src="/assets/barkingtrump1.mp4" // Replace with your video path
          alt="Infographic Video" 
          className="w-full max-w-lg border-4 border-green-500 rounded-lg shadow-lg" 
          controls // Optional: To allow video control (play, pause, etc.)
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      <p className="text-lg mb-4 text-green-700 px-4 sm:px-8 md:px-12 font-bold">
        🎉 Discover the amazing benefits of investing in BarkingTrump! 🐶💰
      </p>
      
      <div className="text-lg text-green-700 px-4 sm:px-8 md:px-12">
        <div>🚀 <b>Exciting Growth Potential:</b> Memecoins can go to the moon!</div><br />
        <div>😂 <b>Fun Community:</b> Join our laughter-filled pack!</div><br />
        <div>💸 <b>Rewarding Experiences:</b> Invest and earn while you chuckle!</div><br />
        <div>🐾 <b>Unique Mascot:</b> Barking Trump brings a smile to every investor!</div>
      </div>
    </div>
  );
};

export default MemecoinFeatures;
