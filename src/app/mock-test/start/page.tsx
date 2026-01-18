
'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { subjects, type Question } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Timer, Flag, ChevronsRight, ChevronsLeft, CheckCircle, Flame } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface TestQuestion extends Question {
  userAnswer?: string;
  status: 'unanswered' | 'answered' | 'review';
  timeTaken: number; // in seconds
}

interface TestSection {
    name: string;
    duration: number;
    questions: TestQuestion[];
}

interface TestConfig {
    name: string;
    questions: TestQuestion[]; // Flat list for backward compatibility and results page
    sections?: TestSection[];
    duration?: number;
    questionCount?: number;
}

export default function TestPage() {
  const [testConfig, setTestConfig] = useState<TestConfig | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const router = useRouter();
  
  const questionStartTime = useRef<number>(Date.now());
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeSection = testConfig?.sections ? testConfig.sections[currentSectionIndex] : null;
  // This state will hold the questions for the *current* section being attempted
  const [currentSectionQuestions, setCurrentSectionQuestions] = useState<TestQuestion[]>([]);

  const currentQuestion = currentSectionQuestions[currentQuestionIndex];

  // This function is for the final submission of the entire test
  const submitTest = useCallback(() => {
    if (!testConfig) return;
    
    if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
    }
    
    const allQuestions = testConfig.sections ? testConfig.sections.flatMap(s => s.questions) : testConfig.questions;
    const totalTimeTaken = allQuestions.reduce((acc, q) => acc + (q?.timeTaken || 0), 0);

    sessionStorage.setItem('testResults', JSON.stringify(allQuestions));
    sessionStorage.setItem('totalTimeTaken', JSON.stringify(totalTimeTaken));
    router.replace('/mock-test/results');
  }, [testConfig, router]);


  const submitSection = useCallback(() => {
    if (!testConfig) return;
    
    updateQuestionTime(currentQuestionIndex); 

    const updatedConfig = { ...testConfig };
    if (updatedConfig.sections) {
        updatedConfig.sections[currentSectionIndex].questions = currentSectionQuestions;
    } else {
        updatedConfig.questions = currentSectionQuestions;
    }
    sessionStorage.setItem('mockTestConfig', JSON.stringify(updatedConfig));
    
    const isLastSection = !updatedConfig.sections || currentSectionIndex >= updatedConfig.sections.length - 1;

    if (isLastSection) {
        submitTest();
    } else {
        sessionStorage.setItem('resumeSectionIndex', (currentSectionIndex + 1).toString());
        // We can reload the page to pick up the new section index from sessionStorage
        window.location.reload();
    }
    
  }, [testConfig, currentSectionQuestions, currentQuestionIndex, submitTest, router, currentSectionIndex]);


  useEffect(() => {
    const configStr = sessionStorage.getItem('mockTestConfig');
    if (!configStr) {
      router.replace('/mock-test');
      return;
    }
    const config: TestConfig = JSON.parse(configStr);
    
    const resumeSectionIndexStr = sessionStorage.getItem('resumeSectionIndex');
    const sectionIndex = resumeSectionIndexStr ? parseInt(resumeSectionIndexStr, 10) : 0;
    
    setCurrentSectionIndex(sectionIndex);

    let sectionQuestions: TestQuestion[];
    if (config.sections && config.sections[sectionIndex]) {
        const section = config.sections[sectionIndex];
        setTimeLeft(section.duration);
        sectionQuestions = section.questions.map(q => ({
            ...q,
            status: q.status || 'unanswered',
            timeTaken: q.timeTaken || 0,
            userAnswer: q.userAnswer || undefined,
        }));
    } else {
       setTimeLeft(config.duration ? config.duration * 60 : 0);
       sectionQuestions = (config.questions || []).map(q => ({
         ...q,
         status: q.status || 'unanswered',
         timeTaken: q.timeTaken || 0,
         userAnswer: q.userAnswer || undefined,
       }));
    }
    
    setTestConfig(config);
    setCurrentSectionQuestions(sectionQuestions);
    setCurrentQuestionIndex(0);
    questionStartTime.current = Date.now();
  }, [router]);
  
  useEffect(() => {
     if (timeLeft <= 0 && (testConfig?.sections || testConfig?.questions)) {
        if(timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        submitSection();
        return;
     }
     if (timeLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => {
          if(timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      }
     }
  }, [timeLeft, submitSection, testConfig]);

  const updateQuestionTime = (index: number) => {
      const timeSpent = (Date.now() - questionStartTime.current) / 1000;
      setCurrentSectionQuestions(prev => {
          const newQuestions = [...prev];
          if(newQuestions[index]) {
            newQuestions[index].timeTaken = (newQuestions[index].timeTaken || 0) + timeSpent;
          }
          return newQuestions;
      })
      questionStartTime.current = Date.now();
  }

  const handleAnswerChange = (answer: string) => {
    setCurrentSectionQuestions(prev => {
        const newQuestions = [...prev];
        if (newQuestions[currentQuestionIndex].status !== 'review') {
            newQuestions[currentQuestionIndex].status = 'answered';
        }
        newQuestions[currentQuestionIndex].userAnswer = answer;
        return newQuestions;
    });
  };
  
  const handleMarkForReview = () => {
    setCurrentSectionQuestions(prev => {
        const newQuestions = [...prev];
        const currentStatus = newQuestions[currentQuestionIndex].status;
        if (currentStatus === 'review') {
            newQuestions[currentQuestionIndex].status = newQuestions[currentQuestionIndex].userAnswer ? 'answered' : 'unanswered';
        } else {
            newQuestions[currentQuestionIndex].status = 'review';
        }
        return newQuestions;
    });
  }

  const handleNext = () => {
    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      updateQuestionTime(currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
       updateQuestionTime(currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handlePaletteClick = (index: number) => {
    if(index !== currentQuestionIndex) {
        updateQuestionTime(currentQuestionIndex);
        setCurrentQuestionIndex(index);
    }
  }

  if (!testConfig || !currentQuestion) {
    return (
      <div className="flex items-center justify-center h-screen bg-secondary">
        <p className="text-lg">Loading your test...</p>
      </div>
    );
  }

  const answeredCount = currentSectionQuestions.filter(q => q.status === 'answered').length;
  const unansweredCount = currentSectionQuestions.filter(q => q.status === 'unanswered').length;
  const markedForReviewCount = currentSectionQuestions.filter(q => q.status === 'review').length;
  const progress = ((answeredCount + markedForReviewCount) / currentSectionQuestions.length) * 100;
  const isLastQuestionInSection = currentQuestionIndex === currentSectionQuestions.length - 1;
  const isLastSection = !testConfig.sections || currentSectionIndex >= testConfig.sections.length - 1;


  const getStatusColor = (status: TestQuestion['status']) => {
    switch (status) {
      case 'answered': return 'bg-green-500 hover:bg-green-600';
      case 'unanswered': return 'bg-muted-foreground/50 hover:bg-muted-foreground/70';
      case 'review': return 'bg-purple-500 hover:bg-purple-600';
      default: return 'bg-muted-foreground/50 hover:bg-muted-foreground/70';
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-background flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div>
            <h1 className="text-2xl font-headline font-bold text-primary">{testConfig.name}</h1>
            {activeSection && <p className="text-muted-foreground">Section {currentSectionIndex + 1} of {testConfig.sections?.length}: {activeSection.name}</p>}
        </div>
        <div className="flex items-center gap-4">
           <Badge variant="outline" className="text-lg font-semibold tabular-nums p-2">
                <Timer className="mr-2 h-5 w-5" />
                {formatTime(timeLeft)}
            </Badge>
           <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">{isLastSection ? 'Submit Final Test' : 'Submit Section'}</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Your answers for this section will be evaluated.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={submitSection}>Confirm & Submit</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 overflow-y-auto">
        {/* Question Area */}
        <div className="lg:col-span-3 flex flex-col">
          <Card className="flex-1 flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              {currentQuestion && (
                <>
                  <div className="flex justify-between items-start mb-4">
                      <p className="text-lg font-semibold flex-1">
                          Question {currentQuestionIndex + 1}: {currentQuestion.text}
                      </p>
                      <div className="flex items-center gap-2">
                            <Badge variant={currentQuestion.difficulty === 'Easy' ? 'secondary' : currentQuestion.difficulty === 'Hard' ? 'destructive' : 'default'} className="capitalize">{currentQuestion.difficulty}</Badge>
                            {currentQuestion.isPastPaper && (
                              <Badge variant="outline" className="border-amber-500 text-amber-500">
                                  <Flame className="mr-1.5 h-3.5 w-3.5" />
                                  Past Paper
                              </Badge>
                          )}
                      </div>
                  </div>

                  <RadioGroup
                    value={currentQuestion.userAnswer}
                    onValueChange={handleAnswerChange}
                    className="space-y-3 my-4"
                  >
                    {currentQuestion.options?.map((option, i) => (
                      <Label key={i} htmlFor={`${currentQuestion.id}-option-${i}`} className={cn("flex items-center p-4 border rounded-md cursor-pointer hover:bg-secondary has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-colors", {'border-primary': currentQuestion.userAnswer === option})}>
                        <RadioGroupItem value={option} id={`${currentQuestion.id}-option-${i}`} className="mr-3" />
                        <span>{option}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                </>
              )}
            </CardContent>
            <div className="p-4 border-t flex justify-between items-center bg-secondary/30">
               <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                    <ChevronsLeft className="mr-2 h-4 w-4" />
                    Previous
                </Button>
                 <Button variant="outline" onClick={handleMarkForReview}>
                    <Flag className="mr-2 h-4 w-4" />
                    {currentQuestion?.status === 'review' ? 'Unmark' : 'Mark for Review'}
                </Button>
                {isLastQuestionInSection ? (
                     <Button onClick={submitSection} variant="accent">
                        {isLastSection ? 'Submit Final Test' : 'Submit Section & Proceed'}
                        <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button onClick={handleNext}>
                        Next
                        <ChevronsRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
          </Card>
        </div>

        {/* Question Palette */}
        <div className="lg:col-span-1">
             <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-headline">Question Palette</CardTitle>
                    {activeSection && <CardDescription>Section: {activeSection.name}</CardDescription>}
                </CardHeader>
                <CardContent className="grid grid-cols-5 gap-2">
                {currentSectionQuestions.map((q, index) => (
                    <Button
                    key={`${currentSectionIndex}-${q.id}-${index}`}
                    variant="default"
                    size="icon"
                    className={cn(
                        'h-10 w-10 text-white',
                        getStatusColor(q.status),
                        index === currentQuestionIndex && 'ring-2 ring-primary ring-offset-2'
                    )}
                    onClick={() => handlePaletteClick(index)}
                    >
                    {index + 1}
                    </Button>
                ))}
                </CardContent>
                <div className="p-4 space-y-3">
                    <div className='p-4'>
                        <Progress value={progress} className="w-full" />
                        <p className='text-sm text-muted-foreground mt-2 text-center'>{answeredCount + markedForReviewCount} of {currentSectionQuestions.length} questions visited</p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2"><div className="h-4 w-4 rounded-full bg-green-500"></div>{answeredCount} Answered</div>
                        <div className="flex items-center gap-2"><div className="h-4 w-4 rounded-full bg-muted-foreground/50"></div>{unansweredCount} Not Answered</div>
                        <div className="flex items-center gap-2"><div className="h-4 w-4 rounded-full bg-purple-500"></div>{markedForReviewCount} Marked for Review</div>
                    </div>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
}
