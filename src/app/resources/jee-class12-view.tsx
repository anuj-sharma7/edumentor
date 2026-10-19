'use client';

import { useMemo, useState } from 'react';
import {
  Atom,
  FlaskConical,
  Calculator,
  Flame,
  Target,
  BookOpen,
  Sigma,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  Search,
  X,
  Star,
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Highlighted } from '@/components/study/highlighted';
import type { JeeChapter, JeePriority, JeeSubject } from '@/lib/data/jee-class12';

const subjectIcons: Record<string, React.ElementType> = {
  Physics: Atom,
  Chemistry: FlaskConical,
  Mathematics: Calculator,
};

const priorityOrder: JeePriority[] = ['Very High', 'High', 'Medium', 'Low'];

const priorityStyles: Record<JeePriority, string> = {
  'Very High': 'border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400',
  High: 'border-orange-500/40 bg-orange-500/10 text-orange-600 dark:text-orange-400',
  Medium: 'border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-400',
  Low: 'border-border bg-muted text-muted-foreground',
};

function PriorityBadge({ priority }: { priority: JeePriority }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold',
        priorityStyles[priority]
      )}
    >
      {priority === 'Very High' && <Flame className="h-3 w-3" aria-hidden="true" />}
      {priority} priority
    </span>
  );
}

