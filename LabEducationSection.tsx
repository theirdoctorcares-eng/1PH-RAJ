import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const LabEducationSection: React.FC = () => {
  const labQuestions = [
    { num: '01', question: 'What does this test measure?', desc: 'The biological substrate, enzyme, or hormone in circulation.' },
    { num: '02', question: 'Why was it tested?', desc: 'The clinical question or physiological process being evaluated.' },
    { num: '03', question: 'What does the number mean?', desc: 'Beyond arbitrary reference ranges — what is actually happening in tissue.' },
    { num: '04', question: 'How does it connect with other results?', desc: 'Relating HbA1c to fasting insulin, ALT to lipid fractions, or androgens to LH/FSH.' },
    { num: '05', question: 'What could influence it?', desc: 'Sleep, stress, hydration, time of day, fasting duration, and acute activity.' },
    { num: '06', question: 'Why might it matter?', desc: 'The short and long-term implications for your metabolic balance and well-being.' },
    { num: '07', question: 'What should I discuss with my healthcare professional?', desc: 'Formulating clear, high-yield questions for your next clinical visit.' },
  ];

  const futureJourney = [
    { step: 'TEST', desc: 'Relevant, targeted laboratory testing' },
    { step: 'LEARN', desc: 'Structured education about what is being tested' },
    { step: 'UNDERSTAND', desc: 'Seeing how all your results connect together' },
    { step: 'DISCUSS', desc: 'Informed conversations with your doctor' },
    { step: 'ACT', desc: 'Confident choices supported by clinical care' },
  ];

  return (
    <section
      id="lab-education"
      className="relative py-32 md:py-48 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
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
            Future Product · 1PH Lab
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#111111]/[0.06] text-[#718096] font-mono text-[10px] tracking-wider uppercase ml-1">
            Coming Soon
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]"
        >
          Your lab report shouldn't be a mystery.
        </motion.h2>

        {/* Supporting Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-[#4A5568] font-light leading-relaxed italic border-l-2 border-[#111111]/[0.2] pl-5"
        >
          "A lab report gives you numbers. Understanding those numbers is another thing entirely."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-[#4A5568] font-light leading-relaxed max-w-3xl"
        >
          Most patients receive a page of abbreviations and reference brackets with green or red flags. But laboratory tests are not meant to be reduced to mere "Normal" vs. "Abnormal". 1PH is developing education around helping people understand laboratory investigations from first principles.
        </motion.p>
      </div>

      {/* The 7 Core Questions Grid */}
      <div className="mt-14 md:mt-18">
        <span className="text-[11px] font-mono tracking-[0.2em] text-[#718096] uppercase block mb-6">
          Beyond Normal vs. Abnormal: What 1PH Lab Teaches
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {labQuestions.map((q, idx) => (
            <motion.div
              key={q.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 * idx }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_-10px_rgba(130,175,204,0.15)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#718096] font-medium">{q.num}</span>
                <h4 className="mt-2 text-base font-medium text-[#111111] leading-snug">
                  {q.question}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                  {q.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* 1PH Lab Platform Teaser Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.56 }}
            className="p-6 rounded-2xl bg-[#111111] text-[#FAFAF7] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#718096] uppercase block">
                Future Platform
              </span>
              <h4 className="mt-2 text-2xl font-normal tracking-tight text-white">
                1PH Lab
              </h4>
              <p className="mt-2 text-xs text-[#E2E8F0] font-light leading-relaxed">
                Understand your numbers. Connect the dots. A dedicated educational platform for laboratory investigations.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 text-[11px] text-[#A0AEC0] flex items-center justify-between">
              <span>Status</span>
              <span className="font-mono text-white">Coming soon</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lab + Test Packages Conceptual Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-14 p-8 sm:p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_6px_30px_-12px_rgba(130,175,204,0.2)]"
      >
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium tracking-[0.24em] text-[#718096] uppercase">
              Future Vision · Integrated Packages
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#111111]/[0.06] text-[#718096] font-mono text-[10px] uppercase">
              Coming Soon
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight">
            Testing combined with structured understanding.
          </h3>
          <p className="mt-3 text-sm text-[#4A5568] font-light leading-relaxed">
            Eventually, 1PH may launch packages combining relevant laboratory testing with structured education about those tests, helping people see how results connect into a coherent health picture.
          </p>
        </div>

        {/* Journey Flow: TEST → LEARN → UNDERSTAND → DISCUSS → ACT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {futureJourney.map((step, idx) => (
            <div key={step.step} className="p-4 rounded-xl bg-white/80 border border-white/90 space-y-1.5">
              <span className="text-[10px] font-mono text-[#718096] block">0{idx + 1}</span>
              <h5 className="text-sm font-semibold text-[#111111] tracking-wide font-mono">
                {step.step}
              </h5>
              <p className="text-[11px] text-[#4A5568] font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Clear Medical Safeguard & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#111111]/[0.08] text-xs text-[#718096] font-light leading-relaxed">
          <p>
            <strong className="font-medium text-[#111111]">Clinical Clarity:</strong> 1PH does not independently diagnose patients or provide medical treatment. 1PH education does not replace clinical care. The purpose is to improve understanding and support better-informed conversations with qualified healthcare professionals.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
