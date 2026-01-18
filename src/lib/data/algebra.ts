
import type { Chapter } from '../data';

export const algebraQuestions: Chapter = {
    id: 304,
    name: 'Algebra',
    questions: [
        // Easy
        { id: 304001, text: 'The value of i² (where i = √-1) is:', options: ['1', '-1', 'i', '-i'], answer: '-1', difficulty: 'Easy', pageReference: 1, concepts: ['complex numbers'], isPastPaper: false },
        { id: 304002, text: 'If a quadratic equation ax² + bx + c = 0 has equal roots, then its discriminant is:', options: ['Greater than 0', 'Less than 0', 'Equal to 0', 'Equal to 1'], answer: 'Equal to 0', difficulty: 'Easy', pageReference: 5, concepts: ['quadratic equations', 'discriminant'], isPastPaper: false },
        { id: 304003, text: 'The 10th term of the arithmetic progression 2, 7, 12, ... is:', options: ['47', '52', '42', '57'], answer: '47', difficulty: 'Easy', pageReference: 10, concepts: ['arithmetic progression'], isPastPaper: false },
        { id: 304004, text: 'The value of 5! (5 factorial) is:', options: ['25', '120', '100', '5'], answer: '120', difficulty: 'Easy', pageReference: 15, concepts: ['permutations and combinations', 'factorial'], isPastPaper: false },
        { id: 304005, text: 'The conjugate of the complex number 3 + 4i is:', options: ['3 - 4i', '-3 + 4i', '-3 - 4i', '4 + 3i'], answer: '3 - 4i', difficulty: 'Easy', pageReference: 2, concepts: ['complex numbers', 'conjugate'], isPastPaper: false },
        { id: 304006, text: 'In a geometric progression, the common ratio is found by:', options: ['Subtracting a term from the next term', 'Dividing a term by the preceding term', 'Adding all the terms', 'Multiplying all the terms'], answer: 'Dividing a term by the preceding term', difficulty: 'Easy', pageReference: 12, concepts: ['geometric progression'], isPastPaper: false },
        { id: 304007, text: 'The value of ⁶C₂ is:', options: ['15', '30', '12', '20'], answer: '15', difficulty: 'Easy', pageReference: 16, concepts: ['combinations'], isPastPaper: false },
        { id: 304008, text: 'If z = a + ib, then |z| is equal to:', options: ['a² + b²', 'a² - b²', '√(a² + b²)', '√(a² - b²)'], answer: '√(a² + b²)', difficulty: 'Easy', pageReference: 3, concepts: ['complex numbers', 'modulus'], isPastPaper: false },
        { id: 304009, text: 'The sum of the roots of the quadratic equation 2x² - 8x + 5 = 0 is:', options: ['-4', '4', '2.5', '-2.5'], answer: '4', difficulty: 'Easy', pageReference: 6, concepts: ['quadratic equations', 'sum of roots'], isPastPaper: false },
        { id: 304010, text: 'The sum of the first n natural numbers is:', options: ['n(n+1)/2', 'n²', 'n(n-1)/2', 'n(n+1)'], answer: 'n(n+1)/2', difficulty: 'Easy', pageReference: 11, concepts: ['arithmetic progression', 'summation'], isPastPaper: false },

        // Medium
        { id: 304011, text: 'The multiplicative inverse of 2 - 3i is:', options: ['(2+3i)/13', '(2-3i)/13', '2+3i', '1/ (2-3i)'], answer: '(2+3i)/13', difficulty: 'Medium', pageReference: 2, concepts: ['complex numbers', 'multiplicative inverse'], isPastPaper: true },
        { id: 304012, text: 'If α and β are the roots of the equation x² - 5x + 6 = 0, then the value of α² + β² is:', options: ['13', '25', '37', '19'], answer: '13', difficulty: 'Medium', pageReference: 7, concepts: ['quadratic equations', 'roots of equation'], isPastPaper: true },
        { id: 304013, text: 'The sum of an infinite geometric series with first term a and common ratio r (|r|<1) is:', options: ['a/(1-r)', 'a/(1+r)', 'ar', 'a(1-r)'], answer: 'a/(1-r)', difficulty: 'Medium', pageReference: 13, concepts: ['geometric progression', 'infinite series'], isPastPaper: false },
        { id: 304014, text: 'In how many ways can the letters of the word "LEADER" be arranged?', options: ['72', '144', '360', '720'], answer: '360', difficulty: 'Medium', pageReference: 16, concepts: ['permutations'], isPastPaper: true },
        { id: 304015, text: 'The value of (1 + i)⁴ is:', options: ['-4', '4', '4i', '-4i'], answer: '-4', difficulty: 'Medium', pageReference: 3, concepts: ['complex numbers', 'de moivre theorem'], isPastPaper: false },
        { id: 304016, text: 'The harmonic mean between two numbers a and b is:', options: ['(a+b)/2', '√(ab)', '2ab/(a+b)', 'ab/(a+b)'], answer: '2ab/(a+b)', difficulty: 'Medium', pageReference: 14, concepts: ['harmonic progression'], isPastPaper: false },
        { id: 304017, text: 'The number of diagonals in a polygon with n sides is:', options: ['n(n-1)/2', 'n(n-3)/2', 'n(n-2)', 'n(n-3)'], answer: 'n(n-3)/2', difficulty: 'Medium', pageReference: 17, concepts: ['combinations', 'polygons'], isPastPaper: false },
        { id: 304018, text: 'If the sum of n terms of an A.P. is 2n² + 5n, then its nth term is:', options: ['4n - 3', '3n - 4', '4n + 3', '3n + 4'], answer: '4n + 3', difficulty: 'Medium', pageReference: 11, concepts: ['arithmetic progression', 'summation'], isPastPaper: true },
        { id: 304019, text: 'The square root of -7 - 24i is:', options: ['±(3 - 4i)', '±(4 - 3i)', '±(3 + 4i)', '±(4 + 3i)'], answer: '±(3 - 4i)', difficulty: 'Medium', pageReference: 3, concepts: ['complex numbers', 'square root'], isPastPaper: true },
        { id: 304020, text: 'If the third term of a G.P. is 4, then the product of its first 5 terms is:', options: ['4³', '4⁵', '4⁴', 'Cannot be determined'], answer: '4⁵', difficulty: 'Medium', pageReference: 12, concepts: ['geometric progression'], isPastPaper: true },

        // Hard
        { id: 304021, text: 'If |z + 4| ≤ 3, the maximum value of |z + 1| is:', options: ['4', '10', '6', '0'], answer: '6', difficulty: 'Hard', pageReference: 4, concepts: ['complex numbers', 'modulus properties'], isPastPaper: true },
        { id: 304022, text: 'If one root of the equation x² + px + 12 = 0 is 4, while the equation x² + px + q = 0 has equal roots, then the value of q is:', options: ['49/4', '4/49', '4', '49'], answer: '49/4', difficulty: 'Hard', pageReference: 8, concepts: ['quadratic equations', 'roots of equation'], isPastPaper: true },
        { id: 304023, text: 'The sum of the series 1 + 2/3 + 3/9 + 4/27 + ... up to infinity is:', options: ['3/2', '5/4', '9/4', '7/2'], answer: '9/4', difficulty: 'Hard', pageReference: 13, concepts: ['arithmetico-geometric series'], isPastPaper: true },
        { id: 304024, text: 'The number of ways in which 6 men and 5 women can dine at a round table if no two women are to sit together is given by:', options: ['6! x 5!', '30', '5! x 4!', '7! x 5!'], answer: '6! x 5!', difficulty: 'Hard', pageReference: 17, concepts: ['circular permutations'], isPastPaper: true },
        { id: 304025, text: 'If z is a complex number such that |z| ≥ 2, then the minimum value of |z + 1/2| is:', options: ['Equal to 5/2', 'Lies in the interval (1, 2)', 'Strictly greater than 5/2', 'Strictly greater than 3/2 but less than 5/2'], answer: 'Lies in the interval (1, 2)', difficulty: 'Hard', pageReference: 4, concepts: ['complex numbers', 'triangle inequality'], isPastPaper: true },
        { id: 304026, text: 'Let two numbers have arithmetic mean 9 and geometric mean 4. Then these numbers are the roots of the quadratic equation:', options: ['x² - 18x + 16 = 0', 'x² - 18x - 16 = 0', 'x² + 18x + 16 = 0', 'x² + 18x - 16 = 0'], answer: 'x² - 18x + 16 = 0', difficulty: 'Hard', pageReference: 14, concepts: ['am-gm', 'quadratic equations'], isPastPaper: true },
        { id: 304027, text: 'How many different words can be formed by jumbling the letters in the word MISSISSIPPI in which no two S are adjacent?', options: ['8 x ⁶C₄ x ⁷C₄', '6 x 7 x ⁸C₄', '6 x 8 x ⁷C₄', '7 x ⁶C₄ x ⁸C₄'], answer: '7 x ⁶C₄ x ⁸C₄', difficulty: 'Hard', pageReference: 16, concepts: ['permutations and combinations'], isPastPaper: true },
        { id: 304028, text: 'If ω is a complex cube root of unity, then (1 - ω + ω²)⁶ + (1 + ω - ω²)⁶ is equal to:', options: ['0', '64', '128', '32'], answer: '128', difficulty: 'Hard', pageReference: 4, concepts: ['complex numbers', 'cube roots of unity'], isPastPaper: false },
        { id: 304029, text: 'The sum of all two-digit numbers which when divided by 4, yield unity as a remainder is:', options: ['1210', '1200', '1120', '1012'], answer: '1210', difficulty: 'Hard', pageReference: 11, concepts: ['arithmetic progression'], isPastPaper: false },
        { id: 304030, text: 'The coefficient of x⁵ in the expansion of (1 + x + x² + x³)⁵ is:', options: ['50', '60', '71', '101'], answer: '101', difficulty: 'Hard', pageReference: 17, concepts: ['binomial theorem', 'multinomial theorem'], isPastPaper: false }
    ]
};
