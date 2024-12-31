import React from 'react';
import cardImage from '../assets/card.jpeg'; 

const Hero = () => {
  return (
    <div className="bg-purple-100 p-6 sm:p-10 pt-10 sm:pt-16">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="max-w-lg mb-6 sm:mb-0">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
            Step-by-step guide to choosing great font pairs
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 text-center sm:text-left">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          
          {/* Button */}
          <div className="text-center sm:text-left">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200">
              Start a Project
            </button>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="w-full sm:w-1/2">
          <img src={cardImage} alt="Card" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
