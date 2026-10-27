import React, { useState } from 'react';
import { Camera, Sparkles, Aperture, Eye, Film } from 'lucide-react';
import cameraArtImg from '../assets/images/kd_vintage_camera_1793109427534.jpg';
import { soundEngine } from '../utils/audio';

export const PhotographerSection: React.FC = () => {
  const [shutterFlashing, setShutterFlashing] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleShutterClick = () => {
    soundEngine.playShutterSound();
    setShutterFlashing(true);
    setClickCount((prev) => prev + 1);
    setTimeout(() => {
      setShutterFlashing(false);
    }, 180);
  };

  return (
    <section id="missing-frame" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Kicker & Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 bg-pink-50 px-3.5 py-1 rounded-full border border-pink-100 mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Chapter 02 · The Lens & The Legend</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight">
          Mr. Photographer… one important frame is still missing!
        </h2>
        <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
          “You&apos;ve probably captured so many beautiful moments through your camera, Deepak Karthikeyan. But can you believe we still haven&apos;t taken even one picture together? 😂📸 Two meets, matching outfits, and not a single photo to prove it!”
        </p>
      </div>

      {/* Main Feature Layout: Left Camera Visual & Interactive Shutter + Right Film Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">
        {/* Left Column: Photographer's Camera & Shutter Button */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-pink-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
          {/* Flash animation scrim overlay */}
          <div
            className={`absolute inset-0 bg-white z-30 transition-opacity duration-150 pointer-events-none ${
              shutterFlashing ? 'opacity-90' : 'opacity-0'
            }`}
          />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-hand text-xl text-stone-500">Deepak Karthikeyan&apos;s 35mm Tool of the Trade</span>
              <span className="text-[11px] font-mono text-pink-500 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                Aperture f/1.4
              </span>
            </div>

            {/* Vintage Camera Image */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-inner mb-6">
              <img
                src={cameraArtImg}
                alt="Vintage mechanical 35mm camera with film strips"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover"
              />

              {/* Viewfinder crosshairs overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 border border-white/50 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-pink-400/80 animate-ping" />
                </div>
              </div>
            </div>

            <p className="text-stone-700 text-sm leading-relaxed mb-4">
              Behind the lens, framing other people&apos;s memories. But what about the frame that has been due since meet number one?
            </p>
          </div>

          {/* Interactive Shutter Trigger */}
          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleShutterClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs shadow-md active:scale-95 transition-all cursor-pointer group"
            >
              <Aperture className="w-4 h-4 text-pink-400 group-hover:rotate-45 transition-transform" />
              <span>Click Deepak Karthikeyan&apos;s Shutter 📸</span>
            </button>

            <span className="text-xs text-stone-500 font-light">
              {clickCount === 0
                ? 'Sound on: Test the shutter!'
                : `Shutter clicks fired: ${clickCount} 🎞️`}
            </span>
          </div>
        </div>

        {/* Right Column: The 3-Frame Film Strip */}
        <div className="lg:col-span-7 bg-[#2A2326] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
          {/* Film Sprockets Header */}
          <div className="flex items-center justify-between border-b border-stone-700/80 pb-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-pink-300">
              <Film className="w-4 h-4 text-pink-400" />
              <span>35mm FILM ROLL · 3 FRAMES · ZERO PHOTOS TAKEN</span>
            </div>
            <span className="text-[11px] font-mono text-stone-400">EXP 2026</span>
          </div>

          {/* 3 Empty Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Frame 1: The Pink Day */}
            <div className="bg-[#1C1719] border border-dashed border-pink-400/40 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[220px] transition-all hover:border-pink-400/80">
              <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                FRAME 01
              </div>

              <div className="my-auto flex flex-col items-center">
                <span className="text-3xl mb-2">🎀</span>
                <span className="font-hand text-xl text-pink-300">The pink day</span>
                <span className="text-[11px] text-stone-400 mt-1 max-w-[130px]">
                  Mandi lunch · Outfit matched · Photo taken: 0
                </span>
              </div>

              <div className="text-[10px] font-mono text-pink-400/80 bg-pink-950/40 px-2 py-0.5 rounded">
                [EMPTY FRAME]
              </div>
            </div>

            {/* Frame 2: The White Day */}
            <div className="bg-[#1C1719] border border-dashed border-stone-400/40 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[220px] transition-all hover:border-stone-300/80">
              <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                FRAME 02
              </div>

              <div className="my-auto flex flex-col items-center">
                <span className="text-3xl mb-2">🤍</span>
                <span className="font-hand text-xl text-stone-200">The white day</span>
                <span className="text-[11px] text-stone-400 mt-1 max-w-[130px]">
                  Sister&apos;s grad · Both in white · Photo taken: 0
                </span>
              </div>

              <div className="text-[10px] font-mono text-stone-400 bg-stone-900/60 px-2 py-0.5 rounded">
                [EMPTY FRAME]
              </div>
            </div>

            {/* Frame 3: The Picture We Still Owe Ourselves */}
            <div className="relative bg-gradient-to-b from-[#2E1A22] to-[#1C1719] border-2 border-pink-400 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[220px] shadow-lg shadow-pink-950/50">
              <div className="text-[10px] font-mono text-pink-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-pink-400" />
                <span>FRAME 03</span>
              </div>

              <div className="my-auto flex flex-col items-center">
                <span className="text-3xl mb-2 animate-bounce">📸</span>
                <span className="font-hand text-xl text-pink-200 font-semibold leading-tight">
                  The picture we still owe ourselves
                </span>

                {/* Animated Coming Soon Label */}
                <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-pink-300 bg-pink-500/20 border border-pink-400/60 px-3 py-1 rounded-full animate-pulse">
                  <span>Coming soon…</span>
                  <Eye className="w-3 h-3" />
                </span>
              </div>

              <div className="text-[10px] font-mono text-pink-300">
                NEXT MEET MISSION
              </div>
            </div>
          </div>

          {/* Punchline Callout */}
          <div className="border-t border-stone-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-300">
            <p className="font-hand text-xl text-pink-300 text-center sm:text-left">
              “Your camera has one tiny mission left, Deepak Karthikeyan. Just saying. 🤭”
            </p>
            <span className="text-xs text-stone-400 font-light whitespace-nowrap">
              No pressure, Mr. Photographer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
