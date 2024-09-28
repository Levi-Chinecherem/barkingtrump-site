import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <header className="bg-yellow-200 text-green-600 py-4 z-50 relative"> {/* Added z-index */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">BarkingTrump</h1>
        
        {/* Dog Head Emoji for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none" aria-label="Toggle Menu">
            🐶 {/* Dog Head Emoji */}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex md:static ${isOpen ? 'block' : 'hidden'} absolute bg-yellow-200 md:bg-transparent w-full md:w-auto top-16 left-0 z-50`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li><a href="#hero" className="hover:text-green-400 block py-2">Home</a></li>
            <li><a href="#about" className="hover:text-green-400 block py-2">About</a></li>
            <li><a href="#features" className="hover:text-green-400 block py-2">Features</a></li>
            <li><a href="#roadmap" className="hover:text-green-400 block py-2">Roadmap</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
