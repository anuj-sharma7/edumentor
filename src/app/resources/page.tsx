
'use client';

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
import Image from 'next/image';
import { conceptMaps } from '@/lib/data';
import { GitMerge } from 'lucide-react';
import { useState } from 'react';
import { theory } from '@/lib/data/theory';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export default function ResourcesPage() {
    const [activeTab, setActiveTab] = useState('mind-maps');

    return (
        <div className="p-6 md:p-10">
        <div className="space-y-8">
            <header className="space-y-2">
            <h1 className="text-4xl font-headline font-bold">Resources</h1>
            <p className="text-muted-foreground">
                Find concept maps and detailed theory to aid your study.
            </p>
            </header>

            <div className="flex gap-4 border-b">
                <Button variant={activeTab === 'mind-maps' ? 'ghost' : 'ghost'} onClick={() => setActiveTab('mind-maps')} className={`py-4 h-auto border-b-2 ${activeTab === 'mind-maps' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground'}`}>
                    <GitMerge className="mr-2 h-5 w-5" /> Mind Maps
                </Button>
                <Button variant={activeTab === 'theory' ? 'ghost' : 'ghost'} onClick={() => setActiveTab('theory')} className={`py-4 h-auto border-b-2 ${activeTab === 'theory' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground'}`}>
                    <BookOpen className="mr-2 h-5 w-5" /> Theory
                </Button>
            </div>

            {activeTab === 'mind-maps' && (
            <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3">
                    <GitMerge className="w-6 h-6 text-primary" />
                    <span className="font-headline text-2xl">Concept Maps</span>
                </CardTitle>
                <CardDescription>
                Visualize connections between different concepts.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Accordion type="multiple" className="w-full">
                {conceptMaps.map((subjectData) => (
                    <AccordionItem value={subjectData.subject} key={subjectData.subject}>
                    <AccordionTrigger className="font-headline text-xl">
                        {subjectData.subject}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                            {subjectData.maps.map((map) => (
                                <div key={map.name} className="space-y-2 group">
                                    <h4 className="font-semibold">{map.name}</h4>
                                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                                        <Image
                                        src={map.imageUrl}
                                        alt={map.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={map['data-ai-hint']}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </CardContent>
            </Card>
            )}

            {activeTab === 'theory' && (
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span className="font-headline text-2xl">Theory & Derivations</span>
                    </CardTitle>
                    <CardDescription>
                    Explore detailed concepts, formulas, and derivations for each chapter.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Accordion type="multiple" className="w-full space-y-4">
                    {theory.map((subjectData) => (
                        subjectData.chapters.map((chapter) => (
                            <AccordionItem value={chapter.name} key={chapter.name} className="border rounded-lg shadow-sm">
                                <AccordionTrigger className="font-headline text-xl px-6">
                                {chapter.name}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 space-y-6">
                                {chapter.concepts.map((concept) => (
                                    <div key={concept.title} className="py-4 border-t">
                                        <h4 className="font-semibold text-lg text-primary mb-2">{concept.title}</h4>
                                        <p className="text-base text-muted-foreground mb-4">{concept.explanation}</p>
                                        
                                        {concept.formula && (
                                            <div className='my-4'>
                                                <h5 className='font-semibold text-sm mb-2'>Formula(s):</h5>
                                                <code className="block whitespace-pre-wrap my-2 p-4 rounded bg-muted font-code text-base text-foreground">
                                                    {concept.formula}
                                                </code>
                                            </div>
                                        )}

                                        {concept.derivation && (
                                            <div className='my-4'>
                                                <h5 className='font-semibold text-sm mb-2'>Derivation / Key Points:</h5>
                                                <p className="text-sm text-muted-foreground prose dark:prose-invert">
                                                    {concept.derivation}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    ))}
                    </Accordion>
                </CardContent>
            </Card>
            )}
        </div>
        </div>
    );
}
