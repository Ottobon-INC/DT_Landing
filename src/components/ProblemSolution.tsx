'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquareX, CalendarOff, Users } from 'lucide-react';
import Link from 'next/link';

export default function ProblemSolution() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
            Multiply Your Expertise.
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Free your top talent to focus on deep, strategic work. 
            We turn their unique problem-solving framework into an autonomous AI Twin.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Benefit 1 */}
          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 relative group hover:border-indigo-100 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <MessageSquareX className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Protect Strategic Focus</h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Instead of being bombarded with micro-questions, your experts can focus entirely on the deep, strategic work that actually moves the needle.
            </p>
            <div className="pt-6 border-t border-neutral-200">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Our Solution</div>
              <p className="text-sm font-medium text-neutral-900">Capture (AI Journalist)</p>
            </div>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 relative group hover:border-indigo-100 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <CalendarOff className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Always-On Expertise</h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Ensure your team never slows down. Get instant answers and guidance even when key leaders are in meetings, traveling, or on vacation.
            </p>
            <div className="pt-6 border-t border-neutral-200">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Our Solution</div>
              <p className="text-sm font-medium text-neutral-900">Structure (Intelligence Vault)</p>
            </div>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 relative group hover:border-indigo-100 transition-colors">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Infinite Scalability</h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Break free from the limits of a single person's time. Multiply your best employee's decision-making to mentor every single new hire simultaneously.
            </p>
            <div className="pt-6 border-t border-neutral-200">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Our Solution</div>
              <p className="text-sm font-medium text-neutral-900">Deploy (Digital Twin)</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center">
          <Link href="/journalist" className="cta-btn">
            Learn More About The Process
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
