import type { PyqPaper, PyqQuestion } from './types';
import { slugify } from '../study/slug';

/** A PYQ together with the paper it came from. */
export type PyqItem = PyqQuestion & {
  paperId: string;
  exam: PyqPaper['exam'];
  year: PyqPaper['year'];
  label: string;
};

export type Trend = 'rising' | 'falling' | 'steady' | 'new';

export type CountRow = { name: string; total: number; byYear: Record<number, number> };

export type ChapterStats = {
  subject: PyqQuestion['subject'];
  chapter: string;
  slug: string;
  total: number;
  byYear: Record<number, number>;
  byExam: Record<string, number>;
  /** JEE Main questions per 75-question paper in each year - comparable across years with different paper sizes. */
  perPaper: Record<number, number>;
  trend: Trend;
  topics: CountRow[];
  /** Patterns that appeared in more than one paper. */
  repeatedPatterns: CountRow[];
  difficulty: Record<string, number>;
};

export function paperLabel(p: PyqPaper) {
  if (p.exam === 'JEE Advanced') return `JEE Adv ${p.year} · ${p.session}`;
  const d = p.date ? new Date(p.date) : null;
  const day = d ? d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : p.session;
  return `JEE Main ${p.year} · ${day}${p.shift ? ` S${p.shift}` : ''}`;
}

export function flattenPapers(papers: PyqPaper[]): PyqItem[] {
  return papers.flatMap(p =>
    p.questions.map(q => ({ ...q, paperId: p.id, exam: p.exam, year: p.year, label: paperLabel(p) }))
  );
}

function countBy(items: PyqItem[], key: (q: PyqItem) => string): CountRow[] {
  const map = new Map<string, CountRow>();
  for (const q of items) {
    const name = key(q);
    const row = map.get(name) ?? { name, total: 0, byYear: {} };
    row.total++;
    row.byYear[q.year] = (row.byYear[q.year] ?? 0) + 1;
    map.set(name, row);
  }
  return [...map.values()].sort((a, b) => b.total - a.total);
}

/** Compare the older half of the years with the newer half by questions per paper. */
function trendOf(perPaper: Record<number, number>, years: number[]): Trend {
  if (years.length < 2) return 'steady';
  const mid = Math.floor(years.length / 2);
  const avg = (ys: number[]) => ys.reduce((n, y) => n + (perPaper[y] ?? 0), 0) / ys.length;
  const a = avg(years.slice(0, mid));
  const b = avg(years.slice(mid));
  if (a === 0 && b > 0) return 'new';
  if (b >= a * 1.3 && b - a >= 0.3) return 'rising';
  if (b <= a * 0.7 && a - b >= 0.3) return 'falling';
  return 'steady';
}

export function analyse(papers: PyqPaper[]) {
  const items = flattenPapers(papers);
  const years = [...new Set(papers.map(p => p.year))].sort();
  const papersPerYear: Record<number, number> = {};
  // Trends compare JEE Main only, so years with or without Advanced papers stay comparable.
  for (const p of papers) if (p.exam === 'JEE Main') papersPerYear[p.year] = (papersPerYear[p.year] ?? 0) + 1;

  const mainTotal: Record<number, number> = {};
  for (const q of items) if (q.exam === 'JEE Main') mainTotal[q.year] = (mainTotal[q.year] ?? 0) + 1;

  const byChapter = new Map<string, PyqItem[]>();
  for (const q of items) {
    const k = `${q.subject}::${q.chapter}`;
    byChapter.set(k, [...(byChapter.get(k) ?? []), q]);
  }

  const chapters: ChapterStats[] = [...byChapter.entries()].map(([k, qs]) => {
    const [subject, chapter] = k.split('::') as [PyqQuestion['subject'], string];
    const byYear: Record<number, number> = {};
    const byExam: Record<string, number> = {};
    const difficulty: Record<string, number> = {};
    for (const q of qs) {
      byYear[q.year] = (byYear[q.year] ?? 0) + 1;
      byExam[q.exam] = (byExam[q.exam] ?? 0) + 1;
      difficulty[q.difficulty] = (difficulty[q.difficulty] ?? 0) + 1;
    }
    const perPaper: Record<number, number> = {};
    const mainByYear: Record<number, number> = {};
    for (const q of qs) if (q.exam === 'JEE Main') mainByYear[q.year] = (mainByYear[q.year] ?? 0) + 1;
    // Scale to a 75-question paper: 2023-24 papers had 90 questions (only 75 attempted), 2025-26 have 75.
    for (const y of years) perPaper[y] = +(((mainByYear[y] ?? 0) * 75) / (mainTotal[y] || 75)).toFixed(2);
    const patternPapers = new Map<string, Set<string>>();
    for (const q of qs) patternPapers.set(q.pattern, (patternPapers.get(q.pattern) ?? new Set()).add(q.paperId));
    return {
      subject,
      chapter,
      slug: slugify(chapter),
      total: qs.length,
      byYear,
      byExam,
      perPaper,
      trend: trendOf(perPaper, years),
      topics: countBy(qs, q => q.topic),
      repeatedPatterns: countBy(qs, q => q.pattern).filter(r => (patternPapers.get(r.name)?.size ?? 0) > 1),
      difficulty,
    };
  });
  chapters.sort((a, b) => b.total - a.total);

  return { items, years, papersPerYear, chapters, totalPapers: papers.length };
}

/**
 * Questions to offer after a wrong attempt: same pattern first, then same
 * topic, from other papers.
 */
export function samePatternQuestions(target: PyqItem, pool: PyqItem[], limit = 3) {
  const others = pool.filter(q => q.id !== target.id && q.chapter === target.chapter);
  const samePattern = others.filter(q => q.pattern === target.pattern);
  const sameTopic = others.filter(q => q.pattern !== target.pattern && q.topic === target.topic);
  return [...samePattern, ...sameTopic].slice(0, limit);
}
