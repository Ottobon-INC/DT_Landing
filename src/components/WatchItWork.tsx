'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { User, Cpu, CheckCircle2, Clock, Loader2, Zap, TrendingUp, Activity, Sparkles } from 'lucide-react';

const modeTasks = {
  education: [
    'Grade research papers', 'Generate lesson plans', 'Process student inquiries',
    'Update curriculum drafts', 'Analyze student performance', 'Draft faculty emails',
    'Compile tutoring notes', 'Process enrollment forms', 'Prepare weekly syllabus',
    'Route student support', 'Generate progress reports', 'Coordinate dept sync'
  ],
  healthcare: [
    'Review lab results', 'Schedule patient follow-up', 'Update medical charts',
    'Verify insurance coverage', 'Analyze patient data', 'Draft specialist referrals',
    'Compile clinical notes', 'Process pharmacy requests', 'Prepare patient summaries',
    'Route emergency triage', 'Generate diagnostic reports', 'Coordinate surgical sync'
  ],
  services: [
    'Respond to client inquiry', 'Schedule team meeting', 'Review document draft',
    'Update project status', 'Analyze performance data', 'Draft email response',
    'Compile research notes', 'Process feedback form', 'Prepare weekly summary',
    'Route support ticket', 'Generate progress report', 'Coordinate team sync',
  ]
};

const taskColors = ['#6366f1','#8b5cf6','#06b6d4','#10b981','#f59e0b','#ec4899','#6366f1','#8b5cf6','#06b6d4','#10b981','#f59e0b','#ec4899'];

type Mode = 'education' | 'healthcare' | 'services';

interface Task { id: number; label: string; progress: number; status: 'processing'|'completed'; duration: number; color: string; }

