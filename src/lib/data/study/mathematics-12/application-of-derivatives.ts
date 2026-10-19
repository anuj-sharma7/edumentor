import type { StudyChapter } from '../types';

export const applicationOfDerivatives: StudyChapter = {
  name: 'Application of Derivatives',
  subject: 'Mathematics',
  classLevel: 12,
  summary:
    'Using derivatives to find rates of change, intervals of increase and decrease, tangents and normals, angles between curves, and maxima and minima including optimisation problems. A high-weight chapter in both JEE Main and Advanced.',
  mostRepeated: [
    '==f′(x) > 0 ⇒ strictly increasing==; f′ ≥ 0 with zeros only at isolated points still gives strictly increasing.',
    'Slope of tangent = ==f′(x₀)==; slope of normal = ==−1/f′(x₀)==.',
    'Second derivative test: f′(c) = 0 and ==f″(c) < 0 ⇒ local max, f″(c) > 0 ⇒ local min==; f″(c) = 0 is inconclusive.',
    'Absolute extrema on [a, b]: compare f at ==critical points and endpoints==.',
    'Closed cylinder of given volume has least surface area when ==h = 2r==.',
    'Curves cut orthogonally when ==m₁m₂ = −1== at the point of intersection.',
    'Related rates: differentiate the geometric relation with respect to t (==chain rule==).',
  ],
  topics: [
    {
      name: 'Rate of Change of Quantities',
      theory:
        'If y = f(x), then dy/dx is the rate of change of y with respect to x. When both depend on time t, the ==chain rule== links their rates: ==dy/dt = (dy/dx)(dx/dt)==.\n\nThe method for related-rate problems: (1) draw a figure and name the variables; (2) write the relation between them (area, volume, Pythagoras, similar triangles); (3) if possible eliminate extra variables using a fixed ratio; (4) differentiate with respect to t; (5) substitute the instantaneous values only at the end.\n\nStandard relations: circle A = πr² ⇒ dA/dt = 2πr dr/dt; sphere V = (4/3)πr³ ⇒ ==dV/dt = 4πr² dr/dt==; cone V = (1/3)πr²h. A negative rate means the quantity is decreasing.',
      keyPoints: [
        '==Differentiate first, substitute values later==.',
        'Use similar triangles to remove a variable in cone problems.',
        'Sign of the rate tells whether the quantity increases or decreases.',
      ],
      formulas: ['dy/dt = (dy/dx)(dx/dt)', 'dA/dt = 2πr dr/dt (circle)', 'dV/dt = 4πr² dr/dt (sphere)', 'V = (1/3)πr²h (cone)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - related rates',
        question:
          'A 5 m ladder leans against a wall. Its foot is pulled away at 2 cm/s. How fast is the top sliding down when the foot is 4 m from the wall?',
        approach: [
          'x² + y² = 25 (x = foot distance, y = height).',
          'Differentiate: x dx/dt + y dy/dt = 0.',
          'At x = 4, y = 3: 4 × 2 + 3 dy/dt = 0 ⇒ dy/dt = −8/3 cm/s.',
        ],
        answer: 'The top slides down at 8/3 cm/s',
      },
      questions: [
        {
          question: 'The radius of a circle increases at 0.2 cm/s. The rate of increase of its area when r = 5 cm is:',
          options: ['2π cm²/s', 'π cm²/s', '10π cm²/s', '0.2π cm²/s'],
          answer: '2π cm²/s',
          difficulty: 'Easy',
          hint: 'dA/dt = 2πr dr/dt.',
          solution: 'dA/dt = 2π × 5 × 0.2 = 2π cm²/s.',
          similar: {
            question: 'The radius of a circle increases at 3 cm/s. The rate of increase of its area when r = 4 cm is:',
            options: ['24π cm²/s', '12π cm²/s', '8π cm²/s', '48π cm²/s'],
            answer: '24π cm²/s',
            solution: 'dA/dt = 2π × 4 × 3 = 24π cm²/s.',
          },
        },
        {
          question: 'Air is pumped into a spherical balloon at 900 cm³/s. How fast is the radius increasing when r = 15 cm?',
          options: ['1/π cm/s', 'π cm/s', '4/π cm/s', '1/(4π) cm/s'],
          answer: '1/π cm/s',
          difficulty: 'Medium',
          hint: 'dV/dt = 4πr² dr/dt.',
          solution: '900 = 4π(225) dr/dt ⇒ dr/dt = 900/(900π) = 1/π cm/s.',
          similar: {
            question: 'The side of a cube increases at 3 cm/s. The rate of increase of its volume when the side is 10 cm is:',
            options: ['900 cm³/s', '300 cm³/s', '2700 cm³/s', '90 cm³/s'],
            answer: '900 cm³/s',
            solution: 'V = x³ ⇒ dV/dt = 3x² dx/dt = 3 × 100 × 3 = 900 cm³/s.',
          },
        },
        {
          question:
            'Sand pours at 12 cm³/s and forms a cone whose height is always one-sixth of its base radius. How fast is the height increasing when h = 4 cm?',
          options: ['1/(48π) cm/s', '1/(12π) cm/s', '1/(4π) cm/s', '48π cm/s'],
          answer: '1/(48π) cm/s',
          difficulty: 'Hard',
          hint: 'Use r = 6h to write V in terms of h alone.',
          solution: 'V = (1/3)π(6h)²h = 12πh³ ⇒ dV/dt = 36πh² dh/dt. 12 = 36π(16) dh/dt ⇒ dh/dt = 12/(576π) = 1/(48π) cm/s.',
          similar: {
            question:
              'Water flows at 9π cm³/s into an inverted conical tank whose water-surface radius always equals the depth. How fast is the depth rising when it is 3 cm?',
            options: ['1 cm/s', '3 cm/s', '1/3 cm/s', '9 cm/s'],
            answer: '1 cm/s',
            solution: 'r = h ⇒ V = πh³/3 ⇒ dV/dt = πh² dh/dt. 9π = 9π dh/dt ⇒ dh/dt = 1 cm/s.',
          },
        },
      ],
    },
    {
      name: 'Increasing and Decreasing Functions',
      theory:
        'On an interval, if ==f′(x) > 0 then f is strictly increasing==, and if f′(x) < 0 it is strictly decreasing. If f′(x) ≥ 0 and f′ vanishes only at isolated points (as for x³ at 0), f is still strictly increasing.\n\nTo find the intervals: compute f′(x), factorise it, mark the zeros (and points where f′ is undefined) on a number line, and check the sign of f′ in each part (wavy-curve method).\n\nFor "f is increasing for all x" with a parameter, require ==f′(x) ≥ 0 for all x==. When f′ is a quadratic ax² + bx + c with a > 0, this means discriminant ≤ 0. For trigonometric derivatives, compare the parameter with the maximum or minimum of the trigonometric part.',
      keyPoints: [
        '==Sign of f′ decides monotonicity==; factorise and use a sign chart.',
        'Monotonic on an interval ⇒ one-one there.',
        'Quadratic f′ ≥ 0 for all x ⇔ leading coefficient > 0 and D ≤ 0.',
        'Strictly increasing f: f(x) = f⁻¹(x) ⇔ f(x) = x.',
      ],
      formulas: ['f′ > 0 ⇒ increasing', 'f′ < 0 ⇒ decreasing', 'ax² + bx + c ≥ 0 ∀x ⇔ a > 0, b² − 4ac ≤ 0'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Classic - monotonic cubic',
        question: 'If f(x) = x³ + bx² + cx + d and 0 < b² < c, then on R, f is:',
        approach: [
          'f′(x) = 3x² + 2bx + c, a quadratic with positive leading coefficient.',
          'Discriminant 4b² − 12c = 4(b² − 3c) < 0 since b² < c < 3c.',
          'So f′(x) > 0 for every x.',
        ],
        answer: 'Strictly increasing',
      },
      questions: [
        {
          question: 'f(x) = x² − 4x + 5 is strictly increasing on:',
          options: ['(2, ∞)', '(−∞, 2)', '(−∞, ∞)', '(0, 4)'],
          answer: '(2, ∞)',
          difficulty: 'Easy',
          hint: 'Solve f′(x) > 0.',
          solution: 'f′(x) = 2x − 4 > 0 ⇔ x > 2.',
          similar: {
            question: 'f(x) = 6 − 2x − x² is strictly increasing on:',
            options: ['(−∞, −1)', '(−1, ∞)', '(−∞, 1)', '(1, ∞)'],
            answer: '(−∞, −1)',
            solution: 'f′(x) = −2 − 2x > 0 ⇔ x < −1.',
          },
        },
        {
          question: 'f(x) = 2x³ − 9x² + 12x + 1 is strictly decreasing on:',
          options: ['(1, 2)', '(−∞, 1)', '(2, ∞)', '(0, 1)'],
          answer: '(1, 2)',
          difficulty: 'Medium',
          hint: 'Factorise f′(x).',
          solution: 'f′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2) < 0 ⇔ 1 < x < 2.',
          similar: {
            question: 'f(x) = x³ − 12x is strictly decreasing on:',
            options: ['(−2, 2)', '(−∞, −2)', '(2, ∞)', '(0, 4)'],
            answer: '(−2, 2)',
            solution: 'f′(x) = 3(x² − 4) < 0 ⇔ −2 < x < 2.',
          },
        },
        {
          question: 'f(x) = x³ + ax² + 3x + 1 is increasing on R for:',
          options: ['a ∈ [−3, 3]', 'a ∈ (−∞, −3] ∪ [3, ∞)', 'a ∈ [−√3, √3]', 'a ∈ [0, 3]'],
          answer: 'a ∈ [−3, 3]',
          difficulty: 'Hard',
          hint: 'Require f′(x) = 3x² + 2ax + 3 ≥ 0 for all x.',
          solution:
            'Discriminant ≤ 0: 4a² − 36 ≤ 0 ⇒ −3 ≤ a ≤ 3. At a = ±3, f′ = 3(x ± 1)² vanishes only at one point, so f is still increasing.',
          similar: {
            question: 'f(x) = sin x − ax is decreasing on R for:',
            options: ['a ≥ 1', 'a ≤ 1', 'a ≥ −1', 'a > 2 only'],
            answer: 'a ≥ 1',
            solution: 'f′(x) = cos x − a ≤ 0 for all x ⇔ a ≥ max(cos x) = 1. At a = 1, f′ = 0 only at isolated points.',
          },
        },
      ],
    },
    {
      name: 'Tangents and Normals',
      theory:
        'The slope of the tangent to y = f(x) at (x₀, y₀) is ==m = f′(x₀)==. The tangent is y − y₀ = m(x − x₀) and the ==normal== (perpendicular to the tangent) is y − y₀ = −(1/m)(x − x₀).\n\nSpecial cases: if f′(x₀) = 0 the tangent is horizontal (y = y₀) and the normal is vertical; if dx/dy = 0 the tangent is vertical. For parametric curves use m = (dy/dt)/(dx/dt) at the given t.\n\nTypical JEE variations: tangent parallel or perpendicular to a given line (match slopes), tangent or normal passing through an external point (write the general point on the curve, impose the condition, solve for the parameter), and where a tangent meets the curve again (solve the line and curve together; the point of tangency is a ==double root==).',
      keyPoints: [
        '==Normal slope = −1/(tangent slope)==.',
        'Parallel to y = mx + c ⇒ f′(x₀) = m.',
        'For lines through an external point, use a general point (t, f(t)).',
        'A tangent meets a cubic again where the remaining (non-double) root lies.',
      ],
      formulas: ['Tangent: y − y₀ = f′(x₀)(x − x₀)', 'Normal: y − y₀ = −(x − x₀)/f′(x₀)', 'Parametric slope = (dy/dt)/(dx/dt)'],
      diagram: 'tangent-normal',
      diagramCaption: 'The tangent and the normal at a point on a curve are perpendicular.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - normal through an external point',
        question: 'The equation of the normal to the curve x² = 4y which passes through (1, 2) is:',
        approach: [
          'General point (2t, t²); slope of tangent dy/dx = x/2 = t, so normal slope is −1/t.',
          'Normal: y − t² = −(1/t)(x − 2t). Put (1, 2): 2 − t² = −(1 − 2t)/t ⇒ t³ = 1 ⇒ t = 1.',
          'Point (2, 1), slope −1: y − 1 = −(x − 2).',
        ],
        answer: 'x + y = 3',
      },
      questions: [
        {
          question: 'The slope of the tangent to y = x³ − x at x = 2 is:',
          options: ['11', '6', '12', '10'],
          answer: '11',
          difficulty: 'Easy',
          hint: 'Evaluate dy/dx at x = 2.',
          solution: 'dy/dx = 3x² − 1 = 12 − 1 = 11.',
          similar: {
            question: 'The slope of the tangent to y = x² + 3x at x = 1 is:',
            options: ['5', '4', '2', '3'],
            answer: '5',
            solution: 'dy/dx = 2x + 3 = 5.',
          },
        },
        {
          question: 'The equation of the tangent to y = x² at (1, 1) is:',
          options: ['y = 2x − 1', 'y = 2x + 1', 'y = x', 'x + 2y = 3'],
          answer: 'y = 2x − 1',
          difficulty: 'Medium',
          hint: 'Slope = 2x at x = 1.',
          solution: 'm = 2. y − 1 = 2(x − 1) ⇒ y = 2x − 1.',
          similar: {
            question: 'The equation of the normal to y = x² at (1, 1) is:',
            options: ['x + 2y = 3', 'y = 2x − 1', '2x + y = 3', 'x − 2y = −1'],
            answer: 'x + 2y = 3',
            solution: 'Tangent slope 2, so normal slope −1/2: y − 1 = −(x − 1)/2 ⇒ x + 2y = 3.',
          },
        },
        {
          question: 'The tangent to y = x³ at (1, 1) meets the curve again at:',
          options: ['(−2, −8)', '(2, 8)', '(−1, −1)', '(0, −2)'],
          answer: '(−2, −8)',
          difficulty: 'Hard',
          hint: 'Find the tangent, then solve it with y = x³; x = 1 is a double root.',
          solution: 'Slope 3, tangent y = 3x − 2. x³ − 3x + 2 = 0 ⇒ (x − 1)²(x + 2) = 0 ⇒ other point x = −2, y = −8.',
          similar: {
            question: 'The tangent to y = x³ at (2, 8) meets the curve again at:',
            options: ['(−4, −64)', '(−2, −8)', '(4, 64)', '(−1, −1)'],
            answer: '(−4, −64)',
            solution: 'Slope 12, tangent y = 12x − 16. x³ − 12x + 16 = (x − 2)²(x + 4) = 0 ⇒ x = −4, y = −64.',
          },
        },
      ],
    },
    {
      name: 'Angle Between Curves and Orthogonal Curves',
      theory:
        'The angle between two curves at a point of intersection is the angle between their tangents there. If the slopes are m₁ and m₂, ==tan θ = |(m₁ − m₂)/(1 + m₁m₂)|==.\n\nTwo curves ==cut orthogonally== if m₁m₂ = −1 at the intersection, and ==touch each other== if m₁ = m₂ (same tangent). If one tangent is vertical, compare directly with the other.\n\nProcedure: (1) find the intersection point(s) by solving the equations together; (2) find each slope by differentiating (implicitly if needed); (3) apply the formula at that point. In parameter questions such as "x = y² and xy = k cut at right angles", express both slopes at the general intersection point and impose m₁m₂ = −1.',
      keyPoints: [
        '==Orthogonal: m₁m₂ = −1; touching: m₁ = m₂==.',
        'Always find the intersection point first.',
        'y = ae^x and y = be^(−x) are orthogonal iff ab = 1.',
      ],
      formulas: ['tan θ = |(m₁ − m₂)/(1 + m₁m₂)|', 'Orthogonal: m₁m₂ = −1'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - condition for orthogonality',
        question: 'The curves x = y² and xy = k cut at right angles if:',
        approach: [
          'From x = y²: 1 = 2y y′ ⇒ m₁ = 1/(2y). From xy = k: y + xy′ = 0 ⇒ m₂ = −y/x.',
          'm₁m₂ = −1/(2x) = −1 ⇒ x = 1/2 at the intersection.',
          'Intersection: y³ = k, x = k^(2/3) = 1/2 ⇒ k² = 1/8.',
        ],
        answer: '8k² = 1',
      },
      questions: [
        {
          question: 'Two curves with tangent slopes m₁ and m₂ at their common point cut orthogonally if:',
          options: ['m₁m₂ = −1', 'm₁ = m₂', 'm₁ + m₂ = 0', 'm₁m₂ = 1'],
          answer: 'm₁m₂ = −1',
          difficulty: 'Easy',
          hint: 'Orthogonal means the tangents are perpendicular.',
          solution: 'Perpendicular lines (neither vertical) have product of slopes −1.',
          similar: {
            question: 'Two curves with tangent slopes m₁ and m₂ at their common point touch each other if:',
            options: ['m₁ = m₂', 'm₁m₂ = −1', 'm₁ + m₂ = 0', 'm₁m₂ = 1'],
            answer: 'm₁ = m₂',
            solution: 'Touching curves share the same tangent line, so the slopes are equal.',
          },
        },
        {
          question: 'The acute angle between y = x² and y = x³ at (1, 1) is:',
          options: ['tan⁻¹(1/7)', 'tan⁻¹(1/5)', 'π/4', 'tan⁻¹5'],
          answer: 'tan⁻¹(1/7)',
          difficulty: 'Medium',
          hint: 'm₁ = 2x, m₂ = 3x² at x = 1.',
          solution: 'm₁ = 2, m₂ = 3. tan θ = |(3 − 2)/(1 + 6)| = 1/7.',
          similar: {
            question: 'The acute angle between y = x² and y = 2 − x² at (1, 1) is:',
            options: ['tan⁻¹(4/3)', 'tan⁻¹(3/4)', 'π/2', 'tan⁻¹(4/5)'],
            answer: 'tan⁻¹(4/3)',
            solution: 'm₁ = 2, m₂ = −2. tan θ = |(2 − (−2))/(1 − 4)| = 4/3.',
          },
        },
        {
          question: 'The curves y = ae^x and y = be^(−x) (a, b > 0) cut orthogonally if:',
          options: ['ab = 1', 'ab = −1', 'a = b', 'a + b = 1'],
          answer: 'ab = 1',
          difficulty: 'Hard',
          hint: 'Each slope equals ± the common y-value at the intersection.',
          solution:
            'm₁ = ae^x = y and m₂ = −be^(−x) = −y at the common point. m₁m₂ = −y² = −1 ⇒ y² = 1. But y² = (ae^x)(be^(−x)) = ab. So ab = 1.',
          similar: {
            question: 'The acute angle between y² = 4x and x² = 4y at their intersection (4, 4) is:',
            options: ['tan⁻¹(3/4)', 'tan⁻¹(4/3)', 'π/2', 'π/4'],
            answer: 'tan⁻¹(3/4)',
            solution: 'y² = 4x ⇒ m₁ = 2/y = 1/2. x² = 4y ⇒ m₂ = x/2 = 2. tan θ = |(2 − 1/2)/(1 + 1)| = 3/4.',
          },
        },
      ],
    },
    {
      name: 'Local Maxima and Minima',
      theory:
        'f has a ==local maximum== at c if f(c) ≥ f(x) for all x near c, and a local minimum if f(c) ≤ f(x) near c. At such a point (if f is differentiable) ==f′(c) = 0==; points where f′ = 0 or f′ does not exist are called critical points. Not every critical point is an extremum: x³ has f′(0) = 0 but no extremum.\n\n==First derivative test==: if f′ changes from + to − at c, local max; from − to +, local min; no sign change, neither (point of inflection type). ==Second derivative test==: if f′(c) = 0 and f″(c) < 0, local max; f″(c) > 0, local min; if f″(c) = 0 the test fails and you must go back to the first derivative test (e.g. x⁴ at 0 is a minimum).\n\nLocal values need not compare globally: for f(x) = x + 1/x, the ==local maximum −2 is less than the local minimum 2==.',
      keyPoints: [
        '==f′(c) = 0 is necessary, not sufficient==.',
        'f″(c) = 0 ⇒ use the sign change of f′.',
        'Extrema can occur where f′ does not exist (|x| at 0).',
        'A local max value can be smaller than a local min value.',
      ],
      formulas: ['f′(c) = 0, f″(c) < 0 ⇒ local max', 'f′(c) = 0, f″(c) > 0 ⇒ local min'],
      diagram: 'maxima-minima',
      diagramCaption: 'Horizontal tangents at a local maximum and a local minimum.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Classic - parameter from extremum condition',
        question:
          'f(x) = 2x³ − 9ax² + 12a²x + 1 (a > 0) has a local maximum at p and a local minimum at q. If p² = q, then a is:',
        approach: [
          'f′(x) = 6(x² − 3ax + 2a²) = 6(x − a)(x − 2a).',
          'For a > 0, f′ changes + to − at x = a (max) and − to + at x = 2a (min): p = a, q = 2a.',
          'a² = 2a ⇒ a = 2.',
        ],
        answer: '2',
      },
      questions: [
        {
          question: 'The local minimum value of f(x) = x² − 6x + 10 is:',
          options: ['1', '3', '10', '−1'],
          answer: '1',
          difficulty: 'Easy',
          hint: 'Solve f′(x) = 0 and evaluate f there.',
          solution: 'f′(x) = 2x − 6 = 0 ⇒ x = 3; f″ = 2 > 0. f(3) = 9 − 18 + 10 = 1.',
          similar: {
            question: 'The local maximum value of f(x) = −x² + 4x + 1 is:',
            options: ['5', '2', '1', '4'],
            answer: '5',
            solution: 'f′ = −2x + 4 = 0 ⇒ x = 2, f″ < 0. f(2) = −4 + 8 + 1 = 5.',
          },
        },
        {
          question: 'The local maximum value of f(x) = x³ − 3x is:',
          options: ['2', '−2', '0', '1'],
          answer: '2',
          difficulty: 'Medium',
          hint: 'Critical points are x = ±1; use f″.',
          solution: 'f′ = 3x² − 3 = 0 ⇒ x = ±1. f″(−1) = −6 < 0 ⇒ local max at −1: f(−1) = −1 + 3 = 2.',
          similar: {
            question: 'The local minimum value of f(x) = x³ − 12x is:',
            options: ['−16', '16', '−8', '0'],
            answer: '−16',
            solution: 'f′ = 3x² − 12 = 0 ⇒ x = ±2. f″(2) = 12 > 0 ⇒ local min f(2) = 8 − 24 = −16.',
          },
        },
        {
          question: 'For f(x) = x + 1/x (x ≠ 0), which statement is true?',
          options: [
            'Local maximum value −2 is less than local minimum value 2',
            'Local maximum value 2 is greater than local minimum value −2',
            'f has no local extrema',
            'Local maximum and minimum values are both 2',
          ],
          answer: 'Local maximum value −2 is less than local minimum value 2',
          difficulty: 'Hard',
          hint: 'Find critical points and use f″ = 2/x³.',
          solution: 'f′ = 1 − 1/x² = 0 ⇒ x = ±1. f″(1) = 2 > 0 ⇒ local min f(1) = 2; f″(−1) = −2 < 0 ⇒ local max f(−1) = −2.',
          similar: {
            question: 'For f(x) = x⁴, the point x = 0 is a:',
            options: ['Local minimum', 'Local maximum', 'Point of inflection with no extremum', 'Non-critical point'],
            answer: 'Local minimum',
            solution: 'f′(0) = f″(0) = 0, so the second derivative test fails. f′ = 4x³ changes from − to + at 0, so it is a local minimum.',
          },
        },
      ],
    },
    {
      name: 'Absolute Maximum and Minimum on a Closed Interval',
      theory:
        'A continuous function on a closed interval [a, b] always attains an ==absolute (global) maximum and minimum==. They occur either at critical points inside (a, b) or at the ==endpoints==.\n\nProcedure: (1) find all critical points in (a, b) - where f′ = 0 or f′ does not exist; (2) evaluate f at these points and at a and b; (3) the ==largest value is the absolute maximum, the smallest is the absolute minimum==. No derivative test is needed - just compare values.\n\nCommon mistakes are forgetting the endpoints (for f(x) = 2x³ − 15x² + 36x + 1 on [1, 5], the maximum is at the endpoint x = 5) and including critical points that lie outside the interval.',
      keyPoints: [
        '==Always evaluate at endpoints==.',
        'Discard critical points outside [a, b].',
        'For trigonometric functions, list all critical points in the interval carefully.',
      ],
      formulas: ['Absolute max = max{f(a), f(b), f(critical points)}', 'Absolute min = min{f(a), f(b), f(critical points)}'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - closed-interval extrema',
        question: 'The absolute maximum and minimum of f(x) = 2x³ − 15x² + 36x + 1 on [1, 5] are:',
        approach: [
          'f′(x) = 6(x² − 5x + 6) = 6(x − 2)(x − 3); critical points 2 and 3.',
          'f(1) = 24, f(2) = 29, f(3) = 28, f(5) = 56.',
          'Compare all four values.',
        ],
        answer: 'Maximum 56 (at x = 5), minimum 24 (at x = 1)',
      },
      questions: [
        {
          question: 'The absolute maximum of f(x) = x² on [−2, 3] is:',
          options: ['9', '4', '0', '6'],
          answer: '9',
          difficulty: 'Easy',
          hint: 'Check x = −2, 0, 3.',
          solution: 'f(−2) = 4, f(0) = 0, f(3) = 9. Maximum is 9.',
          similar: {
            question: 'The absolute minimum of f(x) = x² on [−2, 3] is:',
            options: ['0', '4', '−4', '9'],
            answer: '0',
            solution: 'Critical point x = 0 gives f(0) = 0, smaller than f(−2) = 4 and f(3) = 9.',
          },
        },
        {
          question: 'The absolute maximum and minimum of f(x) = x³ − 3x on [0, 2] are:',
          options: ['Max = 2, Min = −2', 'Max = 0, Min = −2', 'Max = 2, Min = 0', 'Max = 18, Min = −2'],
          answer: 'Max = 2, Min = −2',
          difficulty: 'Medium',
          hint: 'Only x = 1 is a critical point inside [0, 2].',
          solution: 'f(0) = 0, f(1) = −2, f(2) = 8 − 6 = 2. Max 2, min −2.',
          similar: {
            question: 'The absolute maximum and minimum of f(x) = 4x − x²/2 on [−2, 4.5] are:',
            options: ['Max = 8, Min = −10', 'Max = 7.875, Min = −10', 'Max = 8, Min = 0', 'Max = 10, Min = −8'],
            answer: 'Max = 8, Min = −10',
            solution: 'f′ = 4 − x = 0 ⇒ x = 4. f(−2) = −10, f(4) = 8, f(4.5) = 7.875.',
          },
        },
        {
          question: 'The absolute maximum and minimum of f(x) = sin x + cos x on [0, π] are:',
          options: ['Max = √2, Min = −1', 'Max = √2, Min = −√2', 'Max = 1, Min = −1', 'Max = 2, Min = 0'],
          answer: 'Max = √2, Min = −1',
          difficulty: 'Hard',
          hint: 'The only critical point in [0, π] is x = π/4; do not forget the endpoints.',
          solution: 'f′ = cos x − sin x = 0 ⇒ x = π/4 (5π/4 lies outside). f(0) = 1, f(π/4) = √2, f(π) = −1.',
          similar: {
            question: 'The absolute maximum and minimum of f(x) = 2 sin x + sin 2x on [0, 2π] are:',
            options: ['Max = 3√3/2, Min = −3√3/2', 'Max = 3, Min = −3', 'Max = 3√3/2, Min = 0', 'Max = √3, Min = −√3'],
            answer: 'Max = 3√3/2, Min = −3√3/2',
            solution:
              'f′ = 2cos x + 2cos 2x = 0 ⇒ 2cos²x + cos x − 1 = 0 ⇒ cos x = 1/2 or −1 ⇒ x = π/3, π, 5π/3. f(π/3) = 3√3/2, f(5π/3) = −3√3/2, f(π) = f(0) = f(2π) = 0.',
          },
        },
      ],
    },
    {
      name: 'Optimisation Problems',
      theory:
        'Word problems ask to make a quantity as large or as small as possible under a constraint. Steps: (1) choose variables and write the quantity Q to optimise; (2) use the constraint to ==express Q in one variable==; (3) find the domain of that variable; (4) solve Q′ = 0 and confirm with Q″ or by comparing endpoints.\n\nResults worth remembering: for a fixed sum, the product is greatest when the parts are equal; for a fixed perimeter, the ==square has the largest area==; a closed cylinder of fixed volume has least surface area when ==h = 2r== (height equals diameter), and an open-top cylinder when h = r; an open box from a square sheet of side a is largest when squares of side ==a/6== are cut from the corners.\n\nFor "nearest point on a curve" problems, minimise the square of the distance instead of the distance itself - it has the same minimiser and avoids square roots.',
      keyPoints: [
        '==Reduce to one variable using the constraint==.',
        'Fixed perimeter ⇒ square maximises area; fixed area ⇒ square minimises perimeter.',
        'Closed cylinder, fixed volume ⇒ h = 2r.',
        'Box from square sheet of side a ⇒ cut x = a/6.',
      ],
      formulas: [
        'Cylinder: V = πr²h, S(closed) = 2πr² + 2πrh',
        'Box from square sheet: V = x(a − 2x)²',
        'Fixed sum s ⇒ max product s²/4',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - box and cylinder problems',
        question:
          'Equal squares are cut from the corners of a square tin sheet of side 18 cm and the sides folded up to make an open box. The maximum volume of the box is:',
        approach: [
          'With squares of side x: V = x(18 − 2x)², 0 < x < 9.',
          'V′ = (18 − 2x)² − 4x(18 − 2x) = (18 − 2x)(18 − 6x) = 0 ⇒ x = 3 (x = 9 gives V = 0).',
          'V(3) = 3 × 12 × 12.',
        ],
        answer: '432 cm³',
      },
      questions: [
        {
          question: 'Two positive numbers have sum 20. The maximum value of their product is:',
          options: ['100', '99', '96', '400'],
          answer: '100',
          difficulty: 'Easy',
          hint: 'Write the product as x(20 − x).',
          solution: 'P = 20x − x², P′ = 20 − 2x = 0 ⇒ x = 10. P = 100.',
          similar: {
            question: 'Two positive numbers have sum 16. The maximum value of their product is:',
            options: ['64', '63', '60', '256'],
            answer: '64',
            solution: 'Maximum when both are 8: 8 × 8 = 64.',
          },
        },
        {
          question: 'The maximum area of a rectangle with perimeter 36 cm is:',
          options: ['81 cm²', '72 cm²', '80 cm²', '324 cm²'],
          answer: '81 cm²',
          difficulty: 'Medium',
          hint: 'Sides x and 18 − x.',
          solution: 'A = x(18 − x), A′ = 18 − 2x = 0 ⇒ x = 9 (a square). A = 81 cm².',
          similar: {
            question: 'A rectangle has area 64 cm². Its minimum possible perimeter is:',
            options: ['32 cm', '16 cm', '64 cm', '34 cm'],
            answer: '32 cm',
            solution: 'P = 2(x + 64/x), P′ = 2(1 − 64/x²) = 0 ⇒ x = 8 (a square). P = 2(8 + 8) = 32 cm.',
          },
        },
        {
          question: 'A closed right circular cylinder has a fixed volume. Its total surface area is least when:',
          options: ['h = 2r', 'h = r', 'h = r/2', 'h = 4r'],
          answer: 'h = 2r',
          difficulty: 'Hard',
          hint: 'Substitute h = V/(πr²) into S = 2πr² + 2πrh.',
          solution: 'S = 2πr² + 2V/r. S′ = 4πr − 2V/r² = 0 ⇒ V = 2πr³ ⇒ πr²h = 2πr³ ⇒ h = 2r. S″ > 0, so this is a minimum.',
          similar: {
            question: 'An open-top right circular cylinder has a fixed volume. Its surface area is least when:',
            options: ['h = r', 'h = 2r', 'h = r/2', 'h = 3r'],
            answer: 'h = r',
            solution: 'S = πr² + 2πrh = πr² + 2V/r. S′ = 2πr − 2V/r² = 0 ⇒ V = πr³ ⇒ h = r.',
          },
        },
      ],
    },
  ],
};
