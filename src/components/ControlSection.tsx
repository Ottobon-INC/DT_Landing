'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, AlertCircle, Activity, User, Mail, Calendar, FileText, Target, Briefcase, TrendingUp } from 'lucide-react';

export default function ControlSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#6366f1 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 font-[family-name:var(--font-jakarta)] ">
            Human in the loop.
          </h2>
        </motion.div>

        {/* Conceptual Rows */}
        <div className="space-y-6 text-left">
          {/* Row 1: Autonomous */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {/* Twin Icon Area */}
            <div className="flex flex-col items-center gap-2 min-w-[120px]">
              <div className="w-20 h-20 rounded-2xl bg-indigo-50 flex items-center justify-center p-2">
                <img src="/images/autonomous-bot.png" alt="Autonomous Bot" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Digital Twin</span>
            </div>

            {/* Content Box */}
            <div className="flex-1 w-full bg-[#F4F9F1] border border-[#E1EFD8] rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xs text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 font-[family-name:var(--font-jakarta)]">Low-risk actions</h3>
                </div>
                <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">→ automatically handled</p>
              </div>

              {/* Sub-items Grid */}
              <div className="flex gap-8">
                {[
                  { icon: <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3 }}><Mail className="w-5 h-5 text-green-600" /></motion.div>, label: "Reply to email" },
                  { icon: <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}><Calendar className="w-5 h-5 text-green-600" /></motion.div>, label: "Schedule meeting" },
                  { icon: <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}><FileText className="w-5 h-5 text-green-600" /></motion.div>, label: "Organize docs" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-white border border-[#E1EFD8] flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-black text-slate-500 text-center leading-tight uppercase tracking-tighter w-16">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Row 2: Escalated */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {/* Twin Alert Area */}
            <div className="flex flex-col items-center gap-2 min-w-[120px]">
              <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center p-2 relative">
                <img src="/images/confused-bot.png" alt="Confused Bot" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Digital Twin <br /> when confused</span>
            </div>

            {/* Content Box */}
            <div className="flex-1 w-full bg-[#FFF9F1] border border-[#FEEBD8] rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="max-w-xs text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                    <AlertCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 font-[family-name:var(--font-jakarta)]">Complex decisions</h3>
                </div>
                <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">→ escalated to you</p>
              </div>

              {/* Sub-items Grid */}
              <div className="flex gap-8">
                {[
                  { icon: <Target className="w-5 h-5 text-amber-600" />, label: "Approval" },
                  { icon: <Briefcase className="w-5 h-5 text-amber-600" />, label: "Commit" },
                  { icon: <TrendingUp className="w-5 h-5 text-amber-600" />, label: "Strategy" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-white border border-[#FEEBD8] flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-black text-slate-500 text-center leading-tight uppercase tracking-tighter w-16">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Hand-off Arrow */}
              <div className="hidden md:block">
                <motion.div
                  animate={{ x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-amber-500 font-bold text-2xl"
                >
                  →
                </motion.div>
              </div>
            </div>

            {/* Human Area */}
            <div className="flex flex-col items-center gap-2 min-w-[120px]">
              <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-100">
                <User className="w-10 h-10 text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Real You</span>
            </div>
          </motion.div>
        </div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative pt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-slate-100" />
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <div className="h-px w-24 bg-slate-100" />
          </div>
          <blockquote className="text-4xl md:text-6xl text-slate-900 italic font-[family-name:var(--font-instrument)] tracking-tight">
            "Nothing happens without you."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
