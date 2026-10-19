'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  CircleDot,
  Flame,
  Layers,
  ListChecks,
  Bookmark,
  Target,
  Sigma,
  ChevronRight,
  Trophy,
  RotateCcw,
  Lightbulb,
  ImageIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import type { StudyChapter, StudyTopic } from '@/lib/data/study/types';
import { Highlighted } from './highlighted';
import { PracticeQuestionCard } from './practice-question';
import { StudyDiagram } from './study-diagrams';
import { isTopicCleared, topicKey, useStudyProgress } from './use-study-progress';

function PyqPanel({ topic }: { topic: StudyTopic }) {
  const [revealed, setRevealed] = useState(0);
  const { pyq } = topic;
  const steps = pyq.approach.length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="gap-1 border-transparent bg-red-500/15 text-red-700 hover:bg-red-500/15 dark:text-red-400">
          <Flame className="h-3 w-3" /> {pyq.exam}
        </Badge>
        <span className="text-xs text-muted-foreground">{pyq.frequency}</span>
      </div>
      <div className="rounded-xl border bg-muted/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          How it is asked
        </p>
        <p className="mt-1 text-sm font-medium leading-relaxed">{pyq.question}</p>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold">How to solve it - step by step</p>
        <ol className="space-y-2">
          {pyq.approach.map((step, i) => (
            <li
              key={i}
              className={cn(
                'flex gap-3 rounded-lg border p-3 text-sm transition-all',
                i < revealed ? 'border-primary/40 bg-primary/5' : 'border-dashed opacity-60'
              )}
            >
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                  i < revealed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                )}
              >
                {i + 1}
              </span>
              <span>{i < revealed ? step : 'Think about this step, then reveal it.'}</span>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-2">
          {revealed < steps ? (
            <>
              <Button size="sm" onClick={() => setRevealed(r => r + 1)} className="gap-1">
                Reveal step {revealed + 1} <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setRevealed(steps)}>
                Show all
              </Button>
            </>
          ) : (
            <Button size="sm" variant="ghost" onClick={() => setRevealed(0)} className="gap-1">
              <RotateCcw className="h-4 w-4" /> Hide steps
            </Button>
          )}
        </div>
        {revealed >= steps && (
          <p className="rounded-lg border border-green-500/40 bg-green-500/5 p-3 text-sm">
            <span className="font-semibold text-green-600">Answer: </span>
            {pyq.answer}
          </p>
        )}
      </div>
    </div>
  );
}

