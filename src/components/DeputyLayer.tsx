'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User, Cpu, Users, Bot, ChevronRight, Zap, Sparkles, ArrowRight, CornerRightDown, CornerRightUp } from 'lucide-react';

type Mode = 'education' | 'healthcare' | 'services';

const modes: Record<Mode, { title: string; expert: string; deputy: string; client: string }> = {
  education: {
    title: 'EDUCATION MODE',
    expert: 'PROFESSOR',
    deputy: 'RESEARCH ASST',
    client: 'STUDENT',
  },
  healthcare: {
    title: 'HEALTHCARE MODE',
    expert: 'CHIEF DOCTOR',
    deputy: 'JUNIOR DOCTOR',
    client: 'PATIENT',
  },
  services: {
    title: 'SERVICES MODE',
    expert: 'MANAGING PARTNER',
    deputy: 'ASSOCIATE',
    client: 'CLIENT',
  },
};

export default function DeputyLayer() {
  const [activeMode, setActiveMode] = useState<Mode>('education');

  const modeContent = {
    education: {
      expertSub: 'Academic Authority',
      deputySub: 'Course Management',
      clientSub: 'Learning Success',
      assistLabel: 'Assists Educators',
      assistDesc: 'Curriculum • Grading\n• Research Support',
      autoLabel: 'Guides Autonomously',
      autoDesc: 'Quizzes • Resources • Feedback\nfor the Student'
    },
    healthcare: {
      expertSub: 'Medical Authority',
      deputySub: 'Clinical Operations',
      clientSub: 'Patient Care',
      assistLabel: 'Assists Care Team',
      assistDesc: 'Diagnostics • History\n• Triage Support',
      autoLabel: 'Monitors Autonomously',
      autoDesc: 'Alerts • Vitals • Follow-ups\nfor the Patient'
    },
    services: {
      expertSub: 'Strategic Control',
      deputySub: 'Operational Input',
      clientSub: 'Service Delivery',
      assistLabel: 'Assists Internal Team',
      assistDesc: 'Insights • Recommendations\n• Decision Support',
      autoLabel: 'Acts Autonomously',
      autoDesc: 'Executes • Operates • Delivers\nfor the Client'
    }
  };

  // Particle Component for Signal Paths
  const PathParticle = ({ path, color, delay = 0 }: { path: string; color: string; delay?: number }) => (
    <motion.circle
      r="3"
      fill={color}
      initial={{ offsetDistance: "0%", opacity: 0 }}
      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      style={{ offsetPath: `path("${path}")`, filter: `blur(1px) drop-shadow(0 0 4px ${color})` }}
    />
  );

  return (
    <section className="py-16 px-6 bg-[#FDFDFD] relative overflow-hidden font-[family-name:var(--font-jakarta)]">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />

      <div className="max-w-5xl mx-auto relative z-10 scale-[0.9] origin-top">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-8xl font-black tracking-tighter text-slate-900  mb-3">
              The Deputy Layer
            </h2>
            <p className="text-slate-500 text-base font-medium tracking-tight max-w-xl mb-6">
              Every expert relies on trusted operational deputies.
            </p>
          </motion.div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-50 p-1 rounded-full border border-slate-100 flex gap-1 shadow-sm">
            {(Object.keys(modes) as Mode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeMode === mode
                    ? 'bg-slate-900 text-white shadow-xl'
                    : 'text-slate-400 hover:text-slate-600'
                  }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Main Flow Diagram */}
        <div className="relative min-h-[600px] flex flex-col items-center">

          <div className="w-full grid grid-cols-12 gap-4 items-center relative py-8">

            {/* SVG Global Overlay - Spans all columns */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 500" preserveAspectRatio="none">
                {/* Expert to AI Core (Top Path) */}
                <path
                  d="M 300 120 C 400 120 400 230 467 230 L 472 230"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  className="opacity-10"
                />
                <PathParticle path="M 300 120 C 400 120 400 230 467 230 L 472 230" color="#3b82f6" delay={0} />
                <PathParticle path="M 300 120 C 400 120 400 230 467 230 L 472 230" color="#3b82f6" delay={1.5} />

                {/* Deputy to AI Core (Bottom Path) */}
                <path
                  d="M 300 380 C 380 380 400 270 467 270 L 472 270"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  className="opacity-10"
                />
                <PathParticle path="M 300 380 C 380 380 400 270 467 270 L 472 270" color="#8b5cf6" delay={0.7} />
                <PathParticle path="M 300 380 C 380 380 400 270 467 270 L 472 270" color="#8b5cf6" delay={2.2} />

                {/* AI Core to Client (Output Path) */}
                <path
                  d="M 728 250 L 900 250"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  className="opacity-10"
                />
                <PathParticle path="M 728 250 L 900 250" color="#10b981" delay={0} />
                <PathParticle path="M 728 250 L 900 250" color="#10b981" delay={1.5} />

                {/* Entry Arrows */}
                <path d="M 462 225 L 472 230 L 462 235" stroke="#3b82f6" strokeWidth="2" fill="none" />
                <path d="M 462 265 L 472 270 L 462 275" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                <path d="M 890 245 L 900 250 L 890 255" stroke="#10b981" strokeWidth="2" fill="none" />

              </svg>
            </div>

            {/* LEFT: Internal Roles */}
            <div className="col-span-3 flex flex-col gap-24 relative z-10">
              {/* Expert Card */}
              <motion.div
                key={`${activeMode}-expert`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative p-8 rounded-[2rem] border-2 border-slate-900 bg-white shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
                  <User className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">
                  {modes[activeMode].expert}
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-4">
                  {modeContent[activeMode].expertSub}
                </p>
                <div className="px-4 py-1 rounded-full bg-slate-900 text-[9px] font-black text-white uppercase tracking-widest">
                  EXPERT
                </div>
              </motion.div>

              {/* Deputy Card */}
              <motion.div
                key={`${activeMode}-deputy`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="relative p-8 rounded-[2rem] border-2 border-dashed border-indigo-200 bg-white shadow-lg flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">
                  {modes[activeMode].deputy}
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-4">
                  {modeContent[activeMode].deputySub}
                </p>
                <div className="px-4 py-1 rounded-full bg-indigo-100 text-[9px] font-black text-indigo-600 uppercase tracking-widest">
                  DEPUTY
                </div>
              </motion.div>
            </div>

            {/* CENTER: AI Core */}
            <div className="col-span-6 flex flex-col items-center justify-center relative min-h-[400px] z-10">
              {/* Path Labels */}
              <div className="absolute left-4 top-20 pointer-events-none">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest text-right block leading-tight">Strategic<br />Signals</span>
              </div>
              <div className="absolute left-4 bottom-20 pointer-events-none">
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest text-right block leading-tight">Operational<br />Signals</span>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 flex items-center justify-center -z-10 scale-150">
                  <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-64 h-64 border border-indigo-500/20 rounded-full" />
                </div>
                <motion.div className="w-64 h-80 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(79,70,229,0.3)] border-b-8 border-indigo-950">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight mb-4">Digital Twin<br />AI Core</h3>
                  <div className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-[8px] font-black text-white uppercase tracking-[0.2em] border border-white/20 mb-6">Autonomous • Assistive</div>
                  <p className="text-xs font-medium text-indigo-100 leading-relaxed italic">Works with you.<br />Works for you.</p>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: Client */}
            <div className="col-span-3 flex justify-start relative z-10">
              <motion.div
                key={`${activeMode}-client`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative p-10 rounded-[2.5rem] border-2 border-emerald-500 bg-white shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1">
                  {modes[activeMode].client}
                </h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-6">
                  {modeContent[activeMode].clientSub}
                </p>
                <div className="px-6 py-2 rounded-full bg-emerald-500 text-[10px] font-black text-white uppercase tracking-widest">
                  END USER
                </div>
              </motion.div>
            </div>
          </div>


          {/* DUAL CAPABILITY SECTION */}
          <div className="mt-[-80px] flex flex-col items-center w-full max-w-4xl relative">
            {/* Connecting line from AI Core */}
            <div className="absolute top-[-48px] left-1/2 -translate-x-1/2 w-[2px] h-12 bg-gradient-to-b from-indigo-500 to-indigo-500/20" />

            <div className="w-[2px] h-12 bg-indigo-500/20" />
            <div className="px-6 py-1 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-8 shadow-sm">
              DUAL CAPABILITY
            </div>

            <div className="w-full relative flex justify-between">
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 800 100">
                <path d="M 400 0 L 400 20 L 150 20 L 150 50" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" opacity="0.2" />
                <path d="M 400 0 L 400 20 L 650 20 L 650 50" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" opacity="0.2" />
              </svg>

              <div key={`${activeMode}-assist`} className="flex flex-col items-center text-center w-64 pt-12">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-indigo-500" />
                </div>
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight mb-2">
                  {modeContent[activeMode].assistLabel}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed whitespace-pre-line">
                  {modeContent[activeMode].assistDesc}
                </p>
              </div>

              <div key={`${activeMode}-auto`} className="flex flex-col items-center text-center w-64 pt-12">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <Bot className="w-5 h-5 text-indigo-500" />
                </div>
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tight mb-2">
                  {modeContent[activeMode].autoLabel}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed whitespace-pre-line">
                  {modeContent[activeMode].autoDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
