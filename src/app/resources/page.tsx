"use client";

export const dynamic = "force-dynamic";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  GitMerge,
  BookOpen,
  Lightbulb,
  Sigma,
  PenSquare,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// ✅ SAFE IMPORTS (normalize immediately)
import * as ConceptData from "@/lib/data";
import * as TheoryData from "@/lib/data/theory";

// ✅ FORCE ARRAYS (THIS IS THE KEY FIX)
const conceptMaps = Array.isArray((ConceptData as any).conceptMaps)
  ? (ConceptData as any).conceptMaps
  : [];

const theory = Array.isArray((TheoryData as any).theory)
  ? (TheoryData as any).theory
  : [];

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

          {/* ---------- MIND MAPS ---------- */}
          <TabsContent value="mind-maps" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GitMerge className="w-6 h-6 text-primary" />
                  Concept Maps
                </CardTitle>
                <CardDescription>
                  Visualize concept relationships.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion type="multiple" className="space-y-4">
                  {conceptMaps.map((subject: any) => (
                    <AccordionItem
                      key={subject.subject}
                      value={subject.subject}
                      className="border rounded-lg"
                    >
                      <AccordionTrigger className="px-6 text-xl font-headline">
                        {subject.subject}
                      </AccordionTrigger>

                      <AccordionContent className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {(Array.isArray(subject.maps)
                            ? subject.maps
                            : []
                          ).map((map: any) => (
                            <Card key={map.name}>
                              <CardContent className="p-0">
                                <div className="relative aspect-video">
                                  <Image
                                    src={map.imageUrl}
                                    alt={map.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </CardContent>
                              <CardFooter className="p-4">
                                <p className="text-center w-full font-semibold">
                                  {map.name}
                                </p>
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

          {/* ---------- THEORY ---------- */}
          <TabsContent value="theory" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Theory & Formulas
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Accordion type="multiple" className="space-y-4">
                  {theory.map((subject: any) => (
                    <AccordionItem
                      key={subject.subject}
                      value={subject.subject}
                      className="border rounded-lg"
                    >
                      <AccordionTrigger className="px-6 text-xl font-headline">
                        {subject.subject}
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pt-4 space-y-6">
                        {(Array.isArray(subject.chapters)
                          ? subject.chapters
                          : []
                        ).map((chapter: any, idx: number) => (
                          <div key={chapter.name}>
                            <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                              {chapter.name}
                            </h3>

                            {(Array.isArray(chapter.concepts)
                              ? chapter.concepts
                              : []
                            ).map((concept: any) => (
                              <Card key={concept.title} className="mb-4">
                                <CardHeader>
                                  <CardTitle className="text-primary">
                                    {concept.title}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                  <p>{concept.explanation}</p>

                                  {concept.formula && (
                                    <code className="block p-3 bg-background border rounded">
                                      {concept.formula}
                                    </code>
                                  )}

                                  {concept.derivation && (
                                    <p className="text-sm text-muted-foreground">
                                      {concept.derivation}
                                    </p>
                                  )}
                                </CardContent>
                              </Card>
                            ))}

                            {idx !== subject.chapters.length - 1 && (
                              <Separator className="my-8" />
                            )}
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
"use client";

export const dynamic = "force-dynamic";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  GitMerge,
  BookOpen,
  Lightbulb,
  Sigma,
  PenSquare,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// ✅ SAFE IMPORTS (normalize immediately)
import * as ConceptData from "@/lib/data";
import * as TheoryData from "@/lib/data/theory";

// ✅ FORCE ARRAYS (THIS IS THE KEY FIX)
const conceptMaps = Array.isArray((ConceptData as any).conceptMaps)
  ? (ConceptData as any).conceptMaps
  : [];

const theory = Array.isArray((TheoryData as any).theory)
  ? (TheoryData as any).theory
  : [];

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

          {/* ---------- MIND MAPS ---------- */}
          <TabsContent value="mind-maps" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GitMerge className="w-6 h-6 text-primary" />
                  Concept Maps
                </CardTitle>
                <CardDescription>
                  Visualize concept relationships.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion type="multiple" className="space-y-4">
                  {conceptMaps.map((subject: any) => (
                    <AccordionItem
                      key={subject.subject}
                      value={subject.subject}
                      className="border rounded-lg"
                    >
                      <AccordionTrigger className="px-6 text-xl font-headline">
                        {subject.subject}
                      </AccordionTrigger>

                      <AccordionContent className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {(Array.isArray(subject.maps)
                            ? subject.maps
                            : []
                          ).map((map: any) => (
                            <Card key={map.name}>
                              <CardContent className="p-0">
                                <div className="relative aspect-video">
                                  <Image
                                    src={map.imageUrl}
                                    alt={map.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </CardContent>
                              <CardFooter className="p-4">
                                <p className="text-center w-full font-semibold">
                                  {map.name}
                                </p>
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

          {/* ---------- THEORY ---------- */}
          <TabsContent value="theory" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Theory & Formulas
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Accordion type="multiple" className="space-y-4">
                  {theory.map((subject: any) => (
                    <AccordionItem
                      key={subject.subject}
                      value={subject.subject}
                      className="border rounded-lg"
                    >
                      <AccordionTrigger className="px-6 text-xl font-headline">
                        {subject.subject}
                      </AccordionTrigger>

                      <AccordionContent className="px-6 pt-4 space-y-6">
                        {(Array.isArray(subject.chapters)
                          ? subject.chapters
                          : []
                        ).map((chapter: any, idx: number) => (
                          <div key={chapter.name}>
                            <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                              {chapter.name}
                            </h3>

                            {(Array.isArray(chapter.concepts)
                              ? chapter.concepts
                              : []
                            ).map((concept: any) => (
                              <Card key={concept.title} className="mb-4">
                                <CardHeader>
                                  <CardTitle className="text-primary">
                                    {concept.title}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                  <p>{concept.explanation}</p>

                                  {concept.formula && (
                                    <code className="block p-3 bg-background border rounded">
                                      {concept.formula}
                                    </code>
                                  )}

                                  {concept.derivation && (
                                    <p className="text-sm text-muted-foreground">
                                      {concept.derivation}
                                    </p>
                                  )}
                                </CardContent>
                              </Card>
                            ))}

                            {idx !== subject.chapters.length - 1 && (
                              <Separator className="my-8" />
                            )}
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
