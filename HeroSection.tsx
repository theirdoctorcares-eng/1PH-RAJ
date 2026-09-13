import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onStartLearning: () => void;
  onScrollDown?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartLearning, onScrollDown }) => {
  const handleScrollDown = () => {
    if (onScrollDown) {
      onScrollDown();
    } else {
      const el = document.getElementById('first-principles');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] md:min-h-[92vh] flex flex-col justify-between items-center text-center pt-32 md:pt-40 pb-12 px-6 z-10"
    >
      <div className="max-w-4xl mx-auto flex-1 flex flex-col justify-center items-center">
        {/* 1PH & First Principles of Health */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-[0.18em] text-[#111111] pl-[0.18em] select-none leading-none">
            1PH
          </span>

          <p className="mt-5 md:mt-7 text-xs sm:text-sm font-medium tracking-[0.28em] text-[#4A5568] uppercase">
            First Principles of Health
          </p>
        </motion.div>

        {/* The Dominant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal text-[#111111] tracking-[-0.025em] leading-[1.12] max-w-3xl"
        >
          Understand your health. <br className="hidden sm:inline" />Connect the dots.
        </motion.h1>

        {/* Short Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#4A5568] font-light leading-relaxed max-w-xl mx-auto"
        >
          Learn what is happening, why it matters, and how it all connects.
        </motion.p>

        {/* Primary CTA: Start learning → */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 md:mt-11"
        >
          <button
            onClick={onStartLearning}
            className="px-9 py-4 rounded-full bg-[#111111] text-[#FAFAF7] text-sm md:text-base font-medium tracking-[0.03em] hover:bg-[#262626] transition-all duration-300 shadow-[0_4px_20px_rgba(17,24,39,0.12)] cursor-pointer inline-flex items-center gap-2.5 group focus:outline-none"
          >
            <span>Start learning</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="pt-8 flex flex-col items-center"
      >
        <button
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="group text-[#718096] hover:text-[#111111] transition-colors cursor-pointer p-2 focus:outline-none"
        >
          <ArrowDown size={18} strokeWidth={1.5} className="group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </section>
  );
};

