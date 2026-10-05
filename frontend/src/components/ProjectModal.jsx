import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Building2, Tag, Layers, Users, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              project.serviceId === 'sap' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' :
              project.serviceId === 'recruitment' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
              'bg-purple-500/10 text-purple-400 border border-purple-500/30'
            }`}>
              {project.serviceId === 'sap' ? 'SAP Case Study' : project.serviceId === 'recruitment' ? 'Recruitment Case Study' : 'AI Case Study'}
            </span>
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
              <Building2 size={12} /> {project.client}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
            {project.title}
          </h2>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Impact Milestone</div>
              <div className="text-xl font-extrabold text-blue-400">{project.metric}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">Target Industry</div>
              <div className="text-xs font-semibold text-slate-200">{project.industry}</div>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-300 mb-8">
            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                Project Overview
              </h3>
              <p className="leading-relaxed text-slate-300">
                {project.details}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                Key Enterprise Outcomes Achieved
              </h3>
              <div className="space-y-2">
                {project.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                <Tag size={12} /> Technology Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close Breakdown
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Build Similar Solution</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
