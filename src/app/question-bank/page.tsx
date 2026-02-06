'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Calculator, FlaskConical, Leaf } from "lucide-react";
import { subjects } from "@/lib/data";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { LeafIcon } from "@/components/icons";

const subjectIcons: { [key: string]: React.ElementType } = {
  Physics: Atom,
  Chemistry: FlaskConical,
  Mathematics: Calculator,
  Biology: LeafIcon,
};

export default function QuestionBankPage() {
  const router = useRouter();

  return (
    <div className="p-6 md:p-10 animate-fade-in-up">
      <div className="space-y-8 max-w-7xl mx-auto">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter">Question Bank</h1>
          <p className="text-muted-foreground md:text-xl">
            Select a subject to dive into our vast library of questions, filter by chapter, and start practicing.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map(subject => {
            const Icon = subjectIcons[subject.name];
            return (
              <Card
                key={subject.id}
                className={cn(
                  "p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 ease-in-out cursor-pointer group",
                  "bg-secondary/30",
                  "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
                )}
                onClick={() => router.push(`/question-bank/${subject.name.toLowerCase()}`)}
              >
                <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">{subject.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{subject.chapters.length} Chapters</CardDescription>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
