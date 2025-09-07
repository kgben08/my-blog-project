
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-dark-gray text-base-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold font-lato text-seafoam-green">Developing English Evolution</h2>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Developing English Evolution. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 font-lato">
            <button onClick={() => navigateTo('about')} className="hover:text-soft-coral transition-colors duration-300">運営者情報</button>
            <button onClick={() => navigateTo('privacy')} className="hover:text-soft-coral transition-colors duration-300">プライバシーポリシー</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
