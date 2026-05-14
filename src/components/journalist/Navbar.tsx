'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#f4f4f5]/80 backdrop-blur-md border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-neutral-900">
            <div className="w-5 h-5 bg-orange-600 rounded-md flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            AI Journalist
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
            <a href="#problem" className="hover:text-neutral-900 transition-colors">The Problem</a>
            <a href="#how-it-works" className="hover:text-neutral-900 transition-colors">Solution</a>
            <a href="#impact" className="hover:text-neutral-900 transition-colors">Impact</a>
          </div>
        </div>

        <button className="text-xs font-semibold px-4 py-2 bg-white border border-neutral-200 text-neutral-800 rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-2 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
          <span>Private Beta</span>
        </button>
      </div>
    </motion.nav>
  );
}
