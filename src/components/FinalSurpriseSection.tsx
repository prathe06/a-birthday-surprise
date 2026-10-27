import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Camera, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';

interface FinalSurpriseSectionProps {
  onReplay: () => void;
}

export const FinalSurpriseSection: React.FC<FinalSurpriseSectionProps> = ({ onReplay }) => {
  const [revealedStep, setRevealedStep] = useState(0);

  const lines = [
    'Two meets.',
    'Two matching outfit memories.',
    'Zero pictures together.',
    'And one birthday website made just for you. 🎀',
  ];

  // Progressive auto-reveal when user reaches this screen
  useEffect(() => {
    const timer1 = setTimeout(() => setRevealedStep(1), 600);
    const timer2 = setTimeout(() => setRevealedStep(2), 1500);
    const timer3 = setTimeout(() => setRevealedStep(3), 2400);
    const timer4 = setTimeout(() => {
      setRevealedStep(4);
      // Gentle celebratory confetti for the grand finale
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#fff'],
      });
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleReplayClick = () => {
    soundEngine.playChime();
    onReplay();
  };

  return (
    <section id="final-surprise" className="relative py-28 px-4 sm:px-8 bg-gradient-to-b from-[#FFF5F7] via-[#FFEBF0] to-[#FCD9E2] overflow-hidden scroll-mt-20">
      {/* Floating background petals and hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-10 left-[10%] text-pink-300 text-3xl animate-float-slow">♡</span>
        <span className="absolute top-32 right-[12%] text-rose-300 text-2xl animate-float-slow [animation-delay:1.2s]">✦</span>
        <span className="absolute bottom-20 left-[15%] text-pink-400 text-2xl animate-float-slow [animation-delay:2.4s]">✧</span>
        <span className="absolute bottom-16 right-[18%] text-pink-300 text-3xl animate-float-slow [animation-delay:0.6s]">♡</span>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 border border-pink-200 text-pink-600 text-xs font-semibold shadow-xs mb-6">
          <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
          <span>The Wrap Up</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight mb-10">
          Okay Deepak Karthikeyan… one last thing. <span className="text-pink-500">💗</span>
        </h2>

        {/* Staggered Lines Reveal */}
        <div className="space-y-4 mb-12">
          {lines.map((line, index) => {
            const isShown = revealedStep > index;
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isShown
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-4 scale-95'
                }`}
              >
                <p className="font-hand text-2xl sm:text-3xl md:text-4xl text-stone-800 font-medium">
                  {line}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final Grand Message */}
        <div
          className={`transition-all duration-1000 transform ${
            revealedStep >= 4 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-90'
          }`}
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-pink-200/90 shadow-xl mb-10">
            <div className="w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mx-auto mb-4">
              <Camera className="w-7 h-7" />
            </div>

            <p className="font-serif-display text-2xl sm:text-3xl text-stone-900 leading-snug font-medium mb-3">
              “Happy Birthday, Deepak Karthikeyan. Let&apos;s make more memories — and finally take that picture! 📸💗”
            </p>

            <span className="text-xs sm:text-sm text-stone-500 font-light block">
              Wishing you the greatest year ahead, full of passion, laughter, and sharp focus.
            </span>
          </div>

          {/* Replay Button */}
          <button
            onClick={handleReplayClick}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm shadow-lg active:scale-95 transition-all cursor-pointer group"
          >
            <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform" />
            <span>Replay your surprise ↻</span>
          </button>
        </div>
      </div>
    </section>
  );
};
