import type { Chapter } from '../data';

export const humanPhysiologyDigestionQuestions: Chapter = {
    id: 451,
    name: 'Human Physiology - Digestion',
    questions: [
        {
            id: 451001,
            text: 'The digestion of which of the following starts in the mouth?',
            options: ['Fats', 'Proteins', 'Carbohydrates', 'Nucleic acids'],
            answer: 'Carbohydrates',
            difficulty: 'Easy',
            pageReference: 1,
            concepts: ['digestion in mouth', 'salivary amylase'],
            isPastPaper: false,
        },
        {
            id: 451002,
            text: 'Pepsin is an enzyme that digests:',
            options: ['Carbohydrates in the mouth', 'Proteins in the stomach', 'Fats in the small intestine', 'Nucleic acids in the stomach'],
            answer: 'Proteins in the stomach',
            difficulty: 'Easy',
            pageReference: 4,
            concepts: ['digestion in stomach', 'pepsin'],
            isPastPaper: false,
        },
        {
            id: 451003,
            text: 'The small intestine has three parts. The correct order from beginning to end is:',
            options: ['Jejunum, Ileum, Duodenum', 'Duodenum, Jejunum, Ileum', 'Ileum, Duodenum, Jejunum', 'Duodenum, Ileum, Jejunum'],
            answer: 'Duodenum, Jejunum, Ileum',
            difficulty: 'Easy',
            pageReference: 6,
            concepts: ['small intestine'],
            isPastPaper: false,
        },
        {
            id: 451004,
            text: 'Bile juice is produced by the:',
            options: ['Pancreas', 'Stomach', 'Gall bladder', 'Liver'],
            answer: 'Liver',
            difficulty: 'Easy',
            pageReference: 5,
            concepts: ['liver', 'bile'],
            isPastPaper: false,
        },
        {
            id: 451005,
            text: 'Which enzyme is responsible for the digestion of milk protein in infants?',
            options: ['Pepsin', 'Trypsin', 'Rennin', 'Amylase'],
            answer: 'Rennin',
            difficulty: 'Medium',
            pageReference: 5,
            concepts: ['infant digestion', 'rennin'],
            isPastPaper: true,
        },
    ]
};