'use client';

import { useMemo, useState } from 'react';
import {
  Atom,
  FlaskConical,
  Calculator,
  Sigma,
  Star,
  Search,
  X,
  CheckCircle2,
  XCircle,
  ChevronDown,
  HelpCircle,
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
import { Input } from '@/components/ui/input';
import { LeafIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { FormulaSubject } from '@/lib/data';
import type {
  FormulaQuestion,
  FormulaSheetChapter,
  FormulaSheetSubject,
  SheetFormula,
} from '@/lib/data/formula-sheet';

const subjectIcons: Record<string, React.ElementType> = {
  Physics: Atom,
  Chemistry: FlaskConical,
  Mathematics: Calculator,
  Biology: LeafIcon,
};

type ClassFilter = 'All' | 11 | 12;

function FormulaCard({ formula }: { formula: SheetFormula }) {
  return (
    <div
      className={cn(
        'rounded-md border bg-muted/40 p-3',
        formula.important && 'border-yellow-500/60 bg-yellow-400/10'
      )}
    >
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {formula.important && (
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-500" aria-label="Important" />
        )}
        {formula.label}
      </p>
      <p
        className={cn(
          'mt-1 font-code text-sm text-foreground',
          formula.important && 'font-semibold'
        )}
      >
        {formula.expr}
      </p>
      {formula.note && <p className="mt-1 text-xs text-muted-foreground">{formula.note}</p>}
    </div>
  );
}

function QuestionCard({ q, index }: { q: FormulaQuestion; index: number }) {
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const showResult = revealed || picked !== null;

  return (
    <div className="space-y-3 rounded-md border p-4">
      <p className="text-sm font-medium">
        <span className="mr-1 text-primary">Q{index + 1}.</span>
        {q.question}
      </p>

      {q.options && (
        <div className="grid gap-2 sm:grid-cols-2">
          {q.options.map((opt, i) => {
            const isAnswer = opt === q.answer;
            const isPicked = opt === picked;
            return (
              <button
                key={opt}
                type="button"
                disabled={showResult}
                onClick={() => setPicked(opt)}
                className={cn(
                  'flex items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors',
                  !showResult && 'hover:border-primary/60 hover:bg-primary/5',
                  showResult && isAnswer && 'border-green-500/60 bg-green-500/10',
                  showResult && isPicked && !isAnswer && 'border-red-500/60 bg-red-500/10'
                )}
              >
                <span className="font-semibold text-muted-foreground">
                  {String.fromCharCode(65 + i)}.
                </span>
                <span className="flex-1">{opt}</span>
                {showResult && isAnswer && (
                  <CheckCircle2 className="h-4 w-4 text-green-600" aria-label="Correct answer" />
                )}
                {showResult && isPicked && !isAnswer && (
                  <XCircle className="h-4 w-4 text-red-600" aria-label="Your answer" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {!showResult ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
          {q.options ? 'Show answer & solution' : 'Show solution'}
        </button>
      ) : (
        <div className="space-y-1 rounded-md bg-muted/50 p-3 text-sm">
          {picked !== null && (
            <p
              className={cn(
                'font-semibold',
                picked === q.answer ? 'text-green-600' : 'text-red-600'
              )}
            >
              {picked === q.answer ? 'Correct!' : 'Not quite.'}
            </p>
          )}
          <p>
            <span className="font-semibold">Answer: </span>
            <mark className="rounded bg-yellow-300/40 px-1 font-semibold text-foreground dark:bg-yellow-400/25">
              {q.answer}
            </mark>
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Solution: </span>
            {q.solution}
          </p>
          <p className="text-xs text-muted-foreground">
            Formula used: <span className="font-medium text-primary">{q.uses}</span>
          </p>
        </div>
      )}
    </div>
  );
}

function ChapterPanel({
  chapter,
  importantOnly,
}: {
  chapter: FormulaSheetChapter;
  importantOnly: boolean;
}) {
  const formulas = importantOnly ? chapter.formulas.filter(f => f.important) : chapter.formulas;
  return (
    <div className="space-y-5">
      <div className="grid gap-2 sm:grid-cols-2">
        {formulas.map(f => (
          <FormulaCard key={f.label} formula={f} />
        ))}
      </div>

      {chapter.questions.length > 0 && (
        <div className="space-y-3">
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
            Practice questions on these formulas
          </h4>
          {chapter.questions.map((q, i) => (
            <QuestionCard key={q.question} q={q} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export type FormulaSheetViewProps = {
  sheet: FormulaSheetSubject[];
  biology?: FormulaSubject;
};

export default function FormulaSheetView({ sheet, biology }: FormulaSheetViewProps) {
  const [classFilter, setClassFilter] = useState<ClassFilter>('All');
  const [importantOnly, setImportantOnly] = useState(false);
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();

  const totals = useMemo(() => {
    const chapters = sheet.flatMap(s => s.chapters);
    const formulas = chapters.flatMap(c => c.formulas);
    return {
      formulas: formulas.length,
      important: formulas.filter(f => f.important).length,
      questions: chapters.reduce((n, c) => n + c.questions.length, 0),
    };
  }, [sheet]);

  const filterChapters = (chapters: FormulaSheetChapter[]) =>
    chapters.filter(c => {
      if (classFilter !== 'All' && c.classLevel !== classFilter) return false;
      if (!trimmed) return true;
      return (
        c.name.toLowerCase().includes(trimmed) ||
        c.formulas.some(
          f => f.label.toLowerCase().includes(trimmed) || f.expr.toLowerCase().includes(trimmed)
        )
      );
    });

  const pill = (active: boolean) =>
    cn(
      'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
      active
        ? 'border-primary bg-primary/10 text-primary'
        : 'border-border text-muted-foreground hover:text-foreground'
    );

  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-6xl space-y-8 p-6 pb-16 md:p-10">
      <header className="space-y-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Formula Sheets
        </h1>
        <p className="text-muted-foreground">
          {totals.formulas} formulas across Class 11 and 12 Physics, Chemistry and Maths.{' '}
          <span className="inline-flex items-center gap-1 font-medium text-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" aria-hidden="true" />
            {totals.important} must-know formulas
          </span>{' '}
          are highlighted, with {totals.questions} practice questions to apply them.
        </p>
      </header>

      <Card>
        <CardHeader className="space-y-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Sigma className="h-5 w-5 text-primary" aria-hidden="true" />
              Formulas by Chapter
            </CardTitle>
            <CardDescription>
              Filter by class, show only the starred formulas for last-minute revision, or search a
              formula.
            </CardDescription>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 11, 12] as const).map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setClassFilter(c)}
                  aria-pressed={classFilter === c}
                  className={pill(classFilter === c)}
                >
                  {c === 'All' ? 'All classes' : `Class ${c}`}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setImportantOnly(v => !v)}
                aria-pressed={importantOnly}
                className={cn(pill(importantOnly), 'inline-flex items-center gap-1')}
              >
                <Star
                  className={cn('h-3.5 w-3.5', importantOnly && 'fill-yellow-400 text-yellow-500')}
                  aria-hidden="true"
                />
                Important only
              </button>
            </div>
            <div className="relative md:w-72">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                placeholder="Search formula, e.g. Bernoulli"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="h-9 pl-9 pr-9"
                aria-label="Search formulas"
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
        </CardHeader>

        <CardContent>
          <Tabs defaultValue={sheet[0]?.subject}>
            <TabsList className="flex h-auto flex-wrap justify-start">
              {[...sheet.map(s => s.subject), ...(biology ? ['Biology'] : [])].map(name => {
                const Icon = subjectIcons[name] ?? Atom;
                return (
                  <TabsTrigger key={name} value={name} className="gap-1.5">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {sheet.map(s => {
              const chapters = filterChapters(s.chapters);
              return (
                <TabsContent key={s.subject} value={s.subject} className="mt-4">
                  {chapters.length > 0 ? (
                    <Accordion type="multiple" className="space-y-3">
                      {chapters.map(chapter => {
                        const important = chapter.formulas.filter(f => f.important).length;
                        return (
                          <AccordionItem
                            key={`${chapter.classLevel}-${chapter.name}`}
                            value={`${chapter.classLevel}-${chapter.name}`}
                            className="rounded-lg border px-4"
                          >
                            <AccordionTrigger className="hover:no-underline">
                              <div className="flex flex-1 flex-col items-start gap-1.5 pr-2 text-left sm:flex-row sm:items-center sm:justify-between">
                                <span className="text-base font-semibold">{chapter.name}</span>
                                <span className="flex flex-wrap items-center gap-1.5">
                                  <Badge variant="outline" className="font-normal">
                                    Class {chapter.classLevel}
                                  </Badge>
                                  <Badge variant="secondary" className="font-normal">
                                    {chapter.formulas.length} formulas
                                  </Badge>
                                  <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/50 bg-yellow-400/10 px-2 py-0.5 text-[11px] font-semibold">
                                    <Star
                                      className="h-3 w-3 fill-yellow-400 text-yellow-500"
                                      aria-hidden="true"
                                    />
                                    {important}
                                  </span>
                                  {chapter.questions.length > 0 && (
                                    <Badge variant="secondary" className="font-normal">
                                      {chapter.questions.length} Qs
                                    </Badge>
                                  )}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 pt-2">
                              <ChapterPanel chapter={chapter} importantOnly={importantOnly} />
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  ) : (
                    <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                      No chapters match these filters.
                    </p>
                  )}
                </TabsContent>
              );
            })}

            {biology && (
              <TabsContent value="Biology" className="mt-4">
                <Accordion type="multiple" className="space-y-3">
                  {biology.topics.map(topic => (
                    <AccordionItem
                      key={topic.name}
                      value={topic.name}
                      className="rounded-lg border px-4"
                    >
                      <AccordionTrigger className="text-base font-semibold hover:no-underline">
                        {topic.name}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-2 pb-4 pt-2">
                        {topic.concepts.map(concept => (
                          <div key={concept.title} className="rounded-md border bg-muted/40 p-3">
                            <p className="font-semibold">{concept.title}</p>
                            {concept.explanation && (
                              <p className="mt-1 text-sm text-muted-foreground">
                                {concept.explanation}
                              </p>
                            )}
                            <p className="mt-2 whitespace-pre-wrap font-code text-sm text-primary">
                              {concept.formula}
                            </p>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
