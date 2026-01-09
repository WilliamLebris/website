import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Instagram, Github, Code2, MapPin, Award, MessageSquare } from 'lucide-react';

const Home = () => {
  const [showEmail, setShowEmail] = useState(false);

  const socialLinks = [
    {
      icon: <Linkedin size={28} />,
      url: 'https://linkedin.com/in/williamlebris',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: <Mail size={28} />,
      action: () => window.location.href = 'mailto:williamlebris001@gmail.com',
      label: 'Email',
      email: 'williamlebris001@gmail.com',
      color: '#EA4335'
    },
    
    {
      icon: <Github size={28} />,
      url: 'https://github.com/williamlebris',
      label: 'GitHub',
      color: '#fff'
    },
    {
      icon: <Code2 size={28} />,
      url: '',
      label: 'LeetCode',
      color: '#FFA116'
    }
  ];

  const badges = [
    'AI Enthusiast',
    'Electrical Engineering Student',
    'Machine Learning learner',
    'Computer Science Student',
    'Computer Vision Researcher',
    'Developer',
    'full-stack enthusiast',
    'Tech Explorer & project builder',
    'Problem Solver',
    'Hardware & Software enthusiast',
    'computer repair skilled',
    'Microcontroller',
    'CyberSecurity',
    'Programming Lover'
    

  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
              
              <div className="relative floating-animation">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-cyan-400 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-2">
                  <img
                    src="/images/profile.jpg"
                    alt="William Lebris"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400/1a1f2e/00d9ff?text=Your+Photo';
                    }}
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-gradient">William Lebris</span>
              <span className="typing-cursor"></span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300">
              Electrical & Computer Science | Artificial Intelligence | Frontend & Backend Developer | Tech Explorer
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-4 py-2 border border-cyan-400/30 rounded-full text-sm text-gray-300 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300"
              >
                <MapPin className="text-red-400 mb-2" size={24} />
                <div className="text-xs text-gray-400 mb-1">Location</div>
                <div className="text-sm font-medium">Oakley, CA, USA</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Award className="text-yellow-400 mb-2" size={24} />
                <div className="text-xs text-gray-400 mb-1">Expertise</div>
                <div className="text-sm font-medium">Developer, Soft & Hard Engineering, AI/ML , Electrical Eng</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300"
              >
                <MessageSquare className="text-green-400 mb-2" size={24} />
                <div className="text-xs text-gray-400 mb-1">Contact</div>
                <div className="text-sm font-medium">williamlebris001@gmail.com</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Connect with me</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
                onMouseEnter={() => social.email && setShowEmail(social.email)}
                onMouseLeave={() => setShowEmail(false)}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (social.action) {
                      e.preventDefault();
                      social.action();
                    }
                  }}
                  className="block w-16 h-16 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-full flex items-center justify-center hover:border-cyan-400 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {showEmail && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-4 text-cyan-400 text-sm"
            >
              {showEmail}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">See what I'm doing</h2>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/williamlebris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <Github size={36} />
              </div>
              <span className="text-sm text-gray-400">GitHub</span>
            </motion.a>

            <motion.a
              href="https://leetcode.com/williamlebris"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <Code2 size={36} />
              </div>
              <span className="text-sm text-gray-400">LeetCode</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;