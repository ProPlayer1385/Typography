TYPELAB FINAL UPGRADED

This ZIP contains the upgraded source project without node_modules.

On your Windows laptop:
1. Back up your current Typography folder.
2. Extract this ZIP to a new folder, e.g. TYPELAB_FINAL_UPGRADED.
3. Open PowerShell in that folder.
4. Run: npm install
5. Run: npm run dev
6. Open the localhost URL shown by Vite.

For presentation:
1. Run: npm run build
2. Run: npm run preview
3. Open the local preview URL and use fullscreen.

Key upgrade in EXP.02:
- All 10 anatomy concepts retained.
- VIEW IN SENTENCE now remains interactive with the anatomy index.
- Baseline guides, x-height view, ascender/descender explanation, stems, counters, terminal note, ligature absence/example, kerning pair animation, and interactive leading are demonstrated in real language.
- The existing SAME SENTENCE / DIFFERENT TYPE switcher is preserved for Times New Roman, Helvetica/neo-grotesk, Comic Sans, Courier New, Impact, and Script.
- Existing typographic fractal backgrounds and kinetic sections are preserved.

Note: Build verification in the editing environment could not use the uploaded Windows node_modules because Rollup's Windows native optional package is incompatible with the Linux editing environment. All JS/JSX source files were syntax-parsed successfully. Run npm install on Windows before npm run build.