function TheoryPanel({ topic, onDone }: { topic: StudyTopic; onDone: () => void }) {
  const paragraphs = topic.theory.split(/\n\n+/);
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-7 text-foreground/90">
            <Highlighted text={p} />
          </p>
        ))}
      </div>

      {topic.diagram && (
        <figure className="overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 to-transparent p-4">
          <div className="mx-auto max-w-md text-foreground">
            <StudyDiagram name={topic.diagram} />
          </div>
          {topic.diagramCaption && (
            <figcaption className="mt-3 flex items-start gap-1.5 text-xs text-muted-foreground">
              <ImageIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {topic.diagramCaption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
            <Lightbulb className="h-4 w-4 text-amber-500" /> Key points
          </p>
          <ul className="space-y-2">
            {topic.keyPoints.map(k => (
              <li key={k} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <Highlighted text={k} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        {topic.formulas && topic.formulas.length > 0 && (
          <div className="rounded-xl border p-4">
            <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
              <Sigma className="h-4 w-4 text-primary" /> Formulas
            </p>
            <div className="space-y-1.5">
              {topic.formulas.map(f => (
                <p key={f} className="rounded-md bg-muted/60 px-2.5 py-1.5 font-code text-sm">
                  {f}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      <Button onClick={onDone} className="gap-1.5">
        I&apos;ve read this - see how it&apos;s asked <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

function RevisionCards({ chapter, open, onOpenChange }: { chapter: StudyChapter; open: boolean; onOpenChange: (v: boolean) => void }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const topic = chapter.topics[index];
  const go = (d: number) => {
    setFlipped(false);
    setIndex(i => (i + d + chapter.topics.length) % chapter.topics.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" /> Quick revision cards
          </DialogTitle>
          <DialogDescription>
            Recall the key points of each topic, then flip the card to check yourself.
          </DialogDescription>
        </DialogHeader>
        <button
          type="button"
          onClick={() => setFlipped(f => !f)}
          className={cn(
            'min-h-[220px] w-full rounded-xl border-2 p-5 text-left transition-colors',
            flipped ? 'border-primary/50 bg-primary/5' : 'border-dashed hover:border-primary/50'
          )}
          aria-label={flipped ? 'Show topic name' : 'Show key points'}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Card {index + 1} / {chapter.topics.length} · {flipped ? 'Key points' : 'Topic'}
          </p>
          {flipped ? (
            <ul className="mt-3 space-y-2">
              {topic.keyPoints.map(k => (
                <li key={k} className="flex gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <Highlighted text={k} />
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 py-10 text-center">
              <p className="text-xl font-bold">{topic.name}</p>
              <p className="text-sm text-muted-foreground">
                What are the key points? Tap to flip.
              </p>
            </div>
          )}
        </button>
        <div className="flex justify-between">
          <Button variant="outline" size="sm" onClick={() => go(-1)} className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Prev
          </Button>
          <Button size="sm" onClick={() => go(1)} className="gap-1">
            Next <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ChapterStudyView({
  chapter,
  slug,
  subjectSlug,
}: {
  chapter: StudyChapter;
  slug: string;
  subjectSlug: string;
}) {
  const { state, recordAnswer, markRead, resetTopic, toggleBookmark } = useStudyProgress();
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState('theory');
  const [cardsOpen, setCardsOpen] = useState(false);

  // Allow deep links like /theory/physics/kinematics#topic-3
  useEffect(() => {
    const m = window.location.hash.match(/^#topic-(\d+)$/);
    if (m) setActive(Math.min(Number(m[1]) - 1, chapter.topics.length - 1));
  }, [chapter.topics.length]);

  const topic = chapter.topics[active];
  const key = topicKey(slug, topic.name);
  const progressFor = (t: StudyTopic) => state.topics[topicKey(slug, t.name)];

  const clearedCount = useMemo(
    () => chapter.topics.filter(t => isTopicCleared(progressFor(t), t.questions.length)).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state, chapter, slug]
  );
  const pct = Math.round((clearedCount / chapter.topics.length) * 100);
  const topicProgress = progressFor(topic);
  const topicCorrect = topicProgress?.correct.length ?? 0;
  const topicCleared = isTopicCleared(topicProgress, topic.questions.length);
  const bookmarked = state.bookmarks.includes(key);

  const selectTopic = (i: number) => {
    setActive(i);
    setTab('theory');
    window.history.replaceState(null, '', `#topic-${i + 1}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-7xl space-y-6 p-4 pb-16 md:p-8">
      {/* Header */}
      <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-6">
        <Link
          href={`/theory?subject=${subjectSlug}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All {chapter.subject} chapters
        </Link>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{chapter.subject}</Badge>
              <Badge variant="outline">Class {chapter.classLevel}</Badge>
              <Badge variant="outline">{chapter.topics.length} topics</Badge>
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              {chapter.name}
            </h1>
            <p className="max-w-2xl text-muted-foreground">{chapter.summary}</p>
          </div>
          <div className="w-full space-y-2 md:w-64">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <Trophy className="h-4 w-4 text-amber-500" /> Chapter progress
              </span>
              <span className="text-muted-foreground">
                {clearedCount}/{chapter.topics.length} cleared
              </span>
            </div>
            <Progress value={pct} className="h-2.5" />
            <Button variant="outline" size="sm" className="w-full gap-1.5" onClick={() => setCardsOpen(true)}>
              <Layers className="h-4 w-4" /> Quick revision cards
            </Button>
          </div>
        </div>
      </div>

      {/* Most repeated */}
      <details className="group rounded-2xl border border-red-500/30 bg-red-500/5 p-5" open>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
          <span className="flex items-center gap-2 font-semibold">
            <Flame className="h-5 w-5 text-red-500" /> Most repeated in JEE papers
          </span>
          <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
        </summary>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {chapter.mostRepeated.map(p => (
            <li key={p} className="flex gap-2 rounded-lg bg-background/70 p-3 text-sm leading-relaxed">
              <Target className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
              <span>
                <Highlighted text={p} />
              </span>
            </li>
          ))}
        </ul>
      </details>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Topic navigator */}
        <nav aria-label="Topics" className="lg:sticky lg:top-4 lg:self-start">
          <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Topics
          </p>
          <ol className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
            {chapter.topics.map((t, i) => {
              const p = progressFor(t);
              const cleared = isTopicCleared(p, t.questions.length);
              const started = !!p && (p.attempted.length > 0 || p.read);
              const Icon = cleared ? CheckCircle2 : started ? CircleDot : Circle;
              const isActive = i === active;
              return (
                <li key={t.name} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => selectTopic(i)}
                    className={cn(
                      'flex w-full items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm transition-all',
                      isActive
                        ? 'border-primary bg-primary/10 font-semibold text-primary shadow-sm'
                        : 'border-transparent hover:border-border hover:bg-muted/60'
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-4 w-4 shrink-0',
                        cleared ? 'text-green-600' : started ? 'text-amber-500' : 'text-muted-foreground'
                      )}
                      aria-label={cleared ? 'Cleared' : started ? 'In progress' : 'Not started'}
                    />
                    <span className="whitespace-nowrap lg:whitespace-normal">
                      {i + 1}. {t.name}
                    </span>
                    {state.bookmarks.includes(topicKey(slug, t.name)) && (
                      <Bookmark className="ml-auto h-3.5 w-3.5 shrink-0 fill-primary text-primary" aria-label="Bookmarked" />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Topic content */}
        <article className="min-w-0 space-y-5 rounded-2xl border bg-card p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Topic {active + 1} of {chapter.topics.length}
              </p>
              <h2 className="text-2xl font-bold">{topic.name}</h2>
            </div>
            <div className="flex items-center gap-2">
              {topicCleared && (
                <Badge className="gap-1 border-transparent bg-green-500/15 text-green-700 hover:bg-green-500/15 dark:text-green-400">
                  <CheckCircle2 className="h-3 w-3" /> Topic cleared
                </Badge>
              )}
              <Button
                variant={bookmarked ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => toggleBookmark(key)}
                className="gap-1.5"
              >
                <Bookmark className={cn('h-4 w-4', bookmarked && 'fill-primary text-primary')} />
                {bookmarked ? 'Saved' : 'Save'}
              </Button>
            </div>
          </div>

          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="grid h-auto w-full grid-cols-3">
              <TabsTrigger value="theory" className="gap-1.5 py-2">
                <BookOpen className="h-4 w-4" /> Theory
              </TabsTrigger>
              <TabsTrigger value="pyq" className="gap-1.5 py-2">
                <Flame className="h-4 w-4" /> PYQ
              </TabsTrigger>
              <TabsTrigger value="practice" className="gap-1.5 py-2">
                <ListChecks className="h-4 w-4" /> Practice
                <span className="rounded-full bg-primary/15 px-1.5 text-xs text-primary">
                  {topicCorrect}/{topic.questions.length}
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="theory" className="mt-5">
              <TheoryPanel
                key={topic.name}
                topic={topic}
                onDone={() => {
                  markRead(key);
                  setTab('pyq');
                }}
              />
            </TabsContent>

            <TabsContent value="pyq" className="mt-5 space-y-5">
              <PyqPanel key={topic.name} topic={topic} />
              <Button onClick={() => setTab('practice')} className="gap-1.5">
                Practise 3 questions <ArrowRight className="h-4 w-4" />
              </Button>
            </TabsContent>

            <TabsContent value="practice" className="mt-5 space-y-4">
              <div className="space-y-2 rounded-xl border bg-muted/30 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Clear this topic by getting all 3 right</span>
                  <span className="text-muted-foreground">
                    {topicCorrect}/{topic.questions.length}
                  </span>
                </div>
                <Progress value={(topicCorrect / topic.questions.length) * 100} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Got one wrong? You will get a similar question on the same concept, and an AI-generated one if you still need more practice.
                </p>
              </div>
              {topic.questions.map((q, i) => (
                <PracticeQuestionCard
                  key={`${topic.name}-${i}`}
                  q={q}
                  index={i}
                  topic={topic.name}
                  chapter={chapter.name}
                  solved={topicProgress?.correct.includes(i) ?? false}
                  onResult={correct => recordAnswer(key, i, correct)}
                />
              ))}
              {topicCleared && (
                <div className="flex flex-col items-center gap-2 rounded-xl border border-green-500/40 bg-green-500/5 p-5 text-center">
                  <Trophy className="h-8 w-8 text-amber-500" />
                  <p className="font-semibold">Topic cleared! Great work.</p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => resetTopic(key)} className="gap-1">
                      <RotateCcw className="h-4 w-4" /> Reset progress
                    </Button>
                    {active < chapter.topics.length - 1 && (
                      <Button size="sm" onClick={() => selectTopic(active + 1)} className="gap-1">
                        Next topic <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex justify-between border-t pt-4">
            <Button
              variant="outline"
              size="sm"
              disabled={active === 0}
              onClick={() => selectTopic(active - 1)}
              className="gap-1"
            >
              <ArrowLeft className="h-4 w-4" /> Previous topic
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={active === chapter.topics.length - 1}
              onClick={() => selectTopic(active + 1)}
              className="gap-1"
            >
              Next topic <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </article>
      </div>

      <RevisionCards chapter={chapter} open={cardsOpen} onOpenChange={setCardsOpen} />
    </div>
  );
}
