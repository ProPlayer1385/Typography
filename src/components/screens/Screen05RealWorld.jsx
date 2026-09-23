import React, { useState } from 'react';
import '../../styles/Screen05.css';

const PANGRAM = 'Pack my box with five dozen liquor jugs.';

const TYPE_TREATMENTS = [
  {
    id: 'times', label: 'TIMES NEW ROMAN', category: 'SERIF',
    font: "'Times New Roman', Times, serif", className: 'pangram-times',
    cues: ['SERIFS', 'STROKE CONTRAST', 'EDITORIAL RHYTHM'],
    note: 'Traditional serif structure gives every letter a distinct silhouette.'
  },
  {
    id: 'helvetica', label: 'HELVETICA / SANS', category: 'SANS-SERIF',
    font: 'Arial, Helvetica, sans-serif', className: 'pangram-helvetica',
    cues: ['OPEN FORMS', 'CLEAN STROKES', 'DIRECT VOICE'],
    note: 'Removing serifs makes the same alphabet feel cleaner and more immediate.'
  },
  {
    id: 'comic', label: 'COMIC SANS', category: 'INFORMAL SANS',
    font: "'Comic Sans MS', 'Comic Neue', cursive", className: 'pangram-comic',
    cues: ['IRREGULAR FORMS', 'SOFT RHYTHM', 'CASUAL VOICE'],
    note: 'Irregular, handwritten forms make identical words feel much less formal.'
  },
  {
    id: 'courier', label: 'COURIER NEW', category: 'MONOSPACE',
    font: "'Courier New', Courier, monospace", className: 'pangram-courier',
    cues: ['EQUAL WIDTH', 'MECHANICAL RHYTHM', 'TECHNICAL VOICE'],
    note: 'Every character occupies equal width, creating a visibly mechanical rhythm.'
  },
  {
    id: 'impact', label: 'IMPACT', category: 'DISPLAY',
    font: "Impact, 'Arial Black', sans-serif", className: 'pangram-impact',
    cues: ['CONDENSED', 'HEAVY WEIGHT', 'HIGH IMPACT'],
    note: 'Condensed heavy forms turn an ordinary sentence into a headline.'
  }
];

const JOB_REFERENCES = [
  { context: 'EDITORIAL', company: 'NEWSPAPER', visual: 'newspaper', cues: ['LONG-FORM', 'HIERARCHY', 'RHYTHM'] },
  { context: 'INTERFACE', company: 'PHONE UI', visual: 'phone', cues: ['LEGIBILITY', 'SCANNING', 'SCALE'] },
  { context: 'STREAMING', company: 'CONTENT UI', visual: 'stream', cues: ['FAST SCAN', 'NAVIGATION', 'LEVELS'] },
  { context: 'FASHION', company: 'MAGAZINE', visual: 'fashion', cues: ['DRAMA', 'CONTRAST', 'IDENTITY'] },
  { context: 'SPORT', company: 'CAMPAIGN', visual: 'sport', cues: ['ENERGY', 'IMPACT', 'MOTION'] },
  { context: 'CODING', company: 'TERMINAL', visual: 'code', cues: ['MONOSPACE', 'ALIGNMENT', 'STRUCTURE'] },
  { context: 'SIGNAGE', company: 'TRANSIT', visual: 'sign', cues: ['DISTANCE', 'CLARITY', 'SPEED'] }
];

function ContextVisual({ type }) {
  if (type === 'newspaper') return <div className="context-mock newspaper-mock"><b>THE DAILY TYPE</b><i></i><span>Typography shapes how a story is entered.</span><em>Aa</em></div>;
  if (type === 'phone') return <div className="context-mock phone-mock"><div>9:41</div><b>Messages</b><span>TYPELAB</span><span>Presentation at 10:00</span></div>;
  if (type === 'stream') return <div className="context-mock stream-mock"><b>WATCH NEXT</b><div><i></i><i></i><i></i></div><strong>TYPOGRAPHY</strong></div>;
  if (type === 'fashion') return <div className="context-mock fashion-mock"><b>TYPE</b><span>THE NEW<br/>EDITORIAL</span><em>Aa</em></div>;
  if (type === 'sport') return <div className="context-mock sport-mock"><b>MOVE.</b><strong>FASTER</strong><i>01</i></div>;
  if (type === 'code') return <div className="context-mock code-mock"><span>&gt; type --inspect</span><span>font: mono;</span><span>status: readable_</span></div>;
  return <div className="context-mock sign-mock"><b>EXIT →</b><span>PLATFORM 02</span></div>;
}

