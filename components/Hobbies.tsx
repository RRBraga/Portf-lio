import React from 'react';
import { HOBBIES } from '../constants';
import type { Hobby } from '../types';

const HobbyCard: React.FC<{ hobby: Hobby }> = ({ hobby }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-indigo-500/30 transition-shadow duration-300">
      <h3 className="text-xl font-bold text-white mb-2">{hobby.name}</h3>
      <p className="text-gray-400">{hobby.description}</p>
    </div>
  );
};

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Hobbies</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOBBIES.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;