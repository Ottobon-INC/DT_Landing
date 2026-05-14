'use client';

import { CheckCircle2, AlertTriangle, Cpu, ArrowRight } from 'lucide-react';
import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function ReflectionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const coreRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [coords, setCoords] = useState<{
    steps: { x: number; y: number }[];
    core: { left: { x: number; y: number }; right: { x: number; y: number } };
    cards: { x: number; y: number }[];
  } | null>(null);

  const steps = [
    { name: "Contextual Ingestion", color: "#64748b", slug: "contextual-ingestion" },
    { name: "Taxonomy Classification", color: "#6366f1", slug: "taxonomy-classification" },
    { name: "Conscious Logic Emulation", color: "#8b5cf6", slug: "conscious-logic-emulation" },
    { name: "Bounded Task Execution", color: "#06b6d4", slug: "bounded-task-execution" }
  ];

  const activityCards = [
    { label: "Knowledge Hub Traversal", status: "success" as const, color: "#6366F1", slug: "knowledge-hub-traversal" },
    { label: "Expert Persona Validated", status: "success" as const, color: "#8B5CF6", slug: "expert-persona-validated" },
    { label: "Execution Authorized", status: "success" as const, color: "#10B981", slug: "execution-authorized" },
    { label: "HITL Edge-Case Routing*", status: "warning" as const, color: "#F59E0B", slug: "hitl-edge-case-routing" }
  ];

  const updateCoords = useCallback(() => {
    if (!sectionRef.current || !coreRef.current) return;
    const cr = sectionRef.current.getBoundingClientRect();
    const core = coreRef.current.getBoundingClientRect();

    const stepCoords = stepRefs.current.map(ref => {
      if (!ref) return null;
      const r = ref.getBoundingClientRect();
      return { x: r.right - cr.left, y: r.top + r.height / 2 - cr.top };
    }).filter((c): c is { x: number; y: number } => c !== null);

    const cardCoords = cardRefs.current.map(ref => {
      if (!ref) return null;
      const r = ref.getBoundingClientRect();
      return { x: r.left - cr.left, y: r.top + r.height / 2 - cr.top };
    }).filter((c): c is { x: number; y: number } => c !== null);

    setCoords({
      steps: stepCoords,
      core: {
        left: { x: core.left - cr.left, y: core.top + core.height / 2 - cr.top },
        right: { x: core.right - cr.left, y: core.top + core.height / 2 - cr.top }
      },
      cards: cardCoords
    });
  }, []);

  useLayoutEffect(() => {
    updateCoords();
    const t1 = setTimeout(updateCoords, 200);
    const t2 = setTimeout(updateCoords, 1000);
    window.addEventListener('resize', updateCoords);
    return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener('resize', updateCoords); };
  }, [updateCoords]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center py-24 px-6 overflow-hidden bg-white"
    >
      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* SVG Connection Lines + Glowing Orbs */}
      {coords && (
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="orbGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="orbGlowLarge">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Left lines: step → core */}
            {coords.steps.map((start, i) => {
              const color = steps[i].color;
              const midX = start.x + (coords.core.left.x - start.x) / 2;
              const d = `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${coords.core.left.y} L ${coords.core.left.x} ${coords.core.left.y}`;
              const pathId = `leftPath${i}`;
              return (
                <g key={`sl-${i}`}>
                  {/* Track line */}
                  <path d={d} fill="none" stroke={`${color}12`} strokeWidth="1.5" />
                  {/* Drawn line */}
                  <path
                    d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"
                    opacity={0.6} filter="url(#lineGlow)"
                  />
                  {/* Hidden path for orb motion */}
                  <path id={pathId} d={d} fill="none" stroke="none" />
                  {/* Glowing orbs */}
                  <circle r="4" fill={color} opacity="0.9" filter="url(#orbGlow)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  <circle r="7" fill={color} opacity="0.25" filter="url(#orbGlowLarge)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  <circle r="3" fill={color} opacity="0.7" filter="url(#orbGlow)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3 + 1.25}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  <circle r="5" fill={color} opacity="0.15" filter="url(#orbGlowLarge)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin={`${i * 0.3 + 1.25}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}

            {/* Right lines: core → card */}
            {coords.cards.map((end, i) => {
              const color = activityCards[i].color;
              const midX = coords.core.right.x + (end.x - coords.core.right.x) / 2;
              const d = `M ${coords.core.right.x} ${coords.core.right.y} L ${midX} ${coords.core.right.y} L ${midX} ${end.y} L ${end.x} ${end.y}`;
              const pathId = `rightPath${i}`;
              return (
                <g key={`cl-${i}`}>
                  <path d={d} fill="none" stroke={`${color}12`} strokeWidth="1.5" />
                  <path
                    d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"
                    opacity={0.6} filter="url(#lineGlow)"
                  />
                  <path id={pathId} d={d} fill="none" stroke="none" />
                  <circle r="4" fill={color} opacity="0.9" filter="url(#orbGlow)">
                    <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.3 + 0.5}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  <circle r="7" fill={color} opacity="0.25" filter="url(#orbGlowLarge)">
                    <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.3 + 0.5}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  <circle r="3" fill={color} opacity="0.7" filter="url(#orbGlow)">
                    <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.3 + 1.5}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                  <circle r="5" fill={color} opacity="0.15" filter="url(#orbGlowLarge)">
                    <animateMotion dur="2s" repeatCount="indefinite" begin={`${i * 0.3 + 1.5}s`}>
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center w-full">
        <div className="text-center lg:text-left mb-16 w-full max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black font-[family-name:var(--font-jakarta)]">
            How It Works.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full max-w-6xl relative z-20">

          {/* Left Column: Input Steps */}
          <div className="flex flex-col gap-8 w-full lg:w-[280px]">
            {steps.map((step, i) => {
              const isHovered = hoveredStep === i;
              return (
                <div
                  key={step.name}
                  ref={el => { stepRefs.current[i] = el; }}
                  className="relative px-6 py-5 rounded-xl border bg-white flex flex-col items-center justify-center lg:justify-end cursor-pointer font-[family-name:var(--font-jakarta)] w-full group"
                  style={{
                    borderColor: isHovered ? step.color : `${step.color}40`,
                    backgroundColor: isHovered ? `${step.color}12` : `${step.color}06`,
                    transform: isHovered ? 'scale(1.06) translateX(6px)' : 'scale(1)',
                    boxShadow: isHovered
                      ? `0 8px 32px ${step.color}30, 0 0 0 1px ${step.color}20`
                      : `0 2px 12px ${step.color}15`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => router.push(`/capabilities/${step.slug}`)}
                >
                  <span
                    className="text-[11px] font-black uppercase tracking-[0.2em] text-center lg:text-right w-full"
                    style={{ color: isHovered ? step.color : `${step.color}cc`, transition: 'color 0.3s' }}
                  >
                    {step.name}
                  </span>

                  {/* Learn More Button */}
                  <div
                    className="flex items-center gap-1.5 mt-3 self-start"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                      transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
                      pointerEvents: isHovered ? 'auto' : 'none',
                    }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: step.color }}
                    >
                      Learn More
                    </span>
                    <ArrowRight className="w-3 h-3" style={{ color: step.color }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Twin Core */}
          <div className="relative flex-shrink-0 z-20 my-16 lg:my-0">
            <div
              ref={coreRef}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center cursor-default"
            >
              {/* Main Chamber */}
              <div
                className="absolute inset-0 border rounded-3xl bg-white flex flex-col items-center justify-center p-8 text-center z-30 overflow-hidden"
                style={{
                  borderColor: 'rgba(99,102,241,0.2)',
                  boxShadow: '0 20px 50px -12px rgba(79,70,229,0.15)',
                }}
              >
                {/* CPU Icon */}
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white relative z-10"
                  style={{ boxShadow: '0 4px 12px rgba(99,102,241,0.2)' }}
                >
                  <Cpu className="w-8 h-8" />
                </div>

                <h4 className="text-2xl font-black tracking-tighter mb-2 relative z-10 text-gray-900">TWIN CORE</h4>
                <div className="h-px w-12 bg-indigo-100 mb-4 relative z-10" />
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-400 relative z-10">
                  deterministic routing visualization
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50" />
              </div>

              {/* Energy Rings */}
              <div
                className="absolute -inset-4 border border-dashed rounded-[2.5rem] animate-[spin_40s_linear_infinite]"
                style={{ borderColor: 'rgba(99,102,241,0.12)' }}
              />
              <div
                className="absolute -inset-8 border rounded-[3rem] animate-[spin_60s_linear_infinite_reverse]"
                style={{ borderColor: 'rgba(139,92,246,0.06)' }}
              />

              {/* Radiation Pulse */}
              <div
                className="absolute -inset-12 bg-indigo-100 rounded-[4rem] blur-3xl -z-10"
                style={{ opacity: 0.12 }}
              />
            </div>
          </div>

          {/* Right Column: Output Activity Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-[320px] z-20">
            {activityCards.map((card, i) => {
              const isHovered = hoveredCard === i;
              return (
                <div
                  key={card.label}
                  ref={el => { cardRefs.current[i] = el; }}
                  className="flex flex-col p-5 rounded-2xl border bg-white overflow-hidden cursor-pointer w-full relative group"
                  style={{
                    borderColor: isHovered ? `${card.color}60` : `${card.color}30`,
                    transform: isHovered ? 'scale(1.04) translateX(8px)' : 'scale(1)',
                    boxShadow: isHovered
                      ? `0 12px 40px ${card.color}25, 0 0 0 1px ${card.color}15`
                      : `0 2px 12px ${card.color}12`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => router.push(`/capabilities/${card.slug}`)}
                >
                  {/* Top row: icon + label */}
                  <div className="flex items-center gap-4">
                    <div
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{
                        backgroundColor: isHovered ? `${card.color}20` : `${card.color}12`,
                        transition: 'background-color 0.3s',
                      }}
                    >
                      {card.status === 'success'
                        ? <CheckCircle2 className="w-4 h-4" style={{ color: card.color, transition: 'color 0.3s' }} />
                        : <AlertTriangle className="w-4 h-4" style={{ color: card.color, transition: 'color 0.3s' }} />
                      }
                    </div>
                    <span
                      className="text-sm font-bold tracking-tight flex-grow"
                      style={{ color: isHovered ? '#1e293b' : '#334155', transition: 'color 0.3s' }}
                    >
                      {card.label}
                    </span>
                  </div>

                  {/* Learn More Button */}
                  <div
                    className="flex items-center gap-1.5 mt-3"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                      maxHeight: isHovered ? '28px' : '0px',
                      marginTop: isHovered ? '12px' : '0px',
                      transition: 'opacity 0.25s ease-out, transform 0.25s ease-out, max-height 0.3s ease-out, margin-top 0.3s ease-out',
                      pointerEvents: isHovered ? 'auto' : 'none',
                      overflow: 'hidden',
                    }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: card.color }}
                    >
                      Learn More
                    </span>
                    <ArrowRight className="w-3 h-3" style={{ color: card.color }} />
                  </div>

                  {/* Left accent bar */}
                  <div
                    className="absolute bottom-0 left-0 h-full w-1"
                    style={{
                      backgroundColor: card.color,
                      opacity: isHovered ? 1 : 0.4,
                      transition: 'opacity 0.3s',
                    }}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
