import { TrendingUp, TrendingDown, Minus, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Trend } from '@/lib/data/pyq/analysis';

/** Validated (light + dark) series colours, fixed per year so a filter never repaints them. */
export const yearColor: Record<number, string> = { 2024: '#0d9488', 2025: '#0284c7', 2026: '#8b5cf6' };

/**
 * Questions-per-paper bars, one per year, each directly labelled with its
 * year and value so identity never depends on colour alone.
 */
export function YearBars({
  perPaper,
  years,
  max,
}: {
  perPaper: Record<number, number>;
  years: number[];
  max: number;
}) {
  return (
    <div className="space-y-1">
      {years.map(y => {
        const v = perPaper[y] ?? 0;
        return (
          <div key={y} className="flex items-center gap-2 text-xs" title={`${y}: ${v} questions per paper`}>
            <span className="w-9 shrink-0 text-muted-foreground">{y}</span>
            <div className="h-2 flex-1 rounded-full bg-muted">
              <div
                className="h-2 rounded-full"
                style={{ width: `${max ? Math.max((v / max) * 100, v ? 4 : 0) : 0}%`, background: yearColor[y] }}
              />
            </div>
            <span className="w-8 shrink-0 text-right tabular-nums text-foreground">{v}</span>
          </div>
        );
      })}
    </div>
  );
}

const trendStyle: Record<Trend, { label: string; icon: React.ElementType; cls: string }> = {
  rising: { label: 'Rising', icon: TrendingUp, cls: 'bg-green-500/15 text-green-700 dark:text-green-400' },
  falling: { label: 'Falling', icon: TrendingDown, cls: 'bg-red-500/15 text-red-700 dark:text-red-400' },
  steady: { label: 'Steady', icon: Minus, cls: 'bg-muted text-muted-foreground' },
  new: { label: 'New in latest year', icon: Sparkles, cls: 'bg-violet-500/15 text-violet-700 dark:text-violet-400' },
};

export function TrendChip({ trend }: { trend: Trend }) {
  const t = trendStyle[trend];
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold', t.cls)}>
      <t.icon className="h-3 w-3" aria-hidden="true" /> {t.label}
    </span>
  );
}
