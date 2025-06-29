import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/20">
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                Your Photo
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-400 mb-6">
              I'm a Computer Science student at VIT Bhopal University with a passion for full-stack development. 
              I have hands-on experience in building web applications using the MERN stack and cloud technologies. 
              My journey in tech has been driven by a love for problem-solving and creating impactful digital solutions.
            </p>
            <p className="text-gray-400 mb-6">
              As an AWS Certified Cloud Practitioner and Alpha MLSA at Microsoft, I'm passionate about 
              cloud technologies and developer communities. I've led teams in hackathons and tech events, 
              and I'm always eager to take on new challenges in web development.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-purple-400">Name:</h4>
                <p className="text-gray-400">Soumya Dixit</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">Email:</h4>
                <p className="text-gray-400">soumya02dixit@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">From:</h4>
                <p className="text-gray-400">Bhopal, Madhya Pradesh, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400">Availability:</h4>
                <p className="text-green-400">Open to work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
