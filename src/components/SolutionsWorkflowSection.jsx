import React, { useState } from 'react';
import { SOLUTIONS_WORKFLOW, SERVICES } from '../data/clyptusData';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Layers, Users, Cpu, ShieldCheck } from 'lucide-react';

export default function SolutionsWorkflowSection({ activeService, setActiveService, onOpenContact }) {
  const currentService = activeService || 'sap';
  const workflowObj = SOLUTIONS_WORKFLOW.find(w => w.serviceId === currentService) || SOLUTIONS_WORKFLOW[0];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="solutions" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <Sparkles size={14} />
            <span>METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How Clyptus Delivers <span className={
              currentService === 'sap' ? 'gradient-text-sap' :
              currentService === 'recruitment' ? 'gradient-text-recruitment' : 'gradient-text-ai'
            }>
              {currentService === 'sap' ? 'SAP Excellence' :
               currentService === 'recruitment' ? 'Talent Acquisition' : 'AI Automation'}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A battle-tested 4-stage deployment framework designed for speed, risk mitigation, and enterprise compliance.
          </p>
        </div>

        {/* Dynamic Workflow Timeline */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 shadow-2xl mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {workflowObj.steps.map((stepItem, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer relative ${
                    isActive
                      ? 'bg-slate-800/90 border-blue-500 shadow-xl scale-105'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                      isActive
                        ? currentService === 'sap' ? 'bg-cyan-500 text-slate-950' : currentService === 'recruitment' ? 'bg-emerald-500 text-slate-950' : 'bg-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      STAGE {stepItem.step}
                    </span>
                    {isActive && <CheckCircle2 size={16} className="text-blue-400" />}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Callout Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                Ready to Implement {currentService.toUpperCase()} in Your Enterprise?
              </h4>
              <p className="text-xs text-slate-400">
                Book a 30-minute discovery workshop with our solution architects.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <span>Start Technical Discovery</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
