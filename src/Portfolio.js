import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Database, TrendingUp, Palette, Mail, Phone, MapPin, Github, Linkedin, Twitter, ChevronRight, Star, Users, Briefcase, Award } from 'lucide-react';

// Import individual images
import abdullahImg from './assets/Abdullah.png';
import haiderImg from './assets/haider.png';
import usmanImg from './assets/usman.jpg';
import hammadImg from './assets/hammad.jpg';

const TechPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    team: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null)
  };

  // Create individual refs for each team member
  const teamMemberRefs = {
    member1: useRef(null),
    member2: useRef(null),
    member3: useRef(null),
    member4: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          } else {
            // Remove from visible sections when not intersecting
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

    // Observe main sections
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    // Observe team member sections
    Object.values(teamMemberRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "End-to-end web and mobile applications using cutting-edge technologies like React, Node.js, Python, and cloud platforms."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights using AI/ML, statistical analysis, and advanced visualization tools."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies including SEO, social media marketing, content creation, and performance analytics."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality for exceptional user experiences."
    }
  ];

  const team = [
    {
      name: "Abdullah Arshad",
      role: "Senior Full Stack Developer",
      image: abdullahImg,
      bio: "Expert in React, Node.js, Python, and cloud technologies. Abdullah has 6+ years of experience building scalable applications for startups and enterprises. Specializes in microservices architecture, DevOps practices, and modern JavaScript frameworks.",
      skills: ["React", "Node.js", "Python", "AWS", "Docker"]
    },
    {
      name: "Haider Ali",
      role: "Data Analyst & AI Specialist",
      image: haiderImg,
      bio: "Data scientist with expertise in machine learning, statistical analysis, and business intelligence. Haider transforms complex datasets into strategic insights using Python, R, and advanced analytics tools. Experienced in predictive modeling and AI implementation.",
      skills: ["Python", "Machine Learning", "SQL", "Tableau", "TensorFlow"]
    },
    {
      name: "Usman Tahir",
      role: "Digital Marketing Expert",
      image: usmanImg,
      bio: "Marketing strategist specializing in social media marketing, SEO optimization, content strategy, and paid advertising campaigns. Usman has helped 50+ businesses increase their online presence and ROI through data-driven marketing approaches and creative campaigns.",
      skills: ["Social Media", "SEO/SEM", "Content Strategy", "Google Ads", "Analytics"]
    },
    {
      name: "Muhammad Hammad",
      role: "UI/UX Designer",
      image: hammadImg,
      bio: "Creative designer with a passion for user-centered design and modern aesthetics. Hammad creates intuitive interfaces and engaging user experiences using Figma, Adobe Creative Suite, and prototyping tools. Expert in design systems and accessibility standards.",
      skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard"
    },
    {
      title: "Data Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      description: "Real-time analytics platform with interactive visualizations and reporting"
    },
    {
      title: "Mobile Banking App",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      description: "Secure mobile banking application with biometric authentication"
    },
    {
      title: "AI-Powered CRM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "Customer relationship management system with AI-driven insights"
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
              TechSolutions
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'team', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-green-300 transition-colors capitalize font-mono border border-transparent hover:border-green-500/30 px-3 py-1 rounded"
                >
                  [{item === 'about' ? 'About Us' : item}]
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
              {['home', 'about', 'services', 'team', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 hover:text-cyan-400 transition-colors capitalize"
                >
                  {item === 'about' ? 'About Us' : item}
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
              We Build Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              That Empower Businesses to Thrive in the Digital Age
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get in Touch <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Explore Our Work
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
              About Us
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-8">
                We are a cutting-edge software house dedicated to transforming businesses through innovative digital solutions. 
                Our team of expert developers, designers, and strategists work collaboratively to deliver exceptional results 
                that drive growth and success.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-400">Pushing boundaries with latest technologies</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <Award className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quality</h3>
                  <p className="text-gray-400">Delivering excellence in every project</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                  <p className="text-gray-400">Working closely with our clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sectionRefs.services} id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('services', 'right')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                  <div className="text-cyan-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Header */}
      <section ref={sectionRefs.team} id="team" className="py-10 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('team', 'left')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Team
            </h2>
          </div>
        </div>
      </section>

      {/* Individual Team Member Sections */}
      {team.map((member, index) => (
        <section
          key={index}
          ref={teamMemberRefs[`member${index + 1}`]}
          id={`member${index + 1}`}
          className={`py-16 ${index % 2 === 0 ? 'bg-black/20' : 'bg-black/40'}`}
        >
          <div className="container mx-auto px-6">
            <div className={getAnimationClass(`member${index + 1}`, index % 2 === 0 ? 'right' : 'left')}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image - Alternates between left (order-1) and right (order-2) */}
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className="aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Details - Alternates between right (order-2) and left (order-1) */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {member.name}
                      </h3>
                      <p className="text-xl text-cyan-400 font-medium mb-4">{member.role}</p>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {member.bio}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-white">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-3">
                        {member.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Portfolio Section */}
      <section ref={sectionRefs.portfolio} id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('portfolio', 'right')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Portfolio
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
      <section ref={sectionRefs.contact} id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={getAnimationClass('contact', 'left')}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-400">hello@techsolutions.com</p>
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
                      <p className="text-gray-400">Jhelum, Punjab, Pakistan</p>
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
              <p className="text-gray-400">© 2025 TechSolutions. All rights reserved.</p>
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

export default TechPortfolio;
