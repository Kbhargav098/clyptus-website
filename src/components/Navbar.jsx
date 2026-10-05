import React, { useState, useEffect } from 'react';
import { SERVICES } from '../data/clyptusData';
import { Layers, Users, Cpu, Sparkles, ChevronDown, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Industries', href: '#industries' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Insights', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handlePillarClick = (href) => {
    setServiceDropdownOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-300">
              <strong className="text-white font-semibold">Clyptus Platform:</strong> Delivering Next-Gen SAP, IT Recruitment & AI Automation
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-slate-400">
            <span>Global Operations: Hyderabad | North America | EMEA</span>
            <a href="tel:+91400000000" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <PhoneCall size={12} /> Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel shadow-2xl py-3' : 'bg-slate-900/80 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Clyptus Brand Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-blue-500/50 transition-all shadow-md">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-wider text-white">
                  CLYPTUS<span className="text-blue-500">.</span>
                </span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border bg-blue-500/10 text-blue-400 border-blue-500/30">
              <Sparkles size={12} className="animate-pulse" />
              <span>Enterprise Hub</span>
            </div>
          </a>

          {/* Nav Items - Desktop */}
          <nav className="hidden xl:flex items-center space-x-1 bg-slate-950/40 p-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Service Dropdown & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            
            <div className="relative">
              <button
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-800 transition-all"
              >
                <Sparkles size={14} className="text-blue-400" />
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${serviceDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {serviceDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-64 glass-panel rounded-2xl p-2 shadow-2xl border border-slate-700/80 z-50"
                  >
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-800">
                      Explore Clyptus Pillars
                    </div>

                    {SERVICES.map((srv) => (
                      <button
                        key={srv.id}
                        onClick={() => handlePillarClick('#services')}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800/60 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          {srv.id === 'sap' && <Layers size={15} className="text-cyan-400" />}
                          {srv.id === 'recruitment' && <Users size={15} className="text-emerald-400" />}
                          {srv.id === 'ai' && <Cpu size={15} className="text-purple-400" />}
                          <div className="text-left">
                            <div className="font-semibold text-white">{srv.title}</div>
                            <div className="text-[10px] text-slate-400">{srv.subtitle}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Action Button */}
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
            >
              <span>Get Consultation</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-xl"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass-panel border-b border-slate-800 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded-lg"
                    >
                      {link.name}
                    </a>
                  ))}
                  <button
                    onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
                    className="w-full mt-2 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 flex items-center justify-center gap-2"
                  >
                    <span>Get Consultation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
