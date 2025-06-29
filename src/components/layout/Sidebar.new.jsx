import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaFileAlt, 
  FaCode, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaSun, 
  FaMoon,
  FaTimes
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { darkMode, theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state for animations
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  // Navigation items
  const navItems = [
    { 
      icon: <FaHome className="w-5 h-5" />, 
      label: 'Home', 
      path: '/',
      color: 'from-blue-500 to-cyan-400'
    },
    { 
      icon: <FaUser className="w-5 h-5" />, 
      label: 'About', 
      path: '/about',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: <FaFileAlt className="w-5 h-5" />, 
      label: 'Resume', 
      path: '/resume',
      color: 'from-amber-500 to-yellow-400'
    },
    { 
      icon: <FaEnvelope className="w-5 h-5" />, 
      label: 'Contact', 
      path: '/contact',
      color: 'from-rose-500 to-pink-500'
    },
  ];

  // Social links
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/soumya02dixit', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/soumya-dixit-02662222a', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
  ];

  // Handle navigation with smooth scroll to top
  const handleNavigation = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`fixed inset-y-0 left-0 w-72 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-2xl z-50 md:z-40 overflow-y-auto`}
        initial={{ x: '-100%' }}
        animate={{ 
          x: isOpen ? 0 : '-100%',
          transition: { type: 'spring', stiffness: 300, damping: 30 }
        }}
        exit={{ x: '-100%' }}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200/50 dark:border-gray-700/50">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
            >
              Soumya Dixit
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors md:hidden"
              aria-label="Close menu"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: 0.1 * index,
                      duration: 0.3 
                    } 
                  }}
                >
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.path
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg shadow-${item.color.split(' ')[0]}/20`
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:translate-x-1'
                    }`}
                  >
                    <span className={`mr-3 ${activeTab === item.path ? 'text-white' : ''}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="px-4 py-6">
            <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {theme === 'system' 
                    ? 'System Theme' 
                    : theme === 'dark' 
                      ? 'Dark Mode' 
                      : 'Light Mode'}
                </span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <FaSun className="w-4 h-4 text-yellow-500" />
                  ) : theme === 'dark' ? (
                    <FaMoon className="w-4 h-4 text-blue-400" />
                  ) : (
                    <div className="relative w-4 h-4">
                      <FaSun className="absolute w-3 h-3 text-yellow-500 -top-1 -left-1" />
                      <FaMoon className="absolute w-3 h-3 text-blue-400 -bottom-1 -right-1" />
                    </div>
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Switch between light and dark themes
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="px-4 pb-6">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.5 + (index * 0.1),
                      duration: 0.3 
                    } 
                  }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Soumya Dixit. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
