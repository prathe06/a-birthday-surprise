import React, { useState, useEffect, useRef } from 'react';
import { Mail, Sparkles, Heart, Edit3, RotateCcw, FastForward, Check, Lock } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const DEFAULT_LETTER_TEXT = `Happy Birthday, Deepak Karthikeyan! 💗🎂

Ungaluku inniku birthday, so ungalukaaga indha chinna surprise create pannanum nu thonuchu. Ithu konjam different-ah irukkum nu namburen. 🤭

Namma first meet-la unexpected-ah pink outfits match aana moment-lendhu, akka graduation day-la planned-ah white outfits potta varaikkum, namakku rendu meet memories irukku. Aana oru photo kooda illaye! 😂📸

Neenga photographer-ah irundhuttu, namma rendu perukkum oru proper photo illama irukkuradhu konjam funny dhaan. So namma next meet-la indha missing photo kandippa edukkanum. Idhu oru small reminder! 🤍

Honestly, neenga enakku oru special friend. Ungakitta pesuradhu, namma share panra little moments, and indha maadhiri random memories ellame enakku happy-ah irukkum.

Ungaloda birthday romba nalla poganum. Neenga nenakkura goals ellame achieve pannanum, neraya happy moments experience pannanum, and eppovume unga passion-ah continue pannanum.

And Deepak Karthikeyan, innoru vishayam… neenga already enna pathi konjam therinjavanga dhaan, so naan inga perusa explanation kudukka poradhilla. 😂🤭

Best friends-ah irundhaalum, sila people namakku konjam extra special-ah iruppanga. Avlodhaan solluven!

Innum neraya memories create pannuvom, neraya pesuvom, and indha vaati photo edukka marandhuda koodadhu. Okay-va? 📸💗

Happy Birthday once again, Deepak Karthikeyan! Ungaluku indha year full-ah happiness, success, and beautiful memories kidaikkanum.

P.S. Photographer sir, namma first proper picture-ku nalla angle choose pannunga. Six feet height irukkuradhunaala camera angle responsibility ungalukku dhaan. 😂🎀

With lots of care,
Ungaloda best friend 💗`;

interface LetterSectionProps {
  envelopeOpen: boolean;
  onOpenEnvelope: () => void;
}

