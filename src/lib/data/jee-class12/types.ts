/**
 * JEE (Main + Advanced) Class 12 chapter guide.
 *
 * Text fields (theory bodies, key points, mistakes) may wrap a phrase in
 * `==double equals==` to mark it as must-remember; the UI renders those
 * spans as highlights.
 */

/** How much a chapter is worth chasing, judged from recent JEE Main/Advanced papers. */
export type JeePriority = 'Very High' | 'High' | 'Medium' | 'Low';

export type JeeDifficulty = 'Easy' | 'Moderate' | 'Tough';

export type JeeTopic = {
  name: string;
  /** Asked almost every year - shown with a flame highlight. */
  hot?: boolean;
  /** What exactly gets asked from this topic. */
  note?: string;
};

export type JeeTheorySection = {
  heading: string;
  body: string;
};

export type JeeFormula = {
  label: string;
  /** Must-know formula - highlighted in the JEE guide and the formula sheet. */
  important?: boolean;
  expr: string;
  note?: string;
};

export type JeeChapter = {
  name: string;
  priority: JeePriority;
  /** Approximate questions per JEE Main shift, e.g. '2-3 Qs'. */
  weightage: string;
  difficulty: JeeDifficulty;
  overview: string;
  importantTopics: JeeTopic[];
  theory: JeeTheorySection[];
  keyPoints: string[];
  formulas: JeeFormula[];
  mistakes: string[];
  /** How the chapter has been asked in recent papers. */
  pyqTrend: string;
};

export type JeeSubject = {
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  chapters: JeeChapter[];
};
