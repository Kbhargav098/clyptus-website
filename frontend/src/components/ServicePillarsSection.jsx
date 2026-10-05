import React from 'react';
import { SERVICES } from '../data/clyptusData';
import { motion } from 'framer-motion';
import { Layers, Users, Cpu, ArrowUpRight, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

export default function ServicePillarsSection({ activeService, setActiveService }) {
  return (
    <section id="services" className="py-24 bg-slate-900/60 relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <Sparkles size={14} />
            <span>CORE ENTERPRISE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Three Powerhouses. <span className="gradient-text-sap">One Clyptus Platform.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Select any service pillar below to experience how the website content dynamically adapts to showcase specialized projects, industries, workflows, and expertise.
          </p>
        </div>

        {/* 3 Core Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const isSelected = activeService === srv.id;
            return (
              <motion.div
                key={srv.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? `glass-panel border-2 border-blue-500 shadow-2xl ${
                        srv.id === 'sap' ? 'glow-sap' : srv.id === 'recruitment' ? 'glow-recruitment' : 'glow-ai'
                      }`
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                }`}
              >
                {/* Active Indicator Ribbon */}
                {isSelected && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-lg">
                    <CheckCircle2 size={12} /> Active Experience
                  </div>
                )}

                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-slate-800 border border-slate-700 ${
                      srv.id === 'sap' ? 'text-cyan-400' : srv.id === 'recruitment' ? 'text-emerald-400' : 'text-purple-400'
                    }`}>
                      {srv.id === 'sap' && <Layers size={32} />}
                      {srv.id === 'recruitment' && <Users size={32} />}
                      {srv.id === 'ai' && <Cpu size={32} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {srv.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Capabilities:
                    </div>
                    {srv.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${
                          srv.id === 'sap' ? 'text-cyan-400' : srv.id === 'recruitment' ? 'text-emerald-400' : 'text-purple-400'
                        }`} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => setActiveService(isSelected ? null : srv.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span>{isSelected ? `Currently Viewing ${srv.title}` : `Switch to ${srv.title} Experience`}</span>
                  <ChevronRight size={16} />
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
