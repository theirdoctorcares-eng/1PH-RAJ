import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, HeartPulse, Activity } from 'lucide-react';

interface HealthVerticalSectionProps {
  onExploreTopic?: (topicId: string) => void;
}

export const HealthVerticalSection: React.FC<HealthVerticalSectionProps> = ({ onExploreTopic }) => {
  return (
    <section
      id="health"
      className="relative py-32 md:py-44 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
    >
      <div className="max-w-4xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#4A5568] uppercase">
            1PH HEALTH
          </span>
        </motion.div>

        {/* Large Heading: Understand your health */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#111111] tracking-[-0.025em] leading-[1.1]">
            Understand your health.
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#4A5568] tracking-[-0.02em] leading-snug">
            Don't just manage your health. Understand it.
          </h3>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10 text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed max-w-3xl"
        >
          Clear, structured health education designed to help you understand common health conditions, your body, your reports and the decisions you make every day.
        </motion.p>

        {/* Health-First Philosophy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 text-sm sm:text-base text-[#4A5568] font-light leading-relaxed"
        >
          <p>
            <span className="font-normal text-[#111111]">Built for informed participation.</span>{' '}
            1PH helps you understand the principles behind your health — so you can have better conversations with your physicians, make more informed decisions, and participate more actively in your care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
