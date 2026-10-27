import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface OpeningScreenProps {
  onOpen: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    soundEngine.playChime();

    // Trigger joyful celebratory confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#fda4af', '#f43f5e', '#fecdd3', '#ffffff', '#fb7185'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fda4af', '#f472b6', '#fff'],
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fda4af', '#f472b6', '#fff'],
      });
    }, 250);

    // Smooth transition
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#FFF5F7] via-[#FFF0F3] to-[#FCE7EC] transition-all duration-1000 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Floating background decorative hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-[12%] left-[15%] text-pink-300/60 text-2xl animate-float-slow">♡</span>
        <span className="absolute top-[25%] right-[18%] text-rose-300/50 text-xl animate-float-slow [animation-delay:1.5s]">✦</span>
        <span className="absolute bottom-[20%] left-[20%] text-pink-400/40 text-3xl animate-float-slow [animation-delay:2.5s]">✧</span>
        <span className="absolute bottom-[28%] right-[14%] text-pink-300/60 text-2xl animate-float-slow [animation-delay:0.8s]">♡</span>
        <span className="absolute top-[48%] left-[8%] text-rose-200/70 text-lg animate-float-slow [animation-delay:3.2s]">🎀</span>
        <span className="absolute top-[35%] right-[8%] text-rose-200/70 text-lg animate-float-slow [animation-delay:2s]">✨</span>
      </div>

      <div className="relative max-w-lg w-full text-center flex flex-col items-center">
        {/* Intro Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-pink-200/60 shadow-xs mb-6 text-pink-600 text-sm font-medium tracking-wide">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>A little gift crafted with love</span>
        </div>

        {/* Headings */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-hand text-pink-600 mb-2">
          Hey Deepak Karthikeyan… 🎀
        </h2>

        <p className="text-stone-600 text-base sm:text-lg mb-4 font-light tracking-wide">
          Someone made a little something just for you.
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-medium text-stone-900 tracking-tight mb-8">
          Happy Birthday, Deepak Karthikeyan! <span className="text-pink-500 font-sans">♡</span>
        </h1>

        {/* Interactive Gift Box / Envelope Container */}
        <div className="relative mb-10 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* Subtle outer glow */}
          <div className="absolute inset-0 bg-pink-300/30 rounded-full blur-2xl animate-pulse-subtle" />

          {/* 3D-styled Gift Box with Ribbon */}
          <div
            className={`relative z-10 w-48 h-48 sm:w-52 sm:h-52 bg-gradient-to-br from-pink-100 to-rose-200 rounded-3xl border-2 border-white/80 shadow-2xl flex flex-col items-center justify-center transition-transform duration-700 ${
              isOpening ? 'scale-110 rotate-3' : 'hover:scale-105'
            }`}
          >
            {/* Horizontal Ribbon */}
            <div className="absolute inset-x-0 h-9 bg-rose-400/80 backdrop-blur-xs top-1/2 -translate-y-1/2 flex items-center justify-center shadow-inner">
              <div className="w-full h-1 bg-white/40" />
            </div>

            {/* Vertical Ribbon */}
            <div className="absolute inset-y-0 w-9 bg-rose-400/80 backdrop-blur-xs left-1/2 -translate-x-1/2 flex items-center justify-center shadow-inner">
              <div className="h-full w-1 bg-white/40" />
            </div>

            {/* Large Aesthetic Bow on Top */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div className="relative flex items-center">
                {/* Left bow loop */}
                <div className="w-10 h-8 rounded-full border-4 border-rose-400 bg-rose-300/90 -rotate-25 shadow-sm transform origin-right" />
                {/* Center knot */}
                <div className="w-7 h-7 rounded-full bg-rose-500 border-2 border-white shadow-md z-10 flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                {/* Right bow loop */}
                <div className="w-10 h-8 rounded-full border-4 border-rose-400 bg-rose-300/90 rotate-25 shadow-sm transform origin-left" />
              </div>
            </div>

            {/* Envelope tag */}
            <div className="relative z-20 mt-16 bg-white/95 px-4 py-1.5 rounded-xl shadow-md border border-pink-100/90 rotate-[-2deg]">
              <span className="font-hand text-xl text-pink-700">For Deepak Karthikeyan, with care 💌</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleOpenClick}
          disabled={isOpening}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 bg-[length:200%_auto] text-white font-medium text-base shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <span>Open your little surprise 💌</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>

        <p className="mt-4 text-xs text-stone-400 font-light">
          (A scrapbook of our memories, your camera, and zero photos together)
        </p>
      </div>
    </div>
  );
};
