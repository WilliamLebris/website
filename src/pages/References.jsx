import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, Building2, Linkedin } from 'lucide-react';

const References = () => {
  // UPDATE WITH YOUR ACTUAL REFERENCES
  const references = [
    {
      name: 'Dr. Elisabeth Chemouni',
      title: 'Professor of Mathematics',
      organization: 'Berkeley City College',
      relationship: 'Professsor | Employer',
      email: '************@peralta.edu',
      phone: '+1 (***) ***-***',
      linkedin: 'https://www.linkedin.com/in/elisabeth-chemouni-3821388/',
      photo: '/images/references/ref1.jpg',
      description: 'Elisabeth was my math professor at first, based on my performance she offered me a tutoring position to help other students excel in math. She has been a great mentor and guide throughout my academic journey.',
      yearsKnown: '3 years'
    },
    {
      name: 'Ben Haring',
      title: 'Vice President of Marina Security Services',
      organization: 'Marina Security Services',
      relationship: 'Supervisor | Employer',
      email: '************@marinasecurity.com',
      phone: '+1 (***) ***-***',
      linkedin: 'https://www.linkedin.com/in/benedict-haring/',
      photo: '/images/references/ref2.jpg',
      description: 'Ben was my supervisor during my internship at Marina Security Services. He provided invaluable insights into network security and IT infrastructure, helping me develop practical skills in the field.',
      yearsKnown: '1 years'
    },
    {
      name: 'Skyler Barton',
      title: 'Counselor @ Berkeley City College',
      organization: 'Berkeley City College',
      relationship: 'Academic Advisor',
      email: '************@peralta.edu',
      phone: '+1 (***) ***-****',
      linkedin: 'https://www.linkedin.com/in/skyler-barton-4266b628/',
      photo: '/images/references/ref3.jpg',
      description: 'Skyler has been my academic advisor, helping me navigate my educational path and career goals. Her support and advice have been instrumental in my success.',
      yearsKnown: '3 years'
    },
    {
      name: 'Samson Eric',
      title: 'Professional Computer repair Technician',
      organization: 'American Tech',
      relationship: 'Employer | Supervisor',
      email: '***************@americantech.com',
      phone: '+1 (***) ***-****',
      linkedin: 'https://www.linkedin.com/company/americantech/',
      photo: '/images/references/ref4.jpg',
      description: 'Samson was my supervisor during my time at American Tech. He taught me the ins and outs of computer repair and customer service, significantly enhancing my technical and interpersonal skills.',
      yearsKnown: '2 years'
    },
    {
      name: 'Zoro Pridhvi',
      title: 'Master Student @ UC Berkeley',
      organization: 'Berkeley University',
      relationship: 'Coworker',
      email: '*************@peralta.edu',
      phone: '+1 (***) ***-****',
      linkedin: 'https://www.linkedin.com/in/pszoro/',
      photo: '/images/references/ref5.jpg',
      description: 'Zoro is a fellow coworker from Berkeley City College. He was an amazing tutor, We collaborated on various projects on how to make tutoring and study session better, fostering a productive and supportive working relationship.',
      yearsKnown: '3 year'
    },
    {
      name: 'William Jones',
      title: 'IT Department Lead',
      organization: 'Laney College',
      relationship: 'supervisor | Mentor',
      email: '*************@peralta.edu',
      phone: '+1 (***) ***-****',
      linkedin: 'https://www.linkedin.com/in/william-jones-74728ba5/',
      photo: '/images/references/ref6.jpg',
      description: 'William, even though we have the same first name, was my supervisor during my internship at Laney College IT Department. He provided me with hands-on experience in IT support and network management, greatly enhancing my technical expertise.',
      yearsKnown: '2 years'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Users className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Professional References</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Colleagues and mentors who can speak to my skills, work ethic, and professional character.
          </p>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-6 mb-12 text-center"
        >
          <p className="text-gray-300">
            📧 All References personal information available upon request. Contact information provided with permission.
          </p>
        </motion.div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
            >
              {/* Photo Section */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 overflow-hidden">
                <img
                  src={ref.photo}
                  alt={ref.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200/1a1f2e/00d9ff?text=No+Photo';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-1">{ref.name}</h3>
                <p className="text-lg text-white font-semibold mb-1">{ref.title}</p>
                <p className="text-gray-400 mb-4 flex items-center gap-2">
                  <Building2 size={16} />
                  {ref.organization}
                </p>

                <div className="bg-gray-700/30 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-cyan-400">Relationship:</span> {ref.relationship}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    <span className="font-semibold text-cyan-400">Years Known:</span> {ref.yearsKnown}
                  </p>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {ref.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${ref.email}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail size={16} />
                    <span className="truncate">{ref.email}</span>
                  </a>
                  <a
                    href={`tel:${ref.phone}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Phone size={16} />
                    {ref.phone}
                  </a>
                  <a
                    href={ref.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin size={16} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 p-6 bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-xl"
        >
          <p className="text-gray-400 mb-2">
            <span className="text-cyan-400 font-semibold">Additional references</span> are available upon request.
          </p>
          <p className="text-gray-500 text-sm">
            Please feel free to contact me for complete reference letters and contact details.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default References;