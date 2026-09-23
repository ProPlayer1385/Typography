import React, { useState, useEffect } from 'react';
import '../../styles/Finale.css';
import TypoFractal from '../TypoFractal';

// Step timings (ms from mount)
// 1 → 2.5s  → 2
// 2 → 5.5s  → 3
// 3 → 9.5s  → 4 (final)
const TIMINGS = [2500, 5500, 9500];

export default function ScreenFinale({ onRestart }) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers = TIMINGS.map((delay, i) =>
      setTimeout(() => setStep(i + 2), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Fractal opacity rises during step 2 (typography climax) then falls
  const fractalOpacity =
    step === 2 ? 0.07 :
    step === 3 ? 0.04 :
    step >= 4  ? 0.0  : 0.0;

  // Fractal glyphs evolve through sequence
  const fractalGlyphs =
    step === 2 ? ['TYPOGRAPHY', 'TYPE', 'Aa', 'T', 'Y'] :
    step === 3 ? ['Aa', 'TYPE', 'A', 'a'] :
    ['Aa'];

  return (
    <div className="finale-container" role="region" aria-label="Typelab Finale">
      {/* Evolving typographic fractal climax */}
      {step >= 2 && step < 4 && (
        <div
          className="finale-fractal-wrap"
          style={{ opacity: fractalOpacity, transition: 'opacity 1.5s ease' }}
          aria-hidden="true"
        >
          <TypoFractal
            glyphs={fractalGlyphs}
            fontFamily="var(--font-sans)"
            fontWeight="900"
            color="#FFFFFF"
            maxOpacity={1}
            count={step === 2 ? 16 : 10}
          />
        </div>
      )}

      <div className="finale-sequence-wrap">
        {/* STEP 1: Teaser */}
        {step === 1 && (
          <div className="finale-step-lead finale-anim-in">
            BEFORE YOU LEAVE...
          </div>
        )}

        {/* STEP 2: Revelation — typographic fractal climax */}
        {step === 2 && (
          <div className="finale-step-block finale-anim-in">
            <div className="finale-step-text">
              YOU'VE BEEN<br />
              READING<br />
              <span className="finale-type-word">TYPOGRAPHY</span><br />
              YOUR ENTIRE LIFE.
            </div>
          </div>
        )}

        {/* STEP 3: Recognition — climax phrase */}
        {step === 3 && (
          <div className="finale-step-block finale-anim-in">
            <div className="finale-step-text" style={{ color: 'var(--accent)' }}>
              YOU JUST<br />
              STARTED<br />
              NOTICING IT.
            </div>
          </div>
        )}

        {/* STEP 4: Final composition — clean, nearly empty */}
        {step >= 4 && (
          <div className="finale-composition finale-anim-in">
            <div className="finale-aa-mark">Aa</div>
            <div className="finale-brand">READ THIS <span className="brand-wrong">WRONG.</span></div>
            <div className="finale-divider" aria-hidden="true"></div>
            <div className="finale-essence">
              UNDERSTANDING THE ESSENCE OF TYPOGRAPHY
            </div>
            <div className="finale-course-credit">
              DESIGN FOUNDATIONS / 2026
            </div>

            <div className="finale-actions">
              <button
                onClick={onRestart}
                className="btn-swiss btn-swiss-accent hover-arrow-parent"
                style={{ fontSize: '0.85rem' }}
              >
                ↺ READ IT AGAIN <span className="hover-arrow">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
