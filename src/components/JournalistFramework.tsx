'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, HelpCircle, Network, ArrowRight, X, Activity, GitBranch, BrainCircuit } from 'lucide-react';

export default function JournalistFramework() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Determine dynamic background glow based on interaction
  const getBgGlow = () => {
    const target = activeCard || hoveredCard;
    switch (target) {
      case 'context': return 'radial-gradient(circle at center, rgba(79, 70, 229, 0.15) 0%, transparent 70%)'; // Indigo
      case 'why': return 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'; // Emerald
      case 'patterns': return 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)'; // White/Slate
      default: return 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)';
    }
  };

  const getPanelContent = () => {
    switch (activeCard) {
      case 'context':
        return {
          title: "CONTEXT FIRST",
          description: "The Twin doesn't just answer questions; it analyzes the full context of the user's situation before formulating a response, ensuring relevance and accuracy.",
          accent: "text-indigo-400",
          border: "border-indigo-500/30",
          visualizer: (
            <div className="relative w-full h-48 bg-indigo-950/20 rounded-xl overflow-hidden flex items-center justify-center border border-indigo-500/20">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"
              />
              <Activity className="w-12 h-12 text-indigo-400 relative z-10" />
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-indigo-400 rounded-full"
                    style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
                    animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>
          )
        };
      case 'why':
        return {
          title: "ASK WHY",
          description: "The Twin doesn't just copy actions; it reverse-engineers the reasoning behind them, asking targeted questions when expert behavior deviates from the norm.",
          accent: "text-emerald-400",
          border: "border-emerald-500/30",
          visualizer: (
            <div className="relative w-full h-48 bg-emerald-950/20 rounded-xl overflow-hidden flex items-center justify-center border border-emerald-500/20">
              <GitBranch className="w-12 h-12 text-emerald-400 relative z-10" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 border-[1px] border-dashed border-emerald-500/30 rounded-full scale-150"
              />
            </div>
          )
        };
      case 'patterns':
        return {
          title: "FIND PATTERNS",
          description: "By observing thousands of interactions, the Twin identifies implicit operational patterns and standardizes them into reusable knowledge pathways.",
          accent: "text-slate-200",
          border: "border-slate-500/30",
          visualizer: (
            <div className="relative w-full h-48 bg-slate-800/20 rounded-xl overflow-hidden flex items-center justify-center border border-slate-500/20">
              <BrainCircuit className="w-12 h-12 text-slate-300 relative z-10" />
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-1/2"
              />
            </div>
          )
        };
      default:
        return null;
    }
  };

  const panelData = getPanelContent();

  return (
    <section className="py-32 px-6 bg-[#0a0a0b] relative overflow-hidden min-h-screen flex flex-col">
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none transition-colors duration-700 ease-in-out"
        animate={{ background: getBgGlow() }}
      />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex-grow flex flex-col">
        <div className="text-center mb-16 relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 font-[family-name:var(--font-jakarta)]"
          >
            AI Journalist Framework
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 font-medium"
          >
            The twin learns how experts actually think.
          </motion.p>
        </div>

        <div className="relative flex-grow w-full flex items-center justify-center min-h-[500px]">
          
          <AnimatePresence>
            {activeCard && panelData && (
              <motion.div
                initial={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`absolute left-0 lg:left-[5%] w-full max-w-md z-30 pointer-events-auto bg-white/5 backdrop-blur-2xl border ${panelData.border} p-8 rounded-3xl shadow-2xl`}
              >
                <button 
                  onClick={() => setActiveCard(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>
                
                <h3 className={`text-2xl font-bold mb-4 tracking-widest ${panelData.accent}`}>
                  {panelData.title}
                </h3>
                
                {panelData.visualizer}

                <p className="mt-6 text-slate-300 leading-relaxed text-sm">
                  {panelData.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors group">
                  Explore Architecture 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              x: activeCard ? '40%' : '0%',
              rotateY: activeCard ? -10 : 0,
              scale: activeCard ? 0.95 : 1
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-20"
            style={{ perspective: 1200 }}
          >
            <div className={`wallet ${activeCard ? 'wallet-active' : ''}`}>
              <div className="wallet-back" />
              
              {/* Card 1: Context First (Blue) */}
              <div 
                className={`card stripe ${activeCard === 'context' ? 'active-card' : activeCard ? 'inactive-card' : ''}`}
                onClick={() => setActiveCard(activeCard === 'context' ? null : 'context')}
                onMouseEnter={() => setHoveredCard('context')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="scanning-line" />
                <div className="card-inner relative z-10">
                  <div className="card-top">
                    <span className="flex items-center gap-2 font-bold tracking-widest"><Search className="w-4 h-4" /> CONTEXT FIRST</span>
                    <div className="chip" />
                  </div>
                  <div className="card-middle my-3">
                    <p className="text-[11px] leading-relaxed opacity-90 font-medium">Understands situational nuance before generating responses</p>
                  </div>
                  <div className="card-bottom mt-auto">
                    <div className="card-number-wrapper w-full text-right">
                      <span className="hidden-stars text-[16px] tracking-[2px]">**** DATA</span>
                      <span className="card-number hidden text-[14px] tracking-[1px] font-mono">0110 1001 DATA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Ask Why (Green) */}
              <div 
                className={`card wise ${activeCard === 'why' ? 'active-card' : activeCard ? 'inactive-card' : ''}`}
                onClick={() => setActiveCard(activeCard === 'why' ? null : 'why')}
                onMouseEnter={() => setHoveredCard('why')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="scanning-line" />
                <div className="card-inner relative z-10">
                  <div className="card-top">
                    <span className="flex items-center gap-2 font-bold tracking-widest"><HelpCircle className="w-4 h-4" /> ASK WHY</span>
                    <div className="chip" />
                  </div>
                  <div className="card-middle my-3">
                    <p className="text-[11px] leading-relaxed opacity-90 font-medium text-slate-800">Extracts the reasoning behind expert decisions</p>
                  </div>
                  <div className="card-bottom mt-auto">
                    <div className="card-number-wrapper w-full text-right">
                      <span className="hidden-stars text-[16px] tracking-[2px] text-slate-700">**** LOGIC</span>
                      <span className="card-number hidden text-[14px] tracking-[1px] font-mono text-slate-800">1011 0100 LOGIC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Find Patterns (White) */}
              <div 
                className={`card paypal ${activeCard === 'patterns' ? 'active-card' : activeCard ? 'inactive-card' : ''}`}
                onClick={() => setActiveCard(activeCard === 'patterns' ? null : 'patterns')}
                onMouseEnter={() => setHoveredCard('patterns')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="scanning-line" />
                <div className="card-inner relative z-10">
                  <div className="card-top">
                    <span className="flex items-center gap-2 font-bold tracking-widest"><Network className="w-4 h-4 text-indigo-600" /> FIND <b style={{color: '#4f46e5'}}>PATTERNS</b></span>
                    <div className="chip" />
                  </div>
                  <div className="card-middle my-3">
                    <p className="text-[11px] leading-relaxed opacity-90 font-medium text-slate-600">Detects tacit operational behavior over time</p>
                  </div>
                  <div className="card-bottom mt-auto">
                    <div className="card-number-wrapper w-full text-right">
                      <span className="hidden-stars text-[16px] tracking-[2px] text-slate-500">**** SYNC</span>
                      <span className="card-number hidden text-[14px] tracking-[1px] font-mono text-slate-800">1100 1111 SYNC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pocket Front */}
              <div className="pocket">
                <svg className="pocket-svg" viewBox="0 0 320 160" fill="none">
                  <path d="M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 280 25 C 295 25, 300 10, 310 10 C 315 10, 320 10, 320 20 L 320 120 C 320 155, 300 160, 280 160 L 40 160 C 20 160, 0 155, 0 120 Z" fill="#111" />
                  <path d="M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 280 29 C 293 29, 297 16, 305 16 C 308 16, 312 16, 312 22 L 312 120 C 312 150, 295 152, 280 152 L 40 152 C 25 152, 8 152, 8 120 Z" stroke="#333" strokeWidth="1.5" strokeDasharray="6 4" />
                </svg>
                <div className="pocket-content">
                  <div style={{position: 'relative', height: 24, width: '100%'}}>
                    <div className="balance-stars">******</div>
                    <div className="balance-real text-white">AI JOURNALIST</div>
                  </div>
                  <div style={{color: '#666', fontSize: 12, fontWeight: 500}}>
                    Framework Core
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <style>{`
          .wallet {
            position: relative;
            width: 320px;
            height: 230px;
            cursor: pointer;
            perspective: 1000px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            transform-style: preserve-3d;
            transform: rotateX(15deg) rotateY(-10deg);
            transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0% { transform: rotateX(15deg) rotateY(-10deg) translateY(0px); }
            50% { transform: rotateX(15deg) rotateY(-10deg) translateY(-10px); }
            100% { transform: rotateX(15deg) rotateY(-10deg) translateY(0px); }
          }

          /* Stop floating when active so it doesn't wobble while interacting */
          .wallet-active {
            animation: none;
            transform: rotateX(5deg) rotateY(-20deg) !important;
          }

          .wallet:hover:not(.wallet-active) {
            transform: rotateX(5deg) rotateY(-5deg) translateY(-5px);
          }

          .wallet-back {
            position: absolute;
            bottom: 0;
            width: 320px;
            height: 200px;
            background: #0f0f11;
            border-radius: 22px 22px 60px 60px;
            z-index: 5;
            transform: translateZ(-20px);
            box-shadow: inset 0 25px 35px rgba(0, 0, 0, 0.8), inset 0 5px 15px rgba(0, 0, 0, 0.9);
          }

          .card {
            position: absolute;
            width: 300px;
            height: 160px;
            left: 10px;
            border-radius: 16px;
            padding: 18px;
            color: white;
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 -4px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            overflow: hidden;
          }
          
          /* Scanning Line Micro-interaction */
          .scanning-line {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: rgba(255,255,255,0.8);
            box-shadow: 0 0 15px 2px rgba(255,255,255,0.5);
            opacity: 0;
            transform: translateY(-10px);
            z-index: 5;
          }
          .card:hover .scanning-line, .active-card .scanning-line {
            animation: scan 2s linear infinite;
          }
          @keyframes scan {
            0% { transform: translateY(-10px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(160px); opacity: 0; }
          }

          .card-inner {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
          }
          .card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .chip {
            width: 32px;
            height: 24px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .card-bottom {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }

          /* Card Types & Base Z-Indexes */
          .stripe {
            background: linear-gradient(135deg, #6366f1, #4f46e5);
            bottom: 90px;
            z-index: 10;
            transform: translateZ(-10px);
          }
          .wise {
            background: linear-gradient(135deg, #10b981, #059669);
            bottom: 65px;
            z-index: 20;
            transform: translateZ(0px);
          }
          .paypal {
            background: linear-gradient(135deg, #ffffff, #f8fafc);
            color: #1e293b;
            bottom: 40px;
            z-index: 30;
            transform: translateZ(10px);
          }
          .paypal .chip { background: rgba(0, 0, 0, 0.05); }

          /* Hover Effects (Only when no card is active) */
          .wallet:not(.wallet-active):hover .stripe {
            transform: translateY(-85px) rotate(-3deg) translateZ(-10px);
          }
          .wallet:not(.wallet-active):hover .wise {
            transform: translateY(-50px) rotate(2deg) translateZ(0px);
          }
          .wallet:not(.wallet-active):hover .paypal {
            transform: translateY(-10px) translateZ(10px);
          }

          /* Individual Card Hovers */
          .wallet:not(.wallet-active) .stripe:hover {
            transform: translateY(-70px) scale(1.05) rotate(0) translateZ(20px);
            z-index: 100;
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
          }
          .wallet:not(.wallet-active) .wise:hover {
            transform: translateY(-60px) scale(1.05) rotate(0) translateZ(20px);
            z-index: 100;
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
          }
          .wallet:not(.wallet-active) .paypal:hover {
            transform: translateY(-30px) scale(1.05) rotate(0) translateZ(20px);
            z-index: 100;
            box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
          }

          /* Active Card State */
          .active-card {
            transform: translateY(-90px) scale(1.1) translateZ(40px) !important;
            z-index: 100 !important;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5) !important;
          }
          
          /* Inactive Card State */
          .inactive-card {
            filter: blur(4px);
            opacity: 0.4;
            transform: translateY(20px) scale(0.95) translateZ(-20px) !important;
            pointer-events: none;
          }

          .card:hover .hidden-stars, .active-card .hidden-stars { display: none; }
          .card:hover .card-number, .active-card .card-number { display: block; }

          /* Pocket */
          .pocket {
            position: absolute;
            bottom: 0;
            width: 320px;
            height: 160px;
            z-index: 40;
            transform: translateZ(20px);
            filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.6));
            pointer-events: none;
            transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform-origin: bottom;
          }
          
          /* Open pocket slightly on hover or active */
          .wallet:hover .pocket, .wallet-active .pocket {
            transform: translateZ(30px) rotateX(-5deg);
          }

          .pocket-content {
            position: absolute;
            top: 45px;
            width: 100%;
            text-align: center;
            z-index: 50;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          
          .balance-stars {
            color: #444;
            font-size: 24px;
            letter-spacing: 4px;
            transition: 0.3s;
          }
          .balance-real {
            font-size: 20px;
            font-weight: 600;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 10px);
            transition: 0.3s;
            white-space: nowrap;
          }
          
          .wallet:hover .balance-stars, .wallet-active .balance-stars { opacity: 0; }
          .wallet:hover .balance-real, .wallet-active .balance-real {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        `}</style>
      </div>
    </section>
  );
}
