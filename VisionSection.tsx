import React from 'react';
import { motion } from 'motion/react';
import { Globe, BookOpen, Compass, HeartPulse } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const evolutionSteps = [
    { phase: 'Today', title: '2 Masterclasses', desc: 'Diabetes and PCOS masterclasses launched from first principles.' },
    { phase: 'Tomorrow', title: 'More Health Topics', desc: 'Fatty liver, weight, and general metabolic health.' },
    { phase: 'Next', title: '1PH Lab Education', desc: 'Dedicated tools to demystify laboratory tests and investigations.' },
    { phase: 'Expanding', title: 'Expanded Faculty', desc: 'Qualified doctors, specialists, and biomedical researchers.' },
    { phase: 'Accessible', title: 'Multiple Languages', desc: 'Regional and global languages, starting with 1PH Tamil.' },
    { phase: 'The Vision', title: 'Global Patient Education', desc: 'The definitive first-principles health understanding platform.' },
  ];

  const brandArchitecture = [
    {
      name: '1PH',
      role: 'Parent Brand',
      desc: 'First Principles of Health. The governing philosophy and educational standard.',
    },
    {
      name: '1PH Health',
      role: 'Core Health Topics',
      desc: 'Structured education covering Diabetes, PCOS, Fatty Liver, Weight, and more.',
    },
    {
      name: '1PH Masterclasses',
      role: 'Deep Learning',
      desc: 'Comprehensive self-paced masterclasses with calm, rigorous clinical depth.',
    },
    {
      name: '1PH Lab',
      role: 'Laboratory Education',
      desc: 'Education around laboratory tests, numbers, biomarkers, and report interpretation.',
    },
    {
      name: '1PH Podcast',
      role: 'Audio Explanations',
      desc: 'Long-form deep dives, clinician conversations, and accessible concept breakdowns.',
    },
    {
      name: '1PH Experts',
      role: 'Faculty Platform',
      desc: 'Future network of verified specialists, clinicians, and health educators.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 md:py-48 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
    >
      {/* Narrative: Why 1PH exists */}
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#4A5568] uppercase">
            About 1PH
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]"
        >
          Why 1PH exists.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 space-y-4 text-base sm:text-lg text-[#4A5568] font-light leading-relaxed max-w-3xl"
        >
          <p>
            Healthcare is full of information. People get test results, prescriptions, diagnoses, and instructions. Yet most people still do not understand what is actually happening inside their bodies.
          </p>
          <p className="text-xl sm:text-2xl font-normal text-[#111111] tracking-tight">
            1PH was created to close that gap.
          </p>
          <p className="pt-2 text-sm sm:text-base border-l-2 border-[#111111]/[0.2] pl-4 text-[#111111] font-normal">
            Our ambition: Make health understandable.
          </p>
        </motion.div>
      </div>

      {/* The Evolutionary Journey / Big Picture */}
      <div className="mt-16 md:mt-22">
        <span className="text-[11px] font-mono tracking-[0.2em] text-[#718096] uppercase block mb-6">
          The Long-Term Roadmap
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {evolutionSteps.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 * idx }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#718096] uppercase block">
                  {step.phase}
                </span>
                <h4 className="mt-2 text-lg font-medium text-[#111111]">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Architecture Ecosystem */}
      <div className="mt-20 pt-16 border-t border-[#111111]/[0.08]">
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#718096] uppercase block mb-3">
            Ecosystem Architecture
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            The 1PH Ecosystem.
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#4A5568] font-light leading-relaxed">
            A cohesive suite of patient education brands united by first-principles rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandArchitecture.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 * idx }}
              className="p-7 rounded-2xl bg-white/70 backdrop-blur-md border border-white/85 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-wider text-[#718096] uppercase">
                  {brand.role}
                </span>
                <h4 className="mt-2 text-xl font-normal text-[#111111] tracking-tight">
                  {brand.name}
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                  {brand.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
