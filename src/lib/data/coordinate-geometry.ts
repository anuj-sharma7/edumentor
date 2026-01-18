import type { Chapter } from '../data';

export const coordinateGeometryQuestions: Chapter = {
    id: 305,
    name: 'Coordinate Geometry',
    questions: [
        // Easy
        {
            id: 305001,
            text: 'The distance between the points (3, 4) and (6, 8) is:',
            options: ['3', '4', '5', '6'],
            answer: '5',
            difficulty: 'Easy',
            pageReference: 1,
            concepts: ['distance formula'],
            isPastPaper: false
        },
        {
            id: 305002,
            text: 'The slope of the line passing through the points (2, 3) and (4, 7) is:',
            options: ['1', '2', '3', '4'],
            answer: '2',
            difficulty: 'Easy',
            pageReference: 2,
            concepts: ['slope of a line'],
            isPastPaper: false
        },
        {
            id: 305003,
            text: 'The equation of a line with slope 2 and y-intercept 3 is:',
            options: ['y = 3x + 2', 'y = 2x + 3', 'x = 2y + 3', 'x = 3y + 2'],
            answer: 'y = 2x + 3',
            difficulty: 'Easy',
            pageReference: 3,
            concepts: ['equation of a line'],
            isPastPaper: false
        },
        {
            id: 305004,
            text: 'The center of the circle with equation (x-2)² + (y+3)² = 16 is:',
            options: ['(2, 3)', '(-2, 3)', '(2, -3)', '(-2, -3)'],
            answer: '(2, -3)',
            difficulty: 'Easy',
            pageReference: 5,
            concepts: ['circle equation'],
            isPastPaper: false
        },
        {
            id: 305005,
            text: 'The radius of the circle with equation x² + y² = 25 is:',
            options: ['25', '12.5', '5', '10'],
            answer: '5',
            difficulty: 'Easy',
            pageReference: 5,
            concepts: ['circle equation'],
            isPastPaper: false
        },

        // Medium
        {
            id: 305006,
            text: 'The equation of the line perpendicular to the line 3x + 4y = 7 and passing through the point (1, 2) is:',
            options: ['4x - 3y + 2 = 0', '4x + 3y - 10 = 0', '3x - 4y + 5 = 0', '3x + 4y - 11 = 0'],
            answer: '4x - 3y + 2 = 0',
            difficulty: 'Medium',
            pageReference: 4,
            concepts: ['perpendicular lines'],
            isPastPaper: true
        },
        {
            id: 305007,
            text: 'The focus of the parabola y² = 16x is:',
            options: ['(4, 0)', '(0, 4)', '(-4, 0)', '(0, -4)'],
            answer: '(4, 0)',
            difficulty: 'Medium',
            pageReference: 7,
            concepts: ['parabola'],
            isPastPaper: false
        },
        {
            id: 305008,
            text: 'The eccentricity of the ellipse x²/16 + y²/9 = 1 is:',
            options: ['√7/4', '√7/3', '4/3', '3/4'],
            answer: '√7/4',
            difficulty: 'Medium',
            pageReference: 9,
            concepts: ['ellipse', 'eccentricity'],
            isPastPaper: true
        },
        {
            id: 305009,
            text: 'The equation of the directrix for the parabola x² = -8y is:',
            options: ['y = 2', 'y = -2', 'x = 2', 'x = -2'],
            answer: 'y = 2',
            difficulty: 'Medium',
            pageReference: 7,
            concepts: ['parabola', 'directrix'],
            isPastPaper: false
        },
        {
            id: 305010,
            text: 'The length of the latus rectum of the ellipse 4x² + 9y² = 36 is:',
            options: ['4/3', '8/3', '2/3', '9/4'],
            answer: '4/3',
            difficulty: 'Medium',
            pageReference: 10,
            concepts: ['ellipse', 'latus rectum'],
            isPastPaper: false
        },

        // Hard
        {
            id: 305011,
            text: 'The equation of the circle passing through the points (0,0), (a,0) and (0,b) is:',
            options: ['x² + y² - ax - by = 0', 'x² + y² + ax + by = 0', 'x² + y² - ax + by = 0', 'x² + y² + ax - by = 0'],
            answer: 'x² + y² - ax - by = 0',
            difficulty: 'Hard',
            pageReference: 6,
            concepts: ['circle equation'],
            isPastPaper: true
        },
        {
            id: 305012,
            text: 'The eccentricity of the hyperbola which passes through (3, 0) and (3√5, 2) is:',
            options: ['√13/3', '√13/2', '5/3', '2'],
            answer: '√13/3',
            difficulty: 'Hard',
            pageReference: 12,
            concepts: ['hyperbola', 'eccentricity'],
            isPastPaper: true
        },
        {
            id: 305013,
            text: 'The tangent to the parabola y² = 4x at the point (1, 2) is:',
            options: ['x - y + 1 = 0', 'x + y - 3 = 0', 'y = x + 1', 'y = 2x'],
            answer: 'x - y + 1 = 0',
            difficulty: 'Hard',
            pageReference: 8,
            concepts: ['parabola', 'tangent'],
            isPastPaper: false
        },
        {
            id: 305014,
            text: 'The area of the triangle formed by the lines y = x, x = 6 and y = 0 is:',
            options: ['36', '18', '9', '12'],
            answer: '18',
            difficulty: 'Medium',
            pageReference: 4,
            concepts: ['area of triangle'],
            isPastPaper: false
        },
        {
            id: 305015,
            text: 'If the lines 2x + y - 3 = 0, 5x + ky - 3 = 0 and 3x - y - 2 = 0 are concurrent, then the value of k is:',
            options: ['-2', '5', '3', '-1/2'],
            answer: '-2',
            difficulty: 'Hard',
            pageReference: 4,
            concepts: ['concurrent lines'],
            isPastPaper: true
        }
    ]
};
