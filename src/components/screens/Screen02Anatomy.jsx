import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Screen02.css';

const ANATOMY_TERMS = [
  {
    id: 'baseline', code: '01', name: 'BASELINE',
    definition: 'The invisible horizontal line upon which all characters sit and align.',
    overlay: (
      <g className="fade-in">
        <line x1="10" y1="285" x2="530" y2="285" stroke="var(--accent)" strokeWidth="3" />
        <rect x="20" y="292" width="110" height="22" fill="var(--fg)" />
        <text x="26" y="307" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">BASELINE</text>
      </g>
    )
  },
  {
    id: 'xheight', code: '02', name: 'X-HEIGHT',
    definition: 'The vertical height of lowercase letters excluding ascenders and descenders.',
    overlay: (
      <g className="fade-in">
        <rect x="20" y="145" width="500" height="140" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 2" />
        <rect x="20" y="118" width="120" height="22" fill="var(--fg)" />
        <text x="26" y="133" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">X-HEIGHT</text>
      </g>
    )
  },
  {
    id: 'ascender', code: '03', name: 'ASCENDER',
    definition: 'The portion of a lowercase letter that rises above the x-height.',
    overlay: (
      <g className="fade-in">
        <rect x="20" y="65" width="500" height="80" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 2" />
        <rect x="20" y="38" width="130" height="22" fill="var(--fg)" />
        <text x="26" y="53" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">ASCENDER ZONE</text>
      </g>
    )
  },
  {
    id: 'descender', code: '04', name: 'DESCENDER',
    definition: 'The portion of a letter that falls below the baseline (visible on lowercase g).',
    overlay: (
      <g className="fade-in">
        <rect x="240" y="285" width="280" height="85" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="2" />
        <rect x="240" y="340" width="140" height="22" fill="var(--fg)" />
        <text x="246" y="355" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">DESCENDER (g)</text>
      </g>
    )
  },
  {
    id: 'stem', code: '05', name: 'STEM',
    definition: 'The primary vertical or main diagonal stroke of a letterform.',
    overlay: (
      <g className="fade-in">
        <rect x="160" y="80" width="45" height="205" fill="none" stroke="var(--accent)" strokeWidth="3" />
        <rect x="130" y="60" width="80" height="20" fill="var(--fg)" />
        <text x="136" y="74" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">STEM</text>
      </g>
    )
  },
  {
    id: 'counter', code: '06', name: 'COUNTER',
    definition: 'The enclosed or partially enclosed negative space inside a letterform.',
    overlay: (
      <g className="fade-in">
        <circle cx="365" cy="228" r="38" fill="var(--accent)" fillOpacity="0.25" stroke="var(--accent)" strokeWidth="3" />
        <rect x="330" y="275" width="90" height="20" fill="var(--fg)" />
        <text x="336" y="289" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">COUNTER</text>
      </g>
    )
  },
  {
    id: 'terminal', code: '07', name: 'TERMINAL',
    definition: 'The end of a stroke not terminated by a serif (e.g., ear or finish of g).',
    overlay: (
      <g className="fade-in">
        <circle cx="430" cy="165" r="22" fill="none" stroke="var(--accent)" strokeWidth="3" />
        <rect x="390" y="125" width="100" height="20" fill="var(--fg)" />
        <text x="396" y="139" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">TERMINAL</text>
      </g>
    )
  },
  {
    id: 'ligature', code: '08', name: 'LIGATURE',
    definition: 'Two or more intersecting characters fused into a single typographic glyph.',
    overlay: (
      <g className="fade-in">
        <circle cx="280" cy="120" r="40" fill="none" stroke="var(--accent)" strokeWidth="3" strokeDasharray="4 4" />
        <rect x="230" y="60" width="100" height="20" fill="var(--fg)" />
        <text x="236" y="74" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">COLLISION POINT</text>
      </g>
    )
  },
  {
    id: 'kerning', code: '09', name: 'KERNING',
    definition: 'The adjustment of space between individual pairs of characters.',
    overlay: (
      <g className="fade-in">
        <path d="M 270 200 L 210 200 M 270 200 L 330 200" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
        <rect x="220" y="215" width="100" height="20" fill="var(--fg)" />
        <text x="226" y="229" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">NEGATIVE SPACE</text>
      </g>
    )
  },
  {
    id: 'leading', code: '10', name: 'LEADING',
    definition: 'The vertical distance between baselines of successive lines of type.',
    overlay: (
      <g className="fade-in">
        <line x1="120" y1="180" x2="420" y2="180" stroke="#111" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="120" y1="360" x2="420" y2="360" stroke="#111" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="400" y1="180" x2="400" y2="360" stroke="var(--accent)" strokeWidth="3" />
        <rect x="410" y="260" width="80" height="20" fill="var(--fg)" />
        <text x="416" y="274" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700">LEADING</text>
      </g>
    )
  }
];

