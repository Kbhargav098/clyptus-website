import React from 'react';
import { CLYPTUS_BRAND } from '../data/clyptusData';
import { Sparkles, Layers, Users, Cpu, ArrowUp, PhoneCall, Mail, MapPin } from 'lucide-react';

export default function Footer({ setActiveService }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-2xl tracking-wider text-white">
                CLYPTUS<span className="text-blue-500">.</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Clyptus Software Solutions provides enterprise-grade SAP consulting & BRIM monetization, specialized IT talent acquisition, and agentic AI document automation.
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-semibold w-fit text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Global Ops Active: Hyderabad Hub</span>
            </div>
          </div>

          {/* Service Streams */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Service Pillars
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => { setActiveService('sap'); window.location.href = '#services'; }}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Layers size={13} className="text-cyan-400" /> SAP S/4HANA & BRIM
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveService('recruitment'); window.location.href = '#services'; }}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Users size={13} className="text-emerald-400" /> IT Talent Acquisition & ATS
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveService('ai'); window.location.href = '#services'; }}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Cpu size={13} className="text-purple-400" /> Enterprise Agentic AI & RAG
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Enterprise Projects</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries Served</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Execution Workflow</a></li>
              <li><a href="#blogs" className="hover:text-white transition-colors">Insights & Articles</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Quick Specs */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Contact Specs
            </h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a href="mailto:info@clyptus.com" className="hover:text-white">info@clyptus.com</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={14} className="text-blue-400 shrink-0" />
                <span>+91 40 4000 0000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Clyptus Software Solutions Pvt Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">HR Policies</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
