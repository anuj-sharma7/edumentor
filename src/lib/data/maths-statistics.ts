import type { Chapter } from '../data';

export const statisticsQuestions: Chapter = {
    id: 307,
    name: 'Statistics',
    questions: [
        { id: 307001, text: 'The mean of the numbers 3, 4, 7, 8, 8 is:', options: ['6', '6.5', '7', '8'], answer: '6', difficulty: 'Easy', pageReference: 1, concepts: ['mean'], isPastPaper: false },
        { id: 307002, text: 'The mode of the data: 2, 3, 3, 4, 5, 5, 5, 6 is:', options: ['2', '3', '5', '6'], answer: '5', difficulty: 'Easy', pageReference: 1, concepts: ['mode'], isPastPaper: false },
        { id: 307003, text: 'The median of the data: 12, 15, 18, 20, 25 is:', options: ['18', '17', '19', '20'], answer: '18', difficulty: 'Easy', pageReference: 1, concepts: ['median'], isPastPaper: false },
        { id: 307004, text: 'The variance is the square of the:', options: ['Mean', 'Median', 'Standard deviation', 'Range'], answer: 'Standard deviation', difficulty: 'Easy', pageReference: 2, concepts: ['variance', 'standard deviation'], isPastPaper: false },
        { id: 307005, text: 'If the standard deviation of a data set is 5, what is its variance?', options: ['10', '25', '√5', '50'], answer: '25', difficulty: 'Easy', pageReference: 2, concepts: ['variance', 'standard deviation'], isPastPaper: false },
    ]
};
