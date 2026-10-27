/**
 * Web Audio API synthesizer for background ambient lofi music box and camera sound effects.
 * Hermetic, zero external network dependencies, reliable in any browser.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlayingMusic = false;
  private musicInterval: number | null = null;
  private gainNode: GainNode | null = null;
  private volume = 0.35;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (!this.gainNode && this.ctx) {
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
  }

  // Play a soft, dreamy chime note (Music Box style)
  public playNote(freq: number, duration = 1.6, velocity = 0.25) {
    try {
      this.initContext();
      if (!this.ctx || !this.gainNode) return;

      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Sine wave with slight triangle warmth
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Warm overtone
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(velocity, now + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + duration);
      osc2.stop(now + duration);
    } catch {
      // Audio context might fail silently if user hasn't interacted
    }
  }

  // Camera mechanical shutter sound
  public playShutterSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Click 1: Mirror flip up
      const bufferSize = this.ctx.sampleRate * 0.05;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);

      // Click 2: Shutter curtain snap (60ms later)
      setTimeout(() => {
        if (!this.ctx) return;
        const click2 = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();
        click2.type = 'triangle';
        click2.frequency.setValueAtTime(800, this.ctx.currentTime);
        click2.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

        clickGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        clickGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

        click2.connect(clickGain);
        clickGain.connect(this.ctx.destination);
        click2.start();
        click2.stop(this.ctx.currentTime + 0.05);
      }, 65);
    } catch {
      // ignore
    }
  }

  // Envelope paper rustle & gentle chime
  public playChime() {
    this.playNote(523.25, 1.2, 0.2); // C5
    setTimeout(() => this.playNote(659.25, 1.2, 0.18), 120); // E5
    setTimeout(() => this.playNote(783.99, 1.8, 0.22), 240); // G5
    setTimeout(() => this.playNote(1046.5, 2.0, 0.15), 360); // C6
  }

  // Looping soft music box melody: "Happy Birthday" subtle lofi acoustic variation
  public toggleMusic(onStart?: () => void, onStop?: () => void): boolean {
    if (this.isPlayingMusic) {
      this.stopMusic();
      if (onStop) onStop();
      return false;
    } else {
      this.startMusic();
      if (onStart) onStart();
      return true;
    }
  }

  public startMusic() {
    this.initContext();
    this.isPlayingMusic = true;

    // Melody notes (pentatonic lofi soothing melody)
    const melody: { freq: number; dur: number; delay: number }[] = [
      { freq: 261.63, dur: 0.8, delay: 0 },    // C4
      { freq: 261.63, dur: 0.8, delay: 450 },  // C4
      { freq: 293.66, dur: 1.2, delay: 900 },  // D4
      { freq: 261.63, dur: 1.2, delay: 1500 }, // C4
      { freq: 349.23, dur: 1.2, delay: 2100 }, // F4
      { freq: 329.63, dur: 2.0, delay: 2700 }, // E4

      { freq: 261.63, dur: 0.8, delay: 3600 }, // C4
      { freq: 261.63, dur: 0.8, delay: 4050 }, // C4
      { freq: 293.66, dur: 1.2, delay: 4500 }, // D4
      { freq: 261.63, dur: 1.2, delay: 5100 }, // C4
      { freq: 392.00, dur: 1.2, delay: 5700 }, // G4
      { freq: 349.23, dur: 2.0, delay: 6300 }, // F4

      { freq: 261.63, dur: 0.8, delay: 7200 }, // C4
      { freq: 261.63, dur: 0.8, delay: 7650 }, // C4
      { freq: 523.25, dur: 1.4, delay: 8100 }, // C5
      { freq: 440.00, dur: 1.4, delay: 8700 }, // A4
      { freq: 349.23, dur: 1.4, delay: 9300 }, // F4
      { freq: 329.63, dur: 1.4, delay: 9900 }, // E4
      { freq: 293.66, dur: 2.0, delay: 10500 },// D4

      { freq: 466.16, dur: 0.8, delay: 11400 },// Bb4
      { freq: 466.16, dur: 0.8, delay: 11850 },// Bb4
      { freq: 440.00, dur: 1.2, delay: 12300 },// A4
      { freq: 349.23, dur: 1.2, delay: 12900 },// F4
      { freq: 392.00, dur: 1.2, delay: 13500 },// G4
      { freq: 349.23, dur: 2.5, delay: 14100 },// F4
    ];

    const cycleLength = 16000;

    const playCycle = () => {
      if (!this.isPlayingMusic) return;
      melody.forEach(item => {
        setTimeout(() => {
          if (this.isPlayingMusic) {
            this.playNote(item.freq, item.dur, 0.18);
            // occasional gentle root chord note
            if (item.delay % 1800 === 0) {
              this.playNote(item.freq / 2, 2.2, 0.08);
            }
          }
        }, item.delay);
      });
    };

    playCycle();
    this.musicInterval = window.setInterval(playCycle, cycleLength);
  }

  public stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval !== null) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlayingMusic;
  }
}

export const soundEngine = new SoundEngine();
