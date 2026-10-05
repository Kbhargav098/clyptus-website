import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactSection({ activeService, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceStream: activeService || 'sap',
    projectBudget: '$25k - $50k',
    message: ''
  });

  useEffect(() => {
    if (activeService) {
      setFormData(prev => ({ ...prev, serviceStream: activeService }));
    }
  }, [activeService]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Sparkles size={14} />
              <span>START A CONVERSATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Let's Build Your Enterprise <span className="gradient-text-sap">Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Whether you need SAP migration experts, high-impact tech recruitment, or custom AI automation, Clyptus is ready to partner with your team.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Headquarters & Tech Operations</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Clyptus Software Solutions Pvt Ltd, Hyderabad, Telangana, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Enterprise Inquiry Email</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    info@clyptus.com | sales@clyptus.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Global Client Hotline</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    +91 40 4000 0000 | 24/7 Enterprise Response
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Quote Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A Clyptus enterprise solution lead for <strong className="text-blue-400 uppercase">{formData.serviceStream}</strong> will get back to you within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Select Desired Service Pillar:
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceStream: 'sap' })}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        formData.serviceStream === 'sap'
                          ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500 shadow-lg'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      SAP Solutions
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceStream: 'recruitment' })}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        formData.serviceStream === 'recruitment'
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500 shadow-lg'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      IT Recruitment
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceStream: 'ai' })}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        formData.serviceStream === 'ai'
                          ? 'bg-purple-500/20 text-purple-400 border-purple-500 shadow-lg'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      AI Automation
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Enterprises"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Project Details & Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your current system setup, goals, or hiring needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Request Enterprise Proposal</span>
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
