'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Rocket, ArrowRight } from 'lucide-react';

interface Phase {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
}

const phases: Phase[] = [
  {
    key: 'PHASE 01',
    title: 'CAPTURE',
    subtitle: 'Absorb Expertise',
    description: 'Your knowledge, decisions, and instincts are synchronized into a living intelligence layer.',
    icon: Brain,
    color: '#6366f1', // Indigo
    glowColor: 'rgba(99, 102, 241, 0.35)',
  },
  {
    key: 'PHASE 02',
    title: 'CHANNEL',
    subtitle: 'Route Deterministically',
    description: 'Deterministic routing keeps responses aligned to your logic.',
    icon: Zap,
    color: '#8b5cf6', // Violet
    glowColor: 'rgba(139, 92, 246, 0.35)',
  },
  {
    key: 'PHASE 03',
    title: 'AMPLIFY',
    subtitle: 'Scale Without Dilution',
    description: 'Multiply your expertise across infinite interactions without loss.',
    icon: Rocket,
    color: '#06b6d4', // Cyan
    glowColor: 'rgba(6, 182, 212, 0.35)',
  },
];

export default function HarnessingAI() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-[family-name:var(--font-jakarta)] bg-clip-text text-transparent leading-tight uppercase"
            style={{
              backgroundImage: 'linear-gradient(135deg, #000000ff, #000000ff, #06b6d4)',
              filter: 'drop-shadow(0 0 30px rgba(233, 233, 233, 0.3))',
            }}
          >
            Harnessing The AI.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium mt-4 tracking-wide font-[family-name:var(--font-jakarta)]">
            Your expertise, amplified.<br className="md:hidden" /> Not replaced.
          </p>
        </motion.div>

        {/* Phases Grid */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-8 mb-24 relative group/container">

          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <React.Fragment key={phase.key}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative z-10 flex-1 flex flex-col w-full max-w-sm lg:max-w-none"
                >
                  {/* Phase Indicator */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="bg-white px-4 py-2 border border-slate-200 rounded-full flex items-center gap-2 mb-2 relative shadow-sm">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                      <div
                        className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]"
                        style={{ backgroundColor: phase.color, color: phase.color }}
                      />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                        {phase.key}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 group/card relative overflow-hidden shadow-sm group-hover/container:blur-[3px] group-hover/container:opacity-50 group-hover/container:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-100 hover:!bg-white hover:!shadow-xl hover:!border-slate-300 cursor-pointer">
                    {/* Hover Glow */}
                    <div
                      className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover/card:opacity-15 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: phase.color }}
                    />

                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="p-3 rounded-xl bg-slate-50 border border-slate-100"
                        style={{ boxShadow: `inset 0 0 20px ${phase.color}10` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: phase.color }} />
                      </div>
                      <h3
                        className="text-2xl font-black tracking-tight font-[family-name:var(--font-jakarta)] uppercase"
                        style={{ color: phase.color }}
                      >
                        {phase.title}
                      </h3>
                    </div>

                    <p className="text-lg text-slate-800 font-semibold mb-4 font-[family-name:var(--font-jakarta)]">
                      {phase.subtitle}
                    </p>

                    <p className="text-sm text-slate-500 leading-relaxed font-[family-name:var(--font-jakarta)] pr-4">
                      {phase.description}
                    </p>
                  </div>

                  {/* Mobile Flow Arrow */}
                  {i < phases.length - 1 && (
                    <div className="lg:hidden flex justify-center pt-6">
                      <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                    </div>
                  )}
                </motion.div>

                {/* Desktop Flow Arrow */}
                {i < phases.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-slate-300 pt-16">
                    <ArrowRight className="w-8 h-8 opacity-50" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>


        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center px-6 max-w-3xl"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-slate-200" />
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-[#6366f1]" />
              <div className="w-1 h-1 rounded-full bg-[#8b5cf6] opacity-75" />
              <div className="w-1 h-1 rounded-full bg-[#06b6d4] opacity-50" />
            </div>
            <div className="h-px w-16 bg-slate-200" />
          </div>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl text-slate-900 italic font-[family-name:var(--font-instrument)] tracking-tight leading-tight">
            &ldquo;AI doesn&apos;t replace expertise.<br />It makes it immortal.&rdquo;
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
