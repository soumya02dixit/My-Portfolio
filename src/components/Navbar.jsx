import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about', isBlue: true },
    { name: 'Resume', to: 'resume', isBlue: true },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-dark/80 backdrop-blur-lg py-3 shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-purple-400 transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Soumya
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className={`${link.isBlue ? 'text-blue-400 hover:text-blue-300' : 'text-gray-300 hover:text-white'} font-medium text-sm uppercase tracking-wider cursor-pointer relative group transition-colors duration-300`}
              activeClass={link.isBlue ? 'text-blue-300' : 'text-white'}
              spy={true}
              offset={-80}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${link.isBlue ? 'bg-blue-400' : 'bg-gradient-to-r from-purple-400 to-pink-500'} transition-all duration-300 group-hover:w-full`}></span>
            </Link>
          ))}
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-dark-gray hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-300 text-lg" />
            ) : (
              <FaMoon className="text-gray-300 text-lg" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mr-4 p-2 rounded-full bg-dark-gray hover:bg-gray-800 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-gray-300" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 transform transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className={`text-2xl ${link.isBlue ? 'text-blue-400 hover:text-blue-300' : 'text-gray-300 hover:text-white'} font-medium uppercase tracking-wider cursor-pointer py-2 px-4 relative group`}
              activeClass={link.isBlue ? 'text-blue-300' : 'text-white'}
              spy={true}
              offset={-80}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${link.isBlue ? 'bg-blue-400' : 'bg-gradient-to-r from-purple-400 to-pink-500'} transition-all duration-300 group-hover:w-full`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
