'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const data = getSpecialization(params.id as string);
    if (!data) { router.push('/'); return; }
    setSpec(data);
  }, [params.id, router]);

  if (!spec) return null;

  const SectionIcon = sectionIconMap[spec.icon] || GraduationCap;

  return (
    <main className="bg-white text-slate-900 min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-32">
      
      {/* ── HEADER ── */}
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <button onClick={() => router.push('/')}
          className="flex items-center gap-2 mb-12 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to overview
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg" style={{ backgroundColor: `${spec.color}15` }}>
            <SectionIcon className="w-5 h-5" style={{ color: spec.color }} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: spec.color }}>
            {spec.tagline}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 font-[family-name:var(--font-jakarta)]">
          {spec.heroLine}
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-12">
          {spec.heroSubline}
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg relative mb-16"
        >
          <img src={spec.heroImage} alt={spec.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
        </motion.div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-3xl mx-auto px-6">
        
        {/* Scenario */}
        <div className="prose prose-lg prose-slate max-w-none mb-16">
          {spec.scenario.map((para, i) => (
            <p key={i} className={`leading-relaxed text-slate-800 ${i === 0 ? 'text-xl font-medium' : ''}`}>
              {para}
            </p>
          ))}
        </div>

        <hr className="my-16 border-slate-200" />

        {/* Steps */}
        <div className="space-y-16">
          {spec.steps.map((step, i) => {
            const StepIcon = iconMap[step.icon] || CheckCircle2;
            
            return (
              <section key={i} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: `${spec.color}15` }}>
                     <StepIcon className="w-5 h-5" style={{ color: spec.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-[family-name:var(--font-jakarta)]">
                    {step.title}
                  </h3>
                </div>
                
                <div className="prose prose-lg prose-slate max-w-none mb-8">
                  <p className="text-slate-700 leading-relaxed">{step.description}</p>
                </div>

                {/* Inline Callout for Detail & Stat */}
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start my-8">
                  <div className="flex-1">
                    <p className="text-slate-600 text-base leading-relaxed m-0 italic">"{step.detail}"</p>
                  </div>
                  
                  <div className="w-full md:w-auto shrink-0 flex flex-col items-center justify-center p-6 rounded-xl bg-white shadow-sm border border-slate-100 min-w-[160px]">
                    <div className="text-4xl font-bold font-[family-name:var(--font-jakarta)] mb-1">
                      <AnimatedCounter value={step.stat} color={spec.color} inView={true} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">
                      {step.statLabel}
                    </span>
                  </div>
                </div>

              </section>
            );
          })}
        </div>

        <hr className="my-16 border-slate-200" />

        {/* ── OUTCOME ── */}
        <section className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">The Result</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="shrink-0">
               <div className="text-6xl md:text-8xl font-black font-[family-name:var(--font-jakarta)] leading-none" style={{ color: spec.color }}>
                 {spec.outcomeStat}
               </div>
               <div className="text-sm font-semibold uppercase tracking-widest text-slate-500 mt-2">
                 {spec.outcomeLabel}
               </div>
            </div>
            <div className="flex-1">
              <p className="text-2xl md:text-3xl text-slate-900 font-light leading-snug">
                {spec.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
           <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed italic mb-8 font-serif">
             "{spec.testimonial}"
           </blockquote>
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${spec.color}20` }}>
               <SectionIcon className="w-6 h-6" style={{ color: spec.color }} />
             </div>
             <div>
               <p className="font-bold text-slate-900">{spec.testimonialAuthor}</p>
               <p className="text-sm text-slate-500">{spec.testimonialRole}</p>
             </div>
           </div>
        </section>

      </article>

    </main>
  );
}
