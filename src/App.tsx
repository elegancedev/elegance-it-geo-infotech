import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Globe, MapPinned, Code2, Smartphone, Database, Cloud, Shield,
  ChevronRight, Star, Users, Award, TrendingUp, Mail, Phone, MapPin,
  ArrowRight, CheckCircle, Play, ExternalLink, Zap, Layers, Briefcase, BarChart3,
  Palette, Heart, Clock, Target, Rocket, Sparkles, Cpu, Lock, Server,
  Monitor, Terminal, Bug, FileCode, GitBranch, Box, Wifi, HardDrive,
  Printer, Headphones, MessageSquare, Send, Instagram, ArrowUp, Building
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <img src="/Logo New.png" alt="Elegance IT & Geo Infotech" className="h-12 w-auto" />
    <div className="hidden sm:block">
      <span className="text-lg font-bold gradient-text">Elegance IT &</span>
      <br />
      <span className="text-sm text-gray-400">Geo Infotech</span>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: Rocket },
    { name: 'Services', icon: Layers },
    { name: 'About', icon: Users },
    { name: 'Portfolio', icon: Briefcase },
    { name: 'Contact', icon: MessageSquare },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
              >
                <link.icon size={18} className="text-primary-400" />
                {link.name}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold text-sm"
            >
              Get Started
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.name.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2 flex items-center gap-2"
                >
                  <link.icon size={18} className="text-primary-400" />
                  {link.name}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary-500/30 rounded-full animate-spin-slow" />
      <div className="absolute bottom-40 left-20 w-20 h-20 border border-accent-500/30 rounded-lg animate-spin-slow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Zap size={16} className="text-primary-400" />
              <span className="text-sm text-gray-300">Innovating Digital Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Transform Your
              <br />
              <span className="gradient-text">Digital Vision</span>
              <br />
              Into Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              We blend cutting-edge IT solutions with precision Geo Infotech services to deliver comprehensive digital experiences that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold flex items-center gap-2"
              >
                Start Your Project <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full text-white font-semibold flex items-center gap-2"
              >
                <Play size={18} /> Watch Our Work
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-12"
            >
              {[
                { value: '8+', label: 'Years', icon: Award },
                { value: '1500+', label: 'Projects', icon: Briefcase },
                { value: '900+', label: 'Clients', icon: Users },
                { value: '$30M+', label: 'Revenue', icon: TrendingUp },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                  <stat.icon size={18} className="text-primary-400" />
                  <div>
                    <div className="text-lg font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full blur-3xl" />
              
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-3/4 h-3/4 glass rounded-3xl p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">IT & GIS Solutions</div>
                      <div className="text-sm text-gray-400">Complete Digital Services</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Globe, text: 'Web Development' },
                      { icon: Smartphone, text: 'Mobile Apps' },
                      { icon: MapPinned, text: 'GIS Mapping' },
                      { icon: Cloud, text: 'Cloud Solutions' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                      >
                        <item.icon size={16} className="text-primary-400" />
                        <span className="text-sm text-gray-300">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-0 glass rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Client Success</div>
                    <div className="text-xs text-green-400">+127% Growth</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 right-10 glass rounded-xl p-3"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-xs font-medium">24/7 Support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build modern, responsive websites and web applications that drive engagement and conversions.',
      features: ['Custom Websites', 'E-commerce Solutions', 'Progressive Web Apps', 'WordPress & CMS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications for iOS and Android that users love.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPinned,
      title: 'GIS & Mapping',
      description: 'Leverage geographic data with advanced mapping and spatial analysis solutions.',
      features: ['Interactive Maps', 'Spatial Analysis', 'GeoData Integration', 'Location Services'],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visual designs that capture your brand essence and captivate your audience.',
      features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Design'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Organize, secure, and optimize your data for actionable insights and growth.',
      features: ['Database Design', 'Data Migration', 'Cloud Storage', 'Analytics & Reporting'],
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with reliable and cost-effective cloud services.',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps & CI/CD', 'Server Management'],
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom software solutions built to solve your unique business challenges.',
      features: ['Custom Software', 'API Development', 'Third-party Integrations', 'Legacy Modernization'],
      color: 'from-rose-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT & Geo Infotech solutions - From web development to GIS mapping, we deliver excellence in every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 group hover:border-primary-500/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color || 'from-primary-500/20 to-accent-500/20'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-primary-400" />
                    {feature}
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mt-4 pt-4 border-t border-white/10"
              >
                <a href="#contact" className="text-primary-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={14} />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const stats = [
    { icon: Award, value: '8+', label: 'Years of Excellence', color: 'from-amber-400 to-orange-500' },
    { icon: Users, value: '900+', label: 'Happy Clients', color: 'from-blue-400 to-cyan-500' },
    { icon: Briefcase, value: '1500+', label: 'Projects Completed', color: 'from-emerald-400 to-teal-500' },
    { icon: BarChart3, value: '$30M+', label: 'Client Revenue Generated', color: 'from-purple-400 to-pink-500' },
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Seasoned professionals with deep expertise in IT and geospatial technologies.',
    },
    {
      title: 'Innovation First',
      description: 'We stay ahead of trends to deliver cutting-edge solutions.',
    },
    {
      title: 'Client Focused',
      description: 'Your success is our priority. We build lasting partnerships.',
    },
    {
      title: 'Quality Assured',
      description: 'Rigorous testing and quality standards in every project.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Driving Innovation in <span className="gradient-text">IT & GIS</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Elegance IT & Geo Infotech is a premier technology solutions provider, combining the best of IT development with precision geospatial services. Our mission is to empower businesses through innovative digital solutions.
            </p>
            <p className="text-gray-400 mb-8">
              With over 8 years of experience, we've helped hundreds of businesses transform their operations through custom software, mobile applications, cloud solutions, and advanced mapping services.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/5"
                >
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl" />
            
            <div className="relative glass rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white/5"
                  >
                    <div className={`w-12 h-12 rounded-xl mx-auto mb-4 bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <stat.icon size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-black flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  "Elegance IT transformed our business with their exceptional web development services. Highly recommended!"
                </p>
                <p className="text-xs text-gray-500 mt-2">- CEO, Tech Startup</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution with AI-powered recommendations',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'City Mapping Portal',
      category: 'GIS Solutions',
      description: 'Interactive mapping system for urban planning department',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'HIPAA-compliant telemedicine application',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Services',
      description: 'Enterprise-wide cloud infrastructure transformation',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with virtual tours',
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Logistics Dashboard',
      category: 'Data Analytics',
      description: 'Real-time fleet tracking and analytics system',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="w-full h-full flex items-center justify-center">
                  <Layers size={48} className="text-white/50 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-primary-400 transition-colors">
                  View Project <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-full text-white font-semibold inline-flex items-center gap-2 hover:border-primary-500/50 transition-all"
          >
            View All Projects <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'elegancegeoinfotech06@gmail.com',
      link: 'mailto:elegancegeoinfotech06@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 63691 26125',
      link: 'tel:+916369126125',
    },
    {
      icon: MapPinned,
      title: 'Visit Us',
      value: 'Thippampatti, Dharmapuri, Tamilnadu, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Let's Build <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to transform your business with cutting-edge technology? Contact us today and let's discuss your project.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:border-primary-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.title}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerLinks = {
    Services: ['Web Development', 'Mobile Apps', 'GIS Solutions', 'Cloud Services'],
    Company: ['About Us', 'Careers', 'Blog', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  const socialLinks = [
    { name: 'Instagram', link: 'https://www.instagram.com/elegancegeoinfotech/', icon: Instagram },
  ];

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo />
            <p className="text-gray-400 text-sm mt-4 mb-6">
              Transforming businesses through innovative IT and Geo Infotech solutions since 2016.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                {title === 'Services' && <Layers size={18} className="text-primary-400" />}
                {title === 'Company' && <Building size={18} className="text-primary-400" />}
                {title === 'Legal' && <Lock size={18} className="text-primary-400" />}
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center gap-2">
                      <ChevronRight size={14} /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Elegance IT & Geo Infotech. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Crafted with passion for innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
