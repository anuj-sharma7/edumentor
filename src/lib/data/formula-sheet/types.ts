import type { JeeFormula } from '../jee-class12';

/** A formula on the sheet; `important` marks the must-know ones. */
export type SheetFormula = JeeFormula;

/** A practice question that is solved directly with the chapter's formulas. */
export type FormulaQuestion = {
  question: string;
  /** Present for MCQs; omitted for numerical-answer questions. */
  options?: string[];
  answer: string;
  solution: string;
  /** Label of the formula the question is built on. */
  uses: string;
};

export type FormulaSheetChapter = {
  name: string;
  classLevel: 11 | 12;
  formulas: SheetFormula[];
  questions: FormulaQuestion[];
};

export type FormulaSheetSubject = {
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  chapters: FormulaSheetChapter[];
};

/** Shape used by the hand-written Class 11 sheets (class level is added by the index). */
export type Class11Chapter = Omit<FormulaSheetChapter, 'classLevel'>;
