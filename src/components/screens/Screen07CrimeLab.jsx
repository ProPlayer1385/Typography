import React, { useState } from 'react';
import '../../styles/Screen07.css';

const OPTIONS = ['TYPEFACE', 'COLOUR', 'MESSAGE', 'NOTHING'];

function ChoiceRow({ value, onChange, disabled = false }) {
  return <div className="crime-choice-row">{OPTIONS.map((opt) => <button key={opt} className={`btn-swiss hover-physical ${value === opt ? 'btn-swiss-accent' : 'btn-swiss-secondary'}`} onClick={() => onChange(opt)} disabled={disabled}>[ {opt} ]</button>)}</div>;
}

export default function Screen07CrimeLab({ onNavigateToInstinct }) {
  const [case1Answer, setCase1Answer] = useState(null); const [case1Fixed, setCase1Fixed] = useState(false);
  const [case2Answer, setCase2Answer] = useState(null); const [case2Fixed, setCase2Fixed] = useState(false);
  const [case3Diagnosed, setCase3Diagnosed] = useState(false); const [case3Fixed, setCase3Fixed] = useState(false);

  return (
    <div className="screen-07-container exp-enter" role="region" aria-label="Experiment 07 Typography Crime Lab">
      <div className="screen-header"><div className="mask-container"><span className="screen-number mask-reveal-up">07 / EXPERIMENT</span></div><div className="mask-container"><h1 className="screen-title mask-reveal-up stagger-1">Typography Crime Lab.</h1></div></div>
      <div className="crime-intro"><span>3 CASES</span><strong>THE WORDS STAY. THE TYPOGRAPHY GETS REPAIRED.</strong></div>

      <article className="crime-case-box fade-in stagger-2">
        <div className="crime-case-header"><span className="mono-label accent-label">CASE 01 // WARNING</span><span className="mono-label">{case1Fixed ? '✓ TONE RESTORED' : 'TONE MISMATCH'}</span></div>
        <div className={`crime-specimen-viewport warning-scene ${case1Fixed ? 'is-fixed' : ''}`}>
          <div className="warning-icon">⚡</div><div className="warning-copy"><strong>DANGER</strong><span>HIGH VOLTAGE</span></div>
          {case1Fixed && <div className="repair-flash">TONE RESTORED</div>}
        </div>
        <div className="crime-actions-row"><div className="mono-label">WHAT'S WRONG?</div><ChoiceRow value={case1Answer} onChange={setCase1Answer} disabled={case1Fixed}/>{case1Answer === 'TYPEFACE' && <div className="diagnosis-badge"><b>CORRECT.</b><span>The playful letterform contradicts the warning.</span>{!case1Fixed && <button onClick={() => setCase1Fixed(true)} className="btn-swiss btn-swiss-accent">FIX TYPOGRAPHY →</button>}</div>}{case1Answer && case1Answer !== 'TYPEFACE' && !case1Fixed && <div className="crime-hint">LOOK AT THE LETTERFORMS, NOT THE WORDS.</div>}</div>
      </article>

      <article className="crime-case-box fade-in stagger-3">
        <div className="crime-case-header"><span className="mono-label accent-label">CASE 02 // BIRTHDAY INVITATION</span><span className="mono-label">{case2Fixed ? '✓ VOICE RESTORED' : 'WRONG VOICE'}</span></div>
        <div className={`crime-specimen-viewport birthday-scene ${case2Fixed ? 'is-fixed' : ''}`}>
          <div className="birthday-confetti" aria-hidden="true"><i>+</i><i>●</i><i>✦</i><i>+</i><i>●</i></div>
          <div className="birthday-copy"><strong>EMMA'S 6TH BIRTHDAY</strong><span>CAKE • GAMES • 4 PM</span></div>
          {case2Fixed && <div className="repair-flash">VOICE RESTORED</div>}
        </div>
        <div className="crime-actions-row"><div className="mono-label">THE MESSAGE IS HAPPY. WHY DOES IT FEEL LIKE A LEGAL NOTICE?</div><ChoiceRow value={case2Answer} onChange={setCase2Answer} disabled={case2Fixed}/>{case2Answer === 'TYPEFACE' && <div className="diagnosis-badge"><b>CORRECT.</b><span>Same invitation. The severe typeface creates the wrong social tone.</span>{!case2Fixed && <button onClick={() => setCase2Fixed(true)} className="btn-swiss btn-swiss-accent">CHANGE THE VOICE →</button>}</div>}{case2Answer && case2Answer !== 'TYPEFACE' && !case2Fixed && <div className="crime-hint">THE COLOUR AND WORDS CAN STAY. CHANGE HOW THE WORDS SPEAK.</div>}</div>
      </article>

      <article className="crime-case-box fade-in stagger-4">
        <div className="crime-case-header"><span className="mono-label accent-label">CASE 03 // HIERARCHY</span><span className="mono-label">{case3Fixed ? '✓ ORDER RESTORED' : 'EVERYTHING IS SHOUTING'}</span></div>
        <div className={`crime-specimen-viewport hierarchy-scene ${case3Fixed ? 'is-fixed' : ''}`}>
          <div className="hierarchy-poster">
            <span className="h-item h1">TYPOGRAPHY NIGHT</span><span className="h-item h2">FRIDAY / 7 PM</span><span className="h-item h3">AUDITORIUM 02</span><span className="h-item h4">LIVE TYPE • POSTERS • MOTION</span><span className="h-item h5">ENTRY FREE</span>
          </div>
          {case3Fixed && <div className="repair-flash">HIERARCHY RESTORED</div>}
        </div>
        <div className="crime-actions-row"><div className="mono-label">WHAT SHOULD YOUR EYE READ FIRST?</div>{!case3Diagnosed ? <button onClick={() => setCase3Diagnosed(true)} className="btn-swiss btn-swiss-secondary">TRY TO FIND THE HEADLINE →</button> : <div className="diagnosis-badge"><b>YOU CAN'T.</b><span>Every line has equal visual volume, so nothing leads the eye.</span>{!case3Fixed && <button onClick={() => setCase3Fixed(true)} className="btn-swiss btn-swiss-accent">BUILD HIERARCHY →</button>}</div>}</div>
      </article>

      <div className="crime-conclusion fade-in stagger-5"><div className="shouting-quote"><span>When everything shouts,</span><strong>nothing is heard.</strong></div><div className="conclusion-action"><button onClick={onNavigateToInstinct} className="btn-swiss btn-swiss-accent hover-arrow-parent">PROCEED TO EXP.08 <span className="hover-arrow">→</span></button></div></div>
    </div>
  );
}
