'use client';

import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import { useState, useRef, useMemo } from 'react';
import { Brain, Zap, Rocket, ArrowRight } from 'lucide-react';

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

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
    key: 'capture',
    title: 'Capture',
    subtitle: 'Absorb Expertise',
    description: 'Your knowledge, decisions, and instincts — absorbed into a living digital model that preserves every nuance.',
    icon: Brain,
    color: '#6366f1',
    glowColor: 'rgba(99, 102, 241, 0.35)',
  },
  {
    key: 'channel',
    title: 'Channel',
    subtitle: 'Route Deterministically',
    description: 'Deterministic routing ensures your AI twin responds exactly as you would — no hallucination, no drift.',
    icon: Zap,
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.35)',
  },
  {
    key: 'amplify',
    title: 'Amplify',
    subtitle: 'Scale Without Dilution',
    description: 'Multiply your expertise across infinite parallel interactions without losing fidelity or authenticity.',
    icon: Rocket,
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.35)',
  },
];

// Generate deterministic particle positions
function generateParticles(count: number) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 120 + (i % 4) * 40;
    particles.push({
      id: i,
      angle,
      radius,
      size: 2 + (i % 3),
      speed: 15 + (i % 5) * 8,
      delay: i * 0.4,
    });
  }
  return particles;
}

