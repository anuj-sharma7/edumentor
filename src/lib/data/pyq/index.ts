import { main20250122S1 } from './main-2025/2025-01-22-s1';
import { main20250123S1 } from './main-2025/2025-01-23-s1';
import { main20250124S1 } from './main-2025/2025-01-24-s1';
import { main20250128S1 } from './main-2025/2025-01-28-s1';
import { main20250129S1 } from './main-2025/2025-01-29-s1';
import { adv2025P1 } from './adv-2025/paper-1';
import { adv2025P2 } from './adv-2025/paper-2';
import { main2026Mathematics } from './main-2026/mathematics';
import { main2026Physics } from './main-2026/physics';
import { main2026Chemistry } from './main-2026/chemistry';
import { analyse } from './analysis';
import type { PyqPaper } from './types';

export * from './types';
export * from './predicted-types';

/** 2026 questions come from chapter-wise sets, one file per subject; join them into one paper per date. */
function mergeBySubject(...parts: PyqPaper[][]): PyqPaper[] {
  const byId = new Map<string, PyqPaper>();
  for (const p of parts.flat()) {
    const prev = byId.get(p.id);
    byId.set(p.id, prev ? { ...prev, questions: [...prev.questions, ...p.questions] } : p);
  }
  return [...byId.values()].sort((a, b) => (a.date ?? '').localeCompare(b.date ?? ''));
}

export const pyqPapers: PyqPaper[] = [
  main20250122S1,
  main20250123S1,
  main20250124S1,
  main20250128S1,
  main20250129S1,
  adv2025P1,
  adv2025P2,
  ...mergeBySubject(main2026Mathematics, main2026Physics, main2026Chemistry),
];

export { predictedQuestions } from './predicted';

export const pyqAnalysis = analyse(pyqPapers);
