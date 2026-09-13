import React from 'react';
import { motion } from 'motion/react';
import { Headphones, Radio, Play, Sparkles } from 'lucide-react';

export const PodcastSection: React.FC = () => {
  const podcastFormats = [
    {
      title: '1PH Explained',
      desc: 'Bite-sized, focused audio explanations breaking down individual physiological concepts and common questions.',
      tag: 'Short-Form Fundamentals',
    },
    {
      title: '1PH Conversations',
      desc: 'Dialogues with clinicians, patients, and researchers exploring the practical realities of managing health.',
      tag: 'Long-Form Dialogue',
    },
    {
      title: '1PH Deep Dives',
      desc: 'Comprehensive multi-part audio series covering complex metabolic pathways and systemic organ connections.',
      tag: 'Curriculum Series',
    },
  ];

  return (
    <section
      id="podcast"
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
            1PH Podcast
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#111111]/[0.06] text-[#718096] font-mono text-[10px] tracking-wider uppercase ml-1">
            Coming Soon
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]"
        >
          Health, explained from first principles.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed max-w-2xl"
        >
          Part of the broader 1PH ecosystem. Calm, reflective listening designed for patients, curious learners, and healthcare professionals who value clarity over hype.
        </motion.p>
      </div>

      {/* Podcast Formats Preview */}
      <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6">
        {podcastFormats.map((format, idx) => (
          <motion.div
            key={format.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 * idx }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_-10px_rgba(130,175,204,0.16)] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#718096] uppercase block">
                {format.tag}
              </span>

              <h3 className="mt-4 text-xl font-normal text-[#111111] tracking-tight">
                {format.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                {format.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#111111]/[0.06] flex items-center justify-between text-xs text-[#718096]">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#111111]">
                <Headphones size={14} />
                Audio Experience
              </span>
              <span className="font-mono text-[11px]">Coming soon</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
