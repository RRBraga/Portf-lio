
import React from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-indigo-500/30 transition-shadow duration-300">
      <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
      <p className="text-gray-400">{skill.description}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Habilidades</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
