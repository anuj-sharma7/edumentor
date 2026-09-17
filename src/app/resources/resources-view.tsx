'use client';

import { useMemo, useState } from 'react';
import {
  Atom,
  FlaskConical,
  Calculator,
  GitMerge,
  BookOpen,
  Search,
  ChevronDown,
  X,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ConceptMap } from '@/components/ui/concept-map';
import { LeafIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { TheorySubject } from '@/lib/data/theory';

const subjectIcons: Record<string, React.ElementType> = {
  Physics: Atom,
  Chemistry: FlaskConical,
  Mathematics: Calculator,
  Biology: LeafIcon,
};

/** A formula of literally 'N/A' isn't a formula - treat it as absent. */
function hasFormula(formula?: string) {
  return !!formula && formula.trim().toUpperCase() !== 'N/A';
}

type FlatConcept = {
  subject: string;
  chapter: string;
  title: string;
  explanation: string;
  formula?: string;
  derivation?: string;
};

/** One concept card, used both in the per-subject browser and in search results. */
function ConceptCard({ concept, showPath = false }: { concept: FlatConcept; showPath?: boolean }) {
  const [showDerivation, setShowDerivation] = useState(false);

  return (
    <Card>
      <CardHeader className="pb-3">
        {showPath && (
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {concept.subject} &middot; {concept.chapter}
          </p>
        )}
        <CardTitle className="text-base text-primary">{concept.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed text-muted-foreground">{concept.explanation}</p>

        {hasFormula(concept.formula) && (
          <pre className="whitespace-pre-wrap rounded-md border bg-muted/50 p-3 font-code text-sm text-foreground">
            {concept.formula}
          </pre>
        )}

        {concept.derivation && (
          <div>
            <button
              type="button"
              onClick={() => setShowDerivation(v => !v)}
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              aria-expanded={showDerivation}
            >
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', showDerivation && 'rotate-180')}
                aria-hidden="true"
              />
              {showDerivation ? 'Hide derivation' : 'Show derivation'}
            </button>
            {showDerivation && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {concept.derivation}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export type ResourcesViewProps = {
  theory: TheorySubject[];
};

export default function ResourcesView({ theory }: ResourcesViewProps) {
  const subjectNames = theory.map(s => s.subject);

  const totalChapters = theory.reduce((n, s) => n + s.chapters.length, 0);
  const totalConcepts = theory.reduce(
    (n, s) => n + s.chapters.reduce((m, c) => m + c.concepts.length, 0),
    0
  );

  const flatConcepts = useMemo<FlatConcept[]>(
    () =>
      theory.flatMap(s =>
        s.chapters.flatMap(c =>
          c.concepts.map(concept => ({
            subject: s.subject,
            chapter: c.name,
            title: concept.title,
            explanation: concept.explanation,
            formula: concept.formula,
            derivation: concept.derivation,
          }))
        )
      ),
    [theory]
  );

  // ---- Concept map tab state -----------------------------------------
  const [mapSubject, setMapSubject] = useState(subjectNames[0]);
  const mapSubjectData = theory.find(s => s.subject === mapSubject) ?? theory[0];
  const [mapChapter, setMapChapter] = useState(mapSubjectData.chapters[0]?.name);
  const activeChapter =
    mapSubjectData.chapters.find(c => c.name === mapChapter) ?? mapSubjectData.chapters[0];

  const handleMapSubjectChange = (subject: string) => {
    setMapSubject(subject);
    const next = theory.find(s => s.subject === subject);
    setMapChapter(next?.chapters[0]?.name ?? '');
  };

  // ---- Theory & formulas tab state ------------------------------------
  const [query, setQuery] = useState('');
  const trimmedQuery = query.trim().toLowerCase();
  const searchResults = trimmedQuery
    ? flatConcepts.filter(
        c =>
          c.title.toLowerCase().includes(trimmedQuery) ||
          c.explanation.toLowerCase().includes(trimmedQuery) ||
          c.chapter.toLowerCase().includes(trimmedQuery)
      )
    : [];

  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-6xl space-y-8 p-6 pb-16 md:p-10">
      <header className="space-y-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
          Resources
        </h1>
        <p className="text-muted-foreground">
          Visualise how concepts connect, or search {totalConcepts} concepts and their formulas
          across {totalChapters} chapters in Physics, Chemistry, Mathematics and Biology &mdash;
          built for both JEE and NEET.
        </p>
      </header>

      <Tabs defaultValue="concept-maps" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="concept-maps" className="gap-2">
            <GitMerge className="h-4 w-4" aria-hidden="true" /> Concept Maps
          </TabsTrigger>
          <TabsTrigger value="theory" className="gap-2">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> Theory &amp; Formulas
          </TabsTrigger>
        </TabsList>

        {/* ================= CONCEPT MAPS ================= */}
        <TabsContent value="concept-maps" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitMerge className="h-5 w-5 text-primary" aria-hidden="true" />
                Concept Maps
              </CardTitle>
              <CardDescription>
                Pick a chapter to see how its concepts branch out. Tap a node for the explanation,
                formula and derivation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Subject picker */}
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Subject">
                {theory.map(s => {
                  const Icon = subjectIcons[s.subject] ?? Atom;
                  const isActive = s.subject === mapSubject;
                  return (
                    <Button
                      key={s.subject}
                      type="button"
                      variant={isActive ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleMapSubjectChange(s.subject)}
                      aria-pressed={isActive}
                      className="gap-1.5"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {s.subject}
                    </Button>
                  );
                })}
              </div>

              {/* Chapter picker */}
              <div className="flex flex-wrap gap-2">
                {mapSubjectData.chapters.map(c => {
                  const isActive = c.name === activeChapter?.name;
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setMapChapter(c.name)}
                      aria-pressed={isActive}
                      className={cn(
                        'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                        isActive
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      )}
                    >
                      {c.name}
                      <span className="ml-1.5 text-muted-foreground">{c.concepts.length}</span>
                    </button>
                  );
                })}
              </div>

              {activeChapter && (
                <ConceptMap
                  // Remount on chapter change so the diagram resets its selection.
                  key={`${mapSubjectData.subject}-${activeChapter.name}`}
                  chapterName={activeChapter.name}
                  concepts={activeChapter.concepts}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ================= THEORY & FORMULAS ================= */}
        <TabsContent value="theory" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                Theory &amp; Formulas
              </CardTitle>
              <CardDescription>
                Search across every subject, or browse chapter by chapter.
              </CardDescription>
              <div className="relative pt-2">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  placeholder="Search a concept, e.g. Gauss's Law"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="h-11 pl-9 pr-9"
                  aria-label="Search theory and formulas"
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
            </CardHeader>

            <CardContent>
              {trimmedQuery ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {searchResults.length} result{searchResults.length === 1 ? '' : 's'} for
                    &ldquo;{query.trim()}&rdquo;
                  </p>
                  {searchResults.length > 0 ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      {searchResults.map(c => (
                        <ConceptCard key={`${c.subject}-${c.chapter}-${c.title}`} concept={c} showPath />
                      ))}
                    </div>
                  ) : (
                    <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                      No concepts match that search. Try a shorter term, e.g. &ldquo;law&rdquo; or
                      &ldquo;energy&rdquo;.
                    </p>
                  )}
                </div>
              ) : (
                <Tabs defaultValue={subjectNames[0]}>
                  <TabsList>
                    {theory.map(s => {
                      const Icon = subjectIcons[s.subject] ?? Atom;
                      return (
                        <TabsTrigger key={s.subject} value={s.subject} className="gap-1.5">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                          {s.subject}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                  {theory.map(s => (
                    <TabsContent key={s.subject} value={s.subject} className="mt-4">
                      <Accordion type="multiple" defaultValue={[s.chapters[0]?.name]} className="space-y-3">
                        {s.chapters.map(chapter => (
                          <AccordionItem
                            key={chapter.name}
                            value={chapter.name}
                            className="rounded-lg border px-4"
                          >
                            <AccordionTrigger className="text-base font-semibold hover:no-underline">
                              <span className="flex items-center gap-2">
                                {chapter.name}
                                <Badge variant="secondary" className="font-normal">
                                  {chapter.concepts.length}
                                </Badge>
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pb-4 pt-2">
                              {chapter.concepts.map(concept => (
                                <ConceptCard
                                  key={concept.title}
                                  concept={{ ...concept, subject: s.subject, chapter: chapter.name }}
                                />
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabsContent>
                  ))}
                </Tabs>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
