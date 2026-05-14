'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NeuralPath() {
  const svgRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const branch1Ref = useRef<SVGPathElement>(null);
  const branch2Ref = useRef<SVGPathElement>(null);
  const branch3Ref = useRef<SVGPathElement>(null);
  const mergeRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!path1Ref.current || !branch1Ref.current || !branch2Ref.current || !branch3Ref.current || !mergeRef.current) return;

    const paths = [path1Ref.current, branch1Ref.current, branch2Ref.current, branch3Ref.current, mergeRef.current];
    
    paths.forEach(path => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0.8
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    // 1. Hero to Split
    tl.to(path1Ref.current, { strokeDashoffset: 0, duration: 1 })
      // 2. Branches split simultaneously
      .to([branch1Ref.current, branch2Ref.current, branch3Ref.current], { 
        strokeDashoffset: 0, 
        duration: 0.8,
        stagger: 0.1
      }, "-=0.2")
      // 3. Merge back
      .to(mergeRef.current, { strokeDashoffset: 0, duration: 1 }, "-=0.2");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg 
        ref={svgRef}
        className="w-full h-[4000px] opacity-60" 
        viewBox="0 0 1000 4000" 
        fill="none" 
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <filter id="neural-wave" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="2" result="noise">
              <animate attributeName="baseFrequency" values="0.01 0.05;0.015 0.07;0.01 0.05" dur="10s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="1" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <g filter="url(#neural-wave)">
          {/* Path 1: Hero Start to Showcase Bottom */}
          <path
            ref={path1Ref}
            d="M 500,400 C 500,600 500,800 500,1200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
          />

          {/* Split Points at ~1200 */}
          {/* Branch 1 (Left) */}
          <path
            ref={branch1Ref}
            d="M 500,1200 C 500,1300 200,1400 200,1600 L 200,1900"
            stroke="#6366F1"
            strokeWidth="1.5"
          />

          {/* Branch 2 (Center) */}
          <path
            ref={branch2Ref}
            d="M 500,1200 C 500,1300 500,1400 500,1600 L 500,1900"
            stroke="#6366F1"
            strokeWidth="1.5"
          />

          {/* Branch 3 (Right) */}
          <path
            ref={branch3Ref}
            d="M 500,1200 C 500,1300 800,1400 800,1600 L 800,1900"
            stroke="#6366F1"
            strokeWidth="1.5"
          />

          {/* Merge Back at ~2200 */}
          <path
            ref={mergeRef}
            d="M 200,1900 C 200,2100 500,2100 500,2200 L 500,4000"
            stroke="#6366F1"
            strokeWidth="2"
          />
          <path
            d="M 500,1900 L 500,2200"
            stroke="#6366F1"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <path
            d="M 800,1900 C 800,2100 500,2100 500,2200"
            stroke="#6366F1"
            strokeWidth="2"
          />
        </g>
      </svg>

      {/* Floating Particles (CSS Animation) */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full blur-[1px] animate-pulse-neural"
            style={{
              left: '50%',
              top: `${800 + i * 500}px`,
              animationDelay: `${i * 1.5}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse-neural {
          0% { transform: scale(1) translateY(0); opacity: 0; }
          50% { transform: scale(1.5) translateY(100px); opacity: 0.8; }
          100% { transform: scale(1) translateY(200px); opacity: 0; }
        }
        .animate-pulse-neural {
          animation: pulse-neural 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
