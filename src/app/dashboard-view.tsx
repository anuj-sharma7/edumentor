"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Autoplay from 'embla-carousel-autoplay';
import {
  Atom,
  FlaskConical,
  Calculator,
  BookCopy,
  PencilRuler,
  Flame,
  ArrowRight,
  Search,
  ListTree,
  FileQuestion,
  ImageIcon,
  Library,
  FileCheck2,
  Layers,
  GraduationCap,
} from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExamCard from '@/components/ui/exam-card';
import { ChapterCard } from '@/components/ui/chapter-card';
import { LeafIcon } from '@/components/icons';
import { useProfile } from '@/context/profile-context';
import type { ChapterHighlight, DashboardStats } from '@/lib/dashboard-stats';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*  Static content                                                             */
/* -------------------------------------------------------------------------- */

const heroSlides = [
  {
    id: 'jee-main',
    badge: 'JEE Main 2025',
    title: 'Crack the Main exam',
    copy: 'Practise with thousands of previous-year questions and full-length mock tests.',
    cta: { label: 'Start a mock test', href: '/mock-test' },
    image: 'https://picsum.photos/seed/jee-main-hero/1600/500',
    alt: 'Students preparing for the JEE Main engineering entrance exam',
    accent: 'from-blue-950/95 via-blue-950/70',
    badgeClass: 'bg-blue-600 text-white',
  },
  {
    id: 'jee-advanced',
    badge: 'JEE Advanced 2025',
    title: 'Aim for the top ranks',
    copy: 'Master the hardest concepts with an advanced-level question bank.',
    cta: { label: 'Open question bank', href: '/question-bank' },
    image: 'https://picsum.photos/seed/jee-advanced-hero/1600/500',
    alt: 'An engineering campus lecture hall',
    accent: 'from-rose-950/95 via-rose-950/70',
    badgeClass: 'bg-rose-600 text-white',
  },
  {
    id: 'neet',
    badge: 'NEET 2025',
    title: 'Secure your medical seat',
    copy: 'Comprehensive Biology, Physics and Chemistry preparation in one place.',
    cta: { label: 'Browse chapters', href: '/question-bank/biology' },
    image: 'https://picsum.photos/seed/neet-hero/1600/500',
    alt: 'A medical college building',
    accent: 'from-emerald-950/95 via-emerald-950/70',
    badgeClass: 'bg-emerald-600 text-white',
  },
];

const examCategories = [
  { name: 'JEE Main', logo: 'https://picsum.photos/seed/jee-main-logo/40/40', tag: '2025 QS ADDED', tagColor: 'bg-red-500/15 text-red-400 border-red-500/30', href: '/mock-test' },
  { name: 'JEE Advanced', logo: 'https://picsum.photos/seed/jee-advanced-logo/40/40', tag: '2025 QS ADDED', tagColor: 'bg-red-500/15 text-red-400 border-red-500/30', href: '/mock-test' },
  { name: 'NEET', logo: 'https://picsum.photos/seed/neet-logo/40/40', tag: '2025 QS ADDED', tagColor: 'bg-green-500/15 text-green-400 border-green-500/30', href: '/mock-test' },
  { name: 'Boards', logo: 'https://picsum.photos/seed/boards-logo/40/40', tag: 'NEW', tagColor: 'bg-pink-500/15 text-pink-400 border-pink-500/30', href: '/mock-test' },
  { name: 'NTA Abhyas', logo: 'https://picsum.photos/seed/nta-logo/40/40', tag: 'COMING SOON', tagColor: '', href: '#' },
  { name: 'BITSAT', logo: 'https://picsum.photos/seed/bitsat-logo/40/40', tag: 'COMING SOON', tagColor: '', href: '#' },
  { name: 'NDA', logo: 'https://picsum.photos/seed/nda-logo/40/40', tag: 'COMING SOON', tagColor: '', href: '#' },
  { name: 'VITEEE', logo: 'https://picsum.photos/seed/viteee-logo/40/40', tag: 'COMING SOON', tagColor: '', href: '#' },
  { name: 'IAT (IISER)', logo: 'https://picsum.photos/seed/iiser-logo/40/40', tag: 'COMING SOON', tagColor: '', href: '#' },
  { name: 'CUET', logo: 'https://picsum.photos/seed/cuet-logo/40/40', tag: 'COMING SOON', tagColor: '', href: '#' },
];

const subjectLinks = [
  { name: 'Physics', icon: Atom, href: '/question-bank/physics' },
  { name: 'Chemistry', icon: FlaskConical, href: '/question-bank/chemistry' },
  { name: 'Mathematics', icon: Calculator, href: '/question-bank/mathematics' },
  { name: 'Biology', icon: LeafIcon, href: '/question-bank/biology' },
];

