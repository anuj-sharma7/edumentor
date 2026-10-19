'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, Repeat, Sparkles, Loader2, Eye, Flame, ImageIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { generatePracticeQuestion } from '@/ai/flows/generate-practice-question';
import type { PyqItem } from '@/lib/data/pyq/analysis';
import type { PyqType } from '@/lib/data/pyq/types';

type Attemptable = {
  question: string;
  type: PyqType;
  options?: string[];
  answers: string[];
  solution?: string;
  bonus?: boolean;
};

function isCorrect(q: Attemptable, picked: string[], typed: string) {
  if (q.bonus) return true;
  if (q.type === 'numerical') {
    const v = parseFloat(typed);
    if (Number.isNaN(v)) return false;
    return q.answers.some(a => {
      const range = a.split(/\s+to\s+/);
      if (range.length === 2) return v >= parseFloat(range[0]) && v <= parseFloat(range[1]);
      return Math.abs(v - parseFloat(a)) < 1e-6;
    });
  }
  return picked.length === q.answers.length && picked.every(p => q.answers.includes(p));
}

/** Attempt one question: choose/type, check, then see the answer and solution. */
export function Attempt({ q, onResult }: { q: Attemptable; onResult?: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<string[]>([]);
  const [typed, setTyped] = useState('');
  const [checked, setChecked] = useState(false);
  const ok = checked && isCorrect(q, picked, typed);

  const toggle = (opt: string) =>
    setPicked(p => (q.type === 'multiple' ? (p.includes(opt) ? p.filter(x => x !== opt) : [...p, opt]) : [opt]));

  const check = () => {
    setChecked(true);
    onResult?.(isCorrect(q, picked, typed));
  };

  return (
    <div className="space-y-3">
      <p className="whitespace-pre-line text-sm font-medium leading-relaxed">{q.question}</p>
      {q.type === 'multiple' && !checked && (
        <p className="text-xs text-muted-foreground">One or more options may be correct.</p>
      )}
      {q.options ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {q.options.map((opt, i) => {
            const right = checked && q.answers.includes(opt);
            const wrong = checked && picked.includes(opt) && !q.answers.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                disabled={checked}
                onClick={() => toggle(opt)}
                className={cn(
                  'flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-all',
                  !checked && 'hover:border-primary/60',
                  !checked && picked.includes(opt) && 'border-primary bg-primary/10 ring-1 ring-primary',
                  right && 'border-green-500/70 bg-green-500/10',
                  wrong && 'border-red-500/70 bg-red-500/10'
                )}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
                {right && <CheckCircle2 className="h-4 w-4 text-green-600" aria-label="Correct" />}
                {wrong && <XCircle className="h-4 w-4 text-red-600" aria-label="Your answer" />}
              </button>
            );
          })}
        </div>
      ) : (
        <Input
          type="number"
          inputMode="decimal"
          placeholder="Type your answer"
          value={typed}
          disabled={checked}
          onChange={e => setTyped(e.target.value)}
          className="max-w-xs"
          aria-label="Numerical answer"
        />
      )}
      {!checked ? (
        <Button size="sm" onClick={check} disabled={q.options ? picked.length === 0 : typed.trim() === ''}>
          Check answer
        </Button>
      ) : (
        <div
          className={cn(
            'space-y-1 rounded-lg border p-3 text-sm',
            ok ? 'border-green-500/40 bg-green-500/5' : 'border-red-500/40 bg-red-500/5'
          )}
        >
          <p className={cn('font-semibold', ok ? 'text-green-600' : 'text-red-600')}>
            {ok ? 'Correct!' : 'Not quite.'} Answer: {q.answers.join(', ')}
            {q.bonus && ' (bonus question - marks to all)'}
          </p>
          {q.solution && (
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Solution: </span>
              {q.solution}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * A past-paper question with source, pattern highlight and remediation: a
 * wrong attempt offers other PYQs of the same pattern, then an AI question.
 */
export function PyqQuestionCard({
  q,
  related,
  repeatCount,
}: {
  q: PyqItem;
  /** Same-pattern / same-topic PYQs from other papers. */
  related: PyqItem[];
  /** How many papers this pattern appeared in. */
  repeatCount: number;
}) {
  const { toast } = useToast();
  const [wrong, setWrong] = useState(false);
  const [showRelated, setShowRelated] = useState(false);
  const [ai, setAi] = useState<{ text: string; options: string[]; answer: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const r = await generatePracticeQuestion({
        originalQuestion: q.question,
        originalAnswer: q.answers.join(', '),
        topic: `${q.pattern} (${q.chapter})`,
        difficulty: q.difficulty,
        concepts: [q.pattern, q.topic, q.chapter],
      });
      setAi(r);
    } catch (e) {
      console.error(e);
      toast({ title: 'AI unavailable', description: 'Could not generate a question right now.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-1.5">
        <Badge variant="secondary">{q.label}</Badge>
        <Badge variant="outline">{q.topic}</Badge>
        <Badge variant="outline">{q.difficulty}</Badge>
        {repeatCount > 1 && (
          <Badge className="gap-1 border-transparent bg-amber-500/15 text-amber-700 hover:bg-amber-500/15 dark:text-amber-400">
            <Flame className="h-3 w-3" /> Pattern seen in {repeatCount} papers
          </Badge>
        )}
      </div>
      <p className="text-xs font-semibold text-primary">
        Pattern: <mark className="rounded bg-yellow-300/40 px-1 text-foreground dark:bg-yellow-400/25">{q.pattern}</mark>
      </p>
      {q.figure && (
        <p className="flex gap-1.5 rounded-md bg-muted/60 p-2 text-xs text-muted-foreground">
          <ImageIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Figure: {q.figure}
        </p>
      )}
      {revealed ? (
        <Attempt q={q} onResult={ok => setWrong(!ok)} />
      ) : (
        <>
          <p className="whitespace-pre-line text-sm font-medium leading-relaxed">{q.question}</p>
          <Button size="sm" variant="outline" className="gap-1.5" onClick={() => setRevealed(true)}>
            <Eye className="h-4 w-4" /> Attempt
          </Button>
        </>
      )}

      {wrong && (
        <div className="space-y-3 rounded-lg border-2 border-dashed border-primary/40 p-3">
          <p className="text-sm">
            <span className="font-semibold">Clear this pattern:</span> reattempt questions built on the same idea.
          </p>
          <div className="flex flex-wrap gap-2">
            {related.length > 0 && (
              <Button size="sm" className="gap-1.5" onClick={() => setShowRelated(v => !v)}>
                <Repeat className="h-4 w-4" /> {showRelated ? 'Hide' : `${related.length} same-pattern PYQ${related.length > 1 ? 's' : ''}`}
              </Button>
            )}
            <Button size="sm" variant="outline" className="gap-1.5" onClick={generate} disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-violet-500" />}
              New question with AI
            </Button>
          </div>
          {showRelated &&
            related.map(r => (
              <div key={r.id} className="space-y-2 rounded-lg border bg-muted/30 p-3">
                <Badge variant="secondary">{r.label}</Badge>
                <Attempt q={r} />
              </div>
            ))}
          {ai && (
            <div className="space-y-2 rounded-lg border border-violet-500/40 p-3">
              <p className="text-xs font-semibold uppercase text-violet-600 dark:text-violet-400">AI question - same pattern</p>
              <Attempt key={ai.text} q={{ question: ai.text, type: 'single', options: ai.options, answers: [ai.answer] }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