export const LetterSection: React.FC<LetterSectionProps> = ({
  envelopeOpen,
  onOpenEnvelope,
}) => {
  const [letterContent, setLetterContent] = useState<string>(() => {
    return localStorage.getItem('deepak_birthday_letter') || DEFAULT_LETTER_TEXT;
  });

  const [displayedLength, setDisplayedLength] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempEditText, setTempEditText] = useState<string>(letterContent);
  const letterContainerRef = useRef<HTMLDivElement>(null);

  // Typewriter effect trigger when envelope opens
  useEffect(() => {
    if (envelopeOpen && !isEditing) {
      setIsTyping(true);
      setDisplayedLength(0);

      let currentIdx = 0;
      const interval = setInterval(() => {
        currentIdx += 2; // type 2 characters at a time for natural speed
        if (currentIdx >= letterContent.length) {
          setDisplayedLength(letterContent.length);
          setIsTyping(false);
          clearInterval(interval);
        } else {
          setDisplayedLength(currentIdx);
        }
      }, 25);

      return () => clearInterval(interval);
    }
  }, [envelopeOpen, letterContent, isEditing]);

  const handleOpenClick = () => {
    soundEngine.playChime();
    onOpenEnvelope();
  };

  const handleSkipTyping = () => {
    setDisplayedLength(letterContent.length);
    setIsTyping(false);
  };

  const handleSaveEdit = () => {
    setLetterContent(tempEditText);
    localStorage.setItem('deepak_birthday_letter', tempEditText);
    setIsEditing(false);
    setDisplayedLength(tempEditText.length);
  };

  const handleResetDefault = () => {
    setTempEditText(DEFAULT_LETTER_TEXT);
    setLetterContent(DEFAULT_LETTER_TEXT);
    localStorage.removeItem('deepak_birthday_letter');
    setIsEditing(false);
    setDisplayedLength(DEFAULT_LETTER_TEXT.length);
  };

  return (
    <section id="birthday-letter" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 bg-pink-50 px-3.5 py-1 rounded-full border border-pink-100 mb-3">
          <Mail className="w-3.5 h-3.5 text-pink-500" />
          <span>Chapter 03 · The Letter</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight">
          A Little Letter for Deepak Karthikeyan… 💌
        </h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base font-light">
          Written with genuine warmth, best-friend laughter, and that quiet crush energy.
        </p>
      </div>

      {/* Sealed Envelope State */}
      {!envelopeOpen ? (
        <div className="max-w-xl mx-auto text-center flex flex-col items-center">
          <div
            onClick={handleOpenClick}
            className="group relative w-72 sm:w-84 h-48 sm:h-56 bg-gradient-to-br from-[#FFF5F7] to-[#FCE7EC] rounded-2xl border-2 border-pink-200/90 shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center p-6"
          >
            {/* Envelope flap triangle overlay */}
            <div className="absolute top-0 inset-x-0 h-24 border-b border-pink-200/80 bg-white/40 flex items-center justify-center rounded-t-2xl">
              {/* Wax Seal */}
              <div className="w-14 h-14 rounded-full bg-rose-500 border-2 border-white shadow-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 fill-white text-white" />
              </div>
            </div>

            <div className="mt-16 text-center">
              <span className="font-hand text-2xl sm:text-3xl text-pink-700 font-semibold block">
                A little letter for Deepak Karthikeyan…
              </span>
              <span className="text-xs text-stone-400 font-light mt-1 block">
                (Click the seal to break and unfold)
              </span>
            </div>
          </div>

          <button
            onClick={handleOpenClick}
            className="mt-8 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Break the Wax Seal &amp; Read 💌</span>
          </button>
        </div>
      ) : (
        /* Unfolded Letter Sheet with Handwritten Font & Typewriter */
        <div
          ref={letterContainerRef}
          className="relative bg-[#FFFDFC] rounded-3xl p-6 sm:p-12 md:p-16 border border-pink-200 shadow-xl max-w-3xl mx-auto transition-all"
        >
          {/* Scrapbook Paper Texture & Decorative Washi Tape on top corner */}
          <div className="absolute -top-3.5 left-10 w-44 h-7 washi-tape-pink rotate-[-2deg] rounded-xs shadow-xs flex items-center justify-center text-[10px] font-mono text-pink-700 font-semibold">
            FOR DEEPAK KARTHIKEYAN 🎀
          </div>

          <div className="absolute -top-3.5 right-10 w-24 h-7 washi-tape-white rotate-[3deg] rounded-xs shadow-xs border border-stone-200 flex items-center justify-center text-[10px] font-mono text-stone-600">
            OCT 2026 🤍
          </div>

          {/* Letter Controls Header */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-pink-100 mb-8 pt-2">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-pink-600 font-bold">
                From your Best Friend
              </span>
              {isTyping && (
                <span className="text-[11px] font-mono text-pink-500 bg-pink-50 px-2 py-0.5 rounded-full animate-pulse">
                  Typing letter…
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {isTyping && (
                <button
                  onClick={handleSkipTyping}
                  className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <FastForward className="w-3.5 h-3.5" />
                  <span>Read All</span>
                </button>
              )}

              <button
                onClick={() => {
                  setTempEditText(letterContent);
                  setIsEditing(!isEditing);
                }}
                className="px-3 py-1.5 text-xs font-medium text-pink-700 hover:text-pink-900 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Cancel Edit' : 'Personalize Text'}</span>
              </button>
            </div>
          </div>

          {/* Edit Mode */}
          {isEditing ? (
            <div className="space-y-4">
              <div className="text-xs text-stone-500 font-light">
                Feel free to add personal inside jokes or edit the Tanglish letter. Changes save in your browser!
              </div>
              <textarea
                value={tempEditText}
                onChange={(e) => setTempEditText(e.target.value)}
                rows={16}
                aria-label="Edit letter content"
                className="w-full p-4 rounded-2xl border border-pink-300 font-hand text-xl text-stone-800 bg-white focus:outline-pink-400 leading-relaxed"
              />
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={handleResetDefault}
                  className="px-4 py-2 text-xs text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                >
                  Reset to Original
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-5 py-2 text-xs font-medium bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Letter</span>
                </button>
              </div>
            </div>
          ) : (
            /* Handwritten Letter Content with Typewriter cursor */
            <div className="font-hand text-2xl sm:text-3xl text-stone-800 leading-relaxed sm:leading-loose whitespace-pre-wrap font-medium">
              {letterContent.slice(0, displayedLength)}
              {isTyping && (
                <span className="inline-block w-2.5 h-6 bg-pink-500 ml-1 animate-pulse align-middle" />
              )}
            </div>
          )}

          {/* Letter Footer watermark & seal stamp */}
          <div className="mt-12 pt-6 border-t border-pink-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs text-stone-400 font-light">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Signed with sincere care and zero apologies for looking up at you</span>
            </div>

            <div className="w-16 h-16 rounded-full border border-pink-300/80 bg-pink-50/50 flex items-center justify-center text-pink-500 text-[10px] text-center font-serif-display font-semibold rotate-12 px-1">
              Deepak Karthikeyan ♡
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
