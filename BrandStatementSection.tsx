import React from 'react';
import { motion } from 'motion/react';

export const BrandStatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 z-10 border-t border-[#111111]/[0.06]"
    >
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        {/* Core Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <span className="text-xs font-mono tracking-[0.24em] text-[#718096] uppercase block">
            The 1PH Promise
          </span>
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal leading-relaxed max-w-3xl mx-auto">
            Healthcare gives you information. 1PH gives you understanding.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#4A5568] font-light leading-relaxed max-w-2xl mx-auto">
            Start with the fundamentals. Learn. Connect the dots. Understand your health.
          </p>
        </motion.div>

        {/* The Monumental Final Statement: Understand before you act. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#111111] tracking-[-0.03em] leading-[1.08]">
            Understand before you act.
          </h2>
        </motion.div>

        {/* The Signature 1PH */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 md:pt-10"
        >
          <div className="text-6xl sm:text-7xl md:text-8xl font-medium tracking-[0.18em] text-[#111111] pl-[0.18em] select-none">
            1PH
          </div>
          <p className="mt-4 text-xs font-medium tracking-[0.32em] text-[#4A5568] uppercase">
            First Principles of Health
          </p>
        </motion.div>
      </div>
    </section>
  );
};
