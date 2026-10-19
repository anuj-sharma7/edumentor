'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Loader2,
  Repeat,
  PartyPopper,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { generatePracticeQuestion } from '@/ai/flows/generate-practice-question';
import type { PracticeQuestion } from '@/lib/data/study/types';

type McqProps = {
  question: string;
  options: string[];
  answer: string;
  solution?: string;
  /** Called once, when the student checks their choice. */
  onChecked?: (correct: boolean) => void;
};

/** One multiple-choice question: pick, check, see the result and solution. */
function Mcq({ question, options, answer, solution, onChecked }: McqProps) {
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = picked === answer;

  const check = () => {
    if (!picked) return;
    setChecked(true);
    onChecked?.(picked === answer);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium leading-relaxed">{question}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt, i) => {
          const showRight = checked && opt === answer;
          const showWrong = checked && opt === picked && !isCorrect;
          return (
            <button
              key={opt}
              type="button"
              disabled={checked}
              onClick={() => setPicked(opt)}
              className={cn(
                'flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-all',
                !checked && 'hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-sm',
                !checked && picked === opt && 'border-primary bg-primary/10 ring-1 ring-primary',
                showRight && 'border-green-500/70 bg-green-500/10',
                showWrong && 'border-red-500/70 bg-red-500/10'
              )}
            >
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold',
                  picked === opt && !checked && 'border-primary bg-primary text-primary-foreground'
                )}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {showRight && <CheckCircle2 className="h-4 w-4 text-green-600" aria-label="Correct" />}
              {showWrong && <XCircle className="h-4 w-4 text-red-600" aria-label="Your answer" />}
            </button>
          );
        })}
      </div>

      {!checked ? (
        <Button size="sm" onClick={check} disabled={!picked}>
          Check answer
        </Button>
      ) : (
        <div
          className={cn(
            'space-y-1 rounded-lg border p-3 text-sm',
            isCorrect ? 'border-green-500/40 bg-green-500/5' : 'border-red-500/40 bg-red-500/5'
          )}
        >
          <p className={cn('font-semibold', isCorrect ? 'text-green-600' : 'text-red-600')}>
            {isCorrect ? 'Correct!' : `Not quite - the answer is "${answer}".`}
          </p>
          {solution && (
            <p className="whitespace-pre-line text-muted-foreground">
              <span className="font-semibold text-foreground">Solution: </span>
              {solution}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

type Stage = 'main' | 'similar' | 'ai';

type AiQuestion = { text: string; options: string[]; answer: string; relatedTopics: string[] };

export type PracticeQuestionCardProps = {
  q: PracticeQuestion;
  index: number;
  topic: string;
  chapter: string;
  /** Already solved in an earlier session. */
  solved: boolean;
  onResult: (correct: boolean) => void;
};

/**
 * A practice question with hint, solution and remediation: a wrong answer
 * unlocks a hand-written similar question, and if that is also missed the
 * student can generate a fresh one with AI.
 */
export function PracticeQuestionCard({
  q,
  index,
  topic,
  chapter,
  solved,
  onResult,
}: PracticeQuestionCardProps) {
  const { toast } = useToast();
  const [attempt, setAttempt] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [stage, setStage] = useState<Stage>('main');
  const [mainWrong, setMainWrong] = useState(false);
  const [similarResult, setSimilarResult] = useState<boolean | null>(null);
  const [ai, setAi] = useState<AiQuestion | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<boolean | null>(null);

  const reset = () => {
    setAttempt(a => a + 1);
    setShowHint(false);
    setStage('main');
    setMainWrong(false);
    setSimilarResult(null);
    setAi(null);
    setAiResult(null);
  };

  const generateAi = async () => {
    setAiLoading(true);
    setAiResult(null);
    try {
      const result = await generatePracticeQuestion({
        originalQuestion: q.similar.question,
        originalAnswer: q.similar.answer,
        topic: `${topic} (${chapter})`,
        difficulty: q.difficulty,
        concepts: [topic, chapter],
      });
      setAi(result);
      setStage('ai');
    } catch (error) {
      console.error('AI question generation failed', error);
      toast({
        title: 'Could not generate a question',
        description: 'The AI service is unavailable right now. Re-read the theory and try the similar question again.',
        variant: 'destructive',
      });
    } finally {
      setAiLoading(false);
    }
  };

  const difficultyStyle = {
    Easy: 'border-green-500/40 text-green-600 dark:text-green-400',
    Medium: 'border-amber-500/40 text-amber-600 dark:text-amber-400',
    Hard: 'border-red-500/40 text-red-600 dark:text-red-400',
  }[q.difficulty];

  return (
    <div className="space-y-4 rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {index + 1}
          </span>
          <Badge variant="outline" className={cn('font-medium', difficultyStyle)}>
            {q.difficulty}
          </Badge>
          {solved && (
            <Badge className="gap-1 border-transparent bg-green-500/15 text-green-700 hover:bg-green-500/15 dark:text-green-400">
              <CheckCircle2 className="h-3 w-3" /> Cleared
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-1">
          {stage === 'main' && !mainWrong && (
            <Button variant="ghost" size="sm" onClick={() => setShowHint(v => !v)} className="gap-1">
              <Lightbulb className="h-4 w-4 text-amber-500" /> {showHint ? 'Hide hint' : 'Hint'}
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={reset} className="gap-1" aria-label="Retry question">
            <RotateCcw className="h-4 w-4" /> Retry
          </Button>
        </div>
      </div>

      {showHint && stage === 'main' && (
        <p className="flex gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-sm">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden="true" />
          {q.hint}
        </p>
      )}

      <Mcq
        key={`main-${attempt}`}
        question={q.question}
        options={q.options}
        answer={q.answer}
        solution={q.solution}
        onChecked={correct => {
          onResult(correct);
          setMainWrong(!correct);
        }}
      />

      {mainWrong && stage === 'main' && (
        <div className="flex flex-col gap-3 rounded-lg border border-primary/40 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            <span className="font-semibold">Concept not clear yet?</span> Try a similar question on
            the same idea to lock it in.
          </p>
          <Button size="sm" className="gap-1.5" onClick={() => setStage('similar')}>
            <Repeat className="h-4 w-4" /> Similar question
          </Button>
        </div>
      )}

      {(stage === 'similar' || stage === 'ai') && (
        <div className="space-y-3 rounded-lg border-2 border-dashed border-primary/40 p-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <Repeat className="h-3.5 w-3.5" /> Similar question - same concept
          </p>
          <Mcq
            key={`similar-${attempt}`}
            question={q.similar.question}
            options={q.similar.options}
            answer={q.similar.answer}
            solution={q.similar.solution}
            onChecked={correct => {
              setSimilarResult(correct);
              if (correct) onResult(true);
            }}
          />
          {similarResult === true && (
            <p className="flex items-center gap-2 text-sm font-semibold text-green-600">
              <PartyPopper className="h-4 w-4" /> Concept cleared - nice recovery!
            </p>
          )}
          {similarResult === false && stage === 'similar' && (
            <div className="flex flex-col gap-3 rounded-lg border border-violet-500/40 bg-violet-500/5 p-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm">Still tricky? Get a brand-new question generated for this concept.</p>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5"
                onClick={generateAi}
                disabled={aiLoading}
              >
                {aiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-violet-500" />}
                Generate with AI
              </Button>
            </div>
          )}
        </div>
      )}

      {stage === 'ai' && ai && (
        <div className="space-y-3 rounded-lg border-2 border-dashed border-violet-500/50 p-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">
            <Sparkles className="h-3.5 w-3.5" /> AI-generated practice
          </p>
          <Mcq
            key={ai.text}
            question={ai.text}
            options={ai.options}
            answer={ai.answer}
            onChecked={correct => {
              setAiResult(correct);
              if (correct) onResult(true);
            }}
          />
          {ai.relatedTopics.length > 0 && (
            <p className="text-xs text-muted-foreground">
              Revise: {ai.relatedTopics.join(' · ')}
            </p>
          )}
          {aiResult !== null && (
            <Button size="sm" variant="outline" className="gap-1.5" onClick={generateAi} disabled={aiLoading}>
              {aiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-violet-500" />}
              Another one
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
