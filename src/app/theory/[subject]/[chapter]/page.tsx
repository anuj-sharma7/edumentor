import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ChapterStudyView } from '@/components/study/chapter-study-view';
import { chapterSlug, getStudyChapter, slugify, studyChapters } from '@/lib/data/study';

type Params = Promise<{ subject: string; chapter: string }>;

export function generateStaticParams() {
  return studyChapters.map(c => ({ subject: slugify(c.subject), chapter: chapterSlug(c) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { subject, chapter } = await params;
  const data = getStudyChapter(subject, chapter);
  return { title: data ? `${data.name} - Theory & Practice` : 'Theory' };
}

export default async function ChapterPage({ params }: { params: Params }) {
  const { subject, chapter } = await params;
  const data = getStudyChapter(subject, chapter);
  if (!data) notFound();
  return <ChapterStudyView chapter={data} slug={chapter} subjectSlug={subject} />;
}
