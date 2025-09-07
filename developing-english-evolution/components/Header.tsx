
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  return (
    <header className="bg-base-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <h1 className="text-2xl font-bold font-lato text-seafoam-green">
              Developing English Evolution
            </h1>
            <p className="text-xs text-dark-gray/70">親子で進化する英語学習</p>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateTo('home')}
              className="font-lato text-dark-gray hover:text-seafoam-green transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('blog')}
              className="font-lato text-dark-gray hover:text-seafoam-green transition-colors duration-300"
            >
              Blog
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="font-lato text-dark-gray hover:text-seafoam-green transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => navigateTo('privacy')}
              className="bg-soft-coral text-dark-gray font-lato px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
