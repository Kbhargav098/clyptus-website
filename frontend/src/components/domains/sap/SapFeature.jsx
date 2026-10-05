import React, { useState } from 'react';
import { Layers, Calculator, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

/**
 * SAP ENTERPRISE SOLUTIONS COMPONENT
 * Maintained by: Friend 1 (SAP Lead)
 * Purpose: BRIM subscription monetization engine simulation & S/4HANA clean core audit
 */
export default function SapFeature() {
  const [transactions, setTransactions] = useState(2500000);

  const estimatedBilling = Math.round(transactions * 0.45);
  const throughputMs = 1.1;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 my-8 bg-slate-900/90 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
            <Layers size={14} />
            <span>SAP BRIM & S/4HANA ENGINE</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            SAP BRIM Subscription Billing Throughput Estimator
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Simulate real-time high-volume usage rating and partner revenue recognition.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          <ShieldCheck size={14} /> Clean Core Certified
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
          <span>Monthly Subscription Micro-Transactions</span>
          <span className="text-cyan-400 font-extrabold">{transactions.toLocaleString()} Events / Mo</span>
        </div>
        <input
          type="range"
          min="500000"
          max="10000000"
          step="500000"
          value={transactions}
          onChange={(e) => setTransactions(Number(e.target.value))}
          className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
          <div className="text-xs text-slate-400">Est. Processed Revenue</div>
          <div className="text-xl font-extrabold text-cyan-400">${(estimatedBilling / 1000000).toFixed(2)}M / Mo</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
          <div className="text-xs text-slate-400">Rating Speed</div>
          <div className="text-xl font-extrabold text-white">{throughputMs} ms / Txn</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
          <div className="text-xs text-slate-400">Compliance Standard</div>
          <div className="text-xl font-extrabold text-emerald-400">IFRS 15 Ready</div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span>Includes Convergent Charging, Invoicing & Fiori Dashboard</span>
        <a href="#contact" className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-1.5">
          <span>Request SAP Blueprint</span> <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
