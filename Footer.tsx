import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onStartLearning: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartLearning }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white/40 backdrop-blur-md border-t border-[#111111]/[0.08] text-[#111111] pt-24 pb-16 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#111111]/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-semibold text-2xl tracking-[0.16em] text-[#111111] block">
              1PH
            </span>
            <p className="text-xs font-medium tracking-[0.24em] text-[#4A5568] uppercase">
              First Principles of Health
            </p>
            <p className="text-sm font-normal text-[#111111] tracking-tight pt-2">
              Understand before you act.
            </p>
            <p className="text-xs text-[#4A5568] font-light leading-relaxed max-w-sm">
              A global health education platform helping individuals understand how their bodies actually work, starting with Diabetes, PCOS, Fatty Liver, and Weight.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#718096] uppercase block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs tracking-[0.04em] text-[#4A5568]">
              <li>
                <button
                  onClick={() => scrollTo('philosophy')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Learn
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('health')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  1PH Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('health-areas')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Health Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('masterclasses')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Masterclasses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('lab-education')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  1PH Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faculty')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Faculty & Experts
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('podcast')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  1PH Podcast
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  About 1PH
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#718096] uppercase block">
              Health Letters
            </span>
            <p className="text-xs text-[#4A5568] font-light leading-relaxed">
              Periodic, calm essays explaining physiology and clinical reports from first principles. No noise, no marketing.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-2.5 bg-white/70 border border-white/80 rounded-full text-xs text-[#111111] placeholder:text-[#718096] focus:outline-none focus:border-[#111111] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-5 py-2.5 bg-[#111111] text-[#FAFAF7] text-xs font-medium rounded-full hover:bg-[#262626] transition-colors cursor-pointer flex items-center justify-center"
                >
                  {subscribed ? <Check size={14} /> : <ArrowRight size={14} />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#111111] font-medium">
                  Thank you. You have been added to our health letters.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Lower Legal & Medical Disclaimer Footnote */}
        <div className="pt-10 space-y-6 text-[11px] text-[#718096]">
          <div className="p-5 rounded-2xl bg-white/40 border border-white/60 space-y-2">
            <span className="font-medium text-[#111111] uppercase tracking-wider block text-[10px]">
              Medical Disclaimer
            </span>
            <p className="font-light leading-relaxed text-[#4A5568]">
              1PH provides structured health education and scientific information to help people better understand how their bodies work. Educational content does not replace individualized diagnosis, treatment, or clinical advice from a qualified healthcare professional. Always consult your physician or qualified healthcare provider regarding medical conditions, symptoms, test results, or treatment decisions. 1PH does not provide medical diagnosis or prescribe medical treatments.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
            <p>
              © {new Date().getFullYear()} 1PH (First Principles of Health). All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-[#718096]">
              Understand before you act.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
