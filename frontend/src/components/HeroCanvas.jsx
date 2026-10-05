import React, { useRef, useEffect } from 'react';
import { SERVICES, CLYPTUS_BRAND } from '../data/clyptusData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Users, Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap, Globe2 } from 'lucide-react';

export default function HeroCanvas({ activeService, setActiveService, onOpenContact }) {
  const canvasRef = useRef(null);
  const activeServiceObj = SERVICES.find(s => s.id === activeService);

  // Dynamic colors based on active service
  const getParticleColor = () => {
    if (activeService === 'sap') return { r: 6, g: 182, b: 212 }; // Cyan
    if (activeService === 'recruitment') return { r: 16, g: 185, b: 129 }; // Emerald
    if (activeService === 'ai') return { r: 168, g: 85, b: 247 }; // Purple
    return { r: 59, g: 130, b: 246 }; // Blue
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes
    const particleCount = 45;
    const color = getParticleColor();
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.5 + 1.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 130) * 0.25;
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeService]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20 bg-slate-950">
      
      {/* 3D Particle Canvas Background */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full opacity-60" />
        {/* Soft Radial Gradient Overlays */}
        <div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
          style={{ backgroundColor: activeServiceObj ? activeServiceObj.accentGlow : 'rgba(59, 130, 246, 0.3)' }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
          style={{ backgroundColor: activeServiceObj ? activeServiceObj.accentGlow : 'rgba(99, 102, 241, 0.3)' }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Dynamic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-900/90 border border-slate-700/80 text-blue-400 mb-8 shadow-xl backdrop-blur-md">
          <Sparkles size={14} className="text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>CLYPTUS DYNAMIC ENTERPRISE PLATFORM</span>
        </div>

        {/* Dynamic Headline Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService || 'default'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {activeService === 'sap' && (
                <>
                  Accelerate Enterprise Growth with <span className="gradient-text-sap">Intelligent SAP Solutions</span>
                </>
              )}
              {activeService === 'recruitment' && (
                <>
                  Build High-Performing Teams with <span className="gradient-text-recruitment">Specialized IT Recruitment</span>
                </>
              )}
              {activeService === 'ai' && (
                <>
                  Transform Operations with <span className="gradient-text-ai">Agentic AI & Document Intelligence</span>
                </>
              )}
              {!activeService && (
                <>
                  Driving Enterprise Innovation with <span className="gradient-text-sap">SAP</span>, <span className="gradient-text-recruitment">IT Recruitment</span> & <span className="gradient-text-ai">AI</span>
                </>
              )}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
              {activeService ? (
                activeServiceObj.heroSubheading
              ) : (
                "Clyptus empowers global enterprises with end-to-end SAP ERP migrations, high-impact IT talent acquisition, and agentic AI automation solutions designed to optimize operational efficiency."
              )}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Interactive 3 Pillar Selector Options */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {SERVICES.map((srv) => {
            const isActive = activeService === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveService(isActive ? null : srv.id)}
                className={`relative p-4 rounded-2xl border text-left transition-all duration-300 group ${
                  isActive
                    ? 'glass-panel border-blue-500/80 shadow-2xl scale-105'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white text-[10px] font-bold">
                    ✓
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-slate-800 border border-slate-700 group-hover:scale-110 transition-transform ${
                    srv.id === 'sap' ? 'text-cyan-400' : srv.id === 'recruitment' ? 'text-emerald-400' : 'text-purple-400'
                  }`}>
                    {srv.id === 'sap' && <Layers size={20} />}
                    {srv.id === 'recruitment' && <Users size={20} />}
                    {srv.id === 'ai' && <Cpu size={20} />}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base leading-tight">
                      {srv.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {isActive ? 'Active Mode' : 'Click to Focus'}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-3 group"
          >
            <span>Schedule Enterprise Strategy Call</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Case Studies</span>
          </a>
        </div>

        {/* Live Metrics Ticker Bar */}
        <div className="glass-panel rounded-2xl p-6 border border-slate-800/80 max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {(activeServiceObj ? activeServiceObj.stats : [
              { value: "150+", label: "SAP Projects Delivered" },
              { value: "1,200+", label: "IT Placements Worldwide" },
              { value: "99.4%", label: "AI Extraction Precision" },
              { value: "98%", label: "Client SLA Satisfaction" }
            ]).map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  activeService === 'sap' ? 'text-cyan-400' :
                  activeService === 'recruitment' ? 'text-emerald-400' :
                  activeService === 'ai' ? 'text-purple-400' : 'text-blue-400'
                }`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
