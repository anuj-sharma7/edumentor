'use server';

/**
 * @fileOverview Generates a Daily Practice Problem (DPP) sheet or a full mock test based on user selections.
 * 
 * - generateDpp - A function that generates a DPP or mock test.
 * - DppInput - The input type for the generateDpp function.
 * - DppOutput - The return type for the generateDpp function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { subjects, Question, Chapter } from '@/lib/data';


const DppInputSchema = z.object({
  dppType: z.enum(['subjectwise', 'custom', 'full-syllabus']),
  chapters: z.array(z.object({
    id: z.number(),
    questionCount: z.number(),
  })).optional(),
  dppName: z.string().optional(),
  examType: z.enum(['jee', 'neet']).optional(),
  difficulty: z.enum(['Easy', 'Medium', 'Hard', 'Mixed']).optional(),
});
export type DppInput = z.infer<typeof DppInputSchema>;


const QuestionOutputSchema = z.object({
    id: z.number(),
    text: z.string(),
    options: z.array(z.string()).optional(),
    answer: z.string(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    pageReference: z.number(),
    concepts: z.array(z.string()),
    isPastPaper: z.boolean(),
    explanation: z.string().optional(),
    questionType: z.enum(['mcq', 'numerical']).optional(),
});


const DppOutputSchema = z.object({
  name: z.string(),
  questions: z.array(QuestionOutputSchema),
  sections: z.array(z.object({
    name: z.string(),
    duration: z.number(),
    questions: z.array(QuestionOutputSchema),
  })).optional(),
});

export type DppOutput = z.infer<typeof DppOutputSchema>;

async function getQuestionsFromBank({ chapters, difficulty, count, subjectsToInclude }: {
    chapters?: { id: number; questionCount: number }[];
    difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Mixed';
    count?: number;
    subjectsToInclude?: string[];
}): Promise<Question[]> {
    let allQuestions: Question[] = [];
    
    const relevantSubjects = subjectsToInclude 
        ? subjects.filter(s => subjectsToInclude.includes(s.name))
        : subjects;

    const chapterMap = new Map<number, Chapter>();
    relevantSubjects.forEach(subject => {
        subject.chapters.forEach(chapter => {
            chapterMap.set(chapter.id, chapter);
        });
    });

    if (chapters) {
        for (const chapterInfo of chapters) {
            const chapter = chapterMap.get(chapterInfo.id);
            if (chapter) {
                let potentialQuestions = chapter.questions;
                if (difficulty && difficulty !== 'Mixed') {
                    potentialQuestions = potentialQuestions.filter(q => q.difficulty === difficulty);
                }
                const shuffled = [...potentialQuestions].sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, chapterInfo.questionCount);
                allQuestions.push(...selected);
            }
        }
    } else if (count) {
        let potentialQuestions: Question[] = [];
         relevantSubjects.forEach(subject => {
            subject.chapters.forEach(chapter => {
                if (difficulty && difficulty !== 'Mixed') {
                    potentialQuestions.push(...chapter.questions.filter(q => q.difficulty === difficulty));
                } else {
                    potentialQuestions.push(...chapter.questions);
                }
            });
        });
        const shuffled = [...potentialQuestions].sort(() => 0.5 - Math.random());
        allQuestions = shuffled.slice(0, count);
    }
    
    return allQuestions;
}

const mapQuestionToOutput = (q: Question): z.infer<typeof QuestionOutputSchema> => ({
    id: q.id,
    text: q.text,
    options: q.options,
    answer: q.answer,
    difficulty: q.difficulty,
    pageReference: q.pageReference,
    concepts: q.concepts,
    isPastPaper: q.isPastPaper,
    explanation: q.explanation,
    questionType: q.questionType,
});


export async function generateDpp(input: DppInput): Promise<DppOutput> {
  return generateDppFlow(input);
}


const generateDppFlow = ai.defineFlow(
  {
    name: 'generateDppFlow',
    inputSchema: DppInputSchema,
    outputSchema: DppOutputSchema,
  },
  async (input) => {
    
    if (input.dppType === 'full-syllabus') {
      let allQuestions: Question[] = [];
      const sections = [];

      if (input.examType === 'jee') {
        const jeeSections = [
            { name: 'Physics', count: 25, subjectsToInclude: ['Physics'] },
            { name: 'Chemistry', count: 25, subjectsToInclude: ['Chemistry'] },
            { name: 'Mathematics', count: 25, subjectsToInclude: ['Mathematics'] },
        ];

        for (const section of jeeSections) {
            const easyQs = await getQuestionsFromBank({ count: 10, difficulty: 'Easy', subjectsToInclude: section.subjectsToInclude });
            const mediumQs = await getQuestionsFromBank({ count: 10, difficulty: 'Medium', subjectsToInclude: section.subjectsToInclude });
            const hardQs = await getQuestionsFromBank({ count: 5, difficulty: 'Hard', subjectsToInclude: section.subjectsToInclude });
            
            const sectionQuestions = [...easyQs, ...mediumQs, ...hardQs].sort(() => 0.5 - Math.random()).slice(0, section.count);
            allQuestions.push(...sectionQuestions);
            
            sections.push({
                name: section.name,
                duration: 60 * 60, // 60 minutes
                questions: sectionQuestions.map(mapQuestionToOutput)
            });
        }
         return {
            name: input.dppName || 'JEE Full Syllabus Mock Test',
            questions: allQuestions.sort(() => 0.5 - Math.random()).map(mapQuestionToOutput),
            sections: sections,
        };

      } else if (input.examType === 'neet') {
         const biologySubject = subjects.find(s => s.name === 'Biology');
         const botanyChapters = biologySubject?.units.find(u => u.name === 'Botany')?.chapters || [];
         const zoologyChapters = biologySubject?.units.find(u => u.name === 'Zoology')?.chapters || [];
         const physicsChapters = subjects.find(s => s.name === 'Physics')?.chapters || [];
         const chemistryChapters = subjects.find(s => s.name === 'Chemistry')?.chapters || [];

         const neetConfig = [
            { name: 'Physics', count: 50, source: physicsChapters },
            { name: 'Chemistry', count: 50, source: chemistryChapters },
            { name: 'Botany', count: 50, source: botanyChapters },
            { name: 'Zoology', count: 50, source: zoologyChapters },
         ];
         
         for (const section of neetConfig) {
            let potentialQuestions: Question[] = section.source.flatMap(c => c.questions);
            const easyQs = potentialQuestions.filter(q => q.difficulty === 'Easy').sort(() => 0.5 - Math.random()).slice(0, 20);
            const mediumQs = potentialQuestions.filter(q => q.difficulty === 'Medium').sort(() => 0.5 - Math.random()).slice(0, 20);
            const hardQs = potentialQuestions.filter(q => q.difficulty === 'Hard').sort(() => 0.5 - Math.random()).slice(0, 10);
            
            const sectionQuestions = [...easyQs, ...mediumQs, ...hardQs].sort(() => 0.5 - Math.random()).slice(0, section.count);
            allQuestions.push(...sectionQuestions);
            
            sections.push({
                name: section.name,
                duration: 45 * 60, // 45 minutes per section
                questions: sectionQuestions.map(mapQuestionToOutput)
            });
        }
         return {
            name: input.dppName || 'NEET Full Syllabus Mock Test',
            questions: allQuestions.map(mapQuestionToOutput),
            sections: sections,
        };
      }
    }

    // Handle Subjectwise and Custom DPPs by creating sections
    const chapterDetails = input.chapters || [];
    
    const subjectToChaptersMap: { [subjectName: string]: { id: number; questionCount: number }[] } = {};

    subjects.forEach(subject => {
        subject.chapters.forEach(chapter => {
            const detail = chapterDetails.find(d => d.id === chapter.id);
            if (detail) {
                if (!subjectToChaptersMap[subject.name]) {
                    subjectToChaptersMap[subject.name] = [];
                }
                subjectToChaptersMap[subject.name].push(detail);
            }
        });
    });

    let allQuestionsFromBank: Question[] = [];
    const sections = [];

    for (const subjectName in subjectToChaptersMap) {
        const subjectChapters = subjectToChaptersMap[subjectName];
        const sectionQuestionsFromBank = await getQuestionsFromBank({
            chapters: subjectChapters,
            difficulty: input.difficulty,
        });

        allQuestionsFromBank.push(...sectionQuestionsFromBank);
        
        sections.push({
            name: subjectName,
            duration: 60 * 60, // Default 60 mins per section
            questions: sectionQuestionsFromBank.map(mapQuestionToOutput),
        });
    }

    return {
        name: input.dppName || 'Custom Mock Test',
        questions: allQuestionsFromBank.map(mapQuestionToOutput),
        sections: sections,
    };
  }
);