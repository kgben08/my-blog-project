'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="bg-base-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="cursor-pointer">
            <h1 className="text-2xl font-bold font-lato text-seafoam-green">
              Developing English Evolution
            </h1>
            <p className="text-xs text-dark-gray/70">親子で進化する英語学習</p>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-lato text-dark-gray hover:text-seafoam-green transition-colors duration-300">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-soft-coral text-dark-gray font-lato px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="メニューを開く">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-lato text-dark-gray hover:text-seafoam-green transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-soft-coral text-dark-gray font-lato px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