const SENTENCE_TYPEFACES = [
  {
    id: 'times',
    label: 'TIMES NEW ROMAN',
    fontFamily: "'Times New Roman', Georgia, serif",
    category: 'SERIF',
    character: 'FORMAL / TRADITIONAL / EDITORIAL',
    structure: 'BRACKETED SERIFS / CONTRASTING STROKES',
    context: 'DOCUMENTS / EDITORIAL / PRINT',
  },
  {
    id: 'helvetica',
    label: 'HELVETICA / NEO-GROTESK',
    fontFamily: "'Arial', Helvetica, sans-serif",
    category: 'SANS-SERIF',
    character: 'NEUTRAL / DIRECT / MODERN',
    structure: 'UNIFORM STROKES / NO SERIFS',
    context: 'INTERFACES / SIGNAGE / BRANDING',
  },
  {
    id: 'comicsans',
    label: 'COMIC SANS',
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
    category: 'SANS-SERIF / INFORMAL',
    character: 'CASUAL / FRIENDLY / HAND-DRAWN CHARACTER',
    structure: 'IRREGULAR STROKES / CURVED FINISHES',
    context: 'INFORMAL / CLASSROOMS / CASUAL',
  },
  {
    id: 'courier',
    label: 'COURIER NEW',
    fontFamily: "'Courier New', 'Courier', monospace",
    category: 'MONOSPACE',
    character: 'MECHANICAL / NEUTRAL / TYPEWRITER',
    structure: 'EQUAL CHARACTER WIDTH / SLAB SERIFS',
    context: 'CODE / TERMINALS / DOCUMENTS',
  },
  {
    id: 'impact',
    label: 'IMPACT',
    fontFamily: "'Impact', 'Arial Black', sans-serif",
    category: 'DISPLAY',
    character: 'HEAVY / CONDENSED / FORCEFUL',
    structure: 'EXTREME WEIGHT / CONDENSED WIDTH',
    context: 'HEADLINES / POSTERS / CAMPAIGNS',
  },
  {
    id: 'script',
    label: 'SCRIPT',
    fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    category: 'SCRIPT',
    character: 'EXPRESSIVE / PERSONAL / HANDWRITTEN CHARACTER',
    structure: 'FLUID STROKES / CONNECTING LETTERFORMS',
    context: 'INVITATIONS / BRANDING / ARTISANAL',
  },
];

const SENTENCE = 'I have not slept the entire night for this.';

