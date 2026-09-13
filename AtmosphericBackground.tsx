import React, { useEffect, useState, useMemo } from 'react';

interface AtmosphericBackgroundProps {
  mouseParallax?: { x: number; y: number };
}

type CloudMorphology = 'cloud-dome' | 'cloud-stream' | 'cloud-puff' | 'cloud-taper' | 'cloud-multilobe';
type CloudVolumetricShadow = 'cloud-volumetric-sun' | 'cloud-volumetric-ambient' | 'cloud-volumetric-soft';

interface AtmosphericCloudConfig {
  id: string;
  tier: 'far' | 'mid' | 'near';
  topPercent: number; // 0% to 94% down the page
  baseWidth: number; // 380px to 1050px
  baseHeight: number; // 140px to 420px
  opacity: number;
  blurPx: number; // 24px - 44px soft blur
  animationClass: string;
  morphology: CloudMorphology;
  secondaryMorphology: CloudMorphology;
  shadowClass: CloudVolumetricShadow;
  scale: number;
  underbellyTint: string;
  highlightTint: string;
}

/**
 * 16 Multi-depth Cloud Formations spanning the full vertical scroll experience:
 * - Distant (126s - 175s): 380px - 680px, gentle atmospheric haze
 * - Main / Mid (78s - 114s): 620px - 880px, fluffy cumulus forms with sunlight warmth
 * - Near (56s - 80s): 750px - 1050px, billowy passing formations near edges
 */
const CLOUD_SEEDS = [
  // --- TOP / HERO ATMOSPHERE (0% - 15%) ---
  {
    id: 'hero-near-billow',
    tier: 'near' as const,
    topPercent: 2,
    baseWidth: 1020,
    baseHeight: 380,
    opacity: 0.94,
    blurPx: 28,
    animationClass: 'animate-cloud-near-1', // 56s
  },
  {
    id: 'hero-far-stratus',
    tier: 'far' as const,
    topPercent: 5,
    baseWidth: 580,
    baseHeight: 180,
    opacity: 0.82,
    blurPx: 40,
    animationClass: 'animate-cloud-far-1', // 126s
  },
  {
    id: 'hero-mid-cumulus',
    tier: 'mid' as const,
    topPercent: 12,
    baseWidth: 740,
    baseHeight: 270,
    opacity: 0.92,
    blurPx: 32,
    animationClass: 'animate-cloud-mid-1', // 78s
  },

  // --- PREMISE & FIRST PRINCIPLES (18% - 35%) ---
  {
    id: 'principles-near-cluster',
    tier: 'near' as const,
    topPercent: 22,
    baseWidth: 940,
    baseHeight: 350,
    opacity: 0.93,
    blurPx: 30,
    animationClass: 'animate-cloud-near-2', // 62s
  },
  {
    id: 'principles-far-drift',
    tier: 'far' as const,
    topPercent: 26,
    baseWidth: 480,
    baseHeight: 160,
    opacity: 0.8,
    blurPx: 42,
    animationClass: 'animate-cloud-far-2', // 138s
  },
  {
    id: 'principles-mid-fluffy',
    tier: 'mid' as const,
    topPercent: 32,
    baseWidth: 820,
    baseHeight: 290,
    opacity: 0.91,
    blurPx: 34,
    animationClass: 'animate-cloud-mid-2', // 86s
  },

  // --- 1PH HEALTH & MASTERCLASSES (38% - 55%) ---
  {
    id: 'health-far-wisp',
    tier: 'far' as const,
    topPercent: 40,
    baseWidth: 620,
    baseHeight: 190,
    opacity: 0.82,
    blurPx: 38,
    animationClass: 'animate-cloud-far-3', // 148s
  },
  {
    id: 'health-mid-wide',
    tier: 'mid' as const,
    topPercent: 46,
    baseWidth: 860,
    baseHeight: 310,
    opacity: 0.93,
    blurPx: 33,
    animationClass: 'animate-cloud-mid-3', // 92s
  },
  {
    id: 'health-near-crest',
    tier: 'near' as const,
    topPercent: 52,
    baseWidth: 980,
    baseHeight: 370,
    opacity: 0.94,
    blurPx: 29,
    animationClass: 'animate-cloud-near-3', // 72s
  },

  // --- LEARNING EXPERIENCE & DISCIPLINES (58% - 72%) ---
  {
    id: 'learn-far-stream',
    tier: 'far' as const,
    topPercent: 60,
    baseWidth: 540,
    baseHeight: 170,
    opacity: 0.81,
    blurPx: 40,
    animationClass: 'animate-cloud-far-4', // 162s
  },
  {
    id: 'learn-mid-dome',
    tier: 'mid' as const,
    topPercent: 65,
    baseWidth: 790,
    baseHeight: 280,
    opacity: 0.92,
    blurPx: 34,
    animationClass: 'animate-cloud-mid-4', // 98s
  },
  {
    id: 'learn-near-flank',
    tier: 'near' as const,
    topPercent: 71,
    baseWidth: 910,
    baseHeight: 340,
    opacity: 0.93,
    blurPx: 30,
    animationClass: 'animate-cloud-near-4', // 68s
  },

  // --- EXPERTS & MULTILINGUAL (74% - 85%) ---
  {
    id: 'faculty-far-puff',
    tier: 'far' as const,
    topPercent: 78,
    baseWidth: 490,
    baseHeight: 160,
    opacity: 0.8,
    blurPx: 38,
    animationClass: 'animate-cloud-far-5', // 175s
  },
  {
    id: 'faculty-mid-strato',
    tier: 'mid' as const,
    topPercent: 83,
    baseWidth: 840,
    baseHeight: 290,
    opacity: 0.91,
    blurPx: 35,
    animationClass: 'animate-cloud-mid-5', // 105s
  },

  // --- BRAND STATEMENT & FOOTER (87% - 96%) ---
  {
    id: 'statement-near-passing',
    tier: 'near' as const,
    topPercent: 88,
    baseWidth: 960,
    baseHeight: 360,
    opacity: 0.94,
    blurPx: 29,
    animationClass: 'animate-cloud-near-5', // 80s
  },
  {
    id: 'footer-mid-horizon',
    tier: 'mid' as const,
    topPercent: 93,
    baseWidth: 810,
    baseHeight: 280,
    opacity: 0.9,
    blurPx: 36,
    animationClass: 'animate-cloud-mid-6', // 114s
  },
];

