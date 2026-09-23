import React, { useState } from 'react';
import '../../styles/Screen08.css';

const CHALLENGES = [
  {
    id: 'perfume',
    num: '01',
    prompt: 'Luxury perfume brand: Select the appropriate typographic voice for "AURA NOIR".',
    correctId: 'A',
    explanation: 'High-contrast serif with generous tracking signals exclusivity, craftsmanship, and restrained elegance.',
    options: [
      {
        id: 'A',
        label: 'TREATMENT A',
        style: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', letterSpacing: '0.18em', fontSize: '1.8rem', fontWeight: 600 },
        text: 'AURA NOIR'
      },
      {
        id: 'B',
        label: 'TREATMENT B',
        style: { fontFamily: 'var(--font-comic)', letterSpacing: '0', fontSize: '1.7rem', fontWeight: 700 },
        text: 'AURA NOIR'
      },
      {
        id: 'C',
        label: 'TREATMENT C',
        style: { fontFamily: 'var(--font-mono)', letterSpacing: '-0.05em', fontSize: '1.5rem', fontWeight: 700 },
        text: 'AURA_NOIR;'
      }
    ]
  },
  {
    id: 'warning',
    num: '02',
    prompt: 'Emergency evacuation notice: Select the treatment prioritising maximum clarity and urgency.',
    correctId: 'B',
    explanation: 'Bold, punchy sans-serif grotesque communicates immediate authority without ambiguity.',
    options: [
      {
        id: 'A',
        label: 'TREATMENT A',
        style: { fontFamily: 'var(--font-script)', fontSize: '1.8rem', color: '#D50000' },
        text: 'Evacuate Now'
      },
      {
        id: 'B',
        label: 'TREATMENT B',
        style: { fontFamily: 'var(--font-impact)', fontSize: '2.1rem', letterSpacing: '0.04em', color: '#D50000' },
        text: 'EVACUATE BUILDING'
      },
      {
        id: 'C',
        label: 'TREATMENT C',
        style: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem' },
        text: 'Evacuate Building'
      }
    ]
  },
  {
    id: 'code',
    num: '03',
    prompt: 'Code editor interface: Select the appropriate typographic classification.',
    correctId: 'C',
    explanation: 'Monospace fonts allocate identical horizontal space to every glyph, preserving alignment and syntax parsing.',
    options: [
      {
        id: 'A',
        label: 'TREATMENT A (SERIF)',
        style: { fontFamily: 'var(--font-serif)', fontSize: '1.2rem' },
        text: 'const kernel = [1, 0, 1];'
      },
      {
        id: 'B',
        label: 'TREATMENT B (SCRIPT)',
        style: { fontFamily: 'var(--font-script)', fontSize: '1.4rem' },
        text: 'const kernel = [1, 0, 1];'
      },
      {
        id: 'C',
        label: 'TREATMENT C (MONOSPACE)',
        style: { fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)' },
        text: 'const kernel = [1, 0, 1];'
      }
    ]
  },
  {
    id: 'leading',
    num: '04',
    prompt: 'Continuous reading paragraph: Select the most comfortable leading (line-height) treatment.',
    correctId: 'A',
    explanation: 'Optimal leading (1.4×) permits smooth horizontal saccades without ascender collisions or loose line drift.',
    options: [
      {
        id: 'A',
        label: 'TREATMENT A (BALANCED 1.4×)',
        style: { fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: '1.45', textAlign: 'left' },
        text: 'Type organizes human thought. When line rhythm is balanced, reading feels effortless.'
      },
      {
        id: 'B',
        label: 'TREATMENT B (CRAMPED 0.85×)',
        style: { fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: '0.85', textAlign: 'left' },
        text: 'Type organizes human thought. When line rhythm is cramped, strokes collide awkwardly.'
      },
      {
        id: 'C',
        label: 'TREATMENT C (DISCONNECTED 2.4×)',
        style: { fontFamily: 'var(--font-sans)', fontSize: '0.9rem', lineHeight: '2.4', textAlign: 'left' },
        text: 'Type organizes human thought. When lines drift too far, tracking rhythm evaporates.'
      }
    ]
  }
];

