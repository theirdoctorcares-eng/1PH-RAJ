import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

interface MasterclassSectionProps {
  onExploreCourse?: (courseUrl: string) => void;
}

export const MasterclassSection: React.FC<MasterclassSectionProps> = () => {
  const currentMasterclasses = [
    {
      index: 0,
      title: 'Diabetes Masterclass',
      focus: 'Understand diabetes from first principles.',
      price: '₹499',
      status: 'Available now',
      details: 'Intracellular fuel pressure, receptor kinetics & pancreatic endocrine balance.',
      url: 'https://superprofile.bio/course/62d33df1-1b5c-4c27-b990-9b92a17e8258',
    },
    {
      index: 1,
      title: 'PCOS Masterclass',
      focus: 'Understand PCOS from first principles.',
      price: '₹499',
      status: 'Available now',
      details: 'Metabolic-ovarian signaling, follicular health & androgen synthesis.',
      url: 'https://superprofile.bio/course/1f96b8e5-6ab4-46bb-ab3f-5a3dc9cf6127',
    },
  ];

  const upcomingMasterclasses = [
    {
      title: 'Fatty Liver',
      focus: 'Understand fatty liver from first principles.',
      status: 'Coming soon',
      details: 'Hepatic substrate handling, triglyceride buffering & cellular recovery.',
    },
    {
      title: 'Weight & General Metabolic Health',
      focus: 'Understand weight, metabolism and the bigger picture.',
      status: 'Coming soon',
      details: 'Endocrine set-points, hypothalamic satiety loops & metabolic flexibility.',
    },
  ];

  return (
    <section
      id="masterclasses"
      className="relative py-32 md:py-48 px-6 md:px-12 max-w-6xl mx-auto z-10 border-t border-[#111111]/[0.06]"
    >
      {/* Editorial Header */}
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
            1PH Masterclasses
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-[1.14]"
        >
          Go deeper when you're ready.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed max-w-2xl"
        >
          1PH Masterclasses are structured educational deep dives inside the patient health education platform. Calm, thorough, step-by-step masteries designed to build lasting mental models.
        </motion.p>
      </div>

      {/* Available Now Section */}
      <div className="mt-14 md:mt-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#111111] uppercase font-medium">
            Available Now
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentMasterclasses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_6px_28px_-10px_rgba(130,175,204,0.22)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#718096]">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[11px] font-medium border border-emerald-200/60">
                    {course.status}
                  </span>
                  <span className="font-medium text-base text-[#111111]">
                    Price: <span className="font-semibold">{course.price}</span>
                  </span>
                </div>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title block mt-5"
                >
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight group-hover/title:text-[#2E5E77] transition-colors flex items-center justify-between gap-2">
                    <span>{course.title}</span>
                    <span className="text-sm font-normal text-[#718096] group-hover/title:text-[#111111] transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5">
                      ↗
                    </span>
                  </h3>
                </a>

                <p className="mt-3 text-base text-[#111111] font-normal">
                  {course.focus}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                  {course.details}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#111111]/[0.08] flex items-center justify-between flex-wrap gap-3">
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#111111] text-[#FAFAF7] text-xs font-medium tracking-[0.04em] hover:bg-[#262626] transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group focus:outline-none"
                >
                  <span>Explore Masterclass</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <span className="text-[11px] text-[#718096] font-mono">
                  Direct Enrollment · ₹499
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Masterclasses Section */}
      <div className="mt-16 pt-12 border-t border-[#111111]/[0.08]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#718096]" />
          <span className="text-xs font-mono tracking-widest text-[#718096] uppercase font-medium">
            Upcoming Masterclasses — Coming Soon
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingMasterclasses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
              className="p-7 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 flex flex-col justify-between"
            >
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#111111]/[0.06] text-[#718096] font-mono text-[10px] tracking-wider uppercase inline-block mb-3">
                  {course.status}
                </span>

                <h4 className="text-xl font-normal text-[#111111] tracking-tight">
                  {course.title}
                </h4>

                <p className="mt-2 text-sm text-[#4A5568] font-light">
                  {course.focus}
                </p>
                <p className="mt-1 text-xs text-[#718096] font-light">
                  {course.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#111111]/[0.05] text-[11px] text-[#718096]">
                Curriculum in development · Not yet available for purchase
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Honest Pricing Commitment Callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-12 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 flex items-center justify-between flex-wrap gap-4 text-xs text-[#4A5568]"
      >
        <span className="font-medium text-[#111111]">Honest & Transparent Education:</span>
        <span>Standard ₹499 pricing · Zero artificial countdowns or fake urgency · Accessible patient health education</span>
      </motion.div>
    </section>
  );
};
