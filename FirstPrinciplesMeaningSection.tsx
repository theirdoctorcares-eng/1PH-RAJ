import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const FirstPrinciplesMeaningSection: React.FC = () => {
  const principlesSteps = [
    {
      label: 'WHAT',
      sub: 'The Core Reality',
      question: 'What is actually happening?',
      desc: 'Strip away assumptions, hearsay, and secondary interpretations. Start with verifiable, fundamental observations.',
    },
    {
      label: 'WHY',
      sub: 'The Mechanism',
      question: 'Why is it happening?',
      desc: 'Deconstruct the underlying causes and forces driving the observation rather than reasoning by analogy.',
    },
    {
      label: 'CONNECT',
      sub: 'The Coherent Picture',
      question: 'How do the pieces relate?',
      desc: 'Rebuild your mental model from the bottom up, seeing clearly how every component interacts with the whole.',
    },
  ];

  return (
    <section
      id="first-principles"
      className="relative py-28 md:py-40 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
    >
      <div className="max-w-4xl">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#4A5568] uppercase">
            Foundational Thinking
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]"
        >
          What does “First Principles” mean?
        </motion.h2>

        {/* Supporting Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 space-y-4 text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed max-w-3xl"
        >
          <blockquote className="text-xl sm:text-2xl font-normal text-[#111111] border-l-2 border-[#111111]/[0.2] pl-5 py-1">
            First principles means starting with the fundamentals.
          </blockquote>

          <p className="text-base sm:text-lg text-[#4A5568] font-light leading-relaxed">
            Instead of beginning with assumptions, isolated facts, or instructions, we start with what is actually happening, understand why it is happening, and build our understanding from there.
          </p>
        </motion.div>
      </div>

      {/* WHAT → WHY → CONNECT Framework Cards */}
      <div className="mt-14 md:mt-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono tracking-[0.2em] text-[#718096] uppercase">
            The Fundamental Sequence
          </span>
          <span className="h-px flex-1 bg-[#111111]/[0.08]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principlesSteps.map((step, idx) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.12 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_-10px_rgba(130,175,204,0.16)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#111111] text-[#FAFAF7] text-xs font-semibold tracking-[0.16em]">
                    {step.label}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-[#718096] uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-normal text-[#111111] tracking-tight">
                  {step.question}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#111111]/[0.06] text-[11px] font-mono text-[#718096]">
                {step.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
