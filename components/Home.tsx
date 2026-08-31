import React from 'react';
import { DownloadIcon } from './icons';
import profileImage from '../assets/images/perfil.jpg';

const Home: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <a
            href="https://www.linkedin.com/in/rafael-braga-753a78222/?skipRedirect=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5uuh%2Bh8GQaeUKHWiPHTFSA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-95 transition-opacity"
          >
            <img
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-indigo-500 shadow-lg object-cover"
              src={profileImage}
              alt="Rafael Braga"
            />
          </a>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Rafael Braga
          </h1>
          <p className="text-xl md:text-2xl text-indigo-300 mb-8 font-light tracking-wide">
            Desenvolvedor Full-Stack
          </p>
          <a
            href="/curriculo.pdf"
            download="curriculo.pdf"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            <DownloadIcon className="w-5 h-5 mr-3" />
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;