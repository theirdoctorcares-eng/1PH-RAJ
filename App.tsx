import React, { useState, useEffect, useCallback } from 'react';
import { AtmosphericBackground } from './components/AtmosphericBackground';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FirstPrinciplesMeaningSection } from './components/FirstPrinciplesMeaningSection';
import { FirstPrinciplesSection } from './components/FirstPrinciplesSection';
import { ProblemSection } from './components/ProblemSection';
import { HealthVerticalSection } from './components/HealthVerticalSection';
import { CoreHealthAreasSection } from './components/CoreHealthAreasSection';
import { MasterclassSection } from './components/MasterclassSection';
import { LabEducationSection } from './components/LabEducationSection';
import { ExpertsSection } from './components/ExpertsSection';
import { PodcastSection } from './components/PodcastSection';
import { VisionSection } from './components/VisionSection';
import { BrandStatementSection } from './components/BrandStatementSection';
import { Footer } from './components/Footer';

export default function App() {
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  // Mouse move handler for calm atmospheric parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
    const y = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
    setMouseParallax({ x, y });
  }, []);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-[#111111] overflow-x-hidden selection:bg-[#111111] selection:text-[#FAFAF7]">
      {/* Calm atmospheric drifting sky & soft light background with mouse parallax */}
      <AtmosphericBackground mouseParallax={mouseParallax} />

      {/* Minimal Sticky Navigation: Learn, Health, Masterclasses, Experts, About */}
      <Navigation
        onStartLearning={() => handleScrollTo('masterclasses')}
        onExploreHealth={() => handleScrollTo('health')}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 01: Hero - Simple, Spacious: 1PH / First Principles of Health / Understand your health. Connect the dots. */}
        <HeroSection
          onStartLearning={() => handleScrollTo('masterclasses')}
          onScrollDown={() => handleScrollTo('first-principles')}
        />

        {/* 02: First Principles Explanation - What does “First Principles” mean? / WHAT -> WHY -> CONNECT */}
        <FirstPrinciplesMeaningSection />

        {/* 03: Applying to Health - What if we approached health the same way? / Understand -> Decide -> Act */}
        <FirstPrinciplesSection />

        {/* 04: The Healthcare Gap - Healthcare gives you information. Understanding is different. */}
        <ProblemSection />

        {/* 04: 1PH Health - Understand your health / Don't just manage your health. Understand it. */}
        <HealthVerticalSection
          onExploreTopic={() => handleScrollTo('health-areas')}
        />

        {/* 05: Four Core Health Areas - 01 Diabetes, 02 PCOS, 03 Fatty Liver, 04 Weight (Large Editorial Destinations) */}
        <CoreHealthAreasSection />

        {/* 06: Masterclasses - Go deeper when you're ready / Diabetes, PCOS, Fatty Liver, Weight */}
        <MasterclassSection />

        {/* 07: 1PH Lab - Your lab report shouldn't be a mystery */}
        <LabEducationSection />

        {/* 08: Faculty & Experts - Learn from people who understand deeply */}
        <ExpertsSection
          onMeetExperts={() => handleScrollTo('faculty')}
        />

        {/* 09: 1PH Podcast - Health, explained from first principles */}
        <PodcastSection />

        {/* 10: About 1PH & Ecosystem Vision - Why 1PH exists */}
        <VisionSection />

        {/* 11: Final Statement - Understand before you act. 1PH */}
        <BrandStatementSection />
      </main>

      {/* Footer */}
      <Footer onStartLearning={() => handleScrollTo('masterclasses')} />
    </div>
  );
}
