'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/utils/journalist-utils';
import { Mic2, Database, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Mic2 className="w-5 h-5 text-orange-600" />,
    title: "1. The Interview",
    description: "Our AI engages you in deep, meaningful dialogue. It listens for the nuance, the 'gut feelings', and the patterns only you see.",
    bullets: ["Dynamic questioning", "Expert-level context", "24/7 Availability"]
  },
  {
    icon: <Database className="w-5 h-5 text-orange-600" />,
    title: "2. Knowledge Extraction",
    description: "Raw dialogue is structured into a proprietary Intelligence Hub—preserving your unique cognitive models permanently.",
    bullets: ["Master Case Mapping", "Mental Model Trees", "Implicit Data Parsing"]
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-600" />,
    title: "3. Digital Twin",
    description: "Your expertise becomes an active, reusable intelligence. Scale your clinical instinct or teaching methods across entire organizations.",
    bullets: ["Scalable Consulting", "Interactive Tutorials", "Intuitive Hiring"]
  }
];

export default function HowItWorks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-[#f4f4f5] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4 text-neutral-900">How It Works</h2>
          <p className="text-neutral-500 font-medium max-w-2xl mx-auto">
            A structured system to turn your silent expertise into lasting intelligence.
          </p>
        </div>

        {/* Extraction Interface Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto h-[350px] bg-white rounded-3xl shadow-xl border border-neutral-200 mb-16 relative overflow-hidden flex flex-col group"
        >
          {/* Header Bar */}
          <div className="w-full h-12 border-b border-neutral-100 flex items-center px-6 gap-2 bg-neutral-50/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
            </div>
            <div className="mx-auto text-[10px] font-bold text-neutral-400 uppercase tracking-widest">ai_journalist_v1.0</div>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow flex items-center justify-center relative p-12">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="flex flex-col items-center gap-6 z-10 w-full max-w-lg">
              <div className="flex items-center gap-1 h-12">
                {mounted && [...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [12, 40, 16, 32, 12][(i + Math.floor(Math.random() * 5)) % 5] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: i * 0.05 }}
                    className="w-1.5 rounded-full bg-orange-600/20"
                  />
                ))}
              </div>
              <div className="text-center">
                <span className="text-neutral-900 font-bold text-2xl tracking-tight">Intelligence Extraction</span>
                <p className="text-neutral-400 mt-1 text-xs uppercase tracking-[0.2em] font-semibold">Live Processing Loop</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Status Bar */}
          <div className="w-full h-10 border-t border-neutral-100 flex items-center px-6 bg-neutral-50/50">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">System Active</span>
             </div>
          </div>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((s, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUpVariant}
              className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100 relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 p-8 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-600/10 rounded-lg">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg text-neutral-900">{s.title}</h3>
              </div>
              
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 flex-grow">
                {s.description}
              </p>
              
              <ul className="space-y-2 mt-auto pt-6 border-t border-neutral-100">
                {s.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