const MORPHOLOGY_LIST: CloudMorphology[] = [
  'cloud-dome',
  'cloud-stream',
  'cloud-puff',
  'cloud-taper',
  'cloud-multilobe',
];

export const AtmosphericBackground: React.FC<AtmosphericBackgroundProps> = ({ mouseParallax }) => {
  const [motionReduced, setMotionReduced] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionReduced(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setMotionReduced(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax subtle offset from mouse position
  const px = (mouseParallax?.x || 0) * 14;
  const py = (mouseParallax?.y || 0) * 8;

  // Generate continuous atmospheric clouds with organic variation
  const clouds: AtmosphericCloudConfig[] = useMemo(() => {
    return CLOUD_SEEDS.map((seed, i) => {
      // Deterministic organic variation
      const r1 = Math.sin(i * 11.7 + 2.3) * 10000;
      const r2 = Math.cos(i * 8.9 + 4.1) * 10000;
      const r3 = Math.sin(i * 14.3 + 1.7) * 10000;

      const norm1 = Math.abs(r1 - Math.floor(r1));
      const norm2 = Math.abs(r2 - Math.floor(r2));
      const norm3 = Math.abs(r3 - Math.floor(r3));

      const scale = 0.9 + norm1 * 0.22; // 0.9x to 1.12x
      const morphology = MORPHOLOGY_LIST[Math.floor(norm2 * MORPHOLOGY_LIST.length)];
      const secondaryMorphology = MORPHOLOGY_LIST[Math.floor(norm3 * MORPHOLOGY_LIST.length)];

      const shadowClass: CloudVolumetricShadow =
        seed.tier === 'near'
          ? 'cloud-volumetric-sun'
          : seed.tier === 'mid'
          ? 'cloud-volumetric-ambient'
          : 'cloud-volumetric-soft';

      const underbellyTint =
        seed.tier === 'near'
          ? '#CFE5F5'
          : seed.tier === 'mid'
          ? '#D6EAF7'
          : '#DEEFF9';

      const highlightTint =
        seed.tier === 'near'
          ? 'rgba(255, 253, 248, 0.98)'
          : 'rgba(255, 255, 255, 0.95)';

      return {
        ...seed,
        scale: parseFloat(scale.toFixed(3)),
        morphology,
        secondaryMorphology,
        shadowClass,
        underbellyTint,
        highlightTint,
      };
    });
  }, []);

  // Soft vertical atmospheric altitude shift on scroll (subtle, non-dizzying)
  const scrollOffsetFar = scrollY * 0.04;
  const scrollOffsetMid = scrollY * 0.07;
  const scrollOffsetNear = scrollY * 0.1;

  return (
    <div
      aria-hidden="true"
      className="atmosphere fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* 01. PURE DAYTIME FRESH NATURAL BLUE SKY PALETTE                           */}
      {/* Fresh, clean, breathable: #A9DDF7 -> #BFE7FA -> #DDF3FC                   */}
      {/* ========================================================================= */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #A9DDF7 0%, #BFE7FA 35%, #CEECFB 68%, #DDF3FC 100%)',
        }}
      />

      {/* ========================================================================= */}
      {/* 07. SOFT MORNING SUNLIGHT (Natural daylight radiance, no harsh flare)    */}
      {/* ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(110% 65% at 50% -5%, rgba(255, 252, 242, 0.55) 0%, rgba(255, 255, 255, 0.3) 32%, rgba(191, 231, 250, 0) 75%)',
        }}
      />

      {/* Secondary soft daylight ambient glow behind central viewport */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(85% 60% at 65% 25%, rgba(255, 250, 238, 0.45) 0%, rgba(169, 221, 247, 0) 65%)',
        }}
      />

      {/* Parallax Container responding gently to mouse position */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: motionReduced ? 'none' : `translate3d(${px}px, ${py}px, 0)`,
        }}
      >
        {/* ======================================================================= */}
        {/* CONTINUOUS DRIFTING CLOUDS (16 Formations Across Endless Atmosphere)    */}
        {/* ======================================================================= */}
        {clouds.map((cloud) => {
          const width = Math.round(cloud.baseWidth * cloud.scale);
          const height = Math.round(cloud.baseHeight * cloud.scale);

          // Subtle scroll atmospheric depth offset based on tier
          const tierScrollY =
            cloud.tier === 'far'
              ? scrollOffsetFar
              : cloud.tier === 'mid'
              ? scrollOffsetMid
              : scrollOffsetNear;

          return (
            <div
              key={cloud.id}
              className={`absolute left-0 pointer-events-none ${
                motionReduced ? '' : cloud.animationClass
              }`}
              style={{
                top: `${cloud.topPercent}%`,
                width: `${width}px`,
                height: `${height}px`,
                opacity: cloud.opacity,
                transform: motionReduced
                  ? 'none'
                  : `translate3d(0, -${Math.round(tierScrollY % 80)}px, 0)`,
                willChange: 'transform',
              }}
            >
              <div
                className="relative w-full h-full"
                style={{ filter: `blur(${cloud.blurPx}px)` }}
              >
                {/* 1. Main Volumetric Cloud Core with Soft Internal Sunlight Highlight */}
                <div
                  className={`absolute top-[8%] left-[20%] w-[58%] h-[80%] ${cloud.morphology} ${cloud.shadowClass}`}
                  style={{ backgroundColor: cloud.highlightTint }}
                />

                {/* 2. Soft Organic Billowing Flank (Left) */}
                <div
                  className={`absolute top-[20%] left-[5%] w-[44%] h-[68%] ${cloud.secondaryMorphology}`}
                  style={{ backgroundColor: '#FFFFFF' }}
                />

                {/* 3. Soft Organic Billowing Flank (Right) */}
                <div
                  className={`absolute top-[14%] left-[44%] w-[48%] h-[74%] ${cloud.morphology}`}
                  style={{ backgroundColor: '#FFFFFF' }}
                />

                {/* 4. Natural Atmospheric Underbelly (Soft grey-blue shadow for 3D realism) */}
                <div
                  className="absolute top-[38%] left-[16%] w-[62%] h-[56%] rounded-full opacity-90"
                  style={{ backgroundColor: cloud.underbellyTint }}
                />

                {/* 5. Lofty Sunlight Crest on Upper Ridge */}
                <div
                  className={`absolute top-[3%] left-[32%] w-[36%] h-[52%] ${cloud.secondaryMorphology}`}
                  style={{ backgroundColor: '#FFFFFF' }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Gentle daylight open-air grain (fine atmospheric authenticity) */}
      <div
        className="absolute inset-0 opacity-[0.014] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
