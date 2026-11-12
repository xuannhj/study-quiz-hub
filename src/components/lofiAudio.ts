export type LofiSoundMode = 'off' | 'rain' | 'lofi';

const CHORD_PROGRESSION = [
  [261.63, 329.63, 392.0, 493.88], // Cmaj7
  [220.0, 261.63, 329.63, 392.0], // Am7
  [174.61, 220.0, 261.63, 329.63], // Fmaj7
  [196.0, 246.94, 293.66, 349.23], // G7sus / soft dominant
];

/**
 * Lightweight Web Audio synthesizer for gentle rain and warm lofi chords.
 * Requires no external audio files and initializes only on user interaction.
 */
class LofiAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private rainSource: AudioBufferSourceNode | null = null;
  private chordTimer: number | null = null;
  private chordIndex = 0;

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return null;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.25;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  private startRain(ctx: AudioContext, dest: AudioNode) {
    const bufferSize = ctx.sampleRate * 3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Soft brown-pink noise curve for warm rainfall sound
      data[i] = (lastOut + 0.04 * white) / 1.04;
      lastOut = data[i];
      data[i] *= 2.4;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 850;
    filter.Q.value = 0.55;

    const rainGain = ctx.createGain();
    rainGain.gain.value = 0.45;

    source.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(dest);
    source.start();
    this.rainSource = source;
  }

  private playSoftChord(ctx: AudioContext, dest: AudioNode) {
    const notes = CHORD_PROGRESSION[this.chordIndex % CHORD_PROGRESSION.length];
    this.chordIndex += 1;
    const now = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const noteGain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = freq;

      filter.type = 'lowpass';
      filter.frequency.value = 720;

      const startAt = now + idx * 0.04;
      noteGain.gain.setValueAtTime(0.0001, startAt);
      noteGain.gain.exponentialRampToValueAtTime(0.055, startAt + 0.35);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, startAt + 3.6);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(dest);

      osc.start(startAt);
      osc.stop(startAt + 3.8);
    });
  }

  setMode(mode: LofiSoundMode) {
    this.stop();
    if (mode === 'off') return;

    try {
      const ctx = this.ensureContext();
      if (!ctx || !this.masterGain) return;

      this.startRain(ctx, this.masterGain);

      if (mode === 'lofi') {
        this.playSoftChord(ctx, this.masterGain);
        this.chordTimer = window.setInterval(() => {
          if (this.ctx && this.masterGain) {
            this.playSoftChord(this.ctx, this.masterGain);
          }
        }, 3800);
      }
    } catch {
      // Ignore audio errors in restricted environments.
    }
  }

  stop() {
    if (this.chordTimer !== null) {
      window.clearInterval(this.chordTimer);
      this.chordTimer = null;
    }
    if (this.rainSource) {
      try {
        this.rainSource.stop();
        this.rainSource.disconnect();
      } catch {
        // Already stopped.
      }
      this.rainSource = null;
    }
  }
}

export const lofiAudio = new LofiAudioEngine();

