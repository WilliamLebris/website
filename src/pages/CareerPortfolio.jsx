import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, Briefcase, Compass, FileText, BookOpen, Download, Rocket } from 'lucide-react';

const SITE_URL = 'https://williamlebris.github.io/website';
const RESUME_PDF_URL = '/website/resume/Will%27s%20resume-2026.docx.pdf';
const PDF_URL = '/website/portfolio/William%20Lebris%20Tissi%20Nguemetcha%20-%20NCAS%20Student%20Challenge%20-%20Career%20Portfolio.pdf';

// Superscript in-text citation, numbers match the reference list at the bottom
const Cite = ({ n }) => (
  <sup className="text-cyan-400 font-semibold ml-0.5">{[].concat(n).join(',')}</sup>
);

const SectionTitle = ({ icon: Icon, number, children }) => (
  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
    <Icon className="text-cyan-400 no-print" size={32} />
    <span className="text-cyan-400">{number}.</span>
    {children}
  </h2>
);

const CareerPortfolio = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'William Lebris Tissi Nguemetcha | NCAS Student Challenge Career Portfolio';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  // Technical skills (3-10 required)
  const technicalSkills = [
    {
      name: 'Python & Scientific Data Analysis',
      developed: 'SSL research internship; Data Structures & Algorithms; Object-Oriented Programming',
      nasa: <>Used to process and validate image data from NASA's Carruthers mission at UC Berkeley SSL.<Cite n={1} /></>
    },
    {
      name: 'Computer Vision & Image Processing (OpenCV)',
      developed: 'Star detection and tracking at SSL; Healthy Plan AI project',
      nasa: <>Star trackers find a spacecraft's orientation by comparing a camera image to an onboard star catalog, the same idea behind my Carruthers pointing work.<Cite n={8} /></>
    },
    {
      name: 'AI & Machine Learning (PyTorch, TensorFlow, scikit-learn)',
      developed: 'StudentLife OS AI application assistant; personal ML projects',
      nasa: <>NASA uses AI across its missions, from autonomous rover driving on Mars to satellite image analysis.<Cite n={9} /></>
    },
    {
      name: 'Circuit Analysis & Design',
      developed: "Intro to Electrical Engineering; General Physics with Calculus; L'SPACE spacecraft design",
      nasa: <>Every spacecraft subsystem relies on circuits that distribute power and carry commands and data.<Cite n={[10, 11]} /></>
    },
    {
      name: 'Spacecraft Electrical Power Systems',
      developed: "Electrical Engineer role in L'SPACE Mission Concept Academy",
      nasa: <>Power generation, energy storage, and power management and distribution make up a spacecraft's power subsystem.<Cite n={10} /></>
    },
    {
      name: 'Embedded Systems & Low-Level Programming (C/C++, Assembly, Arduino, Raspberry Pi)',
      developed: 'Assembly Language course; hardware and network repair internship at American Tech',
      nasa: <>Spacecraft avionics run flight software on embedded processors.<Cite n={11} /></>
    },
    {
      name: 'Systems Engineering & the NASA Mission Life Cycle',
      developed: "L'SPACE Mission Concept Academy training and team design work",
      nasa: <>NASA's Systems Engineering Handbook defines the life cycle phases and design reviews used on NASA flight projects.<Cite n={12} /></>
    },
    {
      name: 'Engineering Mathematics & Modeling',
      developed: 'Calculus; Differential Equations; Linear Algebra',
      nasa: <>Linear algebra drives the camera geometry I used to measure pointing and distortion, and differential equations describe orbits and circuits.</>
    },
    {
      name: 'Full-Stack Software Engineering (Next.js, React, TypeScript, PostgreSQL, Prisma)',
      developed: <>Building and launching StudentLife OS<Cite n={5} /></>,
      nasa: <>The same skills build the dashboards, databases, and data archives that mission teams and scientists rely on.</>
    },
    {
      name: 'Cybersecurity & Secure Data Handling',
      developed: 'StudentLife OS security program; Mineral cybersecurity certificates',
      nasa: <>Federal agencies, including NASA, manage cyber risk with NIST standards such as the Cybersecurity Framework 2.0.<Cite n={13} /></>
    }
  ];

  // Experiences and projects (3 max, 4 sentences max for description and for alignment)
  const experiences = [
    {
      title: 'AI Research Intern',
      organization: 'UC Berkeley Space Sciences Laboratory (SSL)',
      period: 'Jun 2026 - Aug 2026',
      location: 'Berkeley, CA',
      logo: '/website/images/companies/ssl-logo.png',
      color: '#fdb515',
      description: <>
        I worked at the UC Berkeley Space Sciences Laboratory, which built the instruments for and operates NASA's Carruthers Geocorona Observatory, a spacecraft that images Earth's outermost atmosphere from about a million miles away.<Cite n={[1, 14]} />{' '}
        I built Python and OpenCV pipelines that detect and track the stars that appear in the spacecraft's ultraviolet camera images.{' '}
        By comparing where each star appears with where it should be, the pipeline measures where the spacecraft is pointing and reveals optical distortions in the cameras.{' '}
        I used these results to validate mission observations and improve the team's science data processing, and I earned SSL's certificate for Advancing Space Sciences through Undergraduate Research Experience.
      </>,
      alignment: <>
        Carruthers is a NASA heliophysics mission that studies how Earth's exosphere responds to space weather, knowledge that helps protect satellites and astronauts traveling to the Moon under Artemis.<Cite n={[1, 14]} />{' '}
        Accurate pointing and distortion correction turn raw images into reliable science, so this work supports the mission's core goal.{' '}
        The method uses the same star-matching idea as spacecraft star trackers,<Cite n={8} /> and it shows how AI and computer vision can speed up analysis of large NASA datasets.<Cite n={9} />{' '}
        It prepared me for NASA roles in science data analysis, instrument calibration, and mission operations.
      </>
    },
    {
      title: 'Electrical Engineer',
      organization: "NASA L'SPACE Mission Concept Academy",
      period: 'Sep 2026 - Present',
      location: 'Virtual',
      logo: '/website/images/companies/lspace-logo.png',
      color: '#00d9ff',
      description: <>
        L'SPACE (Lucy Student Pipeline Accelerator and Competency Enabler) is a NASA-funded, 15-week academy where interdisciplinary student teams develop a preliminary mission concept that follows the NASA mission life cycle.<Cite n={[2, 3]} />{' '}
        As my team's Electrical Engineer, I am responsible for the spacecraft's electrical design: power generation and storage, the power budget, and how the avionics and science instruments connect.{' '}
        I work with teammates in science, mechanical, and systems roles to compare design options and keep the concept within mass, power, and cost limits.{' '}
        We document our design in technical reports that follow NASA review procedures, which strengthens my technical writing.<Cite n={3} />
      </>,
      alignment: <>
        NASA funds the academy through its Lucy mission to prepare students for careers on NASA missions.<Cite n={2} />{' '}
        Working through the mission life cycle gives me direct practice with the systems engineering process NASA uses on its flight projects.<Cite n={12} />{' '}
        Designing a spacecraft's power and avionics matches the work of NASA electrical and avionics engineers.<Cite n={[10, 11]} />{' '}
        It also turns my Intro to Electrical Engineering and physics coursework into real design decisions.
      </>
    },
    {
      title: 'Founder & Lead Engineer',
      organization: 'StudentLife OS',
      period: 'Launched Aug 2025',
      location: 'San Francisco Bay Area, CA',
      logo: '/website/images/companies/studentlifeos-logo.png',
      color: '#ef4444',
      description: <>
        I founded and built StudentLife OS, a platform launched in August 2025 that connects students with internships, scholarships, research programs, and campus resources, and gives schools and employers tools to support them.<Cite n={5} />{' '}
        I designed the full stack (Next.js, React, TypeScript, PostgreSQL, Prisma) and an AI application assistant that drafts answers only from a student's own saved data, so it never invents facts.{' '}
        I also built the platform's security program, including encryption, audit logging, and a self-assessment against the NIST Cybersecurity Framework 2.0.<Cite n={13} />{' '}
        I lead a team of student interns who help build and test new features.
      </>,
      alignment: <>
        NASA and the tech industry both need engineers who can ship secure, reliable software, and the same skills build mission dashboards and science data archives.{' '}
        NASA stresses using AI tools safely to support missions and research,<Cite n={9} /> the same principle behind keeping students in control of every AI-drafted answer.{' '}
        Running a security program against NIST standards mirrors how federal agencies manage cyber risk.<Cite n={13} />{' '}
        The platform also helps community college students find STEM opportunities like NCAS, which supports NASA's goal of reaching more of these students.<Cite n={4} />
      </>
    }
  ];

  // Coursework -> skills -> experience -> NASA career pathway
  const pathwayAlignment = [
    {
      coursework: 'Intro to Electrical Engineering; General Physics with Calculus',
      skills: 'Circuit analysis, power systems',
      applied: "L'SPACE Electrical Engineer",
      pathway: <>Electrical / Avionics Engineer: spacecraft power and avionics<Cite n={[10, 11]} /></>
    },
    {
      coursework: 'Data Structures & Algorithms; Object-Oriented Programming',
      skills: 'Python, computer vision, AI, software design',
      applied: 'SSL Carruthers internship; StudentLife OS',
      pathway: <>Data Scientist / AI Engineer for science missions<Cite n={9} /></>
    },
    {
      coursework: 'Linear Algebra; Differential Equations; Calculus',
      skills: 'Image geometry, mathematical modeling',
      applied: 'Carruthers pointing and distortion analysis',
      pathway: <>Guidance, Navigation & Control / Instrument Calibration<Cite n={8} /></>
    },
    {
      coursework: 'Assembly Language',
      skills: 'Low-level programming, embedded systems',
      applied: 'Hardware and network repair internship (American Tech)',
      pathway: <>Flight Software / Embedded Systems Engineer<Cite n={11} /></>
    },
    {
      coursework: "Engineering coursework + L'SPACE training",
      skills: 'Requirements, trade studies, design reviews',
      applied: "L'SPACE Mission Concept Academy",
      pathway: <>Systems Engineer<Cite n={12} /></>
    }
  ];

  const roadmap = [
    { when: '2024 - 2027', what: 'Berkeley City College & Laney College: Electrical Engineering & Computer Science coursework, 4.0 GPA' },
    { when: '2026', what: "AI Research Intern at UC Berkeley SSL (NASA Carruthers); L'SPACE Electrical Engineer; NCAS Scholar; Stanford Small Group Scholars Program (data labeling for AI)" },
    { when: '2027', what: 'Transfer to a four-year Electrical Engineering & Computer Science program' },
    { when: '2027 - 2029', what: <>NASA Office of STEM Engagement internships and the NASA Pathways Program<Cite n={[6, 7]} /></> },
    { when: 'Career', what: 'Electrical and AI systems engineer on NASA science missions, at a NASA center, a university lab like SSL, or an aerospace company' }
  ];

  const references = [
    { title: "UC Berkeley Space Sciences Laboratory. \"NASA's Carruthers Geocorona Observatory will study Earth's exosphere.\"", url: 'https://www.ssl.berkeley.edu/nasas-carruthers-geocorona-observatory-will-study-earths-exosphere/' },
    { title: "L'SPACE Program. \"NASA L'SPACE: Lucy Student Pipeline Accelerator and Competency Enabler.\"", url: 'https://lspace.asu.edu' },
    { title: "L'SPACE Program. \"Mission Concept Academy (MCA).\"", url: 'https://www.lspace.asu.edu/mission-concept-academy' },
    { title: 'NASA. "NASA Revamps Challenge Linking Community College Studies to Aerospace Careers." September 2, 2026.', url: 'https://www.nasa.gov/learning-resources/linking-community-college-studies-to-aerospace-careers/' },
    { title: 'StudentLife OS. "StudentLife OS."', url: 'https://studentlifeos.com' },
    { title: 'NASA Office of STEM Engagement. "NASA Internship Programs."', url: 'https://www.nasa.gov/learning-resources/internship-programs/' },
    { title: 'NASA. "NASA Careers: Pathways."', url: 'https://www.nasa.gov/careers/pathways/' },
    { title: 'NASA Small Spacecraft Systems Virtual Institute. "State-of-the-Art of Small Spacecraft Technology: Guidance, Navigation, and Control."', url: 'https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/' },
    { title: 'NASA. "Super Intelligence" (NASA artificial intelligence overview).', url: 'https://www.nasa.gov/artificial-intelligence/' },
    { title: 'NASA Small Spacecraft Systems Virtual Institute. "State-of-the-Art of Small Spacecraft Technology: Power."', url: 'https://www.nasa.gov/smallsat-institute/sst-soa/power-subsystems/' },
    { title: 'NASA Small Spacecraft Systems Virtual Institute. "State-of-the-Art of Small Spacecraft Technology: Small Spacecraft Avionics."', url: 'https://www.nasa.gov/smallsat-institute/sst-soa/small-spacecraft-avionics/' },
    { title: 'NASA. "NASA Systems Engineering Handbook" (NASA/SP-2016-6105 Rev2).', url: 'https://www.nasa.gov/reference/systems-engineering-handbook/' },
    { title: 'National Institute of Standards and Technology (NIST). "Cybersecurity Framework" (CSF 2.0).', url: 'https://www.nist.gov/cyberframework' },
    { title: 'NASA Science. "New NASA Mission to Reveal Earth\'s Invisible \'Halo\'." September 18, 2025.', url: 'https://science.nasa.gov/science-research/heliophysics/new-nasa-mission-to-reveal-earths-invisible-halo' }
  ];

  return (
    <div className="career-portfolio min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none no-print">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="pf-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img
            src="/website/images/companies/ncas-logo.png"
            alt="NASA Community College Aerospace Scholars (NCAS) logo"
            className="w-28 h-28 mx-auto mb-4 object-contain"
          />
          <p className="text-sm uppercase tracking-widest text-cyan-400 mb-2">NCAS Student Challenge</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Career Portfolio</h1>
          <p className="text-xl text-white font-semibold">William Lebris Tissi Nguemetcha</p>
          <p className="text-gray-400 mt-1">
            Electrical Engineering & Computer Science · Berkeley City College · NASA Community College Aerospace Scholar
          </p>
          <p className="text-gray-400 mt-1">
            Portfolio website: <a href={`${SITE_URL}/#/career-portfolio`} className="text-cyan-400 underline">{SITE_URL.replace('https://', '')}/#/career-portfolio</a>
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap no-print">
            <a
              href={PDF_URL}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300"
            >
              <Download size={20} />
              Download PDF Version
            </a>
          </div>
        </motion.header>

        {/* 1. Executive Summary */}
        <section className="mb-14">
          <SectionTitle icon={Target} number={1}>Executive Summary</SectionTitle>
          <div className="pf-card bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              I am an Electrical Engineering and Computer Science student at Berkeley City College and Laney College with a 4.0 GPA, planning to transfer to a four-year university in 2027. My goal is to become an electrical and AI systems engineer who builds the hardware and software that turn spacecraft data into science for NASA missions.
            </p>
            <p>
              My coursework in calculus, differential equations, linear algebra, physics with calculus, electrical engineering, assembly language, and data structures gives me that foundation. In summer 2026 I applied it as an AI Research Intern at the UC Berkeley Space Sciences Laboratory, which built the instruments for and operates NASA's Carruthers Geocorona Observatory.<Cite n={1} /> I built computer vision pipelines that detect stars in the spacecraft's images to check its pointing and find optical distortions. This fall I am the Electrical Engineer on a team in L'SPACE Mission Concept Academy, a NASA-funded program<Cite n={2} /> where students design a mission concept that follows the NASA mission life cycle.<Cite n={3} /> As a NASA Community College Aerospace Scholar, I am connecting my coursework to NASA career pathways.<Cite n={4} /> I also founded StudentLife OS, an AI platform launched in August 2025 that connects students with internships, scholarships, and research programs.<Cite n={5} />
            </p>
            <p>
              These experiences prepare me for NASA roles in spacecraft power and avionics, flight and ground software, and science data analysis. My next steps are a NASA internship through the Office of STEM Engagement or the Pathways Program<Cite n={[6, 7]} /> and a bachelor's degree in electrical engineering and computer science.
            </p>
          </div>
        </section>

        {/* 2. Technical Skills */}
        <section className="mb-14">
          <SectionTitle icon={Cpu} number={2}>Technical Skills</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="pf-card bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-5 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-2">
                  {index + 1}. {skill.name}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  <span className="font-semibold text-white">Developed through:</span> {skill.developed}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-white">NASA connection:</span> {skill.nasa}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Experiences and Projects */}
        <section className="mb-14">
          <SectionTitle icon={Briefcase} number={3}>Experiences & Projects</SectionTitle>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.organization}
                className="pf-card pf-flow bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="pf-keep flex items-start gap-5 mb-4">
                  <div
                    className="pf-logo w-20 h-20 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 border-2"
                    style={{ borderColor: exp.color }}
                  >
                    <img src={exp.logo} alt={`${exp.organization} logo`} className="w-16 h-16 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: exp.color }}>{exp.title}</h3>
                    <p className="text-lg text-white font-semibold">{exp.organization}</p>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <span>📍 {exp.location}</span>
                      <span>📅 {exp.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold text-white">Experience:</span> {exp.description}
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-cyan-400">NASA & industry alignment:</span> {exp.alignment}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. NASA Career Pathway Alignment */}
        <section className="mb-14">
          <SectionTitle icon={Compass} number={4}>NASA Career Pathway Alignment</SectionTitle>
          <p className="text-gray-300 mb-4">
            This table shows how my community college coursework builds the skills I have applied in real projects, and the NASA and aerospace roles those skills lead to.
          </p>
          <div className="pf-card pf-flow overflow-x-auto bg-gray-800/30 border border-gray-700 rounded-2xl mb-8">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-700 text-cyan-400">
                  <th className="p-3">Coursework</th>
                  <th className="p-3">Skills built</th>
                  <th className="p-3">Where I applied them</th>
                  <th className="p-3">NASA / aerospace pathway</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {pathwayAlignment.map((row) => (
                  <tr key={row.coursework} className="border-b border-gray-800 last:border-0 align-top">
                    <td className="p-3">{row.coursework}</td>
                    <td className="p-3">{row.skills}</td>
                    <td className="p-3">{row.applied}</td>
                    <td className="p-3 font-semibold text-white">{row.pathway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Rocket className="text-cyan-400 no-print" size={22} />
            My path to NASA
          </h3>
          <ol className="pf-card border-l-2 border-cyan-400/50 ml-2 space-y-4">
            {roadmap.map((step) => (
              <li key={step.when} className="relative pl-6">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-cyan-400 rounded-full no-print"></span>
                <span className="font-semibold text-cyan-400">{step.when}:</span>{' '}
                <span className="text-gray-300">{step.what}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* 5. Resume (one page) */}
        <section className="mb-14 resume-section">
          <SectionTitle icon={FileText} number={5}>Resume</SectionTitle>
          <div className="resume-sheet bg-white rounded-lg shadow-2xl mx-auto max-w-[816px] p-4 sm:p-8">
            <img
              src="/website/resume/resume-2026.png"
              alt="Resume of William Lebris Tissi Nguemetcha: education, skills, NASA NCAS, NASA L'SPACE, UC Berkeley SSL AI research internship, work experience, and awards"
              className="resume-image w-full h-auto"
            />
          </div>
          <p className="text-center mt-4 no-print">
            <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
              Open resume as PDF
            </a>
          </p>
        </section>

        {/* References */}
        <section className="references-section">
          <SectionTitle icon={BookOpen} number={6}>References</SectionTitle>
          <ol className="pf-card bg-gray-800/30 border border-gray-700 rounded-2xl p-6 space-y-2 text-sm text-gray-300 list-decimal list-inside">
            {references.map((ref) => (
              <li key={ref.url}>
                {ref.title}{' '}
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline break-all">
                  {ref.url}
                </a>
              </li>
            ))}
          </ol>
          <p className="text-gray-500 text-xs mt-4">
            Logos shown belong to NCAS, L'SPACE, UC Berkeley Space Sciences Laboratory, and StudentLife OS. No NASA insignia are used in this portfolio.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CareerPortfolio;
