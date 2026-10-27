import React from 'react';
import { Sparkles, Camera, ArrowDown, Heart } from 'lucide-react';

interface HeroSectionProps {
  onStartJourney: () => void;
  onOpenLetter: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartJourney,
  onOpenLetter,
}) => {
  return (
    <section className="relative pt-16 pb-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
      {/* Decorative Washi Tape element */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs font-semibold shadow-xs mb-8">
        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        <span>A Digital Birthday Scrapbook Made Just For Deepak Karthikeyan</span>
      </div>

      {/* Main Hero Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium text-stone-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
        Happy Birthday to my favourite photographer, <span className="text-pink-600 font-hand font-semibold inline-block transform hover:scale-105 transition-transform">Deepak Karthikeyan ♡</span>
      </h1>

      <p className="text-base sm:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light mb-10">
        Best friends, an 8-year age gap we don&apos;t dwell on, two accidental and planned matching outfits, 6 feet of photographer energy… and somehow, <span className="text-pink-600 font-medium">zero pictures together yet</span>.
      </p>

      {/* Hero Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button
          onClick={onStartJourney}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <span>Explore our memories</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>

        <button
          onClick={onOpenLetter}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-pink-50 border border-pink-200 text-pink-700 font-medium text-sm shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <span>Read the Birthday Letter 💌</span>
        </button>
      </div>

      {/* Clean Unboxed Metadata Strip (Zero-Pill Discipline with Typographic Separators) */}
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-stone-500 font-light max-w-3xl mx-auto border-t border-pink-100/90 pt-8">
        <span className="flex items-center gap-1.5 text-pink-700 font-medium">
          <Camera className="w-3.5 h-3.5" />
          <span>Deepak Karthikeyan: Photographer</span>
        </span>
        <span aria-hidden="true" className="text-pink-200">·</span>
        <span>Meet 01: Unplanned Pink Mandi 🎀</span>
        <span aria-hidden="true" className="text-pink-200">·</span>
        <span>Meet 02: Planned White Graduation 🤍</span>
        <span aria-hidden="true" className="text-pink-200">·</span>
        <span className="text-stone-800 font-medium">Photos Together: 0 (Pending)</span>
      </div>
    </section>
  );
};
