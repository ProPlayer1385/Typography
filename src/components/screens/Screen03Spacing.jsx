import React, { useState } from 'react';
import '../../styles/Screen03.css';

const TIMELINE_ITEMS = [
  {
    id: '0730',
    time: '07:30',
    context: 'PHONE ALARM',
    jobs: ['HIGH CONTRAST', 'IMMEDIATE LEGIBILITY UPON WAKING', 'RAPID TIME RECOGNITION']
  },
  {
    id: '0800',
    time: '08:00',
    context: 'PRODUCT PACKAGING',
    jobs: ['BRAND PERSONALITY', 'PRODUCT IDENTIFICATION', 'INFORMATION HIERARCHY']
  },
  {
    id: '0830',
    time: '08:30',
    context: 'ROAD / METRO SIGNAGE',
    jobs: ['LEGIBILITY', 'DISTANCE RECOGNITION', 'FAST INFORMATION PROCESSING']
  },
  {
    id: '0900',
    time: '09:00',
    context: 'MESSAGING APP',
    jobs: ['SCREEN READABILITY', 'HIERARCHY', 'COMPACT INFORMATION']
  },
  {
    id: '1000',
    time: '10:00',
    context: 'COLLEGE NOTICE',
    jobs: ['VISUAL AUTHORITY', 'SCHEDULE DATES / DEADLINES', 'STRUCTURED SCANABILITY']
  },
  {
    id: '1300',
    time: '13:00',
    context: 'FOOD MENU',
    jobs: ['VISUAL PACING', 'CATEGORIZATION', 'APPETITE APPEAL', 'PRICING HIERARCHY']
  },
  {
    id: '1600',
    time: '16:00',
    context: 'PAYMENT APP',
    jobs: ['NUMERIC CLARITY', 'SECURITY / TRUST', 'UNAMBIGUOUS DECIMAL & CURRENCY RECOGNITION']
  },
  {
    id: '1800',
    time: '18:00',
    context: 'SUPERMARKET PACKAGING',
    jobs: ['SHELF DISTINCTION', 'REGULATORY INGREDIENTS', 'RAPID PRICE SCANNING']
  },
  {
    id: '2100',
    time: '21:00',
    context: 'STREAMING INTERFACE',
    jobs: ['METADATA HIERARCHY', 'DARK-MODE CONTRAST', 'THUMBNAIL SCALE LEGIBILITY']
  },
  {
    id: '2300',
    time: '23:00',
    context: 'BOOK / WEBSITE',
    jobs: ['READING RHYTHM', 'LINE LENGTH', 'LEADING', 'LONG-FORM COMFORT']
  }
];


