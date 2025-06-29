import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Hotel Booking System',
    description: 'A full-stack hotel booking application with user authentication and room reservation system.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/soumya02dixit/hotel-booking',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/1f1f2e/6b7280?text=Hotel+Booking'
  },
  {
    title: 'Virtual Piano',
    description: 'A GUI-based virtual piano with sound playback and recording functionality.',
    tags: ['C++', 'GUI', 'Audio Processing'],
    github: 'https://github.com/soumya02dixit/virtual-piano',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/1f1f2e/6b7280?text=Virtual+Piano'
  },
  {
    title: 'Temperature Converter',
    description: 'Web application for converting between Celsius, Fahrenheit, and Kelvin units.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/soumya02dixit/temperature-converter',
    demo: '#',
    image: 'https://via.placeholder.com/600x400/1f1f2e/6b7280?text=Temp+Converter'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
