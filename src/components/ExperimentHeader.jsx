import React from 'react';
import ProgressIndicator from './ProgressIndicator';

export default function ExperimentHeader({ 
  currentExpNum = 1, 
  totalExp = 8, 
  isMenuOpen, 
  onToggleMenu 
}) {
  return (
    <header 
      style={{
        height: 'var(--header-height)',
        borderBottom: 'var(--border-width) solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--space-4)',
        backgroundColor: 'var(--bg)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <span 
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase'
          }}
        >
          READ THIS <span className="brand-wrong">WRONG.</span>
        </span>
        <span 
          style={{ 
            width: '1px', 
            height: '16px', 
            backgroundColor: 'var(--border-light)' 
          }} 
        />
        <span 
          className="mono-label" 
          style={{ color: 'var(--muted)', display: 'none', '@media (min-width: 600px)': { display: 'inline' } }}
        >
          SAME WORDS / DIFFERENT VOICE
        </span>
      </div>

      {/* Center Status & Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <span 
          className="mono-label"
          style={{ 
            letterSpacing: '0.14em',
            fontWeight: 700
          }}
        >
          {currentExpNum === 0 ? "00 / SOMETHING\'S WRONG" : `${String(currentExpNum).padStart(2, '0')} / ${['','SAY IT AGAIN','BREAK IT DOWN','GIVE IT SPACE','CHANGE ITS CHARACTER','SAME LETTERS','HOW DOES IT FEEL?','FIX IT','YOUR TURN'][currentExpNum]}`}
        </span>
        <ProgressIndicator current={currentExpNum} total={totalExp} />
      </div>

      {/* Right Menu Action */}
      <div>
        <button
          onClick={onToggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle Navigation Index Menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 14px',
            border: 'var(--border-width) solid var(--border)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            backgroundColor: isMenuOpen ? 'var(--fg)' : 'transparent',
            color: isMenuOpen ? 'var(--bg)' : 'var(--fg)',
            transition: 'all 0.15s ease'
          }}
        >
          <span>{isMenuOpen ? 'CLOSE [ESC]' : 'INDEX / MENU'}</span>
          <span 
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: isMenuOpen ? 'var(--accent)' : 'var(--fg)',
              display: 'inline-block'
            }} 
          />
        </button>
      </div>
    </header>
  );
}