export default function Screen05RealWorld({ onNavigateToPsychology }) {
  const [activeMode, setActiveMode] = useState('serif');
  const [activeTypeface, setActiveTypeface] = useState('times');
  const [activeJob, setActiveJob] = useState(0);
  const treatment = TYPE_TREATMENTS.find((item) => item.id === activeTypeface) || TYPE_TREATMENTS[0];
  const job = JOB_REFERENCES[activeJob];

  return (
    <div className="screen-05-container exp-enter" role="region" aria-label="Experiment 05 Serif vs Sans">
      <div className="screen-header">
        <div className="mask-container"><span className="screen-number mask-reveal-up">05 / EXPERIMENT</span></div>
        <div className="mask-container"><h1 className="screen-title mask-reveal-up stagger-1">Serif vs Sans.</h1></div>
      </div>

      <div className="split-comparison-grid fade-in stagger-2">
        <div className="split-col split-col-serif anim-enter-left">
          <span className="mono-label accent-label">SERIF</span>
          <div className="split-glyph-hero split-glyph-serif">Aa</div>
          <div className="visual-trait-row"><span>FEET / TERMINALS</span><span>STROKE CONTRAST</span><span>PRINT HERITAGE</span></div>
        </div>
        <div className="split-col anim-enter-right">
          <span className="mono-label accent-label">SANS-SERIF</span>
          <div className="split-glyph-hero split-glyph-sans">Aa</div>
          <div className="visual-trait-row"><span>NO SERIFS</span><span>CLEAN FORMS</span><span>DIGITAL / SIGNAGE</span></div>
        </div>
      </div>

      <div className="readability-strip fade-in stagger-3">
        <span>READABILITY ≠ ONE FONT CATEGORY</span>
        <div>SIZE</div><div>SPACE</div><div>CONTRAST</div><div>MEDIUM</div><div>CONTEXT</div>
      </div>

      <section className="pangram-lab fade-in stagger-4">
        <div className="pangram-head">
          <div>
            <span className="mono-label accent-label">TYPEFACE LAB / EVERY LETTER A–Z</span>
            <h2>One sentence. Five systems.</h2>
          </div>
          <div className="serif-sans-mini-toggle" aria-label="Quick serif sans comparison">
            <button className={activeMode === 'serif' ? 'active' : ''} onClick={() => { setActiveMode('serif'); setActiveTypeface('times'); }}>SERIF</button>
            <button className={activeMode === 'sans' ? 'active' : ''} onClick={() => { setActiveMode('sans'); setActiveTypeface('helvetica'); }}>SANS</button>
          </div>
        </div>

        <div className="pangram-type-buttons" role="group" aria-label="Choose a typeface">
          {TYPE_TREATMENTS.map((item) => (
            <button key={item.id} className={activeTypeface === item.id ? 'active' : ''} onClick={() => setActiveTypeface(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="pangram-stage" key={activeTypeface}>
          <div className={`pangram-sentence ${treatment.className}`} style={{ fontFamily: treatment.font }}>
            {PANGRAM}
          </div>
          <div className="pangram-alphabet" aria-hidden="true">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        </div>

        <div className="pangram-analysis">
          <div className="pangram-category"><small>CLASSIFICATION</small><strong>{treatment.category}</strong></div>
          <div className="pangram-cues">{treatment.cues.map((cue) => <span key={cue}>{cue}</span>)}</div>
          <p>{treatment.note}</p>
        </div>
        <div className="pangram-payoff">SAME LETTERS. <strong>DIFFERENT VOICE.</strong></div>
      </section>

      <section className="job-section fade-in stagger-5">
        <span className="mono-label accent-label">TYPOGRAPHY IN USE</span>
        <h2 className="job-title">Type has a job.</h2>
        <div className="context-tabs" role="tablist" aria-label="Typography contexts">
          {JOB_REFERENCES.map((item, index) => (
            <button key={item.context} className={activeJob === index ? 'active' : ''} onClick={() => setActiveJob(index)}>{item.context}</button>
          ))}
        </div>
        <div className="context-stage" key={job.context}>
          <ContextVisual type={job.visual} />
          <div className="context-copy">
            <small>{job.context}</small>
            <h3>{job.company}</h3>
            <div className="context-cues">{job.cues.map((cue) => <span key={cue}>{cue}</span>)}</div>
          </div>
        </div>
      </section>

      <div className="screen-05-conclusion fade-in stagger-6">
        <div className="philosophy-question">GOOD TYPOGRAPHY DOESN'T ASK:</div>
        <div className="philosophy-muted">“WHAT FONT LOOKS NICE?”</div>
        <div className="philosophy-question accent-label">IT ASKS:</div>
        <div className="philosophy-answer">“WHAT DOES THIS NEED TO <span className="accent-highlight">COMMUNICATE?</span>”</div>
        <div className="conclusion-action"><button onClick={onNavigateToPsychology} className="btn-swiss btn-swiss-accent hover-arrow-parent">PROCEED TO EXP.06 <span className="hover-arrow">→</span></button></div>
      </div>
    </div>
  );
}
