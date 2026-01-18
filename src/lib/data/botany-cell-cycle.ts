import type { Chapter } from '../data';

export const cellCycleQuestions: Chapter = {
    id: 405,
    name: 'Cell Cycle and Cell Division',
    questions: [
        { id: 405001, text: 'The sequence of events by which a cell duplicates its genome, synthesizes the other constituents of the cell and eventually divides into two daughter cells is termed:', options: ['Cell cycle', 'Meiosis', 'Apoptosis', 'Differentiation'], answer: 'Cell cycle', difficulty: 'Easy', pageReference: 1, concepts: ['cell cycle'], isPastPaper: false },
        { id: 405002, text: 'DNA replication occurs in which phase of the cell cycle?', options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'], answer: 'S phase', difficulty: 'Easy', pageReference: 2, concepts: ['interphase', 's phase'], isPastPaper: true },
        { id: 405003, text: 'The division of the nucleus is called:', options: ['Cytokinesis', 'Karyokinesis', 'Meiosis', 'Interphase'], answer: 'Karyokinesis', difficulty: 'Easy', pageReference: 3, concepts: ['mitosis'], isPastPaper: false },
        { id: 405004, text: 'Crossing over occurs during which stage of meiosis I?', options: ['Leptotene', 'Zygotene', 'Pachytene', 'Diplotene'], answer: 'Pachytene', difficulty: 'Medium', pageReference: 4, concepts: ['meiosis', 'prophase I', 'crossing over'], isPastPaper: true },
        { id: 405005, text: 'Mitosis results in:', options: ['Two diploid daughter cells', 'Four haploid daughter cells', 'Two haploid daughter cells', 'Four diploid daughter cells'], answer: 'Two diploid daughter cells', difficulty: 'Easy', pageReference: 3, concepts: ['mitosis'], isPastPaper: false },
    ]
};
