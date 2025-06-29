import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaTools, FaAws } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiVisualstudiocode, SiPostman } from 'react-icons/si';

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'VIT Bhopal University',
      year: 'Aug 2021 - July 2025',
      description: 'CGPA: 8.28',
      achievements: [
        'Specialized in Full Stack Development and Cloud Computing',
        'Active member of the Google Developer Student Club (GDSC)',
        'Participated in various hackathons and coding competitions'
      ]
    }
  ];

  const experience = [
    {
      id: 1,
      position: 'Junior Frontend Developer',
      company: 'Devfrend Web Solutions',
      year: 'May 2025 - Present',
      location: 'Remote',
      responsibilities: [
        'Develop and deploy dynamic client-facing web applications using React.js, HTML, CSS, and JavaScript',
        'Integrate Supabase as a backend solution for real-time data handling, authentication, and database management',
        'Collaborate with clients to deliver custom frontend-backend solutions'
      ]
    },
    {
      id: 2,
      position: 'Web Developer and Designer Intern',
      company: 'Oasis Infobyte',
      year: 'Dec 2023 - Jan 2024',
      location: 'Remote',
      responsibilities: [
        'Developed 3 projects using HTML, CSS, and JavaScript for enhanced user interaction',
        'Created a restaurant website with menu and table booking features',
        'Built a temperature converter with real-time functionality',
        'Designed and developed a personal portfolio website'
      ]
    },
    {
      id: 3,
      position: 'MERN Stack Developer Intern',
      company: 'Ethnus Codemithra',
      year: 'Aug 2023 - Dec 2023',
      location: 'Remote',
      responsibilities: [
        'Led a 5-member team to revamp hotel booking software',
        'Implemented JWT-based user authentication and security',
        'Optimized database queries for improved performance',
        'Developed features using React.js, Node.js, and MongoDB'
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Hotel Booking System',
      technologies: 'HTML, CSS, JavaScript, React.js, Node.js, MongoDB',
      year: 'Nov 2023',
      description: 'A full-stack hotel booking application with user authentication and room reservation system.',
      features: [
        'Interactive user interface with React.js',
        'Secure authentication with JWT',
        'Real-time room availability checking',
        'Admin dashboard for managing bookings and rooms'
      ]
    },
    {
      id: 2,
      title: 'Virtual Piano',
      technologies: 'C++, VS Code',
      year: 'Jan 2025',
      description: 'A GUI-based virtual piano application with recording and playback functionality.',
      features: [
        'Realistic piano sounds using audio libraries',
        'Record and save musical compositions',
        'Playback functionality for recorded tunes',
        'Intuitive user interface'
      ]
    }
  ];

  const technicalSkills = {
    languages: [
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'Python', icon: <SiPython className="text-blue-500" /> },
      { name: 'C++', icon: <FaCode className="text-blue-600" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-400" /> }
    ],
    frameworks: [
      { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiNodedotjs className="text-gray-800 dark:text-gray-200" /> },
      { name: 'Next.js', icon: <SiReact className="text-black dark:text-white" /> },
      { name: 'Tailwind CSS', icon: <SiCss3 className="text-cyan-400" /> }
    ],
    databases: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'Firebase', icon: <FaServer className="text-yellow-500" /> },
      { name: 'PostgreSQL', icon: <FaServer className="text-blue-600" /> }
    ],
    tools: [
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
      { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" /> },
      { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-500" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'AWS', icon: <FaAws className="text-yellow-500" /> }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Resume</h1>
      
      {/* Education Section */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
            <FaGraduationCap className="text-2xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            <FaGraduationCap className="inline mr-2 text-primary" />
            Education
          </h2>
        </div>
        
        <div className="space-y-8 border-l-2 border-primary/20 pl-8 ml-4">
          {education.map((edu) => (
            <div key={edu.id} className="relative group">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary/20 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.year}</p>
                <p className="text-gray-800 dark:text-gray-300 mb-2">{edu.description}</p>
                <ul className="space-y-2 mt-3">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
            <FaBriefcase className="text-2xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            <FaBriefcase className="inline mr-2 text-primary" />
            Work Experience
          </h2>
        </div>
        
        <div className="space-y-8 border-l-2 border-primary/20 pl-8 ml-4">
          {experience.map((exp) => (
            <div key={exp.id} className="relative group">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.position}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary/20 rounded-full mt-2 md:mt-0">
                    {exp.year}
                  </span>
                </div>
                <ul className="space-y-2 mt-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
            <FaCode className="text-2xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            <FaCode className="inline mr-2 text-primary" />
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3"><span className="font-medium">Technologies:</span> {project.technologies}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
            <FaTools className="text-2xl" />
          </div>
          <h3 className="text-2xl font-bold">Technical Skills</h3>
        </div>
        
        <div className="space-y-8">
          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Languages</h4>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.languages.map((skill, idx) => (
                <div key={idx} className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  <span className="mr-2">{skill.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.frameworks.map((skill, idx) => (
                <div key={idx} className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  <span className="mr-2">{skill.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Databases */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Databases</h4>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.databases.map((skill, idx) => (
                <div key={idx} className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  <span className="mr-2">{skill.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.tools.map((skill, idx) => (
                <div key={idx} className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  <span className="mr-2">{skill.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Download Button */}
      <div className="mt-12 text-center">
        <a 
          href="/documents/resume.pdf" 
          download="Soumya_Dixit_Resume.pdf"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
