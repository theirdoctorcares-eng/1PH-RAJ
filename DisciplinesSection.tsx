import React, { useState } from 'react';
import { motion } from 'motion/react';

export const DisciplinesSection: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('Health');

  const disciplines = [
    {
      name: 'Health',
      status: 'Active · Vertical 01',
      description: 'Metabolic physiology, cellular energetics, endocrinology, and cardiovascular kinetics.',
      axiom: 'The body is a thermodynamic system governed by evolutionary biochemistry.',
    },
    {
      name: 'Science',
      status: 'In Development',
      description: 'Physics, thermodynamics, and the fundamental laws of energy and entropy.',
      axiom: 'Nothing creates something out of nothing; every observed effect has a measurable physical cause.',
    },
    {
      name: 'Nutrition',
      status: 'Active Module',
      description: 'Macronutrient kinetics, biochemical pathways, and bioavailability beyond caloric labels.',
      axiom: 'Food is biological instruction, signaling hormonal gene expression in every tissue.',
    },
    {
      name: 'Medicine',
      status: 'Upcoming',
      description: 'Translational clinical science, pathophysiology, and pharmacological mechanisms.',
      axiom: 'Treatment works when it aligns with or restores the body’s homeostatic checkpoints.',
    },
    {
      name: 'Human Biology',
      status: 'Active Module',
      description: 'Genetic expression, cellular organelle mechanics, and circadian regulatory loops.',
      axiom: 'Life is organized non-equilibrium maintained by continuous cellular repair.',
    },
    {
      name: 'Technology',
      status: 'Upcoming',
      description: 'Computing architecture, machine reasoning, and the mathematics of information.',
      axiom: 'All modern computation resolves to fundamental boolean logic and physical state transitions.',
    },
    {
      name: 'Psychology',
      status: 'Upcoming',
      description: 'Cognitive biases, neurochemistry, habit formation loops, and emotional equilibrium.',
      axiom: 'Behavior is an emergent consequence of evolutionary survival adaptations.',
    },
    {
      name: 'Financial Literacy',
      status: 'Upcoming',
      description: 'Compound math, risk allocation, capital flows, and macroeconomic dynamics.',
      axiom: 'Value is the discounted expectation of future utility minus structural risk.',
    },
    {
      name: 'Everyday Life',
      status: 'Upcoming',
      description: 'Rational decision-making, probabilistic reasoning, and clarity in complex systems.',
      axiom: 'Clear thinking is the art of subtracting assumptions until only truth remains.',
    },
  ];

  const current = disciplines.find((d) => d.name === selectedDiscipline) || disciplines[0];

  return (
    <section
      id="vision"
      className="relative py-32 md:py-48 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
    >
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-medium tracking-[0.28em] text-[#6B6B6B] uppercase block"
        >
          The Platform Vision
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 space-y-2"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#111111] tracking-[-0.02em] leading-tight">
            One idea.
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#6B6B6B] tracking-[-0.02em] leading-tight">
            Many disciplines.
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-8 text-lg sm:text-xl text-[#6B6B6B] font-light leading-relaxed max-w-2xl"
        >
          1PH begins with health because health directly touches every human life every single day.
          Yet the foundational engine is universal: <span className="text-[#111111] font-normal">first-principles education</span>.
        </motion.p>
      </div>

      {/* Disciplines Grid & Interactive Inspect */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: List of Disciplines */}
        <div className="lg:col-span-7 flex flex-wrap gap-2.5 sm:gap-3">
          {disciplines.map((item) => {
            const isSelected = selectedDiscipline === item.name;
            const isHealth = item.name === 'Health';

            return (
              <button
                key={item.name}
                onClick={() => setSelectedDiscipline(item.name)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-[0.03em] transition-all duration-200 cursor-pointer text-left flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-sm'
                    : isHealth
                    ? 'bg-white/80 backdrop-blur-sm text-[#111111] hover:bg-[#111111] hover:text-white border border-white/60'
                    : 'bg-white/60 backdrop-blur-sm text-[#4A5568] hover:text-[#111111] hover:bg-white/90 border border-white/40'
                }`}
              >
                <span>{item.name}</span>
                {isHealth && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Selected Discipline Detail */}
        <div className="lg:col-span-5 p-8 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#9E9E9E]">Domain Brief</span>
            <span
              className={`text-[11px] font-medium tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                current.name === 'Health'
                  ? 'bg-[#111111] text-[#FAFAF7]'
                  : 'bg-[#EAE8E0] text-[#6B6B6B]'
              }`}
            >
              {current.status}
            </span>
          </div>

          <div>
            <h4 className="text-2xl font-normal text-[#111111] tracking-tight">
              {current.name}
            </h4>
            <p className="mt-2 text-sm text-[#6B6B6B] font-light leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="pt-4 border-t border-[#111111]/[0.08]">
            <span className="text-[10px] font-medium tracking-[0.2em] text-[#9E9E9E] uppercase block mb-1">
              Core Axiom
            </span>
            <p className="text-xs text-[#111111] italic leading-relaxed">
              "{current.axiom}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
