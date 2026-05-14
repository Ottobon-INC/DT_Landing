'use client';

import { useParams, useRouter } from 'next/navigation';
import { getCapabilityBySlug, capabilities } from '@/utils/capabilitiesData';
import {
  ArrowLeft,
  Database,
  Layers,
  Brain,
  Shield,
  BookOpen,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const iconMap: Record<string, React.ElementType> = {
  ingestion: Database,
  taxonomy: Layers,
  logic: Brain,
  execution: Shield,
  knowledge: BookOpen,
  persona: UserCheck,
  authorized: CheckCircle2,
  hitl: AlertTriangle,
};

export default function CapabilityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const slug = typeof params.slug === 'string' ? params.slug : '';
  const capability = getCapabilityBySlug(slug);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!capability) {
    return (
      <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Capability Not Found</h1>
          <p className="text-gray-500 mb-8">The requested capability doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = iconMap[capability.icon] || Zap;

  // Find related capabilities (same type)
  const related = capabilities.filter(
    (c) => c.type === capability.type && c.slug !== capability.slug
  );

  return (
    <div
      className="min-h-screen bg-[#FDFDFD] font-[family-name:var(--font-jakarta)]"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {/* Dot Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-15"
          style={{ backgroundColor: capability.color }}
        />

        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            className="group flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-gray-700 transition-colors mb-12 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Overview
          </button>

          {/* Header */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            {/* Icon */}
            <div
              className="p-5 rounded-2xl text-white flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${capability.color}, ${capability.color}dd)`,
                boxShadow: `0 12px 40px ${capability.color}30`,
              }}
            >
              <Icon className="w-8 h-8" />
            </div>

            <div className="flex-grow">
              {/* Type badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
                  style={{
                    backgroundColor: `${capability.color}12`,
                    color: capability.color,
                  }}
                >
                  {capability.type === 'step' ? 'Pipeline Stage' : 'Activity Output'}
                </span>
                {capability.status && (
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
                    style={{
                      backgroundColor:
                        capability.status === 'success' ? '#10B98112' : '#F59E0B12',
                      color: capability.status === 'success' ? '#10B981' : '#F59E0B',
                    }}
                  >
                    {capability.status === 'success' ? '● Active' : '● Monitoring'}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
                {capability.name}
              </h1>
              <p className="text-lg text-gray-500 font-medium max-w-2xl leading-relaxed">
                {capability.tagline}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12" />

          {/* Description Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                {capability.description}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                Deep Dive
              </h2>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                {capability.longDescription}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
              Core Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {capability.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-transparent transition-all duration-300"
                  style={{
                    animationDelay: `${i * 100}ms`,
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease-out ${i * 100 + 300}ms, transform 0.5s ease-out ${i * 100 + 300}ms, border-color 0.3s, box-shadow 0.3s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 30px ${capability.color}15`;
                    e.currentTarget.style.borderColor = `${capability.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#f3f4f6';
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-sm font-black"
                    style={{
                      backgroundColor: `${capability.color}12`,
                      color: capability.color,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
              Technical Specifications
            </h2>
            <div
              className="p-8 rounded-2xl border border-gray-100 bg-white"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(249,250,251,1) 100%)',
              }}
            >
              <div className="space-y-4">
                {capability.technicalDetails.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: capability.color }}
                    />
                    <span className="text-sm text-gray-600 font-mono leading-relaxed">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Capabilities */}
          {related.length > 0 && (
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
                Related {capability.type === 'step' ? 'Pipeline Stages' : 'Activities'}
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((rel) => {
                  const RelIcon = iconMap[rel.icon] || Zap;
                  return (
                    <button
                      key={rel.slug}
                      onClick={() => router.push(`/capabilities/${rel.slug}`)}
                      className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-transparent text-left transition-all duration-300 cursor-pointer"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 8px 30px ${rel.color}15`;
                        e.currentTarget.style.borderColor = `${rel.color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = '#f3f4f6';
                      }}
                    >
                      <div
                        className="p-2.5 rounded-xl flex-shrink-0"
                        style={{
                          backgroundColor: `${rel.color}12`,
                          color: rel.color,
                        }}
                      >
                        <RelIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-sm font-bold text-gray-900 truncate">{rel.name}</h3>
                        <p className="text-xs text-gray-400 truncate">{rel.tagline}</p>
                      </div>
                      <ChevronRight
                        className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-all group-hover:translate-x-0.5 flex-shrink-0"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Spacer */}
          <div className="h-24" />
        </div>
      </div>
    </div>
  );
}
