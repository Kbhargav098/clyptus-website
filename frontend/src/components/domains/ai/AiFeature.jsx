import React, { useState } from 'react';
import { Cpu, FileText, Send, CheckCircle2, Sparkles, Database } from 'lucide-react';

/**
 * AI & AUTOMATION COMPONENT
 * Maintained by: Friend 2 (AI Lead)
 * Purpose: Private RAG Query Simulator & Document OCR Extraction
 */
export default function AiFeature() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimulateQuery = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setResponse({
        answer: `Clyptus Agentic AI analyzed your enterprise knowledge base. For query "${query}", standard procedure specifies zero-downtime database migration using vector-indexed SAP BTP endpoints.`,
        confidence: "99.4%",
        source: "Internal SOP Doc #482-B & Enterprise RAG Engine"
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 my-8 bg-slate-900/90 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2">
            <Cpu size={14} />
            <span>CLYPTUS AGENTIC AI & PRIVATE RAG COPILOT</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            Enterprise Private Knowledge Query Engine
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Simulate how internal SOPs, contracts, and SAP schemas are queried with zero data leakage.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
          <Database size={14} /> On-Premise Vector RAG
        </div>
      </div>

      <form onSubmit={handleSimulateQuery} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask AI Copilot (e.g. 'How does Clyptus handle S/4HANA migration compliance?')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0"
          >
            <span>{loading ? 'Processing AI...' : 'Ask RAG Copilot'}</span>
            <Send size={14} />
          </button>
        </div>
      </form>

      {response && (
        <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/40 mb-4 animate-fadeIn">
          <div className="flex items-center justify-between text-[11px] font-bold text-purple-400 mb-2">
            <span>AI Citation: {response.source}</span>
            <span>Accuracy: {response.confidence}</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {response.answer}
          </p>
        </div>
      )}

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span>Includes Intelligent OCR & Invoice Parsing Pipelines</span>
        <a href="#contact" className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all flex items-center gap-1.5">
          <span>Explore AI Models</span>
        </a>
      </div>
    </div>
  );
}
