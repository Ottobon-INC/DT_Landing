// 'use client';

// import { useState, useRef, useEffect, useCallback } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Cpu,
//   BarChart3,
//   RefreshCw,
//   Layers,
//   Brain,
//   Sparkles,
//   Database,
//   MessageCircle,
//   Shield,
// } from 'lucide-react';
// import type { LucideIcon } from 'lucide-react';

// /* ─────────────────────────────────────────────
//    Node Data
//    ───────────────────────────────────────────── */

// interface NodeData {
//   id: string;
//   label: string;
//   description: string;
//   icon: LucideIcon;
// }

// const LEFT_NODES: NodeData[] = [
//   { id: 'analytics', label: 'Analytics', description: 'Performance metrics', icon: BarChart3 },
//   { id: 'sync', label: 'Real-Time Sync', description: 'Live synchronization', icon: RefreshCw },
//   { id: 'context', label: 'Context Layer', description: 'Situational awareness', icon: Layers },
//   { id: 'reasoning', label: 'Reasoning', description: 'Decision intelligence', icon: Brain },
// ];

// const RIGHT_NODES: NodeData[] = [
//   { id: 'learning', label: 'Learning', description: 'Skill evolution', icon: Sparkles },
//   { id: 'memory', label: 'Memory Vault', description: 'Knowledge store', icon: Database },
//   { id: 'feedback', label: 'Feedback Loop', description: 'Improvement cycles', icon: MessageCircle },
//   { id: 'security', label: 'Security', description: 'Access governance', icon: Shield },
// ];

// const ALL_NODES = [...LEFT_NODES, ...RIGHT_NODES];

// /* ─────────────────────────────────────────────
//    Float Parameters (staggered per node)
//    ───────────────────────────────────────────── */

// function getFloatParams(index: number) {
//   const durations = [3.6, 4.1, 3.8, 4.5, 3.9, 4.3, 3.7, 4.0];
//   const distances = [6, 7, 5, 8, 7, 5, 6, 8];
//   return {
//     duration: durations[index % durations.length],
//     distance: distances[index % distances.length],
//   };
// }

// /* ─────────────────────────────────────────────
//    Path Particle (Light Beam)
//    ───────────────────────────────────────────── */

// function PathParticle({
//   pathD,
//   color,
//   delay = 0,
//   duration = 2.5,
// }: {
//   pathD: string;
//   color: string;
//   delay?: number;
//   duration?: number;
// }) {
//   return (
//     <motion.circle
//       r="3"
//       fill={color}
//       initial={{ offsetDistance: '0%', opacity: 0 }}
//       animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
//       transition={{
//         duration,
//         repeat: Infinity,
//         delay,
//         ease: 'linear',
//       }}
//       style={{
//         offsetPath: `path("${pathD}")`,
//         filter: `blur(1px) drop-shadow(0 0 6px ${color})`,
//       }}
//     />
//   );
// }

// /* ─────────────────────────────────────────────
//    Child Node Card
//    ───────────────────────────────────────────── */

// function ChildNode({
//   node,
//   index,
//   hoveredId,
//   onHover,
//   onLeave,
//   nodeRef,
// }: {
//   node: NodeData;
//   index: number;
//   hoveredId: string | null;
//   onHover: (id: string) => void;
//   onLeave: () => void;
//   nodeRef: (el: HTMLDivElement | null) => void;
// }) {
//   const { duration, distance } = getFloatParams(index);
//   const isHovered = hoveredId === node.id;
//   const Icon = node.icon;

