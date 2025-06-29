import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaCheck, FaExclamationTriangle, FaFilePdf, FaDownload } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    // Test implementation - replace this with actual EmailJS code later
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log the form data to console for testing
      console.log('Form submitted:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Show success message
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: 'This is a test mode. In production, this would send an email to soumya02dixit@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Get in Touch</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location:</h4>
                <p className="text-gray-700 dark:text-gray-300">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email:</h4>
                <a href="mailto:your.email@example.com" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  soumya02dixit@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                <FaPhone className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Call:</h4>
                <a href="tel:+919981690117" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                  +91 9981690117
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary bg-opacity-10 p-3 rounded-full text-primary">
                <FaFilePdf className="w-5 h-5" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Resume:</h4>
                <a 
                  href="/documents/resume.pdf" 
                  download="Soumya_Dixit_Resume.pdf"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4">Connect with me:</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/soumya-dixit-02662222a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/soumya02dixit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
          
          {submitStatus.message && (
            <div className={`mb-4 p-4 rounded-md ${submitStatus.success ? 'bg-green-50 dark:bg-green-900' : 'bg-red-50 dark:bg-red-900'}`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  {submitStatus.success ? (
                    <FaCheck className="h-5 w-5 text-green-400" aria-hidden="true" />
                  ) : (
                    <FaExclamationTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
                  )}
                </div>
                <div className={`ml-3 ${submitStatus.success ? 'text-green-800 dark:text-green-100' : 'text-red-800 dark:text-red-100'}`}>
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 dark:text-white bg-white dark:bg-gray-800"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 dark:text-white bg-white dark:bg-gray-800"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 dark:text-white bg-white dark:bg-gray-800"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-32 text-gray-800 dark:text-white bg-white dark:bg-gray-800"
                placeholder="Your Message..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary px-6 py-3 w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
