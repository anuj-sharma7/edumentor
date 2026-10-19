import { QuestionBankHub } from '@/components/pyq/question-bank-hub';
import { pyqAnalysis, predictedQuestions } from '@/lib/data/pyq';
import { subjects } from '@/lib/data';

export default function QuestionBankPage() {
  const { years, papersPerYear, totalPapers, chapters, items } = pyqAnalysis;
  return (
    <QuestionBankHub
      data={{
        years,
        papersPerYear,
        totalPapers,
        totalQuestions: items.length,
        predictedCount: predictedQuestions.length,
        chapters,
        practiceSubjects: subjects.map(s => ({ name: s.name, chapters: s.chapters.length })),
      }}
    />
  );
}
