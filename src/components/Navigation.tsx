import React from 'react';

interface NavigationProps {
  onScrollTo: (id: string) => void;
  onOpenLetter: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onScrollTo, onOpenLetter }) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#FFF8F8]/90 backdrop-blur-md border-b border-pink-100/80 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-8 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-base sm:text-lg font-serif-display font-semibold tracking-tight text-stone-900 hover:text-pink-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Deepak Karthikeyan's Birthday Scrapbook <span className="text-pink-500 font-sans">♡</span>
        </button>

        {/* Zone 2: clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-600">
          <button
            onClick={() => onScrollTo('story-timeline')}
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Our Meets
          </button>
          <button
            onClick={() => onScrollTo('missing-frame')}
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Missing Frame
          </button>
          <button
            onClick={() => onScrollTo('birthday-letter')}
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            The Letter
          </button>
          <button
            onClick={() => onScrollTo('final-surprise')}
            className="hover:text-pink-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            One Last Thing 💗
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenLetter}
            className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 shadow-xs hover:shadow-sm active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Read Letter 💌
          </button>
        </div>
      </div>
    </header>
  );
};
