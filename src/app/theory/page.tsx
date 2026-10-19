import { TheoryHubView } from '@/components/study/theory-hub-view';
import { getStudySummaries } from '@/lib/data/study';
import { theory } from '@/lib/data/theory';

export default async function TheoryPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;
  // Biology is not part of JEE; keep its existing NEET notes available.
  const biology = theory.find(s => s.subject === 'Biology')?.chapters ?? [];
  return (
    <TheoryHubView chapters={getStudySummaries()} biology={biology} initialSubject={subject} />
  );
}
