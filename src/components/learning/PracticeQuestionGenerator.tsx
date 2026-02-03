'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Lightbulb, Check, X } from 'lucide-react';
import { generatePracticeQuestion, type GeneratePracticeQuestionOutput } from '@/ai/flows/generate-practice-question';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { Question } from '@/lib/data';

interface PracticeQuestionGeneratorProps {
  originalQuestion: Pick<Question, 'text' | 'answer' | 'difficulty' | 'concepts' | 'questionType'>;
}

export default function PracticeQuestionGenerator({ originalQuestion }: PracticeQuestionGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<GeneratePracticeQuestionOutput | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedQuestion(null);
    setSelectedOption(null);
    setIsSubmitted(false);
    setIsOpen(true);

    try {
      const result = await generatePracticeQuestion({
        originalQuestion: originalQuestion.text,
        originalAnswer: originalQuestion.answer,
        topic: originalQuestion.concepts[0] || 'general science', // Use first concept as topic
        difficulty: originalQuestion.difficulty,
        concepts: originalQuestion.concepts,
      });
      setGeneratedQuestion(result);
    } catch (error) {
      console.error('Failed to generate practice question:', error);
      toast({
        title: 'Generation Failed',
        description: 'Could not generate a similar question. Please try again.',
        variant: 'destructive',
      });
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckAnswer = () => {
    setIsSubmitted(true);
  };

  const getOptionClass = (option: string) => {
    if (!isSubmitted || !generatedQuestion) return '';
    if (option === generatedQuestion.answer) return 'bg-green-100 dark:bg-green-900/30 border-green-500';
    if (option === selectedOption) return 'bg-red-100 dark:bg-red-900/30 border-red-500';
    return 'border-border';
  };

  return (
    <>
      <Button variant="secondary" size="sm" onClick={handleGenerate} className="mt-2 transition-all hover:scale-105 hover:shadow-md hover:shadow-primary/20">
        <Sparkles className="mr-2 h-4 w-4" />
        Practice a similar question
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
                <Lightbulb className="h-6 w-6 text-primary"/>
                AI Practice Question
            </DialogTitle>
            <DialogDescription>
              Here's a similar question to help you master the concept.
            </DialogDescription>
          </DialogHeader>
          {isLoading ? (
            <div className="flex items-center justify-center p-16 flex-col gap-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Generating question...</p>
            </div>
          ) : generatedQuestion && (
            <div className="space-y-4">
              <p className="font-semibold text-base">{generatedQuestion.text}</p>
              <RadioGroup
                value={selectedOption || ''}
                onValueChange={setSelectedOption}
                className="space-y-2"
                disabled={isSubmitted}
              >
                {generatedQuestion.options.map((option, i) => (
                  <Label
                    key={i}
                    htmlFor={`option-${i}`}
                    className={cn(
                      'flex items-center p-3 border rounded-md cursor-pointer transition-colors',
                      getOptionClass(option)
                    )}
                  >
                    <RadioGroupItem value={option} id={`option-${i}`} className="mr-3" />
                    {option}
                  </Label>
                ))}
              </RadioGroup>

              {isSubmitted && (
                 <div className={cn(
                    "mt-4 p-3 rounded-md text-sm flex items-center gap-2",
                    selectedOption === generatedQuestion.answer ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300" : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                )}>
                    {selectedOption === generatedQuestion.answer ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                   <span>{selectedOption === generatedQuestion.answer ? "Correct!" : "Incorrect."} The correct answer is: <strong>{generatedQuestion.answer}</strong></span>
                </div>
              )}

              <Card className="bg-secondary/50">
                  <CardHeader>
                      <CardTitle className="text-base font-semibold">Related Topics to Study</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                      {generatedQuestion.relatedTopics.map((topic, i) => (
                          <Badge key={i} variant="outline">{topic}</Badge>
                      ))}
                  </CardContent>
              </Card>
            </div>
          )}
          <DialogFooter>
            {!isSubmitted && generatedQuestion && (
                <Button onClick={handleCheckAnswer} disabled={!selectedOption}>Check Answer</Button>
            )}
             {(isSubmitted || isLoading) ? <Button onClick={() => setIsOpen(false)}>Close</Button> : null}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
