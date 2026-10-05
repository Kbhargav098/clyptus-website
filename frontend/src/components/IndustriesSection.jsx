import React from 'react';
import { INDUSTRIES } from '../data/clyptusData';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Factory, ShoppingBag, Radio, HeartPulse, Code2, Landmark, Building2, ShieldAlert, Truck, Bot, FileText, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Factory: Factory,
  ShoppingBag: ShoppingBag,
  Radio: Radio,
  HeartPulse: HeartPulse,
  Code2: Code2,
  Landmark: Landmark,
  Building2: Building2,
  Sparkles: Sparkles,
  ShieldAlert: ShieldAlert,
  Truck: Truck,
  Bot: Bot,
  FileText: FileText
};

export default function IndustriesSection({ activeService, onOpenContact }) {
  const currentService = activeService || 'sap';

  const filteredIndustries = INDUSTRIES.filter(ind => ind.serviceId === currentService);

  return (
    <section id="industries" className="py-24 bg-slate-900/40 relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <Sparkles size={14} />
            <span>VERTICAL DOMAIN EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Industries Empowered by <span className={
              currentService === 'sap' ? 'gradient-text-sap' :
              currentService === 'recruitment' ? 'gradient-text-recruitment' : 'gradient-text-ai'
            }>
              {currentService === 'sap' ? 'Clyptus SAP Solutions' :
               currentService === 'recruitment' ? 'Clyptus Talent Pipelines' : 'Clyptus AI Engines'}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Tailored enterprise configurations, compliance workflows, and domain experts dedicated to your industry.
          </p>
        </div>

        {/* Dynamic Industry Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredIndustries.map((ind, idx) => {
              const IconComp = ICON_MAP[ind.icon] || Building2;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="glass-panel rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-2xl bg-slate-800 border border-slate-700 group-hover:scale-110 transition-transform ${
                        currentService === 'sap' ? 'text-cyan-400' :
                        currentService === 'recruitment' ? 'text-emerald-400' : 'text-purple-400'
                      }`}>
                        <IconComp size={24} />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                        {ind.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                      {ind.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div>
                    <div className="space-y-2 pt-4 border-t border-slate-800">
                      {ind.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 size={13} className={`shrink-0 ${
                            currentService === 'sap' ? 'text-cyan-400' :
                            currentService === 'recruitment' ? 'text-emerald-400' : 'text-purple-400'
                          }`} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
          >
            <span>Request Sector Case Study & Specs</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
