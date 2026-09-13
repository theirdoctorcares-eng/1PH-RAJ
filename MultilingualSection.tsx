import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MultilingualGreeting } from '../types';

export const multilingualData: MultilingualGreeting[] = [
  {
    code: 'ta',
    language: 'Tamil',
    nativeName: 'தமிழ்',
    phrase: 'செயலுக்கு முன் புரிதல்.',
    transliteration: 'Seyalukku mun puridhal — Understand before you act.',
  },
  {
    code: 'en',
    language: 'English',
    nativeName: 'English',
    phrase: 'Understand before you act.',
    transliteration: 'The core doctrine of first-principles thinking.',
  },
  {
    code: 'hi',
    language: 'Hindi',
    nativeName: 'हिन्दी',
    phrase: 'कर्म से पहले समझ।',
    transliteration: 'Karm se pehle samajh — Insight preceding action.',
  },
  {
    code: 'te',
    language: 'Telugu',
    nativeName: 'తెలుగు',
    phrase: 'ఆచరణకు ముందే అవగాహన.',
    transliteration: 'Aacharanaku munde avagaahana.',
  },
  {
    code: 'ml',
    language: 'Malayalam',
    nativeName: 'മലയാളം',
    phrase: 'പ്രവർത്തിക്കുന്നതിന് മുൻപ് മനസ്സിലാക്കുക.',
    transliteration: 'Pravarthikkunnathinu munpu manassilaakkuka.',
  },
  {
    code: 'bn',
    language: 'Bengali',
    nativeName: 'বাংলা',
    phrase: 'কাজ করার আগে বোঝো।',
    transliteration: 'Kaaj korar aagey bojho.',
  },
];

export const MultilingualSection: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>('ta');

  const active = multilingualData.find((l) => l.code === selectedLang) || multilingualData[0];

  return (
    <section
      id="multilingual"
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
          Universal Access
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#111111] tracking-[-0.02em] leading-tight"
        >
          Knowledge should not depend on language.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-[#6B6B6B] font-light leading-relaxed max-w-2xl"
        >
          Great ideas should be understandable wherever you are, whatever language you speak.
          Born in Tamil Nadu with a global horizon, 1PH ensures that profound scientific comprehension is delivered with native cultural nuance and absolute clarity.
        </motion.p>
      </div>

      {/* Language Carousel / Visual Strip */}
      <div className="mt-14 md:mt-20">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-[#6B6B6B]">
          {multilingualData.map((item) => {
            const isCurrent = selectedLang === item.code;
            return (
              <button
                key={item.code}
                onClick={() => setSelectedLang(item.code)}
                className={`px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 text-[#111111] border border-white/60'
                }`}
              >
                <span>{item.nativeName}</span>
              </button>
            );
          })}
          <span className="text-[#718096] px-2 font-serif text-lg">· …</span>
        </div>

        {/* Selected Language Display Box */}
        <div className="mt-10 p-8 md:p-12 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl max-w-3xl shadow-sm">
          <div className="flex items-center justify-between text-xs text-[#718096] mb-6">
            <span className="font-mono">{active.language.toUpperCase()} · PRIMARY EXPRESSION</span>
            {active.code === 'ta' && (
              <span className="text-[#111111] font-medium tracking-wide">
                Genesis of 1PH
              </span>
            )}
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#111111] tracking-tight leading-snug">
            "{active.phrase}"
          </p>

          {active.transliteration && (
            <p className="mt-4 text-xs sm:text-sm text-[#6B6B6B] font-light italic">
              {active.transliteration}
            </p>
          )}

          <p className="mt-6 text-xs text-[#6B6B6B] border-t border-[#111111]/[0.06] pt-4 font-light leading-relaxed">
            Every masterclass is scripted with indigenous idioms and translated alongside clinicians fluent in regional terminology, eliminating the cognitive friction of foreign medical jargon.
          </p>
        </div>
      </div>
    </section>
  );
};
