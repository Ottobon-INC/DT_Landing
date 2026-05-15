'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Menu, Search, Hash } from 'lucide-react';
import { ContainerScroll } from './ui/container-scroll-animation';

export default function HeroSection() {
  const categories = [
    "Development", "Data Science", "Humanities", "Analytics", "Science", "Design", "Law", "Health", "Marketing"
  ];

  const tags = [
    "dynamodb", "data modeling", "typescript", "aws", "database design", "machine learning", "education", "technology", "ai"
  ];

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] selection:bg-yellow-200">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md border-b border-gray-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-black">Digital Twin</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold px-6 py-2.5 rounded-full border border-gray-200 hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all">
            Join
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="pt-24 md:pt-40 px-6 max-w-7xl mx-auto">
        <ContainerScroll
          titleComponent={
            <div className="space-y-8 mb-20 mt-16 md:mt-0">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] text-gray-900 max-w-4xl mx-auto">
                Your reflection, <br />
                <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">working for you.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
                Experience the power of an AI that <span className="text-gray-900">thinks like you</span>,
                works like you, but <span className="text-indigo-600 font-bold">never sleeps.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <button className="flex items-center gap-2 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl shadow-indigo-500/20 active:scale-95">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          }
        >
          {/* Mockup Frame Content */}
          <div className="bg-[#F8F9FA] rounded-[2rem] p-4 md:p-8 border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden group h-full">
            {/* Sync Status Header */}
            <div className="mb-10 px-2 text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight ">
                Where your intuition meets infinite scale.
              </h2>
            </div>

            {/* Main Content Area - Housing the current SVG */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-inner h-[calc(100%-60px)]">
              <Image
                src="/images/hero_bg.svg"
                alt="Digital Twin Interface"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />

            </div>
          </div>
        </ContainerScroll>
      </main>

      {/* Subtle Background Glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-100/20 blur-[120px] -z-10 rounded-full" />

      <style jsx global>{`
        body {
          font-family: var(--font-jakarta), sans-serif;
          color: #1A1A1A;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
