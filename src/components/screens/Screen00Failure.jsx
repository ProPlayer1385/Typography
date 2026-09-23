import React, { useState } from 'react';
import '../../styles/Screen00.css';

const violations = [
  { id: 'v1', num: '01', label: 'EXCESSIVE EMPHASIS', target: 'WELCOME!!!', className: 'map-welcome' },
  { id: 'v2', num: '02', label: 'INCONSISTENT TYPEFACE', target: 'TYPOGRAPHY', className: 'map-typography' },
  { id: 'v3', num: '03', label: 'BROKEN RHYTHM / SPACING', target: 'IS REALLY REALLY', className: 'map-rhythm' },
  { id: 'v4', num: '04', label: 'NO CLEAR HIERARCHY', target: 'IMPORTANT!!!!', className: 'map-hierarchy' },
  { id: 'v5', num: '05', label: 'BROKEN ALIGNMENT', target: 'CLICK HERE!!!', className: 'map-alignment' },
];

export default function Screen00Failure({ onBeginExperiment }) {
  // Deliberately manual: chaos -> alert -> diagnose -> stabilized.
  // Nothing advances until the presenter/user chooses to.
  const [phase, setPhase] = useState('chaos');
  const isStabilized = phase === 'stabilized';
  const isChaos = !isStabilized;

  const startDiagnostic = () => {
    if (phase === 'chaos') setPhase('alert');
  };

  return (
    <div className={`screen-00-container ${isChaos ? 'is-chaos-mode' : 'exp-enter'}`}>
      <div className={`stabilized-stage ${isChaos ? 'chaos-active' : ''}`} role="region" aria-live="polite">
        <div className="stabilized-col-left">
          <div>
            <div className={`stabilized-welcome ${isChaos ? 'chaos-welcome chaos-target-welcome' : ''}`}>
              {isChaos ? 'WELCOME!!!' : '[ 00 / SYSTEM RESTORED ] — WELCOME'}
            </div>

            <h1 className={`stabilized-headline ${isChaos ? 'chaos-headline' : ''}`}>
              {isChaos ? (
                <>
                  <span className="chaos-typography chaos-target-typography">TYPOGRAPHY</span>
                  <span className="chaos-really chaos-target-rhythm">IS REALLY REALLY</span>
                  <span className="chaos-important chaos-target-hierarchy">IMPORTANT!!!!</span>
                </>
              ) : 'Typography is really important.'}
            </h1>

            <p className={`stabilized-subline ${isChaos ? 'chaos-hidden' : 'fade-in stagger-2'}`}>
              Type is not decoration. It is the visual architecture of thought. Type gives form to language, creates structure, and delivers tone.
            </p>
          </div>

          <div className={`stabilized-principles ${isChaos ? 'chaos-hidden' : 'fade-in stagger-3'}`}>
            <div className="stabilized-principle-item hover-physical"><strong>01 / HIERARCHY</strong><span>Directs attention with deliberate weight and scale.</span></div>
            <div className="stabilized-principle-item hover-physical"><strong>02 / CONSISTENCY</strong><span>Reduces friction using unified type families and metrics.</span></div>
            <div className="stabilized-principle-item hover-physical"><strong>03 / ALIGNMENT</strong><span>Anchors letterforms onto a deliberate grid.</span></div>
            <div className="stabilized-principle-item hover-physical"><strong>04 / EMPHASIS</strong><span>Creates focus without visual chaos.</span></div>
          </div>
        </div>

        <div className="stabilized-col-right">
          <div>
            <div className={`mono-label ${isChaos ? 'chaos-hidden' : 'fade-in stagger-4'}`} style={{ color: 'var(--muted)', marginBottom: '8px' }}>
              EDITORIAL STATUS // CALIBRATION COMPLETE
            </div>
            <div className={isChaos ? 'chaos-box-hidden' : 'fade-in stagger-4'} style={{ padding: isChaos ? 0 : 'var(--space-4)', border: isChaos ? 'none' : '1px solid var(--border)', backgroundColor: isChaos ? 'transparent' : 'var(--surface)', marginBottom: isChaos ? 0 : 'var(--space-4)', transition: 'all var(--transition-major) var(--ease-physical)' }}>
              <div className={`mono-label ${isChaos ? 'chaos-gooddesign' : ''}`} style={{ color: 'var(--fg)', fontWeight: 700, marginBottom: '6px' }}>
                {isChaos ? 'GOOD DESIGN???' : 'GOOD DESIGN HAS A VOICE.'}
              </div>
              <div className={isChaos ? 'chaos-voice' : ''} style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500 }}>
                {isChaos ? 'TYPE HAS A VOICE' : 'Same words. Completely transformed communication.'}
              </div>
            </div>

            <div className={`stabilized-status-banner ${isChaos ? 'chaos-hidden' : 'fade-in stagger-5'}`}>
              <div className="mono-label" style={{ color: 'var(--accent)' }}>STATUS REPORT</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.04em' }}>SYSTEM STABILIZED.</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#CCCCCC' }}>SAME INFORMATION.<br />BETTER COMMUNICATION.</div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)', display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
            <button
              onClick={isChaos ? startDiagnostic : onBeginExperiment}
              className={`btn-swiss ${isChaos ? 'chaos-clickhere chaos-target-alignment' : 'hover-arrow-parent fade-in stagger-6'}`}
              autoFocus={!isChaos}
              style={{ width: '100%', transition: 'all var(--transition-major) var(--ease-physical)' }}
              aria-label={isChaos ? 'Start typography system diagnostic' : 'Start the journey'}
            >
              {isChaos ? 'CLICK HERE!!!' : <>START READING <span className="hover-arrow">→</span></>}
            </button>
          </div>
        </div>

        {phase === 'diagnose' && (
          <div className="diagnostic-map" aria-label="Mapped typography violations">
            {violations.map(v => (
              <div className={`mapped-violation ${v.className}`} key={v.id}>
                <span className="mapped-dot" aria-hidden="true" />
                <span className="mapped-line" aria-hidden="true" />
                <span className="mapped-label"><b>{v.num}</b> {v.label}<small>{v.target}</small></span>
              </div>
            ))}
          </div>
        )}

        {(phase === 'alert' || phase === 'diagnose') && (
          <div className={`failure-hud ${phase === 'diagnose' ? 'hud-diagnose' : ''}`} role="dialog" aria-labelledby="hud-title">
            <div className="failure-hud-header">
              <div>
                <div className="mono-label" style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>CRITICAL TYPOGRAPHY DIAGNOSTIC</div>
                <h2 id="hud-title" className="hud-title">TYPOGRAPHY SYSTEM FAILURE</h2>
              </div>
              <div className="hud-counter">[ 05 CORE VIOLATIONS ]</div>
            </div>

            <p className="hud-copy">
              {phase === 'alert'
                ? 'The composition is readable, but the typographic system is failing. Run the diagnostic to map each problem to the element causing it.'
                : 'Each marker now points to a specific failure. Restore the system to keep the same information while repairing its communication.'}
            </p>

            <div className="hud-actions">
              {phase === 'alert' ? (
                <button onClick={() => setPhase('diagnose')} className="btn-swiss btn-swiss-accent hover-physical" autoFocus>MAP THE FAILURES →</button>
              ) : (
                <button onClick={() => setPhase('stabilized')} className="btn-swiss btn-swiss-accent hover-physical" autoFocus>RESTORE SYSTEM →</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
