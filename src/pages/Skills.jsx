// File: src/pages/Skills.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Skill icons with positions
  const skills = [
  // Programming Languages & Web Core
  { name: 'C', logo: '/website/icons/c.svg', color: '#A8B9CC', angle: 0, radius: 240 },
  { name: 'C++', logo: '/website/icons/cplusplus.svg', color: '#00599C', angle: 40, radius: 260 },
  { name: 'Python', logo: '/website/icons/python.svg', color: '#3776AB', angle: 80, radius: 280 },
  { name: 'JavaScript', logo: '/website/icons/javascript.svg', color: '#F7DF1E', angle: 120, radius: 250 },
  { name: 'HTML5', logo: '/website/icons/html5.svg', color: '#E34F26', angle: 160, radius: 260 },
  { name: 'CSS', logo: '/website/icons/css.svg', color: '#1572B6', angle: 200, radius: 240 },
  { name: 'SVG', logo: '/website/icons/svg.svg', color: '#FFB13B', angle: 240, radius: 260 },

  // Frameworks & Libraries
  { name: 'React', logo: '/website/icons/react.svg', color: '#61DAFB', angle: 20, radius: 300 },
  { name: 'Flask', logo: '/website/icons/flask.svg', color: '#FFFFFF', angle: 60, radius: 310 },
  { name: 'Tailwind CSS', logo: '/website/icons/tailwindcss.svg', color: '#38BDF8', angle: 100, radius: 290 },
  { name: 'Streamlit', logo: '/website/icons/streamlit.svg', color: '#FF4B4B', angle: 140, radius: 300 },
  { name: 'Pandas', logo: '/website/icons/pandas.svg', color: '#150458', angle: 180, radius: 310 },
  { name: 'OpenCV', logo: '/website/icons/opencv.svg', color: '#5C3EE8', angle: 220, radius: 290 },
  { name: 'PyTorch', logo: '/website/icons/pytorch.svg', color: '#EE4C2C', angle: 260, radius: 300 },
  { name: 'TensorFlow', logo: '/website/icons/tensorflow.svg', color: '#FF6F00', angle: 300, radius: 310 },

  // Databases & Backend
  { name: 'PostgreSQL', logo: '/website/icons/postgresql.svg', color: '#336791', angle: 30, radius: 340 },
  { name: 'MySQL', logo: '/website/icons/mysql.svg', color: '#4479A1', angle: 90, radius: 350 },
  { name: 'MongoDB', logo: '/website/icons/mongodb.svg', color: '#47A248', angle: 150, radius: 340 },
  { name: 'Prisma', logo: '/website/icons/prisma.svg', color: '#2D3748', angle: 210, radius: 350 },
  { name: 'Supabase', logo: '/website/icons/supabase.svg', color: '#3ECF8E', angle: 270, radius: 340 },
  { name: 'Snowflake', logo: '/website/icons/snowflake.svg', color: '#56B9EB', angle: 330, radius: 350 },

  // Hardware & OS
  { name: 'Raspberry Pi', logo: '/website/icons/raspberrypi.svg', color: '#C51A4A', angle: 50, radius: 380 },
  { name: 'Arduino', logo: '/website/icons/arduino.svg', color: '#00979D', angle: 130, radius: 380 },
  { name: 'macOS', logo: '/website/icons/macos.svg', color: '#FFFFFF', angle: 210, radius: 380 },

  // Tools & Platforms
  { name: 'Git', logo: '/website/icons/git.svg', color: '#F05032', angle: 70, radius: 410 },
  { name: 'GitHub', logo: '/website/icons/github.svg', color: '#FFFFFF', angle: 150, radius: 410 },
  { name: 'CodeRabbit', logo: '/website/icons/coderabbit.svg', color: '#FF6B6B', angle: 230, radius: 410 },
  { name: 'Devpost', logo: '/website/icons/devpost.svg', color: '#003E54', angle: 310, radius: 410 },
  { name: 'Discord', logo: '/website/icons/discord.svg', color: '#5865F2', angle: 350, radius: 420 },
  { name: 'WordPress', logo: '/website/icons/wordpress.svg', color: '#21759B', angle: 10, radius: 420 },
];


  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'SQL', 'Java', ],
      icon: '💻'
    },
    {
      title: 'AI/ML Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV'],
      icon: '🤖'
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flask', 'Streamlit', 'pandas'],
      icon: '🌐'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
      icon: '🗄️'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Jupyter', 'VS Code', 'GitHub', 'Supabase', 'Prisma', 'Microsoft Office'],
      icon: '🛠️'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-cyan-400" size={32} />
            <h1 className="text-4xl sm:text-5xl font-bold">My Skills</h1>
          </div>
          <p className="text-gray-400 text-lg">
            ✨ Technical expertise blended with creativity — explore my core competencies below.
          </p>
        </motion.div>

        {/* Orbiting Skills Circle in a Card - Desktop only */}
        {/* Skills Card - Desktop */}
<div className="hidden lg:flex justify-center mb-20">
  <div className="relative w-[800px] min-h-[400px] bg-gray-800/20 backdrop-blur-lg border border-gray-700 rounded-3xl overflow-auto p-6 flex flex-wrap gap-6 items-start">
    
    {/* Center circle */}
    <motion.div
      animate={{
        x: mousePosition.x * 0.1,
        y: mousePosition.y * 0.1
      }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6"
    >
      <span className="text-4xl">💡</span>
    </motion.div>

    {/* Skill icons */}
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ scale: 1.2, zIndex: 10 }}
        className="w-20 h-20 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
      >
        <div
          className="w-20 h-20 rounded-full border-2 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/90"
          style={{ borderColor: skill.color + '40' }}
        >
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-10 h-10 mx-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <span className="text-xs text-center mt-1" style={{ color: skill.color }}>
          {skill.name}
        </span>
      </motion.div>
    ))}
  </div>
</div>


        {/* Mobile Skills Grid */}
        <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm"
                style={{ borderColor: skill.color + '40' }}
              >
                <img
                src={skill.logo}
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />

              </div>
              <span className="text-xs text-center" style={{ color: skill.color }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;