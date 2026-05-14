'use client';

import Navbar from '@/components/journalist/Navbar';
import Hero from '@/components/journalist/Hero';
import HowItWorks from '@/components/journalist/HowItWorks';
import ProblemSection from '@/components/journalist/ProblemSection';
import ProductSection from '@/components/journalist/ProductSection';
import ImpactSection from '@/components/journalist/ImpactSection';
import StakesSection from '@/components/journalist/StakesSection';
import CTASection from '@/components/journalist/CTASection';

export default function JournalistPage() {
  return (
    <div className="relative w-full bg-[#f4f4f5] text-neutral-900 overflow-x-hidden font-sans">
      <Navbar />
      
      <main className="relative w-full flex flex-col">
        <Hero />
        <HowItWorks />
        <ProblemSection />
        <ProductSection />
        <ImpactSection />
        <StakesSection />
        <CTASection />
      </main>
    </div>
  );
}
