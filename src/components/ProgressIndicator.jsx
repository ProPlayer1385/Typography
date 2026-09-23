import React from 'react';

export default function ProgressIndicator({ current = 1, total = 8 }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div 
      className="progress-container"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`Progress: chapter ${current} of ${total}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <div 
        style={{
          display: 'flex',
          gap: '3px',
          alignItems: 'center'
        }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const isCompleted = i + 1 < current;
          const isCurrent = i + 1 === current;
          return (
            <div
              key={i}
              style={{
                width: isCurrent ? '20px' : '10px',
                height: '4px',
                backgroundColor: isCurrent 
                  ? 'var(--accent)' 
                  : isCompleted 
                  ? 'var(--fg)' 
                  : 'rgba(17, 17, 17, 0.2)',
                transition: 'all 0.25s ease'
              }}
              title={`Chapter ${i + 1}`}
            />
          );
        })}
      </div>
      <span 
        className="mono-label" 
        style={{ 
          fontSize: '0.72rem', 
          color: 'var(--muted)',
          marginLeft: '4px'
        }}
      >
        {percentage}%
      </span>
    </div>
  );
}
