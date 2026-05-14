'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function DeploySection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Visual Content Container */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/cta-hand.png" 
          alt="Digital Twin Deployment" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 font-[family-name:var(--font-jakarta)] leading-[0.95] drop-shadow-2xl">
            READY TO DEPLOY<br />
            <span className="text-neutral-300">YOUR DIGITAL TWIN?</span>
          </h2>
          
          <p className="text-xs md:text-sm text-white font-medium mb-12 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.3em] font-mono drop-shadow-lg">
            Your expertise stays active<br />
            <span className="text-[#E84311] font-bold">even when you are not.</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-white text-black rounded-none font-black text-lg overflow-hidden transition-all hover:pr-14"
          >
            <span className="relative z-10 flex items-center gap-4">
              JOIN THE WAITLIST
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute top-0 right-0 h-full w-0 bg-[#E84311] group-hover:w-4 transition-all duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Status / Tagline */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">
          Scale beyond limits
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E84311] animate-pulse" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            System: Optimal
          </p>
        </div>
      </div>
    </section>
  );
}
