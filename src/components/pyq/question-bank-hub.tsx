'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Atom, FlaskConical, Calculator, Flame, ArrowRight, BookOpen, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { ChapterStats } from '@/lib/data/pyq/analysis';
import { TrendChip, YearBars, yearColor } from './year-bars';

const subjects = [
  { name: 'Physics', icon: Atom },
  { name: 'Chemistry', icon: FlaskConical },
  { name: 'Mathematics', icon: Calculator },
] as const;

export type HubData = {
  years: number[];
  papersPerYear: Record<number, number>;
  totalPapers: number;
  totalQuestions: number;
  predictedCount: number;
  chapters: ChapterStats[];
  practiceSubjects: { name: string; chapters: number }[];
};

export function QuestionBankHub({ data }: { data: HubData }) {
  const [subject, setSubject] = useState<string>('Physics');
  const chapters = data.chapters.filter(c => c.subject === subject);
  const max = Math.max(...chapters.flatMap(c => data.years.map(y => c.perPaper[y] ?? 0)), 0);
  const rising = chapters.filter(c => c.trend === 'rising' || c.trend === 'new').slice(0, 6);
  const falling = chapters.filter(c => c.trend === 'falling').slice(0, 6);
  const hotPatterns = chapters
    .flatMap(c => c.repeatedPatterns.map(p => ({ ...p, chapter: c.chapter, slug: c.slug })))
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);
  const subjectSlug = subject.toLowerCase();

  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-7xl space-y-8 p-4 pb-16 md:p-8">
      <section className="rounded-2xl border bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6 md:p-8">
        <p className="flex items-center gap-2 text-sm font-medium text-primary">
          <Flame className="h-4 w-4" /> Past papers {data.years.join(' & ')}
        </p>
        <h1 className="mt-2 font-headline text-3xl font-bold tracking-tight md:text-4xl">Question Bank &amp; PYQ Trends</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Every question from the selected JEE Main and JEE Advanced papers, tagged by chapter, topic and pattern.
          See what repeats, what is rising, and clear each pattern by reattempting similar questions.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            ['Papers analysed', data.totalPapers],
            ['PYQs', data.totalQuestions],
            ['Predicted questions', data.predictedCount],
          ].map(([l, v]) => (
            <div key={l} className="rounded-xl border bg-background/70 px-4 py-2">
              <p className="text-2xl font-bold">{v}</p>
              <p className="text-xs text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          JEE Main papers per year: {data.years.map(y => `${y}: ${data.papersPerYear[y] ?? 0}`).join(' · ')}. Bars and trends use average JEE Main questions per paper, so years compare fairly; JEE Advanced questions are included in counts and question lists.
        </p>
      </section>

      <div className="flex flex-wrap gap-2">
        {subjects.map(s => (
          <button
            key={s.name}
            type="button"
            onClick={() => setSubject(s.name)}
            aria-pressed={subject === s.name}
            className={cn(
              'flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all',
              subject === s.name ? 'border-primary bg-primary text-primary-foreground shadow-md' : 'bg-card hover:border-primary/50'
            )}
          >
            <s.icon className="h-4 w-4" /> {s.name}
          </button>
        ))}
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border bg-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><Flame className="h-5 w-5 text-amber-500" /> Most repeated patterns</h2>
          {hotPatterns.length ? (
            <ol className="space-y-2">
              {hotPatterns.map(p => (
                <li key={`${p.chapter}-${p.name}`}>
                  <Link href={`/question-bank/pyq/${subjectSlug}/${p.slug}`} className="block rounded-lg p-2 text-sm hover:bg-muted">
                    <mark className="rounded bg-yellow-300/40 px-1 font-medium text-foreground dark:bg-yellow-400/25">{p.name}</mark>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{p.chapter} · {p.total} questions</span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-muted-foreground">No pattern repeated across papers yet.</p>
          )}
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><TrendingUp className="h-5 w-5 text-green-600" /> Rising chapters</h2>
          <ChapterMiniList list={rising} subjectSlug={subjectSlug} empty="Nothing clearly rising." />
          <h2 className="mb-3 mt-5 flex items-center gap-2 font-semibold"><TrendingDown className="h-5 w-5 text-red-600" /> Falling chapters</h2>
          <ChapterMiniList list={falling} subjectSlug={subjectSlug} empty="Nothing clearly falling." />
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><BookOpen className="h-5 w-5 text-primary" /> Chapter-wise practice bank</h2>
          <p className="mb-3 text-sm text-muted-foreground">The full practice question library, chapter by chapter.</p>
          <div className="space-y-2">
            {data.practiceSubjects.map(s => (
              <Link key={s.name} href={`/question-bank/${s.name.toLowerCase()}`} className="flex items-center justify-between rounded-lg border p-3 text-sm hover:border-primary">
                {s.name} <span className="text-muted-foreground">{s.chapters} chapters <ArrowRight className="ml-1 inline h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-bold">{subject}: chapter-wise PYQ weightage</h2>
          <div className="flex gap-3 text-xs">
            {data.years.map(y => (
              <span key={y} className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: yearColor[y] }} />{y}</span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {chapters.map(c => (
            <Link
              key={c.slug}
              href={`/question-bank/pyq/${subjectSlug}/${c.slug}`}
              className="group space-y-3 rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold leading-snug group-hover:text-primary">{c.chapter}</h3>
                <TrendChip trend={c.trend} />
              </div>
              <YearBars perPaper={c.perPaper} years={data.years} max={max} />
              <p className="text-xs text-muted-foreground">
                {c.total} PYQs · top topic: <span className="text-foreground">{c.topics[0]?.name}</span>
              </p>
              {c.repeatedPatterns[0] && (
                <p className="flex items-start gap-1 text-xs">
                  <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-amber-500" />
                  <span>Repeats: <mark className="rounded bg-yellow-300/40 px-1 dark:bg-yellow-400/25">{c.repeatedPatterns[0].name}</mark></span>
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function ChapterMiniList({ list, subjectSlug, empty }: { list: ChapterStats[]; subjectSlug: string; empty: string }) {
  if (!list.length) return <p className="text-sm text-muted-foreground">{empty}</p>;
  return (
    <ul className="space-y-1">
      {list.map(c => (
        <li key={c.slug}>
          <Link href={`/question-bank/pyq/${subjectSlug}/${c.slug}`} className="flex items-center justify-between rounded-lg p-2 text-sm hover:bg-muted">
            {c.chapter} <TrendChip trend={c.trend} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
