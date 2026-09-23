import React, { useState } from 'react';
import ExperimentHeader from './ExperimentHeader';
import Navigation from './Navigation';
import { TOTAL_EXPERIMENTS } from '../config/experiments';

export default function ExperimentShell({ 
  currentScreen, 
  onSelectScreen, 
  onResetGlobal,
  isPresenting,
  onTogglePresentation,
  children 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Derive experiment number for header (0 for prologue screen-00, 1 for exp-01, etc.)
  const expMap = {
    'screen-00': 0,
    'exp-01': 1,
    'exp-02': 2,
    'exp-03': 3,
    'exp-04': 4,
    'exp-05': 5,
    'exp-06': 6,
    'exp-07': 7,
    'exp-08': 8,
    'finale': 8
  };
  const expNum = expMap[currentScreen] ?? 1;

  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg)',
        color: 'var(--fg)',
        position: 'relative'
      }}
    >
      {/* Swiss Editorial Header */}
      <ExperimentHeader 
        currentExpNum={expNum}
        totalExp={TOTAL_EXPERIMENTS}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />

      {/* Slide Navigation Drawer */}
      <Navigation 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentScreen={currentScreen}
        onSelectScreen={onSelectScreen}
        onResetGlobal={onResetGlobal}
      />

      {/* Main Experiment Stage with Subdued Swiss Margin Lines */}
      <main 
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '0 var(--space-4)',
          maxWidth: '1920px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {children}
      </main>

      {/* Swiss Editorial Coordinates Footer */}
      <footer 
        style={{
          height: '44px',
          borderTop: 'var(--border-width) solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 var(--space-4)',
          backgroundColor: 'var(--bg)',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
          <span className="mono-label" style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
            GRID: 12-COL MODULAR / BASELINE 8PX
          </span>
          <span className="mono-label" style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
            LOC: BASEL // CH
          </span>
          <button 
            onClick={onTogglePresentation}
            className="mono-label"
            style={{ 
              fontSize: '0.68rem', 
              color: 'var(--accent)', 
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0
            }}
          >
            {isPresenting ? 'EXIT PRESENTATION [P]' : 'PRESENT [P]'}
          </button>
        </div>
        <div>
          <span className="mono-label" style={{ fontSize: '0.68rem', color: 'var(--fg)', fontWeight: 700 }}>
            YOU READ WORDS. YOU FEEL TYPOGRAPHY.
          </span>
        </div>
      </footer>
    </div>
  );
}