//   return (
//     <div
//       ref={nodeRef}
//       className="relative flex-shrink-0"
//       style={{ width: 140 }}
//     >
//       {/* Inner floating visual — this is what animates;
//           the outer div stays in-flow for SVG anchoring */}
//       <motion.div
//         className={`
//           relative cursor-pointer rounded-2xl
//           bg-white/40 backdrop-blur-xl
//           border border-white/20
//           shadow-lg
//           px-4 py-6 flex flex-col items-center text-center
//           transition-[z-index] duration-0
//           ${isHovered ? 'z-50' : 'z-10'}
//         `}
//         animate={
//           isHovered
//             ? { y: 0 }
//             : { y: [0, -distance, 0] }
//         }
//         transition={
//           isHovered
//             ? { type: 'spring', stiffness: 300, damping: 20 }
//             : {
//                 duration,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }
//         }
//         whileHover={{
//           scale: 1.05,
//           y: 0,
//           boxShadow: '0 25px 60px -12px rgba(0,0,0,0.12)',
//           transition: { type: 'spring', stiffness: 300, damping: 20 },
//         }}
//         onHoverStart={() => onHover(node.id)}
//         onHoverEnd={onLeave}
//       >
//         {/* Icon */}
//         <div className="w-10 h-10 rounded-xl bg-indigo-50/80 flex items-center justify-center mb-3">
//           <Icon className="w-5 h-5 text-indigo-500" />
//         </div>

//         {/* Label */}
//         <h4 className="text-[11px] font-black text-slate-800 uppercase tracking-tight leading-tight mb-1">
//           {node.label}
//         </h4>

//         {/* Description */}
//         <p className="text-[10px] text-slate-400 font-medium leading-snug">
//           {node.description}
//         </p>

//         {/* Learn More — always in DOM, revealed via opacity */}
//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
//           transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//           className="mt-3 text-[10px] font-bold text-indigo-500 uppercase tracking-widest"
//         >
//           Learn More →
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    Center Core Card
//    ───────────────────────────────────────────── */

// function CenterCore({ coreRef }: { coreRef: React.RefObject<HTMLDivElement | null> }) {
//   return (
//     <div
//       ref={coreRef}
//       className="relative flex-shrink-0"
//       style={{ width: 200 }}
//     >
//       {/* Pulsing ring behind core */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
//         <motion.div
//           animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.2, 0.08] }}
//           transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute w-56 h-56 rounded-full border border-indigo-400/30"
//         />
//         <motion.div
//           animate={{ scale: [1, 1.4, 1], opacity: [0.05, 0.12, 0.05] }}
//           transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute w-64 h-64 rounded-full border border-indigo-300/20"
//         />
//       </div>

//       <motion.div
//         animate={{ y: [0, -6, 0] }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         }}
//         className="
//           relative rounded-3xl
//           bg-white/60 backdrop-blur-2xl
//           border border-white/30
//           shadow-2xl
//           px-6 py-10 flex flex-col items-center text-center
//           z-20
//         "
//       >
//         {/* Icon */}
//         <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center mb-5 shadow-lg shadow-indigo-500/30">
//           <Cpu className="w-7 h-7 text-white" />
//         </div>

//         {/* Title */}
//         <h3 className="text-base font-black text-slate-900 uppercase tracking-tight leading-tight mb-1">
//           Twin Core
//         </h3>

//         {/* Subtitle */}
//         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-4">
//           Autonomous Intelligence
//         </p>

//         {/* Badge */}
//         <div className="px-4 py-1.5 rounded-full bg-indigo-500/10 backdrop-blur-sm text-[8px] font-black text-indigo-600 uppercase tracking-[0.2em] border border-indigo-500/20">
//           Active ● Thinking
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    Main Component
//    ───────────────────────────────────────────── */

// export default function TwinCore() {
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [paths, setPaths] = useState<string[]>([]);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const coreRef = useRef<HTMLDivElement>(null);
//   const nodeRefs = useRef<(HTMLDivElement | null)[]>(new Array(ALL_NODES.length).fill(null));

//   const setNodeRef = useCallback(
//     (index: number) => (el: HTMLDivElement | null) => {
//       nodeRefs.current[index] = el;
//     },
//     []
//   );

//   /* ── Compute SVG paths after mount + on resize ── */
//   const computePaths = useCallback(() => {
//     const container = containerRef.current;
//     const core = coreRef.current;
//     if (!container || !core) return;

//     const cRect = container.getBoundingClientRect();
//     const kRect = core.getBoundingClientRect();
//     const cx = kRect.left + kRect.width / 2 - cRect.left;
//     const cy = kRect.top + kRect.height / 2 - cRect.top;

