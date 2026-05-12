import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Code2, Github, Linkedin, ZoomIn, ZoomOut, Printer } from 'lucide-react';

const Resume = () => {
  const [zoom, setZoom] = useState(100);

  const socialLinks = [
    {
      icon: <Code2 size={32} />,
      label: 'LeetCode',
      url: '',
      color: '#FFA116',
      emoji: '🏆'
    },
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      url: 'https://github.com/williamlebris',
      color: '#fff',
      emoji: '💻'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/williamlebris',
      color: '#0077B5',
      emoji: '💼'
    }
  ];

  const handleDownload = () => {
    // UPDATE: Add your resume PDF to public/resume/
    const link = document.createElement('a');
    link.href = '/website/resume/William%20Resume.pdf';
    link.download = 'William_Lebris_Resume.pdf';
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    if (zoom < 150) setZoom(zoom + 10);
  };

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 10);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
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
          className="text-center mb-8"
        >
          <FileText className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">My Resume</h1>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 rounded-xl transition-all duration-300 group"
                style={{ '--hover-color': link.color }}
              >
                <div className="text-3xl">{link.emoji}</div>
                <div className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                  {link.icon}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Control Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-6 flex-wrap"
        >
          <button
            onClick={handleZoomOut}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-400 rounded-lg transition-all duration-300"
          >
            <ZoomOut size={20} />
            Zoom Out
          </button>
          
          <div className="flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg">
            <span className="text-cyan-400 font-semibold">{zoom}%</span>
          </div>
          
          <button
            onClick={handleZoomIn}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-400 rounded-lg transition-all duration-300"
          >
            <ZoomIn size={20} />
            Zoom In
          </button>
          
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-cyan-400 rounded-lg transition-all duration-300"
          >
            <Printer size={20} />
            Print
          </button>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800/30 backdrop-blur-sm border-2 border-gray-700 rounded-2xl p-4 mb-8 overflow-auto"
          style={{ maxHeight: '70vh' }}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden shadow-2xl mx-auto transition-all duration-300"
            style={{ 
              width: `${zoom}%`,
              maxWidth: '850px',
              minWidth: '300px'
            }}
          >
            {/* UPDATE: Add your resume PDF to public/resume/ */}
            <embed
              src="/website/resume/William%20Resume.pdf"
              type="application/pdf"
              className="w-full"
              style={{ height: '1100px' }}
            />
            
            {/* Fallback if PDF doesn't load */}
            <div className="p-8 text-center text-gray-600">
              <p className="mb-4">PDF preview not available in your browser.</p>
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Download Resume Instead
              </button>
            </div>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={24} />
            Download Resume
          </button>
          <p className="text-gray-400 mt-4">Click to download PDF version</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;