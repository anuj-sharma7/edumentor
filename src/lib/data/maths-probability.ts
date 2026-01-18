import type { Chapter } from '../data';

export const probabilityQuestions: Chapter = {
    id: 306,
    name: 'Probability',
    questions: [
        { id: 306001, text: 'Two unbiased coins are tossed. What is the probability of getting at most one head?', options: ['3/4', '1/2', '1/4', '1'], answer: '3/4', difficulty: 'Easy', pageReference: 1, concepts: ['probability basics'], isPastPaper: false },
        { id: 306002, text: 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?', options: ['10/21', '11/21', '2/7', '5/7'], answer: '10/21', difficulty: 'Medium', pageReference: 2, concepts: ['probability', 'combinations'], isPastPaper: true },
        { id: 306003, text: 'The probability of event A is 0.6, event B is 0.3 and P(A ∩ B) = 0.2. The probability of P(A U B) is:', options: ['0.7', '0.1', '0.9', '1.1'], answer: '0.7', difficulty: 'Easy', pageReference: 3, concepts: ['addition theorem of probability'], isPastPaper: false },
        { id: 306004, text: 'What is the probability of getting a sum 9 from two throws of a dice?', options: ['1/6', '1/8', '1/9', '1/12'], answer: '1/9', difficulty: 'Easy', pageReference: 1, concepts: ['probability basics'], isPastPaper: false },
        { id: 306005, text: 'Three unbiased coins are tossed. What is the probability of getting at least 2 heads?', options: ['1/4', '1/2', '3/8', '1/8'], answer: '1/2', difficulty: 'Medium', pageReference: 1, concepts: ['probability basics'], isPastPaper: false },
    ]
};
