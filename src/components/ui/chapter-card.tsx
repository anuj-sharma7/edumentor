import Link from 'next/link';
import { BookCopy, ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ChapterCardProps {
  title: string;
  questionCount: number;
  href: string;
  /** Position in the row, used to pick a tint from the fixed sequence below. */
  index?: number;
}

/**
 * Tints are decorative, not an encoding - they only help the eye separate
 * neighbouring cards. They are drawn in a fixed order so a chapter keeps the
 * same tint between renders, and the text sits on a token colour either way.
 */
const tints = [
  'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
  'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
];

export const ChapterCard = ({ title, questionCount, href, index = 0 }: ChapterCardProps) => {
  const tint = tints[index % tints.length];

  return (
    <Link
      href={href}
      className={cn(
        'group flex h-32 flex-col justify-between rounded-lg border p-4 transition-colors',
        'hover:border-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        tint
      )}
    >
      <span className="line-clamp-3 text-sm font-semibold leading-snug text-foreground">
        {title}
      </span>
      <span className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <BookCopy className="h-3.5 w-3.5" aria-hidden="true" />
          {questionCount.toLocaleString('en-IN')} questions
        </span>
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
};
