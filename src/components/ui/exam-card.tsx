'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ExamCardProps {
  name: string;
  logo: string;
  tag: string;
  href: string;
  tagColor?: string;
}

export default function ExamCard({ name, logo, tag, href, tagColor }: ExamCardProps) {
  const isComingSoon = tag === 'COMING SOON';

  const body = (
    <>
      <div
        className={cn(
          'relative flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2 transition-transform',
          !isComingSoon && 'group-hover:scale-105'
        )}
      >
        <Image src={logo} alt="" width={28} height={28} className="object-contain" />
      </div>
      <h3 className="text-sm font-semibold leading-tight">{name}</h3>
      {tag && (
        <Badge
          variant="outline"
          className={cn(
            'text-[10px] font-medium uppercase tracking-wide',
            isComingSoon ? 'border-border text-muted-foreground' : tagColor
          )}
        >
          {tag}
        </Badge>
      )}
    </>
  );

  const shell =
    'flex h-full flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center';

  // A card with nowhere to go is not a link - it stays inert so keyboard users
  // are not sent to an anchor that does nothing.
  if (isComingSoon) {
    return <div className={cn(shell, 'border-dashed bg-muted/30 opacity-70')}>{body}</div>;
  }

  return (
    <Link
      href={href}
      className={cn(
        shell,
        'group bg-card transition-colors hover:border-primary/60 hover:bg-primary/5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
      )}
    >
      {body}
    </Link>
  );
}
