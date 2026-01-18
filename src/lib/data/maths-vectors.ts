import type { Chapter } from '../data';

export const vectorQuestions: Chapter = {
    id: 308,
    name: 'Vectors',
    questions: [
        { id: 308001, text: 'If a = 2i + 3j and b = i - j, then |a + b| is:', options: ['√13', '√10', '√14', '√5'], answer: '√13', difficulty: 'Easy', pageReference: 1, concepts: ['vector addition', 'magnitude'], isPastPaper: false },
        { id: 308002, text: 'The dot product of two perpendicular vectors is:', options: ['1', '0', '-1', 'Cannot be determined'], answer: '0', difficulty: 'Easy', pageReference: 2, concepts: ['dot product'], isPastPaper: false },
        { id: 308003, text: 'The cross product of two parallel vectors is:', options: ['1', '0', '-1', 'A unit vector'], answer: '0', difficulty: 'Easy', pageReference: 3, concepts: ['cross product'], isPastPaper: false },
        { id: 308004, text: 'If a and b are two vectors, then the projection of a on b is:', options: ['(a · b) / |b|', '(a · b) / |a|', '(a x b) / |b|', '(a x b) / |a|'], answer: '(a · b) / |b|', difficulty: 'Medium', pageReference: 2, concepts: ['vector projection'], isPastPaper: false },
        { id: 308005, text: 'The area of a parallelogram with adjacent sides a = i + 2j + 3k and b = 3i - 2j + k is:', options: ['8√3', '6√2', '4√3', '10√2'], answer: '8√3', difficulty: 'Medium', pageReference: 3, concepts: ['cross product', 'area of parallelogram'], isPastPaper: true },
    ]
};
