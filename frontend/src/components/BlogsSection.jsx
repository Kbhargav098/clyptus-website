import React, { useState } from 'react';
import { BLOGS } from '../data/clyptusData';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import BlogModal from './BlogModal';

export default function BlogsSection({ activeService, onOpenContact }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const currentService = activeService || 'all';

  const filteredBlogs = currentService === 'all'
    ? BLOGS
    : BLOGS.filter(b => b.serviceId === currentService);

  return (
    <section id="blogs" className="py-24 bg-slate-900/60 relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <Sparkles size={14} />
            <span>THOUGHT LEADERSHIP & INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Latest Industry <span className={
              currentService === 'sap' ? 'gradient-text-sap' :
              currentService === 'recruitment' ? 'gradient-text-recruitment' :
              currentService === 'ai' ? 'gradient-text-ai' : 'gradient-text-sap'
            }>
              {currentService === 'sap' ? 'SAP Insights' :
               currentService === 'recruitment' ? 'Talent Acquisition Insights' :
               currentService === 'ai' ? 'AI & Automation Research' : 'Enterprise Insights'}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Deep-dive articles written by our principal solution architects and talent strategists.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        blog.serviceId === 'sap' ? 'bg-cyan-500 text-slate-950' :
                        blog.serviceId === 'recruitment' ? 'bg-emerald-500 text-slate-950' :
                        'bg-purple-500 text-white'
                      }`}>
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-white transition-colors">
                    <span>Read Full Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      <BlogModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
