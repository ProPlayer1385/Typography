import React, { useMemo } from 'react';

/**
 * TypoFractal — Decorative recursive typography background.
 * Renders layered glyphs at progressively different scales.
 * aria-hidden, pointer-events: none. Purely decorative.
 *
 * Props:
 *  - glyphs: string[]  — array of glyph strings to cycle through
 *  - fontFamily: string — CSS font-family (defaults to serif)
 *  - fontWeight: string — CSS font-weight
 *  - color: string — base color (rgba recommended)
 *  - maxOpacity: number — max opacity (0–1), default 0.05
 *  - count: number — number of instances (default 12)
 *  - className: string — additional class names
 */
export default function TypoFractal({
  glyphs = ['A', 'a'],
  fontFamily = 'var(--font-serif)',
  fontWeight = '700',
  color = '#111111',
  maxOpacity = 0.05,
  count = 12,
  className = '',
}) {
  // Pre-compute stable positions with deterministic pseudo-random
  const items = useMemo(() => {
    const result = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      // Deterministic distribution using golden-ratio-like spread
      const x = ((i * 61.8) % 100);
      const y = ((i * 38.2) % 100);
      // Scale: smaller items get higher opacity to balance perception
      const scale = 0.4 + (i % 5) * 0.4; // 0.4 to 2.0 em range
      const fontSize = `${scale * 8}vw`;
      const opacity = maxOpacity * (1 - t * 0.5); // fade toward later items
      const glyph = glyphs[i % glyphs.length];
      const rotation = (i * 7) % 30 - 15; // -15 to +15 deg
      result.push({ x, y, fontSize, opacity, glyph, rotation });
    }
    return result;
  }, [glyphs, count, maxOpacity]);

  return (
    <div
      className={`typo-fractal-layer ${className}`}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
      }}
    >
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.fontSize,
            fontFamily,
            fontWeight,
            color,
            opacity: item.opacity,
            transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          {item.glyph}
        </span>
      ))}
    </div>
  );
}