function ChapterDetail({ chapter }: { chapter: JeeChapter }) {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-muted-foreground">{chapter.overview}</p>

      <Tabs defaultValue="topics">
        <TabsList className="flex h-auto flex-wrap justify-start">
          <TabsTrigger value="topics" className="gap-1.5">
            <Target className="h-4 w-4" aria-hidden="true" /> Imp Topics
          </TabsTrigger>
          <TabsTrigger value="theory" className="gap-1.5">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> Theory
          </TabsTrigger>
          <TabsTrigger value="formulas" className="gap-1.5">
            <Sigma className="h-4 w-4" aria-hidden="true" /> Formulas
          </TabsTrigger>
          <TabsTrigger value="points" className="gap-1.5">
            <Lightbulb className="h-4 w-4" aria-hidden="true" /> Key Points
          </TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="mt-4 space-y-2">
          {chapter.importantTopics.map(topic => (
            <div
              key={topic.name}
              className={cn(
                'rounded-md border p-3',
                topic.hot && 'border-amber-500/50 bg-amber-500/10'
              )}
            >
              <p className="flex items-center gap-2 text-sm font-semibold">
                {topic.hot ? (
                  <Flame className="h-4 w-4 shrink-0 text-amber-500" aria-label="Most asked" />
                ) : (
                  <Star className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                )}
                {topic.name}
                {topic.hot && (
                  <span className="rounded bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    Most asked
                  </span>
                )}
              </p>
              {topic.note && (
                <p className="mt-1 pl-6 text-xs text-muted-foreground">{topic.note}</p>
              )}
            </div>
          ))}
        </TabsContent>

        <TabsContent value="theory" className="mt-4 space-y-4">
          {chapter.theory.map((section, i) => (
            <div key={section.heading} className="space-y-1">
              <h4 className="text-sm font-semibold text-primary">
                {i + 1}. {section.heading}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <Highlighted text={section.body} />
              </p>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="formulas" className="mt-4">
          <div className="grid gap-2 sm:grid-cols-2">
            {chapter.formulas.map(f => (
              <div
                key={f.label}
                className={cn(
                  'rounded-md border bg-muted/50 p-3',
                  f.important && 'border-yellow-500/60 bg-yellow-400/10'
                )}
              >
                <p className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {f.important && (
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-500" aria-label="Important" />
                  )}
                  {f.label}
                </p>
                <p className="mt-1 font-code text-sm text-foreground">{f.expr}</p>
                {f.note && <p className="mt-1 text-xs text-muted-foreground">{f.note}</p>}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="points" className="mt-4 space-y-4">
          <ul className="space-y-2">
            {chapter.keyPoints.map(point => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <Highlighted text={point} />
                </span>
              </li>
            ))}
          </ul>
          <div className="rounded-md border border-destructive/40 bg-destructive/5 p-3">
            <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-destructive">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" /> Common mistakes
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {chapter.mistakes.map(m => (
                <li key={m}>
                  <Highlighted text={m} />
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex gap-2 rounded-md border border-primary/30 bg-primary/5 p-3 text-sm">
        <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <span className="font-semibold text-primary">PYQ trend: </span>
          <span className="text-muted-foreground">{chapter.pyqTrend}</span>
        </p>
      </div>
    </div>
  );
}

export default function JeeClass12View({ subjects }: { subjects: JeeSubject[] }) {
  const [subject, setSubject] = useState(subjects[0].subject);
  const [priorityFilter, setPriorityFilter] = useState<JeePriority | 'All'>('All');
  const [sortByPriority, setSortByPriority] = useState(false);
  const [query, setQuery] = useState('');
  const [openChapters, setOpenChapters] = useState<string[]>([]);

  const active = subjects.find(s => s.subject === subject) ?? subjects[0];
  const trimmed = query.trim().toLowerCase();

  const mustDo = useMemo(
    () =>
      subjects.flatMap(s =>
        s.chapters
          .filter(c => c.priority === 'Very High')
          .map(c => ({ subject: s.subject, name: c.name }))
      ),
    [subjects]
  );

  const visibleChapters = useMemo(() => {
    let list = active.chapters.filter(
      c => priorityFilter === 'All' || c.priority === priorityFilter
    );
    if (trimmed) {
      list = list.filter(
        c =>
          c.name.toLowerCase().includes(trimmed) ||
          c.importantTopics.some(t => t.name.toLowerCase().includes(trimmed)) ||
          c.formulas.some(f => f.label.toLowerCase().includes(trimmed))
      );
    }
    if (sortByPriority) {
      list = [...list].sort(
        (a, b) => priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    }
    return list;
  }, [active, priorityFilter, trimmed, sortByPriority]);

  const jumpTo = (subjectName: JeeSubject['subject'], chapterName: string) => {
    setSubject(subjectName);
    setPriorityFilter('All');
    setQuery('');
    setOpenChapters([chapterName]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" aria-hidden="true" />
          JEE Class 12 - Chapter-wise Guide
        </CardTitle>
        <CardDescription>
          Every Class 12 chapter of Physics, Chemistry and Maths with its JEE priority, most-asked
          topics, theory notes, formulas and common mistakes. Weightage is an approximate number of
          questions per JEE Main shift based on recent papers.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Must-do chapters across all subjects */}
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Flame className="h-4 w-4 text-red-500" aria-hidden="true" />
            Must-do chapters ({mustDo.length}) - highest return for time spent
          </p>
          <div className="flex flex-wrap gap-2">
            {mustDo.map(c => (
              <button
                key={`${c.subject}-${c.name}`}
                type="button"
                onClick={() => jumpTo(c.subject, c.name)}
                className="rounded-full border border-red-500/40 bg-background px-3 py-1 text-xs font-medium transition-colors hover:bg-red-500/10"
              >
                <span className="text-muted-foreground">{c.subject.slice(0, 4)} · </span>
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Subject picker */}
        <div className="flex flex-wrap gap-2">
          {subjects.map(s => {
            const Icon = subjectIcons[s.subject] ?? Atom;
            const isActive = s.subject === subject;
            return (
              <Button
                key={s.subject}
                type="button"
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSubject(s.subject);
                  setOpenChapters([]);
                }}
                aria-pressed={isActive}
                className="gap-1.5"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {s.subject}
                <Badge variant="secondary" className="ml-1 font-normal">
                  {s.chapters.length}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {(['All', ...priorityOrder.filter(p => p !== 'Low')] as const).map(p => {
              const isActive = priorityFilter === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriorityFilter(p)}
                  aria-pressed={isActive}
                  className={cn(
                    'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                    isActive
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:text-foreground'
                  )}
                >
                  {p}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setSortByPriority(v => !v)}
              aria-pressed={sortByPriority}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                sortByPriority
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground'
              )}
            >
              Sort by priority
            </button>
          </div>
          <div className="relative md:w-72">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              placeholder="Search chapter, topic or formula"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="h-9 pl-9 pr-9"
              aria-label="Search JEE chapters"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Chapters */}
        {visibleChapters.length > 0 ? (
          <Accordion
            type="multiple"
            value={openChapters}
            onValueChange={setOpenChapters}
            className="space-y-3"
          >
            {visibleChapters.map(chapter => (
              <AccordionItem
                key={chapter.name}
                value={chapter.name}
                className={cn(
                  'rounded-lg border px-4',
                  chapter.priority === 'Very High' && 'border-l-4 border-l-red-500'
                )}
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-1 flex-col items-start gap-1.5 pr-2 text-left sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-base font-semibold">{chapter.name}</span>
                    <span className="flex flex-wrap items-center gap-1.5">
                      <PriorityBadge priority={chapter.priority} />
                      <Badge variant="outline" className="font-normal">
                        {chapter.weightage}
                      </Badge>
                      <Badge variant="secondary" className="font-normal">
                        {chapter.difficulty}
                      </Badge>
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2">
                  <ChapterDetail chapter={chapter} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
            No chapters match these filters.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
