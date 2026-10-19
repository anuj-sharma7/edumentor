import { notFound } from 'next/navigation';
import { ChapterPyqView } from '@/components/pyq/chapter-pyq-view';
import { pyqAnalysis, predictedQuestions } from '@/lib/data/pyq';
import { chapterSlug, studyChapters } from '@/lib/data/study';

type Params = Promise<{ subject: string; chapter: string }>;

export function generateStaticParams() {
  return pyqAnalysis.chapters.map(c => ({ subject: c.subject.toLowerCase(), chapter: c.slug }));
}

export default async function ChapterPyqPage({ params }: { params: Params }) {
  const { subject, chapter } = await params;
  const stats = pyqAnalysis.chapters.find(c => c.subject.toLowerCase() === subject && c.slug === chapter);
  if (!stats) notFound();
  const items = pyqAnalysis.items.filter(q => q.subject === stats.subject && q.chapter === stats.chapter);
  const theory = studyChapters.find(c => c.subject === stats.subject && c.name === stats.chapter);
  return (
    <ChapterPyqView
      stats={stats}
      items={items}
      predicted={predictedQuestions.filter(p => p.subject === stats.subject && p.chapter === stats.chapter)}
      years={pyqAnalysis.years}
      theoryHref={theory ? `/theory/${subject}/${chapterSlug(theory)}` : undefined}
    />
  );
}
