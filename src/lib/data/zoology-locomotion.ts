import type { Chapter } from '../data';

export const locomotionQuestions: Chapter = {
    id: 455,
    name: 'Locomotion and Movement',
    questions: [
        { id: 455001, text: 'Which protein forms the thick filaments in a muscle fiber?', options: ['Actin', 'Myosin', 'Troponin', 'Tropomyosin'], answer: 'Myosin', difficulty: 'Easy', pageReference: 1, concepts: ['muscle structure', 'myofilaments'], isPastPaper: false },
        { id: 455002, text: 'The functional unit of muscle contraction is the:', options: ['Sarcomere', 'Myofibril', 'Muscle fiber', 'Fascicle'], answer: 'Sarcomere', difficulty: 'Easy', pageReference: 2, concepts: ['muscle contraction', 'sarcomere'], isPastPaper: false },
        { id: 455003, text: 'The human skeleton is composed of how many bones?', options: ['206', '300', '150', '250'], answer: '206', difficulty: 'Easy', pageReference: 3, concepts: ['skeletal system'], isPastPaper: false },
        { id: 455004, text: 'The joint between the atlas and axis vertebrae is a:', options: ['Hinge joint', 'Ball and socket joint', 'Pivot joint', 'Saddle joint'], answer: 'Pivot joint', difficulty: 'Medium', pageReference: 4, concepts: ['joints'], isPastPaper: true },
        { id: 455005, text: 'Myasthenia gravis is an autoimmune disorder affecting:', options: ['Bones', 'Cartilage', 'Neuromuscular junction', 'Synovial fluid'], answer: 'Neuromuscular junction', difficulty: 'Medium', pageReference: 5, concepts: ['disorders of muscular system'], isPastPaper: true },
    ]
};
