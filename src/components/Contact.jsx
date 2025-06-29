import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Feel free to get in touch with me. I'm always open to discussing new projects, 
              creative ideas or opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <FiMail className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Me</h4>
                  <a href="mailto:soumya02dixit@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                    soumya02dixit@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <FiMapPin className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-500/10 p-3 rounded-full mr-4">
                  <FiPhone className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Me</h4>
                  <p className="text-gray-400">+91 [Your Phone Number]</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
