import React from 'react';
import clientImage from '../assets/client.png';

const Projects = () => {
  const clients = [
    { title: 'STARTUP 1', description: 'Design tips for designers that cover everything you need.' },
    { title: 'STARTUP 2', description: 'Insights for creating impactful projects and branding.' },
    { title: 'STARTUP 3', description: 'Innovative solutions for modern challenges.' },
    { title: 'STARTUP 4', description: 'Strategies for successful marketing campaigns.' },
  ];

  return (
    <div className="bg-white p-6 sm:p-10">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8">
        <h2
          className="text-2xl sm:text-3xl font-bold"
          style={{
            color: '#333EA0',
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
          }}
        >
          Our Clients and Projects
        </h2>
        <hr className="border-blue-400 w-full sm:w-1/4 sm:ml-4 mt-2 sm:mt-0" />
      </div>

      
      <div className="space-y-10">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex-shrink-0">
              <span
                className="text-purple-700 font-bold"
                style={{ fontSize: '2rem', lineHeight: '2rem' }}
              >
                •
              </span>
            </div>

           
            <div className="flex flex-col space-y-2">
              <h3
                className="text-lg sm:text-xl font-semibold"
                style={{ color: '#592EA9' }}
              >
                {client.title}
              </h3>

              <div className="flex flex-col sm:flex-row items-start sm:space-x-6">
                
                <div className="w-full sm:w-auto">
                  <img
                    src={clientImage}
                    alt="Client"
                    className="rounded-lg object-cover shadow-md"
                    style={{ width: '200px', height: '150px' }}
                  />
                </div>

               
                <div className="text-gray-600 text-lg">
                  <b>{client.description}</b>
                  <p className="mt-2">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
