'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/utils/journalist-utils';
import { ShieldCheck } from 'lucide-react';

const impacts = [
  {
    role: "The Doctor",
    outcome: "Clinical instinct preserved",
    description: "Future residents consult your 'digital brain' for diagnosis long after you've left."
  },
  {
    role: "The Tutor",
    outcome: "Teaching system scaled",
    description: "Thousands of students learn through your methods, at their own pace, simultaneously."
  },
  {
    role: "The Recruiter",
    outcome: "Hiring intuition captured",
    description: "The company scales with the same quality standards you set over three decades."
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-white border-b border-neutral-200 text-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4 text-neutral-900">The Digital Twin Impact</h2>
          <p className="text-neutral-500 font-medium max-w-2xl mx-auto">
            Transformation isn't just about data. It's about scaling the unique, unspoken brilliance that only you possess.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Left Side: Impact Image/Visual */}
          <motion.div 
            variants={fadeUpVariant}
            className="lg:w-1/2 w-full h-[500px] bg-neutral-50 rounded-[2.5rem] border border-neutral-200 shadow-inner flex flex-col items-center justify-center relative overflow-hidden group p-8"
          >
            {/* Animated Ring Background */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-orange-600/5 rounded-full"
            />
            
            <div className="relative z-10 flex flex-col items-center gap-8">
               <div className="relative">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute -inset-4 bg-orange-600/10 rounded-full blur-xl"
                 />
                 <div className="w-24 h-24 bg-white rounded-3xl shadow-xl border border-neutral-100 flex items-center justify-center relative z-10">
                   <ShieldCheck className="w-12 h-12 text-orange-600" />
                 </div>
               </div>
               
               <div className="text-center max-w-xs">
                 <h4 className="text-xl font-bold text-neutral-900 mb-2">Immutable Expert Ledger</h4>
                 <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                   Your expertise is cryptographically mapped and stored in a private, high-integrity intelligence vault.
                 </p>
               </div>
               
               <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="px-3 py-1 bg-white border border-neutral-100 rounded-md shadow-sm text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                       Vault_Layer_0{i+1}
                    </div>
                  ))}
               </div>
            </div>

            {/* Bottom Status Row */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-10">
               <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Encrypted</span>
               </div>
               <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">v2.4.0_Stable</span>
            </div>
          </motion.div>

          {/* Right Side: Impact List */}
          <motion.div className="lg:w-1/2 w-full space-y-6">
            {impacts.map((i, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-neutral-100 relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-neutral-900 text-lg">{i.role}</h4>
                  <span className="px-3 py-1 bg-orange-600/10 text-orange-600 text-[10px] uppercase font-bold tracking-wider rounded-full">
                    {i.outcome}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {i.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