function RealLifeVisual({ id }) {
  const common = { viewBox: '0 0 420 180', role: 'img', className: 'real-life-svg' };
  if (id === '0730') return <svg {...common} aria-label="Phone alarm typography"><rect x="125" y="8" width="170" height="164" rx="18"/><text x="210" y="78" textAnchor="middle" className="svg-big">07:30</text><text x="210" y="108" textAnchor="middle" className="svg-small">ALARM</text><line x1="165" y1="132" x2="255" y2="132"/></svg>;
  if (id === '0800' || id === '1800') return <svg {...common} aria-label="Packaging typography"><path d="M120 32h180v122H120z"/><text x="210" y="82" textAnchor="middle" className="svg-brand">NOVA</text><text x="210" y="108" textAnchor="middle" className="svg-small">ORIGINAL</text><text x="275" y="142" textAnchor="end" className="svg-price">₹49</text></svg>;
  if (id === '0830') return <svg {...common} aria-label="Road signage typography"><rect x="48" y="42" width="324" height="92" rx="3"/><text x="80" y="82" className="svg-sign">DEHRADUN</text><text x="80" y="112" className="svg-small">CITY CENTRE</text><path d="M305 88h42m-14-14 14 14-14 14"/></svg>;
  if (id === '0900') return <svg {...common} aria-label="Messaging typography"><rect x="48" y="26" width="324" height="128" rx="18"/><rect x="78" y="50" width="185" height="34" rx="17" className="bubble"/><text x="94" y="72" className="svg-chat">On my way.</text><rect x="150" y="98" width="190" height="34" rx="17" className="bubble alt"/><text x="166" y="120" className="svg-chat">See you at 10:00</text></svg>;
  if (id === '1000') return <svg {...common} aria-label="College notice typography"><rect x="78" y="18" width="264" height="144"/><text x="98" y="52" className="svg-notice">NOTICE</text><line x1="98" y1="62" x2="320" y2="62"/><text x="98" y="88" className="svg-small">DESIGN FOUNDATIONS</text><text x="98" y="116" className="svg-date">FRI / 10:00</text><line x1="98" y1="135" x2="270" y2="135"/></svg>;
  if (id === '1300') return <svg {...common} aria-label="Menu typography"><text x="52" y="52" className="svg-brand">MENU</text><text x="54" y="84" className="svg-small">PASTA</text><text x="350" y="84" textAnchor="end" className="svg-small">₹240</text><text x="54" y="112" className="svg-small">COFFEE</text><text x="350" y="112" textAnchor="end" className="svg-small">₹120</text><text x="54" y="140" className="svg-small">DESSERT</text><text x="350" y="140" textAnchor="end" className="svg-small">₹180</text></svg>;
  if (id === '1600') return <svg {...common} aria-label="Payment app typography"><rect x="92" y="18" width="236" height="144" rx="12"/><text x="210" y="52" textAnchor="middle" className="svg-small">PAYMENT SUCCESSFUL</text><text x="210" y="102" textAnchor="middle" className="svg-money">₹1,250</text><text x="210" y="132" textAnchor="middle" className="svg-small">10:16 PM</text></svg>;
  if (id === '2100') return <svg {...common} aria-label="Streaming interface typography"><rect x="32" y="26" width="356" height="128"/><text x="52" y="54" className="svg-small">NOW STREAMING</text><text x="52" y="104" className="svg-stream">AFTER DARK</text><text x="52" y="132" className="svg-small">S1:E04  •  42 MIN</text><path d="M342 88l-24-15v30z"/></svg>;
  return <svg {...common} aria-label="Book and website typography"><text x="52" y="52" className="svg-serif-title">The quiet art of reading</text><line x1="52" y1="68" x2="365" y2="68"/><line x1="52" y1="91" x2="350" y2="91"/><line x1="52" y1="110" x2="340" y2="110"/><line x1="52" y1="129" x2="300" y2="129"/></svg>;
}

