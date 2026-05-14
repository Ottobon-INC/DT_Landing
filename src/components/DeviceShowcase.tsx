'use client';

import { motion } from 'framer-motion';
import { Smartphone, Laptop, Tablet, ArrowRight, MessageSquare, Briefcase, Activity, RefreshCw } from 'lucide-react';

export default function DeviceShowcase() {
  const activities = [
    { text: "replying to messages", icon: <MessageSquare className="w-4 h-4" /> },
    { text: "managing workflows", icon: <Briefcase className="w-4 h-4" /> },
    { text: "handling requests", icon: <Activity className="w-4 h-4" /> },
    { text: "updating systems", icon: <RefreshCw className="w-4 h-4" /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      {/* Editorial Dot Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-black font-[family-name:var(--font-jakarta)]"
          >
            Anywhere, anytime.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[12px] font-bold uppercase tracking-[0.5em] text-indigo-600 font-[family-name:var(--font-jakarta)]"
          >
            Your twin works across all your devices
          </motion.p>
        </div>

        {/* Device Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-12">
          
          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="w-[240px] h-[480px] bg-black rounded-[2.5rem] p-3 border-[6px] border-gray-900 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-20" />
              <div className="h-full bg-gray-50 rounded-[1.8rem] flex flex-col p-6 pt-10">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl mb-6 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-24 bg-gray-200 rounded-full" />
                  <div className="h-2 w-32 bg-gray-100 rounded-full" />
                  <div className="mt-8 space-y-3">
                    <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-[10px] font-bold uppercase tracking-wider text-indigo-600">Active Node</div>
                    <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-[10px] font-bold uppercase tracking-wider text-gray-400">Syncing...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mobile Unit</span>
            </div>
          </motion.div>

          {/* Laptop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-20"
          >
            <div className="w-full max-w-[600px] flex flex-col items-center">
              <div className="relative w-[320px] md:w-[500px] aspect-[16/10] bg-black rounded-xl p-3 border-[8px] border-gray-900 shadow-2xl overflow-hidden group">
                <div className="h-full bg-white rounded-lg flex overflow-hidden">
                  <div className="w-12 bg-gray-900 flex flex-col items-center py-6 gap-4">
                    <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                      <Laptop className="w-3 h-3 text-white" />
                    </div>
                    <div className="w-4 h-1 bg-gray-700 rounded-full" />
                    <div className="w-4 h-1 bg-gray-700 rounded-full" />
                  </div>
                  <div className="flex-1 p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-3 w-32 bg-gray-100 rounded-full" />
                      <div className="w-8 h-8 rounded-full bg-indigo-50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-gray-50 rounded-2xl border border-gray-100 p-4">
                        <div className="w-6 h-6 bg-indigo-100 rounded-lg mb-2" />
                        <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
                      </div>
                      <div className="h-24 bg-gray-50 rounded-2xl border border-gray-100 p-4">
                        <div className="w-6 h-6 bg-violet-100 rounded-lg mb-2" />
                        <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[110%] h-3 bg-gray-900 rounded-b-xl relative" />
            </div>
            <div className="mt-8 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Desktop Workstation</span>
            </div>
          </motion.div>

          {/* Tablet */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="w-[280px] h-[380px] bg-black rounded-[2rem] p-3 border-[6px] border-gray-900 shadow-2xl relative overflow-hidden group">
              <div className="h-full bg-gray-50 rounded-[1.4rem] flex flex-col p-8">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl mb-8 flex items-center justify-center">
                  <Tablet className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-6">
                  <div className="h-3 w-full bg-gray-200 rounded-full" />
                  <div className="h-3 w-3/4 bg-gray-100 rounded-full" />
                  <div className="mt-12 grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="aspect-square bg-white border border-gray-100 rounded-lg shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Portable Hub</span>
            </div>
          </motion.div>

        </div>

        {/* Activity List Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-gray-100 pt-12 max-w-5xl mx-auto">
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-[0.2em]">Device activities:</h3>
            <div className="space-y-4">
              {activities.map((activity, i) => (
                <motion.div 
                  key={activity.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 bg-gray-50 rounded-lg text-indigo-400">
                      {activity.icon}
                    </span>
                    <span className="text-lg font-bold text-gray-800 lowercase tracking-tight">
                      {activity.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <div className="w-12 h-px bg-indigo-600 mb-8" />
            <blockquote className="text-3xl md:text-5xl font-normal text-black leading-tight max-w-2xl font-[family-name:var(--font-instrument)] italic">
              "Your twin can work here without you."
            </blockquote>
          </div>

        </div>

      </div>
    </section>
  );
}
