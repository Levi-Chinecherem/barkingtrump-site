import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BarkingTrump. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://x.com/TrumpBarking"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775a4.934 4.934 0 002.163-2.724 9.867 9.867 0 01-3.127 1.188A4.922 4.922 0 0016.616 3c-2.732 0-4.943 2.211-4.943 4.943 0 .387.045.765.127 1.124C7.691 8.84 4.066 6.88 1.64 3.88c-.427.733-.669 1.58-.669 2.488 0 1.71.87 3.213 2.188 4.091a4.908 4.908 0 01-2.235-.616v.061c0 2.396 1.703 4.392 3.96 4.847a4.935 4.935 0 01-2.229.084c.627 1.953 2.445 3.375 4.592 3.414A9.867 9.867 0 010 20.539 13.943 13.943 0 007.548 22c9.056 0 14.002-7.497 14.002-13.986 0-.213-.005-.426-.014-.637A10.024 10.024 0 0024 4.59a9.948 9.948 0 01-2.847.775 4.947 4.947 0 002.164-2.724z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