export default function Screen03Spacing({ onNavigateToPersonality }) {
  // Kerning pair state
  const [selectedPair, setSelectedPair] = useState('AV'); // 'AV' | 'VA' | 'TA'
  const [kerningOffsets, setKerningOffsets] = useState({
    AV: 0,
    VA: 0,
    TA: 0
  });
  const [trackingOffset, setTrackingOffset] = useState(0);

  // Leading state
  const [leadingValue, setLeadingValue] = useState(1.35); // line-height multiplier

  // Timeline expanded items (accordion)
  const [expandedId, setExpandedId] = useState('0830');

  // Kerning handlers
  const handleSliderChange = (val) => {
    setKerningOffsets((prev) => ({
      ...prev,
      [selectedPair]: Number(val)
    }));
  };

  const handleShowIdeal = () => {
    setKerningOffsets({
      AV: -18,
      VA: -14,
      TA: -12
    });
    setTrackingOffset(2);
  };

  const handleResetKerning = () => {
    setKerningOffsets({
      AV: 0,
      VA: 0,
      TA: 0
    });
    setTrackingOffset(0);
  };

  const isRhythmRestored = leadingValue >= 1.25 && leadingValue <= 1.45;

  return (
    <div className="screen-03-container exp-enter" role="region" aria-label="Chapter 03 Spacing">
      {/* Header */}
      <div className="spacing-header">
        <div className="mask-container">
          <span className="spacing-title-number mask-reveal-up">03 / GIVE IT SPACE</span>
        </div>
        <div className="mask-container">
          <h1 className="spacing-title-text mask-reveal-up stagger-1">
            Space<br />is part<br />of type.
          </h1>
        </div>
      </div>

      {/* -------------------------------------------------------------
          DEMONSTRATION 1: KERNING & TRACKING
          ------------------------------------------------------------- */}
      <section className="lab-section fade-in stagger-2">
        <div className="lab-section-header">
          <div>
            <span className="mono-label" style={{ color: 'var(--accent)' }}>
              MICRO-SPATIAL RELATIONSHIPS
            </span>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.4rem' }}>
              KERNING VS TRACKING
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={handleShowIdeal} className="btn-swiss-secondary hover-physical" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
              SHOW IDEAL
            </button>
            <button onClick={handleResetKerning} className="btn-swiss-secondary hover-physical" style={{ padding: '6px 12px', fontSize: '0.75rem' }}>
              RESET
            </button>
          </div>
        </div>

        {/* Word Display: AVATAR */}
        <div className="kerning-display-box" aria-label="Kerning Specimen: AVATAR">
          <div className="kerning-word" style={{ letterSpacing: `${trackingOffset}px`, transition: 'letter-spacing var(--transition-fast) var(--ease-physical)' }}>
            {/* A (0) */}
            <span 
              className={`kerning-char ${selectedPair === 'AV' ? 'kerning-pair-target' : ''}`}
              style={{ marginRight: `${kerningOffsets.AV}px`, transition: 'margin-right var(--transition-fast) var(--ease-physical)' }}
            >
              A
            </span>
            {/* V (1) */}
            <span 
              className={`kerning-char ${selectedPair === 'AV' || selectedPair === 'VA' ? 'kerning-pair-target' : ''}`}
              style={{ marginRight: `${kerningOffsets.VA}px`, transition: 'margin-right var(--transition-fast) var(--ease-physical)' }}
            >
              V
            </span>
            {/* A (2) */}
            <span className={`kerning-char ${selectedPair === 'VA' ? 'kerning-pair-target' : ''}`}>
              A
            </span>
            {/* T (3) */}
            <span 
              className={`kerning-char ${selectedPair === 'TA' ? 'kerning-pair-target' : ''}`}
              style={{ marginRight: `${kerningOffsets.TA}px`, transition: 'margin-right var(--transition-fast) var(--ease-physical)' }}
            >
              T
            </span>
            {/* A (4) */}
            <span className={`kerning-char ${selectedPair === 'TA' ? 'kerning-pair-target' : ''}`}>
              A
            </span>
            {/* R (5) */}
            <span className="kerning-char">
              R
            </span>
          </div>
        </div>

        {/* Pair Selector */}
        <div className="pair-selector-row">
          <span className="mono-label" style={{ marginRight: '8px' }}>SELECT PAIR TO KERN:</span>
          {['AV', 'VA', 'TA'].map((pair) => (
            <button
              key={pair}
              className={`pair-btn hover-physical ${selectedPair === pair ? 'active' : ''}`}
              onClick={() => setSelectedPair(pair)}
            >
              PAIR [{pair}] : {kerningOffsets[pair]}px
            </button>
          ))}
        </div>

        {/* Kerning Slider */}
        <div className="slider-control-group hover-physical">
          <div className="slider-labels-row">
            <span>TOO TIGHT (COLLISION)</span>
            <span style={{ color: 'var(--accent)' }}>KERNING PAIR [{selectedPair}]: {kerningOffsets[selectedPair]}px</span>
            <span>TOO LOOSE (DETACHED)</span>
          </div>
          <input 
            type="range"
            min="-35"
            max="35"
            value={kerningOffsets[selectedPair]}
            onChange={(e) => handleSliderChange(e.target.value)}
            className="swiss-range-slider"
            aria-label={`Kerning slider for pair ${selectedPair}`}
          />
        </div>

        {/* Tracking Slider (Global Spacing) */}
        <div className="slider-control-group hover-physical" style={{ marginTop: 'var(--space-3)' }}>
          <div className="slider-labels-row">
            <span>TIGHT TRACKING</span>
            <span style={{ color: 'var(--fg)' }}>GLOBAL TRACKING (LETTER-SPACING): {trackingOffset}px</span>
            <span>EXPANDED TRACKING</span>
          </div>
          <input 
            type="range"
            min="-8"
            max="25"
            value={trackingOffset}
            onChange={(e) => setTrackingOffset(Number(e.target.value))}
            className="swiss-range-slider"
            aria-label="Global tracking slider"
          />
        </div>

        {/* Educational Explanations */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-4)', borderTop: 'var(--border-width) solid var(--border-light)', paddingTop: 'var(--space-3)' }}>
          <div>
            <strong className="mono-label" style={{ color: 'var(--accent)', display: 'block' }}>KERNING PRINCIPLE</strong>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--fg)' }}>
              Kerning adjusts the spacing between specific character pairs (like diagonal 'A' meeting angled 'V') to produce visually optically even rhythm.
            </p>
          </div>
          <div>
            <strong className="mono-label" style={{ color: 'var(--fg)', display: 'block' }}>TRACKING PRINCIPLE</strong>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--fg)' }}>
              Tracking affects a range of characters uniformly across an entire line or word, adjusting overall spatial density without altering pair-specific glyph cuts.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          DEMONSTRATION 2: LEADING
          ------------------------------------------------------------- */}
      <section className="lab-section fade-in stagger-3">
        <div className="lab-section-header">
          <div>
            <span className="mono-label" style={{ color: 'var(--accent)' }}>
              VERTICAL CADENCE
            </span>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.4rem' }}>
              LEADING (LINE-HEIGHT)
            </h2>
          </div>
          <span className="mono-label">
            VALUE: {leadingValue.toFixed(2)}×
          </span>
        </div>

        {/* Leading Specimen */}
        <div className="leading-display-box" aria-label="Leading Specimen">
          <div 
            className="leading-specimen-text"
            style={{ lineHeight: leadingValue, transition: 'line-height var(--transition-fast) var(--ease-physical)' }}
          >
            TYPOGRAPHY GIVES<br />
            WRITTEN LANGUAGE<br />
            A VISUAL VOICE.
          </div>

          {isRhythmRestored && (
            <div className="fade-in">
              <div className="rhythm-badge">
                <span>✓</span> READING RHYTHM RESTORED. [OPTIMAL BASELINE PACE]
              </div>
            </div>
          )}
        </div>

        {/* Leading Slider */}
        <div className="slider-control-group hover-physical">
          <div className="slider-labels-row">
            <span>CRAMPED (ASCENDER COLLISION)</span>
            <span style={{ color: isRhythmRestored ? 'var(--accent)' : 'var(--fg)' }}>
              {isRhythmRestored ? 'OPTIMAL ZONE' : leadingValue < 1.25 ? 'TOO TIGHT' : 'TOO AIRY'}
            </span>
            <span>AIRY (DISCONNECTED LINES)</span>
          </div>
          <input 
            type="range"
            min="0.75"
            max="2.1"
            step="0.05"
            value={leadingValue}
            onChange={(e) => setLeadingValue(Number(e.target.value))}
            className="swiss-range-slider"
            aria-label="Leading slider"
          />
        </div>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--fg)', marginTop: 'var(--space-2)' }}>
          Leading is the vertical space between lines and affects readability and rhythm. 
          When leading is too tight, the eye trips on descending strokes; when too loose, lines lose cohesion.
        </p>
      </section>

      {/* -------------------------------------------------------------
          PART 2: TYPOGRAPHY AROUND YOU
          ------------------------------------------------------------- */}
      <section className="around-you-section fade-in stagger-4">
        <span className="mono-label" style={{ color: 'var(--accent)' }}>
          CHRONOLOGICAL AUDIT // 24-HOUR INTERACTION
        </span>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 1 }}>
          You've already<br />used typography<br />today.
        </h2>

        {/* Chronological List */}
        <div className="timeline-list">
          {TIMELINE_ITEMS.map((item, index) => {
            const isExpanded = expandedId === item.id;
            const expandedIndex = TIMELINE_ITEMS.findIndex(i => i.id === expandedId);
            const isPast = expandedIndex > -1 && index < expandedIndex;

            return (
              <div 
                key={item.id} 
                className="timeline-item"
                style={{ 
                  opacity: isPast ? 0.3 : 1, 
                  transition: 'opacity var(--transition-normal) var(--ease-physical)' 
                }}
              >
                <button
                  className={`timeline-header-btn ${isExpanded ? 'expanded' : ''} hover-physical`}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  aria-expanded={isExpanded}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="timeline-time">{item.time}</span>
                    <span className="timeline-title">{item.context}</span>
                  </div>
                  <span className="mono-label" style={{ fontSize: '0.75rem' }}>
                    {isExpanded ? '▲ COLLAPSE' : '▼ INSPECT JOB'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="timeline-content-panel fade-in">
                    <div className="real-life-visual"><RealLifeVisual id={item.id} /></div>
                    <div className="mono-label" style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>
                      TYPOGRAPHY'S JOB:
                    </div>
                    <div className="job-pill-container">
                      {item.jobs.map((job) => (
                        <span key={job} className="job-pill">
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Epilogue Statement */}
        <div className="around-you-epilogue fade-in stagger-5">
          <div className="epilogue-title">
            Typography<br />
            was never<br />
            just about<br />
            fonts.
          </div>
          <div className="epilogue-sub">
            It organises how we move through information.
          </div>

          <div style={{ marginTop: 'var(--space-5)', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={onNavigateToPersonality}
              className="btn-swiss btn-swiss-accent"
            >
              CHANGE ITS CHARACTER →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
