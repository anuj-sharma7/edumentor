import type { StudyChapter } from '../types';

export const inverseTrigonometricFunctions: StudyChapter = {
  name: 'Inverse Trigonometric Functions',
  subject: 'Mathematics',
  classLevel: 12,
  summary:
    'Principal value branches of sin⁻¹, cos⁻¹, tan⁻¹ and the others, their identities, sum formulas and simplification by substitution. A short chapter that gives almost one guaranteed question in JEE Main and is a tool used throughout calculus.',
  mostRepeated: [
    'Principal ranges: ==sin⁻¹ ∈ [−π/2, π/2], cos⁻¹ ∈ [0, π], tan⁻¹ ∈ (−π/2, π/2)==.',
    '==sin⁻¹x + cos⁻¹x = π/2== and tan⁻¹x + cot⁻¹x = π/2.',
    'tan⁻¹x + tan⁻¹y = tan⁻¹((x + y)/(1 − xy)) when ==xy < 1==; add π when x, y > 0 and xy > 1.',
    '==sin⁻¹(sin x) = x only for x ∈ [−π/2, π/2]==; outside, shift into the principal range.',
    'cos⁻¹(−x) = π − cos⁻¹x, but sin⁻¹(−x) = −sin⁻¹x.',
    'Telescoping: ==tan⁻¹(1/(1 + n + n²)) = tan⁻¹(n + 1) − tan⁻¹n==.',
    '2tan⁻¹x = sin⁻¹(2x/(1 + x²)) = cos⁻¹((1 − x²)/(1 + x²)) = tan⁻¹(2x/(1 − x²)) in the right ranges.',
  ],
  topics: [
    {
      name: 'Domain, Range and Principal Values',
      theory:
        'Trigonometric functions are not one-one, so to invert them we restrict each to a ==principal branch== on which it is bijective. The resulting domains and ranges must be memorised: sin⁻¹ : [−1, 1] → [−π/2, π/2]; cos⁻¹ : [−1, 1] → [0, π]; tan⁻¹ : R → (−π/2, π/2); cot⁻¹ : R → (0, π); sec⁻¹ : R − (−1, 1) → [0, π] − {π/2}; cosec⁻¹ : R − (−1, 1) → [−π/2, π/2] − {0}.\n\nThe ==principal value== is the unique angle in that range. For example sin⁻¹(−1/2) = −π/6 (not 7π/6), and cos⁻¹(−1/2) = 2π/3 (not −π/3).\n\nFor domain problems, the argument of sin⁻¹ or cos⁻¹ must satisfy ==−1 ≤ argument ≤ 1==, while for sec⁻¹ and cosec⁻¹ it must satisfy |argument| ≥ 1. Combine this with other conditions (logarithm argument positive, denominator non-zero) and take the intersection.',
      keyPoints: [
        '==sin⁻¹ and tan⁻¹ ranges include negative angles; cos⁻¹ and cot⁻¹ ranges are within [0, π]==.',
        'sin⁻¹x + sin⁻¹y + sin⁻¹z = 3π/2 forces x = y = z = 1 (each at its maximum).',
        'Domain of sin⁻¹(f(x)): solve −1 ≤ f(x) ≤ 1.',
      ],
      formulas: [
        'sin⁻¹ : [−1, 1] → [−π/2, π/2]',
        'cos⁻¹ : [−1, 1] → [0, π]',
        'tan⁻¹ : R → (−π/2, π/2)',
        'cot⁻¹ : R → (0, π)',
        'sec⁻¹ : |x| ≥ 1 → [0, π] − {π/2}',
        'cosec⁻¹ : |x| ≥ 1 → [−π/2, π/2] − {0}',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - domain questions',
        question: 'The domain of f(x) = sin⁻¹((x − 3)/2) − log₁₀(4 − x) is:',
        approach: [
          'sin⁻¹ needs −1 ≤ (x − 3)/2 ≤ 1 ⇒ 1 ≤ x ≤ 5.',
          'log needs 4 − x > 0 ⇒ x < 4.',
          'Intersect the two conditions.',
        ],
        answer: '[1, 4)',
      },
      questions: [
        {
          question: 'The principal value of sin⁻¹(−1/2) is:',
          options: ['−π/6', '7π/6', '5π/6', 'π/6'],
          answer: '−π/6',
          difficulty: 'Easy',
          hint: 'The answer must lie in [−π/2, π/2].',
          solution: 'sin(−π/6) = −1/2 and −π/6 ∈ [−π/2, π/2], so sin⁻¹(−1/2) = −π/6.',
          similar: {
            question: 'The principal value of cos⁻¹(−1/2) is:',
            options: ['2π/3', '−π/3', '4π/3', 'π/3'],
            answer: '2π/3',
            solution: 'The answer must lie in [0, π]; cos(2π/3) = −1/2, so cos⁻¹(−1/2) = 2π/3.',
          },
        },
        {
          question: 'The value of tan⁻¹(√3) − sec⁻¹(−2) is:',
          options: ['−π/3', 'π', 'π/3', '2π/3'],
          answer: '−π/3',
          difficulty: 'Medium',
          hint: 'sec⁻¹(−2) = cos⁻¹(−1/2).',
          solution: 'tan⁻¹√3 = π/3. sec⁻¹(−2) = cos⁻¹(−1/2) = 2π/3. Difference = π/3 − 2π/3 = −π/3.',
          similar: {
            question: 'The value of cos⁻¹(1/2) + 2 sin⁻¹(1/2) is:',
            options: ['2π/3', 'π/2', 'π', 'π/3'],
            answer: '2π/3',
            solution: 'cos⁻¹(1/2) = π/3 and sin⁻¹(1/2) = π/6, so π/3 + 2(π/6) = 2π/3.',
          },
        },
        {
          question: 'The domain of f(x) = sin⁻¹(log₂(x/2)) is:',
          options: ['[1, 4]', '[−1, 1]', '[1/2, 2]', '[2, 4]'],
          answer: '[1, 4]',
          difficulty: 'Hard',
          hint: 'Set −1 ≤ log₂(x/2) ≤ 1 and remove the logarithm.',
          solution: '−1 ≤ log₂(x/2) ≤ 1 ⇒ 1/2 ≤ x/2 ≤ 2 ⇒ 1 ≤ x ≤ 4. (x > 0 is automatically satisfied.)',
          similar: {
            question: 'The domain of f(x) = cos⁻¹(x² − 4) is:',
            options: ['[−√5, −√3] ∪ [√3, √5]', '[√3, √5]', '[−√5, √5]', '[3, 5]'],
            answer: '[−√5, −√3] ∪ [√3, √5]',
            solution: '−1 ≤ x² − 4 ≤ 1 ⇒ 3 ≤ x² ≤ 5 ⇒ √3 ≤ |x| ≤ √5.',
          },
        },
      ],
    },
    {
      name: 'Graphs, Negative Arguments and Reciprocal Relations',
      theory:
        'The graph of each inverse function is the reflection of the principal branch of the trigonometric function in the line y = x. ==sin⁻¹x and tan⁻¹x are increasing and odd==; cos⁻¹x and cot⁻¹x are decreasing. tan⁻¹x has horizontal asymptotes y = ±π/2, and cot⁻¹x has asymptotes y = 0 and y = π.\n\nNegative arguments: ==sin⁻¹(−x) = −sin⁻¹x, tan⁻¹(−x) = −tan⁻¹x, cosec⁻¹(−x) = −cosec⁻¹x==, but ==cos⁻¹(−x) = π − cos⁻¹x, cot⁻¹(−x) = π − cot⁻¹x, sec⁻¹(−x) = π − sec⁻¹x==. The second group has range [0, π], so it cannot be odd.\n\nReciprocal relations: sin⁻¹(1/x) = cosec⁻¹x and cos⁻¹(1/x) = sec⁻¹x for |x| ≥ 1. For tan⁻¹ be careful: tan⁻¹(1/x) = cot⁻¹x for x > 0 but ==tan⁻¹(1/x) = cot⁻¹x − π for x < 0==.',
      keyPoints: [
        'Odd functions: sin⁻¹, tan⁻¹, cosec⁻¹.',
        '==cos⁻¹(−x) = π − cos⁻¹x== (and similarly for cot⁻¹, sec⁻¹).',
        'tan⁻¹(1/x) = cot⁻¹x only for x > 0.',
        'Use monotonicity to find range of sums like sin⁻¹x + tan⁻¹x.',
      ],
      formulas: [
        'sin⁻¹(−x) = −sin⁻¹x',
        'cos⁻¹(−x) = π − cos⁻¹x',
        'tan⁻¹(−x) = −tan⁻¹x',
        'cot⁻¹(−x) = π − cot⁻¹x',
        'tan⁻¹(1/x) = cot⁻¹x (x > 0), cot⁻¹x − π (x < 0)',
      ],
      diagram: 'inverse-trig-graphs',
      diagramCaption: 'Graphs of sin⁻¹x, cos⁻¹x and tan⁻¹x on their principal branches.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently in JEE Main - range questions',
        question: 'The range of f(x) = sin⁻¹x + tan⁻¹x + sec⁻¹x is:',
        approach: [
          'sin⁻¹x needs |x| ≤ 1 and sec⁻¹x needs |x| ≥ 1, so the domain is only {−1, 1}.',
          'f(1) = π/2 + π/4 + 0 = 3π/4.',
          'f(−1) = −π/2 − π/4 + π = π/4.',
        ],
        answer: '{π/4, 3π/4}',
      },
      questions: [
        {
          question: 'For |x| ≤ 1, cos⁻¹(−x) equals:',
          options: ['π − cos⁻¹x', '−cos⁻¹x', 'π + cos⁻¹x', 'π/2 − cos⁻¹x'],
          answer: 'π − cos⁻¹x',
          difficulty: 'Easy',
          hint: 'The answer must stay in [0, π].',
          solution: 'If cos⁻¹x = θ ∈ [0, π], then cos(π − θ) = −x and π − θ ∈ [0, π]. So cos⁻¹(−x) = π − cos⁻¹x.',
          similar: {
            question: 'For real x, tan⁻¹(−x) equals:',
            options: ['−tan⁻¹x', 'π − tan⁻¹x', 'π + tan⁻¹x', 'π/2 − tan⁻¹x'],
            answer: '−tan⁻¹x',
            solution: 'tan⁻¹ is an odd function with range (−π/2, π/2) symmetric about 0, so tan⁻¹(−x) = −tan⁻¹x.',
          },
        },
        {
          question: 'The range of f(x) = sin⁻¹x + cos⁻¹x + tan⁻¹x is:',
          options: ['[π/4, 3π/4]', '[0, π]', '[−π/4, π/4]', '[π/2, π]'],
          answer: '[π/4, 3π/4]',
          difficulty: 'Medium',
          hint: 'Combine the first two terms, and remember the domain is [−1, 1].',
          solution: 'f(x) = π/2 + tan⁻¹x on [−1, 1]. tan⁻¹x ranges over [−π/4, π/4], so f ranges over [π/4, 3π/4].',
          similar: {
            question: 'The range of g(x) = sin⁻¹x + tan⁻¹x is:',
            options: ['[−3π/4, 3π/4]', '[−π/2, π/2]', '[−π, π]', '[0, 3π/4]'],
            answer: '[−3π/4, 3π/4]',
            solution: 'Domain [−1, 1]; both terms are increasing, so g is increasing: g(−1) = −π/2 − π/4 = −3π/4 and g(1) = 3π/4.',
          },
        },
        {
          question: 'For x < 0, tan⁻¹(1/x) equals:',
          options: ['cot⁻¹x', 'cot⁻¹x − π', 'π − cot⁻¹x', 'π + cot⁻¹x'],
          answer: 'cot⁻¹x − π',
          difficulty: 'Hard',
          hint: 'Test with x = −1: tan⁻¹(−1) and cot⁻¹(−1).',
          solution:
            'For x < 0, cot⁻¹x ∈ (π/2, π) but tan⁻¹(1/x) ∈ (−π/2, 0). They differ by π: tan⁻¹(1/x) = cot⁻¹x − π. Check x = −1: −π/4 = 3π/4 − π.',
          similar: {
            question: 'The value of tan⁻¹(1/x) at x = −1/√3 is:',
            options: ['−π/3', '2π/3', 'π/3', '−2π/3'],
            answer: '−π/3',
            solution: 'tan⁻¹(−√3) = −π/3. Equivalently cot⁻¹(−1/√3) − π = 2π/3 − π = −π/3.',
          },
        },
      ],
    },
    {
      name: 'Complementary Identities',
      theory:
        'The three complementary identities are ==sin⁻¹x + cos⁻¹x = π/2== (|x| ≤ 1), ==tan⁻¹x + cot⁻¹x = π/2== (x ∈ R) and ==sec⁻¹x + cosec⁻¹x = π/2== (|x| ≥ 1). They come from sin(π/2 − θ) = cos θ together with the principal ranges.\n\nThey are used to convert mixed equations into a single function. For example, sin⁻¹x − cos⁻¹x = π/6 becomes 2 sin⁻¹x − π/2 = π/6, so sin⁻¹x = π/3.\n\nFor extremum questions put a = sin⁻¹x, so cos⁻¹x = π/2 − a with ==a ∈ [−π/2, π/2]==. Then expressions like (sin⁻¹x)² + (cos⁻¹x)² become quadratics in a, whose minimum and maximum are found at the vertex and endpoints.',
      keyPoints: [
        '==Domain matters==: sin⁻¹x + cos⁻¹x = π/2 only for |x| ≤ 1.',
        'Range of (sin⁻¹x)² + (cos⁻¹x)² is [π²/8, 5π²/4].',
        'Range of (sin⁻¹x)³ + (cos⁻¹x)³ is [π³/32, 7π³/8].',
      ],
      formulas: ['sin⁻¹x + cos⁻¹x = π/2', 'tan⁻¹x + cot⁻¹x = π/2', 'sec⁻¹x + cosec⁻¹x = π/2'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - extremum of sums of powers',
        question: 'The minimum and maximum values of (sin⁻¹x)² + (cos⁻¹x)² are:',
        approach: [
          'Let a = sin⁻¹x ∈ [−π/2, π/2]; expression = a² + (π/2 − a)² = 2a² − πa + π²/4.',
          'Vertex at a = π/4 gives minimum 2(π²/16) − π²/4 + π²/4 = π²/8.',
          'Check endpoints: a = −π/2 gives π²/4 + π² = 5π²/4; a = π/2 gives π²/4.',
        ],
        answer: 'Minimum π²/8, maximum 5π²/4',
      },
      questions: [
        {
          question: 'The value of sin⁻¹(1/3) + cos⁻¹(1/3) is:',
          options: ['π/2', 'π', '0', 'π/4'],
          answer: 'π/2',
          difficulty: 'Easy',
          hint: 'Use the complementary identity.',
          solution: 'sin⁻¹x + cos⁻¹x = π/2 for every x ∈ [−1, 1].',
          similar: {
            question: 'The value of tan⁻¹5 + cot⁻¹5 is:',
            options: ['π/2', 'π', '0', 'π/4'],
            answer: 'π/2',
            solution: 'tan⁻¹x + cot⁻¹x = π/2 for every real x.',
          },
        },
        {
          question: 'If sin⁻¹x − cos⁻¹x = π/6, then x is:',
          options: ['√3/2', '1/2', '1/√2', '−1/2'],
          answer: '√3/2',
          difficulty: 'Medium',
          hint: 'Replace cos⁻¹x by π/2 − sin⁻¹x.',
          solution: 'sin⁻¹x − (π/2 − sin⁻¹x) = π/6 ⇒ 2 sin⁻¹x = 2π/3 ⇒ sin⁻¹x = π/3 ⇒ x = √3/2.',
          similar: {
            question: 'If tan⁻¹x − cot⁻¹x = π/6, then x is:',
            options: ['√3', '1/√3', '1', '−√3'],
            answer: '√3',
            solution: 'tan⁻¹x − (π/2 − tan⁻¹x) = π/6 ⇒ tan⁻¹x = π/3 ⇒ x = √3.',
          },
        },
        {
          question: 'The minimum value of (sin⁻¹x)³ + (cos⁻¹x)³ is:',
          options: ['π³/32', 'π³/8', '7π³/8', 'π³/16'],
          answer: 'π³/32',
          difficulty: 'Hard',
          hint: 'With a + b = π/2, use a³ + b³ = (a + b)³ − 3ab(a + b).',
          solution:
            'Let a = sin⁻¹x, b = cos⁻¹x, a + b = π/2. a³ + b³ = π³/8 − (3π/2)ab. This is least when ab is greatest, i.e. a = b = π/4, ab = π²/16. Minimum = π³/8 − 3π³/32 = π³/32.',
          similar: {
            question: 'The maximum value of (sin⁻¹x)³ + (cos⁻¹x)³ is:',
            options: ['7π³/8', 'π³/8', 'π³/32', '9π³/8'],
            answer: '7π³/8',
            solution:
              'a³ + b³ = π³/8 − (3π/2)ab is largest when ab is smallest. With a ∈ [−π/2, π/2], ab = a(π/2 − a) is least at a = −π/2: ab = −π²/2. Maximum = π³/8 + 3π³/4 = 7π³/8.',
          },
        },
      ],
    },
    {
      name: 'Compositions: sin⁻¹(sin x) and sin(cos⁻¹x)',
      theory:
        'Two directions behave very differently. ==sin(sin⁻¹x) = x for every x ∈ [−1, 1]==, but ==sin⁻¹(sin x) = x only when x ∈ [−π/2, π/2]==. Outside that interval, find the angle in the principal range with the same sine: for x ∈ [π/2, 3π/2], sin⁻¹(sin x) = π − x; for x ∈ [3π/2, 5π/2], it is x − 2π, and so on.\n\nSimilarly cos⁻¹(cos x) = x on [0, π] and 2π − x on [π, 2π]; tan⁻¹(tan x) = x − nπ where n is chosen to land in (−π/2, π/2). For numeric radians (like sin⁻¹(sin 5)), locate the angle between multiples of π/2 first.\n\nFor expressions like sin(cos⁻¹x) or cos(tan⁻¹x), draw a ==right triangle==: if θ = cos⁻¹x then cos θ = x, sin θ = √(1 − x²). Thus sin(cos⁻¹x) = √(1 − x²), cos(tan⁻¹x) = 1/√(1 + x²), tan(sin⁻¹x) = x/√(1 − x²).',
      keyPoints: [
        '==sin(sin⁻¹x) = x always (on the domain); sin⁻¹(sin x) = x only on the principal range==.',
        'sin⁻¹(sin x) graph is a triangular (sawtooth) wave of period 2π.',
        'Locate radians: π/2 ≈ 1.57, π ≈ 3.14, 3π/2 ≈ 4.71, 2π ≈ 6.28, 5π/2 ≈ 7.85, 3π ≈ 9.42.',
        'Right-triangle method converts nested trig-inverse-trig expressions into algebra.',
      ],
      formulas: [
        'sin⁻¹(sin x) = π − x, x ∈ [π/2, 3π/2]',
        'cos⁻¹(cos x) = 2π − x, x ∈ [π, 2π]',
        'sin(cos⁻¹x) = √(1 − x²)',
        'cos(tan⁻¹x) = 1/√(1 + x²)',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - nested expressions',
        question: 'cos(tan⁻¹(sin(cot⁻¹x))) equals:',
        approach: [
          'Let cot⁻¹x = θ, so sin θ = 1/√(1 + x²).',
          'Let tan⁻¹(1/√(1 + x²)) = φ, so tan φ = 1/√(1 + x²).',
          'Then cos φ = √(1 + x²)/√(1 + x² + 1).',
        ],
        answer: '√((x² + 1)/(x² + 2))',
      },
      questions: [
        {
          question: 'The value of sin⁻¹(sin(2π/3)) is:',
          options: ['π/3', '2π/3', '−π/3', 'π/6'],
          answer: 'π/3',
          difficulty: 'Easy',
          hint: '2π/3 is outside [−π/2, π/2]; which angle in that range has the same sine?',
          solution: 'sin(2π/3) = sin(π − 2π/3) = sin(π/3), and π/3 is in the principal range. Answer π/3.',
          similar: {
            question: 'The value of cos⁻¹(cos(7π/6)) is:',
            options: ['5π/6', '7π/6', 'π/6', '−5π/6'],
            answer: '5π/6',
            solution: '7π/6 ∈ [π, 2π], so cos⁻¹(cos x) = 2π − x = 5π/6.',
          },
        },
        {
          question: 'The value of tan⁻¹(tan(3π/4)) is:',
          options: ['−π/4', '3π/4', 'π/4', '−3π/4'],
          answer: '−π/4',
          difficulty: 'Medium',
          hint: 'Subtract π to land in (−π/2, π/2).',
          solution: 'tan has period π: tan(3π/4) = tan(3π/4 − π) = tan(−π/4). −π/4 is in the principal range.',
          similar: {
            question: 'The value of sin⁻¹(sin 5) (5 in radians) is:',
            options: ['5 − 2π', '5', 'π − 5', '2π − 5'],
            answer: '5 − 2π',
            solution: '5 lies between 3π/2 ≈ 4.71 and 5π/2 ≈ 7.85, where sin⁻¹(sin x) = x − 2π. 5 − 2π ≈ −1.28 ∈ [−π/2, π/2].',
          },
        },
        {
          question: 'The value of cos⁻¹(cos 10) (10 in radians) is:',
          options: ['4π − 10', '10 − 3π', '10 − 4π', '3π − 10'],
          answer: '4π − 10',
          difficulty: 'Hard',
          hint: '10 lies between 3π ≈ 9.42 and 4π ≈ 12.57. Find an angle in [0, π] with the same cosine.',
          solution:
            'cos 10 = cos(4π − 10), and 4π − 10 ≈ 2.57 ∈ [0, π]. So cos⁻¹(cos 10) = 4π − 10. (10 − 3π ≈ 0.58 has cosine equal to −cos 10, so it is wrong.)',
          similar: {
            question: 'The value of sin⁻¹(sin 10) (10 in radians) is:',
            options: ['3π − 10', '10 − 3π', '10 − 4π', '4π − 10'],
            answer: '3π − 10',
            solution:
              '10 lies in [5π/2, 7π/2] ≈ [7.85, 11.0], where sin⁻¹(sin x) = 3π − x. 3π − 10 ≈ −0.58 ∈ [−π/2, π/2] and sin(3π − 10) = sin 10.',
          },
        },
      ],
    },
    {
      name: 'Sum and Difference Formulas',
      theory:
        'The key formula is ==tan⁻¹x + tan⁻¹y = tan⁻¹((x + y)/(1 − xy)) when xy < 1==. If x > 0, y > 0 and xy > 1, the true sum exceeds π/2, so ==add π==: tan⁻¹x + tan⁻¹y = π + tan⁻¹((x + y)/(1 − xy)). If x < 0, y < 0 and xy > 1, subtract π instead. If xy = 1 with x, y > 0, the sum is exactly π/2.\n\nFor differences: tan⁻¹x − tan⁻¹y = tan⁻¹((x − y)/(1 + xy)) when xy > −1. For sines and cosines, sin⁻¹x + sin⁻¹y = sin⁻¹(x√(1 − y²) + y√(1 − x²)) when x, y ≥ 0 and x² + y² ≤ 1; cos⁻¹x + cos⁻¹y = cos⁻¹(xy − √(1 − x²)√(1 − y²)) for x, y ∈ [−1, 1] with x + y ≥ 0.\n\nWhen solving equations like tan⁻¹2x + tan⁻¹3x = π/4, always ==check the roots== in the original equation; a negative root can make the left side negative and must be rejected.',
      keyPoints: [
        '==tan⁻¹1 + tan⁻¹2 + tan⁻¹3 = π== (a classic).',
        'tan⁻¹(1/2) + tan⁻¹(1/3) = π/4.',
        'Convert sin⁻¹ or cos⁻¹ to tan⁻¹ via a right triangle before adding, when convenient.',
        'Reject extraneous roots after squaring or after applying tan to both sides.',
      ],
      formulas: [
        'tan⁻¹x + tan⁻¹y = tan⁻¹((x + y)/(1 − xy)), xy < 1',
        'tan⁻¹x + tan⁻¹y = π + tan⁻¹((x + y)/(1 − xy)), x, y > 0, xy > 1',
        'tan⁻¹x − tan⁻¹y = tan⁻¹((x − y)/(1 + xy)), xy > −1',
        'sin⁻¹x + sin⁻¹y = sin⁻¹(x√(1 − y²) + y√(1 − x²))',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - almost every year in some form',
        question: 'The value of tan⁻¹1 + tan⁻¹2 + tan⁻¹3 is:',
        approach: [
          'For tan⁻¹2 + tan⁻¹3: x, y > 0 and xy = 6 > 1, so add π.',
          'tan⁻¹2 + tan⁻¹3 = π + tan⁻¹(5/(1 − 6)) = π + tan⁻¹(−1) = 3π/4.',
          'Add tan⁻¹1 = π/4.',
        ],
        answer: 'π',
      },
      questions: [
        {
          question: 'The value of tan⁻¹(1/2) + tan⁻¹(1/3) is:',
          options: ['π/4', 'π/3', 'π/6', 'π/2'],
          answer: 'π/4',
          difficulty: 'Easy',
          hint: 'xy = 1/6 < 1, so use the basic formula.',
          solution: '(1/2 + 1/3)/(1 − 1/6) = (5/6)/(5/6) = 1 ⇒ tan⁻¹1 = π/4.',
          similar: {
            question: 'The value of tan⁻¹(2/11) + tan⁻¹(7/24) is:',
            options: ['tan⁻¹(1/2)', 'π/4', 'tan⁻¹(1/3)', 'π/6'],
            answer: 'tan⁻¹(1/2)',
            solution: '(2/11 + 7/24)/(1 − 14/264) = (125/264)/(250/264) = 1/2.',
          },
        },
        {
          question: 'The solution of tan⁻¹2x + tan⁻¹3x = π/4 is:',
          options: ['1/6', '−1', '1/6 and −1', '1/3'],
          answer: '1/6',
          difficulty: 'Medium',
          hint: 'Apply the sum formula, solve the quadratic, then test each root.',
          solution:
            '5x/(1 − 6x²) = 1 ⇒ 6x² + 5x − 1 = 0 ⇒ (6x − 1)(x + 1) = 0. x = −1 makes both terms negative, so the sum cannot be π/4. Hence x = 1/6.',
          similar: {
            question: 'The solution of tan⁻¹(x + 1) + tan⁻¹(x − 1) = tan⁻¹(8/31) is:',
            options: ['1/4', '−8', '1/4 and −8', '1/2'],
            answer: '1/4',
            solution:
              '2x/(2 − x²) = 8/31 ⇒ 4x² + 31x − 8 = 0 ⇒ (4x − 1)(x + 8) = 0. For x = −8 both terms are negative with product 63 > 1, so the sum is near −π, not tan⁻¹(8/31). Hence x = 1/4.',
          },
        },
        {
          question: 'sin⁻¹(8/17) + sin⁻¹(3/5) equals:',
          options: ['tan⁻¹(77/36)', 'tan⁻¹(36/77)', 'tan⁻¹(13/84)', 'π − tan⁻¹(77/36)'],
          answer: 'tan⁻¹(77/36)',
          difficulty: 'Hard',
          hint: 'Convert each term to tan⁻¹ with a right triangle, then add.',
          solution:
            'sin⁻¹(8/17) = tan⁻¹(8/15), sin⁻¹(3/5) = tan⁻¹(3/4). Product 24/60 < 1, so sum = tan⁻¹((8/15 + 3/4)/(1 − 2/5)) = tan⁻¹((77/60)/(3/5)) = tan⁻¹(77/36).',
          similar: {
            question: 'cos⁻¹(4/5) + cos⁻¹(12/13) equals:',
            options: ['cos⁻¹(33/65)', 'cos⁻¹(63/65)', 'sin⁻¹(33/65)', 'cos⁻¹(56/65)'],
            answer: 'cos⁻¹(33/65)',
            solution: 'cos(A + B) = (4/5)(12/13) − (3/5)(5/13) = 48/65 − 15/65 = 33/65, and A + B lies in [0, π]. So the sum is cos⁻¹(33/65).',
          },
        },
      ],
    },
    {
      name: 'Multiple-angle Formulas and Substitution',
      theory:
        'Doubling: ==2tan⁻¹x = tan⁻¹(2x/(1 − x²)) for |x| < 1==, ==sin⁻¹(2x/(1 + x²)) for |x| ≤ 1== and ==cos⁻¹((1 − x²)/(1 + x²)) for x ≥ 0==. Similarly 2sin⁻¹x = sin⁻¹(2x√(1 − x²)) for |x| ≤ 1/√2 and 3sin⁻¹x = sin⁻¹(3x − 4x³) for |x| ≤ 1/2.\n\nOutside these ranges the formulas change. For x > 1, sin⁻¹(2x/(1 + x²)) = π − 2tan⁻¹x; for x < 0, cos⁻¹((1 − x²)/(1 + x²)) = −2tan⁻¹x. A quick numerical check (x = √3 or x = −1) always settles which form applies.\n\nThe general strategy is ==substitution==: put x = tan θ when you see 1 + x², x = sin θ for √(1 − x²), x = cos 2θ for √(1 ± x). Simplify with trigonometric identities and convert back, keeping track of the interval of θ. For example tan⁻¹(√((1 − cos x)/(1 + cos x))) = tan⁻¹(tan(x/2)) = x/2 for 0 < x < π.',
      keyPoints: [
        'Substitution: x = tan θ for 1 + x², x = sin θ for 1 − x², x = sec θ for x² − 1.',
        '==Always check the range of θ== before cancelling inverse with function.',
        'sin⁻¹(2x/(1 + x²)) = π − 2tan⁻¹x for x > 1.',
        'tan⁻¹((√(1 + x²) − 1)/x) = ½ tan⁻¹x.',
      ],
      formulas: [
        '2tan⁻¹x = sin⁻¹(2x/(1 + x²)), |x| ≤ 1',
        '2tan⁻¹x = cos⁻¹((1 − x²)/(1 + x²)), x ≥ 0',
        '2tan⁻¹x = tan⁻¹(2x/(1 − x²)), |x| < 1',
        '3sin⁻¹x = sin⁻¹(3x − 4x³), |x| ≤ 1/2',
        '3tan⁻¹x = tan⁻¹((3x − x³)/(1 − 3x²)), |x| < 1/√3',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - half-angle evaluation',
        question: 'The value of tan(½ cos⁻¹(√5/3)) is:',
        approach: [
          'Let θ = cos⁻¹(√5/3), so cos θ = √5/3 and θ ∈ [0, π/2].',
          'tan(θ/2) = √((1 − cos θ)/(1 + cos θ)) = √((3 − √5)/(3 + √5)).',
          'Rationalise: (3 − √5)/√(9 − 5) = (3 − √5)/2.',
        ],
        answer: '(3 − √5)/2',
      },
      questions: [
        {
          question: '2tan⁻¹(1/3) equals:',
          options: ['tan⁻¹(3/4)', 'tan⁻¹(2/3)', 'tan⁻¹(4/3)', 'tan⁻¹(1/9)'],
          answer: 'tan⁻¹(3/4)',
          difficulty: 'Easy',
          hint: 'Use 2tan⁻¹x = tan⁻¹(2x/(1 − x²)) for |x| < 1.',
          solution: '2(1/3)/(1 − 1/9) = (2/3)/(8/9) = 3/4.',
          similar: {
            question: '2tan⁻¹(1/2) equals:',
            options: ['tan⁻¹(4/3)', 'tan⁻¹(3/4)', 'tan⁻¹1', 'tan⁻¹(1/4)'],
            answer: 'tan⁻¹(4/3)',
            solution: '2(1/2)/(1 − 1/4) = 1/(3/4) = 4/3.',
          },
        },
        {
          question: 'For 0 < x < π, tan⁻¹(√((1 − cos x)/(1 + cos x))) equals:',
          options: ['x/2', 'x', 'π/2 − x/2', '2x'],
          answer: 'x/2',
          difficulty: 'Medium',
          hint: 'Use half-angle identities: 1 − cos x = 2sin²(x/2), 1 + cos x = 2cos²(x/2).',
          solution: '√(tan²(x/2)) = tan(x/2) since x/2 ∈ (0, π/2). Then tan⁻¹(tan(x/2)) = x/2.',
          similar: {
            question: 'For −π/2 < x < π/2, tan⁻¹(cos x/(1 − sin x)) equals:',
            options: ['π/4 + x/2', 'π/4 − x/2', 'x/2', 'π/2 − x'],
            answer: 'π/4 + x/2',
            solution:
              'cos x/(1 − sin x) = (cos(x/2) + sin(x/2))/(cos(x/2) − sin(x/2)) = (1 + tan(x/2))/(1 − tan(x/2)) = tan(π/4 + x/2), and π/4 + x/2 ∈ (0, π/2).',
          },
        },
        {
          question: 'For x > 1, sin⁻¹(2x/(1 + x²)) equals:',
          options: ['2tan⁻¹x', 'π − 2tan⁻¹x', '−π − 2tan⁻¹x', '2tan⁻¹x − π'],
          answer: 'π − 2tan⁻¹x',
          difficulty: 'Hard',
          hint: 'Test x = √3: the left side is sin⁻¹(√3/2).',
          solution:
            'Put x = tan θ with θ ∈ (π/4, π/2). Then 2x/(1 + x²) = sin 2θ with 2θ ∈ (π/2, π), so sin⁻¹(sin 2θ) = π − 2θ = π − 2tan⁻¹x. Check x = √3: π/3 = π − 2π/3.',
          similar: {
            question: 'For x < 0, cos⁻¹((1 − x²)/(1 + x²)) equals:',
            options: ['2tan⁻¹x', '−2tan⁻¹x', 'π − 2tan⁻¹x', 'π + 2tan⁻¹x'],
            answer: '−2tan⁻¹x',
            solution:
              'x = tan θ, θ ∈ (−π/2, 0): the expression is cos⁻¹(cos 2θ) with 2θ ∈ (−π, 0), so it equals −2θ = −2tan⁻¹x. Check x = −1: cos⁻¹0 = π/2 = −2(−π/4).',
          },
        },
      ],
    },
    {
      name: 'Telescoping Series of Inverse Tangents',
      theory:
        'Many JEE series reduce to a ==telescoping difference== tan⁻¹A − tan⁻¹B = tan⁻¹((A − B)/(1 + AB)). The trick is to write the general term\'s argument as (A − B)/(1 + AB) with A − B a constant.\n\nThe standard case: 1/(1 + n + n²) = ((n + 1) − n)/(1 + n(n + 1)), so ==tan⁻¹(1/(1 + n + n²)) = tan⁻¹(n + 1) − tan⁻¹n==. Summing from n = 1 to N leaves tan⁻¹(N + 1) − π/4, and the infinite sum is π/2 − π/4 = π/4.\n\nOther common forms: tan⁻¹(2/n²) = tan⁻¹(n + 1) − tan⁻¹(n − 1), whose sum to infinity is ==3π/4== (two terms survive at each end), and cot⁻¹(2n²) = tan⁻¹(1/(2n²)) = tan⁻¹(2n + 1) − tan⁻¹(2n − 1), whose sum to infinity is π/4. Remember cot⁻¹x = tan⁻¹(1/x) for x > 0.',
      keyPoints: [
        '==Make the numerator equal to the difference of the two factors in the denominator==.',
        'Σ (n = 1 to ∞) tan⁻¹(1/(n² + n + 1)) = π/4.',
        'Σ (n = 1 to ∞) tan⁻¹(2/n²) = 3π/4.',
        'tan⁻¹N → π/2 as N → ∞.',
      ],
      formulas: [
        'tan⁻¹(1/(1 + n + n²)) = tan⁻¹(n + 1) − tan⁻¹n',
        'tan⁻¹(2/n²) = tan⁻¹(n + 1) − tan⁻¹(n − 1)',
        'tan⁻¹(1/(2n²)) = tan⁻¹(2n + 1) − tan⁻¹(2n − 1)',
      ],
      pyq: {
        exam: 'JEE Main & Advanced',
        frequency: 'Frequently - series of tan⁻¹ or cot⁻¹',
        question: 'The value of Σ (n = 1 to ∞) tan⁻¹(2/n²) is:',
        approach: [
          'Write 2/n² = ((n + 1) − (n − 1))/(1 + (n + 1)(n − 1)).',
          'So each term = tan⁻¹(n + 1) − tan⁻¹(n − 1).',
          'Partial sum to N: tan⁻¹(N + 1) + tan⁻¹N − tan⁻¹1 − tan⁻¹0.',
          'As N → ∞: π/2 + π/2 − π/4 − 0 = 3π/4.',
        ],
        answer: '3π/4',
      },
      questions: [
        {
          question: 'tan⁻¹(1/7) can be written as:',
          options: ['tan⁻¹3 − tan⁻¹2', 'tan⁻¹4 − tan⁻¹3', 'tan⁻¹2 − tan⁻¹1', 'tan⁻¹7 − tan⁻¹1'],
          answer: 'tan⁻¹3 − tan⁻¹2',
          difficulty: 'Easy',
          hint: '7 = 1 + 2 × 3.',
          solution: 'tan⁻¹3 − tan⁻¹2 = tan⁻¹((3 − 2)/(1 + 6)) = tan⁻¹(1/7).',
          similar: {
            question: 'tan⁻¹(1/13) can be written as:',
            options: ['tan⁻¹4 − tan⁻¹3', 'tan⁻¹3 − tan⁻¹2', 'tan⁻¹13 − tan⁻¹1', 'tan⁻¹5 − tan⁻¹4'],
            answer: 'tan⁻¹4 − tan⁻¹3',
            solution: '13 = 1 + 3 × 4, so tan⁻¹4 − tan⁻¹3 = tan⁻¹(1/13).',
          },
        },
        {
          question: 'Σ (r = 1 to n) tan⁻¹(1/(1 + r + r²)) equals:',
          options: ['tan⁻¹(n/(n + 2))', 'tan⁻¹(n + 1)', 'tan⁻¹(1/(n + 1))', 'tan⁻¹((n + 1)/(n + 2))'],
          answer: 'tan⁻¹(n/(n + 2))',
          difficulty: 'Medium',
          hint: 'Each term is tan⁻¹(r + 1) − tan⁻¹r.',
          solution: 'Sum telescopes to tan⁻¹(n + 1) − tan⁻¹1 = tan⁻¹((n + 1 − 1)/(1 + n + 1)) = tan⁻¹(n/(n + 2)).',
          similar: {
            question: 'Σ (r = 1 to ∞) tan⁻¹(1/(1 + r + r²)) equals:',
            options: ['π/4', 'π/2', 'π/3', '3π/4'],
            answer: 'π/4',
            solution: 'Partial sum tan⁻¹(n + 1) − π/4 → π/2 − π/4 = π/4.',
          },
        },
        {
          question: 'Σ (r = 1 to ∞) cot⁻¹(2r²) equals:',
          options: ['π/4', 'π/2', '3π/4', 'π/8'],
          answer: 'π/4',
          difficulty: 'Hard',
          hint: 'cot⁻¹(2r²) = tan⁻¹(1/(2r²)) = tan⁻¹(2/(4r²)); write 4r² = 1 + (2r − 1)(2r + 1).',
          solution:
            'tan⁻¹(2/(1 + (2r + 1)(2r − 1))) = tan⁻¹(2r + 1) − tan⁻¹(2r − 1). The sum telescopes to tan⁻¹(2n + 1) − tan⁻¹1 → π/2 − π/4 = π/4.',
          similar: {
            question: 'Σ (n = 0 to ∞) tan⁻¹(1/(n² + n + 1)) equals:',
            options: ['π/2', 'π/4', '3π/4', 'π'],
            answer: 'π/2',
            solution: 'Each term is tan⁻¹(n + 1) − tan⁻¹n; starting from n = 0, the sum is lim tan⁻¹(N + 1) − tan⁻¹0 = π/2.',
          },
        },
      ],
    },
  ],
};