export default function Screen08Instinct({ onCompleteTypelab }) {
  const [answers, setAnswers] = useState({});

  const handleSelectOption = (challengeId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [challengeId]: optionId
    }));
  };

  const handleRetry = () => {
    setAnswers({});
  };

  const answeredCount = Object.keys(answers).length;
  const isCompleted = answeredCount === CHALLENGES.length;

  let correctCount = 0;
  CHALLENGES.forEach((ch) => {
    if (answers[ch.id] === ch.correctId) {
      correctCount += 1;
    }
  });

  const percentage = Math.round((correctCount / CHALLENGES.length) * 100);

  return (
    <div className="screen-08-container" role="region" aria-label="Experiment 08 Typographic Instinct">
      {/* Header */}
      <div className="screen-header">
        <span className="screen-number">08 / EXPERIMENT</span>
        <h1 className="screen-title">
          Do you have<br />typographic instinct?
        </h1>
      </div>

      {/* Visual Challenges */}
      {CHALLENGES.map((ch) => {
        const userAnswer = answers[ch.id];
        const isAnswered = Boolean(userAnswer);
        const isCorrect = userAnswer === ch.correctId;

        return (
          <div key={ch.id} className="quiz-card">
            <div className="quiz-header-meta">
              <span className="mono-label" style={{ color: 'var(--accent)' }}>
                CHALLENGE {ch.num} // 04
              </span>
              <span className="mono-label">
                {isAnswered ? (isCorrect ? '✓ CORRECT' : '✗ REVIEW SELECTION') : 'AWAITING RESPONSE'}
              </span>
            </div>

            <p className="quiz-prompt">{ch.prompt}</p>

            <div className="quiz-options-grid">
              {ch.options.map((opt) => {
                const isSelected = userAnswer === opt.id;
                let btnClass = 'quiz-option-btn';
                if (isAnswered) {
                  if (isSelected && isCorrect) btnClass += ' selected-correct';
                  else if (isSelected && !isCorrect) btnClass += ' selected-wrong';
                }

                return (
                  <button
                    key={opt.id}
                    className={btnClass}
                    onClick={() => handleSelectOption(ch.id, opt.id)}
                    aria-label={`${opt.label}: ${opt.text}`}
                  >
                    <span className="mono-label" style={{ fontSize: '0.68rem', marginBottom: '8px', color: 'var(--muted)' }}>
                      {opt.label}
                    </span>
                    <div style={opt.style}>
                      {opt.text}
                    </div>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="quiz-explanation-box">
                <span className="mono-label" style={{ color: 'var(--accent)', display: 'block', marginBottom: '2px' }}>
                  INSTINCT PRINCIPLE:
                </span>
                {ch.explanation}
              </div>
            )}
          </div>
        );
      })}

      {/* Result Section */}
      {isCompleted && (
        <div className="score-summary-card">
          <div className="mono-label" style={{ color: '#FFFFFF', letterSpacing: '0.15em' }}>
            ASSESSMENT COMPLETE
          </div>

          <div className="score-percentage">
            TYPOGRAPHIC INSTINCT — {percentage}%
          </div>

          <div className="score-affirmation">
            You're starting to see type.
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-3)', flexWrap: 'wrap' }}>
            <button
              onClick={handleRetry}
              className="btn-swiss-secondary"
              style={{ borderColor: 'var(--bg)', color: 'var(--bg)' }}
            >
              ↺ RETRY CHALLENGES
            </button>
            <button
              onClick={onCompleteTypelab}
              className="btn-swiss btn-swiss-accent"
              style={{ fontSize: '1rem', padding: '16px 36px' }}
            >
              COMPLETE TYPELAB →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
