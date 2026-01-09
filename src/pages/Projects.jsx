import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // UPDATE WITH YOUR ACTUAL PROJECTS
  const projects = [
    {
      id: 1,
      title: 'Heatly Plan AI | AI-Powered Health & Nutrition Platform',
      description: 'Built an AI-powered health assistant for diabetic and prediabetic users that delivers accurate nutrition analysis, personalized meal plans, smart grocery optimization, and doctor-style reports, bridging AI insights with real-world medical guidance.',
      image: '/images/project1.jpg', // UPDATE: Add your project image to public/images/
      tags: ['Python', 'Javascript', 'HTML & CSS', 'OpenCV', 'Flask', 'Streamlit'],
      githubUrl: 'https://github.com/WilliamLebris?tab=repositories',
      liveUrl: 'https://healthyplan.streamlit.app/'
    },
    {
      id: 2,
      title: 'StudentLife OS Platform',
      description: 'Developed a platform that provide California CC Student with Internship, Scholarship, Conferences, Event,  Resources, I partneted with 20+ School, 30+ organizations to help 1000+ students. Everyone has his own dashboard and login portal.',
      image: '/images/project2.jpg', // UPDATE: Add your project image
      tags: ['Python', 'React', 'HTML & CSS', 'Resend', 'AWS','Supabase', 'Prisma', 'Apis (Open Ai, Etc)', 'Postgrels'],
      githubUrl: 'https://studentlifeos.com',
      liveUrl: 'https://studentlifeos.com'
    },
    {
      id: 3,
      title: 'Smart Study Assistant',
      description: 'Developed an AI-powered study assistant that generates practice questions from lecture notes, provides real-time feedback, and tracks learning progress to enhance student engagement and retention.',
      image: '/images/project3.jpg', // UPDATE: Add your project image
      tags: ['Python', 'YOLO', 'OpenCV', 'PyTorch'],
      githubUrl: 'https://github.com/WilliamLebris?tab=repositories',
      liveUrl: 'https://github.com/WilliamLebris?tab=repositories'
    },
    {
      id: 4,
      title: 'Order Management System ',
      description: 'Developed a full-stack order management system for a retail business, featuring inventory tracking, order processing, and customer management with a user-friendly interface and real-time updates.',
      image: '/images/project4.jpg', // UPDATE: Add your project image
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/williamlebris/project4',
      liveUrl: 'https://project4-demo.com'
    },
    {
      id: 5,
      title: 'Weather Prediction ML Model',
      description: 'Machine learning model that predicts weather patterns using historical data and real-time sensors with 87% accuracy for 7-day forecasts.',
      image: '/images/project5.jpg', // UPDATE: Add your project image
      tags: ['Python', 'Scikit-learn', 'Pandas', 'APIs'],
      githubUrl: 'https://github.com/WilliamLebris?tab=repositories',
      liveUrl: 'https://github.com/WilliamLebris?tab=repositories'
    },
    {
      id: 6,
      title: 'Event planner ',
      description: 'Developed a full-stack system for planning and managing events, including scheduling, guest lists, and task assignments with real-time collaboration features.',
      image: '/images/project6.jpg', // UPDATE: Add your project image
      tags: ['Python', 'Scikit-learn', 'Pandas', 'APIs'],
      githubUrl: 'https://github.com/WilliamLebris?tab=repositories',
      liveUrl: 'https://github.com/WilliamLebris?tab=repositories'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Rocket className="text-cyan-400" size={40} />
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient">My Projects</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my major works — blending research, AI innovation, and development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/1a1f2e/00d9ff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-cyan-400/20 border border-gray-600 hover:border-cyan-400 rounded-lg transition-all duration-300 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/50 hover:border-cyan-400 rounded-lg transition-all duration-300 text-sm text-cyan-400"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            More projects coming soon... Check my{' '}
            <a
              href="https://github.com/williamlebris"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub
            </a>
            {' '}for updates!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;