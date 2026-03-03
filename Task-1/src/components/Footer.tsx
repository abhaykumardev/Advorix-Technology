import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-xl flex items-center justify-center neon-glow-cyan">
                <span className="text-slate-950 font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                NEXUS
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Empowering businesses with innovative digital solutions. We craft experiences that drive growth and inspire change.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan hover:text-slate-950 transition-all border border-white/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-neon-cyan transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-neon-cyan transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-neon-cyan transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-neon-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                <span>123 Innovation Way, Tech City, TC 54321</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-neon-cyan shrink-0" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-neon-cyan shrink-0" />
                <span>hello@nexus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-600">
            &copy; {currentYear} Nexus Business Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
