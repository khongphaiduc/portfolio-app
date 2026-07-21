import { useState, useEffect } from 'react';
import avatarImg from './assets/avatar.png';
import project1Img from './assets/project1.png';
import project2Img from './assets/project2.png';
import cvPdf from './assets/PhamTrungDuc_Fresher_NET.pdf';
import notFoundImg from './assets/notfound.jpg';
import './App.css';

// SVG Icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.04-1.21-1.83-2.25-2.25-.66-1.57-2.3-2.75-4.25-2.75-2.61 0-4.63 2.1-4.94 4.7C2.56 11.23 1 13.18 1 15.5 1 18.06 3.03 20 5.5 20h12Z" /></svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
);

function App() {
  // Theme state
  const [theme, setTheme] = useState('dark');
  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);
  // Active section (for navbar active state tracking)
  const [activeSection, setActiveSection] = useState('home');
  // Dynamic project details tracking (expandable accordion)
  const [openProjectIndex, setOpenProjectIndex] = useState(null);
  // CV Modal state
  const [showCvModal, setShowCvModal] = useState(false);
  // 404 Routing fallback state
  const [is404, setIs404] = useState(false);

  // Typing effect variables
  const titles = ['Backend Engineer', 'Software Engineer', 'System Architecture Enthusiast'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Check route path initially and on state changes
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path !== '/' && path !== '') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);

    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);



  // Handle dark/light theme
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (showCvModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCvModal]);

  // Track mouse coordinates for background spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect logic
  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 45 : 95;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1800); // Wait before deleting
        }
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    if (!(currentText === fullText && !isDeleting)) {
      timer = setTimeout(handleType, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  // Highlight navbar section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const projects = [
    {
      title: 'Food Ordering Microservices',
      period: 'Dec 2025 - Present',
      description: 'A food ordering system designed using Microservices architecture and Domain-Driven Design (DDD) principles. Provides an application decoupling solution that enables independent scalability of core services with high reliability.',
      tags: ['ASP.NET Core', 'gRPC', 'EF Core', 'Elasticsearch', 'Redis', 'RabbitMQ', 'SignalR', 'ReactJS'],
      beLink: 'https://github.com/khongphaiduc/food-ordering-microservices-ddd',
      feLink: 'https://github.com/khongphaiduc/food-ordering-microservices-frontend',
      image: project1Img,
      deepDive: [
        'Built an AI-based personalized food recommendation engine utilizing user interaction logs (views, cart events).',
        'Leveraged Elasticsearch to provide intelligent autocompletion search suggestions, increasing search accuracy and relevance.',
        'Developed a real-time order state management system using SignalR to instantly synchronize order updates between customers and the kitchen staff.'
      ]
    },
    {
      title: 'Hotel Booking Management System',
      period: 'Aug 2025 - Dec 2025',
      description: 'An online hotel reservation and administrative platform that enables users to search, book rooms, and make secure payments online, while providing administrative interfaces for room operations and revenue management.',
      tags: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Redis Lock', 'RabbitMQ', 'SignalR', 'VNPAY', 'PayOS'],
      sourceLink: 'https://github.com/khongphaiduc/hotel-manager-booking',
      image: project2Img,
      deepDive: [
        'Resolved resource race conditions (overbooking) under high concurrency using Redis-based Distributed Locks.',
        'Integrated VNPAY and PayOS secure online payment gateways with automated background processes for payment lifecycle handling.',
        'Implemented Redis Cache for high-frequency room listings, reducing primary database query loads and boosting API response times by 66% in performance tests.',
        'Reduced booking API response times from ~3-5 seconds to under 1 second by offloading email notifications to a RabbitMQ-based background worker.'
      ]
    }
  ];

  const skillMatrix = [
    {
      category: 'Core Languages & Backend Dev',
      skills: [
        { name: 'C# Core', detail: 'OOP, SOLID, LINQ, Async/Await', icon: <CodeIcon /> },
        { name: '.NET Core & Web API', detail: 'RESTful API, ASP.NET Core, MVC', icon: <ServerIcon /> },
        { name: 'Architecture Design', detail: 'Clean Architecture, DDD, Microservices', icon: <ServerIcon /> },
        {
          name: 'Design Pattern',
          detail: 'Use common design patterns to build clean, maintainable, and scalable applications.',
          icon: <ServerIcon />
        }
      ]
    },
    {
      category: 'Databases & Caching Solutions',
      skills: [
        { name: 'SQL Server', detail: 'Relational DB management & Tuning', icon: <DatabaseIcon /> },
        { name: 'PostgreSQL', detail: 'Open-source object-relational database', icon: <DatabaseIcon /> },
        { name: 'Redis Cache & Lock', detail: 'Distributed locks, session & cache memory', icon: <DatabaseIcon /> },
        { name: 'Elasticsearch', detail: 'Enterprise search engine & logging', icon: <DatabaseIcon /> }
      ]
    },
    {
      category: 'Real-time & Asynchronous Messaging',
      skills: [
        { name: 'SignalR', detail: 'Bi-directional real-time web connection', icon: <GlobeIcon /> },
        { name: 'WebSockets', detail: 'Full-duplex transport protocol', icon: <GlobeIcon /> },
        { name: 'RabbitMQ', detail: 'Message queue broker & event distribution', icon: <CloudIcon /> },
        { name: 'Background Services', detail: 'Worker Service, long-running processes', icon: <ServerIcon /> }
      ]
    },
    {
      category: 'Development Tools & Testing',
      skills: [
        { name: 'Git & GitHub', detail: 'Version control & collaboration workflow', icon: <CodeIcon /> },
        { name: 'JMeter & Postman', detail: 'Performance & API contract testing', icon: <CodeIcon /> },
        { name: 'xUnit', detail: 'TDD & automated unit testing runner', icon: <CodeIcon /> }
      ]
    },
    {
      category: 'DevOps & Containerization',
      skills: [
        { name: 'Docker', detail: 'Containerization & app deployment environment', icon: <CloudIcon /> },
        { name: 'CI/CD (Jenkins)', detail: 'Continuous integration and pipeline building', icon: <CloudIcon /> }
      ]
    },
    {
      category: 'Frontend & Soft Skills',
      skills: [
        { name: 'Frontend Basics', detail: 'HTML, CSS, Bootstrap, JS', icon: <GlobeIcon /> },
        { name: 'ReactJS', detail: 'Modern UI framework integration', icon: <GlobeIcon /> },
        { name: 'Soft Skills', detail: 'Problem solving, communication, leadership', icon: <CodeIcon /> }
      ]
    }
  ];

  if (is404) {
    return (
      <div className="not-found-container">
        <div className="mouse-glow"></div>
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
        <div className="not-found-card glass-card animate-fade-in">
          <div className="not-found-img-wrapper">
            <img src={notFoundImg} alt="404 Not Found" className="not-found-img" />
          </div>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-desc">
            The page you are looking for does not exist or has been moved. Please return to the homepage.
          </p>
          <button 
            onClick={() => {
              window.history.pushState(null, '', '/');
            }} 
            className="btn btn-primary"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mouse-glow"></div>
      {/* Navigation */}
      <header>
        <div className="container">
          <nav>
            <a href="#home" className="logo">
              PTD<span>.</span>
            </a>

            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li>
                <a
                  href="#home"
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeSection === 'skills' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={activeSection === 'experience' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="nav-actions">
              <button
                className="theme-toggle"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>

              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>

        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content animate-fade-in">
              <span className="hero-subtitle">ENGINEERING BACKEND SYSTEMS</span>
              <h1 className="hero-title">
                Phạm Trung Đức
              </h1>
              <h2 style={{ fontSize: '1.8rem', height: '3rem', fontWeight: 500, letterSpacing: '0.5px' }}>
                I am a <span className="gradient-text">{currentText}</span>
                <span className="cursor" style={{ color: 'var(--accent-primary)', animation: 'blink 0.8s infinite' }}>|</span>
              </h2>
              <p className="hero-desc">
                Software Engineer specializing in <strong>Backend</strong> systems. Focused on designing data optimization, distributed caching, message queues, and high-performance Microservices architectures.
              </p>

              <div className="hero-btns">
                <a href="#contact" className="btn btn-primary">Contact Me</a>
                <button onClick={() => setShowCvModal(true)} className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <EyeIcon /> View CV
                </button>
                <a href={cvPdf} download="PhamTrungDuc_Fresher_NET.pdf" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <DownloadIcon /> Download CV (PDF)
                </a>
              </div>

              <div className="hero-socials">
                <a href="https://github.com/khongphaiduc" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="GitHub"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/ptrungduc1011/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
                <a href="https://www.facebook.com/phamtrungduc1011" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="Facebook"><FacebookIcon /></a>
                <a href="https://www.instagram.com/tp_trugduc/" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="Instagram"><InstagramIcon /></a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img src={avatarImg} alt="Phạm Trung Đức" className="hero-image" />
                <div className="hero-image-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Professional Skills</h2>
          <p className="section-subtitle">A curated set of technologies and backend skills I leverage to build robust and scalable systems.</p>

          <div className="skills-container">
            {skillMatrix.map((cat, catIdx) => (
              <div className="skills-category glass-card" key={catIdx}>
                <h3 className="skills-cat-title">{cat.category}</h3>
                <div className="skills-list">
                  {cat.skills.map((skill, idx) => (
                    <div className="skill-item" key={idx}>
                      <div className="skill-icon-mini">
                        {skill.icon}
                      </div>
                      <div className="skill-info-mini">
                        <span className="skill-name-mini">{skill.name}</span>
                        <span className="skill-desc-mini">{skill.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and academic foundation.</p>

          <div className="timeline">
            {/* Freelancer Item */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <span className="timeline-date">May 2026 - Present</span>
                <h3 className="timeline-title">Freelancer Backend Developer</h3>
                <span className="timeline-subtitle">Independent Contractor & Project Manager</span>
                <p className="timeline-desc">
                  Developed and managed commercial web systems for multiple clients, focusing on scalable backend architectures and leading development teams.
                </p>
                <ul className="timeline-bullets">
                  <li>Consulted directly with clients to translate business requirements into system design, API contracts, and database architectures.</li>
                  <li>Managed and led development teams (3-5 members), organizing tasks, conducting code reviews, and ensuring project delivery using Agile methodologies.</li>
                  <li>Built and deployed containerized RESTful APIs, payment gateways (VNPAY, PayOS), and notification pipelines using .NET Core, PostgreSQL, Redis, and Docker.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <span className="timeline-date">Jan 2026 - Apr 2026</span>
                <h3 className="timeline-title">Intern Backend Developer</h3>
                <span className="timeline-subtitle">FPT Software</span>
                <p className="timeline-desc">
                  Participated as an intern in real-world projects at Vietnam's leading software exporter. Gained hands-on experience in a professional Agile/Scrum environment.
                </p>
                <ul className="timeline-bullets">
                  <li>Collaborated in Agile sprints, directly participating in daily stand-ups, sprint planning, and iterative feature delivery.</li>
                  <li><strong>Project: Talent Acquisition System (TAS)</strong></li>
                  <li>Designed and implemented the automatic interview scheduling feature using Redis Distributed Locking to prevent resource race conditions and double bookings in a high-concurrency environment.</li>
                </ul>
              </div>
            </div>

            {/* Education Item */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <span className="timeline-date">2022 - Present</span>
                <h3 className="timeline-title">Software Engineering</h3>
                <span className="timeline-subtitle">FPT University</span>
                <p className="timeline-desc">
                  Pursuing a Bachelor's degree in Software Engineering, building a strong foundation in data structures, algorithms, databases, computer networking, and system analysis.
                </p>
                <ul className="timeline-bullets">
                  <li>Current Cumulative GPA: 3.0 / 4.0</li>
                  <li>Language Proficiency Certification: IELTS 6.0 (2025)</li>
                  <li>Conducted in-depth research on Software Architecture and Distributed Systems design.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Core systems developed independently, focusing on solving complex backend challenges.</p>

          <div className="projects-grid">
            {projects.map((project, index) => {
              const isOpen = openProjectIndex === index;
              return (
                <div className="project-card" key={index}>
                  <div className="project-img-wrapper">
                    <img src={project.image} alt={project.title} className="project-img" />
                    <div className="project-overlay">
                      {project.beLink && (
                        <a href={project.beLink} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Backend Repository">
                          BE
                        </a>
                      )}
                      {project.feLink && (
                        <a href={project.feLink} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Frontend Repository">
                          FE
                        </a>
                      )}
                      {project.sourceLink && (
                        <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Source Repository">
                          SRC
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{project.period}</span>
                    </div>

                    <div className="project-tags">
                      {project.tags.map((tag, tIndex) => (
                        <span className="project-tag" key={tIndex}>{tag}</span>
                      ))}
                    </div>

                    <p className="project-desc">{project.description}</p>

                    {/* Accordion Toggle */}
                    <button
                      className="tech-details-btn"
                      onClick={() => setOpenProjectIndex(isOpen ? null : index)}
                    >
                      {isOpen ? 'Show Less' : 'Technical Deep Dive'}
                    </button>

                    {/* Expandable Tech Details */}
                    <div className={`tech-details-content ${isOpen ? 'open' : ''}`}>
                      <h4 className="tech-details-title">Challenges & Solutions:</h4>
                      <ul className="tech-details-list">
                        {project.deepDive.map((item, dIndex) => (
                          <li key={dIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact Information</h2>
          <p className="section-subtitle">Looking for a backend engineer or interested in my work? Drop me a message.</p>

          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-method">
                <div className="contact-icon"><MailIcon /></div>
                <div className="contact-method-text">
                  <h4>Email</h4>
                  <p>ptrungduc1011@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon"><PhoneIcon /></div>
                <div className="contact-method-text">
                  <h4>Phone</h4>
                  <p>0329255823</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon"><MapPinIcon /></div>
                <div className="contact-method-text">
                  <h4>Location</h4>
                  <p>Hanoi, Vietnam</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/khongphaiduc" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub"><GithubIcon /></a>
              <a href="https://www.linkedin.com/in/ptrungduc1011/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://www.facebook.com/phamtrungduc1011" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://www.instagram.com/tp_trugduc/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <a href="#home" className="footer-logo">
            PTD<span>.</span>
          </a>
          <p className="footer-text">
            © {new Date().getFullYear()} Pham Trung Duc. All rights reserved.
          </p>
        </div>
      </footer>

      {showCvModal && (
        <div className="cv-modal-overlay" onClick={() => setShowCvModal(false)}>
          <div className="cv-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <h3 className="cv-modal-title">Pham Trung Duc - Curriculum Vitae</h3>
              <div className="cv-modal-actions">
                <a
                  href={cvPdf}
                  download="PhamTrungDuc_Fresher_NET.pdf"
                  className="btn-icon"
                  title="Download CV"
                >
                  <DownloadIcon />
                </a>
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  title="Open in New Tab"
                >
                  <ExternalLinkIcon />
                </a>
                <button
                  className="btn-icon close-btn"
                  onClick={() => setShowCvModal(false)}
                  title="Close"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="cv-modal-body">
              <iframe
                src={`${cvPdf}#toolbar=0`}
                title="Pham Trung Duc CV"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
              <div className="cv-modal-mobile-fallback">
                <p>PDF preview might not load on some mobile devices.</p>
                <a
                  href={cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open CV in New Tab
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
