'use client';

import { motion } from 'framer-motion';
import { GraduationCap, HeartPulse, Layers, CheckCircle2 } from 'lucide-react';

const specializations = [
  {
    title: "EDUCATION",
    icon: <GraduationCap className="w-5 h-5 text-indigo-600" />,
    items: ["Curriculum", "Student Flow", "Learning Ops"],
    color: "bg-indigo-50",
    borderColor: "border-indigo-100"
  },
  {
    title: "HEALTHCARE",
    icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
    items: ["Patient Flow", "Coordination", "Clinical Ops"],
    color: "bg-rose-50",
    borderColor: "border-rose-100"
  },
  {
    title: "SERVICES",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    items: ["Workflow Ops", "SLA Logic", "Delivery"],
    color: "bg-amber-50",
    borderColor: "border-amber-100"
  }
];

export default function SpecializationsSection() {
  return (
    <section className="py-24 px-6 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 font-[family-name:var(--font-jakarta)] "
          >
            Operational Twins, Ready for Deployment.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
           Trained on how real experts think, decide, and operate.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {specializations.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] bg-white border ${spec.borderColor} shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden`}
            >
              {/* Subtle Background Icon */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <div className="w-32 h-32">
                  {spec.icon}
                </div>
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-12 ${spec.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {spec.icon}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-8 tracking-wider">{spec.title}</h3>

                <div className="space-y-4 mb-10">
                  {spec.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Synced</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-slate-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-500 font-medium leading-relaxed italic">
            "Each twin adapts to the workflows, language, and operational behavior of its environment."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
