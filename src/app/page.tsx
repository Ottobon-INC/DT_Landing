import HeroSection from '@/components/HeroSection';
import DeviceShowcase from '@/components/DeviceShowcase';
import ReflectionSection from '@/components/ReflectionSection';
import DeputyLayer from '@/components/DeputyLayer';
import TwinCore from '@/components/TwinCore';
import WatchItWork from '@/components/WatchItWork';
import SpecializationsSection from '@/components/SpecializationsSection';
import JournalistFramework from '@/components/JournalistFramework';
import NeuralPath from '@/components/NeuralPath';
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
          {/* <ReflectionSection /> */}
          <DeviceShowcase />
          <DeputyLayer />
          <TwinCore />
          <WatchItWork />
          <JournalistFramework />
          <SpecializationsSection />
          <HarnessingAI />
          <ControlSection />
          <DeploySection />
        </div>
      </main>
    </SmoothScroll>
  );
}
