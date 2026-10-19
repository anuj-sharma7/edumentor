'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, Flame, BookOpen, Sparkles, Target } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { samePatternQuestions, type ChapterStats, type PyqItem } from '@/lib/data/pyq/analysis';
import type { PredictedQuestion } from '@/lib/data/pyq/predicted-types';
import { Attempt, PyqQuestionCard } from './pyq-question-card';
import { TrendChip, YearBars } from './year-bars';

export function ChapterPyqView({
  stats,
  items,
  predicted,
  years,
  theoryHref,
}: {
  stats: ChapterStats;
  items: PyqItem[];
  predicted: PredictedQuestion[];
  years: number[];
  theoryHref?: string;
}) {
  const [year, setYear] = useState<number | 'All'>('All');
  const [exam, setExam] = useState<'All' | 'JEE Main' | 'JEE Advanced'>('All');
  const [topic, setTopic] = useState<string>('All');
  const [repeatedOnly, setRepeatedOnly] = useState(false);

  const patternPapers = useMemo(() => {
    const m = new Map<string, Set<string>>();
    for (const q of items) m.set(q.pattern, (m.get(q.pattern) ?? new Set()).add(q.paperId));
    return m;
  }, [items]);

  const visible = items.filter(
    q =>
      (year === 'All' || q.year === year) &&
      (exam === 'All' || q.exam === exam) &&
      (topic === 'All' || q.topic === topic) &&
      (!repeatedOnly || (patternPapers.get(q.pattern)?.size ?? 0) > 1)
  );
  const topicMax = stats.topics[0]?.total ?? 1;
  const yearMax = Math.max(...years.map(y => stats.perPaper[y] ?? 0), 0);

  const pill = (active: boolean) =>
    cn(
      'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
      active ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:text-foreground'
    );

  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-6xl space-y-6 p-4 pb-16 md:p-8">
      <div className="rounded-2xl border bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-6">
        <Link href="/question-bank" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Question Bank
        </Link>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{stats.subject}</Badge>
              <TrendChip trend={stats.trend} />
              <Badge variant="outline">{stats.total} PYQs</Badge>
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tight">{stats.chapter}</h1>
            {theoryHref && (
              <Link href={theoryHref} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                <BookOpen className="h-4 w-4" /> Revise the theory for this chapter
              </Link>
            )}
          </div>
          <div className="w-full md:w-64">
            <p className="mb-1 text-xs font-semibold text-muted-foreground">JEE Main questions per 75-question paper</p>
            <YearBars perPaper={stats.perPaper} years={years} max={yearMax} />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl border bg-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><Target className="h-5 w-5 text-primary" /> Topics asked</h2>
          <ul className="space-y-2">
            {stats.topics.map(t => (
              <li key={t.name}>
                <button type="button" onClick={() => setTopic(topic === t.name ? 'All' : t.name)} className="w-full text-left" title={`${t.total} questions`}>
                  <div className="flex justify-between text-xs">
                    <span className={cn(topic === t.name && 'font-semibold text-primary')}>{t.name}</span>
                    <span className="tabular-nums text-muted-foreground">{t.total}</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${(t.total / topicMax) * 100}%` }} />
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted-foreground">Tap a topic to filter the questions below.</p>
        </section>
        <section className="rounded-2xl border bg-card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-semibold"><Flame className="h-5 w-5 text-amber-500" /> Patterns that repeat</h2>
          {stats.repeatedPatterns.length ? (
            <ul className="space-y-2">
              {stats.repeatedPatterns.map(p => (
                <li key={p.name} className="rounded-lg border border-amber-500/40 bg-amber-500/5 p-2.5 text-sm">
                  <mark className="rounded bg-yellow-300/40 px-1 font-medium dark:bg-yellow-400/25">{p.name}</mark>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {p.total} Qs · {years.filter(y => p.byYear[y]).join(', ')}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No pattern has repeated across papers yet - every question here is a distinct idea.</p>
          )}
        </section>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {(['All', ...years] as const).map(y => (
          <button key={y} type="button" className={pill(year === y)} onClick={() => setYear(y)}>{y === 'All' ? 'All years' : y}</button>
        ))}
        <span className="mx-1 h-4 w-px bg-border" />
        {(['All', 'JEE Main', 'JEE Advanced'] as const).map(e => (
          <button key={e} type="button" className={pill(exam === e)} onClick={() => setExam(e)}>{e === 'All' ? 'Both exams' : e}</button>
        ))}
        <span className="mx-1 h-4 w-px bg-border" />
        <button type="button" className={pill(repeatedOnly)} onClick={() => setRepeatedOnly(v => !v)}>
          <Flame className="mr-1 inline h-3 w-3" />Repeated patterns only
        </button>
        {topic !== 'All' && (
          <button type="button" className={pill(true)} onClick={() => setTopic('All')}>Topic: {topic} ✕</button>
        )}
      </div>

      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">{visible.length} question{visible.length === 1 ? '' : 's'}</p>
        {visible.map(q => (
          <PyqQuestionCard
            key={q.id}
            q={q}
            related={samePatternQuestions(q, items)}
            repeatCount={patternPapers.get(q.pattern)?.size ?? 1}
          />
        ))}
      </section>

      {predicted.length > 0 && (
        <section className="space-y-4 rounded-2xl border-2 border-dashed border-violet-500/40 p-5">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-bold"><Sparkles className="h-5 w-5 text-violet-500" /> Possible questions from these trends</h2>
            <p className="text-sm text-muted-foreground">Written by EduMentor from the patterns above - not past paper questions.</p>
          </div>
          {predicted.map(p => (
            <div key={p.question} className="space-y-2 rounded-xl border bg-card p-4">
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">{p.topic}</Badge>
                <Badge variant="outline">{p.difficulty}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-violet-600 dark:text-violet-400">Why likely: </span>{p.basis}
              </p>
              <Attempt q={p} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
