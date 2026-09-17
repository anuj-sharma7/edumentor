/** Shared rendering helpers for a theory concept's formula, used by both the
 *  concept map detail panel and the Theory & Formulas concept cards, so a
 *  multi-line formula is formatted identically everywhere it appears. */

/** A formula of literally 'N/A' isn't a formula - treat it as absent. */
export function hasFormula(formula?: string) {
  return !!formula && formula.trim().toUpperCase() !== 'N/A';
}

/**
 * Formulas in the data are a single string, with related equations joined by
 * '\n' (e.g. "v = u + at\ns = ut + (1/2)at^2"). Rendering that as one <pre>
 * block runs every equation together in a wall of monospace text. Splitting
 * on the newline and giving each line its own row reads far closer to a
 * printed formula sheet.
 */
export function FormulaBlock({ formula }: { formula: string }) {
  const lines = formula.split('\n').filter(Boolean);
  return (
    <div className="space-y-1 rounded-md border bg-muted/50 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        Formula
      </p>
      <div className="space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="font-code text-sm text-foreground">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
