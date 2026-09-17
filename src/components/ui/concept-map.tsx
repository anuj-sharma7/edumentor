'use client';

import { useId, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { TheoryConcept } from '@/lib/data/theory';
import { hasFormula, FormulaBlock } from '@/components/ui/theory-formatting';
import { conceptDiagrams } from '@/components/ui/concept-diagrams';

export type ConceptMapProps = {
  chapterName: string;
  concepts: TheoryConcept[];
};

/**
 * A radial diagram of a chapter's concepts, built from the real theory data -
 * no stand-in artwork. The chapter sits at the centre; each concept is a spoke
 * around it, which is the one relationship the data actually encodes (concept
 * belongs to chapter). Clicking a spoke opens its explanation below.
 *
 * Positions are percentages against a 0-100 box, so the SVG lines (drawn in
 * the same 0-100 viewBox) and the HTML node buttons (positioned with
 * left/top percentages) stay pixel-aligned at any container size without a
 * resize observer.
 */
export function ConceptMap({ chapterName, concepts }: ConceptMapProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [derivationOpen, setDerivationOpen] = useState(false);
  const titleId = useId();

  const nodes = useMemo(() => {
    const radius = 36;
    const count = concepts.length;
    return concepts.map((concept, i) => {
      // Start at 12 o'clock, go clockwise.
      const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
      return {
        concept,
        x: 50 + radius * Math.cos(angle),
        y: 50 + radius * Math.sin(angle),
      };
    });
  }, [concepts]);

  const active = concepts[activeIndex];
  const Diagram = conceptDiagrams[active.title];

  const selectConcept = (index: number) => {
    setActiveIndex(index);
    setDerivationOpen(false);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
      {/* The diagram --------------------------------------------------- */}
      <div className="relative mx-auto aspect-square w-full max-w-md select-none">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          {nodes.map((node, i) => (
            <line
              key={i}
              x1={50}
              y1={50}
              x2={node.x}
              y2={node.y}
              strokeWidth={i === activeIndex ? 0.6 : 0.4}
              className={cn(
                'transition-colors',
                i === activeIndex ? 'stroke-primary' : 'stroke-border'
              )}
            />
          ))}
        </svg>

        {/* Centre node: the chapter */}
        <div
          id={titleId}
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-primary/10 p-2 text-center text-xs font-semibold leading-tight text-primary sm:h-24 sm:w-24 sm:text-sm"
        >
          {chapterName}
        </div>

        {/* Spokes: one per concept */}
        {nodes.map(({ concept, x, y }, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={concept.title}
              type="button"
              onClick={() => selectConcept(i)}
              aria-pressed={isActive}
              aria-describedby={titleId}
              className={cn(
                'absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border p-1.5 text-center text-[10px] font-medium leading-tight shadow-sm transition-all hover:scale-105 sm:h-16 sm:w-16 sm:text-xs',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isActive
                  ? 'z-10 scale-110 border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5'
              )}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {concept.title}
            </button>
          );
        })}
      </div>

      {/* Detail panel ---------------------------------------------------- */}
      <div className="rounded-lg border bg-card p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {chapterName}
        </p>
        <h3 className="mt-1 font-headline text-lg font-semibold text-primary">
          {active.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {active.explanation}
        </p>

        {Diagram && (
          <div className="mt-4 rounded-md border bg-background/50 p-4">
            <Diagram />
          </div>
        )}

        {hasFormula(active.formula) && (
          <div className="mt-4">
            <FormulaBlock formula={active.formula!} />
          </div>
        )}

        {active.derivation && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setDerivationOpen(o => !o)}
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              aria-expanded={derivationOpen}
            >
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', derivationOpen && 'rotate-180')}
                aria-hidden="true"
              />
              {derivationOpen ? 'Hide derivation' : 'Show derivation'}
            </button>
            {derivationOpen && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {active.derivation}
              </p>
            )}
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground">
          {concepts.length} concept{concepts.length === 1 ? '' : 's'} in this chapter &middot; tap a
          node to explore
        </p>
      </div>
    </div>
  );
}
