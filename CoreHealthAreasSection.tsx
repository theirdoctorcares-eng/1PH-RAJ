import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface HealthTopic {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  whyHappening: string;
  bodyInsight: string;
  empowermentAction: string;
  keyAxiom: string;
}

export const CoreHealthAreasSection: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>('diabetes');

  const topics: HealthTopic[] = [
    {
      id: 'diabetes',
      number: '01',
      title: 'DIABETES',
      headline: 'Understand diabetes from first principles.',
      description:
        'Understand what diabetes means, what is happening in your body, how your numbers connect, and why different treatments and lifestyle decisions matter.',
      whyHappening: 'Cells protect their energy factories when intracellular fuel reserves reach maximum capacity.',
      bodyInsight: 'Blood glucose is a circulating messenger. When muscle and liver storage are full, glucose accumulates in circulation.',
      empowermentAction: 'Emptying muscular storage pools restores natural cellular receptive space without severe restriction.',
      keyAxiom: 'Diabetes is not simply a blood sugar number — it is an energy routing conversation between your pancreas, muscles, and liver.',
    },
    {
      id: 'pcos',
      number: '02',
      title: 'PCOS',
      headline: 'Understand what is happening behind PCOS.',
      description:
        'Understand the connections between hormones, metabolism, symptoms, cycles and long-term health.',
      whyHappening: 'Ovarian cells and adrenal pathways respond directly to metabolic signals in circulating blood.',
      bodyInsight: 'Elevated storage signals trigger ovarian theca cells to produce androgens, interrupting natural follicular maturation.',
      empowermentAction: 'Smoothing cellular energy signaling helps restore natural ovarian rhythm and hormonal balance.',
      keyAxiom: 'PCOS is not an isolated ovarian condition — it is a whole-body endocrine dialogue reflecting metabolic signaling.',
    },
    {
      id: 'fatty-liver',
      number: '03',
      title: 'FATTY LIVER',
      headline: 'Understand what your liver is telling you.',
      description:
        'Understand what fatty liver means, why it develops, what your liver is doing, and what the numbers and scans actually tell you.',
      whyHappening: 'The liver converts excess substrate into triglycerides when incoming fuel surpasses immediate oxidative demand.',
      bodyInsight: 'Fat accumulation is the liver’s safe warehouse solution for surplus energy before systemic spillage occurs.',
      empowermentAction: 'Allowing intervals of low metabolic demand enables the liver to mobilize and oxidize accumulated stores.',
      keyAxiom: 'Your liver is not broken — it is doing exactly what it was designed to do with surplus incoming energy.',
    },
    {
      id: 'weight',
      number: '04',
      title: 'WEIGHT',
      headline: 'Understand the biology behind weight.',
      description:
        'Go beyond calories and scales. Understand the biology behind weight, appetite, metabolism and sustainable change.',
      whyHappening: 'Weight is governed by hormonal set-points, satiety neuropeptides, and cellular receptor sensitivities.',
      bodyInsight: 'Fat tissue is an active endocrine organ communicating continuously with the hypothalamus via leptin and insulin.',
      empowermentAction: 'Lowering background storage signaling permits spontaneous fat release without triggering starvation defenses.',
      keyAxiom: 'Weight is an outcome of cellular energy signaling, not a moral failure or a simple math equation.',
    },
  ];

  const selectedTopic = topics.find((t) => t.id === activeTopicId) || topics[0];

  return (
    <section
      id="health-areas"
      className="relative py-32 md:py-48 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
    >
      {/* Section Header */}
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#4A5568] uppercase">
            Four Core Health Areas
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]"
        >
          Clear destinations for understanding.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed max-w-2xl"
        >
          We begin with four areas where health confusion is highest and where first-principles clarity creates immediate relief.
        </motion.p>
      </div>

      {/* Editorial Navigation Tabs - 4 Distinct Destinations */}
      <div className="mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {topics.map((topic) => {
          const isActive = topic.id === activeTopicId;
          return (
            <button
              key={topic.id}
              onClick={() => setActiveTopicId(topic.id)}
              className={`text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer focus:outline-none ${
                isActive
                  ? 'bg-white/90 backdrop-blur-md border border-white shadow-[0_8px_24px_-10px_rgba(130,175,204,0.35)] scale-[1.02]'
                  : 'bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-[#718096]">
                <span className="font-mono">{topic.number}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />}
              </div>
              <h3 className="mt-3 text-sm sm:text-base font-semibold tracking-[0.1em] text-[#111111]">
                {topic.title}
              </h3>
              <p className="mt-1 text-xs text-[#718096] truncate">
                {topic.headline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep Editorial Destination Showcase */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTopic.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_12px_40px_-16px_rgba(130,175,204,0.25)]"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
              {/* Left Column: Heading & Comprehensive Overview */}
              <div className="lg:max-w-xl space-y-6">
                <span className="text-xs font-mono tracking-[0.2em] text-[#718096] uppercase">
                  Area {selectedTopic.number} · Comprehensive Guide
                </span>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] tracking-[-0.02em] leading-tight">
                  {selectedTopic.headline}
                </h3>

                <p className="text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed">
                  {selectedTopic.description}
                </p>

                {/* The Core Axiom Callout */}
                <div className="p-6 rounded-2xl bg-[#DDF3FC]/50 border border-white/80">
                  <span className="text-[11px] font-medium tracking-[0.2em] text-[#111111] uppercase block mb-1">
                    First Principle
                  </span>
                  <p className="text-sm sm:text-base text-[#111111] font-normal leading-relaxed italic">
                    "{selectedTopic.keyAxiom}"
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  {selectedTopic.id === 'diabetes' ? (
                    <a
                      href="https://superprofile.bio/course/62d33df1-1b5c-4c27-b990-9b92a17e8258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#FAFAF7] text-sm font-medium tracking-[0.03em] hover:bg-[#262626] transition-all cursor-pointer shadow-sm group"
                    >
                      <span>Diabetes Masterclass</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ) : selectedTopic.id === 'pcos' ? (
                    <a
                      href="https://superprofile.bio/course/1f96b8e5-6ab4-46bb-ab3f-5a3dc9cf6127"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#FAFAF7] text-sm font-medium tracking-[0.03em] hover:bg-[#262626] transition-all cursor-pointer shadow-sm group"
                    >
                      <span>PCOS Masterclass</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        const el = document.getElementById('masterclasses');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-[#FAFAF7] text-sm font-medium tracking-[0.03em] hover:bg-[#262626] transition-all cursor-pointer shadow-sm group"
                    >
                      <span>Explore {selectedTopic.title}</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: WHY → WHAT → HOW Decomposition */}
              <div className="lg:w-[420px] space-y-4">
                <div className="p-6 rounded-2xl bg-white/70 border border-white/80 space-y-2">
                  <span className="text-[11px] font-mono tracking-wider text-[#718096] uppercase block">
                    01 · WHY DOES THIS HAPPEN?
                  </span>
                  <p className="text-sm text-[#4A5568] font-normal leading-relaxed">
                    {selectedTopic.whyHappening}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/70 border border-white/80 space-y-2">
                  <span className="text-[11px] font-mono tracking-wider text-[#718096] uppercase block">
                    02 · WHAT IS HAPPENING INSIDE?
                  </span>
                  <p className="text-sm text-[#4A5568] font-normal leading-relaxed">
                    {selectedTopic.bodyInsight}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/70 border border-white/80 space-y-2">
                  <span className="text-[11px] font-mono tracking-wider text-[#718096] uppercase block">
                    03 · HOW CAN YOU ACT?
                  </span>
                  <p className="text-sm text-[#4A5568] font-normal leading-relaxed">
                    {selectedTopic.empowermentAction}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* "Thought by Me" / Educator Philosophy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-20 p-8 sm:p-12 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80"
      >
        <div className="max-w-3xl">
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#718096] uppercase block">
            Educational Foundations
          </span>
          <h4 className="mt-3 text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight">
            Thought through. Explained clearly.
          </h4>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] font-light leading-relaxed">
            1PH brings together structured frameworks for understanding health — created by educators and clinicians who believe people should be able to understand the reasoning behind their healthcare.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
