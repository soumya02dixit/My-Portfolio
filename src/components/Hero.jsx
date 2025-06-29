import React, { useEffect, useRef } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  useEffect(() => {
    controls.start({
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    });
  }, [controls]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mb-6">
              <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 inline-flex items-center">
                <span className="w-2 h-2 mr-2 bg-purple-400 rounded-full animate-pulse"></span>
                Available for opportunities
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500">
                Soumya Dixit
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-8">
              Full-Stack Developer | Cloud Enthusiast
            </h2>
            
            <p className="text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed">
              I build exceptional digital experiences with modern web technologies. Currently pursuing Computer Science at VIT Bhopal University with a passion for cloud computing and full-stack development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16 lg:mb-0">
              <motion.a 
                href="#contact" 
                className="btn btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.a>
              
              <motion.a 
                href="/documents/resume.pdf"
                download="Soumya_Dixit_Resume.pdf"
                className="btn btn-outline group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </motion.a>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-500 text-sm mb-4">CONNECT WITH ME</p>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <a 
                  href="https://github.com/soumya02dixit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/soumya-dixit-02662222a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            ref={constraintsRef}
          >
            <div className="relative">
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-purple-500/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">SD</span>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">Your Professional Photo</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-xl z-0"
                animate={controls}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500/20 to-transparent blur-xl z-0"
                animate={controls}
              />
              
              {/* Floating tech badges */}
              <div className="absolute -bottom-6 -left-6 bg-dark-gray/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-800">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">React.js</span>
              </div>
              <div className="absolute -top-6 right-10 bg-dark-gray/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-800">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Node.js</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-dark-gray/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-800">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">MongoDB</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-purple-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
