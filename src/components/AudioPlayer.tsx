import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const toggle = () => {
    const nextState = soundEngine.toggleMusic(
      () => setIsPlaying(true),
      () => setIsPlaying(false)
    );
    setIsPlaying(nextState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    soundEngine.setVolume(val);
  };

  useEffect(() => {
    return () => {
      soundEngine.stopMusic();
    };
  }, []);

  return (
    <aside aria-label="Audio player" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Volume slider popout */}
      {showVolumeSlider && (
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-pink-100 transition-all">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume slider"
            className="w-20 h-1.5 accent-pink-500 bg-pink-100 rounded-lg cursor-pointer"
          />
          <span className="text-[11px] text-pink-700 font-medium tabular-nums w-7 text-right">
            {Math.round(volume * 100)}%
          </span>
        </div>
      )}

      {/* Main Music Button */}
      <div className="flex items-center bg-white/95 backdrop-blur-md border border-pink-200/80 shadow-md hover:shadow-lg rounded-full p-1.5 pl-3 transition-all duration-200">
        <button
          onClick={toggle}
          aria-label={isPlaying ? 'Pause background music' : 'Play soft music box melody'}
          className="flex items-center gap-2 text-xs font-medium text-stone-700 hover:text-pink-600 transition-colors pr-2"
        >
          <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-pink-50 text-pink-500 border border-pink-100">
            {isPlaying ? (
              <Disc className="w-4 h-4 animate-spin text-pink-500" />
            ) : (
              <Music className="w-4 h-4 text-stone-400" />
            )}
          </span>
          <span className="whitespace-nowrap hidden sm:inline text-xs">
            {isPlaying ? 'Lofi Music Box: Playing' : 'Background Music: Muted'}
          </span>
        </button>

        <button
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          aria-label="Toggle volume slider"
          className="p-1.5 text-stone-400 hover:text-pink-600 rounded-full hover:bg-pink-50 transition-colors border-l border-pink-100 ml-1"
        >
          {volume === 0 || !isPlaying ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </aside>
  );
};
