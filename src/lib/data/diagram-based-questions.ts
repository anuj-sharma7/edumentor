
import type { Question } from '.';
import { lawsOfMotionQuestions } from './laws-of-motion';
import { workPowerEnergyQuestions } from './work-power-energy';
import { electrostaticsQuestions } from './electrostatics';
import { rotationalMotionQuestions } from './rotational-motion';

const allQuestions = [
    ...lawsOfMotionQuestions.questions,
    ...workPowerEnergyQuestions.questions,
    ...electrostaticsQuestions.questions,
    ...rotationalMotionQuestions.questions,
];

// Curated list of questions that refer to diagrams
export const diagramBasedQuestions: Question[] = [
    {
        ...(allQuestions.find(q => q.id === 102146)!),
        imageUrl: 'https://picsum.photos/seed/102146/400/200',
        diagramAiHint: 'physics blocks string'
    },
    {
        ...(allQuestions.find(q => q.id === 102251)!),
        imageUrl: 'https://picsum.photos/seed/102251/400/250',
        diagramAiHint: 'suspended spring mass system'
    },
    {
        ...(allQuestions.find(q => q.id === 103082)!),
        imageUrl: 'https://picsum.photos/seed/103082/400/300',
        diagramAiHint: 'force displacement graph'
    },
    {
        ...(allQuestions.find(q => q.id === 103085)!),
        imageUrl: 'https://picsum.photos/seed/103085/400/250',
        diagramAiHint: 'force distance graph'
    },
    {
        ...(allQuestions.find(q => q.id === 104147)!),
        imageUrl: 'https://picsum.photos/seed/104147/400/200',
        diagramAiHint: 'rod masses rotation'
    },
    {
        ...(allQuestions.find(q => q.id === 110122)!),
        imageUrl: 'https://picsum.photos/seed/110122/300/300',
        diagramAiHint: 'charged ring diagram'
    },
     {
        ...(allQuestions.find(q => q.id === 110245)!),
        imageUrl: 'https://picsum.photos/seed/110245/300/300',
        diagramAiHint: 'charges equilateral triangle'
    },
     {
        ...(allQuestions.find(q => q.id === 102289)!),
        imageUrl: 'https://picsum.photos/seed/102289/300/300',
        diagramAiHint: 'inclined plane friction'
    },
];
