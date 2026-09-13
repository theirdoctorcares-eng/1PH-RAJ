import React from 'react';
import { motion } from 'motion/react';

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="problem"
      className="relative py-32 md:py-44 px-6 md:px-12 max-w-5xl mx-auto z-10"
    >
      <div className="max-w-3xl">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#4A5568] uppercase">
            The Healthcare Gap
          </span>
        </motion.div>

        {/* Dual Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]">
            Healthcare gives you information.
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#4A5568] tracking-[-0.02em] leading-[1.14]">
            Understanding is different.
          </h3>
        </motion.div>

        {/* The Disconnected Pieces */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14 max-w-2xl space-y-6 text-base sm:text-lg text-[#4A5568] font-light leading-relaxed"
        >
          <p>
            Patients receive endless fragments of health data:
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Symptoms',
              'Diagnoses',
              'Lab reports',
              'Numbers',
              'Prescriptions',
              'Diet advice',
              'Lifestyle recommendations',
            ].map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-full bg-white/70 border border-white/90 text-xs text-[#111111] font-medium shadow-xs"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="pt-2 font-normal text-[#111111]">
            But these pieces often feel disconnected.
          </p>

          {/* Concrete Disconnect Scenarios */}
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/60 border border-white/80 text-sm space-y-1">
              <p className="text-[#111111] font-medium">A person may know: “My HbA1c is high.”</p>
              <p className="text-[#718096]">But not understand: “What does HbA1c actually tell me about my cells?”</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 border border-white/80 text-sm space-y-1">
              <p className="text-[#111111] font-medium">A person may know: “I have PCOS.”</p>
              <p className="text-[#718096]">But not understand: “How are my symptoms, hormones, and metabolism connected?”</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/60 border border-white/80 text-sm space-y-1">
              <p className="text-[#111111] font-medium">A person may know: “I have fatty liver.”</p>
              <p className="text-[#718096]">But not understand: “What is actually happening inside my liver?”</p>
            </div>
          </div>

          <p className="pt-2 text-[#718096] italic text-sm">
            This is the gap.
          </p>
        </motion.div>

        {/* THE 1PH DIFFERENCE: Connect the Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 md:mt-20 pt-10 border-t border-[#111111]/[0.08]"
        >
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#718096] uppercase block mb-3">
            The 1PH Difference
          </span>

          <h4 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            We help you connect the dots.
          </h4>

          {/* Visual: Connect the Dots Flow */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/90 shadow-sm">
            <span className="text-[10px] font-mono tracking-widest text-[#718096] uppercase block mb-3">
              Building Your Mental Model
            </span>
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-medium text-[#111111]">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#111111]/[0.08]">Symptoms</span>
              <span className="text-[#718096]">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#111111]/[0.08]">Lab results</span>
              <span className="text-[#718096]">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#111111]/[0.08]">Diagnosis</span>
              <span className="text-[#718096]">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#111111]/[0.08]">Biology</span>
              <span className="text-[#718096]">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111111] text-[#FAFAF7]">Choices</span>
            </div>
          </div>

          <p className="mt-6 text-base sm:text-lg text-[#4A5568] font-light leading-relaxed">
            1PH is a patient health education platform. People come to 1PH to learn, understand, connect information, build a clear mental model of their health, understand what their numbers mean, understand their diagnosis, and understand how different health factors relate.
          </p>

          <p className="mt-4 text-lg sm:text-xl font-normal text-[#111111] tracking-tight">
            We don't just give you more health information. We help you understand how it connects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
