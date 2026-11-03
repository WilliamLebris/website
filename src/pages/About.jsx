import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Heart, Award } from 'lucide-react';

const About = () => {
  // Education
  const education = [
    {
      school: 'Laney College',
      degree: 'Electrical & Computer Science Major',
      location: 'Oakland, California',
      period: '2024 - Present',
      gpa: '4.0',
      logo: '/website//images/schools/laney-logo.png',
      color: '#00d9ff'
    },
    {
      school: 'Berkeley City College',
      degree: 'Electrical & Computer Science Major',
      location: 'Berkeley, California',
      period: '2024 - 2027 (expected graduation)',
      gpa: '4.0',
      logo: '/website//images/schools/bcc-logo.png',
      color: '#7b2ff7'
    }
  ];

  // Work Experience (summarized descriptions)
  const workExperience = [
    {
      company: 'UC Berkeley Space Sciences Laboratory (SSL)',
      position: 'AI Research Intern',
      location: 'Berkeley, California',
      period: 'Jun 2026 - Aug 2026',
      description: "Worked on NASA's Carruthers Geocorona Observatory, building Python and OpenCV pipelines that detect and track stars in the spacecraft's ultraviolet images to measure its pointing, map optical distortions, and validate mission observations for Earth exosphere research.",
      logo: '/website/images/companies/ssl-logo.png',
      color: '#fdb515'
    },
    {
      company: "NASA L'SPACE Mission Concept Academy",
      position: 'Electrical Engineer',
      location: 'Virtual',
      period: 'Sep 2026 - Present',
      description: "Responsible for the power and avionics design of my team's spacecraft mission concept in this NASA-funded academy, working through the NASA mission life cycle with science, mechanical, and systems teammates.",
      logo: '/website/images/companies/lspace-logo.png',
      color: '#00d9ff'
    },
    {
      company: 'NASA Community College Aerospace Scholars (NCAS)',
      position: 'NASA Community College Aerospace Scholar',
      location: 'Virtual',
      period: 'Oct 2026 - Present',
      description: "Participant in NASA's community college challenge, attending live sessions with NASA experts and building a career portfolio that connects my coursework to NASA career pathways.",
      logo: '/website/images/companies/ncas-logo.png',
      color: '#fb923c'
    },
    {
      company: 'Stanford University',
      position: 'Stanford Small Group Scholars Program | Participant',
      location: 'Stanford, California',
      period: 'Oct 2026 - Present',
      description: "Selected for Stanford's Scholars Program, exploring how data organization and labeling improve AI predictions.",
      logo: '/website/images/companies/stanford-logo.png',
      color: '#f87171'
    },
    {
      company: 'StudentLife OS',
      position: 'Founder & Lead Engineer',
      location: 'San Francisco Bay Area, California',
      period: 'Launched Aug 2025',
      description: 'Founded and launched StudentLife OS, a live platform that connects students with internships, scholarships, research, and campus resources. Built the full stack (Next.js, TypeScript, PostgreSQL, Prisma) and its AI application assistant, and lead a team of student interns.',
      logo: '/website/images/companies/studentlifeos-logo.png',
      color: '#ef4444'
    },
    {
      company: 'Berkeley City College',
      position: 'Web Developer - FBLA / VP ASME Club / Mathematics Tutor',
      location: 'Berkeley, California',
      period: 'Aug 2024 - Present',
      description: 'Developed web tools for FBLA, led technical projects as VP of ASME Club, and tutored mathematics to fellow students, building strong leadership and technical skills.',
      logo: '/website/images/companies/bcc-logo.png',
      color: '#00d9ff'
    },
    {
      company: 'Marina Security Services',
      position: 'Business & IT Operations Intern',
      location: 'San Francisco Bay Area',
      period: 'Jun 2025 - Aug 2025',
      description: 'Configured IT infrastructure, supported recruiting, coordinated training, assisted with finance operations, and provided general tech support to ensure smooth office operations.',
      logo: '/website/images/companies/marina-logo.png',
      color: '#7b2ff7'
    },
    {
      company: 'The Home Depot',
      position: 'Customer Service Associate',
      location: 'Emeryville, California',
      period: 'May 2025 - Present',
      description: 'Assisted customers in-store and online, handled POS operations, returns, BOPIS orders, and ensured high-quality customer service.',
      logo: '/website/images/companies/homedepot-logo.png',
      color: '#f97316'
    },
    {
      company: 'Healthy Plan AI',
      position: 'Founder | AI Engineer & Product/Web Designer',
      location: 'Berkeley, California',
      period: 'Jun 2025',
      description: 'Built Healthy Plan AI, an AI-powered health platform providing nutrition analysis, weekly meal plans, grocery planning, and doctor-style PDF reports using Python, Streamlit, FastAPI, and Gemini API.',
      logo: '/website/images/companies/healthyplan-logo.png',
      color: '#10b981'
    },
    {
      company: 'Laney College',
      position: 'Student Worker - IT Department',
      location: 'Oakland, California',
      period: 'Nov 2024 - Mar 2025',
      description: 'Provided IT support to students and faculty, troubleshooting hardware/software, maintaining campus IT equipment, and assisting in software/system deployment.',
      logo: '/website/images/companies/laney-logo.png',
      color: '#00d9ff'
    },
    {
      company: 'American Tech, Inc',
      position: 'Computer Hardware & Software Intern',
      location: 'Berkeley, California',
      period: 'Dec 2024 - Feb 2025',
      description: 'Repaired laptops/desktops, configured networks, assisted with tech sales, and gained hands-on experience in hardware/software troubleshooting.',
      logo: '/website/images/companies/americantech-logo.png',
      color: '#7b2ff7'
    },
    {
      company: 'Zoho',
      position: 'Hackathon Winner - Front-End Developer',
      location: 'Pleasanton, California',
      period: 'Jan 2025',
      description: 'Contributed as front-end developer in hackathon, enhancing teamwork, problem-solving, and React/Flask programming skills.',
      logo: '/website/images/companies/zoho-logo.png',
      color: '#facc15'
    }
  ];

  // Volunteering
  const volunteering = [
    {
      organization: 'Laney College IT Department',
      role: 'Volunteer',
      period: 'Sep 2024 - Mar 2025',
      description: 'Provided technical support, maintained IT equipment, and assisted in software/system deployments.',
      logo: '/website/images/volunteer/laney-logo.png'
    },
    {
      organization: 'EBMUD Administration',
      role: 'Volunteer',
      period: 'Sep 2024 - Present',
      description: 'Assisted with environmental clean up, keeping the community safe and clean.',
      logo: '/website/images/volunteer/ebmud-logo.png'
    },
    {
      organization: 'East Bay Regional Park District',
      role: 'Volunteer',
      period: 'Sep 2024 - Present',
      description: 'Supported environmental initiatives and community programs. Helped keep the city green and clean.',
      logo: '/website/images/volunteer/ebpark-logo.png'
    },
    {
      organization: 'Fairfield-Suisun Sewer District',
      role: 'Volunteer',
      period: 'Apr 2024 - Present',
      description: 'Contributed to environmental and community support activities including clean up.',
      logo: '/website/images/volunteer/fssd-logo.png'
    },
    {
      organization: 'Berkeley City College - DreamLaunch',
      role: 'Participant | Project Proposal',
      period: 'Apr 2025 - May 2025',
      description: 'Presented a tech-driven business proposal in DreamLaunch Shark Tank competition, enhancing entrepreneurial and presentation skills.',
      logo: '/website/images/volunteer/bcc-logo.png'
    }
  ];

  // Honors & Awards
  const honorsAwards = [
    {
      title: 'Certificate of Completion: Advancing Space Sciences through Undergraduate Research Experience',
      issuer: 'UC Berkeley Space Sciences Laboratory',
      year: 'Aug 2026',
      description: 'Awarded for completing the 2026 undergraduate research experience at SSL, working on NASA Carruthers mission data.',
      logo: '/website/images/companies/ssl-logo.png'
    },
    {
      title: 'UNCF Scholarship',
      issuer: 'United Negro College Fund (UNCF)',
      year: 'Aug 2025',
      description: 'Awarded for outstanding academic achievements ',
      logo: '/website/images/awards/uncf-logo.png'
    },
    {
      title: 'ASLC Hardship Scholarship',
      issuer: 'Laney College',
      year: 'Apr 2025',
      description: 'Recognized for resilience and excellence while managing academic and personal challenges.',
      logo: '/website/images/awards/laney-logo.png'
    },
    {
      title: 'PepsiCo Uplift Scholarship',
      issuer: 'PepsiCo',
      year: 'Feb 2025',
      description: 'Awarded for leadership and innovation at Laney College.',
      logo: '/website/images/awards/pepsico-logo.png'
    },
    {
      title: 'Hackathon Winner',
      issuer: 'Zoho Corporation | Charmhealth | JoyThomas',
      year: 'Jan 2025',
      description: 'Won front-end development hackathon for creating impactful solutions.',
      logo: '/website/images/awards/zoho-logo.png'
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
          <User className="mx-auto mb-4 text-cyan-400" size={48} />
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">About Me</h1>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Hello! 👋</h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              I'm <span className="text-cyan-400 font-semibold">William Lebris Tissi Nguemetcha</span>, an Electrical Engineering & Computer Science student at Berkeley City College and Laney College with a <span className="text-cyan-400 font-semibold">4.0 GPA</span>. I build at the intersection of electrical engineering, AI, and space science.
            </p>
            <p>
              In summer 2026 I was an <span className="text-cyan-400 font-semibold">AI Research Intern at the UC Berkeley Space Sciences Laboratory</span>, working on NASA's Carruthers Geocorona Observatory. I built computer vision pipelines that track stars in the spacecraft's images to measure its pointing and find optical distortions. This fall I'm the <span className="text-cyan-400 font-semibold">Electrical Engineer</span> on a NASA L'SPACE Mission Concept Academy team and a <span className="text-cyan-400 font-semibold">NASA Community College Aerospace Scholar (NCAS)</span>.
            </p>
            <p>
              I'm also the founder of <a href="https://studentlifeos.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">StudentLife OS</a>, which launched in August 2025. It's a live platform that connects students with internships, scholarships, research programs, conferences, hackathons, and campus resources, and it gives schools and organizations the tools to support and reach their students. If you're a student, check it out!
            </p>
            <p>
              I plan to transfer to UC Berkeley, Stanford, MIT, or UCLA in 2027 and build a career designing the electronics and software behind NASA missions. Explore my <Link to="/career-portfolio" className="text-purple-400 underline">NCAS career portfolio</Link>, <Link to="/projects" className="text-purple-400 underline">projects</Link>, and <Link to="/certificates" className="text-purple-400 underline">certificates</Link>, or reach out through my <Link to="/contact" className="text-purple-400 underline">contact page</Link>.
            </p>

          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-cyan-400" size={40} />
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 border-2"
                       style={{ borderColor: edu.color }}>
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/80/1a1f2e/${edu.color.replace('#', '')}/fff?text=🎓`;
                      }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: edu.color }}>
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-white font-semibold mb-2">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-gray-400 mb-2">
                      <span>📍 {edu.location}</span>
                      <span>📅 {edu.period}</span>
                      <span className="text-cyan-400 font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="mb-16"
>
  <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
    <Briefcase className="text-cyan-400" size={40} />
    Work Experience
  </h2>

  <div className="space-y-6">
    {workExperience.map((job, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + index * 0.1 }}
        whileHover={{ x: 10 }}
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
      >
        <div className="flex items-start gap-6">
          <div
            className="w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 border-2"
            style={{ borderColor: job.color }}
          >
            {job.logo ? (
              <img
                src={job.logo}
                alt={job.company}
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/80/1a1f2e/${job.color.replace('#', '')}/fff?text=💼`;
                }}
              />
            ) : (
              <GraduationCap size={40} style={{ color: job.color }} />
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1" style={{ color: job.color }}>
              {job.position}
            </h3>
            <p className="text-xl text-white font-semibold mb-1">{job.company}</p>
            <div className="flex flex-wrap gap-4 text-gray-400 mb-2">
              <span>📍 {job.location}</span>
              <span>📅 {job.period}</span>
            </div>
            <p className="text-gray-300">{job.description}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Volunteering Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="mb-16"
>
  <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
    <Heart className="text-cyan-400" size={40} />
    Volunteering
  </h2>

  <div className="space-y-6">
    {volunteering.map((vol, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 + index * 0.1 }}
        whileHover={{ x: 10 }}
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
      >
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-cyan-400">
            <img
              src={vol.logo}
              alt={vol.organization}
              className="w-16 h-16 object-contain"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/80/1a1f2e/00d9ff/fff?text=❤️`;
              }}
            />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1">{vol.role}</h3>
            <p className="text-xl text-white font-semibold mb-1">{vol.organization}</p>
            <div className="flex flex-wrap gap-4 text-gray-400 mb-2">
              <span>📅 {vol.period}</span>
            </div>
            <p className="text-gray-300">{vol.description}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Honors & Awards Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="mb-16"
>
  <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
    <Award className="text-cyan-400" size={40} />
    Honors & Awards
  </h2>

  <div className="space-y-6">
    {honorsAwards.map((award, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 + index * 0.1 }}
        whileHover={{ x: 10 }}
        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
      >
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-cyan-400">
            <img
              src={award.logo}
              alt={award.title}
              className="w-16 h-16 object-contain"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/80/1a1f2e/00d9ff/fff?text=🏆`;
              }}
            />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1">{award.title}</h3>
            <p className="text-xl text-white font-semibold mb-1">{award.issuer}</p>
            <div className="flex flex-wrap gap-4 text-gray-400 mb-2">
              <span>📅 {award.year}</span>
            </div>
            <p className="text-gray-300">{award.description}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>


      </div>
    </div>
  );
};

export default About;
