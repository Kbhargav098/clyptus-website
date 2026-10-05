import React from 'react';
import { SERVICES } from '../data/clyptusData';
import { Layers, Users, Cpu, ArrowRight, ChevronRight } from 'lucide-react';

export default function ServicePillarsSection({ onSelectPillar, onOpenContact }) {
  return (
    <section id="services" className="py-20 bg-slate-900/60 relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title & Subheading */}
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Driving Enterprise Innovation with <span className="gradient-text-sap">SAP</span>, <span className="gradient-text-recruitment">IT Recruitment</span> & <span className="gradient-text-ai">AI</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Clyptus empowers global enterprises with end-to-end SAP ERP migrations, high-impact IT talent acquisition, and agentic AI automation solutions designed to optimize operational efficiency.
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onSelectPillar && onSelectPillar(srv.id)}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 transition-all cursor-pointer text-left group flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-slate-800 border border-slate-700 group-hover:scale-110 transition-transform ${
                  srv.id === 'sap' ? 'text-cyan-400' : srv.id === 'recruitment' ? 'text-emerald-400' : 'text-purple-400'
                }`}>
                  {srv.id === 'sap' && <Layers size={22} />}
                  {srv.id === 'recruitment' && <Users size={22} />}
                  {srv.id === 'ai' && <Cpu size={22} />}
                </div>
                <h3 className="font-extrabold text-white text-xl">
                  {srv.title}
                </h3>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-white transition-colors pt-2 border-t border-slate-800/80">
                <span>Explore Pillar</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Schedule Enterprise Strategy Call</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Case Studies</span>
          </a>
        </div>

        {/* 4 Stat Metrics */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800/80 max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {[
              { value: "150+", label: "SAP Projects Delivered" },
              { value: "1,200+", label: "IT Placements Worldwide" },
              { value: "99.4%", label: "AI Extraction Precision" },
              { value: "98%", label: "Client SLA Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-400">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
