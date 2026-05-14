'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useRef } from 'react';
import { Database, Brain, Zap, Send, CheckCircle2, Clock, Terminal } from 'lucide-react';

export default function WatchItWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    { label: "REQUEST", icon: <Send className="w-5 h-5" />, color: "text-slate-400", bg: "bg-slate-50" },
    { label: "MEMORY", icon: <Database className="w-5 h-5" />, color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "DECISION", icon: <Brain className="w-5 h-5" />, color: "text-violet-500", bg: "bg-violet-50" },
    { label: "EXECUTION", icon: <Zap className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-50" }
  ];

  const logs = [
    "Client response generated",
    "Meeting scheduled",
    "Research completed",
    "Escalated to you",
    "Workflow optimized",
    "Data sync successful"
  ];

  const [visibleLogs, setVisibleLogs] = useState(logs.slice(0, 4));

  // Sync activeStep with scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 to 0-3 indices
    const step = Math.min(Math.floor(latest * 4), 3);
    if (step !== activeStep) {
      setActiveStep(step);
      // Shuffle logs to show "activity" happening in response to scroll
      const shuffled = [...logs].sort(() => Math.random() - 0.5).slice(0, 4);
      setVisibleLogs(shuffled);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <section className="sticky top-0 h-screen flex items-center justify-center py-12 px-6 overflow-hidden bg-white">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 font-[family-name:var(--font-jakarta)]"
            >
              Watch it work.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Logic Spine */}
            <div className="relative flex flex-col items-center lg:items-start space-y-12">
              <div className="absolute left-1/2 lg:left-6 top-0 bottom-0 w-px bg-slate-100 -z-10" />
              
              {steps.map((step, i) => (
                <motion.div 
                  key={step.label}
                  animate={{ 
                    opacity: activeStep === i ? 1 : 0.3,
                    scale: activeStep === i ? 1.05 : 1,
                    x: activeStep === i ? 10 : 0
                  }}
                  className="flex items-center gap-6 relative group"
                >
                  <div className={`w-12 h-12 rounded-full ${activeStep === i ? step.bg : 'bg-white'} border border-slate-100 flex items-center justify-center shadow-sm transition-colors duration-500`}>
                    <div className={activeStep === i ? step.color : 'text-slate-300'}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-2xl font-black italic tracking-tighter transition-colors duration-500 ${activeStep === i ? 'text-slate-900' : 'text-slate-300'} font-[family-name:var(--font-jakarta)]`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                      Status: {activeStep === i ? 'Active' : 'Idle'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Live Panels */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 backdrop-blur-sm shadow-2xl shadow-indigo-500/5"
            >
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-slate-400" />
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Live Panels</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {visibleLogs.map((log, i) => (
                    <motion.div 
                      key={log}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm flex items-center justify-between group hover:border-indigo-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-bold text-slate-700 font-[family-name:var(--font-jakarta)]">{log}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-slate-300" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase">Just Now</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex gap-4">
                  <div className="h-1 w-8 bg-slate-200 rounded-full" />
                  <div className="h-1 w-12 bg-slate-100 rounded-full" />
                </div>
                <span className="text-[9px] font-bold text-slate-300 tracking-[0.2em] uppercase">Neural Log System v4.0</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
