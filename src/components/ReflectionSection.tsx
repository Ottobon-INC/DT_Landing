'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Cpu, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

export default function ReflectionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [coords, setCoords] = useState<{
    steps: {x: number, y: number}[],
    core: { left: {x: number, y: number}, right: {x: number, y: number} },
    cards: {x: number, y: number}[]
  } | null>(null);

  const steps = [
    { name: "Client Questions", color: "#64748b" },
    { name: "Analysis", color: "#6366f1" },
    { name: "Decision", color: "#8b5cf6" },
    { name: "Execution", color: "#06b6d4" }
  ];
  
  const activityCards = [
    { label: "Knowledge Retrieved", status: "success", color: "#6366F1" },
    { label: "Logic Verified", status: "success", color: "#8B5CF6" },
    { label: "Action Approved", status: "success", color: "#10B981" },
    { label: "Human Escalation Required", status: "warning", color: "#F59E0B" }
  ];

  const updateCoords = () => {
    if (!containerRef.current || !coreRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const coreRect = coreRef.current.getBoundingClientRect();
    
    const coreLeft = {
      x: coreRect.left - containerRect.left,
      y: coreRect.top + coreRect.height / 2 - containerRect.top
    };

    const coreRight = {
      x: coreRect.right - containerRect.left,
      y: coreRect.top + coreRect.height / 2 - containerRect.top
    };

    const stepCoords = stepRefs.current.map(ref => {
      if (!ref) return null;
      const rect = ref.getBoundingClientRect();
      return {
        x: rect.right - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top
      };
    }).filter((c): c is {x: number, y: number} => c !== null);

    const cardCoords = cardRefs.current.map(ref => {
      if (!ref) return null;
      const rect = ref.getBoundingClientRect();
      return {
        x: rect.left - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top
      };
    }).filter((c): c is {x: number, y: number} => c !== null);

    setCoords({ steps: stepCoords, core: { left: coreLeft, right: coreRight }, cards: cardCoords });
  };

  useLayoutEffect(() => {
    updateCoords();
    const timers = [
      setTimeout(updateCoords, 100),
      setTimeout(updateCoords, 1000)
    ];
    window.addEventListener('resize', updateCoords);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', updateCoords);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Editorial Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* SVG Layer for Lines */}
      {coords && (
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Steps to Core */}
            {coords.steps.map((start, i) => {
              const color = steps[i].color;
              // Draw line from right edge of step to left edge of core
              const midX = start.x + (coords.core.left.x - start.x) / 2;
              const path = `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${coords.core.left.y} L ${coords.core.left.x} ${coords.core.left.y}`;
              return (
                <g key={`step-${i}`}>
                  <path d={path} fill="none" stroke={`${color}20`} strokeWidth="1.5" />
                  <motion.path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ 
                      pathLength: [0, 0.2, 0.2, 0],
                      pathOffset: [0, 0, 1, 1],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      delay: i * 0.4 
                    }}
                    filter="url(#glow)"
                  />
                </g>
              );
            })}

            {/* Core to Cards */}
            {coords.cards.map((end, i) => {
              const color = activityCards[i].color;
              // Draw line from right edge of core to left edge of card
              const midX = coords.core.right.x + (end.x - coords.core.right.x) / 2;
              const path = `M ${coords.core.right.x} ${coords.core.right.y} L ${midX} ${coords.core.right.y} L ${midX} ${end.y} L ${end.x} ${end.y}`;
              return (
                <g key={`card-${i}`}>
                  <path d={path} fill="none" stroke={`${color}20`} strokeWidth="1.5" />
                  <motion.path
                    d={path}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ 
                      pathLength: [0, 0.3, 0.3, 0],
                      pathOffset: [0, 0, 1, 1],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      delay: 1.5 + i * 0.4 
                    }}
                    filter="url(#glow)"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center w-full">
        
        <div className="text-center lg:text-left mb-16 w-full max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black font-[family-name:var(--font-jakarta)]">
            How It Works.
          </h2>
        </div>
        
        {/* 3-Column Layout Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full max-w-6xl relative z-20">
          
          {/* Left Column: Input Steps */}
          <div className="flex flex-col gap-8 w-full lg:w-[280px]">
            {steps.map((step, i) => (
              <motion.div 
                key={step.name}
                ref={el => { stepRefs.current[i] = el; }}
                whileHover={{ x: 4, scale: 1.02 }}
                style={{ 
                  borderColor: `${step.color}30`,
                  backgroundColor: `${step.color}05`
                }}
                className="px-6 py-5 rounded-xl border bg-white shadow-sm flex items-center justify-center lg:justify-end cursor-default transition-all group font-[family-name:var(--font-jakarta)] w-full"
              >
                <span 
                  className="text-[11px] font-black uppercase tracking-[0.2em] transition-colors text-center lg:text-right w-full"
                  style={{ color: step.color }}
                >
                  {step.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Central Twin Core */}
          <div className="relative flex-shrink-0 z-20 my-16 lg:my-0">
            <motion.div 
              ref={coreRef}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center cursor-default group"
            >
              {/* The Main Chamber */}
              <div className="absolute inset-0 border border-indigo-100 rounded-3xl bg-white shadow-[0_20px_50px_-12px_rgba(79,70,229,0.1)] flex flex-col items-center justify-center p-8 text-center z-30 overflow-hidden">
                
                {/* Inner Gradient CPU Box */}
                <motion.div 
                  animate={{ 
                    boxShadow: ["0 0 20px rgba(99, 102, 241, 0.2)", "0 0 40px rgba(99, 102, 241, 0.4)", "0 0 20px rgba(99, 102, 241, 0.2)"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white relative z-10 shadow-lg shadow-indigo-200"
                >
                  <Cpu className="w-8 h-8" />
                </motion.div>
                
                <h4 className="text-2xl font-black tracking-tighter mb-2 relative z-10 text-gray-900">TWIN CORE</h4>
                <div className="h-px w-12 bg-indigo-100 mb-4 relative z-10" />
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-400 relative z-10">deterministic routing visualization</p>
                
                {/* Core Holographic Glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 opacity-100"
                />
              </div>
              
              {/* Energy Rings */}
              <div className="absolute -inset-4 border border-dashed border-indigo-200/50 rounded-[2.5rem] animate-[spin_40s_linear_infinite]" />
              <div className="absolute -inset-8 border border-violet-100/50 rounded-[3rem] animate-[spin_60s_linear_infinite_reverse]" />
              
              {/* Radiation Pulse */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-12 bg-indigo-100 rounded-[4rem] blur-3xl -z-10"
              />
            </motion.div>
          </div>

          {/* Right Column: Output Activity Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-[320px] z-20">
            {activityCards.map((card, i) => (
              <motion.div 
                key={card.label}
                ref={el => { cardRefs.current[i] = el; }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: 5, borderColor: card.color }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group overflow-hidden cursor-default w-full"
              >
                <div 
                  className="p-2 rounded-lg transition-colors flex-shrink-0"
                  style={{ backgroundColor: `${card.color}10` }}
                >
                  {card.status === 'success' ? (
                    <CheckCircle2 className="w-4 h-4" style={{ color: card.color }} />
                  ) : (
                    <AlertTriangle className="w-4 h-4" style={{ color: card.color }} />
                  )}
                </div>
                <span className="text-sm font-bold tracking-tight text-gray-700 flex-grow">{card.label}</span>
                
                <motion.div 
                  className="absolute bottom-0 left-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: card.color }}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
