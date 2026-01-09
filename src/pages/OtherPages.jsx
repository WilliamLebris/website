// File: src/pages/OtherPages.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Image, Award, BookOpen, FileText, User, Mail } from 'lucide-react';

// Gallery Page
export const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Image className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-400">Coming soon... Project screenshots and more!</p>
        </motion.div>
      </div>
    </div>
  );
};

// Certificates Page
export const Certificates = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Award className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl font-bold mb-4">Certificates</h1>
          <p className="text-gray-400">My professional certifications and achievements</p>
        </motion.div>
      </div>
    </div>
  );
};

// Blog Page
export const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <BookOpen className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-400">Tech articles and thoughts coming soon!</p>
        </motion.div>
      </div>
    </div>
  );
};

// Resume Page
export const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <FileText className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-gray-400 mb-8">Download my resume or view online</p>
          <button className="px-6 py-3 bg-cyan-400 text-gray-900 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300">
            Download Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// About Page
export const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <User className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Hello! 👋</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a passionate AI/ML Engineer and Full-Stack Developer with expertise in building intelligent systems and modern web applications.
            </p>
            <p>
              My journey in tech started with a curiosity about how machines can learn and make decisions. Today, I specialize in developing AI-powered solutions, computer vision systems, and scalable web applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through blog posts and mentorship.
            </p>
            <p className="text-cyan-400 font-semibold">
              Let's connect and build something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Contact Page
export const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Mail className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-400">Let's get in touch!</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-400 text-gray-900 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};