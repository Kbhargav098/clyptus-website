import React, { useState } from 'react';
import { Sparkles, Calculator, ArrowRight, DollarSign, Clock, TrendingUp } from 'lucide-react';

export default function InteractiveRoiSection({ activeService, onOpenContact }) {
  const [selectedStream, setSelectedStream] = useState(activeService || 'sap');
  const [volume, setVolume] = useState(50); // slider value

  // ROI Math
  const getRoiMetrics = () => {
    if (selectedStream === 'sap') {
      const annualSavings = Math.round(volume * 18000);
      const deploymentWeeks = Math.max(4, Math.round(16 - volume * 0.1));
      const roiPercentage = Math.round(220 + volume * 1.5);
      return {
        label1: "Est. ERP Revenue Leakage Prevented",
        val1: `$${(annualSavings / 1000).toFixed(0)}k / year`,
        label2: "Implementation Acceleration",
        val2: `${deploymentWeeks} Weeks`,
        label3: "Projected 3-Year ROI",
        val3: `+${roiPercentage}%`,
        sliderLabel: "User Count / Module Scale",
        unit: "Users"
      };
    } else if (selectedStream === 'recruitment') {
      const hires = Math.round(volume / 5);
      const costSaved = Math.round(hires * 8500);
      const daysSaved = Math.round(35);
      return {
        label1: "Talent Acquisition Cost Savings",
        val1: `$${(costSaved / 1000).toFixed(0)}k Total`,
        label2: "Average Days Saved Per Hire",
        val2: `${daysSaved} Days`,
        label3: "Time-to-Placement Guarantee",
        val3: "12 Days SLA",
        sliderLabel: "Annual Hiring Target Scale",
        unit: "Positions"
      };
    } else {
      const monthlyDocs = Math.round(volume * 500);
      const hoursSaved = Math.round(monthlyDocs * 0.15);
      const dollarVal = Math.round(hoursSaved * 45);
      return {
        label1: "Est. Manual Operational Savings",
        val1: `$${(dollarVal / 1000).toFixed(0)}k / year`,
        label2: "Monthly Automated Document Volume",
        val2: `${monthlyDocs.toLocaleString()} Docs`,
        label3: "Extraction Accuracy SLA",
        val3: "99.4% Precision",
        sliderLabel: "Monthly Workflow Document Scale",
        unit: "x100 Docs"
      };
    }
  };

  const metrics = getRoiMetrics();

  return (
    <section className="py-24 bg-slate-900/60 relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Calculator size={14} />
              <span>INTERACTIVE VALUE ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Calculate Your Enterprise Impact with Clyptus
            </h2>
            <p className="text-sm text-slate-400">
              Select your service requirement and scale the slider to project immediate business outcomes.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="flex items-center justify-center gap-2 max-w-md mx-auto mb-10 p-1.5 bg-slate-950 rounded-2xl border border-slate-800">
            <button
              onClick={() => setSelectedStream('sap')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedStream === 'sap' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              SAP ERP
            </button>
            <button
              onClick={() => setSelectedStream('recruitment')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedStream === 'recruitment' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              IT Recruitment
            </button>
            <button
              onClick={() => setSelectedStream('ai')}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedStream === 'ai' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Automation
            </button>
          </div>

          {/* Interactive Range Slider */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-3">
              <span>{metrics.sliderLabel}</span>
              <span className="text-blue-400 font-extrabold text-sm">{volume} {metrics.unit}</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Result Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 w-fit mx-auto mb-3">
                <DollarSign size={20} />
              </div>
              <div className="text-xs text-slate-400 mb-1">{metrics.label1}</div>
              <div className="text-2xl font-extrabold text-white">{metrics.val1}</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 w-fit mx-auto mb-3">
                <Clock size={20} />
              </div>
              <div className="text-xs text-slate-400 mb-1">{metrics.label2}</div>
              <div className="text-2xl font-extrabold text-white">{metrics.val2}</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 w-fit mx-auto mb-3">
                <TrendingUp size={20} />
              </div>
              <div className="text-xs text-slate-400 mb-1">{metrics.label3}</div>
              <div className="text-2xl font-extrabold text-white">{metrics.val3}</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all inline-flex items-center gap-2"
            >
              <span>Request Full ROI Financial Proposal</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
