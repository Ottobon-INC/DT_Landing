import HeroSection from '@/components/HeroSection';
import DeviceShowcase from '@/components/DeviceShowcase';
import ReflectionSection from '@/components/ReflectionSection';
import WatchItWork from '@/components/WatchItWork';
import SpecializationsSection from '@/components/SpecializationsSection';
import JournalistFramework from '@/components/JournalistFramework';
import NeuralPath from '@/components/NeuralPath';
import ExpansionSection from '@/components/ExpansionSection';
import ControlSection from '@/components/ControlSection';
import DeploySection from '@/components/DeploySection';
import HarnessingAI from '@/components/HarnessingAI';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#FDFDFD]">
        {/* Cinematic Neural Overlay */}
        <NeuralPath />
        
        <div className="relative z-10">
          <HeroSection />
          <ReflectionSection />
          <DeviceShowcase />
          <WatchItWork />
          <JournalistFramework />
          <SpecializationsSection />
          <HarnessingAI />
          <ExpansionSection />
          <ControlSection />
          <DeploySection />
        </div>
      </main>
    </SmoothScroll>
  );
}
