import type { Chapter } from '../data';

export const threeDGeometryQuestions: Chapter = {
    id: 309,
    name: 'Three Dimensional Geometry',
    questions: [
        { id: 309001, text: 'The distance of the point (3, 4, 5) from the x-axis is:', options: ['√41', '√34', '5', '3'], answer: '√41', difficulty: 'Easy', pageReference: 1, concepts: ['distance from axis'], isPastPaper: false },
        { id: 309002, text: 'The direction cosines of the y-axis are:', options: ['(1, 0, 0)', '(0, 1, 0)', '(0, 0, 1)', '(1, 1, 1)'], answer: '(0, 1, 0)', difficulty: 'Easy', pageReference: 2, concepts: ['direction cosines'], isPastPaper: false },
        { id: 309003, text: 'The equation of the x-y plane is:', options: ['x=0', 'y=0', 'z=0', 'x+y=0'], answer: 'z=0', difficulty: 'Easy', pageReference: 3, concepts: ['planes'], isPastPaper: false },
        { id: 309004, text: 'The angle between the lines 2x = 3y = -z and 6x = -y = -4z is:', options: ['0°', '30°', '45°', '90°'], answer: '90°', difficulty: 'Medium', pageReference: 4, concepts: ['angle between lines'], isPastPaper: true },
        { id: 309005, text: 'The distance of the plane 2x - 3y + 6z + 14 = 0 from the origin is:', options: ['2', '7', '14', '1'], answer: '2', difficulty: 'Medium', pageReference: 5, concepts: ['distance of point from plane'], isPastPaper: false },
    ]
};
