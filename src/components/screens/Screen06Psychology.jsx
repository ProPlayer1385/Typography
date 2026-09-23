import React, { useState } from 'react';
import '../../styles/Screen06.css';
import TypoFractal from '../TypoFractal';

const CASES = [
  {
    id: 'helvetica',
    name: 'HELVETICA',
    fontClass: 'warning-helvetica',
    voice: 'DIRECT / NEUTRAL / AUTHORITATIVE',
    character: 'Clean grotesque monoline strokes, neutral horizontal terminals, compact spatial rhythm.',
    associations: 'Often associated with directness, neutrality, institutional authority, and objective clarity.',
    applications: 'Transit systems, corporate identities, regulatory guidelines, high-stakes interfaces.'
  },
  {
    id: 'times',
    name: 'TIMES NEW ROMAN',
    fontClass: 'warning-times',
    voice: 'FORMAL / TRADITIONAL / INSTITUTIONAL',
    character: 'Modulated stroke contrast, sharp bracketed serifs, dense economic proportions designed for newsprint.',
    associations: 'Often associated with academic tradition, legal gravity, formal diligence, and historical weight.',
    applications: 'Legal agreements, broadsheets, academic publishing, institutional correspondence.'
  },
  {
    id: 'comicsans',
    name: 'COMIC SANS',
    fontClass: 'warning-comicsans',
    voice: 'PLAYFUL / CASUAL / INFORMAL',
    character: 'Hand-drawn comic letterforms, intentional asymmetry, unbracketed curved finishes, loose optical spacing.',
    associations: 'Often associated with playfulness, casual levity, approachability, and youthful informality.',
    applications: 'Primary classrooms, speech balloons, family gatherings, casual announcements.'
  }
];

export default function Screen06Psychology({ onNavigateToCrimeLab }) {
  const [activeCaseId, setActiveCaseId] = useState('helvetica');

  const currentCase = CASES.find((c) => c.id === activeCaseId) || CASES[0];

  return (
    <div className="screen-06-container exp-enter" style={{ position: 'relative' }} role="region" aria-label="Experiment 06 Font Psychology">
      {/* Recursive DO NOT ENTER fractal background — very faint */}
      <TypoFractal
        glyphs={['DO NOT ENTER', 'DO NOT', 'ENTER', '⊘']}
        fontFamily={currentCase.id === 'helvetica' ? "'Arial', Helvetica, sans-serif" : currentCase.id === 'times' ? "'Times New Roman', serif" : "'Comic Sans MS', cursive"}
        fontWeight={currentCase.id === 'comicsans' ? '400' : '700'}
        color="#111111"
        maxOpacity={0.035}
        count={10}
      />
      {/* Header */}
      <div className="screen-header">
        <div className="mask-container">
          <span className="screen-number mask-reveal-up">06 / EXPERIMENT</span>
        </div>
        <div className="mask-container">
          <h1 className="screen-title mask-reveal-up stagger-1">
            Can you hear a font?
          </h1>
        </div>
      </div>

      {/* Main Interactive Warning Specimen */}
      <div className="psychology-stage fade-in stagger-2">
        <div style={{ textAlign: 'center' }}>
          <span className="mono-label" style={{ color: 'var(--accent)' }}>
            VOICE TRANSMISSION TEST // IDENTICAL MESSAGE
          </span>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--muted)', marginTop: '4px' }}>
            Wording, colour, position and scale remain constant. Notice how the internal tone shifts.
          </p>
        </div>

        <div className="warning-message-box" aria-label={`Message rendered in ${currentCase.name}`}>
          <div 
            key={currentCase.id}
            className={`warning-text ${currentCase.fontClass} anim-${currentCase.id}`}
          >
            DO NOT ENTER
          </div>
        </div>

        {/* Font Switcher Buttons */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {CASES.map((c) => (
            <button
              key={c.id}
              className={`btn-swiss hover-physical ${activeCaseId === c.id ? 'btn-swiss-accent' : 'btn-swiss-secondary'}`}
              onClick={() => setActiveCaseId(c.id)}
            >
              [ {c.name} ]
            </button>
          ))}
        </div>

        {/* Dynamically Displayed Perceived Voice */}
        <div className="perceived-voice-badge" aria-live="polite">
          <span className="mono-label" style={{ color: '#FFFFFF' }}>PERCEIVED VOICE:</span>
          <span className="voice-descriptor">
            {currentCase.voice.split(' / ').map((word, idx) => (
              <React.Fragment key={`${currentCase.id}-${word}`}>
                <span className={`inline-stagger stagger-${idx + 1}`} style={{ display: 'inline-block' }}>
                  {word}
                </span>
                {idx < currentCase.voice.split(' / ').length - 1 && ' / '}
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>

      {/* Three Case Studies */}
      <section className="fade-in stagger-3">
        <div style={{ marginBottom: 'var(--space-3)' }}>
          <span className="mono-label" style={{ color: 'var(--accent)' }}>DOCUMENTED CASE STUDIES</span>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.3rem' }}>
            PSYCHOLOGICAL PROFILE MATRIX
          </h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
            * Note: Associations depend on cultural exposure and contextual framing; they are not universal absolutes.
          </p>
        </div>

        <div className="case-study-grid">
          {CASES.map((c) => (
            <div 
              key={c.id} 
              className={`case-card hover-physical ${activeCaseId === c.id ? 'active-case' : ''}`}
            >
              <div>
                <span className="mono-label" style={{ color: 'var(--accent)' }}>CASE SPECIMEN</span>
                <h3 className="case-title">{c.name}</h3>

                <div className="case-meta-item">
                  <span className="case-meta-label">VISUAL CHARACTER</span>
                  <p className="case-meta-text">{c.character}</p>
                </div>

                <div className="case-meta-item">
                  <span className="case-meta-label">COMMON ASSOCIATIONS</span>
                  <p className="case-meta-text">{c.associations}</p>
                </div>

                <div className="case-meta-item">
                  <span className="case-meta-label">COMMON APPLICATIONS</span>
                  <p className="case-meta-text">{c.applications}</p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-3)' }}>
                <button
                  onClick={() => setActiveCaseId(c.id)}
                  className="btn-swiss-secondary hover-physical"
                  style={{ width: '100%', fontSize: '0.75rem', padding: '8px' }}
                >
                  LOAD INTO SPECIMEN ↑
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Synthesis Conclusion */}
      <div className="psychology-conclusion fade-in stagger-4">
        <div className="psychology-conclusion-headline">
          <div className="mask-container">
            <span className="mask-reveal-up" style={{ display: 'inline-block' }}>The words provide meaning.</span>
          </div>
          <br />
          <div className="mask-container">
            <span className="voice-subline mask-reveal-up stagger-1" style={{ display: 'inline-block' }}>The type influences the voice.</span>
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-5)', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onNavigateToCrimeLab}
            className="btn-swiss btn-swiss-accent hover-arrow-parent"
          >
            PROCEED TO EXP.07 — TYPOGRAPHY CRIME LAB <span className="hover-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
