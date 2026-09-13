import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Stethoscope, Microscope, GraduationCap, Users } from 'lucide-react';

interface ExpertsSectionProps {
  onMeetExperts?: () => void;
}

export const ExpertsSection: React.FC<ExpertsSectionProps> = ({ onMeetExperts }) => {
  const futureFacultyRoles = [
    {
      category: 'Doctors & Clinicians',
      description: 'Practicing physicians dedicated to patient education and clear clinical communication.',
      icon: Stethoscope,
    },
    {
      category: 'Medical Specialists',
      description: 'Endocrinologists, hepatologists, cardiologists, and gynecologists teaching specialized domains.',
      icon: Users,
    },
    {
      category: 'Biomedical Researchers',
      description: 'Scientists breaking down published cellular, metabolic, and receptor research.',
      icon: Microscope,
    },
    {
      category: 'Health Educators',
      description: 'Communication specialists translating complex physiological models into accessible visuals.',
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="faculty"
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
            Faculty
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
          Learn from people who understand deeply.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-[#4A5568] font-light leading-relaxed max-w-2xl"
        >
          1PH educators are committed to rigorous health literacy — translating complex medical science into clear, foundational models you can rely on for life.
        </motion.p>
      </div>

      {/* Current Faculty Presentation */}
      <div className="mt-14 md:mt-18">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span className="text-xs font-mono tracking-widest text-[#111111] uppercase font-medium">
            Current Faculty
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_6px_28px_-10px_rgba(130,175,204,0.2)] max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono tracking-wider text-[#718096] uppercase block">
                Founder & Primary Faculty
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-normal text-[#111111] tracking-tight">
                Dr. Raj
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] mt-1 font-normal">
                Physician & First-Principles Health Educator · 1PH Health
              </p>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#111111]/[0.06] text-xs font-mono text-[#111111] self-start">
              Primary Instructor
            </span>
          </div>

          <blockquote className="mt-6 text-base text-[#4A5568] font-light leading-relaxed italic border-l-2 border-[#111111]/[0.2] pl-4">
            "When people understand why their body behaves the way it does, they stop negotiating with arbitrary rules and start acting with calm clarity."
          </blockquote>

          <p className="mt-6 text-xs sm:text-sm text-[#718096] font-light leading-relaxed">
            Dr. Raj leads the core curriculum at 1PH, deconstructing complex medical literature and metabolic physiology into transparent, patient-first educational frameworks.
          </p>
        </motion.div>
      </div>

      {/* Future Experts Platform Vision */}
      <div id="experts" className="mt-20 pt-16 border-t border-[#111111]/[0.08]">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-4">
            <span className="text-[11px] font-medium tracking-[0.24em] text-[#718096] uppercase">
              The Long-Term Vision
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight">
            Learn from experts.
          </h3>
          <p className="mt-4 text-base sm:text-lg text-[#4A5568] font-light leading-relaxed">
            1PH will eventually bring qualified experts into the platform to teach different areas of health. As the curriculum grows, we will invite appropriately qualified doctors, specialists, researchers, and educators across diverse health domains.
          </p>
        </div>

        {/* Future Faculty Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureFacultyRoles.map((role, idx) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * idx }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#111111]/[0.06] flex items-center justify-center text-[#111111] mb-4">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <h4 className="text-base font-medium text-[#111111]">
                    {role.category}
                  </h4>
                  <p className="mt-2 text-xs text-[#4A5568] font-light leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#111111]/[0.05] text-[10px] font-mono text-[#718096] uppercase tracking-wider">
                  Future Expansion
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
