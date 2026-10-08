'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/utils/journalist-utils';
import { BrainCircuit, BookOpen, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-white to-[#f4f4f5] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-left order-2 lg:order-1"
        >
          <motion.div variants={fadeUpVariant} className="mb-4">
            <span className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full">
              PRIVATE BETA • ENTERPRISE INTELLIGENCE
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-[1.1]"
          >
            Turn Unspoken Intuition Into<br />
            <span className="text-indigo-600">Your Greatest Active Asset.</span>
          </motion.h1>

          <motion.p 
            variants={fadeUpVariant}
            className="text-lg text-neutral-600 mb-10 font-medium"
          >
            The AI Journalist interviews your top talent to capture tacit intuition, 
            pattern recognition, and decision logic—converting silent knowledge into an 
            active Digital Twin that works for your team 24/7.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
            <button className="cta-btn">
              Request Early Access
            </button>
            <button className="px-8 py-3.5 text-sm font-bold text-neutral-700 hover:text-indigo-600 transition-colors">
              See How It Works ↓
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Main Product Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full h-[350px] md:h-[450px] bg-white rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100 flex items-center justify-center relative overflow-hidden group order-1 lg:order-2"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.03)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 bg-indigo-600/10 rounded-full flex items-center justify-center mb-6"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/40">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
              </div>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2 uppercase">CAPTURING</h3>
            <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.3em]">Knowledge Extraction Active</p>
            
            {/* Scanned status lines */}
            <div className="flex gap-1 mt-6">
               {[...Array(5)].map((_, i) => (
                 <motion.div 
                   key={i}
                   animate={{ opacity: [0.2, 1, 0.2] }}
                   transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                   className="w-6 h-0.5 bg-indigo-600 rounded-full"
                 />
               ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Feature Row matching the reference design */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-md border border-neutral-200 shadow-sm text-neutral-600">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-neutral-900 text-sm">For Doctors</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Preserve clinical intuition and diagnostic patterns for future residents.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-md border border-neutral-200 shadow-sm text-neutral-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-neutral-900 text-sm">For Tutors</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Scale your unique teaching methods to thousands of students instantly.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 bg-white rounded-md border border-neutral-200 shadow-sm text-neutral-600">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-neutral-900 text-sm">For Recruiters</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Capture the implicit cues that define a perfect culture fit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
