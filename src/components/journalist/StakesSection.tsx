'use client';

import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/utils/journalist-utils';

export default function StakesSection() {
  return (
    <section className="py-32 bg-white border-b border-neutral-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={fadeUpVariant}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
            You could retire tomorrow.
          </h2>
          
          <div className="space-y-6">
            <p className="text-xl text-neutral-600 font-medium leading-relaxed">
              If you did, decades of intuition, context, and hard-earned wisdom 
              would walk out the door with you. 
            </p>
            
            <p className="text-lg text-neutral-900 font-bold bg-neutral-100 p-6 rounded-2xl inline-block">
              Your organization wouldn't just lose an employee.<br />
              It would lose its history.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