//     const newPaths: string[] = [];

//     nodeRefs.current.forEach((el) => {
//       if (!el) return;
//       const nRect = el.getBoundingClientRect();
//       const nx = nRect.left + nRect.width / 2 - cRect.left;
//       const ny = nRect.top + nRect.height / 2 - cRect.top;

//       // Control point: midpoint X, arced upward
//       const cpX = (nx + cx) / 2;
//       const arcHeight = 60 + Math.abs(nx - cx) * 0.15;
//       const cpY = Math.min(ny, cy) - arcHeight;

//       newPaths.push(`M ${nx} ${ny} Q ${cpX} ${cpY} ${cx} ${cy}`);
//     });

//     setPaths(newPaths);
//   }, []);

//   useEffect(() => {
//     // Initial computation after layout settles
//     const timer = setTimeout(computePaths, 100);

//     const observer = new ResizeObserver(() => computePaths());
//     if (containerRef.current) observer.observe(containerRef.current);

//     return () => {
//       clearTimeout(timer);
//       observer.disconnect();
//     };
//   }, [computePaths]);

//   return (
//     <section className="relative py-24 px-6 bg-[#FDFDFD] overflow-hidden font-[family-name:var(--font-jakarta)]">
//       {/* ── Dotted mesh background ── */}
//       <div
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
//           backgroundSize: '24px 24px',
//         }}
//       />

//       {/* ── Section header ── */}
//       <div className="text-center mb-16 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center"
//         >
//           <div className="px-5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[9px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-6">
//             System Architecture
//           </div>
//           <h2 className="text-7xl font-black tracking-tighter text-slate-900 mb-3">
//             Twin Core
//           </h2>
//           <p className="text-slate-400 text-base font-medium tracking-tight max-w-lg">
//             Eight subsystems orbiting one autonomous intelligence.
//           </p>
//         </motion.div>
//       </div>

//       {/* ── Diagram container ── */}
//       <div ref={containerRef} className="relative max-w-7xl mx-auto">
//         {/* ── SVG connection overlay ── */}
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
//           style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
//         >
//           <defs>
//             <radialGradient id="beamGlow">
//               <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
//               <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
//             </radialGradient>
//             <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
//               <feGaussianBlur stdDeviation="2" result="blur" />
//               <feComposite in="SourceGraphic" in2="blur" operator="over" />
//             </filter>
//           </defs>

//           {paths.map((pathD, i) => (
//             <g key={`path-group-${i}`}>
//               {/* Base path — subtle guide line */}
//               <path
//                 d={pathD}
//                 fill="none"
//                 stroke="#6366f1"
//                 strokeWidth="1.5"
//                 opacity="0.08"
//               />
//               {/* Light beam particles */}
//               <PathParticle pathD={pathD} color="#6366f1" delay={i * 0.35} duration={2.8} />
//               <PathParticle pathD={pathD} color="#818cf8" delay={i * 0.35 + 1.4} duration={2.8} />
//             </g>
//           ))}
//         </svg>

//         {/* ── Horizontal node strip ── */}
//         <div className="relative z-10 flex items-center justify-center gap-5">
//           {/* Left group */}
//           <div className="flex items-center gap-4">
//             {LEFT_NODES.map((node, i) => (
//               <ChildNode
//                 key={node.id}
//                 node={node}
//                 index={i}
//                 hoveredId={hoveredId}
//                 onHover={setHoveredId}
//                 onLeave={() => setHoveredId(null)}
//                 nodeRef={setNodeRef(i)}
//               />
//             ))}
//           </div>

//           {/* Center core */}
//           <CenterCore coreRef={coreRef} />

//           {/* Right group */}
//           <div className="flex items-center gap-4">
//             {RIGHT_NODES.map((node, i) => (
//               <ChildNode
//                 key={node.id}
//                 node={node}
//                 index={i + 4}
//                 hoveredId={hoveredId}
//                 onHover={setHoveredId}
//                 onLeave={() => setHoveredId(null)}
//                 nodeRef={setNodeRef(i + 4)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ── Placeholder export while full component is commented out ──
export default function TwinCore() {
  return null;
}
