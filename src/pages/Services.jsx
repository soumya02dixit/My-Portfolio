import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaUserTie, FaTools } from 'react-icons/fa';

const Services = () => {
  const roles = [
    {
      icon: <FaCode className="w-10 h-10 text-primary" />,
      title: 'Web Development',
      description: 'Seeking roles in frontend and full-stack development using modern technologies like React, Next.js, and Node.js to build responsive and scalable web applications.'
    },
    {
      icon: <FaLaptopCode className="w-10 h-10 text-primary" />,
      title: 'Software Engineering',
      description: 'Looking for software engineering positions where I can apply my problem-solving skills and knowledge of data structures and algorithms to develop robust applications.'
    },
    {
      icon: <FaUserTie className="w-10 h-10 text-primary" />,
      title: 'Developer Roles',
      description: 'Open to various developer positions including frontend, backend, full-stack, and application development roles where I can contribute my technical expertise.'
    },
    {
      icon: <FaTools className="w-10 h-10 text-primary" />,
      title: 'Technical Skills',
      description: 'Proficient in JavaScript, Python, React, Node.js, and modern development tools. Eager to apply these skills in a professional environment.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="section-title text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">I'm Open To</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          I am actively seeking opportunities in web development and software engineering. Here are the types of roles I'm interested in:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roles.map((role, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-dark p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-800"
          >
            <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
              {role.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{role.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {role.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-primary bg-opacity-10 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Let's Connect!</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm actively looking for new opportunities and would love to discuss how I can contribute to your team. Feel free to reach out for potential collaborations or job opportunities.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