const practiceActions = [
  {
    title: 'PYQ mock tests',
    description: 'Full-length papers under real exam timing.',
    icon: BookCopy,
    href: '/mock-test',
    badge: { label: 'New', className: 'bg-red-500/15 text-red-400 border-red-500/30' },
  },
  {
    title: 'Create your own test',
    description: 'Pick chapters, difficulty and length yourself.',
    icon: PencilRuler,
    href: '/mock-test/custom',
    badge: { label: 'Updated', className: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  },
];

const ncertTools = [
  { title: 'NCERT line-by-line questions', icon: ListTree, href: null },
  { title: 'NCERT & Exemplar questions', icon: FileQuestion, href: null },
  { title: 'Diagram-based questions', icon: ImageIcon, href: '/diagram-questions' },
];

/* -------------------------------------------------------------------------- */
/*  Primitives                                                                 */
/* -------------------------------------------------------------------------- */

/** Section wrapper: one heading treatment and one optional action for the whole page. */
function Section({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: { label: string; href: string };
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('space-y-4', className)}>
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-headline text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h2>
        {action && (
          <Button asChild variant="link" className="h-auto p-0 text-sm font-medium">
            <Link href={action.href}>
              View all
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        )}
      </div>
      {children}
    </section>
  );
}

const compactNumber = new Intl.NumberFormat('en-IN', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

/**
 * Stat tile: label, value, supporting line. Deliberately not a chart - these are
 * headline counts, and a one-bar chart would say less than the number does.
 */
function StatTile({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string;
  value: number;
  hint: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
        {value >= 10000 ? compactNumber.format(value) : value.toLocaleString('en-IN')}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

/** Shared affordance for the tappable cards, so focus and hover stay consistent. */
const interactiveCard =
  'group relative rounded-lg border bg-card transition-colors hover:border-primary/60 hover:bg-primary/5 ' +
  'focus-within:border-primary/60 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background';

/** Stretches an anchor over its card so the whole surface is one real link. */
const cardLinkOverlay =
  'after:absolute after:inset-0 after:rounded-lg after:content-[""] focus-visible:outline-none';

/* -------------------------------------------------------------------------- */
/*  View                                                                       */
/* -------------------------------------------------------------------------- */

export type DashboardViewProps = {
  stats: DashboardStats;
  chaptersBySubject: {
    physics: ChapterHighlight[];
    chemistry: ChapterHighlight[];
    mathematics: ChapterHighlight[];
  };
};

export default function DashboardView({ stats, chaptersBySubject }: DashboardViewProps) {
  const { profile, isLoading } = useProfile();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const submitSearch = () => {
    const query = searchQuery.trim();
    if (query) router.push(`/tagging?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="animate-fade-in-up mx-auto w-full max-w-7xl space-y-10 px-4 pb-16 pt-6 md:px-8 md:pt-10">
      {/* Greeting ---------------------------------------------------------- */}
      <header className="space-y-1">
        {isLoading || !profile ? (
          <>
            <Skeleton className="h-9 w-64" />
            <Skeleton className="h-5 w-80" />
          </>
        ) : (
          <>
            <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Hey, {profile.name}
            </h1>
            <p className="text-muted-foreground">
              Let&apos;s practise and conquer your exams.
            </p>
          </>
        )}
      </header>

      {/* Library at a glance ------------------------------------------------ */}
      <section aria-label="Your library at a glance">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatTile
            label="Questions"
            value={stats.totalQuestions}
            hint="Across every subject"
            icon={Library}
          />
          <StatTile
            label="Past papers"
            value={stats.pastPaperQuestions}
            hint="Tagged from real exams"
            icon={FileCheck2}
          />
          <StatTile
            label="Chapters"
            value={stats.chaptersWithQuestions}
            hint="Ready to practise"
            icon={Layers}
          />
          <StatTile
            label="Subjects"
            value={stats.subjectCount}
            hint="Physics to Biology"
            icon={GraduationCap}
          />
        </div>
      </section>

      {/* Hero carousel ------------------------------------------------------ */}
      <section aria-label="Featured exams">
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 6000, stopOnInteraction: true })]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                <Card className="overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] sm:aspect-[5/2] lg:aspect-[16/5]">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div
                        className={cn(
                          'absolute inset-0 flex flex-col justify-center gap-3 bg-gradient-to-r to-transparent p-6 text-white md:p-10',
                          slide.accent
                        )}
                      >
                        <Badge className={cn('w-fit border-0', slide.badgeClass)}>
                          {slide.badge}
                        </Badge>
                        <h2 className="max-w-xl font-headline text-2xl font-bold tracking-tight md:text-4xl">
                          {slide.title}
                        </h2>
                        <p className="hidden max-w-md text-sm text-white/80 sm:block md:text-base">
                          {slide.copy}
                        </p>
                        <Button asChild size="sm" variant="secondary" className="w-fit">
                          <Link href={slide.cta.href}>{slide.cta.label}</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Parked in the corner: at the sides these sit on top of the headline. */}
          <CarouselPrevious className="bottom-4 left-auto right-14 top-auto hidden translate-y-0 border-white/20 bg-black/40 text-white hover:bg-black/60 hover:text-white sm:flex" />
          <CarouselNext className="bottom-4 right-4 top-auto hidden translate-y-0 border-white/20 bg-black/40 text-white hover:bg-black/60 hover:text-white sm:flex" />
        </Carousel>
      </section>

      {/* Primary call to action --------------------------------------------- */}
      <section>
        <Card className="overflow-hidden border-primary/30 bg-primary/5">
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-xl space-y-2">
              <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
                The 99%iler&apos;s question bank
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                {stats.totalQuestions.toLocaleString('en-IN')} questions across{' '}
                {stats.chaptersWithQuestions} chapters, filtered by difficulty and
                tagged with the concepts they test.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
              {subjectLinks.map(({ name, icon: Icon, href }) => (
                <Button
                  key={name}
                  asChild
                  variant="outline"
                  className="h-auto flex-col gap-1.5 bg-background/60 py-3"
                >
                  <Link href={href}>
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-xs font-medium">{name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* Practice ------------------------------------------------------------ */}
      <Section title="Practice">
        <div className="space-y-3">
          <div className={cn(interactiveCard, 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60 hover:bg-amber-500/10')}>
            <div className="flex items-center justify-between gap-4 p-5">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">
                    <Link href="/dpp" className={cardLinkOverlay}>
                      Solve today&apos;s DPP
                    </Link>
                  </h3>
                  <Badge variant="outline" className="border-amber-500/40 bg-amber-500/10 text-amber-500">
                    Premium
                  </Badge>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Flame className="h-4 w-4 text-amber-500" aria-hidden="true" />
                  A fresh daily practice problem set
                </p>
              </div>
              <ArrowRight
                className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {practiceActions.map(({ title, description, icon: Icon, href, badge }) => (
              <div key={title} className={interactiveCard}>
                <div className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">
                        <Link href={href} className={cardLinkOverlay}>
                          {title}
                        </Link>
                      </h3>
                      <Badge variant="secondary" className={badge.className}>
                        {badge.label}
                      </Badge>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <ArrowRight
                    className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Exam-wise PYQ bank --------------------------------------------------- */}
      <Section title="Chapter-wise PYQ bank" action={{ label: 'View all', href: '/question-bank' }}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {examCategories.map(exam => (
            <ExamCard key={exam.name} {...exam} />
          ))}
        </div>
      </Section>

      {/* Formula cards -------------------------------------------------------- */}
      <Section title="Formula cards" action={{ label: 'View all', href: '/formulas' }}>
        <Tabs defaultValue="physics">
          <TabsList>
            <TabsTrigger value="physics" className="gap-1.5">
              <Atom className="h-4 w-4" aria-hidden="true" /> Physics
            </TabsTrigger>
            <TabsTrigger value="chemistry" className="gap-1.5">
              <FlaskConical className="h-4 w-4" aria-hidden="true" /> Chemistry
            </TabsTrigger>
            <TabsTrigger value="mathematics" className="gap-1.5">
              <Calculator className="h-4 w-4" aria-hidden="true" /> Maths
            </TabsTrigger>
          </TabsList>
          {(['physics', 'chemistry', 'mathematics'] as const).map(key => (
            <TabsContent key={key} value={key} className="mt-4">
              {chaptersBySubject[key].length > 0 ? (
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                  {chaptersBySubject[key].map((chapter, index) => (
                    <ChapterCard key={chapter.title} {...chapter} index={index} />
                  ))}
                </div>
              ) : (
                <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
                  No chapters with questions yet for this subject.
                </p>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      {/* Concept search -------------------------------------------------------- */}
      <Section title="Concept-wise notes">
        <Card className="p-5 md:p-6">
          <label htmlFor="concept-search" className="text-sm text-muted-foreground">
            Get clarity on any topic
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="concept-search"
                placeholder="e.g. Bernoulli's theorem"
                className="h-11 pl-9"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') submitSearch();
                }}
              />
            </div>
            <Button onClick={submitSearch} disabled={!searchQuery.trim()} className="h-11">
              Explain it
            </Button>
          </div>
        </Card>
      </Section>

      {/* NCERT toolbox ---------------------------------------------------------- */}
      <Section title="NCERT toolbox">
        <div className="grid gap-3 md:grid-cols-3">
          {ncertTools.map(({ title, icon: Icon, href }) =>
            href ? (
              <div key={title} className={interactiveCard}>
                <div className="flex items-center gap-4 p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold leading-snug">
                    <Link href={href} className={cardLinkOverlay}>
                      {title}
                    </Link>
                  </h3>
                </div>
              </div>
            ) : (
              // No destination yet - show it as pending rather than as a dead click target.
              <div key={title} className="rounded-lg border border-dashed bg-muted/30 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-snug text-muted-foreground">
                      {title}
                    </h3>
                    <span className="text-xs text-muted-foreground">Coming soon</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Section>
    </div>
  );
}
