import type { Difficulty } from '../study/types';

export type PyqExam = 'JEE Main' | 'JEE Advanced';

/**
 * single    - one correct option
 * multiple  - one or more correct options (JEE Advanced)
 * numerical - integer / decimal answer, no options
 */
export type PyqType = 'single' | 'multiple' | 'numerical';

/** A new question built on the same pattern, offered after a wrong attempt. */
export type PatternTwin = {
  question: string;
  type: PyqType;
  options?: string[];
  /** Option texts (verbatim) for single/multiple; the value for numerical. */
  answers: string[];
  solution: string;
};

export type PyqQuestion = {
  /** `${paperId}-Q${number}` */
  id: string;
  number: number;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  /** Exact chapter name from the Theory section (src/lib/data/study). */
  chapter: string;
  /** Exact topic name inside that chapter in the Theory section. */
  topic: string;
  /** Short label for the question pattern, e.g. "Telescoping tan⁻¹ series". */
  pattern: string;
  type: PyqType;
  difficulty: Difficulty;
  question: string;
  options?: string[];
  /** Option texts (verbatim) for single/multiple; the value (or range "a to b") for numerical. */
  answers: string[];
  /** Question was dropped/bonus in the final key - every attempt counts as correct. */
  bonus?: boolean;
  /** Text description of any figure the question relies on. */
  figure?: string;
  /** Our own step-by-step solution. */
  solution: string;
  /** Optional hand-written same-pattern question; otherwise a matching PYQ or an AI question is offered. */
  twin?: PatternTwin;
};

export type PyqPaper = {
  /** e.g. 'main-2024-01-27-s1', 'adv-2024-p1' */
  id: string;
  exam: PyqExam;
  year: 2024 | 2025 | 2026;
  /** 'January' / 'April' for Main, 'Paper 1' / 'Paper 2' for Advanced. */
  session: string;
  /** ISO date of the exam (Main). */
  date?: string;
  shift?: 1 | 2;
  /** Where the questions and key came from. */
  source: string;
  /** How the answers were obtained. */
  answerSource: 'answer-key' | 'solved';
  questions: PyqQuestion[];
};
