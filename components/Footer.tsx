import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex justify-center space-x-6 mb-4 sm:mb-0">
          {SOCIAL_LINKS.map((social: SocialLink) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              aria-label={social.name}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;