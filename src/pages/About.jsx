import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'C++', level: '85%' },
    { name: 'Python', level: '80%' },
    { name: 'HTML/CSS', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React.js', level: '85%' },
    { name: 'Node.js', level: '80%' },
    { name: 'MongoDB', level: '80%' },
    { name: 'AWS', level: '75%' },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-primary/20 shadow-lg mb-6">
          <img 
            src="/images/profile.jpg" 
            alt="Soumya Dixit" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">About Me</h2>
      </div>
      <div className="w-full">
        <p className="text-gray-800 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          I'm Soumya Dixit, a passionate Full Stack Developer currently pursuing my Bachelor's in Computer Science at VIT Bhopal University. 
          With hands-on experience in web development and a strong foundation in computer science, I specialize in building 
          responsive and scalable web applications using modern technologies.
        </p>
        <p className="text-gray-800 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          My expertise lies in React.js, Node.js, and MongoDB, and I'm particularly interested in cloud computing and 
          full-stack development. I enjoy tackling complex problems and turning ideas into reality through clean, 
          efficient code.
        </p>
          
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-primary text-lg" />
              <a href="tel:9981690117" className="text-gray-800 dark:text-gray-300 hover:text-primary transition-colors">
                +91 99816 90117
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-primary text-lg" />
              <a href="mailto:soumya02dixit@gmail.com" className="text-gray-800 dark:text-gray-300 hover:text-primary transition-colors break-all">
                soumya02dixit@gmail.com
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-primary text-lg mt-1 flex-shrink-0" />
              <span className="text-gray-800 dark:text-gray-300">
                Royal Villa Indus Town, Bhopal, MP, 462026
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaGithub className="text-primary text-lg" />
              <a 
                href="https://github.com/soumya02dixit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-primary transition-colors"
              >
                github.com/soumya02dixit
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-primary text-lg" />
              <a 
                href="https://linkedin.com/in/soumya-dixit-02662222a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-primary transition-colors"
              >
                linkedin.com/in/soumya-dixit
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium mb-4 text-primary dark:text-secondary">Languages</h4>
            <div className="space-y-4">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4 text-primary dark:text-secondary">Technologies</h4>
            <div className="space-y-4">
              {skills.slice(4).map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" 
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h4 className="text-lg font-medium mb-4 text-primary dark:text-secondary">Certifications</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-gray-800 dark:text-white">AWS Certified Cloud Practitioner</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-gray-800 dark:text-white">Microsoft Learn Student Ambassador (Alpha MLSA)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
