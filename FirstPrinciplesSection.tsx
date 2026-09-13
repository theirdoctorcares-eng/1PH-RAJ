import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const FirstPrinciplesSection: React.FC = () => {
  const frameworkSteps = [
    {
      label: 'WHAT',
      question: 'What is happening inside the body?',
      explanation:
        'We unpack what your cells, organs, and circulating pathways are actually experiencing — translating complex medical reports into clear biological models.',
    },
    {
      label: 'WHY',
      question: 'Why is it happening?',
      explanation:
        'Instead of treating symptoms in isolation, we explain the root cellular, metabolic, and physiological processes that initiated them.',
    },
    {
      label: 'CONNECT',
      question: 'How do the pieces relate?',
      explanation:
        'We connect symptoms to lab results, diagnosis to biology, and daily habits to physiological outcomes so you see the complete picture.',
    },
  ];

  const patientJourneySteps = [
    {
      step: '01',
      stage: 'COME WITH A QUESTION',
      desc: 'Bring a symptom, lab report, diagnosis, or recommendation you want to understand.',
    },
    {
      step: '02',
      stage: 'LEARN',
      desc: 'Understand the biological fundamentals without jargon or memorization.',
    },
    {
      step: '03',
      stage: 'CONNECT',
      desc: 'See how the pieces relate — connecting your numbers to what is happening inside.',
    },
    {
      step: '04',
      stage: 'UNDERSTAND',
      desc: 'Make sense of your health information with calm, grounded clarity.',
    },
    {
      step: '05',
      stage: 'DISCUSS',
      desc: 'Have better-informed, productive conversations with your healthcare professional.',
    },
    {
      step: '06',
      stage: 'ACT',
      desc: 'Make informed decisions with appropriate professional guidance.',
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
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
            Applying First Principles to Health
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]"
        >
          What if we approached health the same way?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 space-y-3 text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed max-w-2xl"
        >
          <p className="text-[#111111] font-normal text-xl sm:text-2xl">
            Your health is not a list of instructions. It is a connected biological system.
          </p>
          <p>
            1PH applies first-principles thinking to health — breaking complicated conditions, lab tests, and metabolic pathways down into models you can actually understand, connect, and act upon.
          </p>
          <p className="text-base text-[#4A5568]">
            Because when you understand what is happening, the decisions you make start to make calm, grounded sense.
          </p>
        </motion.div>
      </div>

      {/* WHAT → WHY → CONNECT Framework Cards */}
      <div className="mt-16 md:mt-24">
        <span className="text-xs font-mono tracking-[0.2em] text-[#718096] uppercase block mb-6">
          First Principles in Health
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frameworkSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between p-7 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_-10px_rgba(130,175,204,0.18)]"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#111111] text-[#FAFAF7] text-xs font-semibold tracking-[0.16em]">
                  {step.label}
                </span>

                <h3 className="mt-5 text-lg sm:text-xl font-normal text-[#111111] tracking-tight leading-snug">
                  {step.question}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                  {step.explanation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Core Formula: Understand → Decide → Act */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_6px_30px_-12px_rgba(130,175,204,0.2)]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-medium tracking-[0.24em] text-[#718096] uppercase block">
              The 1PH Approach
            </span>
            <div className="mt-3 flex items-center flex-wrap gap-3 sm:gap-4 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111]">
              <span>Understand</span>
              <span className="text-[#718096] font-light">→</span>
              <span>Decide</span>
              <span className="text-[#718096] font-light">→</span>
              <span>Act</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#4A5568] font-light leading-relaxed max-w-md">
            When you understand the fundamentals behind your biology, recommendations become intuitive rather than arbitrary instructions to follow.
          </p>
        </div>
      </motion.div>

      {/* The Patient Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 p-8 sm:p-12 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80"
      >
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#718096] uppercase block">
            The Patient Journey
          </span>
          <h4 className="mt-2 text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight">
            From fragmented information to informed agency.
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {patientJourneySteps.map((journey) => (
            <div key={journey.step} className="p-5 rounded-2xl bg-white/70 border border-white/90 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#718096] font-medium">{journey.step}</span>
                <span className="text-[10px] font-mono tracking-widest text-[#111111] uppercase font-semibold">
                  {journey.stage}
                </span>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed font-light pt-1">
                {journey.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Responsible Healthcare Philosophy Footnote */}
        <div className="mt-8 pt-6 border-t border-[#111111]/[0.08] text-xs text-[#718096] font-light leading-relaxed">
          <p>
            <strong className="font-medium text-[#111111]">Responsible health education:</strong> 1PH provides health education and information to help people better understand their health. Educational content does not replace individualized diagnosis, treatment, or advice from a qualified healthcare professional.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
