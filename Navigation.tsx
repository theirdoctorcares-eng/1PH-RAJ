import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onStartLearning: () => void;
  onExploreHealth?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onStartLearning }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#BFE7FA]/80 backdrop-blur-md border-b border-white/60 py-3.5 shadow-[0_4px_24px_-12px_rgba(130,175,204,0.25)]'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between"
      >
        {/* Brand Left */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-baseline gap-2 text-inherit tracking-normal focus:outline-none"
        >
          <span className="font-semibold text-lg tracking-[0.18em] text-[#111111] transition-opacity group-hover:opacity-75">
            1PH
          </span>
        </a>

        {/* Center Links - Desktop: Learn, Health, Masterclasses, Lab, Faculty, About */}
        <div className="hidden md:flex items-center space-x-7 text-[13px] tracking-[0.06em] text-[#4A5568]">
          <button
            onClick={() => scrollToSection('first-principles')}
            className="hover:text-[#111111] transition-colors py-1 cursor-pointer focus:outline-none"
          >
            Learn
          </button>
          <button
            onClick={() => scrollToSection('health')}
            className="hover:text-[#111111] transition-colors py-1 cursor-pointer focus:outline-none"
          >
            Health
          </button>
          <button
            onClick={() => scrollToSection('masterclasses')}
            className="hover:text-[#111111] transition-colors py-1 cursor-pointer focus:outline-none"
          >
            Masterclasses
          </button>
          <button
            onClick={() => scrollToSection('lab-education')}
            className="hover:text-[#111111] transition-colors py-1 cursor-pointer focus:outline-none"
          >
            1PH Lab
          </button>
          <button
            onClick={() => scrollToSection('faculty')}
            className="hover:text-[#111111] transition-colors py-1 cursor-pointer focus:outline-none"
          >
            Faculty
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#111111] transition-colors py-1 cursor-pointer focus:outline-none"
          >
            About
          </button>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onStartLearning}
            className="group inline-flex items-center text-[13px] font-medium tracking-[0.04em] text-[#111111] hover:text-[#111111]/75 transition-all cursor-pointer py-1.5 px-3 -mr-3"
          >
            <span>Start learning</span>
            <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 -mr-2 text-[#111111] hover:opacity-70 transition-opacity focus:outline-none"
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#BFE7FA]/95 backdrop-blur-xl border-b border-[#111111]/[0.08] px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-4 text-base tracking-[0.04em] text-[#111111]">
            <button
              onClick={() => scrollToSection('first-principles')}
              className="text-left py-1 hover:text-[#6B6B6B]"
            >
              Learn
            </button>
            <button
              onClick={() => scrollToSection('health')}
              className="text-left py-1 hover:text-[#6B6B6B]"
            >
              Health
            </button>
            <button
              onClick={() => scrollToSection('masterclasses')}
              className="text-left py-1 hover:text-[#6B6B6B]"
            >
              Masterclasses
            </button>
            <button
              onClick={() => scrollToSection('lab-education')}
              className="text-left py-1 hover:text-[#6B6B6B]"
            >
              1PH Lab
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="text-left py-1 hover:text-[#6B6B6B]"
            >
              Faculty
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-1 hover:text-[#6B6B6B]"
            >
              About
            </button>
          </div>

          <div className="pt-4 border-t border-[#111111]/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartLearning();
              }}
              className="w-full text-center py-3 bg-[#111111] text-[#FAFAF7] text-sm font-medium tracking-[0.06em] rounded-full hover:bg-[#222222] transition-colors"
            >
              Start learning →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
