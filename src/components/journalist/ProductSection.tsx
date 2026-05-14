'use client';

import { BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/utils/journalist-utils';

export default function ProductSection() {
  return (
    <section className="py-24 bg-[#f4f4f5] border-b border-neutral-200 overflow-hidden text-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4 text-neutral-900">Meet Your AI Journalist</h2>
          <p className="text-neutral-500 font-medium max-w-2xl mx-auto">
            An intelligent interviewer designed to map the intricate architecture of your human expertise.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Product Placeholder with Neural Map */}
          <motion.div 
            variants={fadeUpVariant}
            className="w-full h-[400px] md:h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-neutral-200 relative z-10 flex items-center justify-center overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
            
            {/* Animated Neural Map Components */}
            <div className="relative w-full h-full flex items-center justify-center">
               <motion.div 
                 animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 180, 270, 360] }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[400px] h-[400px] border border-orange-600/5 rounded-full"
               />
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], rotate: [360, 270, 180, 90, 0] }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[300px] h-[300px] border border-orange-600/10 rounded-full"
               />
               
               <div className="z-10 flex flex-col items-center">
                 <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-600/20 mb-6">
                    <BrainCircuit className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-3xl font-bold text-neutral-900 tracking-tight">Expert Intelligence Core</h3>
                 <p className="text-neutral-500 font-medium mt-2">Processing Implicit Logic Structures</p>
               </div>
               
               {/* Floating Data Nodes */}
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   animate={{ 
                     y: [0, -20, 0],
                     x: [0, i % 2 === 0 ? 10 : -10, 0],
                     opacity: [0.4, 0.8, 0.4]
                   }}
                   transition={{ 
                     duration: 3 + i, 
                     repeat: Infinity, 
                     delay: i * 0.5 
                   }}
                   className={`absolute p-3 bg-white border border-neutral-100 rounded-lg shadow-sm flex items-center gap-2 z-20`}
                   style={{ 
                     top: `${20 + (i * 12)}%`, 
                     left: i < 3 ? '15%' : '75%' 
                   }}
                 >
                   <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                   <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                     {['Intuition', 'Context', 'Nuance', 'Pattern', 'Logic', 'Memory'][i]}
                   </span>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          {/* Infographic Annotations (Hidden on small screens for simplicity, visible on lg) */}
          <div className="hidden lg:block">
            {/* Top Left Annotation */}
            <motion.div 
              variants={fadeUpVariant}
              className="absolute -top-6 -left-12 max-w-[250px] z-20"
            >
              <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 relative">
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Intelligent Questioning</h4>
                <p className="text-xs text-neutral-500">Adapts dynamically to your responses, probing deeper into vague answers.</p>
                <div className="absolute top-1/2 -right-12 w-12 h-px bg-neutral-300"></div>
              </div>
            </motion.div>

            {/* Bottom Right Annotation */}
            <motion.div 
              variants={fadeUpVariant}
              className="absolute -bottom-6 -right-12 max-w-[250px] z-20"
            >
              <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 relative">
                <h4 className="font-bold text-neutral-900 text-sm mb-1">Cognitive Mapping</h4>
                <p className="text-xs text-neutral-500">Structures raw dialogue into reusable mental models and case studies.</p>
                <div className="absolute top-1/2 -left-12 w-12 h-px bg-neutral-300"></div>
              </div>
            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
