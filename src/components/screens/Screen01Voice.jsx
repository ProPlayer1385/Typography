import React, { useState } from 'react';
import '../../styles/Screen01.css';

const EMOTIONS = ['HAPPY', 'NORMAL', 'SAD', 'ANGRY'];

export default function Screen01Voice({ onEnterTypelab }) {
  // Stage: 
  // 'voice1_select' -> 'voice1_ready' -> 'voice2_select' -> 'revealed'
  const [stage, setStage] = useState('voice1_select');
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  // Handle first emotion choice
  const handleSelectFirst = (emotion) => {
    setFirstChoice(emotion);
    setStage('voice1_ready');
  };

  // Switch voice to voice 2
  const handleChangeVoice = () => {
    setStage('voice2_select');
  };

  // Handle second emotion choice
  const handleSelectSecond = (emotion) => {
    setSecondChoice(emotion);
    setStage('revealed');
  };

  const isVoice1 = stage === 'voice1_select' || stage === 'voice1_ready';
  const isVoice2 = stage === 'voice2_select';
  const isRevealed = stage === 'revealed';

  return (
    <div className="screen-01-container">
      {/* -------------------------------------------------------------
          TOP STAGE: ENORMOUS "I'M FINE." TYPOGRAPHIC DISPLAY
          ------------------------------------------------------------- */}
      <div 
        className="voice-stage exp-enter"
        style={{
          backgroundColor: isVoice1 ? 'var(--bg)' : isVoice2 ? '#E8E5DC' : 'var(--fg)',
          borderColor: isRevealed ? 'var(--accent)' : 'var(--border)'
        }}
      >
        <div 
          className="mono-label" 
          style={{ 
            position: 'absolute', 
            top: '16px', 
            left: '20px',
            color: isRevealed ? 'rgba(255,255,255,0.6)' : 'var(--muted)',
            fontSize: '0.72rem'
          }}
        >
          {isVoice1 && 'VOICE ITERATION 01 // SERIF CONDENSED WHISPER'}
          {isVoice2 && 'VOICE ITERATION 02 // COMPRESSED AGGRESSIVE GROTESQUE'}
          {isRevealed && 'SAME WORDS // DIFFERENT VOICE'}
        </div>

        {/* Text Display - Never changes DOM, only classes for kinetic typography */}
        <div className="voice-text-display">
          <div 
            className={`voice-treatment ${isVoice1 ? 'treatment-1' : 'treatment-2'}`}
            style={{
              color: isRevealed ? '#FFFFFF' : (isVoice1 ? 'var(--muted)' : 'var(--fg)')
            }}
          >
            I{isVoice1 ? '’' : '’'}m fine
            <span className={isVoice1 ? '' : 'voice-period'}>.</span>
          </div>
        </div>

        {/* Comparison mini tag when revealed */}
        {isRevealed && (
          <div 
            className="mono-label" 
            style={{ 
              color: 'var(--accent)',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              fontWeight: 700
            }}
          >
            [ FIRST CHOICE: {firstChoice} → SECOND CHOICE: {secondChoice} ]
          </div>
        )}
      </div>

      {/* -------------------------------------------------------------
          BOTTOM INTERACTION OR SYNTHESIS
          ------------------------------------------------------------- */}
      {!isRevealed ? (
        <div className="voice-interaction-panel">
          {/* Question Prompt */}
          <div className="inquiry-label">
            {isVoice1 ? 'HOW DOES THIS PERSON FEEL?' : 'AND NOW?'}
          </div>

          {/* Emotion Buttons */}
          <div className="options-grid">
            {EMOTIONS.map((emotion, index) => {
              const isSelected = isVoice1 
                ? firstChoice === emotion 
                : secondChoice === emotion;

              return (
                <button
                  key={emotion}
                  className={`option-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    if (isVoice1) handleSelectFirst(emotion);
                    else handleSelectSecond(emotion);
                  }}
                  aria-pressed={isSelected}
                >
                  <span className="option-index">0{index + 1}</span>
                  <span>{emotion}</span>
                </button>
              );
            })}
          </div>

          {/* Action to Change the Voice */}
          {stage === 'voice1_ready' && (
            <div style={{ marginTop: 'var(--space-3)' }}>
              <button 
                onClick={handleChangeVoice}
                className="btn-swiss btn-swiss-accent"
                autoFocus
              >
                CHANGE THE VOICE →
              </button>
            </div>
          )}
        </div>
      ) : (
        /* -------------------------------------------------------------
            FINAL REVEAL / SYNTHESIS
            ------------------------------------------------------------- */
        <div className="synthesis-card" role="region" aria-label="Voice synthesis">
          <div className="synthesis-lead">
            THE WORDS NEVER CHANGED.
            <span className="voice-highlight">THE VOICE DID.</span>
          </div>

          <p className="synthesis-body">
            Typography gives written language visual hierarchy, rhythm, personality, emphasis and tone.
            Letters are not passive carriers of data—they dictate how words resonate inside the human brain.
          </p>

          <div className="synthesis-conclusion">
            YOU READ WORDS.<br />
            YOU FEEL TYPOGRAPHY.
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-4)' }}>
            <button 
              onClick={onEnterTypelab}
              className="btn-swiss btn-swiss-accent"
              style={{ fontSize: '1rem', padding: '16px 36px' }}
              autoFocus
            >
              BREAK IT DOWN →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
