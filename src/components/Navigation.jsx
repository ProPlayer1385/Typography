import React, { useEffect, useRef } from 'react';
import { EXPERIMENTS } from '../config/experiments';
import '../styles/Navigation.css';

export default function Navigation({ 
  isOpen, 
  onClose, 
  currentScreen, 
  onSelectScreen,
  onResetGlobal
}) {
  const drawerRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="nav-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Journey Index"
    >
      <div 
        className="nav-drawer" 
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-header">
          <div>
            <span className="mono-label" style={{ color: 'var(--accent)', display: 'block' }}>
              THE READING ORDER
            </span>
            <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
              READ THIS WRONG.
            </h2>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close menu"
            style={{
              padding: '6px 12px',
              border: '1px solid var(--bg)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700
            }}
          >
            ✕ CLOSE
          </button>
        </div>

        <ul className="nav-list">
          {/* SCREEN 00: Calibration / Failure */}
          <li className="nav-item">
            <button
              className={`nav-link ${currentScreen === 'screen-00' ? 'active' : ''}`}
              onClick={() => {
                onSelectScreen('screen-00');
                onClose();
              }}
            >
              <div>
                <span className="mono-label nav-code" style={{ color: 'var(--accent)' }}>
                  00 / SOMETHING'S WRONG
                </span>
                <div className="nav-title" style={{ fontWeight: 700, fontSize: '1.05rem' }}>
                  Something's Wrong.
                </div>
                <div className="mono-label" style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '2px' }}>
                  Same information. Broken communication.
                </div>
              </div>
              <span className="mono-tag" style={{ alignSelf: 'center' }}>
                PROLOGUE
              </span>
            </button>
          </li>

          {/* 8 Core Chapters */}
          {EXPERIMENTS.map((exp) => {
            const isCurrent = currentScreen === exp.id;
            const isLocked = exp.status === 'locked';

            return (
              <li key={exp.id} className="nav-item">
                <button
                  disabled={isLocked}
                  className={`nav-link ${isCurrent ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                  onClick={() => {
                    if (!isLocked) {
                      onSelectScreen(exp.id);
                      onClose();
                    }
                  }}
                  aria-disabled={isLocked}
                >
                  <div>
                    <span 
                      className="mono-label nav-code"
                      style={{ color: isLocked ? 'var(--muted)' : 'var(--accent)' }}
                    >
                      {exp.code}
                    </span>
                    <div 
                      className="nav-title" 
                      style={{ fontWeight: 700, fontSize: '1.05rem' }}
                    >
                      {exp.title}
                    </div>
                    <div 
                      className="mono-label" 
                      style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '2px' }}
                    >
                      {exp.subtitle}
                    </div>
                  </div>
                  <span 
                    className="mono-tag" 
                    style={{ 
                      alignSelf: 'center',
                      borderColor: isLocked ? 'var(--border-light)' : 'var(--border)',
                      color: isLocked ? 'var(--muted)' : 'inherit'
                    }}
                  >
                    {isLocked ? 'LOCKED (PHASE 2+)' : 'READY'}
                  </span>
                </button>
              </li>
            );
          })}

          {/* FINALE */}
          <li className="nav-item">
            <button
              className={`nav-link ${currentScreen === 'finale' ? 'active' : ''}`}
              onClick={() => {
                onSelectScreen('finale');
                onClose();
              }}
            >
              <div>
                <span className="mono-label nav-code" style={{ color: 'var(--accent)' }}>
                  FINALE
                </span>
                <div className="nav-title" style={{ fontWeight: 700, fontSize: '1.05rem' }}>
                  The Typographic Eye
                </div>
                <div className="mono-label" style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '2px' }}>
                  Synthesis & Course Epilogue
                </div>
              </div>
              <span className="mono-tag" style={{ alignSelf: 'center' }}>
                EPILOGUE
              </span>
            </button>
          </li>
        </ul>

        <div className="nav-footer">
          <button
            onClick={() => {
              if (onResetGlobal) onResetGlobal();
              onClose();
            }}
            className="btn-swiss-secondary"
            style={{ fontSize: '0.72rem', padding: '6px 12px' }}
          >
            ↺ GLOBAL RESET
          </button>
          <span className="mono-label" style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
            PRESS ESC TO CLOSE
          </span>
        </div>
      </div>
    </div>
  );
}
