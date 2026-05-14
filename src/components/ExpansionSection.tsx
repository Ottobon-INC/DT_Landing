'use client';

import { motion } from 'framer-motion';
import { User, ClipboardList, MessageSquare, Settings, RefreshCw, Activity } from 'lucide-react';

export default function ExpansionSection() {
  const activities = [
    { label: "handling workflows", icon: <ClipboardList className="w-5 h-5 text-green-600" />, color: "bg-[#F0F4E8]" },
    { label: "answering requests", icon: <MessageSquare className="w-5 h-5 text-amber-600" />, color: "bg-[#FDF4E6]" },
    { label: "managing operations", icon: <Settings className="w-5 h-5 text-emerald-600" />, color: "bg-[#E8F5F1]" },
    { label: "staying synchronized", icon: <RefreshCw className="w-5 h-5 text-blue-600" />, color: "bg-[#EBF3F9]" }
  ];

  const satelliteNodes = [
    { x: -280, y: -180, label: "handling workflows", icon: <ClipboardList className="w-6 h-6 text-green-600" />, color: "bg-[#F0F4E8]", borderColor: "border-[#D9E2C5]" },
    { x: 280, y: -180, label: "answering requests", icon: <MessageSquare className="w-6 h-6 text-amber-600" />, color: "bg-[#FDF4E6]", borderColor: "border-[#F9EBD3]" },
    { x: -280, y: 180, label: "managing operations", icon: <Settings className="w-6 h-6 text-emerald-600" />, color: "bg-[#E8F5F1]", borderColor: "border-[#D1E9E2]" },
    { x: 280, y: 180, label: "staying synchronized", icon: <RefreshCw className="w-6 h-6 text-blue-600" />, color: "bg-[#EBF3F9]", borderColor: "border-[#D1E1EF]" }
  ];

  return (
    <section className="pt-8 pb-24 px-6 relative overflow-hidden bg-slate-50/30 border-t border-slate-100">
      {/* Editorial Dot Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 font-[family-name:var(--font-jakarta)]"
          >
            One you. Everywhere.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 font-medium mt-4"
          >
            Expand your presence without expanding your time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Legend */}
          <div className="lg:col-span-3 space-y-8 border-l border-dashed border-slate-200 pl-8">
            {activities.map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center transition-transform group-hover:scale-110 border border-black/5`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-slate-500 font-[family-name:var(--font-jakarta)] lowercase">{item.label}</span>
                </div>
                {i < activities.length - 1 && (
                  <div className="h-px w-full border-b border-dotted border-slate-100 mt-8" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Center/Right: Hexagonal Map */}
          <div className="lg:col-span-9 relative min-h-[600px] flex items-center justify-center">
            {/* Unified Neural Paths Layer */}
            <svg className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 overflow-visible">
              {satelliteNodes.map((node, i) => (
                <motion.line 
                  key={`line-${i}`}
                  x1="400" y1="400" 
                  x2={400 + node.x} y2={400 + node.y}
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                />
              ))}
            </svg>

            {/* Central Human Node */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative z-30 flex items-center justify-center"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 font-[family-name:var(--font-jakarta)]">
                Central Human Node
              </div>
              <div className="w-36 h-36 rounded-full border-4 border-slate-100 bg-white flex items-center justify-center p-3 relative shadow-xl shadow-indigo-500/10">
                <div className="w-full h-full rounded-full bg-slate-50/50 flex flex-col items-center justify-center relative overflow-hidden border border-slate-100">
                   <User className="w-14 h-14 text-indigo-500 mb-2" />
                   <div className="bg-indigo-600 text-white text-[10px] font-black px-5 py-1.5 rounded-xl uppercase tracking-widest shadow-sm">YOU</div>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.3, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-6 rounded-full border-2 border-indigo-500/10"
                />
              </div>
            </motion.div>

            {/* Satellite Nodes Clusters */}
            <div className="absolute inset-0 flex items-center justify-center">
              {satelliteNodes.map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute z-20 flex flex-col items-center group"
                  style={{ left: `calc(50% + ${node.x}px)`, top: `calc(50% + ${node.y}px)`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className={`w-20 h-20 rounded-full ${node.color} border-2 ${node.borderColor} shadow-sm flex items-center justify-center transition-colors relative`}>
                    {node.icon}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border border-slate-100 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    </div>
                  </div>
                  
                  {/* Boxed Label - Matching Reference */}
                  <div className="mt-4 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm min-w-[140px] text-center">
                    <span className="text-[10px] font-black tracking-tight text-slate-900 font-[family-name:var(--font-jakarta)] lowercase">
                      {node.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-slate-200" />
              <div className="flex gap-1">
                 <div className="w-1 h-1 rounded-full bg-indigo-500" />
                 <div className="w-1 h-1 rounded-full bg-indigo-500 opacity-50" />
                 <div className="w-1 h-1 rounded-full bg-indigo-500 opacity-25" />
              </div>
              <div className="h-px w-16 bg-slate-200" />
            </div>
            <blockquote className="text-4xl md:text-6xl font-normal text-slate-900 italic font-[family-name:var(--font-instrument)]">
              "Always active."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
