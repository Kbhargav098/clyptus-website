import React, { useState } from 'react';
import { Users, Search, CheckCircle2, ShieldCheck, Sparkles, UserPlus, Clock } from 'lucide-react';

/**
 * IT RECRUITMENT & ATS FEATURE COMPONENT
 * Maintained by: User (IT Recruitment Lead)
 * Purpose: Live candidate search simulation, ATS pipeline metrics, talent requisition widget
 */
export default function RecruitmentFeature() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const candidates = [
    { id: 1, name: "Arjun Sharma", role: "Senior SAP ABAP / S/4HANA Architect", exp: "9 Yrs", rating: "99%", status: "Pre-Vetted", roleType: "sap" },
    { id: 2, name: "Sarah Jenkins", role: "Principal Cloud DevOps Engineer (AWS/K8s)", exp: "7 Yrs", rating: "98%", status: "Pre-Vetted", roleType: "tech" },
    { id: 3, name: "Vikram Mehta", role: "Lead Full Stack Engineer (React/Go)", exp: "6 Yrs", rating: "97%", status: "Pre-Vetted", roleType: "tech" },
    { id: 4, name: "Elena Rostova", role: "SAP BRIM & Billing Specialist", exp: "8 Yrs", rating: "99%", status: "Pre-Vetted", roleType: "sap" }
  ];

  const filteredCandidates = candidates.filter(c => 
    (selectedRole === 'all' || c.roleType === selectedRole) &&
    (c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.role.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 my-8 bg-slate-900/90 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <Users size={14} />
            <span>CLYPTUS AI-POWERED ATS PIPELINE</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            Pre-Vetted Tech Talent & Candidate Pool
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Search our active pool of certified SAP architects, senior engineers, and cloud leads.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedRole('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedRole === 'all' ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Candidates
          </button>
          <button
            onClick={() => setSelectedRole('sap')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedRole === 'sap' ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            SAP Specialists
          </button>
          <button
            onClick={() => setSelectedRole('tech')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedRole === 'tech' ? 'bg-emerald-500 text-slate-950 shadow-lg' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            SaaS & Cloud Engineers
          </button>
        </div>
      </div>

      {/* Candidate Search Input */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-3.5 text-slate-500" />
        <input
          type="text"
          placeholder="Filter by skill, role, or candidate name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
        />
      </div>

      {/* Candidate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCandidates.map((cand) => (
          <div key={cand.id} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                {cand.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  {cand.name}
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {cand.status}
                  </span>
                </div>
                <div className="text-xs text-slate-400">{cand.role}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Exp: {cand.exp} • Tech Fit: {cand.rating}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold"><Clock size={14} /> 12-Day Avg SLA</span>
          <span className="flex items-center gap-1 text-slate-300"><ShieldCheck size={14} /> 90-Day Guarantee</span>
        </div>
        <a href="#contact" className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5">
          <UserPlus size={14} /> Request Dedicated Talent Pipeline
        </a>
      </div>
    </div>
  );
}
