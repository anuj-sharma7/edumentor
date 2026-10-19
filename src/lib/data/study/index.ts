import { physics11PartA } from './physics-11/part-a';
import { physics11PartB } from './physics-11/part-b';
import { physics12PartA } from './physics-12/part-a';
import { physics12PartB } from './physics-12/part-b';
import { chemistry11PartA } from './chemistry-11/part-a';
import { chemistry11PartB } from './chemistry-11/part-b';
import { chemistry12PartA } from './chemistry-12/part-a';
import { chemistry12PartB } from './chemistry-12/part-b';
import { mathematics11PartA } from './mathematics-11/part-a';
import { mathematics11PartB } from './mathematics-11/part-b';
import { mathematics12PartA } from './mathematics-12/part-a';
import { mathematics12PartB } from './mathematics-12/part-b';
import type { StudyChapter } from './types';

export * from './types';

export const studySubjects = ['Physics', 'Chemistry', 'Mathematics'] as const;
export type StudySubject = (typeof studySubjects)[number];

/** Every Class 11 and 12 chapter, in syllabus order within each subject. */
export const studyChapters: StudyChapter[] = [
  ...physics11PartA,
  ...physics11PartB,
  ...physics12PartA,
  ...physics12PartB,
  ...chemistry11PartA,
  ...chemistry11PartB,
  ...chemistry12PartA,
  ...chemistry12PartB,
  ...mathematics11PartA,
  ...mathematics11PartB,
  ...mathematics12PartA,
  ...mathematics12PartB,
];

export { slugify } from './slug';
import { slugify } from './slug';

export function chapterSlug(chapter: Pick<StudyChapter, 'name'>) {
  return slugify(chapter.name);
}

export function getStudyChapter(subjectSlug: string, slug: string) {
  return studyChapters.find(
    c => slugify(c.subject) === subjectSlug && chapterSlug(c) === slug
  );
}

/** Lightweight listing for the Theory hub - no theory text or questions. */
export type StudyChapterSummary = {
  name: string;
  slug: string;
  subject: StudyChapter['subject'];
  classLevel: StudyChapter['classLevel'];
  summary: string;
  topics: string[];
  questionCount: number;
};

export function getStudySummaries(): StudyChapterSummary[] {
  return studyChapters.map(c => ({
    name: c.name,
    slug: chapterSlug(c),
    subject: c.subject,
    classLevel: c.classLevel,
    summary: c.summary,
    topics: c.topics.map(t => t.name),
    questionCount: c.topics.reduce((n, t) => n + t.questions.length, 0),
  }));
}
