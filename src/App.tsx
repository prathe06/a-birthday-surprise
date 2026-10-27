/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { PhotographerSection } from './components/PhotographerSection';
import { LetterSection } from './components/LetterSection';
import { FinalSurpriseSection } from './components/FinalSurpriseSection';
import { AudioPlayer } from './components/AudioPlayer';
import { Heart, Camera, ArrowUp } from 'lucide-react';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLetterDirectly = () => {
    setEnvelopeOpen(true);
    scrollTo('birthday-letter');
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setEnvelopeOpen(false);
    setTimeout(() => {
      setIsOpened(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F8] text-stone-800 font-sans selection:bg-pink-200 selection:text-pink-900 relative">
      {/* Opening Fullscreen Surprise Screen */}
      {!isOpened && (
        <OpeningScreen
          onOpen={() => {
            setIsOpened(true);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        />
      )}

      {/* Main Website (visible after opening) */}
      <div className={`transition-opacity duration-700 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation Bar */}
        <Navigation
          onScrollTo={scrollTo}
          onOpenLetter={handleOpenLetterDirectly}
        />

        <main>
          {/* Hero Welcome */}
          <HeroSection
            onStartJourney={() => scrollTo('story-timeline')}
            onOpenLetter={handleOpenLetterDirectly}
          />

          {/* Chapter 01: Our Little Story (Pink & White meets) */}
          <StorySection />

          {/* Chapter 02: The Photographer & The Missing Frame */}
          <PhotographerSection />

          {/* Chapter 03: The Personalized Birthday Letter */}
          <LetterSection
            envelopeOpen={envelopeOpen}
            onOpenEnvelope={() => setEnvelopeOpen(true)}
          />

          {/* Final Surprise Screen */}
          <FinalSurpriseSection onReplay={handleReplay} />
        </main>

        {/* Quiet Clean Footer */}
        <footer className="border-t border-pink-100/90 py-10 px-4 text-center text-xs text-stone-400 bg-white/40">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 font-hand text-lg text-pink-600">
              <span>Made with care for Deepak Karthikeyan</span>
              <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-500">
              <span>Best Friends</span>
              <span aria-hidden="true">·</span>
              <span>2 Meets</span>
              <span aria-hidden="true">·</span>
              <span>1 Missing Photograph</span>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1 text-stone-500 hover:text-pink-600 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>

        {/* Floating Audio Player (music muted by default) */}
        <AudioPlayer />
      </div>
    </div>
  );
}
