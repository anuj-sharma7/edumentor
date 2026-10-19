import type { StudyChapter } from '../types';

export const indefiniteIntegrals: StudyChapter = {
  name: 'Indefinite Integrals',
  subject: 'Mathematics',
  classLevel: 12,
  summary:
    'Integration as the reverse of differentiation, built on a handful of standard forms and three techniques: substitution, partial fractions and integration by parts. Almost every JEE Main paper has at least one indefinite-integral question, and the same techniques power definite integrals, areas and differential equations.',
  mostRepeated: [
    '==∫ eˣ[f(x) + f′(x)] dx = eˣ f(x) + C== - spot f and f′ hidden inside the integrand.',
    'For ∫ dx/(x(xⁿ + 1)), multiply by xⁿ⁻¹ and put ==t = xⁿ==.',
    'Rational functions in x² such as (x² + 1)/(x⁴ + 1): divide by x² and put ==t = x − 1/x== (or x + 1/x).',
    '==Completing the square== turns 1/(ax² + bx + c) and 1/√(ax² + bx + c) into tan⁻¹, ln or sin⁻¹ forms.',
    'For 1/(a + b cos x) use ==t = tan(x/2)==, with cos x = (1 − t²)/(1 + t²) and dx = 2dt/(1 + t²).',
    'Integration by parts order: ==ILATE== (Inverse trig, Log, Algebraic, Trig, Exponential).',
    'Trig identities such as sin⁸x − cos⁸x = (sin²x − cos²x)(1 − 2sin²x cos²x) collapse "scary" integrands.',
  ],
  topics: [
    {
      name: 'Standard Integrals and Basic Properties',
      theory:
        'An antiderivative of f is any F with F′(x) = f(x); the indefinite integral is ==∫ f(x) dx = F(x) + C==, where C is an arbitrary constant. Integration is linear: ∫[a f(x) + b g(x)] dx = a∫f dx + b∫g dx, but there is no product rule - the integral of a product is NOT the product of integrals.\n\nEvery standard integral is a derivative read backwards: ==∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1)== and ==∫ dx/x = ln|x| + C==; ∫ eˣ dx = eˣ + C, ∫ aˣ dx = aˣ/ln a + C; ∫ sin x dx = −cos x + C, ∫ cos x dx = sin x + C, ∫ sec²x dx = tan x + C, ∫ cosec²x dx = −cot x + C, ∫ sec x tan x dx = sec x + C.\n\nMany questions are just these forms in disguise. Expand powers, split fractions term by term, and use identities: tan²x = sec²x − 1, 1 = sin²x + cos²x, and the double-angle formulas. A linear argument only adds a factor: ==∫ f(ax + b) dx = F(ax + b)/a + C==.',
      keyPoints: [
        'Always add the constant C; two answers differing by a constant are both correct.',
        '==∫ tan x dx = ln|sec x| + C==, ∫ cot x dx = ln|sin x| + C.',
        '==∫ sec x dx = ln|sec x + tan x| + C==, ∫ cosec x dx = ln|cosec x − cot x| + C.',
        'Use 1 = sin²x + cos²x to split 1/(sin²x cos²x) into sec²x + cosec²x.',
        'Linear argument ax + b: integrate as usual and divide by a.',
      ],
      formulas: [
        '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ −1',
        '∫ dx/x = ln|x| + C',
        '∫ aˣ dx = aˣ/ln a + C',
        '∫ sec²x dx = tan x + C; ∫ cosec²x dx = −cot x + C',
        '∫ tan x dx = ln|sec x| + C',
        '∫ sec x dx = ln|sec x + tan x| + C',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - identity-based simplification',
        question: 'Evaluate ∫ (sin⁸x − cos⁸x)/(1 − 2sin²x cos²x) dx.',
        approach: [
          'Factor the numerator: sin⁸x − cos⁸x = (sin⁴x − cos⁴x)(sin⁴x + cos⁴x).',
          'sin⁴x − cos⁴x = (sin²x − cos²x)(1) and sin⁴x + cos⁴x = 1 − 2sin²x cos²x.',
          'The denominator cancels, leaving sin²x − cos²x = −cos 2x.',
          '∫ −cos 2x dx = −(1/2) sin 2x + C.',
        ],
        answer: '−(1/2) sin 2x + C',
      },
      questions: [
        {
          question: '∫ (x² + 1/x) dx equals:',
          options: ['x³/3 + ln|x| + C', 'x³/3 − 1/x² + C', '2x − 1/x² + C', 'x³ + ln|x| + C'],
          answer: 'x³/3 + ln|x| + C',
          difficulty: 'Easy',
          hint: 'Integrate term by term; 1/x is the one exception to the power rule.',
          solution: '∫ x² dx = x³/3 and ∫ (1/x) dx = ln|x|. So the integral is x³/3 + ln|x| + C.',
          similar: {
            question: '∫ (3x² − 2/x) dx equals:',
            options: ['x³ − 2 ln|x| + C', 'x³ + 2/x² + C', '6x + 2/x² + C', 'x³ − 2/x + C'],
            answer: 'x³ − 2 ln|x| + C',
            solution: '∫ 3x² dx = x³ and ∫ (2/x) dx = 2 ln|x|. Hence x³ − 2 ln|x| + C.',
          },
        },
        {
          question: '∫ tan²x dx equals:',
          options: ['tan x − x + C', 'tan x + x + C', 'sec x − x + C', 'tan³x/3 + C'],
          answer: 'tan x − x + C',
          difficulty: 'Medium',
          hint: 'Rewrite tan²x using an identity involving sec²x.',
          solution: 'tan²x = sec²x − 1. ∫ (sec²x − 1) dx = tan x − x + C.',
          similar: {
            question: '∫ cot²x dx equals:',
            options: ['−cot x − x + C', 'cot x − x + C', '−cot x + x + C', 'cosec x − x + C'],
            answer: '−cot x − x + C',
            solution: 'cot²x = cosec²x − 1. ∫ (cosec²x − 1) dx = −cot x − x + C.',
          },
        },
        {
          question: '∫ dx/(sin²x cos²x) equals:',
          options: ['tan x − cot x + C', 'tan x + cot x + C', 'cot x − tan x + C', '−tan x − cot x + C'],
          answer: 'tan x − cot x + C',
          difficulty: 'Hard',
          hint: 'Write the 1 in the numerator as sin²x + cos²x and split.',
          solution:
            '1/(sin²x cos²x) = (sin²x + cos²x)/(sin²x cos²x) = 1/cos²x + 1/sin²x = sec²x + cosec²x. Integrating: tan x − cot x + C.',
          similar: {
            question: '∫ cos 2x/(sin²x cos²x) dx equals:',
            options: ['−cot x − tan x + C', 'cot x + tan x + C', 'tan x − cot x + C', 'cot x − tan x + C'],
            answer: '−cot x − tan x + C',
            solution:
              'cos 2x = cos²x − sin²x, so the integrand is 1/sin²x − 1/cos²x = cosec²x − sec²x. Integrating: −cot x − tan x + C.',
          },
        },
      ],
    },
    {
      name: 'Integration by Substitution',
      theory:
        'If the integrand contains a function together with (a multiple of) its derivative, substitute ==t = g(x), dt = g′(x) dx==: then ∫ f(g(x)) g′(x) dx = ∫ f(t) dt. Two special cases are worth memorising: ==∫ f′(x)/f(x) dx = ln|f(x)| + C== and ∫ [f(x)]ⁿ f′(x) dx = [f(x)]ⁿ⁺¹/(n + 1) + C.\n\nFor powers of sin and cos: if the power of sin x is odd, put t = cos x; if the power of cos x is odd, put t = sin x; if both are even, reduce with double-angle formulas. For ∫ sinᵐx cosⁿx dx with m + n a negative even integer, divide by cosᵐ⁺ⁿx and put ==t = tan x==.\n\nA very common JEE trick is for integrands like 1/(x(xⁿ + 1)) or 1/(x²(x⁴ + 1)^(3/4)): take the highest power of x out of the bracket and substitute ==t = 1 + x⁻ⁿ== (or t = xⁿ). After the substitution the integral becomes a simple power or partial fraction.',
      keyPoints: [
        'Look for "function × derivative" - that inner function is your t.',
        '==∫ f′(x)/f(x) dx = ln|f(x)| + C==.',
        'Odd power of sin ⇒ t = cos x; odd power of cos ⇒ t = sin x.',
        'For 1/(x(xⁿ + 1)), multiply and divide by xⁿ⁻¹, then t = xⁿ.',
        'Change the answer back to x at the end.',
      ],
      formulas: [
        '∫ f(g(x)) g′(x) dx = ∫ f(t) dt, t = g(x)',
        '∫ f′(x)/f(x) dx = ln|f(x)| + C',
        '∫ [f(x)]ⁿ f′(x) dx = [f(x)]ⁿ⁺¹/(n + 1) + C',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently in JEE Main',
        question: 'Evaluate ∫ dx/(x²(x⁴ + 1)^(3/4)).',
        approach: [
          'Take x⁴ out of the bracket: (x⁴ + 1)^(3/4) = x³(1 + x⁻⁴)^(3/4), so the integrand is x⁻⁵(1 + x⁻⁴)^(−3/4).',
          'Put t = 1 + x⁻⁴, so dt = −4x⁻⁵ dx.',
          'The integral becomes −(1/4)∫ t^(−3/4) dt = −(1/4) · 4t^(1/4) = −t^(1/4).',
          'Return to x: −(1 + 1/x⁴)^(1/4) + C.',
        ],
        answer: '−(1 + 1/x⁴)^(1/4) + C',
      },
      questions: [
        {
          question: '∫ 2x cos(x²) dx equals:',
          options: ['sin(x²) + C', '−sin(x²) + C', 'x² sin(x²) + C', '2 sin(x²) + C'],
          answer: 'sin(x²) + C',
          difficulty: 'Easy',
          hint: '2x is the derivative of x².',
          solution: 'Put t = x², dt = 2x dx. ∫ cos t dt = sin t + C = sin(x²) + C.',
          similar: {
            question: '∫ 3x² e^(x³) dx equals:',
            options: ['e^(x³) + C', '3e^(x³) + C', 'x³e^(x³) + C', 'e^(x³)/3 + C'],
            answer: 'e^(x³) + C',
            solution: 'Put t = x³, dt = 3x² dx. ∫ eᵗ dt = eᵗ + C = e^(x³) + C.',
          },
        },
        {
          question: '∫ (ln x)²/x dx equals:',
          options: ['(ln x)³/3 + C', '(ln x)²/2 + C', '2 ln x/x + C', '(ln x)³ + C'],
          answer: '(ln x)³/3 + C',
          difficulty: 'Medium',
          hint: 'What is the derivative of ln x?',
          solution: 'Put t = ln x, dt = dx/x. ∫ t² dt = t³/3 + C = (ln x)³/3 + C.',
          similar: {
            question: '∫ dx/(x ln x) equals:',
            options: ['ln|ln x| + C', '1/ln x + C', '(ln x)²/2 + C', 'ln x + C'],
            answer: 'ln|ln x| + C',
            solution: 'Put t = ln x, dt = dx/x. ∫ dt/t = ln|t| + C = ln|ln x| + C.',
          },
        },
        {
          question: '∫ dx/(x(x⁴ + 1)) equals:',
          options: [
            '(1/4) ln(x⁴/(x⁴ + 1)) + C',
            'ln(x⁴/(x⁴ + 1)) + C',
            '(1/4) ln(x⁴ + 1) + C',
            '(1/4) ln((x⁴ + 1)/x⁴) + C',
          ],
          answer: '(1/4) ln(x⁴/(x⁴ + 1)) + C',
          difficulty: 'Hard',
          hint: 'Multiply numerator and denominator by x³ and look for the derivative of x⁴.',
          solution:
            'Write the integrand as x³/(x⁴(x⁴ + 1)). Put t = x⁴, dt = 4x³ dx: (1/4)∫ dt/(t(t + 1)) = (1/4)∫ [1/t − 1/(t + 1)] dt = (1/4) ln(t/(t + 1)) + C = (1/4) ln(x⁴/(x⁴ + 1)) + C.',
          similar: {
            question: '∫ dx/(x(x³ + 1)) equals:',
            options: [
              '(1/3) ln|x³/(x³ + 1)| + C',
              '3 ln|x³/(x³ + 1)| + C',
              '(1/3) ln|x³ + 1| + C',
              '(1/3) ln|(x³ + 1)/x³| + C',
            ],
            answer: '(1/3) ln|x³/(x³ + 1)| + C',
            solution:
              'Multiply by x²/x²: x²/(x³(x³ + 1)). Put t = x³, dt = 3x² dx: (1/3)∫ [1/t − 1/(t + 1)] dt = (1/3) ln|x³/(x³ + 1)| + C.',
          },
        },
      ],
    },
    {
      name: 'Integrals of Special Algebraic Forms',
      theory:
        'Six results cover all quadratic denominators and square roots. With a > 0: ==∫ dx/(x² + a²) = (1/a) tan⁻¹(x/a) + C==, ∫ dx/(x² − a²) = (1/2a) ln|(x − a)/(x + a)| + C, ∫ dx/(a² − x²) = (1/2a) ln|(a + x)/(a − x)| + C, ==∫ dx/√(a² − x²) = sin⁻¹(x/a) + C==, and ∫ dx/√(x² ± a²) = ln|x + √(x² ± a²)| + C.\n\nThe square-root (not reciprocal) forms come from integration by parts: ==∫ √(a² − x²) dx = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) + C==, and ∫ √(x² ± a²) dx = (x/2)√(x² ± a²) ± (a²/2) ln|x + √(x² ± a²)| + C.\n\nWhen the quadratic is ax² + bx + c, first ==complete the square==: x² + 4x + 13 = (x + 2)² + 9, 3 − 2x − x² = 4 − (x + 1)². The shifted variable (x + 2 or x + 1) then plays the role of x in the standard formula.',
      keyPoints: [
        'Sum of squares in denominator ⇒ tan⁻¹; difference ⇒ ln.',
        'Square root with a² − x² ⇒ sin⁻¹; with x² ± a² ⇒ ln|x + √(x² ± a²)|.',
        '==Complete the square first== whenever there is a bx term.',
        'In √(a² − x²) dx the second term has a factor a²/2, not a².',
      ],
      formulas: [
        '∫ dx/(x² + a²) = (1/a) tan⁻¹(x/a) + C',
        '∫ dx/(x² − a²) = (1/2a) ln|(x − a)/(x + a)| + C',
        '∫ dx/(a² − x²) = (1/2a) ln|(a + x)/(a − x)| + C',
        '∫ dx/√(a² − x²) = sin⁻¹(x/a) + C',
        '∫ dx/√(x² ± a²) = ln|x + √(x² ± a²)| + C',
        '∫ √(a² − x²) dx = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) + C',
        '∫ √(x² ± a²) dx = (x/2)√(x² ± a²) ± (a²/2) ln|x + √(x² ± a²)| + C',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - completing the square',
        question: 'Evaluate ∫ dx/√(3 − 2x − x²).',
        approach: [
          'Complete the square: 3 − 2x − x² = 4 − (x² + 2x + 1) = 2² − (x + 1)².',
          'This is the form ∫ du/√(a² − u²) with u = x + 1 and a = 2.',
          'Result: sin⁻¹(u/a) = sin⁻¹((x + 1)/2) + C.',
        ],
        answer: 'sin⁻¹((x + 1)/2) + C',
      },
      questions: [
        {
          question: '∫ dx/(x² + 9) equals:',
          options: ['(1/3) tan⁻¹(x/3) + C', 'tan⁻¹(x/3) + C', '(1/9) tan⁻¹(x/9) + C', '3 tan⁻¹(3x) + C'],
          answer: '(1/3) tan⁻¹(x/3) + C',
          difficulty: 'Easy',
          hint: 'Use ∫ dx/(x² + a²) with a = 3.',
          solution: '∫ dx/(x² + a²) = (1/a) tan⁻¹(x/a) + C with a = 3 gives (1/3) tan⁻¹(x/3) + C.',
          similar: {
            question: '∫ dx/√(16 − x²) equals:',
            options: ['sin⁻¹(x/4) + C', '(1/4) sin⁻¹(x/4) + C', 'sin⁻¹(4x) + C', 'cos⁻¹(x/4)/4 + C'],
            answer: 'sin⁻¹(x/4) + C',
            solution: '∫ dx/√(a² − x²) = sin⁻¹(x/a) + C with a = 4. Note there is no 1/a factor in this form.',
          },
        },
        {
          question: '∫ dx/(x² + 4x + 13) equals:',
          options: [
            '(1/3) tan⁻¹((x + 2)/3) + C',
            'tan⁻¹((x + 2)/3) + C',
            '(1/3) tan⁻¹((x − 2)/3) + C',
            '(1/9) tan⁻¹((x + 2)/9) + C',
          ],
          answer: '(1/3) tan⁻¹((x + 2)/3) + C',
          difficulty: 'Medium',
          hint: 'Complete the square in the denominator.',
          solution: 'x² + 4x + 13 = (x + 2)² + 3². With u = x + 2, ∫ du/(u² + 9) = (1/3) tan⁻¹(u/3) = (1/3) tan⁻¹((x + 2)/3) + C.',
          similar: {
            question: '∫ dx/(x² − 6x + 25) equals:',
            options: [
              '(1/4) tan⁻¹((x − 3)/4) + C',
              '(1/4) tan⁻¹((x + 3)/4) + C',
              'tan⁻¹((x − 3)/4) + C',
              '(1/16) tan⁻¹((x − 3)/16) + C',
            ],
            answer: '(1/4) tan⁻¹((x − 3)/4) + C',
            solution: 'x² − 6x + 25 = (x − 3)² + 4². So the integral is (1/4) tan⁻¹((x − 3)/4) + C.',
          },
        },
        {
          question: '∫ √(4 − x²) dx equals:',
          options: [
            '(x/2)√(4 − x²) + 2 sin⁻¹(x/2) + C',
            '(x/2)√(4 − x²) + 4 sin⁻¹(x/2) + C',
            'x√(4 − x²) + 2 sin⁻¹(x/2) + C',
            '(x/2)√(4 − x²) − 2 sin⁻¹(x/2) + C',
          ],
          answer: '(x/2)√(4 − x²) + 2 sin⁻¹(x/2) + C',
          difficulty: 'Hard',
          hint: 'Use the standard result for ∫ √(a² − x²) dx; watch the coefficient a²/2.',
          solution:
            '∫ √(a² − x²) dx = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) + C. With a = 2, a²/2 = 2, giving (x/2)√(4 − x²) + 2 sin⁻¹(x/2) + C.',
          similar: {
            question: '∫ √(x² + 9) dx equals:',
            options: [
              '(x/2)√(x² + 9) + (9/2) ln|x + √(x² + 9)| + C',
              '(x/2)√(x² + 9) − (9/2) ln|x + √(x² + 9)| + C',
              '(x/2)√(x² + 9) + 9 ln|x + √(x² + 9)| + C',
              '(x/2)√(x² + 9) + (9/2) sin⁻¹(x/3) + C',
            ],
            answer: '(x/2)√(x² + 9) + (9/2) ln|x + √(x² + 9)| + C',
            solution:
              '∫ √(x² + a²) dx = (x/2)√(x² + a²) + (a²/2) ln|x + √(x² + a²)| + C. With a² = 9 the answer follows.',
          },
        },
      ],
    },
    {
      name: 'Linear-over-Quadratic and Trigonometric Rational Forms',
      theory:
        'For ∫ (px + q)/(ax² + bx + c) dx, write the numerator as ==px + q = A·(d/dx)(ax² + bx + c) + B==. The A-part integrates to A ln|ax² + bx + c| and the B-part is a standard form after completing the square. The same split works for (px + q)/√(ax² + bx + c), where the A-part gives 2A√(ax² + bx + c).\n\nFor ∫ dx/(a + b cos x), ∫ dx/(a + b sin x) or ∫ dx/(a sin x + b cos x + c), use the ==half-angle substitution t = tan(x/2)==, with sin x = 2t/(1 + t²), cos x = (1 − t²)/(1 + t²) and dx = 2dt/(1 + t²). For ∫ dx/(a² sin²x + b² cos²x), divide by cos²x and put t = tan x instead.\n\nIntegrands like (x² ± 1)/(x⁴ + kx² + 1) are handled by dividing by x²: (1 + 1/x²)/(x² + 1/x² + k) with ==t = x − 1/x== (since x² + 1/x² = t² + 2), and (1 − 1/x²) with t = x + 1/x.',
      keyPoints: [
        'Split the numerator as A × (derivative of denominator) + B.',
        '==t = tan(x/2)== converts any rational function of sin x and cos x into a rational function of t.',
        'Quadratic powers of sin and cos (sin²x, cos²x) ⇒ divide by cos²x, use t = tan x.',
        'For (x² + 1)/(x⁴ + 1): t = x − 1/x; for (x² − 1)/(x⁴ + 1): t = x + 1/x.',
      ],
      formulas: [
        'px + q = A(2ax + b) + B',
        'sin x = 2t/(1 + t²), cos x = (1 − t²)/(1 + t²), dx = 2dt/(1 + t²), t = tan(x/2)',
        '∫ (x² + 1)/(x⁴ + 1) dx = (1/√2) tan⁻¹((x² − 1)/(√2 x)) + C',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - divide by x² trick',
        question: 'Evaluate ∫ (x² + 1)/(x⁴ + 1) dx.',
        approach: [
          'Divide numerator and denominator by x²: (1 + 1/x²)/(x² + 1/x²).',
          'Put t = x − 1/x, so dt = (1 + 1/x²) dx and x² + 1/x² = t² + 2.',
          'The integral becomes ∫ dt/(t² + 2) = (1/√2) tan⁻¹(t/√2).',
          'Substitute back: (1/√2) tan⁻¹((x² − 1)/(√2 x)) + C.',
        ],
        answer: '(1/√2) tan⁻¹((x² − 1)/(√2 x)) + C',
      },
      questions: [
        {
          question: '∫ (2x + 3)/(x² + 3x + 5) dx equals:',
          options: ['ln|x² + 3x + 5| + C', '2 ln|x² + 3x + 5| + C', '(x² + 3x + 5)²/2 + C', '1/(x² + 3x + 5) + C'],
          answer: 'ln|x² + 3x + 5| + C',
          difficulty: 'Easy',
          hint: 'Differentiate the denominator and compare with the numerator.',
          solution: 'd/dx(x² + 3x + 5) = 2x + 3, which is exactly the numerator. So the integral is ln|x² + 3x + 5| + C.',
          similar: {
            question: '∫ (4x − 2)/(x² − x + 7) dx equals:',
            options: ['2 ln|x² − x + 7| + C', 'ln|x² − x + 7| + C', '4 ln|x² − x + 7| + C', '(1/2) ln|x² − x + 7| + C'],
            answer: '2 ln|x² − x + 7| + C',
            solution: 'd/dx(x² − x + 7) = 2x − 1, and 4x − 2 = 2(2x − 1). So the integral is 2 ln|x² − x + 7| + C.',
          },
        },
        {
          question: '∫ (x + 1)/(x² + 1) dx equals:',
          options: [
            '(1/2) ln(x² + 1) + tan⁻¹x + C',
            'ln(x² + 1) + tan⁻¹x + C',
            '(1/2) ln(x² + 1) − tan⁻¹x + C',
            '(1/2) tan⁻¹x + ln(x² + 1) + C',
          ],
          answer: '(1/2) ln(x² + 1) + tan⁻¹x + C',
          difficulty: 'Medium',
          hint: 'Split into x/(x² + 1) and 1/(x² + 1).',
          solution: '∫ x/(x² + 1) dx = (1/2) ln(x² + 1) and ∫ dx/(x² + 1) = tan⁻¹x. Total: (1/2) ln(x² + 1) + tan⁻¹x + C.',
          similar: {
            question: '∫ (2x + 3)/(x² + 9) dx equals:',
            options: [
              'ln(x² + 9) + tan⁻¹(x/3) + C',
              'ln(x² + 9) + 3 tan⁻¹(x/3) + C',
              '2 ln(x² + 9) + tan⁻¹(x/3) + C',
              'ln(x² + 9) + (1/3) tan⁻¹(x/3) + C',
            ],
            answer: 'ln(x² + 9) + tan⁻¹(x/3) + C',
            solution: '∫ 2x/(x² + 9) dx = ln(x² + 9). ∫ 3/(x² + 9) dx = 3 · (1/3) tan⁻¹(x/3) = tan⁻¹(x/3). Total: ln(x² + 9) + tan⁻¹(x/3) + C.',
          },
        },
        {
          question: '∫ dx/(5 + 4 cos x) equals:',
          options: [
            '(2/3) tan⁻¹((1/3) tan(x/2)) + C',
            '(1/3) tan⁻¹((1/3) tan(x/2)) + C',
            '(2/3) tan⁻¹(3 tan(x/2)) + C',
            '2 tan⁻¹((1/3) tan(x/2)) + C',
          ],
          answer: '(2/3) tan⁻¹((1/3) tan(x/2)) + C',
          difficulty: 'Hard',
          hint: 'Put t = tan(x/2) and express cos x and dx in terms of t.',
          solution:
            'With t = tan(x/2): cos x = (1 − t²)/(1 + t²), dx = 2dt/(1 + t²). Denominator: 5(1 + t²) + 4(1 − t²) = 9 + t² (over 1 + t²). Integral = ∫ 2dt/(t² + 9) = (2/3) tan⁻¹(t/3) = (2/3) tan⁻¹((1/3) tan(x/2)) + C.',
          similar: {
            question: '∫ dx/(2 + cos x) equals:',
            options: [
              '(2/√3) tan⁻¹(tan(x/2)/√3) + C',
              '(1/√3) tan⁻¹(tan(x/2)/√3) + C',
              '2 tan⁻¹(tan(x/2)/√3) + C',
              '(2/√3) tan⁻¹(√3 tan(x/2)) + C',
            ],
            answer: '(2/√3) tan⁻¹(tan(x/2)/√3) + C',
            solution:
              'With t = tan(x/2): 2(1 + t²) + (1 − t²) = 3 + t². Integral = ∫ 2dt/(t² + 3) = (2/√3) tan⁻¹(t/√3) = (2/√3) tan⁻¹(tan(x/2)/√3) + C.',
          },
        },
      ],
    },
    {
      name: 'Integration by Partial Fractions',
      theory:
        'A proper rational function P(x)/Q(x) (degree of P less than degree of Q) can be split into simpler fractions according to the factors of Q. ==Linear factor (x − a) ⇒ A/(x − a)==; repeated factor (x − a)² ⇒ A/(x − a) + B/(x − a)²; ==irreducible quadratic (x² + bx + c) ⇒ (Ax + B)/(x² + bx + c)==. If the fraction is improper, divide first.\n\nConstants for distinct linear factors are found fastest by the ==cover-up rule==: to get A in A/(x − a), cover (x − a) in the original fraction and substitute x = a. Remaining constants come from comparing coefficients or substituting convenient values of x.\n\nWhen the fraction contains only even powers of x, such as x²/((x² + 1)(x² + 4)), put y = x² temporarily, split in y, and then integrate each piece as a tan⁻¹ form. Each linear piece integrates to a logarithm, and each quadratic piece to a ln + tan⁻¹ combination.',
      keyPoints: [
        'Improper fraction? Divide first to get polynomial + proper fraction.',
        '==Cover-up rule== gives the constants of non-repeated linear factors instantly.',
        'Repeated factor (x − a)ᵏ needs k separate terms.',
        'Even-power trick: treat x² as y while splitting, not while integrating.',
      ],
      formulas: [
        '1/((x − a)(x − b)) = [1/(a − b)] [1/(x − a) − 1/(x − b)]',
        '∫ dx/((x − a)(x − b)) = [1/(a − b)] ln|(x − a)/(x − b)| + C',
        '(px + q)/((x − a)²) = A/(x − a) + B/(x − a)²',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently in JEE Main',
        question: 'Evaluate ∫ x²/((x² + 1)(x² + 4)) dx.',
        approach: [
          'Put y = x² for splitting: y/((y + 1)(y + 4)) = A/(y + 1) + B/(y + 4).',
          'Cover-up: A = (−1)/(−1 + 4) = −1/3, B = (−4)/(−4 + 1) = 4/3.',
          'Integrand = −(1/3)/(x² + 1) + (4/3)/(x² + 4).',
          'Integrate: −(1/3) tan⁻¹x + (4/3)(1/2) tan⁻¹(x/2).',
        ],
        answer: '(2/3) tan⁻¹(x/2) − (1/3) tan⁻¹x + C',
      },
      questions: [
        {
          question: '∫ dx/((x − 1)(x − 2)) equals:',
          options: [
            'ln|(x − 2)/(x − 1)| + C',
            'ln|(x − 1)/(x − 2)| + C',
            'ln|(x − 1)(x − 2)| + C',
            '(1/2) ln|(x − 2)/(x − 1)| + C',
          ],
          answer: 'ln|(x − 2)/(x − 1)| + C',
          difficulty: 'Easy',
          hint: 'Split into A/(x − 1) + B/(x − 2) using the cover-up rule.',
          solution: 'A = 1/(1 − 2) = −1, B = 1/(2 − 1) = 1. Integral = −ln|x − 1| + ln|x − 2| + C = ln|(x − 2)/(x − 1)| + C.',
          similar: {
            question: '∫ dx/(x(x + 3)) equals:',
            options: [
              '(1/3) ln|x/(x + 3)| + C',
              'ln|x/(x + 3)| + C',
              '(1/3) ln|(x + 3)/x| + C',
              '3 ln|x/(x + 3)| + C',
            ],
            answer: '(1/3) ln|x/(x + 3)| + C',
            solution: '1/(x(x + 3)) = (1/3)[1/x − 1/(x + 3)]. Integral = (1/3) ln|x/(x + 3)| + C.',
          },
        },
        {
          question: '∫ x/((x + 1)(x + 2)) dx equals:',
          options: [
            '2 ln|x + 2| − ln|x + 1| + C',
            'ln|x + 2| − 2 ln|x + 1| + C',
            '2 ln|x + 1| − ln|x + 2| + C',
            'ln|(x + 1)(x + 2)| + C',
          ],
          answer: '2 ln|x + 2| − ln|x + 1| + C',
          difficulty: 'Medium',
          hint: 'Cover-up at x = −1 and x = −2.',
          solution: 'A/(x + 1): A = (−1)/(−1 + 2) = −1. B/(x + 2): B = (−2)/(−2 + 1) = 2. Integral = −ln|x + 1| + 2 ln|x + 2| + C.',
          similar: {
            question: '∫ (3x + 1)/((x − 1)(x + 1)) dx equals:',
            options: [
              '2 ln|x − 1| + ln|x + 1| + C',
              'ln|x − 1| + 2 ln|x + 1| + C',
              '2 ln|x − 1| − ln|x + 1| + C',
              '3 ln|x − 1| + ln|x + 1| + C',
            ],
            answer: '2 ln|x − 1| + ln|x + 1| + C',
            solution: 'At x = 1: A = 4/2 = 2. At x = −1: B = (−2)/(−2) = 1. Integral = 2 ln|x − 1| + ln|x + 1| + C.',
          },
        },
        {
          question: '∫ dx/(x(x² + 1)) equals:',
          options: [
            'ln|x| − (1/2) ln(x² + 1) + C',
            'ln|x| + (1/2) ln(x² + 1) + C',
            'ln|x| − tan⁻¹x + C',
            '(1/2) ln|x| − ln(x² + 1) + C',
          ],
          answer: 'ln|x| − (1/2) ln(x² + 1) + C',
          difficulty: 'Hard',
          hint: 'Use A/x + (Bx + C)/(x² + 1).',
          solution:
            '1 = A(x² + 1) + (Bx + C)x. x = 0 ⇒ A = 1. Coefficient of x²: A + B = 0 ⇒ B = −1; coefficient of x: C = 0. So the integrand is 1/x − x/(x² + 1), integrating to ln|x| − (1/2) ln(x² + 1) + C.',
          similar: {
            question: '∫ dx/((x − 1)²(x + 1)) equals:',
            options: [
              '(1/4) ln|(x + 1)/(x − 1)| − 1/(2(x − 1)) + C',
              '(1/4) ln|(x − 1)/(x + 1)| − 1/(2(x − 1)) + C',
              '(1/4) ln|(x + 1)/(x − 1)| + 1/(2(x − 1)) + C',
              '(1/2) ln|(x + 1)/(x − 1)| − 1/(x − 1) + C',
            ],
            answer: '(1/4) ln|(x + 1)/(x − 1)| − 1/(2(x − 1)) + C',
            solution:
              'Write A/(x − 1) + B/(x − 1)² + C/(x + 1). x = 1 ⇒ B = 1/2; x = −1 ⇒ C = 1/4; x² coefficient: A + C = 0 ⇒ A = −1/4. Integral = −(1/4) ln|x − 1| − 1/(2(x − 1)) + (1/4) ln|x + 1| + C.',
          },
        },
      ],
    },
    {
      name: 'Integration by Parts',
      theory:
        'For a product of two functions, ==∫ u v dx = u∫v dx − ∫[u′ ∫v dx] dx==. Choose u (the function to be differentiated) by the ==ILATE== order - Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential - whichever comes first is u. Single functions like ln x or tan⁻¹x are integrated by parts with 1 as the second function: ∫ ln x dx = x ln x − x + C.\n\nThe most important special result in JEE is ==∫ eˣ[f(x) + f′(x)] dx = eˣ f(x) + C==. Rewrite the integrand so that it splits into some f(x) plus its derivative; for example (1 + x ln x)/x = ln x + 1/x, so ∫ eˣ (1 + x ln x)/x dx = eˣ ln x + C.\n\nWhen parts returns the original integral (as with eᵃˣ sin bx), apply parts twice and solve for the integral: ==∫ eᵃˣ sin bx dx = eᵃˣ(a sin bx − b cos bx)/(a² + b²) + C== and ∫ eᵃˣ cos bx dx = eᵃˣ(a cos bx + b sin bx)/(a² + b²) + C.',
      keyPoints: [
        'ILATE decides which function to differentiate.',
        '==eˣ(f + f′)== pattern: look for a function and its derivative added together.',
        '∫ ln x dx = x ln x − x + C; ∫ tan⁻¹x dx = x tan⁻¹x − (1/2) ln(1 + x²) + C.',
        'Cyclic integrals (eᵃˣ sin bx): use parts twice and solve the equation.',
      ],
      formulas: [
        '∫ u v dx = u∫v dx − ∫(u′∫v dx) dx',
        '∫ eˣ[f(x) + f′(x)] dx = eˣ f(x) + C',
        '∫ eᵃˣ sin bx dx = eᵃˣ(a sin bx − b cos bx)/(a² + b²) + C',
        '∫ eᵃˣ cos bx dx = eᵃˣ(a cos bx + b sin bx)/(a² + b²) + C',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - eˣ(f + f′) pattern, most years',
        question: 'Evaluate ∫ eˣ (1 + sin x)/(1 + cos x) dx.',
        approach: [
          'Use half-angle forms: 1 + cos x = 2cos²(x/2), sin x = 2 sin(x/2) cos(x/2).',
          '(1 + sin x)/(1 + cos x) = (1/2)sec²(x/2) + tan(x/2).',
          'With f(x) = tan(x/2), f′(x) = (1/2)sec²(x/2), so the integrand is eˣ[f + f′].',
          'Hence the integral is eˣ tan(x/2) + C.',
        ],
        answer: 'eˣ tan(x/2) + C',
      },
      questions: [
        {
          question: '∫ x eˣ dx equals:',
          options: ['eˣ(x − 1) + C', 'eˣ(x + 1) + C', 'x²eˣ/2 + C', 'xeˣ + C'],
          answer: 'eˣ(x − 1) + C',
          difficulty: 'Easy',
          hint: 'Take x as u (algebraic comes before exponential in ILATE).',
          solution: '∫ x eˣ dx = x eˣ − ∫ 1 · eˣ dx = x eˣ − eˣ + C = eˣ(x − 1) + C.',
          similar: {
            question: '∫ x cos x dx equals:',
            options: ['x sin x + cos x + C', 'x sin x − cos x + C', '−x sin x + cos x + C', 'x² sin x/2 + C'],
            answer: 'x sin x + cos x + C',
            solution: '∫ x cos x dx = x sin x − ∫ sin x dx = x sin x + cos x + C.',
          },
        },
        {
          question: '∫ ln x dx equals:',
          options: ['x ln x − x + C', 'x ln x + x + C', '1/x + C', '(ln x)²/2 + C'],
          answer: 'x ln x − x + C',
          difficulty: 'Medium',
          hint: 'Write it as ∫ ln x · 1 dx and take ln x as u.',
          solution: '∫ ln x · 1 dx = x ln x − ∫ x · (1/x) dx = x ln x − x + C.',
          similar: {
            question: '∫ x ln x dx equals:',
            options: ['(x²/2) ln x − x²/4 + C', '(x²/2) ln x + x²/4 + C', 'x² ln x − x²/2 + C', '(x²/2) ln x − x²/2 + C'],
            answer: '(x²/2) ln x − x²/4 + C',
            solution: 'u = ln x, ∫x dx = x²/2. Integral = (x²/2) ln x − ∫ (x²/2)(1/x) dx = (x²/2) ln x − x²/4 + C.',
          },
        },
        {
          question: '∫ eˣ (1 + x ln x)/x dx equals:',
          options: ['eˣ ln x + C', 'eˣ/x + C', 'eˣ(ln x + 1/x) + C', 'x eˣ ln x + C'],
          answer: 'eˣ ln x + C',
          difficulty: 'Hard',
          hint: 'Split (1 + x ln x)/x into two terms - is one the derivative of the other?',
          solution: '(1 + x ln x)/x = ln x + 1/x. With f(x) = ln x, f′(x) = 1/x, so the integrand is eˣ[f + f′] and the integral is eˣ ln x + C.',
          similar: {
            question: '∫ eˣ (x − 1)/x² dx equals:',
            options: ['eˣ/x + C', 'eˣ/x² + C', '−eˣ/x + C', 'eˣ ln x + C'],
            answer: 'eˣ/x + C',
            solution: '(x − 1)/x² = 1/x − 1/x². With f(x) = 1/x, f′(x) = −1/x², so the integral is eˣ/x + C.',
          },
        },
      ],
    },
  ],
};
