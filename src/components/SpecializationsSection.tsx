'use client';

import { motion } from 'framer-motion';
import { GraduationCap, HeartPulse, Layers, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const specializations = [
  {
    id: 'education',
    title: 'EDUCATION',
    icon: GraduationCap,
    tagline: 'Curriculum · Student Flow · Learning Ops',
    teaser: 'Professor Maya has 240 students. See how her Twin handles the rest.',
    color: '#6366f1',
    colorLight: '#eef2ff',
    borderColor: '#a5b4fc',
    image: '/images/specializations/education.png',
  },
  {
    id: 'healthcare',
    title: 'HEALTHCARE',
    icon: HeartPulse,
    tagline: 'Patient Flow · Coordination · Clinical Ops',
    teaser: 'Dr. Rajan manages 80 patients across 3 departments. Zero missed follow-ups.',
    color: '#6366f1',
    colorLight: '#eef2ff',
    borderColor: '#a5b4fc',
    image: '/images/specializations/healthcare.png',
  },
  {
    id: 'services',
    title: 'SERVICES',
    icon: Layers,
    tagline: 'Workflow Ops · SLA Logic · Delivery',
    teaser: 'Priya\'s SLA compliance jumped from 72% to 96% in three weeks.',
    color: '#6366f1',
    colorLight: '#eef2ff',
    borderColor: '#a5b4fc',
    image: '/images/specializations/services.png',
  },
];

export default function SpecializationsSection() {
  const router = useRouter();

  return (
    <section className="py-24 px-6 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 font-[family-name:var(--font-jakarta)]">
            Operational Twins, Ready for Deployment.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium">
            Trained on how real experts think, decide, and operate.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.button
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -10, boxShadow: `0 24px 60px ${spec.color}18` }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push(`/specializations/${spec.id}`)}
                className="relative p-8 rounded-[2.5rem] bg-white border shadow-sm text-left transition-all duration-300 group overflow-hidden cursor-pointer"
                style={{ borderColor: `${spec.color}20` }}
              >
                {/* Shimmer */}
                <motion.div initial={{ x: '-100%', opacity: 0 }} whileHover={{ x: '200%', opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 w-1/3 -skew-x-12 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${spec.color}08, transparent)` }} />

                {/* Thumbnail */}
                <div className="w-full h-40 rounded-2xl overflow-hidden mb-6 relative" style={{ backgroundColor: spec.colorLight }}>
                  <img src={spec.image} alt={spec.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: spec.colorLight }}>
                      <Icon className="w-5 h-5" style={{ color: spec.color }} />
                    </motion.div>
                    <h3 className="text-lg font-black text-slate-900 tracking-wider">{spec.title}</h3>
                  </div>

                  {/* Teaser */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{spec.teaser}</p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: spec.color }}>Read the full story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: spec.color }} />
                  </div>

                  {/* Footer */}
                  <div className="pt-6 mt-6 border-t flex items-center gap-2" style={{ borderColor: `${spec.color}15` }}>
                    <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                      className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.6)' }} />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Twin Active</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-center">
          <p className="text-slate-500 font-medium leading-relaxed italic">
            &ldquo;Each twin adapts to the workflows, language, and operational behavior of its environment.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
