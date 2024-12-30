import React from 'react';
import clientImage from '../assets/client.png'; 

const Projects = () => {
  return (
    <div className="bg-white p-10">
      <h2 className="text-2xl font-bold mb-8"><h1>Our Clients and Projects</h1></h2>
      <div className="space-y-6">
        
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div>
             
              <img
                src={clientImage}
                alt="Client"
                className="rounded-lg object-cover shadow-md"
                style={{ width: '500px', height: '300px' }} 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-700">STARTUP</h3>
              <p className="text-gray-600">
               <b> Design tips for designers that cover everything you need.</b>
               <p>Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
