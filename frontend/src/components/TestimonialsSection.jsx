import React from 'react';
import { TESTIMONIALS } from '../data/clyptusData';
import { Sparkles, Star, Quote, Building2 } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <Sparkles size={14} />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Trusted by Enterprise <span className="gradient-text-sap">Leaders Worldwide</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Hear directly from Executives, CIOs, and VPs who leverage Clyptus for SAP, IT Recruitment, and AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative"
            >
              <Quote size={40} className="text-blue-500/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, rIdx) => (
                    <Star key={rIdx} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6 relative z-10">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {t.name}
                  </h3>
                  <div className="text-xs text-slate-400">
                    {t.role}, <strong className="text-slate-300 font-semibold">{t.company}</strong>
                  </div>
                  <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    t.service === 'SAP' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' :
                    t.service === 'IT Recruitment' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                    'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                  }`}>
                    {t.service} Client
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
