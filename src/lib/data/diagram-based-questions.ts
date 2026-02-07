
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
        imageUrl: 'https://placehold.co/400x200/png?text=Two+blocks+on+a+table\nconnected+by+a+string',
        diagramAiHint: 'physics blocks string'
    },
    {
        ...(allQuestions.find(q => q.id === 102251)!),
        imageUrl: 'https://placehold.co/400x250/png?text=Suspended+spring-mass+system',
        diagramAiHint: 'suspended spring mass system'
    },
    {
        ...(allQuestions.find(q => q.id === 103082)!),
        imageUrl: 'https://placehold.co/400x300/png?text=Force-Displacement+Graph\n(Trapezoid)',
        diagramAiHint: 'force displacement graph'
    },
    {
        ...(allQuestions.find(q => q.id === 103085)!),
        imageUrl: 'https://placehold.co/400x250/png?text=Force-Distance+Graph\n(Curve)',
        diagramAiHint: 'force distance graph'
    },
    {
        ...(allQuestions.find(q => q.id === 104147)!),
        imageUrl: 'https://placehold.co/400x200/png?text=Rotating+Rod\nwith+Masses+m+and+2m',
        diagramAiHint: 'rod masses rotation'
    },
    {
        ...(allQuestions.find(q => q.id === 110122)!),
        imageUrl: 'https://placehold.co/300x300/png?text=Charged+Ring\nwith+points+A,K,B,C,D',
        diagramAiHint: 'charged ring diagram'
    },
     {
        ...(allQuestions.find(q => q.id === 110245)!),
        imageUrl: 'https://placehold.co/300x300/png?text=Charges+on+a+Circle\n(Equilateral+Triangle)',
        diagramAiHint: 'charges equilateral triangle'
    },
     {
        ...(allQuestions.find(q => q.id === 102289)!),
        imageUrl: 'https://placehold.co/300x300/png?text=Block+on\nInclined+Plane',
        diagramAiHint: 'inclined plane friction'
    },
];
