import React from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs']
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-primary">Soumya Dixit</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-8">
              Full Stack Developer & Cloud Enthusiast
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-10">
              I build exceptional digital experiences with modern web technologies. 
              Currently focused on creating responsive web applications and exploring cloud technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center"
              >
                Get In Touch
                <FaArrowRight className="ml-2" />
              </a>
              <a 
                href="/documents/resume.pdf" 
                download
                className="px-8 py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary rounded-lg hover:bg-primary/10 transition-colors duration-300 flex items-center"
              >
                Download CV
                <FaDownload className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
