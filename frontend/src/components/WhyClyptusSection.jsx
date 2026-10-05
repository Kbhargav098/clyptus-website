import React from 'react';
import { WHY_CLYPTUS } from '../data/clyptusData';
import { ShieldCheck, Zap, Globe2, Target, Sparkles, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Globe2: Globe2,
  Target: Target
};

export default function WhyClyptusSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Sparkles size={14} />
              <span>THE CLYPTUS ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Why Global Enterprises Choose <span className="gradient-text-sap">Clyptus</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              We combine deep vertical technical competency with hyper-scaled delivery. Whether executing multi-million dollar SAP migrations, assembling specialized engineering teams, or deploying custom AI LLM RAG pipelines—Clyptus delivers guaranteed outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CLYPTUS.map((item, idx) => {
                const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 w-fit mb-3">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Tech Stack Box */}
          <div className="relative">
            <div className="glass-panel rounded-3xl p-8 border border-slate-800 shadow-2xl relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase text-slate-400">Enterprise Stack Integration</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Certified Compliance
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-sm">
                      SAP
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">SAP S/4HANA & BRIM</div>
                      <div className="text-xs text-slate-400">Subscription & ERP Monopolization</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-300 font-semibold bg-slate-800 px-3 py-1 rounded-lg">99.9% Uptime</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm">
                      ATS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Clyptus ATS & Recruitment</div>
                      <div className="text-xs text-slate-400">AI-Deduplicated Candidate Sourcing</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-300 font-semibold bg-slate-800 px-3 py-1 rounded-lg">&lt; 14 Day Placement</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center font-bold text-purple-400 text-sm">
                      AI
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Agentic AI & OCR RAG</div>
                      <div className="text-xs text-slate-400">Document Extraction & Machine Learning</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-300 font-semibold bg-slate-800 px-3 py-1 rounded-lg">99.4% Accuracy</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
