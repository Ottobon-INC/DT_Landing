'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, BookOpen, MessageSquare, Users, ClipboardCheck,
  Stethoscope, CalendarCheck, Clock, FileText, Headphones, Zap, BarChart3,
  CheckCircle2, GraduationCap, HeartPulse, Layers
} from 'lucide-react';
import { getSpecialization, type SpecializationData } from '@/utils/specializationsData';

const iconMap: Record<string, React.ElementType> = {
  BookOpen, MessageSquare, Users, ClipboardCheck,
  Stethoscope, CalendarCheck, Clock, FileText,
  Headphones, Zap, BarChart3, CheckCircle2,
  GraduationCap, HeartPulse, Layers,
};
const sectionIconMap: Record<string, React.ElementType> = { GraduationCap, HeartPulse, Layers };

/* ── Animated Counter ── */
function AnimatedCounter({ value, color, inView }: { value: string; color: string; inView: boolean }) {
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = value.slice(0, value.indexOf(numMatch?.[0] || ''));
  const suffix = value.slice((numMatch?.index || 0) + (numMatch?.[0]?.length || 0));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(eased * num);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num]);

  const formatted = num % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();
  return (
    <span className="tabular-nums" style={{ color }}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function SpecializationPage() {
  const params = useParams();
  const router = useRouter();
  const [spec, setSpec] = useState<SpecializationData | null>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const [outcomeInView, setOutcomeInView] = useState(false);
  const [stepInView, setStepInView] = useState<boolean[]>([false, false, false, false]);
  const [heroScroll, setHeroScroll] = useState(0);

  // Window-based scroll for hero parallax (avoids target ref hydration issue)
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      setHeroScroll(Math.min(y / (vh * 1.1), 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroY = heroScroll * 200;
  const heroOpacity = Math.max(1 - heroScroll / 0.6, 0);
  const heroScale = 1 + heroScroll * 0.1;

  useEffect(() => {
    const data = getSpecialization(params.id as string);
    if (!data) { router.push('/'); return; }
    setSpec(data);
  }, [params.id, router]);

  // Observe outcome
  useEffect(() => {
    if (!outcomeRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOutcomeInView(true); }, { threshold: 0.4 });
    obs.observe(outcomeRef.current);
    return () => obs.disconnect();
  }, [spec]);

  if (!spec) return null;

  const SectionIcon = sectionIconMap[spec.icon] || GraduationCap;

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <div className="relative h-[110vh] overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0"
          style={{ transform: `translateY(${heroY}px) scale(${heroScale})`, transition: 'transform 0.05s linear' }}>
          <img src={spec.heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${spec.color}10 0%, ${spec.color}90 50%, ${spec.color} 100%)` }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6"
          style={{ opacity: heroOpacity, transition: 'opacity 0.05s linear' }}>
          <div className="max-w-5xl mx-auto w-full">
            {/* Back */}
            <button onClick={() => router.push('/')}
              className="flex items-center gap-2 mb-12 text-sm font-medium text-white/60 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
            </button>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <SectionIcon className="w-5 h-5 text-white/70" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">{spec.tagline}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] font-[family-name:var(--font-jakarta)] max-w-4xl">
              {spec.heroLine}
            </h1>

            {/* Subline */}
            <p className="text-lg md:text-xl text-white/60 mt-8 max-w-xl leading-relaxed font-light">
              {spec.heroSubline}
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════ THE PROBLEM ═══════════════ */}
      <section className="py-32 md:py-44 px-6">
        <div className="max-w-3xl mx-auto">
          {spec.scenario.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0, 1] }}
              className={`mb-8 last:mb-0 leading-[1.6] ${
                i === spec.scenario.length - 1
                  ? 'text-3xl md:text-4xl font-semibold font-[family-name:var(--font-jakarta)]'
                  : 'text-2xl md:text-3xl text-slate-500 font-light'
              }`}
              style={i === spec.scenario.length - 1 ? { color: spec.color } : undefined}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ═══════════════ STEPS ═══════════════ */}
      {spec.steps.map((step, i) => {
        const StepIcon = iconMap[step.icon] || CheckCircle2;
        const isEven = i % 2 === 0;
        const inView = stepInView[i];

        return (
          <section key={i} className="relative">
            {/* Full-width color band for alternating steps */}
            <div className={`${isEven ? 'bg-white' : ''}`}
              style={!isEven ? { backgroundColor: `${spec.color}04` } : undefined}>
              <div className="max-w-6xl mx-auto px-6 py-28 md:py-40">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>

                  {/* Text Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0, 1] }}
                    onViewportEnter={() => setStepInView(p => { const n = [...p]; n[i] = true; return n; })}
                    className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}
                  >
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                        Step {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-8 font-[family-name:var(--font-jakarta)]">
                      {step.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-6 font-light">
                      {step.description}
                    </p>

                    {/* Detail */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                      className="text-base text-slate-400 leading-relaxed border-l-2 pl-6"
                      style={{ borderColor: `${spec.color}30` }}
                    >
                      {step.detail}
                    </motion.p>
                  </motion.div>

                  {/* Stat Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
                    className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}
                  >
                    <div className="relative flex flex-col items-center justify-center p-12 md:p-16 rounded-3xl overflow-hidden"
                      style={{ backgroundColor: `${spec.color}06`, border: `1px solid ${spec.color}10` }}>

                      {/* Decorative rings */}
                      <div className="absolute -inset-8 border border-dashed rounded-full opacity-10 animate-[spin_60s_linear_infinite]"
                        style={{ borderColor: spec.color }} />
                      <div className="absolute -inset-20 border rounded-full opacity-5 animate-[spin_90s_linear_infinite_reverse]"
                        style={{ borderColor: spec.color }} />

                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -30 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                        style={{ backgroundColor: `${spec.color}12` }}
                      >
                        <StepIcon className="w-8 h-8" style={{ color: spec.color }} />
                      </motion.div>

                      {/* Big Number */}
                      <div className="text-6xl md:text-7xl font-bold font-[family-name:var(--font-jakarta)] mb-3">
                        <AnimatedCounter value={step.stat} color={spec.color} inView={inView} />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 text-center">
                        {step.statLabel}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════ OUTCOME ═══════════════ */}
      <section ref={outcomeRef} className="relative py-40 md:py-56 overflow-hidden" style={{ backgroundColor: spec.color }}>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-12"
          >
            The Result
          </motion.p>

          {/* Animated Big Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold leading-none text-white font-[family-name:var(--font-jakarta)] mb-4"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.15)' }}
          >
            {outcomeInView ? spec.outcomeStat : ''}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50 mb-20"
          >
            {spec.outcomeLabel}
          </motion.p>

          {/* Outcome text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto"
          >
            {spec.outcome}
          </motion.p>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIAL ═══════════════ */}
      <section className="py-32 md:py-44 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="text-3xl md:text-4xl font-light text-slate-800 leading-[1.5] italic font-[family-name:var(--font-instrument)] mb-12"
          >
            &ldquo;{spec.testimonial}&rdquo;
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: spec.colorLight }}>
              <SectionIcon className="w-6 h-6" style={{ color: spec.color }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">{spec.testimonialAuthor}</p>
              <p className="text-[12px] text-slate-400">{spec.testimonialRole}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ BACK CTA ═══════════════ */}
      <section className="py-20 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={() => router.push('/')}
            className="flex items-center gap-3 text-sm text-slate-400 hover:text-slate-900 font-medium transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to overview
          </button>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
            Digital Twin · {spec.title}
          </span>
        </div>
      </section>
    </main>
  );
}
