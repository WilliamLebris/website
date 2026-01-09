import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // UPDATE WITH YOUR GALLERY IMAGES
  // Add images to public/images/gallery/ folder
  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery/gallery1.jpg',
      title: 'American Tech Computer Repair Shop 💻🛠️',
      description: 'When I was tasked to work on computers, change motherboard, install OS, and troubleshoot hardware/software issues at the repair shop.'
    },
    {
      id: 2,
      image: '/images/gallery/gallery2.jpg',
      title: 'Tour at Meta 🧑‍💻Instagram💡Thread📝Faceboook',
      description: 'Visited Meta headquarters and got an exclusive tour of their offices, learning about their latest projects and innovations in social media technology. Learning a lot about different careers in tech industry, and what each does. Got some bright ideas and lots of adivices from mentors!, I expanded my network too!'
    },
    {
      id: 3,
      image: '/images/gallery/gallery3.jpg',
      title: 'IT Department 🖥️📡',
      description: 'Tackling network issues and ensuring smooth connectivity across the organization as part of the IT support team. Gained hands-on experience in troubleshooting and maintaining network infrastructure, routers, and switches, ensuring smooth and secure connectivity for all users including WiFi setup.'
    },
    {
      id: 4,
      image: '/images/gallery/gallery4.jpg',
      title: 'Alameda Navy Reserve Base 🇺🇸🛳️',
      description: 'Visiting old military base and navy center to air out my mind, think about new projects, trying to understand how technologies started and evolved over time in different fields.'
    },
    {
      id: 5,
      image: '/images/gallery/gallery5.jpg',
      title: 'American Tech Berkeley 📱💻',
      description: 'proved my supervisor wrong 😂 by successfully tackling a software issue that others couldn\'t resolve, showcasing my problem-solving skills and determination.'
    },
    {
      id: 6,
      image: '/images/gallery/gallery6.jpg',
      title: 'Hackathon Winner 🏆💡',
      description: 'Won first place at the Tech Innovation Hackathon Sponsored by ZoHo Corporation, Charmhealth, for building an AI-powered healthcare solution in 48 hours.'
    }
  ];

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
            <ImageIcon className="text-cyan-400" size={40} />
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient">Gallery</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Moments captured from my journey in tech and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-800 border-2 border-gray-700 group-hover:border-cyan-400 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x500/1a1f2e/00d9ff?text=${encodeURIComponent(item.title)}`;
                  }}
                />
                
                {/* Hover overlay with description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>

                {/* Top gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full screen image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} className="text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden border-2 border-cyan-400"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-gray-800">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;