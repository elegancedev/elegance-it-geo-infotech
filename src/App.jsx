import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Globe, MapPinned, Code2, Smartphone, Database, Cloud, Shield,
  ChevronRight, Star, Users, Award, TrendingUp, Mail, Phone, MapPin,
  ArrowRight, CheckCircle, Play, ExternalLink, Zap, Layers, Briefcase, BarChart3,
  Palette, Heart, Clock, Target, Rocket, Sparkles, Cpu, Lock, Server,
  Monitor, Terminal, Bug, FileCode, GitBranch, Box, Wifi, HardDrive,
  Printer, Headphones, MessageSquare, Send, Instagram, ArrowUp, Building,
  MessageCircle, Plus, Minus, HelpCircle, Linkedin, Twitter, Quote,
  GraduationCap, Award as Award2, BadgeCheck, ShieldCheck, Droplet, Hexagon
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
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary-500/30 to-transparent rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent-500/30 to-transparent rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-[180px]" />
        
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary-500/30 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-20 h-20 border border-accent-500/30 rounded-lg animate-spin-slow hidden lg:block" />
      <div className="absolute top-40 left-1/3 w-4 h-4 bg-primary-500/50 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent-500/50 rounded-full animate-pulse hidden lg:block" />
      
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
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'LiDAR Scanning & Processing',
      category: 'LiDAR Engineering',
      description: 'High-precision 3D point cloud acquisition and processing for terrain modeling',
      color: 'from-green-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      features: ['Terrestrial LiDAR', 'Airborne LiDAR', 'Mobile Mapping', 'Point Cloud Processing'],
      details: 'Our LiDAR engineering services deliver centimeter-level accuracy for infrastructure planning, topographic mapping, and asset management. We process millions of data points to create detailed 3D models for construction, mining, and environmental studies.',
    },
    {
      title: 'BIM Modeling Services',
      category: 'BIM & Scan-to-BIM',
      description: 'As-built BIM models from laser scans for construction and renovation projects',
      color: 'from-blue-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      features: ['Architectural BIM', 'Structural BIM', 'MEP Modeling', 'Scan-to-BIM Conversion'],
      details: 'Transform reality into digital information with our BIM services. From existing conditions documentation to full construction-ready models, we deliver LOD 350-500 models compatible with all major BIM platforms.',
    },
    {
      title: 'SEO & Digital Marketing',
      category: 'Digital Marketing',
      description: 'Data-driven digital marketing strategies to boost your online presence and conversions',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      features: ['Search Engine Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'],
      details: 'Grow your business with our comprehensive digital marketing services. We combine technical SEO, compelling content, and targeted advertising to drive organic traffic and maximize your ROI.',
    },
    {
      title: 'UI/UX Design',
      category: 'UI & UX Services',
      description: 'User-centered design that creates intuitive and engaging digital experiences',
      color: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      details: 'Create digital products users love with our UI/UX design services. From wireframes to pixel-perfect interfaces, we ensure every interaction is intuitive, accessible, and visually stunning.',
    },
    {
      title: 'Web Development',
      category: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      color: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      features: ['React & Next.js', 'E-commerce', 'Progressive Web Apps', 'CMS Integration'],
      details: 'Build powerful web applications that scale with your business. We create fast, SEO-friendly websites with beautiful interfaces and seamless user experiences.',
    },
    {
      title: 'Mobile App Development',
      category: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      color: 'from-violet-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      details: 'Bring your ideas to mobile with our app development services. We build feature-rich applications with intuitive interfaces that users will love.',
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <Briefcase size={18} /> Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across LiDAR, BIM, Digital Marketing, UI/UX, and more.
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
                onClick={() => setSelectedProject(project)}
                className="group glass rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers size={40} className="text-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-primary-400 transition-colors">
                    View Details <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 sm:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-70`} />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.details}</p>
                
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary-400" />
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {selectedProject.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-primary-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Your Project <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
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

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/916369126125"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-all"
    >
      <MessageCircle size={28} className="text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </motion.a>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: 'What services does Elegance IT & Geo Infotech offer?',
      answer: 'We offer a comprehensive range of IT services including Web Development, Mobile App Development, GIS & Mapping Solutions, Graphic Design, Data Management, Cloud Solutions, Software Development, and Cybersecurity services.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on complexity. A simple website can take 2-4 weeks, while complex applications may take 2-6 months. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes! We offer comprehensive post-launch support including bug fixes, updates, security patches, and optional maintenance packages to keep your project running smoothly.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including React, Next.js, React Native, Flutter, Python, Node.js, AWS, Azure, and various GIS platforms like QGIS and ArcGIS.',
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! We can take over existing projects, perform code audits, optimize performance, add new features, or help with migration to modern technologies.',
    },
    {
      question: 'How much does a typical project cost?',
      answer: 'Project costs depend on scope, complexity, and requirements. We provide detailed quotes after understanding your needs. Contact us for a free consultation and estimate.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <HelpCircle size={18} /> FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={20} className="text-primary-400 flex-shrink-0" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-400 text-sm">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedStatsSection = () => {
  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience', icon: Award },
    { value: 1500, suffix: '+', label: 'Projects Completed', icon: Briefcase },
    { value: 900, suffix: '+', label: 'Happy Clients', icon: Users },
    { value: 30, prefix: '$', suffix: 'M+', label: 'Revenue Generated', icon: TrendingUp },
  ];

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                <stat.icon size={28} className="text-primary-400" />
              </div>
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ value, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-3xl sm:text-4xl font-bold gradient-text">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const ClientLogosSection = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'GeoSystems', logo: 'GS' },
    { name: 'BuildRight', logo: 'BR' },
    { name: 'DataPro', logo: 'DP' },
    { name: 'CloudBase', logo: 'CB' },
    { name: 'MapMaster', logo: 'MM' },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Trusted By</span>
          <h3 className="text-xl font-semibold mt-2 text-gray-400">Our Trusted Partners & Clients</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl px-8 py-4 flex items-center gap-3 hover:border-primary-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-sm">
                {client.logo}
              </div>
              <span className="font-medium text-gray-300">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: 'Arun Kumar',
      role: 'Founder & CEO',
      expertise: 'GIS & LiDAR Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Priya Sharma',
      role: 'Technical Lead',
      expertise: 'Web & Mobile Development',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Rahul Verma',
      role: 'BIM Specialist',
      expertise: 'Scan-to-BIM & CAD',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Sneha Reddy',
      role: 'Design Head',
      expertise: 'UI/UX & Digital Marketing',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
    },
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Users size={18} /> Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our talented team of professionals brings together expertise in GIS, LiDAR, BIM, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary-500 transition-colors">
                      <Linkedin size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary-500 transition-colors">
                      <Twitter size={14} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-primary-400 text-sm">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2 flex items-center gap-1">
                  <Droplet size={12} /> {member.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Vikram Singh',
      role: 'Project Manager',
      company: 'BuildCorp India',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      text: 'Elegance IT delivered our BIM project with exceptional accuracy. Their LiDAR scanning and modeling expertise saved us weeks of manual work.',
      rating: 5,
    },
    {
      name: 'Meera Krishnan',
      role: 'Director',
      company: 'GeoVision Labs',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      text: 'Their GIS solutions transformed how we visualize and analyze spatial data. Professional, responsive, and technically excellent.',
      rating: 5,
    },
    {
      name: 'Anand Patel',
      role: 'CEO',
      company: 'TechStart Solutions',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
      text: 'The web application they built for us exceeded expectations. Modern design, fast performance, and excellent post-launch support.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Quote size={18} /> Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote size={32} className="text-primary-500/30 absolute top-4 right-4" />
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-primary-400">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  const certs = [
    { name: 'ISO 9001:2015', icon: BadgeCheck, desc: 'Quality Management' },
    { name: 'Google Partner', icon: Hexagon, desc: 'Digital Marketing' },
    { name: 'AWS Certified', icon: Cloud, desc: 'Cloud Services' },
    { name: 'GIS Professional', icon: MapPinned, desc: 'GIS Solutions' },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 glass rounded-full px-6 py-3"
            >
              <cert.icon size={20} className="text-primary-400" />
              <div>
                <span className="font-medium text-sm">{cert.name}</span>
                <span className="text-gray-400 text-xs block">{cert.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      <AnimatedStatsSection />
      <ServicesSection />
      <FAQSection />
      <ClientLogosSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <CertificationsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
