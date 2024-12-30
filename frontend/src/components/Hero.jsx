import React from 'react';
import cardImage from '../assets/card.jpeg'; 

const Hero = () => {
  return (
    <div className="bg-purple-100 p-10">
      <div className="flex justify-between items-center">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-4">Step-by-step guide to choosing great font pairs</h1>
          <p className="text-gray-600 mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded">Start a Project</button>
        </div>
        <div className="w-1/2">
          
          <img src={cardImage} alt="Card" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
