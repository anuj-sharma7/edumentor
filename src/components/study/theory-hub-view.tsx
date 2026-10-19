'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  Atom,
  FlaskConical,
  Calculator,
  Search,
  X,
  BookOpen,
  ListChecks,
  Bookmark,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Flame,
  Repeat,
  Layers,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { LeafIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { StudyChapterSummary } from '@/lib/data/study';
import type { TheoryChapter } from '@/lib/data/theory';
import { isTopicCleared, topicKey, useStudyProgress } from './use-study-progress';

const subjects = [
  { name: 'Physics', slug: 'physics', icon: Atom },
  { name: 'Chemistry', slug: 'chemistry', icon: FlaskConical },
  { name: 'Mathematics', slug: 'mathematics', icon: Calculator },
  { name: 'Biology', slug: 'biology', icon: LeafIcon },
] as const;

type ClassFilter = 'All' | 11 | 12;

const features = [
  { icon: BookOpen, title: 'Topic-wise theory', text: 'Highlighted notes, diagrams, key points and formulas' },
  { icon: Flame, title: 'PYQ patterns', text: 'How each topic is asked, with a step-by-step method' },
  { icon: ListChecks, title: '3 questions per topic', text: 'Hints and full solutions to clear every concept' },
  { icon: Repeat, title: 'Wrong? Try a similar one', text: 'Same concept again, plus AI-generated practice' },
  { icon: Layers, title: 'Revision cards', text: 'Flip cards to recall key points fast' },
];

export function TheoryHubView({
  chapters,
  biology,
  initialSubject,
}: {
  chapters: StudyChapterSummary[];
  biology: TheoryChapter[];
  initialSubject?: string;
}) {
  const { state } = useStudyProgress();
  const [subject, setSubject] = useState<string>(
    subjects.some(s => s.slug === initialSubject) ? initialSubject! : 'physics'
  );
  const [classFilter, setClassFilter] = useState<ClassFilter>('All');
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();

  const totals = useMemo(
    () => ({
      chapters: chapters.length,
      topics: chapters.reduce((n, c) => n + c.topics.length, 0),
      questions: chapters.reduce((n, c) => n + c.questionCount, 0),
    }),
    [chapters]
  );

  const subjectName = subjects.find(s => s.slug === subject)?.name;
  const visible = chapters.filter(c => {
    if (c.subject !== subjectName) return false;
    if (classFilter !== 'All' && c.classLevel !== classFilter) return false;
    if (!trimmed) return true;
    return c.name.toLowerCase().includes(trimmed) || c.topics.some(t => t.toLowerCase().includes(trimmed));
  });

  const clearedIn = (c: StudyChapterSummary) =>
    c.topics.filter(t => {
      const p = state.topics[topicKey(c.slug, t)];
      // Every topic carries 3 questions.
      return isTopicCleared(p, 3);
    }).length;

  const bookmarks = state.bookmarks
    .map(b => {
      const [slug, topic] = b.split('::');
      const chapter = chapters.find(c => c.slug === slug);
      if (!chapter) return null;
      const index = chapter.topics.indexOf(topic);
      return index < 0 ? null : { chapter, topic, index };
    })
    .filter((b): b is NonNullable<typeof b> => b !== null);

  const pill = (active: boolean) =>
    cn(
      'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
      active ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:text-foreground'
    );

  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-7xl space-y-8 p-4 pb-16 md:p-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-6 md:p-8">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" /> JEE Class 11 & 12
        </div>
        <h1 className="mt-2 font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Theory &amp; Concept Practice
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Learn every topic of every chapter, see how it comes in JEE, and clear the concept with
          practice questions that adapt when you make a mistake.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            ['Chapters', totals.chapters],
            ['Topics', totals.topics],
            ['Practice questions', totals.questions],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border bg-background/70 px-4 py-2">
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {features.map(f => (
            <div key={f.title} className="rounded-xl bg-background/60 p-3">
              <f.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="mt-1.5 text-sm font-semibold">{f.title}</p>
              <p className="text-xs text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Saved topics */}
      {bookmarks.length > 0 && (
        <section className="space-y-3">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Bookmark className="h-5 w-5 fill-primary text-primary" /> Saved topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {bookmarks.map(b => (
              <Link
                key={`${b.chapter.slug}-${b.topic}`}
                href={`/theory/${b.chapter.subject.toLowerCase()}/${b.chapter.slug}#topic-${b.index + 1}`}
                className="rounded-full border bg-card px-3 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {b.topic} <span className="text-muted-foreground">· {b.chapter.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Controls */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {subjects.map(s => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setSubject(s.slug)}
              aria-pressed={subject === s.slug}
              className={cn(
                'flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all',
                subject === s.slug
                  ? 'border-primary bg-primary text-primary-foreground shadow-md'
                  : 'bg-card hover:border-primary/50'
              )}
            >
              <s.icon className="h-4 w-4" aria-hidden="true" /> {s.name}
            </button>
          ))}
        </div>

        {subject !== 'biology' && (
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2">
              {(['All', 11, 12] as const).map(c => (
                <button key={c} type="button" onClick={() => setClassFilter(c)} aria-pressed={classFilter === c} className={pill(classFilter === c)}>
                  {c === 'All' ? 'All classes' : `Class ${c}`}
                </button>
              ))}
            </div>
            <div className="relative md:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input
                placeholder="Search a chapter or topic"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="h-10 pl-9 pr-9"
                aria-label="Search chapters and topics"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Clear search">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Chapters */}
      {subject === 'biology' ? (
        <Accordion type="multiple" className="space-y-3">
          {biology.map(chapter => (
            <AccordionItem key={chapter.name} value={chapter.name} className="rounded-xl border bg-card px-5">
              <AccordionTrigger className="text-base font-semibold hover:no-underline">{chapter.name}</AccordionTrigger>
              <AccordionContent className="space-y-4 pb-5">
                {chapter.concepts.map(c => (
                  <div key={c.title} className="border-t pt-3">
                    <p className="font-semibold text-primary">{c.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.explanation}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : visible.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map(c => {
            const cleared = clearedIn(c);
            const pct = Math.round((cleared / c.topics.length) * 100);
            const matches = trimmed ? c.topics.filter(t => t.toLowerCase().includes(trimmed)) : [];
            return (
              <Link
                key={c.slug}
                href={`/theory/${subject}/${c.slug}`}
                className="group flex flex-col rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-2">
                  <Badge variant="outline">Class {c.classLevel}</Badge>
                  {pct === 100 && <CheckCircle2 className="h-5 w-5 text-green-600" aria-label="Chapter cleared" />}
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-primary">{c.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(matches.length ? matches : c.topics.slice(0, 3)).map(t => (
                    <span key={t} className={cn('rounded-md px-2 py-0.5 text-xs', matches.includes(t) ? 'bg-yellow-400/30 font-medium' : 'bg-muted text-muted-foreground')}>
                      {t}
                    </span>
                  ))}
                  {!matches.length && c.topics.length > 3 && (
                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">+{c.topics.length - 3} more</span>
                  )}
                </div>
                <div className="mt-auto space-y-1.5 pt-4">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      {c.topics.length} topics · {c.questionCount} Qs
                    </span>
                    <span>{cleared}/{c.topics.length} cleared</span>
                  </div>
                  <Progress value={pct} className="h-1.5" />
                  <p className="flex items-center gap-1 pt-1 text-sm font-medium text-primary">
                    {cleared > 0 ? 'Continue' : 'Start learning'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            );
          })}
        </section>
      ) : (
        <p className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
          No chapters match these filters.
        </p>
      )}
    </div>
  );
}
