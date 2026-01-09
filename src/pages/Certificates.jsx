import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // UPDATE: Add your certificate images to public/images/certificates/
  const techCertificates = [
    {
      id: 1,
      name: 'Certificate of Achievement 🎖️',
      issuer: 'Hack the Hood Organization',
      year: '2025',
      location: 'Oakland, CA (Hybrid)',
      image: '/images/certificates/cert1.jpg',
      preview: '/images/certificates/cert1.jpg'
    },
    {
      id: 2,
      name: 'UC Berkeley Transfer Certificate 🎖️',
      issuer: 'UC Berkeley',
      year: '2025',
      location: 'Berkeley, CA (Online)',
      image: '/images/certificates/cert2.jpg',
      preview: '/images/certificates/cert2.jpg'
    },
    {
      id: 3,
      name: 'Hackathon Winner 🏆🎖️',
      issuer: 'Zoho Corporation',
      year: '2025',
      location: 'Pleasaton, CA (In-person)',
      image: '/images/certificates/cert3.jpg',
      preview: '/images/certificates/cert3.jpg'
    },
    {
      id: 4,
      name: 'Certificate of Participation✨🗑️',
      issuer: 'East Bay Municipal Utility District',
      year: '2024',
      location: 'Oakland, CA (In-person)',
      image: '/images/certificates/cert4.jpg',
      preview: '/images/certificates/cert4.jpg'
    },
    {
      id: 5,
      name: 'Certified Tutor 🎖️',
      issuer: 'Berkeley City College',
      year: '2024',
      location: 'Berkeley, CA',
      image: '/images/certificates/cert5.jpg',
      preview: '/images/certificates/cert5.jpg'
    },
    {
      id: 6,
      name: 'Cybersecurity Phishing Attack Prevention🔒',
      issuer: 'Mineral',
      year: '2025',
      location: 'CA (Online)',
      image: '/images/certificates/cert6.jpg',
      preview: '/images/certificates/cert6.jpg'
    },
    {
      id: 7,
      name: 'Safeguarding Data For Corporates and Personal',
      issuer: 'Mineral',
      year: '2025',
      location: 'CA (Online)',
      image: '/images/certificates/cert7.jpg',
      preview: '/images/certificates/cert7.jpg'
    },
    {
      id: 8,
      name: 'Cybersecurity Browser Security',
      issuer: 'Mineral',
      year: '2025',
      location: 'CA (Online)',
      image: '/images/certificates/cert8.jpg',
      preview: '/images/certificates/cert8.jpg'
    }
  ];

  const otherCertificates = [
    {
      id: 9,
      name: 'Certificate of Competency',
      issuer: 'Berkeley city colllege',
      year: '2025',
      location: 'Berkeley, CA',
      image: '/images/certificates/cert9.jpg',
      preview: '/images/certificates/cert9.jpg'
    },
    {
      id: 10,
      name: 'Business Marketing',
      issuer: 'Mineral',
      year: '2025',
      location: 'CA (Online)',
      image: '/images/certificates/cert10.jpg',
      preview: '/images/certificates/cert10.jpg'
    },
    {
      id: 11,
      name: 'Cybersecurity : Employees security ',
      issuer: 'Mineral',
      year: '2025',
      location: 'CA (online)',
      image: '/images/certificates/cert11.jpg',
      preview: '/images/certificates/cert11.jpg'
    }
  ];

  const CertificateCard = ({ cert }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
    >
      <div className="relative h-48 bg-gray-900 overflow-hidden">
        <img
          src={cert.preview}
          alt={cert.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300/1a1f2e/00d9ff?text=${encodeURIComponent(cert.name)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-cyan-400">{cert.name}</h3>
        <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
        <p className="text-xs text-gray-500 mb-3">{cert.location} • {cert.year}</p>
        
        <button
          onClick={() => setSelectedCert(cert)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/50 hover:border-cyan-400 rounded-lg transition-all duration-300 text-sm text-cyan-400"
        >
          <ExternalLink size={16} />
          View Certificate
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-3xl p-12 mb-12 text-center"
        >
          <Award className="mx-auto mb-4 text-cyan-400" size={60} />
          <h1 className="text-5xl font-bold mb-4">
            Certificates <span className="text-4xl">🏅</span>
          </h1>
          <p className="text-xl text-gray-300">
            Explore my professional certifications and achievements
          </p>
        </motion.div>

        {/* Tech Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-cyan-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">
              💻 Tech Certificates
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CertificateCard cert={cert} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-purple-400/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
              🌟 Other Certificates
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <CertificateCard cert={cert} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <button
              className="absolute top-4 right-4 p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors z-10"
              onClick={() => setSelectedCert(null)}
            >
              <X size={28} className="text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full bg-gray-900 rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/1200x900/1a1f2e/00d9ff?text=${encodeURIComponent(selectedCert.name)}`;
                  }}
                />
              </div>
              
              <div className="p-8 bg-gray-800 border-t-4 border-cyan-400">
                <h3 className="text-3xl font-bold text-cyan-400 mb-3">{selectedCert.name}</h3>
                <div className="flex flex-wrap gap-4 text-gray-300">
                  <p><span className="font-semibold">Issued by:</span> {selectedCert.issuer}</p>
                  <p><span className="font-semibold">Year:</span> {selectedCert.year}</p>
                  <p><span className="font-semibold">Location:</span> {selectedCert.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;