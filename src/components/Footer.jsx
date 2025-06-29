import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-gray py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Soumya Dixit
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mb-8">
            Computer Science student at VIT Bhopal University | MERN Stack Developer | AWS Certified Cloud Practitioner
          </p>
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/soumya02dixit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/soumya-dixit-02662222a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://instagram.com/soumya02dixit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="w-full border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Soumya Dixit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