export default function Screen02Anatomy({ onNavigateToSpacing }) {
  const [activeTermId, setActiveTermId] = useState('baseline');
  const [isScanning, setIsScanning] = useState(false);
  const [viewMode, setViewMode] = useState('glyph');
  const [selectedTypeface, setSelectedTypeface] = useState('times');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sentenceLeading, setSentenceLeading] = useState(1.08);
  const scanTimerRef = useRef(null);

  const activeTerm = ANATOMY_TERMS.find((t) => t.id === activeTermId) || ANATOMY_TERMS[0];
  const activeTypeface = SENTENCE_TYPEFACES.find((t) => t.id === selectedTypeface) || SENTENCE_TYPEFACES[0];

  useEffect(() => {
    if (isScanning) {
      scanTimerRef.current = setInterval(() => {
        setActiveTermId((current) => {
          const currentIndex = ANATOMY_TERMS.findIndex((t) => t.id === current);
          const nextIndex = (currentIndex + 1) % ANATOMY_TERMS.length;
          return ANATOMY_TERMS[nextIndex].id;
        });
      }, 2000);
    } else if (scanTimerRef.current) {
      clearInterval(scanTimerRef.current);
    }
    return () => clearInterval(scanTimerRef.current);
  }, [isScanning]);

  const toggleScan = () => {
    setIsScanning((prev) => !prev);
    if (viewMode === 'sentence') setViewMode('glyph');
  };

  const handleSelectTerm = (id) => {
    setIsScanning(false);
    setActiveTermId(id);
  };

  const handleSelectTypeface = (id) => {
    if (id === selectedTypeface) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedTypeface(id);
      setIsTransitioning(false);
    }, 380);
  };

  return (
    <div className="screen-02-container exp-enter" role="region" aria-label="Chapter 02 Anatomy">
      {/* Header */}
      <div className="anatomy-header">
        <div>
          <div className="mask-container">
            <span className="anatomy-title-number mask-reveal-up">02 / BREAK IT DOWN</span>
          </div>
          <div className="mask-container">
            <h1 className="anatomy-title-text mask-reveal-up stagger-1">
              Every letter<br />has a body.
            </h1>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
          <button
            onClick={() => setViewMode(viewMode === 'glyph' ? 'sentence' : 'glyph')}
            className="btn-swiss-secondary"
            aria-label="Toggle Sentence View"
          >
            {viewMode === 'sentence' ? 'VIEW SPECIMEN' : 'VIEW IN SENTENCE'}
          </button>
          <button
            onClick={toggleScan}
            className={`btn-swiss ${isScanning ? 'btn-swiss-accent' : ''}`}
            aria-label="Scan through all anatomy terms"
          >
            {isScanning ? '⏹ STOP SCAN' : '▶ SCAN ALL'}
          </button>
        </div>
      </div>

      {/* Main Specimen & Sidebar */}
      <div className="anatomy-layout">
        <div className="specimen-stage" aria-label="Anatomy Specimen">
          {/* Very faint anatomy background glyphs */}
          <div className="anatomy-bg-fractal" aria-hidden="true">
            {['a','g','A','G','a','g'].map((ch, i) => (
              <span key={i} className={`anatomy-bg-glyph anatomy-bg-glyph-${i}`}>{ch}</span>
            ))}
          </div>

          {viewMode === 'glyph' ? (
            <div className="specimen-canvas fade-in" key={activeTerm.id}>
              {!['baseline', 'xheight', 'ascender', 'descender', 'stem', 'counter', 'terminal'].includes(activeTerm.id) && (
                <span className={`specimen-glyph-text ${activeTerm.id === 'ligature' ? 'ligature-active' : ''} ${activeTerm.id === 'kerning' ? 'kerning-active' : ''} ${activeTerm.id === 'leading' ? 'leading-active' : ''}`}>
                  {activeTerm.id === 'ligature' && <span className="ligature-text">f<span className="ligature-i">i</span></span>}
                  {activeTerm.id === 'kerning' && <span className="kerning-text">A<span className="kerning-v">V</span></span>}
                  {activeTerm.id === 'leading' && <span className="leading-text">A<br/>g</span>}
                </span>
              )}
              <svg
                className="anatomy-svg-overlay"
                viewBox="0 0 540 380"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                  </marker>
                </defs>
                {['baseline', 'xheight', 'ascender', 'descender', 'stem', 'counter', 'terminal'].includes(activeTerm.id) && (
                  <text
                    className="anatomy-svg-glyph"
                    x="270"
                    y="285"
                    textAnchor="middle"
                    fill="var(--fg)"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontSize="300"
                    fontWeight="400"
                  >Ag</text>
                )}
                <line x1="20" y1="285" x2="520" y2="285" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                <line x1="20" y1="145" x2="520" y2="145" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                {activeTerm.overlay}
              </svg>
            </div>
          ) : (
            <div className={`sentence-canvas fade-in sentence-anatomy sentence-mode-${activeTerm.id}`}>
              <div className="sentence-anatomy-kicker">REAL LANGUAGE / {activeTerm.code} {activeTerm.name}</div>
              <div className="sentence-text" style={{ lineHeight: activeTerm.id === 'leading' ? sentenceLeading : 1.08 }}>
                {['xheight','ascender','descender','stem','terminal'].includes(activeTerm.id) ? (
                  <>
                    <div className="sentence-line sentence-lower">I have not slept</div>
                    <div className="sentence-line sentence-lower">the entire night</div>
                    <div className="sentence-line sentence-lower">for this.</div>
                  </>
                ) : (
                  <>
                    <div className="sentence-line">I HAVE NOT SLEPT</div>
                    <div className="sentence-line">THE ENTIRE NIGHT</div>
                    <div className="sentence-line">FOR THIS.</div>
                  </>
                )}
              </div>

              {activeTerm.id === 'baseline' && <div className="sentence-baselines" aria-hidden="true"><i></i><i></i><i></i></div>}
              {activeTerm.id === 'xheight' && <div className="sentence-xheight-band" aria-hidden="true"><span>X-HEIGHT</span></div>}
              {activeTerm.id === 'ascender' && <div className="sentence-callout sentence-callout-top">h / l / t <span>rise above x-height</span></div>}
              {activeTerm.id === 'descender' && <div className="sentence-absence-card"><strong>NO TRUE DESCENDER IN THIS SENTENCE.</strong><span>Compare: typo<span className="descender-mark">g</span>ra<span className="descender-mark">p</span>h<span className="descender-mark">y</span></span></div>}
              {activeTerm.id === 'stem' && <div className="sentence-callout sentence-callout-left">STEMS <span>main structural strokes</span></div>}
              {activeTerm.id === 'counter' && <div className="sentence-counter-demo" aria-label="Counters highlighted in O and A"><span>O</span><span>A</span><small>COUNTERS = INNER SPACE</small></div>}
              {activeTerm.id === 'terminal' && <div className="sentence-callout sentence-callout-right">TERMINAL <span>stroke ending; form depends on typeface</span></div>}
              {activeTerm.id === 'ligature' && <div className="sentence-absence-card"><strong>NO STANDARD FI / FL LIGATURE OCCURS HERE.</strong><span className="sentence-ligature-demo">f + i <b>→</b> ﬁ &nbsp;&nbsp; f + l <b>→</b> ﬂ</span></div>}
              {activeTerm.id === 'kerning' && <div className="sentence-kerning-demo"><span>T</span><span className="kern-a">A</span><small>PAIR SPACING / TA</small></div>}
              {activeTerm.id === 'leading' && (
                <div className="sentence-leading-control">
                  <label htmlFor="sentence-leading">LEADING <span>{sentenceLeading.toFixed(2)}</span></label>
                  <input id="sentence-leading" type="range" min="0.72" max="1.65" step="0.01" value={sentenceLeading} onChange={(e) => setSentenceLeading(Number(e.target.value))} />
                  <div><span>CRAMPED</span><span>OPEN</span></div>
                </div>
              )}
              <div className="sentence-anatomy-caption">
                <strong>{activeTerm.name}</strong>
                <span>{activeTerm.definition}</span>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="anatomy-sidebar">
          <div className="anatomy-sidebar-header">
            <span className="mono-label" style={{ color: '#FFFFFF' }}>ANATOMICAL INDEX</span>
            <span className="mono-label" style={{ color: 'var(--accent)' }}>10 CRITICAL CONCEPTS</span>
          </div>
          <ul className="terms-list">
            {ANATOMY_TERMS.map((term) => {
              const isActive = term.id === activeTermId;
              return (
                <li key={term.id}>
                  <button
                    className={`term-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectTerm(term.id)}
                    aria-pressed={isActive}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className="mono-label" style={{ color: isActive ? 'var(--accent)' : 'var(--muted)' }}>{term.code}</span>
                      <span className="term-name">{term.name}</span>
                    </div>
                    <span className="mono-label" style={{ fontSize: '0.7rem' }}>{isActive ? '● ACTIVE' : 'INSPECT →'}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="definition-box" aria-live="polite">
            <div className="mono-label" style={{ color: '#AAAAAA', fontSize: '0.68rem', marginBottom: '4px' }}>
              DEFINITION // {activeTerm.code}
            </div>
            <h2 className="definition-term">{activeTerm.name}</h2>
            <p className="definition-text">{activeTerm.definition}</p>
          </div>
        </div>
      </div>

      {/* ===================================================
          SAME SENTENCE. DIFFERENT TYPE.
          =================================================== */}
      <div className="sentence-typeface-section">
        <div className="sentence-tf-header">
          <div>
            <div className="mask-container">
              <span className="mono-label mask-reveal-up" style={{ color: 'var(--accent)' }}>SAME SENTENCE / DIFFERENT TYPE</span>
            </div>
            <div className="mask-container">
              <h2 className="sentence-tf-title mask-reveal-up stagger-1">
                Same sentence.<br />Different type.
              </h2>
            </div>
          </div>
          <p className="sentence-tf-note">
            The wording, colour, and position remain constant.<br />
            Only the typeface changes. Notice what changes.
          </p>
        </div>

        <div className="sentence-tf-buttons" role="group" aria-label="Select typeface">
          {SENTENCE_TYPEFACES.map((tf) => (
            <button
              key={tf.id}
              onClick={() => handleSelectTypeface(tf.id)}
              className={`tf-select-btn ${selectedTypeface === tf.id ? 'tf-active' : ''}`}
              aria-pressed={selectedTypeface === tf.id}
            >
              <span className="tf-btn-category">{tf.category}</span>
              <span className="tf-btn-label">{tf.label}</span>
            </button>
          ))}
        </div>

        <div className="sentence-specimen-stage">
          <div
            className={`sentence-specimen-text ${isTransitioning ? 'sentence-tf-exit' : 'sentence-tf-enter'}`}
            style={{ fontFamily: activeTypeface.fontFamily }}
            aria-live="polite"
          >
            {SENTENCE}
          </div>
        </div>

        <div className="tf-info-panel" aria-live="polite" key={selectedTypeface}>
          <div className="tf-info-name">{activeTypeface.label}</div>
          <div className="tf-info-grid">
            <div className="tf-info-row">
              <span className="tf-info-label">CATEGORY</span>
              <span className="tf-info-value">{activeTypeface.category}</span>
            </div>
            <div className="tf-info-row">
              <span className="tf-info-label">VISUAL CHARACTER</span>
              <span className="tf-info-value">{activeTypeface.character}</span>
            </div>
            <div className="tf-info-row">
              <span className="tf-info-label">STRUCTURE</span>
              <span className="tf-info-value">{activeTypeface.structure}</span>
            </div>
            <div className="tf-info-row">
              <span className="tf-info-label">COMMON CONTEXT</span>
              <span className="tf-info-value">{activeTypeface.context}</span>
            </div>
          </div>
        </div>

        <div className="sentence-tf-conclusion">
          <span className="sentence-tf-coda">SAME WORDS.</span>
          <span className="sentence-tf-coda" style={{ color: 'var(--accent)' }}>DIFFERENT VOICE.</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-6)' }}>
        <button
          onClick={onNavigateToSpacing}
          className="btn-swiss btn-swiss-accent hover-arrow-parent"
        >
          GIVE IT SPACE <span className="hover-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
