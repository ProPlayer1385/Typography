import React, { useState } from 'react';
import '../../styles/Screen04.css';
import TypoFractal from '../TypoFractal';

const CATEGORIES = [
  {
    id: 'serif',
    name: 'SERIF',
    fontClass: 'voice-serif',
    examples: 'Georgia, Times New Roman',
    associations: ['TRADITION', 'EDITORIAL', 'AUTHORITY'],
    applications: 'Books, newspapers, editorial journals, select luxury contexts'
  },
  {
    id: 'sans-serif',
    name: 'SANS-SERIF',
    fontClass: 'voice-sans',
    examples: 'Arial, Helvetica / neo-grotesk',
    associations: ['MODERN', 'DIRECT', 'NEUTRAL'],
    applications: 'Digital interfaces, wayfinding & signage, contemporary branding'
  },
  {
    id: 'script',
    name: 'SCRIPT',
    fontClass: 'voice-script',
    examples: 'Brush Script, Segoe Script',
    associations: ['PERSONAL', 'EXPRESSIVE', 'HANDWRITTEN'],
    applications: 'Invitations, artisanal goods, decorative branding, select packaging'
  },
  {
    id: 'display',
    name: 'DISPLAY',
    fontClass: 'voice-display',
    examples: 'Impact, Cooper-style display type',
    associations: ['DISTINCTIVE', 'LOUD', 'ATTENTION-GRABBING'],
    applications: 'Posters, book jackets, billboard headlines, expressive campaigns'
  },
  {
    id: 'monospace',
    name: 'MONOSPACE',
    fontClass: 'voice-mono',
    examples: 'Courier New, Consolas',
    associations: ['TECHNICAL', 'STRUCTURED', 'MECHANICAL'],
    applications: 'Code editors, financial terminals, receipts, technical documentation'
  }
];

const PRESETS = ['LOVE', 'DANGER', 'LUXURY', 'SYSTEM'];

export default function Screen04Personality({ onRestartOrIndex }) {
  const [inputText, setInputText] = useState('DESIGN');

  const displayText = inputText.trim() || 'DESIGN';

  return (
    <div className="screen-04-container exp-enter" style={{ position: 'relative' }} role="region" aria-label="Experiment 04 Type Personality">
      {/* Typographic fractal background */}
      <TypoFractal
        glyphs={displayText.length > 2 ? [displayText[0], displayText[1], 'A', 'a'] : ['A', 'a', 'Aa']}
        fontFamily="var(--font-sans)"
        fontWeight="900"
        color="#111111"
        maxOpacity={0.04}
        count={14}
      />
      {/* Header */}
      <div className="personality-header">
        <div className="mask-container">
          <span className="personality-title-number mask-reveal-up">04 / EXPERIMENT</span>
        </div>
        <div className="mask-container">
          <h1 className="personality-title-text mask-reveal-up stagger-1">
            One word.<br />Five voices.
          </h1>
        </div>
      </div>

      {/* Input Control Bar */}
      <div className="input-control-bar fade-in stagger-2">
        <div className="input-label-row">
          <label htmlFor="word-input" className="mono-label" style={{ color: 'var(--accent)' }}>
            TYPE SOMETHING:
          </label>
          <div className="preset-group">
            <span className="mono-label" style={{ color: '#AAAAAA', fontSize: '0.7rem' }}>QUICK PRESETS:</span>
            {PRESETS.map((preset) => (
              <button
                key={preset}
                className="preset-btn hover-physical"
                onClick={() => setInputText(preset)}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
        <input 
          id="word-input"
          type="text"
          maxLength={24}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="TYPE SOMETHING..."
          className="word-text-input"
        />
      </div>

      {/* Editorial Specimen Sheet (Asymmetric composition, NO generic cards) */}
      <div className="specimen-sheet fade-in stagger-3">
        {CATEGORIES.map((cat, idx) => (
          <div key={cat.id} className="specimen-row">
            {/* Col 1: Category & Typographic Examples */}
            <div className="specimen-col-category">
              <div>
                <span className="mono-label" style={{ color: 'var(--accent)' }}>
                  0{idx + 1} / CLASSIFICATION
                </span>
                <h2 className="specimen-cat-name">{cat.name}</h2>
              </div>
              <div>
                <span className="mono-label" style={{ fontSize: '0.68rem', color: 'var(--muted)', display: 'block' }}>
                  EXAMPLE TYPEFACES:
                </span>
                <span className="specimen-examples">{cat.examples}</span>
              </div>
            </div>

            {/* Col 2: The Enormous Rendered Voice Specimen */}
            <div className="specimen-col-display" aria-label={`${cat.name} specimen for ${displayText}`}>
              <div 
                key={displayText} 
                className={`rendered-voice-word ${cat.fontClass} anim-${cat.id}`}
              >
                {displayText}
              </div>
            </div>

            {/* Col 3: Psychological Associations & Real-World Applications */}
            <div className="specimen-col-meta">
              <div>
                <span className="mono-label" style={{ fontSize: '0.68rem', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>
                  ASSOCIATIONS:
                </span>
                <div className="meta-tags-wrap">
                  {cat.associations.map((assoc) => (
                    <span key={assoc} className="meta-tag-association hover-physical">
                      {assoc}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: 'var(--border-width) solid var(--border-light)', paddingTop: '8px' }}>
                <span className="mono-label" style={{ fontSize: '0.68rem', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>
                  COMMON APPLICATIONS:
                </span>
                <p className="meta-app-list">{cat.applications}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis Conclusion */}
      <div className="personality-conclusion-banner fade-in stagger-4">
        <div className="conclusion-title">
          <div className="mask-container">
            <span style={{ display: 'inline-block' }}>The word</span>
          </div>
          <br />
          <div className="mask-container">
            <span style={{ display: 'inline-block' }}>didn't change.</span>
          </div>
          <br />
          <div className="mask-container">
            <span className="accent-text" style={{ display: 'inline-block' }}>Its personality did.</span>
          </div>
        </div>

        <div className="qualification-note">
          * TYPOGRAPHIC ASSOCIATIONS DEPEND ON CONTEXT, CULTURE AND TREATMENT.
        </div>

        <div style={{ marginTop: 'var(--space-5)', display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button
            onClick={onRestartOrIndex}
            className="btn-swiss btn-swiss-accent hover-arrow-parent"
          >
            OPEN CURRICULUM INDEX [MENU] <span className="hover-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
