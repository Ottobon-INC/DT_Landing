'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/utils/journalist-utils';

export default function CTASection() {
  return (
    <section className="bg-neutral-950 text-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main CTA Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Be Among The First.
          </h2>
          <p className="text-neutral-400 mb-10 max-w-lg mx-auto font-medium">
            AI Journalist is currently in private access. <br />
            Spots are limited to preserve interview quality.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button className="bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20">
              Join the Waitlist
            </button>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">
              Limited to 100 Initial Licenses
            </span>
          </div>
        </motion.div>

        {/* Footer Area matching reference */}
        <footer className="border-t border-neutral-800 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-neutral-900 rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">AI Journalist</span>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-sm font-medium">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Downloads</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Contacts</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          
          {/* Socials / Copyright */}
          <div className="flex flex-col items-start md:items-end gap-4 text-xs text-neutral-600">
            <div className="flex items-center gap-4 text-neutral-400">
               {/* Abstract social icons */}
               <div className="w-5 h-5 border border-neutral-600 rounded-full flex items-center justify-center">In</div>
               <div className="w-5 h-5 border border-neutral-600 rounded-full flex items-center justify-center">X</div>
            </div>
            <p>© 2026 AI Journalist Inc.<br />All rights reserved.</p>
          </div>
          
        </footer>

      </div>
    </section>
  );
}
