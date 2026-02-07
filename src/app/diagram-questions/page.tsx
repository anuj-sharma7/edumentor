
'use client';

import { useState } from 'react';
import type { Question } from '@/lib/data';
import { diagramBasedQuestions } from '@/lib/data/diagram-based-questions';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

const QuestionCard = ({ question, index }: { question: Question; index: number }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [numericalAnswer, setNumericalAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isMcq = question.questionType === 'mcq' || !question.questionType;

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const getMcqOptionClass = (option: string) => {
    if (!isSubmitted) return 'hover:bg-accent/50';
    if (option === question.answer) return 'bg-green-100 dark:bg-green-900/30 border-green-500';
    if (option === selectedOption) return 'bg-red-100 dark:bg-red-900/30 border-red-500';
    return '';
  };
  
  const getNumericalResultClass = () => {
    if (!isSubmitted) return '';
    const isCorrect = numericalAnswer.trim() === question.answer;
    return isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
  }

  return (
    <Card className="bg-secondary/30">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
                 {question.imageUrl && (
                    <div className="mb-4 p-4 bg-background/50 rounded-lg border">
                        <Image 
                            src={question.imageUrl} 
                            alt={`Diagram for question ${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-auto rounded-md object-contain"
                            data-ai-hint={question.diagramAiHint}
                        />
                    </div>
                 )}
                 <p className="font-semibold text-base mb-2">
                    Q{index + 1}: {question.text}
                </p>
                 <Badge variant={question.difficulty === 'Easy' ? 'secondary' : question.difficulty === 'Hard' ? 'destructive' : 'default'} className="capitalize">{question.difficulty}</Badge>
            </div>

            <div className="space-y-4">
              {isMcq ? (
                  <RadioGroup
                    value={selectedOption || undefined}
                    onValueChange={setSelectedOption}
                    className="space-y-2"
                    disabled={isSubmitted}
                  >
                    {question.options?.map((option, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`${question.id}-option-${i}`} />
                        <Label htmlFor={`${question.id}-option-${i}`} className={cn("cursor-pointer flex-1 p-3 rounded-md border transition-all", getMcqOptionClass(option))}>
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
              ) : (
                <div className='my-4'>
                    <Input 
                        type="text" 
                        value={numericalAnswer}
                        onChange={(e) => setNumericalAnswer(e.target.value)}
                        placeholder="Enter your answer"
                        className="max-w-xs"
                        disabled={isSubmitted}
                    />
                </div>
              )}
              
              {!isSubmitted && (
                  <Button onClick={handleSubmit} size="sm" variant="outline" disabled={isMcq ? !selectedOption : !numericalAnswer}>
                    Check Answer
                  </Button>
              )}

              {isSubmitted && (
                <div className={cn(
                    "mt-4 p-3 rounded-md text-sm",
                    isMcq ? 
                        (selectedOption === question.answer ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300")
                        : getNumericalResultClass()
                )}>
                   <p className="font-bold flex items-center">
                    {isMcq ? (selectedOption === question.answer ? <Check className="w-4 h-4 mr-2"/> : <X className="w-4 h-4 mr-2"/>) : (numericalAnswer.trim() === question.answer ? <Check className="w-4 h-4 mr-2"/> : <X className="w-4 h-4 mr-2"/>)}
                    {isMcq ? (selectedOption === question.answer ? "Correct!" : "Incorrect.") : (numericalAnswer.trim() === question.answer ? "Correct!" : "Incorrect.")}
                   </p> 
                   <p className="mt-1">The correct answer is: <strong>{question.answer}</strong></p>
                   {question.explanation && <p className="mt-2 text-muted-foreground italic">{question.explanation}</p>}
                </div>
              )}
            </div>
        </CardContent>
    </Card>
  );
};


export default function DiagramBasedQuestionsPage() {
  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
        <header className="space-y-4 mb-8">
             <Button asChild variant="outline">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                </Link>
             </Button>
             <div className="space-y-2">
                <h1 className="text-4xl font-headline font-bold">Diagram Based Questions</h1>
                <p className="text-muted-foreground md:text-xl">
                    Practice questions that require interpreting diagrams and figures.
                </p>
             </div>
        </header>
        <div className="space-y-6">
            {diagramBasedQuestions.map((q, i) => (
                <QuestionCard key={q.id} question={q} index={i} />
            ))}
        </div>
    </div>
  );
}
