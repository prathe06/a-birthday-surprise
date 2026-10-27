import React, { useState } from 'react';
import { Heart, Sparkles, Utensils, Award, Camera, Check } from 'lucide-react';
import pinkMandiImg from '../assets/images/pink_mandi_scrapbook_1793109014165.jpg';
import whiteGradImg from '../assets/images/white_graduation_scrapbook_1793109016246.jpg';

export const StorySection: React.FC = () => {
  const [activeMemory, setActiveMemory] = useState<1 | 2 | null>(1);
  const [pinkHeartBurst, setPinkHeartBurst] = useState(false);
  const [whiteHeartBurst, setWhiteHeartBurst] = useState(false);

  const triggerPinkReaction = () => {
    setPinkHeartBurst(true);
    setTimeout(() => setPinkHeartBurst(false), 1200);
  };

  const triggerWhiteReaction = () => {
    setWhiteHeartBurst(true);
    setTimeout(() => setWhiteHeartBurst(false), 1200);
  };

  return (
    <section id="story-timeline" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chapter 01 · The Coincidences</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight">
          Two Meets, Two Colour Matches
        </h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base font-light">
          Out of 365 days and an entire wardrobe, this is how our two meetings played out.
        </p>
      </div>

      {/* Interactive Scrapbook Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
        {/* Memory 01: The Unexpected Pink Match */}
        <div
          onClick={() => setActiveMemory(1)}
          className={`relative bg-[#FFF9FA] rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between ${
            activeMemory === 1
              ? 'border-pink-300 ring-2 ring-pink-200/50'
              : 'border-pink-100/90'
          }`}
        >
          {/* Aesthetic Washi Tape on Top */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 washi-tape-pink rotate-[-2deg] rounded-xs z-10 flex items-center justify-center">
            <span className="text-[10px] tracking-widest text-pink-700/80 uppercase font-sans font-semibold">
              UNPLANNED 🎀
            </span>
          </div>

          <div>
            {/* Header info */}
            <div className="flex items-center justify-between gap-4 mb-4 pt-2">
              <span className="font-hand text-2xl text-pink-600 font-semibold">
                Memory 01
              </span>
              <div className="flex items-center gap-1.5 text-xs font-medium text-pink-600 bg-pink-100/70 px-3 py-1 rounded-full">
                <Utensils className="w-3 h-3" />
                <span>The Mandi Date</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-stone-900 mb-3">
              Our first meet… and the pink coincidence!
            </h3>

            {/* Scrapbook Visual Card */}
            <div className="relative rounded-2xl overflow-hidden border border-pink-200/60 bg-white p-3 shadow-xs mb-5">
              <img
                src={pinkMandiImg}
                alt="Aesthetic Mandi Platter illustration with pink accents and flowers"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover rounded-xl"
              />

              {/* Tiny Pink Outfits Illustration overlay */}
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-pink-200 shadow-sm flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">👕</span>
                  <span className="text-[11px] font-medium text-pink-700">Deepak Karthikeyan in Pink</span>
                </div>
                <span className="text-stone-300">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-base">👗</span>
                  <span className="text-[11px] font-medium text-pink-700">Me in Pink</span>
                </div>
              </div>
            </div>

            {/* Real story paragraph */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light mb-4">
              “Our first meet was for mandi, and somehow we both ended up wearing pink! Nobody planned it, but look at that coincidence. 😂💗 Maybe it was just a random coincidence, but it&apos;s definitely one of those little details I&apos;ll remember.”
            </p>
          </div>

          {/* Card Footer with Caption and Interactive Heart button */}
          <div className="pt-4 border-t border-pink-100 flex items-center justify-between gap-4">
            <div className="font-hand text-lg text-pink-700">
              “Matching outfits: Unplanned. Memory: Unforgettable.”
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                triggerPinkReaction();
              }}
              aria-label="Send a pink heart to this memory"
              className="relative p-2.5 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-colors cursor-pointer"
            >
              <Heart className={`w-4 h-4 ${pinkHeartBurst ? 'scale-125 fill-pink-500 text-pink-500' : 'fill-pink-300 text-pink-500'}`} />
              {pinkHeartBurst && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-hand text-pink-600 whitespace-nowrap animate-bounce">
                  +1000 pink vibes 🎀
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Memory 02: The Planned White Match */}
        <div
          onClick={() => setActiveMemory(2)}
          className={`relative bg-[#FCFBFC] rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between ${
            activeMemory === 2
              ? 'border-stone-300 ring-2 ring-stone-200/50'
              : 'border-stone-200/80'
          }`}
        >
          {/* Aesthetic Washi Tape on Top */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-7 washi-tape-white rotate-[1.5deg] rounded-xs z-10 flex items-center justify-center border border-stone-200/50">
            <span className="text-[10px] tracking-widest text-stone-600 uppercase font-sans font-semibold">
              PLANNED 🤍
            </span>
          </div>

          <div>
            {/* Header info */}
            <div className="flex items-center justify-between gap-4 mb-4 pt-2">
              <span className="font-hand text-2xl text-stone-600 font-semibold">
                Memory 02
              </span>
              <div className="flex items-center gap-1.5 text-xs font-medium text-stone-700 bg-stone-100 px-3 py-1 rounded-full">
                <Award className="w-3 h-3 text-stone-600" />
                <span>Sister&apos;s Graduation</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-stone-900 mb-3">
              Second meet: White on white!
            </h3>

            {/* Scrapbook Visual Card */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 bg-white p-3 shadow-xs mb-5">
              <img
                src={whiteGradImg}
                alt="Aesthetic Graduation scrapbook illustration with cap and camera"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover rounded-xl"
              />

              {/* Tiny White Outfits Illustration overlay */}
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-stone-200 shadow-sm flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">👔</span>
                  <span className="text-[11px] font-medium text-stone-800">Deepak Karthikeyan in White</span>
                </div>
                <span className="text-stone-300">|</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-base">🤍</span>
                  <span className="text-[11px] font-medium text-stone-800">Me in White</span>
                </div>
              </div>
            </div>

            {/* Real story paragraph */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light mb-4">
              “Then came my sister&apos;s graduation day. This time, we both wore white, and unlike our first pink match, this one was planned! 🤍✨ Two meets, two matching outfit memories… but somehow, still zero pictures together.”
            </p>
          </div>

          {/* Card Footer with Caption and Interactive Heart button */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
            <div className="font-hand text-lg text-stone-700">
              “First pink by coincidence. Then white by choice.”
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                triggerWhiteReaction();
              }}
              aria-label="Send a white heart to this memory"
              className="relative p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <Heart className={`w-4 h-4 ${whiteHeartBurst ? 'scale-125 fill-stone-400 text-stone-600' : 'text-stone-500'}`} />
              {whiteHeartBurst && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-hand text-stone-800 whitespace-nowrap animate-bounce">
                  +1000 white aesthetic 🤍
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Summary Micro-bar */}
      <div className="mt-10 p-5 rounded-2xl bg-white border border-pink-100/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-hand text-xl font-bold">
            2
          </div>
          <div>
            <div className="text-xs font-medium text-stone-800">The Outfit Tally</div>
            <div className="text-xs text-stone-500 font-light">
              Pink Match: 100% · White Match: 100% · Pictures Taken: 0%
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-pink-600 font-medium">
          <Camera className="w-4 h-4" />
          <span>A 100% dress-matching rate with zero photo evidence!</span>
        </div>
      </div>
    </section>
  );
};
