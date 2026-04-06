import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Globe, MapPinned, Code, Smartphone, Database, Cloud, Shield,
  ChevronRight, Star, Users, Award, TrendingUp, Mail, Phone,
  ArrowRight, CheckCircle, Play, ExternalLink, Zap, Layers, Briefcase, BarChart3
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

  const navLinks = ['Home', 'Services', 'About', 'Portfolio', 'Contact'];

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
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link}
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
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link}
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
              className="flex items-center gap-8 mt-12"
            >
              {[
                { value: '8+', label: 'Years Experience' },
                { value: '1500+', label: 'Projects Done' },
                { value: '900+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
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
                      <Code size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Web Development</div>
                      <div className="text-sm text-gray-400">Modern & Responsive</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                      >
                        <CheckCircle size={16} className="text-primary-400" />
                        <span className="text-sm text-gray-300">Feature {i}</span>
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
                    <div className="text-sm font-semibold">Revenue Growth</div>
                    <div className="text-xs text-green-400">+127%</div>
                  </div>
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
      description: 'Custom web applications built with modern frameworks for optimal performance and user experience.',
      features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across devices.',
      features: ['iOS & Android', 'React Native', 'Flutter Apps'],
    },
    {
      icon: MapPinned,
      title: 'GIS Solutions',
      description: 'Geographic Information Systems integration for location-based analytics and mapping services.',
      features: ['Mapping Services', 'Spatial Analysis', 'GeoData Integration'],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Robust database architecture and data pipeline solutions for scalable business intelligence.',
      features: ['Cloud Databases', 'Data Migration', 'Analytics Setup'],
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure management and migration services for enterprise scalability.',
      features: ['AWS & Azure', 'DevOps', 'Serverless Architecture'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
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
            Comprehensive IT and Geo Infotech solutions tailored to accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={28} className="text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-accent-400" />
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
                  Send Message <ArrowRight size={18} />
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
    { name: 'Instagram', link: 'https://www.instagram.com/elegancegeoinfotech/' },
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
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-sm font-bold hover:bg-primary-500/20 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                      {link}
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
