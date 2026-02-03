
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { conceptMaps } from '@/lib/data';
import { GitMerge, BookOpen, Lightbulb, Sigma, PenSquare } from 'lucide-react';
import { theory } from '@/lib/data/theory';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';

export default function ResourcesPage() {

    return (
        <div className="p-6 md:p-10 animate-fade-in-up">
            <div className="space-y-8">
                <header className="space-y-2">
                    <h1 className="text-4xl font-headline font-bold">Resources</h1>
                    <p className="text-muted-foreground">
                        Visualize concepts with Mind Maps or dive deep into Formulas & Theory.
                    </p>
                </header>

                <Tabs defaultValue="mind-maps" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="mind-maps">
                            <GitMerge className="mr-2 h-5 w-5" /> Mind Maps
                        </TabsTrigger>
                        <TabsTrigger value="theory">
                            <BookOpen className="mr-2 h-5 w-5" /> Theory & Formulas
                        </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="mind-maps" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <GitMerge className="w-6 h-6 text-primary" />
                                    <span className="font-headline text-2xl">Concept Maps</span>
                                </CardTitle>
                                <CardDescription>
                                    Visualize connections between different concepts for each subject.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="multiple" className="w-full space-y-4">
                                    {conceptMaps.map((subjectData) => (
                                        <AccordionItem value={subjectData.subject} key={subjectData.subject} className="border rounded-lg shadow-sm">
                                            <AccordionTrigger className="font-headline text-xl px-6">
                                                {subjectData.subject}
                                            </AccordionTrigger>
                                            <AccordionContent className="p-4 md:p-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {subjectData.maps.map((map) => (
                                                        <Card key={map.name} className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                                            <CardContent className="p-0">
                                                                <div className="relative aspect-video w-full overflow-hidden">
                                                                    <Image
                                                                        src={map.imageUrl}
                                                                        alt={map.name}
                                                                        fill
                                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                        data-ai-hint={map['data-ai-hint']}
                                                                    />
                                                                </div>
                                                            </CardContent>
                                                            <CardFooter className="p-4 bg-secondary/30">
                                                                <h4 className="font-semibold text-center w-full">{map.name}</h4>
                                                            </CardFooter>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="theory" className="mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                    <span className="font-headline text-2xl">Theory, Formulas & Derivations</span>
                                </CardTitle>
                                <CardDescription>
                                    Explore detailed concepts, formulas, and derivations for each chapter.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="multiple" className="w-full space-y-4">
                                    {theory.map((subjectData) => (
                                        <AccordionItem value={subjectData.subject} key={subjectData.subject} className="border rounded-lg shadow-sm">
                                            <AccordionTrigger className="font-headline text-xl px-6">
                                                {subjectData.subject}
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 space-y-6 pt-4">
                                                {subjectData.chapters.map((chapter, chapterIndex) => (
                                                    <div key={chapter.name}>
                                                        <h3 className="text-2xl font-bold font-headline mb-4 pb-2 border-b border-primary/20">{chapter.name}</h3>
                                                        <div className="space-y-6">
                                                            {chapter.concepts.map((concept) => (
                                                                <Card key={concept.title} className="bg-secondary/50">
                                                                    <CardHeader>
                                                                        <CardTitle className="font-headline text-xl text-primary">{concept.title}</CardTitle>
                                                                    </CardHeader>
                                                                    <CardContent className="space-y-4">
                                                                        <div>
                                                                            <h4 className="font-semibold flex items-center gap-2 mb-2"><Lightbulb className="h-4 w-4 text-yellow-400"/>Explanation</h4>
                                                                            <p className="text-base text-muted-foreground">{concept.explanation}</p>
                                                                        </div>
                                                                        
                                                                        {concept.formula && (
                                                                            <div>
                                                                                <h4 className='font-semibold flex items-center gap-2 mb-2'><Sigma className="h-4 w-4 text-blue-400"/>Formula(s)</h4>
                                                                                <code className="block whitespace-pre-wrap my-2 p-4 rounded bg-background/70 font-code text-base text-foreground border border-border">
                                                                                    {concept.formula}
                                                                                </code>
                                                                            </div>
                                                                        )}

                                                                        {concept.derivation && (
                                                                            <div>
                                                                                <h4 className='font-semibold flex items-center gap-2 mb-2'><PenSquare className="h-4 w-4 text-green-400"/>Derivation / Key Points</h4>
                                                                                <p className="text-sm text-muted-foreground prose dark:prose-invert">
                                                                                    {concept.derivation}
                                                                                </p>
                                                                            </div>
                                                                        )}
                                                                    </CardContent>
                                                                </Card>
                                                            ))}
                                                        </div>
                                                         {subjectData.chapters.indexOf(chapter) !== subjectData.chapters.length - 1 && <Separator className="my-8" />}
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
