import { subjects } from './data';

/**
 * Dashboard figures derived from the real question bank.
 *
 * This module is imported only from server components. Keeping the derivation
 * here means the question data (several MB of chapter files) is never shipped
 * to the browser just to render a handful of numbers.
 */

export type DashboardStats = {
  totalQuestions: number;
  pastPaperQuestions: number;
  chaptersWithQuestions: number;
  subjectCount: number;
};

export type ChapterHighlight = {
  title: string;
  questionCount: number;
  subject: string;
  href: string;
};

export function getDashboardStats(): DashboardStats {
  let totalQuestions = 0;
  let pastPaperQuestions = 0;
  let chaptersWithQuestions = 0;

  for (const subject of subjects) {
    for (const chapter of subject.chapters) {
      if (chapter.questions.length === 0) continue;
      chaptersWithQuestions++;
      totalQuestions += chapter.questions.length;
      for (const question of chapter.questions) {
        if (question.isPastPaper) pastPaperQuestions++;
      }
    }
  }

  return {
    totalQuestions,
    pastPaperQuestions,
    chaptersWithQuestions,
    subjectCount: subjects.filter(s => s.chapters.some(c => c.questions.length > 0)).length,
  };
}

/**
 * The best-stocked chapters per subject, so the dashboard links to places that
 * actually have questions in them.
 */
export function getTopChapters(subjectName: string, limit = 5): ChapterHighlight[] {
  const subject = subjects.find(s => s.name === subjectName);
  if (!subject) return [];

  return [...subject.chapters]
    .filter(chapter => chapter.questions.length > 0)
    .sort((a, b) => b.questions.length - a.questions.length)
    .slice(0, limit)
    .map(chapter => ({
      title: chapter.name,
      questionCount: chapter.questions.length,
      subject: subject.name,
      href: `/question-bank/${subject.name.toLowerCase()}`,
    }));
}
