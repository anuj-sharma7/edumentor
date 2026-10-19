import type { Difficulty } from '../study/types';
import type { PyqQuestion, PyqType } from './types';

/**
 * A question written by EduMentor from the 2025-26 trends. Not a past paper
 * question - always labelled as predicted in the UI.
 */
export type PredictedQuestion = {
  subject: PyqQuestion['subject'];
  chapter: string;
  topic: string;
  pattern: string;
  /** Why this is likely, based on the PYQ counts. */
  basis: string;
  type: PyqType;
  difficulty: Difficulty;
  question: string;
  options?: string[];
  answers: string[];
  solution: string;
};
