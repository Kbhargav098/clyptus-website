import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, User, Calendar, Tag, ArrowRight } from 'lucide-react';

export default function BlogModal({ blog, onClose, onOpenContact }) {
  if (!blog) return null;

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
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Featured Header Image */}
          <div className="relative h-60 rounded-2xl overflow-hidden mb-6 -mx-2 sm:-mx-4 -mt-2">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                blog.serviceId === 'sap' ? 'bg-cyan-500 text-slate-950' :
                blog.serviceId === 'recruitment' ? 'bg-emerald-500 text-slate-950' :
                'bg-purple-500 text-white'
              }`}>
                {blog.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
            <span className="flex items-center gap-1"><Calendar size={13} /> {blog.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {blog.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><User size={13} /> {blog.author}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
            {blog.title}
          </h2>

          <div className="prose prose-invert max-w-none text-sm text-slate-300 leading-relaxed mb-8 space-y-4">
            <p className="text-base text-slate-200 font-medium italic border-l-2 border-blue-500 pl-4 py-1">
              "{blog.excerpt}"
            </p>
            <p>
              {blog.content}
            </p>
            <p>
              Clyptus continues to engineer cutting-edge enterprise methodologies that bridge business requirements with modern architecture. Contact our enterprise strategy team to discover how these insights apply to your organization's roadmap.
            </p>
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close Article
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Discuss Strategy with Author</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
