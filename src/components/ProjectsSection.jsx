import React, { useState } from 'react';
import { PROJECTS, SERVICES } from '../data/clyptusData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Building2, Tag, Layers, Users, Cpu } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ activeService, setActiveService, onOpenContact }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterTab, setFilterTab] = useState('all');

  // If activeService is explicitly set, use that, otherwise use filterTab
  const currentFilter = activeService || filterTab;

  const filteredProjects = currentFilter === 'all' || !currentFilter
    ? PROJECTS
    : PROJECTS.filter(p => p.serviceId === currentFilter);

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Sparkles size={14} />
              <span>PROVEN CLIENT DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured <span className={
                activeService === 'sap' ? 'gradient-text-sap' :
                activeService === 'recruitment' ? 'gradient-text-recruitment' :
                activeService === 'ai' ? 'gradient-text-ai' : 'gradient-text-sap'
              }>
                {activeService === 'sap' ? 'SAP Projects' :
                 activeService === 'recruitment' ? 'IT Recruitment Case Studies' :
                 activeService === 'ai' ? 'AI Implementations' : 'Enterprise Projects'}
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1.5 bg-slate-900 rounded-2xl border border-slate-800">
            <button
              onClick={() => {
                setActiveService(null);
                setFilterTab('all');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                currentFilter === 'all' || !currentFilter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveService('sap')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentFilter === 'sap'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers size={13} /> SAP
            </button>
            <button
              onClick={() => setActiveService('recruitment')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentFilter === 'recruitment'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users size={13} /> Recruitment
            </button>
            <button
              onClick={() => setActiveService('ai')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentFilter === 'ai'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu size={13} /> AI
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFilter || 'all'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      proj.serviceId === 'sap' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' :
                      proj.serviceId === 'recruitment' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                      'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                    }`}>
                      {proj.serviceId.toUpperCase()}
                    </span>

                    <span className="text-xs font-bold text-blue-400 flex items-center gap-1">
                      {proj.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                    {proj.title}
                  </h3>

                  <div className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-1.5">
                    <Building2 size={12} /> {proj.client} • <span className="text-slate-500">{proj.industry}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {proj.summary}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.techStack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-medium border border-slate-800">
                        {tech}
                      </span>
                    ))}
                    {proj.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-500 text-[10px] font-medium">
                        +{proj.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-white transition-colors">
                    <span>View Project Breakdown</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