export default function WatchItWork() {
  const [activeMode, setActiveMode] = useState<Mode>('education');
  const [soloTask, setSoloTask] = useState<Task>({ id: 0, label: modeTasks.education[0], progress: 0, status: 'processing', duration: 4000, color: '#94a3b8' });
  const [soloCompleted, setSoloCompleted] = useState(0);
  const [soloIdx, setSoloIdx] = useState(0);
  const [twinTasks, setTwinTasks] = useState<Task[]>([]);
  const [twinCompleted, setTwinCompleted] = useState(0);
  const [twinCycle, setTwinCycle] = useState(0);
  const [flashingIds, setFlashingIds] = useState<Set<number>>(new Set());

  const BATCH_SIZE = 10;

  const spawnTwin = useCallback(() => {
    const labels = modeTasks[activeMode];
    const off = (twinCycle * BATCH_SIZE) % labels.length;
    setTwinTasks(Array.from({ length: BATCH_SIZE }, (_, i) => ({
      id: Date.now() + i, label: labels[(off + i) % labels.length],
      progress: 0, status: 'processing', duration: 400 + Math.random() * 800,
      color: taskColors[(off + i) % taskColors.length],
    })));
  }, [twinCycle, activeMode]);

  // Solo: slow single task
  useEffect(() => {
    const iv = setInterval(() => {
      setSoloTask(prev => {
        const labels = modeTasks[activeMode];
        if (prev.progress >= 100) {
          const next = (soloIdx + 1) % labels.length;
          setSoloIdx(next);
          setSoloCompleted(c => c + 1);
          return { id: Date.now(), label: labels[next], progress: 0, status: 'processing', duration: 3000, color: '#94a3b8' };
        }
        return { ...prev, progress: Math.min(prev.progress + 1.8, 100) };
      });
    }, 50);
    return () => clearInterval(iv);
  }, [soloIdx, activeMode]);

  // Mode Reset
  useEffect(() => {
    const labels = modeTasks[activeMode];
    setSoloTask({ id: Date.now(), label: labels[0], progress: 0, status: 'processing', duration: 3000, color: '#94a3b8' });
    setSoloCompleted(0);
    setSoloIdx(0);
    setTwinCompleted(0);
    setTwinCycle(0);
    setTwinTasks([]);
    setFlashingIds(new Set());
    spawnTwin();
  }, [activeMode, spawnTwin]);

  // Twin: spawn
  useEffect(() => { spawnTwin(); }, [spawnTwin]);

  // Twin: fast parallel progress
  useEffect(() => {
    const iv = setInterval(() => {
      setTwinTasks(prev => {
        let allDone = true;
        const updated = prev.map(t => {
          if (t.progress >= 100) {
            if (t.status !== 'completed') {
              setFlashingIds(s => new Set(s).add(t.id));
              setTimeout(() => setFlashingIds(s => { const n = new Set(s); n.delete(t.id); return n; }), 400);
            }
            return { ...t, status: 'completed' as const };
          }
          allDone = false;
          return { ...t, progress: Math.min(t.progress + 100 / (t.duration / 25), 100) };
        });
        if (allDone && prev.length > 0 && prev.some(t => t.status === 'processing')) {
          setTimeout(() => { 
            setTwinCompleted(c => c + BATCH_SIZE); 
            setTwinCycle(c => c + 1); 
          }, 300);
        }
        return updated;
      });
    }, 25);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => { if (twinCycle > 0) spawnTwin(); }, [twinCycle, spawnTwin]);

  const multiplier = soloCompleted > 0 ? Math.max(Math.round(twinCompleted / soloCompleted), 2) : twinCompleted > 0 ? Math.min(Math.round(twinCompleted / 4), 14) : 14;

  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-6xl mx-auto relative z-10 scale-[0.9] origin-top transform-gpu">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 font-[family-name:var(--font-jakarta)]"
          >
            Watch it work.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-sm text-slate-400 font-medium mt-4 tracking-wide mb-8">
            One you, limited. One twin, limitless.
          </motion.p>

          {/* Industry Switcher */}
          <div className="flex justify-center mb-10">
            <div className="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              {(['education', 'healthcare', 'services'] as Mode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                    activeMode === mode
                      ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* ─── LEFT: Without Twin ─── */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative">
            <div className="rounded-3xl border border-slate-150 bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 h-full relative overflow-hidden">
              {/* Faded overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(0,0,0,0.015)_24px,rgba(0,0,0,0.015)_25px)] pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <motion.div animate={{ scale: [1, 0.95, 1] }} transition={{ duration: 3, repeat: Infinity }}
                      className="w-11 h-11 rounded-full bg-slate-200 border-2 border-slate-300 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-black text-slate-600 uppercase tracking-wider font-[family-name:var(--font-jakarta)]">Without Twin</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sequential · Bottlenecked</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
                    <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest">1× speed</span>
                  </div>
                </div>

                {/* Active Task */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
                        <Loader2 className="w-4 h-4 text-slate-400" />
                      </motion.div>
                      <span className="text-xs font-bold text-slate-700 truncate max-w-[180px]">{soloTask.label}</span>
                    </div>
                    <span className="text-[11px] font-black text-slate-400 tabular-nums">{Math.round(soloTask.progress)}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-slate-300 to-slate-400 rounded-full transition-all duration-75" style={{ width: `${soloTask.progress}%` }} />
                  </div>
                </div>

                {/* Queue */}
                <div className="space-y-2 mb-6">
                  {(() => {
                    const labels = modeTasks[activeMode];
                    return labels.slice((soloIdx + 1) % labels.length, (soloIdx + 1) % labels.length + 4).map((label, i) => (
                      <motion.div key={`q-${i}-${activeMode}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-slate-100">
                        <Clock className="w-3 h-3 text-slate-300 flex-shrink-0" />
                        <span className="text-[11px] text-slate-400 font-medium truncate">{label}</span>
                        <span className="text-[8px] font-black text-slate-300 uppercase ml-auto flex-shrink-0 tracking-wider">Waiting</span>
                      </motion.div>
                    ));
                  })()}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-200/60">
                  <div className="flex items-baseline gap-2">
                    <motion.span key={soloCompleted} initial={{ scale: 1.3, color: '#6366f1' }} animate={{ scale: 1, color: '#334155' }}
                      className="text-4xl font-black tabular-nums">{soloCompleted}</motion.span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">done</span>
                  </div>
                  <div className="h-8 w-px bg-slate-100" />
                  <div className="text-center">
                    <div className="text-lg font-black text-slate-400 tabular-nums">11</div>
                    <span className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">backlog</span>
                  </div>
                  <div className="h-8 w-px bg-slate-100" />
                  <div className="text-right">
                    <div className="text-lg font-black text-slate-400 tabular-nums">~3s</div>
                    <span className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">per task</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT: With Twin ─── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="relative">
            {/* Animated Glow Ring */}
            <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-3 bg-gradient-to-br from-indigo-200/40 via-violet-200/30 to-cyan-200/40 rounded-[2rem] blur-2xl -z-10" />
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-indigo-400/20 via-violet-400/10 to-cyan-400/20 -z-[5]" />

            <div className="rounded-3xl bg-white p-8 h-full relative overflow-hidden">
              {/* Shimmer sweep */}
              <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-indigo-50/60 to-transparent skew-x-[-20deg] pointer-events-none z-0" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <motion.div animate={{ boxShadow: ['0 0 0 0 rgba(99,102,241,0.3)', '0 0 0 8px rgba(99,102,241,0)', '0 0 0 0 rgba(99,102,241,0.3)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider font-[family-name:var(--font-jakarta)]">With Twin</h3>
                      <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest">Parallel · Unlimited</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">8× speed</span>
                  </div>
                </div>

                {/* Parallel Tasks */}
                <div className="space-y-2 mb-6">
                  <AnimatePresence mode="popLayout">
                    {twinTasks.map((task) => {
                      const isDone = task.progress >= 100;
                      const isFlashing = flashingIds.has(task.id);
                      return (
                        <motion.div key={task.id}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{
                            opacity: 1, y: 0, scale: 1,
                            backgroundColor: isFlashing ? `${task.color}15` : isDone ? '#f0fdf4' : '#ffffff',
                          }}
                          exit={{ opacity: 0, scale: 0.9, x: 20 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                          className="flex items-center gap-3 p-3 rounded-xl border"
                          style={{ borderColor: isDone ? '#10b98130' : `${task.color}25` }}
                        >
                          {isDone ? (
                            <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 15 }}>
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            </motion.div>
                          ) : (
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                              <Loader2 className="w-4 h-4 flex-shrink-0" style={{ color: task.color }} />
                            </motion.div>
                          )}
                          <span className="text-[11px] font-semibold truncate flex-grow"
                            style={{ color: isDone ? '#059669' : '#334155' }}>{task.label}</span>
                          <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden flex-shrink-0">
                            <motion.div className="h-full rounded-full"
                              style={{ width: `${task.progress}%`, backgroundColor: isDone ? '#10b981' : task.color }}
                              transition={{ duration: 0.05 }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-5 border-t border-indigo-50">
                  <div className="flex items-baseline gap-2">
                    <motion.span key={twinCompleted} initial={{ scale: 1.4, color: '#6366f1' }} animate={{ scale: 1, color: '#0f172a' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="text-4xl font-black tabular-nums">{twinCompleted}</motion.span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">done</span>
                  </div>
                  <div className="h-8 w-px bg-indigo-50" />
                  <div className="text-center">
                    <div className="text-lg font-black text-indigo-400 tabular-nums">12</div>
                    <span className="text-[9px] text-indigo-300 font-bold uppercase tracking-widest">bandwidth</span>
                  </div>
                  <div className="h-8 w-px bg-indigo-50" />
                  <div className="text-right">
                    <div className="text-lg font-black text-emerald-600 tabular-nums flex items-center gap-1 justify-end">
                      <Zap className="w-4 h-4" />~0.5s
                    </div>
                    <span className="text-[9px] text-indigo-300 font-bold uppercase tracking-widest">per task</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
            <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-center">
              <motion.div key={multiplier} initial={{ scale: 1.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-6xl md:text-7xl font-black bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-500 bg-clip-text text-transparent font-[family-name:var(--font-jakarta)]"
                style={{ filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.2))' }}>
                {multiplier}x
              </motion.div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Throughput</p>
            </motion.div>
            <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
                <motion.span key={twinCompleted - soloCompleted} initial={{ scale: 1.3 }} animate={{ scale: 1 }}
                  className="text-4xl font-black text-slate-900 tabular-nums">{Math.max(0, twinCompleted - soloCompleted)}</motion.span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">More tasks done</p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <Activity className="w-6 h-6 text-indigo-500" />
                <span className="text-3xl font-black text-slate-900">100%</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-2">Utilization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