export default function HarnessingAI() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const particles = useMemo(() => generateParticles(24), []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(latest);
  });

  // Phase index: 0, 1, 2
  const phaseIndex = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2;
  const phaseProgress = progress < 0.33
    ? progress / 0.33
    : progress < 0.66
      ? (progress - 0.33) / 0.33
      : (progress - 0.66) / 0.34;

  const currentPhase = phases[phaseIndex];

  // Interpolated glow color
  const glowOpacity = clamp(0.15 + phaseProgress * 0.25, 0, 0.5);

  // Central mesh scale based on phase
  const meshScale = phaseIndex === 0
    ? lerp(0.7, 1, phaseProgress)
    : phaseIndex === 1
      ? 1
      : lerp(1, 1.2, phaseProgress);

  // Central mesh rotation
  const meshRotation = progress * 360;

  // Particle orbit radius modifier
  const orbitModifier = phaseIndex === 0
    ? lerp(1.8, 1, phaseProgress)  // converge inward
    : phaseIndex === 1
      ? 1                           // stable
      : lerp(1, 1.6, phaseProgress); // expand outward

  // Number of visible radial lines in mesh
  const meshLines = phaseIndex === 0
    ? Math.floor(lerp(2, 6, phaseProgress))
    : phaseIndex === 1
      ? 6
      : Math.floor(lerp(6, 12, phaseProgress));

  // Ring count for amplify phase
  const ringCount = phaseIndex === 2 ? Math.floor(lerp(1, 4, phaseProgress)) : 1;

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#08080a]">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Phase-colored Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-[150px]"
          style={{
            backgroundColor: currentPhase.color,
            opacity: glowOpacity,
            transition: 'background-color 0.8s ease-out, opacity 0.5s ease-out',
          }}
        />

        {/* Secondary Glow Layer */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none blur-[80px]"
          style={{
            backgroundColor: currentPhase.color,
            opacity: glowOpacity * 0.6,
            transition: 'background-color 0.8s ease-out',
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Phase Text */}
          <div className="flex-1 max-w-lg relative z-20">
            {/* Section Title */}
            <div className="mb-10">
              <h2
                className="text-4xl md:text-6xl font-black tracking-tighter font-[family-name:var(--font-jakarta)] bg-clip-text text-transparent leading-tight"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                  filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.3))',
                }}
              >
                Harnessing the AI.
              </h2>
              <p className="text-sm text-white/30 font-medium mt-3 tracking-wide font-[family-name:var(--font-jakarta)]">
                Your expertise, amplified. Not replaced.
              </p>
            </div>

            {/* Phase Indicator Dots */}
            <div className="flex items-center gap-3 mb-12">
              {phases.map((p, i) => (
                <div key={p.key} className="flex items-center gap-3">
                  <div
                    className="relative flex items-center justify-center"
                    style={{ transition: 'all 0.5s ease-out' }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: i <= phaseIndex ? p.color : 'rgba(255,255,255,0.15)',
                        boxShadow: i === phaseIndex ? `0 0 12px ${p.color}` : 'none',
                        transition: 'all 0.5s ease-out',
                      }}
                    />
                    {i === phaseIndex && (
                      <div
                        className="absolute w-5 h-5 rounded-full animate-ping"
                        style={{
                          borderColor: p.color,
                          border: `1px solid ${p.color}`,
                          opacity: 0.4,
                        }}
                      />
                    )}
                  </div>
                  {i < phases.length - 1 && (
                    <div
                      className="w-12 h-px"
                      style={{
                        backgroundColor: i < phaseIndex ? phases[i + 1].color : 'rgba(255,255,255,0.08)',
                        transition: 'background-color 0.5s ease-out',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Phase Content */}
            <div className="relative min-h-[240px]">
              {phases.map((phase, i) => {
                const isActive = i === phaseIndex;
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.key}
                    className="absolute inset-0"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateY(0)' : i < phaseIndex ? 'translateY(-30px)' : 'translateY(30px)',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                  >
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor: `${phase.color}20`,
                          border: `1px solid ${phase.color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: phase.color }} />
                      </div>
                      <div>
                        <h3
                          className="text-4xl md:text-5xl font-black tracking-tighter font-[family-name:var(--font-jakarta)]"
                          style={{ color: phase.color }}
                        >
                          {phase.title}.
                        </h3>
                      </div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg text-white/70 font-semibold mb-4 font-[family-name:var(--font-jakarta)]">
                      {phase.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed max-w-md font-[family-name:var(--font-jakarta)]">
                      {phase.description}
                    </p>

                    {/* Phase number */}
                    <div className="mt-8 flex items-center gap-3">
                      <span
                        className="text-[10px] font-black uppercase tracking-[0.2em]"
                        style={{ color: `${phase.color}80` }}
                      >
                        Phase {String(i + 1).padStart(2, '0')} / 03
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Animated Visualization */}
          <div className="flex-1 flex items-center justify-center relative" style={{ minHeight: 420 }}>
            {/* Central SVG Visualization */}
            <svg
              viewBox="-250 -250 500 500"
              className="w-[360px] h-[360px] md:w-[420px] md:h-[420px]"
              style={{
                transform: `scale(${meshScale})`,
                transition: 'transform 0.6s ease-out',
              }}
            >
              <defs>
                <filter id="harness-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="harness-glow-lg">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <radialGradient id="meshGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={currentPhase.color} stopOpacity="0.15" />
                  <stop offset="100%" stopColor={currentPhase.color} stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background radial fill */}
              <circle cx="0" cy="0" r="200" fill="url(#meshGrad)" style={{ transition: 'all 0.8s' }} />

              {/* Concentric rings */}
              {Array.from({ length: ringCount }).map((_, ri) => (
                <circle
                  key={`ring-${ri}`}
                  cx="0" cy="0"
                  r={60 + ri * 50}
                  fill="none"
                  stroke={currentPhase.color}
                  strokeWidth="0.8"
                  strokeDasharray="4 8"
                  opacity={0.2 + ri * 0.05}
                  style={{
                    transition: 'stroke 0.8s ease-out, r 0.6s ease-out, opacity 0.6s',
                    transform: `rotate(${meshRotation * (0.3 + ri * 0.1)}deg)`,
                    transformOrigin: 'center',
                  }}
                />
              ))}

              {/* Radial lines from center */}
              {Array.from({ length: meshLines }).map((_, i) => {
                const angle = (i / meshLines) * Math.PI * 2;
                const len = phaseIndex === 2 ? 180 : 120;
                return (
                  <line
                    key={`radial-${i}`}
                    x1="0" y1="0"
                    x2={Math.cos(angle) * len}
                    y2={Math.sin(angle) * len}
                    stroke={currentPhase.color}
                    strokeWidth="0.6"
                    opacity={0.2}
                    style={{ transition: 'all 0.6s ease-out' }}
                  />
                );
              })}

              {/* Central core circle */}
              <circle
                cx="0" cy="0" r="20"
                fill={`${currentPhase.color}30`}
                stroke={currentPhase.color}
                strokeWidth="1.5"
                filter="url(#harness-glow)"
                style={{ transition: 'fill 0.8s, stroke 0.8s' }}
              />

              {/* Core inner dot */}
              <circle
                cx="0" cy="0" r="6"
                fill={currentPhase.color}
                style={{ transition: 'fill 0.8s' }}
              >
                <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Orbital Particles */}
              {particles.map((p) => {
                const r = p.radius * orbitModifier;
                const pathId = `orbit-${p.id}`;
                return (
                  <g key={p.id}>
                    {/* Orbit path (invisible) */}
                    <circle
                      id={pathId}
                      cx="0" cy="0" r={r}
                      fill="none" stroke="none"
                    />
                    {/* Particle */}
                    <circle
                      r={p.size}
                      fill={currentPhase.color}
                      opacity={phaseIndex === 0 ? clamp(phaseProgress * 1.5, 0.1, 0.7) : 0.5 + Math.random() * 0.3}
                      filter="url(#harness-glow)"
                      style={{ transition: 'fill 0.8s' }}
                    >
                      <animateMotion
                        dur={`${p.speed}s`}
                        repeatCount="indefinite"
                        begin={`${p.delay}s`}
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                    {/* Trailing glow */}
                    <circle
                      r={p.size * 2.5}
                      fill={currentPhase.color}
                      opacity={0.08}
                      filter="url(#harness-glow-lg)"
                      style={{ transition: 'fill 0.8s' }}
                    >
                      <animateMotion
                        dur={`${p.speed}s`}
                        repeatCount="indefinite"
                        begin={`${p.delay}s`}
                      >
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                );
              })}

              {/* Phase 2: Channel flow arrows */}
              {phaseIndex >= 1 && (
                <>
                  {[0, 1, 2, 3].map((i) => {
                    const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
                    const x1 = Math.cos(angle) * 30;
                    const y1 = Math.sin(angle) * 30;
                    const x2 = Math.cos(angle) * 100;
                    const y2 = Math.sin(angle) * 100;
                    return (
                      <g key={`flow-${i}`}>
                        <line
                          x1={x1} y1={y1} x2={x2} y2={y2}
                          stroke={currentPhase.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          opacity={0.4}
                          strokeDasharray="6 4"
                          style={{ transition: 'stroke 0.8s' }}
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;-20"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </line>
                        {/* Endpoint node */}
                        <circle
                          cx={x2} cy={y2} r="5"
                          fill={`${currentPhase.color}40`}
                          stroke={currentPhase.color}
                          strokeWidth="1"
                          style={{ transition: 'all 0.8s' }}
                        />
                      </g>
                    );
                  })}
                </>
              )}

              {/* Phase 3: Amplify burst rings */}
              {phaseIndex === 2 && (
                <>
                  {[140, 170, 200].map((r, i) => (
                    <circle
                      key={`burst-${i}`}
                      cx="0" cy="0" r={r}
                      fill="none"
                      stroke={currentPhase.color}
                      strokeWidth="1"
                      opacity={clamp(phaseProgress - i * 0.15, 0, 0.3)}
                      style={{ transition: 'stroke 0.8s, opacity 0.4s' }}
                    >
                      <animate
                        attributeName="r"
                        values={`${r};${r + 15};${r}`}
                        dur={`${3 + i}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values={`${0.3 - i * 0.05};${0.15};${0.3 - i * 0.05}`}
                        dur={`${3 + i}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </>
              )}
            </svg>

            {/* Phase Badge (bottom-right of visualization) */}
            <div
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex items-center gap-2"
              style={{
                opacity: progress > 0.05 ? 1 : 0,
                transition: 'opacity 0.5s',
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: currentPhase.color, transition: 'background-color 0.8s' }}
              />
              <span
                className="text-[9px] font-black uppercase tracking-[0.2em] font-[family-name:var(--font-jakarta)]"
                style={{ color: `${currentPhase.color}90`, transition: 'color 0.8s' }}
              >
                {currentPhase.key} active
              </span>
            </div>
          </div>
        </div>

        {/* Bottom: Closing Quote (appears late) */}
        <div
          className="absolute bottom-16 left-0 right-0 text-center px-6"
          style={{
            opacity: progress > 0.85 ? clamp((progress - 0.85) / 0.1, 0, 1) : 0,
            transform: progress > 0.85 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-white/10" />
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
              <div className="w-1 h-1 rounded-full bg-cyan-400 opacity-50" />
              <div className="w-1 h-1 rounded-full bg-cyan-400 opacity-25" />
            </div>
            <div className="h-px w-16 bg-white/10" />
          </div>
          <blockquote className="text-2xl md:text-4xl text-white/80 italic font-[family-name:var(--font-instrument)] tracking-tight">
            &ldquo;AI doesn&apos;t replace expertise. It makes it immortal.&rdquo;
          </blockquote>
        </div>

        {/* Scroll Hint (fades out as user scrolls) */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: progress < 0.05 ? 1 : 0,
            transition: 'opacity 0.4s',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="w-4 h-4 text-white/20 rotate-90" />
          </motion.div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/15">
            Scroll to explore
          </span>
        </div>
      </section>
    </div>
  );
}
