import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Database, Palette, Mail, Phone, MapPin, Github, Linkedin, Twitter, ChevronRight, Star, Briefcase, Award } from 'lucide-react';

// Import Abdullah's image
import abdullahImg from './assets/Abdullah.JPG';
import fitlyImg from './assets/Fitly.png';
const PersonalPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          } else {
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications using React, Node.js, Express, and MongoDB."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Designing and deploying cloud-native solutions with AWS, Docker, and Kubernetes."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Implementation",
      description: "Creating responsive, user-friendly interfaces with modern JavaScript frameworks."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "Developed a full-stack e-commerce platform with React, Node.js, and Stripe integration."
    },
    {
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
      description: "Built a collaborative task management tool with real-time updates using WebSocket."
    },
    {
      title: "Portfolio Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "Created a responsive dashboard for tracking project metrics using React and Chart.js."
    },
   {
      title: "Fitly - Fitness & Meal Planning Web App",
      image: fitlyImg,
      description: "Developed a full-stack web application for fitness tracking and personalized meal planning using React, Node.js, and a MongoDB backend, with features for workout logging and nutrition analysis."
    }
  ];

  const getAnimationClass = (sectionId, direction = 'right') => {
    const isVisible = visibleSections.has(sectionId);
    const slideDirection = direction === 'right' ? 'translate-x-full' : '-translate-x-full';
    return `transform transition-all duration-1000 ease-out ${
      isVisible ? 'translate-x-0 opacity-100' : `${slideDirection} opacity-0`
    }`;
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Abdullah Arshad
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-green-300 transition-colors capitalize font-mono border border-transparent hover:border-green-500/30 px-3 py-1 rounded"
                >
                  [{item === 'about' ? 'About Me' : item}]
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 hover:text-cyan-400 transition-colors capitalize"
                >
                  {item === 'about' ? 'About Me' : item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section ref={sectionRefs.home} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={getAnimationClass('home', 'right')}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abdullah Arshad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Senior Full Stack Developer | Building Scalable Web Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Connect with Me <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('about', 'left')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <img 
                    src={abdullahImg} 
                    alt="Abdullah Arshad"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  I'm Abdullah Arshad, a Senior Full Stack Developer with over 6 years of experience building scalable, high-performance web applications. My expertise spans modern JavaScript frameworks, cloud architecture, and DevOps practices. I'm passionate about crafting clean, efficient code and delivering solutions that make an impact.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-gray-400">6+ years in full-stack development</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <Award className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Projects</h3>
                    <p className="text-gray-400">50+ successful projects delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('skills', 'right')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                  <div className="text-cyan-400 mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold mb-4 text-white">Technologies</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "MongoDB", "TypeScript", "GraphQL"].map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('projects', 'left')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('contact', 'right')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Collaborate</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">abdullah@developer.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-400">+92 300 1234567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-medium">Location</p>
                    <p className="text-gray-400">Mirpur AJK </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    rows="5" 
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Abdullah Arshad. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalPortfolio;