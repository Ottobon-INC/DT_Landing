'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant, staggerContainer } from '@/utils/journalist-utils';
import { FileText, Brain } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white border-b border-neutral-200 overflow-hidden text-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="lg:w-1/2"
          >
            <motion.h2 
              variants={fadeUpVariant}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-900 leading-[1.1]"
            >
              The world keeps losing expert knowledge.
            </motion.h2>
            
            <motion.p 
              variants={fadeUpVariant}
              className="text-lg text-neutral-600 mb-10 leading-relaxed font-medium"
            >
              Organizations meticulously document what they know, but they completely ignore the 90% that actually matters.
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={fadeUpVariant} className="flex gap-4">
                <div className="mt-1">
                  <FileText className="w-6 h-6 text-neutral-400" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Explicit Knowledge (Documented)</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    The facts, the data, the manuals. Easily recorded, but rarely the source of true competitive advantage.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="flex gap-4">
                <div className="mt-1">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Implicit Knowledge (Lost)</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    The nuance. The pattern recognition. The "I just know." This is what makes you elite, and it vanishes when you leave.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Knowledge Spectrum Infographic */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="w-full h-[450px] bg-white rounded-[2rem] border border-neutral-100 relative overflow-hidden shadow-2xl shadow-neutral-200/50 flex flex-col p-8">
               <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-100"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-100"></div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Knowledge Analysis v2.4</span>
               </div>

               <div className="flex-1 relative">
                  {/* The Spectrum Line */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-100"></div>
                  
                  {/* Explicit Side */}
                  <div className="absolute top-0 left-0 w-1/2 h-full border-r border-neutral-50 flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 bg-neutral-50 rounded-xl mb-4 flex items-center justify-center text-neutral-300">
                      <FileText className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-neutral-400 uppercase">Explicit</span>
                    <div className="w-full h-1 bg-neutral-100 rounded-full mt-2"></div>
                  </div>

                  {/* Implicit Side (Highlighted) */}
                  <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center p-4">
                    <motion.div 
                      animate={{ 
                        boxShadow: ["0 0 0px rgba(234,88,12,0)", "0 0 20px rgba(234,88,12,0.1)", "0 0 0px rgba(234,88,12,0)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-24 h-24 bg-orange-600/5 rounded-2xl mb-4 flex items-center justify-center text-orange-600 relative"
                    >
                      <Brain className="w-12 h-12" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-600 rounded-full animate-ping"></div>
                    </motion.div>
                    <span className="text-xs font-bold text-orange-600 uppercase">Implicit</span>
                    <div className="w-full h-1 bg-orange-600 rounded-full mt-2"></div>
                  </div>

                  {/* Connecting Arc */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(234,88,12,0.2))' }}>
                    <motion.path 
                      d="M 120 180 Q 240 100 360 180" 
                      fill="none" 
                      stroke="#ea580c" 
                      strokeWidth="2" 
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                  </svg>
               </div>

               <div className="mt-auto pt-6 border-t border-neutral-50 flex justify-between items-center">
                  <p className="text-[10px] text-neutral-400 font-medium">90% of value is uncaptured</p>
                  <div className="px-3 py-1 bg-orange-600 rounded text-[9px] font-bold text-white uppercase tracking-tight">Active Capture</div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
