import React from 'react';

const Roadmap = () => {
  return (
    <div id="roadmap" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-green-600 animate-bounce">🚀 Roadmap 🚀</h2>
      
      {/* Comic-style Timeline Video */}
      <div className="flex flex-col items-center mb-8">
        <video 
          src="src/assets/barkingtrump2.mp4" // Replace with your video path
          alt="Roadmap Timeline"
          className="w-full max-w-lg border-4 border-green-500 rounded-lg shadow-lg"
          controls // Add controls to allow users to play/pause the video
           // Optional: set to true if you want the video to play automatically
          loop // Optional: set to true if you want the video to loop
        />
        
        {/* Timeline Features */}
        <div className="text-lg text-green-700 mt-4 px-4 sm:px-8 md:px-12">
          <div>🗓️ <b>Phase 1:</b> Launch the BarkingTrump community and create buzz! 🎉</div><br />
          <div>📈 <b>Phase 2:</b> Achieve King of the Hill status at $20K and $30K market cap! 👑</div><br />
          <div>💥 <b>Phase 3:</b> Break the bonding curve pattern as buying increases! 📊</div><br />
          <div>🔗 <b>Phase 4:</b> At $70K, automatically list on Dexscreener and add liquidity! 🌐</div><br />
          <div>🏆 <b>Phase 5:</b> Reach a market cap of $50 billion and list on CEX! 💰</div>
        </div>
      </div>

      <p className="text-lg mb-4 text-green-700 px-4 sm:px-8 md:px-12">
        Join us on our journey to success and let’s make crypto fun together! 🐶💰
      </p>
    </div>
  );
};

export default Roadmap;
