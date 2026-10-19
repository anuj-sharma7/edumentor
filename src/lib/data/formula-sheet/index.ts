import { jeeClass12 } from '../jee-class12';
import { physics11 } from './class11-physics';
import { chemistry11 } from './class11-chemistry';
import { mathematics11 } from './class11-mathematics';
import { class12Questions } from './class12-questions';
import type { Class11Chapter, FormulaSheetChapter, FormulaSheetSubject } from './types';

export * from './types';

const class11: Record<FormulaSheetSubject['subject'], Class11Chapter[]> = {
  Physics: physics11,
  Chemistry: chemistry11,
  Mathematics: mathematics11,
};

/**
 * Formula sheet for JEE: hand-written Class 11 sheets, plus the Class 12
 * formulas reused from the JEE Class 12 guide with their practice questions.
 */
export const formulaSheet: FormulaSheetSubject[] = jeeClass12.map(s => ({
  subject: s.subject,
  chapters: [
    ...class11[s.subject].map<FormulaSheetChapter>(c => ({ ...c, classLevel: 11 })),
    ...s.chapters.map<FormulaSheetChapter>(c => ({
      name: c.name,
      classLevel: 12,
      formulas: c.formulas,
      questions: class12Questions[c.name] ?? [],
    })),
  ],
}));
