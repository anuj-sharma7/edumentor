import type { StudyChapter } from '../types';

export const threeDimensionalGeometry: StudyChapter = {
  name: 'Three Dimensional Geometry',
  subject: 'Mathematics',
  classLevel: 12,
  summary:
    'Lines and planes in space: direction cosines, equations of lines and planes, angles, distances, shortest distance between skew lines, and images/feet of perpendiculars. A high-weightage JEE Main chapter (usually two questions) that rewards clean vector methods.',
  mostRepeated: [
    'Shortest distance between skew lines = ==|(a₂ − a₁) · (b₁ × b₂)|/|b₁ × b₂|==; lines intersect iff this is 0.',
    'Distance of (x₁, y₁, z₁) from ax + by + cz + d = 0 is ==|ax₁ + by₁ + cz₁ + d|/√(a² + b² + c²)==.',
    'Image of a point in a plane: ==(x − x₁)/a = (y − y₁)/b = (z − z₁)/c = −2(ax₁ + by₁ + cz₁ + d)/(a² + b² + c²)== (use −1 instead of −2 for the foot).',
    'Plane through the line of intersection of P₁ = 0 and P₂ = 0: ==P₁ + λP₂ = 0==.',
    'Angle between a line and a plane uses ==sin φ== = |b · n|/(|b||n|), not cos.',
    'Direction cosines satisfy l² + m² + n² = 1, so sin²α + sin²β + sin²γ = 2.',
    'Distance between parallel planes ax + by + cz + d₁ = 0 and ax + by + cz + d₂ = 0 is |d₁ − d₂|/√(a² + b² + c²).',
  ],
  topics: [
    {
      name: 'Direction Cosines and Direction Ratios',
      theory:
        'If a line makes angles α, β, γ with the positive x-, y-, z-axes, its ==direction cosines (DCs) are l = cos α, m = cos β, n = cos γ== and they satisfy ==l² + m² + n² = 1==. Any three numbers a, b, c proportional to l, m, n are direction ratios (DRs); to get DCs divide by √(a² + b² + c²).\n\nThe DRs of the line through (x₁, y₁, z₁) and (x₂, y₂, z₂) are x₂ − x₁, y₂ − y₁, z₂ − z₁. The projections of a segment of length r on the axes are rl, rm, rn, so the length is the square root of the sum of the squared projections.\n\nThe angle θ between two lines with DCs (l₁, m₁, n₁) and (l₂, m₂, n₂) is given by ==cos θ = |l₁l₂ + m₁m₂ + n₁n₂|==. Lines are perpendicular iff a₁a₂ + b₁b₂ + c₁c₂ = 0 and parallel iff a₁/a₂ = b₁/b₂ = c₁/c₂. Squaring and adding identities give sin²α + sin²β + sin²γ = 2 and cos 2α + cos 2β + cos 2γ = −1.',
      keyPoints: [
        '==l² + m² + n² = 1== for direction cosines (not for direction ratios).',
        'DCs from DRs: divide by √(a² + b² + c²).',
        'Perpendicular lines ⇔ a₁a₂ + b₁b₂ + c₁c₂ = 0.',
        'sin²α + sin²β + sin²γ = 2; cos 2α + cos 2β + cos 2γ = −1.',
        'A body diagonal of a cube has DCs ±1/√3 each.',
      ],
      formulas: [
        'l² + m² + n² = 1',
        'l = a/√(a² + b² + c²), etc.',
        'cos θ = |a₁a₂ + b₁b₂ + c₁c₂|/(√(a₁² + b₁² + c₁²)√(a₂² + b₂² + c₂²))',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - classic DC identity',
        question: 'A line makes angles α, β, γ, δ with the four body diagonals of a cube. Find cos²α + cos²β + cos²γ + cos²δ.',
        approach: [
          'Take the cube with edges along the axes; the diagonals have DRs (1, 1, 1), (−1, 1, 1), (1, −1, 1), (1, 1, −1), each divided by √3.',
          'For a line with DCs (l, m, n): cos α = |l + m + n|/√3, and similarly for the others.',
          'Sum of squares = [(l + m + n)² + (−l + m + n)² + (l − m + n)² + (l + m − n)²]/3 = 4(l² + m² + n²)/3.',
        ],
        answer: '4/3',
      },
      questions: [
        {
          question: 'The direction cosines of a line with direction ratios 2, −1, 2 are:',
          options: ['2/3, −1/3, 2/3', '2, −1, 2', '2/9, −1/9, 2/9', '1/3, −2/3, 1/3'],
          answer: '2/3, −1/3, 2/3',
          difficulty: 'Easy',
          hint: 'Divide each DR by √(a² + b² + c²).',
          solution: '√(4 + 1 + 4) = 3, so DCs are 2/3, −1/3, 2/3.',
          similar: {
            question: 'The direction cosines of a line with direction ratios 6, 2, 3 are:',
            options: ['6/7, 2/7, 3/7', '6/11, 2/11, 3/11', '6, 2, 3', '3/7, 2/7, 6/7'],
            answer: '6/7, 2/7, 3/7',
            solution: '√(36 + 4 + 9) = 7, so DCs are 6/7, 2/7, 3/7.',
          },
        },
        {
          question: 'If a line makes angles α, β, γ with the coordinate axes, then sin²α + sin²β + sin²γ equals:',
          options: ['2', '1', '3', '0'],
          answer: '2',
          difficulty: 'Medium',
          hint: 'Write sin² = 1 − cos² and use l² + m² + n² = 1.',
          solution: 'Sum = 3 − (cos²α + cos²β + cos²γ) = 3 − 1 = 2.',
          similar: {
            question: 'If a line makes angles α, β, γ with the coordinate axes, then cos 2α + cos 2β + cos 2γ equals:',
            options: ['−1', '1', '0', '3'],
            answer: '−1',
            solution: 'cos 2α = 2cos²α − 1. Sum = 2(1) − 3 = −1.',
          },
        },
        {
          question: 'The direction cosines of two lines satisfy l + m + n = 0 and l² + m² − n² = 0. The angle between the lines is:',
          options: ['π/3', 'π/2', 'π/4', 'π/6'],
          answer: 'π/3',
          difficulty: 'Hard',
          hint: 'Substitute n = −(l + m) into the second equation.',
          solution:
            'l² + m² = (l + m)² ⇒ 2lm = 0. If l = 0: m = −n ⇒ DCs (0, 1/√2, −1/√2). If m = 0: l = −n ⇒ (1/√2, 0, −1/√2). cos θ = 0 + 0 + 1/2 = 1/2 ⇒ θ = π/3.',
          similar: {
            question: 'The direction cosines of two lines satisfy 2l + 2m − n = 0 and lm + mn + nl = 0. The angle between the lines is:',
            options: ['π/2', 'π/3', 'π/4', 'π/6'],
            answer: 'π/2',
            solution:
              'n = 2(l + m) ⇒ lm + 2(l + m)² = 0 ⇒ 2l² + 5lm + 2m² = 0 ⇒ (2l + m)(l + 2m) = 0. DRs: (1, −2, −2) and (−2, 1, −2). Dot = −2 − 2 + 4 = 0 ⇒ π/2.',
          },
        },
      ],
    },
    {
      name: 'Equation of a Line in Space',
      theory:
        'A line through the point A (position vector a) parallel to vector b has vector equation ==r = a + λb==. In Cartesian (symmetric) form, through (x₁, y₁, z₁) with DRs a, b, c: ==(x − x₁)/a = (y − y₁)/b = (z − z₁)/c==. Through two points, use b = (x₂ − x₁, y₂ − y₁, z₂ − z₁).\n\nThe ==general point== of the line is (x₁ + aλ, y₁ + bλ, z₁ + cλ); this parametric form is the workhorse for finding points at a given distance, intersections and feet of perpendiculars.\n\nBefore reading DRs, make sure the coefficient of x, y, z in each numerator is exactly +1. For example 6x − 2 = 3y + 1 = 2z − 2 is rewritten as (x − 1/3)/(1/6) = (y + 1/3)/(1/3) = (z − 1)/(1/2), so the DRs are 1, 2, 3. A line can also be given as the intersection of two planes; its direction is n₁ × n₂.',
      keyPoints: [
        '==r = a + λb==: a point plus a multiple of the direction.',
        'Make coefficients of x, y, z equal to 1 before reading DRs.',
        'General point (x₁ + aλ, y₁ + bλ, z₁ + cλ) - use it everywhere.',
        'Line of intersection of two planes has direction n₁ × n₂.',
      ],
      formulas: [
        'r = a + λb',
        '(x − x₁)/a = (y − y₁)/b = (z − z₁)/c',
        '(x − x₁)/(x₂ − x₁) = (y − y₁)/(y₂ − y₁) = (z − z₁)/(z₂ − z₁)',
      ],
      diagram: 'line-plane-3d',
      diagramCaption: 'A line r = a + λb through a fixed point A in the direction of b.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - line of intersection of planes',
        question: 'Find the symmetric form of the line of intersection of the planes x + y + z = 1 and 2x − y + z = 3.',
        approach: [
          'Direction = n₁ × n₂ = (1, 1, 1) × (2, −1, 1) = (1 + 1, 2 − 1, −1 − 2) = (2, 1, −3).',
          'A point on both planes: put z = 0, then x + y = 1 and 2x − y = 3 ⇒ x = 4/3, y = −1/3.',
          'Line: (x − 4/3)/2 = (y + 1/3)/1 = z/(−3).',
        ],
        answer: '(x − 4/3)/2 = (y + 1/3)/1 = z/(−3)',
      },
      questions: [
        {
          question: 'The Cartesian equation of the line through (1, 2, 3) parallel to 2î − ĵ + 4k̂ is:',
          options: [
            '(x − 1)/2 = (y − 2)/(−1) = (z − 3)/4',
            '(x − 2)/1 = (y + 1)/2 = (z − 4)/3',
            '(x + 1)/2 = (y + 2)/(−1) = (z + 3)/4',
            '(x − 1)/2 = (y − 2)/1 = (z − 3)/4',
          ],
          answer: '(x − 1)/2 = (y − 2)/(−1) = (z − 3)/4',
          difficulty: 'Easy',
          hint: 'Point goes in the numerators (with minus signs), direction in the denominators.',
          solution: 'Using (x − x₁)/a = (y − y₁)/b = (z − z₁)/c with (1, 2, 3) and (2, −1, 4).',
          similar: {
            question: 'The Cartesian equation of the line through (2, −1, 0) and (5, 1, 6) is:',
            options: [
              '(x − 2)/3 = (y + 1)/2 = z/6',
              '(x + 2)/3 = (y − 1)/2 = z/6',
              '(x − 2)/5 = (y + 1)/1 = z/6',
              '(x − 2)/3 = (y + 1)/2 = (z − 6)/6',
            ],
            answer: '(x − 2)/3 = (y + 1)/2 = z/6',
            solution: 'DRs = (5 − 2, 1 + 1, 6 − 0) = (3, 2, 6), through (2, −1, 0).',
          },
        },
        {
          question: 'The direction ratios of the line 6x − 2 = 3y + 1 = 2z − 2 are proportional to:',
          options: ['1, 2, 3', '6, 3, 2', '2, 3, 6', '3, 2, 1'],
          answer: '1, 2, 3',
          difficulty: 'Medium',
          hint: 'Rewrite each part as (x − x₁)/a with the coefficient of x equal to 1.',
          solution: '6(x − 1/3) = 3(y + 1/3) = 2(z − 1) ⇒ (x − 1/3)/(1/6) = (y + 1/3)/(1/3) = (z − 1)/(1/2). DRs 1/6, 1/3, 1/2 ∝ 1, 2, 3.',
          similar: {
            question: 'The direction ratios of the line (1 − x)/2 = (y − 3)/4 = (2z + 1)/6 are:',
            options: ['−2, 4, 3', '2, 4, 6', '2, 4, 3', '−2, 4, 6'],
            answer: '−2, 4, 3',
            solution: '(x − 1)/(−2) = (y − 3)/4 = (z + 1/2)/3, so the DRs are −2, 4, 3.',
          },
        },
        {
          question: 'One point on the line (x + 2)/3 = (y + 1)/2 = (z − 3)/2 at distance 3√2 from (1, 2, 3) is:',
          options: ['(−2, −1, 3)', '(1, 1, 5)', '(4, 3, 7)', '(1, 2, 3)'],
          answer: '(−2, −1, 3)',
          difficulty: 'Hard',
          hint: 'Take the general point (3λ − 2, 2λ − 1, 2λ + 3) and set its distance from (1, 2, 3) to 3√2.',
          solution:
            '(3λ − 3)² + (2λ − 3)² + (2λ)² = 18 ⇒ 17λ² − 30λ = 0 ⇒ λ = 0 or 30/17. λ = 0 gives (−2, −1, 3); the other point is (56/17, 43/17, 111/17).',
          similar: {
            question: 'One point on the line (x − 1)/2 = (y − 2)/2 = (z − 3)/1 at distance 6 from (1, 2, 3) is:',
            options: ['(5, 6, 5)', '(3, 4, 4)', '(7, 8, 6)', '(5, 6, 3)'],
            answer: '(5, 6, 5)',
            solution: 'General point (1 + 2λ, 2 + 2λ, 3 + λ); distance = 3|λ| = 6 ⇒ λ = ±2. λ = 2 gives (5, 6, 5); λ = −2 gives (−3, −2, 1).',
          },
        },
      ],
    },
    {
      name: 'Angle Between Lines and Shortest Distance',
      theory:
        'The angle between lines with directions b₁ and b₂ is ==cos θ = |b₁ · b₂|/(|b₁||b₂|)==. Two lines in space can be parallel, intersecting, or ==skew== (neither parallel nor intersecting).\n\nFor lines r = a₁ + λb₁ and r = a₂ + μb₂, the shortest distance is ==d = |(a₂ − a₁) · (b₁ × b₂)|/|b₁ × b₂|==, the projection of the joining vector on the common perpendicular. In determinant form the numerator is the 3 × 3 determinant with rows (x₂ − x₁, y₂ − y₁, z₂ − z₁), (a₁, b₁, c₁), (a₂, b₂, c₂). The lines ==intersect (are coplanar) iff this determinant is 0==.\n\nFor parallel lines (b₁ = b₂ = b) the cross product vanishes, so use instead d = |b × (a₂ − a₁)|/|b|.',
      keyPoints: [
        'Angle between lines: use the absolute value so θ is acute.',
        '==SD = |(a₂ − a₁) · (b₁ × b₂)|/|b₁ × b₂|==.',
        'SD = 0 ⇔ lines intersect (coplanar).',
        'Parallel lines: d = |b × (a₂ − a₁)|/|b|.',
      ],
      formulas: [
        'cos θ = |b₁ · b₂|/(|b₁||b₂|)',
        'd = |(a₂ − a₁) · (b₁ × b₂)|/|b₁ × b₂|',
        'd (parallel) = |b × (a₂ − a₁)|/|b|',
      ],
      diagram: 'line-plane-3d',
      diagramCaption: 'The shortest distance between skew lines lies along their common perpendicular.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - almost every year (intersection / shortest distance)',
        question: 'Find k if the lines (x − 1)/2 = (y + 1)/3 = (z − 1)/4 and (x − 3)/1 = (y − k)/2 = z/1 intersect.',
        approach: [
          'a₁ = (1, −1, 1), a₂ = (3, k, 0) ⇒ a₂ − a₁ = (2, k + 1, −1).',
          'Coplanarity determinant with rows (2, k + 1, −1), (2, 3, 4), (1, 2, 1).',
          '= 2(3 − 8) − (k + 1)(2 − 4) − 1(4 − 3) = 2k − 9.',
          'Set 2k − 9 = 0.',
        ],
        answer: 'k = 9/2',
      },
      questions: [
        {
          question: 'The angle between lines with direction ratios (2, 3, 4) and (1, 2, −2) is:',
          options: ['90°', '60°', '45°', '0°'],
          answer: '90°',
          difficulty: 'Easy',
          hint: 'Compute a₁a₂ + b₁b₂ + c₁c₂.',
          solution: '2(1) + 3(2) + 4(−2) = 2 + 6 − 8 = 0 ⇒ perpendicular.',
          similar: {
            question: 'Find k so that the lines (x − 1)/(−3) = (y − 2)/(2k) = (z − 3)/2 and (x − 1)/(3k) = (y − 1)/1 = (z − 6)/(−5) are perpendicular.',
            options: ['−10/7', '10/7', '−7/10', '7/10'],
            answer: '−10/7',
            solution: '(−3)(3k) + (2k)(1) + 2(−5) = 0 ⇒ −7k − 10 = 0 ⇒ k = −10/7.',
          },
        },
        {
          question: 'The angle between lines with direction ratios (1, 1, 2) and (√3 − 1, −√3 − 1, 4) is:',
          options: ['60°', '30°', '45°', '90°'],
          answer: '60°',
          difficulty: 'Medium',
          hint: 'The √3 terms cancel in the dot product.',
          solution: 'Dot = √3 − 1 − √3 − 1 + 8 = 6. Magnitudes √6 and √(4 − 2√3 + 4 + 2√3 + 16) = √24. cos θ = 6/√144 = 1/2 ⇒ 60°.',
          similar: {
            question: 'The angle between lines with direction ratios (5, −12, 13) and (−3, 4, 5) is:',
            options: ['cos⁻¹(1/65)', 'cos⁻¹(2/65)', 'π/2', 'cos⁻¹(1/13)'],
            answer: 'cos⁻¹(1/65)',
            solution: 'Dot = −15 − 48 + 65 = 2. Magnitudes 13√2 and 5√2. cos θ = 2/130 = 1/65.',
          },
        },
        {
          question:
            'Shortest distance between r = (î + 2ĵ + k̂) + λ(î − ĵ + k̂) and r = (2î − ĵ − k̂) + μ(2î + ĵ + 2k̂) is:',
          options: ['3/√2', '3√2', '9', '√2/3'],
          answer: '3/√2',
          difficulty: 'Hard',
          hint: 'Find b₁ × b₂ and dot it with a₂ − a₁.',
          solution: 'a₂ − a₁ = (1, −3, −2). b₁ × b₂ = (−1·2 − 1·1, 1·2 − 1·2, 1·1 + 1·2) = (−3, 0, 3), magnitude 3√2. Dot = −3 + 0 − 6 = −9. d = 9/(3√2) = 3/√2.',
          similar: {
            question:
              'Distance between the parallel lines r = (î + 2ĵ − 4k̂) + λ(2î + 3ĵ + 6k̂) and r = (3î + 3ĵ − 5k̂) + μ(2î + 3ĵ + 6k̂) is:',
            options: ['√293/7', '√293', '293/49', '7/√293'],
            answer: '√293/7',
            solution: 'a₂ − a₁ = (2, 1, −1). b × (a₂ − a₁) = (3·(−1) − 6·1, 6·2 − 2·(−1), 2·1 − 3·2) = (−9, 14, −4), magnitude √293. |b| = 7. d = √293/7.',
          },
        },
      ],
    },
    {
      name: 'Equation of a Plane',
      theory:
        'A plane is fixed by a point and a normal. Through (x₁, y₁, z₁) with normal (a, b, c): ==a(x − x₁) + b(y − y₁) + c(z − z₁) = 0==; in vector form (r − a) · n = 0. The general plane ax + by + cz + d = 0 has normal (a, b, c).\n\nOther forms: ==intercept form x/a + y/b + z/c = 1== (intercepts a, b, c on the axes) and normal form lx + my + nz = p, where (l, m, n) are the DCs of the normal and p is the distance from the origin.\n\nThrough three non-collinear points A, B, C, the normal is ==AB × AC==; equivalently the determinant with rows (x − x₁, y − y₁, z − z₁), (x₂ − x₁, …), (x₃ − x₁, …) equals 0. A plane perpendicular to two given planes has normal n₁ × n₂, and a plane containing a line r = a + λb and a point P has normal b × (P − a).',
      keyPoints: [
        'Plane = point + normal: a(x − x₁) + b(y − y₁) + c(z − z₁) = 0.',
        '==Normal through three points: AB × AC==.',
        'Intercept form x/a + y/b + z/c = 1.',
        'Perpendicular to two planes ⇒ normal = n₁ × n₂.',
        'Always verify the answer by substituting the given points.',
      ],
      formulas: [
        'a(x − x₁) + b(y − y₁) + c(z − z₁) = 0',
        '(r − a) · n = 0, or r · n = d',
        'x/a + y/b + z/c = 1',
        'lx + my + nz = p (normal form)',
      ],
      diagram: 'line-plane-3d',
      diagramCaption: 'A plane is fixed by one point on it and a normal vector n.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - plane perpendicular to two planes',
        question: 'Find the plane through (2, 1, −1) perpendicular to the planes x + 2y + z = 3 and 2x − y + z = 5.',
        approach: [
          'Required normal = n₁ × n₂ = (1, 2, 1) × (2, −1, 1) = (2 + 1, 2 − 1, −1 − 4) = (3, 1, −5).',
          'Plane: 3(x − 2) + (y − 1) − 5(z + 1) = 0.',
          'Simplify: 3x + y − 5z = 12. Check: 6 + 1 + 5 = 12.',
        ],
        answer: '3x + y − 5z = 12',
      },
      questions: [
        {
          question: 'The plane through (1, 2, 3) with normal 2î − ĵ + 3k̂ is:',
          options: ['2x − y + 3z = 9', '2x − y + 3z = 0', 'x + 2y + 3z = 9', '2x − y + 3z = 14'],
          answer: '2x − y + 3z = 9',
          difficulty: 'Easy',
          hint: 'Normal gives the coefficients; the point gives the constant.',
          solution: '2(x − 1) − (y − 2) + 3(z − 3) = 0 ⇒ 2x − y + 3z = 2 − 2 + 9 = 9.',
          similar: {
            question: 'The plane through (0, 1, −1) with normal 3î + 2ĵ − k̂ is:',
            options: ['3x + 2y − z = 3', '3x + 2y − z = 1', '3x + 2y − z = 0', 'x + 2y − z = 3'],
            answer: '3x + 2y − z = 3',
            solution: '3(x − 0) + 2(y − 1) − (z + 1) = 0 ⇒ 3x + 2y − z = 3.',
          },
        },
        {
          question: 'The plane with intercepts 2, −3, 4 on the x-, y-, z-axes is:',
          options: ['6x − 4y + 3z = 12', '6x + 4y + 3z = 12', '2x − 3y + 4z = 1', '6x − 4y + 3z = 24'],
          answer: '6x − 4y + 3z = 12',
          difficulty: 'Medium',
          hint: 'Start from x/a + y/b + z/c = 1 and clear denominators.',
          solution: 'x/2 + y/(−3) + z/4 = 1. Multiply by 12: 6x − 4y + 3z = 12.',
          similar: {
            question: 'The intercepts of the plane 2x + 3y − z = 6 on the x-, y-, z-axes are:',
            options: ['3, 2, −6', '2, 3, −1', '3, 2, 6', '6, 6, 6'],
            answer: '3, 2, −6',
            solution: 'Divide by 6: x/3 + y/2 + z/(−6) = 1.',
          },
        },
        {
          question: 'The plane through (1, 1, 0), (1, 2, 1) and (−2, 2, −1) is:',
          options: ['2x + 3y − 3z = 5', '2x − 3y + 3z = 5', '2x + 3y − 3z = 0', 'x + y − z = 2'],
          answer: '2x + 3y − 3z = 5',
          difficulty: 'Hard',
          hint: 'Normal = AB × AC.',
          solution:
            'AB = (0, 1, 1), AC = (−3, 1, −1). AB × AC = (−1 − 1, −3 − 0, 0 + 3) = (−2, −3, 3) ∝ (2, 3, −3). Through (1, 1, 0): 2x + 3y − 3z = 5. Check (1, 2, 1): 2 + 6 − 3 = 5 and (−2, 2, −1): −4 + 6 + 3 = 5.',
          similar: {
            question: 'The plane through (2, 1, 0), (3, −2, −2) and (3, 1, 7) is:',
            options: ['7x + 3y − z = 17', '7x − 3y + z = 11', '7x + 3y + z = 17', '3x + 7y − z = 13'],
            answer: '7x + 3y − z = 17',
            solution:
              'AB = (1, −3, −2), AC = (1, 0, 7). AB × AC = (−21, −9, 3) ∝ (7, 3, −1). Through (2, 1, 0): 7x + 3y − z = 17. Check (3, −2, −2): 21 − 6 + 2 = 17.',
          },
        },
      ],
    },
    {
      name: 'Angle, Distance and Family of Planes',
      theory:
        'The angle between two planes is the angle between their normals: ==cos θ = |n₁ · n₂|/(|n₁||n₂|)==. The planes are perpendicular iff a₁a₂ + b₁b₂ + c₁c₂ = 0 and parallel iff a₁/a₂ = b₁/b₂ = c₁/c₂.\n\nThe distance of P(x₁, y₁, z₁) from ax + by + cz + d = 0 is ==|ax₁ + by₁ + cz₁ + d|/√(a² + b² + c²)==. For parallel planes ax + by + cz + d₁ = 0 and ax + by + cz + d₂ = 0, the distance is ==|d₁ − d₂|/√(a² + b² + c²)== - but first make the x, y, z coefficients identical (divide 4x + 2y + 4z + 5 = 0 by 2 before comparing with 2x + y + 2z − 8 = 0).\n\nEvery plane through the line of intersection of P₁ = 0 and P₂ = 0 has the form ==P₁ + λP₂ = 0==. One extra condition (passing through a point, perpendicular to a plane, parallel to a line) fixes λ. The sign of ax + by + cz + d tells which side of the plane a point lies on.',
      keyPoints: [
        'Angle between planes = angle between normals (take acute).',
        '==Make coefficients equal before using the parallel-plane distance formula==.',
        'Family through intersection: P₁ + λP₂ = 0.',
        'Same sign of ax + by + cz + d at two points ⇒ same side of the plane.',
      ],
      formulas: [
        'cos θ = |a₁a₂ + b₁b₂ + c₁c₂|/(√(a₁² + b₁² + c₁²)√(a₂² + b₂² + c₂²))',
        'd = |ax₁ + by₁ + cz₁ + d|/√(a² + b² + c²)',
        'd (parallel planes) = |d₁ − d₂|/√(a² + b² + c²)',
        'P₁ + λP₂ = 0',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - angle between planes',
        question: 'Find the angle between the planes 2x − y + z = 6 and x + y + 2z = 7.',
        approach: [
          'Normals n₁ = (2, −1, 1), n₂ = (1, 1, 2).',
          'n₁ · n₂ = 2 − 1 + 2 = 3; |n₁| = |n₂| = √6.',
          'cos θ = 3/6 = 1/2.',
        ],
        answer: '60° (π/3)',
      },
      questions: [
        {
          question: 'Distance of the point (2, 3, −5) from the plane x + 2y − 2z = 9 is:',
          options: ['3', '9', '1', '√3'],
          answer: '3',
          difficulty: 'Easy',
          hint: 'Substitute the point into x + 2y − 2z − 9 and divide by the length of the normal.',
          solution: '|2 + 6 + 10 − 9|/√(1 + 4 + 4) = 9/3 = 3.',
          similar: {
            question: 'Distance of the point (1, 1, 1) from the plane 2x − y + 2z + 3 = 0 is:',
            options: ['2', '6', '3', '1'],
            answer: '2',
            solution: '|2 − 1 + 2 + 3|/3 = 6/3 = 2.',
          },
        },
        {
          question: 'Distance between the planes 2x + y + 2z = 8 and 4x + 2y + 4z + 5 = 0 is:',
          options: ['7/2', '11/6', '21/2', '5/2'],
          answer: '7/2',
          difficulty: 'Medium',
          hint: 'Divide the second equation by 2 first.',
          solution: 'Planes: 2x + y + 2z − 8 = 0 and 2x + y + 2z + 5/2 = 0. d = |−8 − 5/2|/3 = (21/2)/3 = 7/2.',
          similar: {
            question: 'Distance between the planes x + 2y − 2z + 1 = 0 and 2x + 4y − 4z + 5 = 0 is:',
            options: ['1/2', '7/6', '3/2', '1/6'],
            answer: '1/2',
            solution: 'Second plane: x + 2y − 2z + 5/2 = 0. d = |1 − 5/2|/3 = (3/2)/3 = 1/2.',
          },
        },
        {
          question: 'The plane through the line of intersection of x + y + z = 1 and 2x + 3y + 4z = 5, perpendicular to x − y + z = 0, is:',
          options: ['x − z + 2 = 0', 'x + z − 2 = 0', 'x − y + 2 = 0', '2x − z + 1 = 0'],
          answer: 'x − z + 2 = 0',
          difficulty: 'Hard',
          hint: 'Write (x + y + z − 1) + λ(2x + 3y + 4z − 5) = 0 and impose the perpendicularity of normals.',
          solution:
            'Normal (1 + 2λ, 1 + 3λ, 1 + 4λ) · (1, −1, 1) = 1 + 3λ = 0 ⇒ λ = −1/3. Multiply by 3: 3(x + y + z − 1) − (2x + 3y + 4z − 5) = x − z + 2 = 0.',
          similar: {
            question: 'The plane through the line of intersection of 3x − y + 2z − 4 = 0 and x + y + z − 2 = 0 and the point (2, 2, 1) is:',
            options: ['7x − 5y + 4z − 8 = 0', '7x + 5y + 4z − 32 = 0', 'x − y + z − 1 = 0', '4x − 5y + 7z − 5 = 0'],
            answer: '7x − 5y + 4z − 8 = 0',
            solution:
              '(3x − y + 2z − 4) + λ(x + y + z − 2) = 0 at (2, 2, 1): 2 + 3λ = 0 ⇒ λ = −2/3. Multiply by 3: 9x − 3y + 6z − 12 − 2x − 2y − 2z + 4 = 7x − 5y + 4z − 8 = 0.',
          },
        },
      ],
    },
    {
      name: 'Line and Plane: Intersection, Angle, Foot and Image',
      theory:
        'The angle φ between a line with direction b and a plane with normal n is the complement of the angle between b and n, so ==sin φ = |b · n|/(|b||n|)==. The line is ==parallel to the plane iff b · n = 0== (and lies in it if, in addition, one of its points satisfies the plane equation); it is perpendicular to the plane iff b ∥ n.\n\nTo find where a line meets a plane, substitute the general point (x₁ + aλ, y₁ + bλ, z₁ + cλ) into the plane equation and solve for λ.\n\nFor the foot and image of P(x₁, y₁, z₁) in the plane ax + by + cz + d = 0, move along the normal: ==(x − x₁)/a = (y − y₁)/b = (z − z₁)/c = −k(ax₁ + by₁ + cz₁ + d)/(a² + b² + c²)== with k = 1 for the foot and k = 2 for the image. The foot is the midpoint of P and its image. The foot of the perpendicular from a point to a line is found by making PQ · b = 0 for the general point Q of the line.',
      keyPoints: [
        '==Line-plane angle uses sin==, not cos.',
        'b · n = 0 ⇒ line parallel to plane (or lying in it).',
        'Image formula uses −2, foot formula uses −1.',
        'Foot of perpendicular is the midpoint of the point and its image.',
      ],
      formulas: [
        'sin φ = |b · n|/(|b||n|)',
        '(x − x₁)/a = (y − y₁)/b = (z − z₁)/c = −(ax₁ + by₁ + cz₁ + d)/(a² + b² + c²) (foot)',
        '(x − x₁)/a = (y − y₁)/b = (z − z₁)/c = −2(ax₁ + by₁ + cz₁ + d)/(a² + b² + c²) (image)',
      ],
      diagram: 'line-plane-3d',
      diagramCaption: 'A line meeting a plane; the foot of the perpendicular and the image lie along the normal.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - intersection point then distance',
        question:
          'Find the distance of the point (−1, −5, −10) from the point of intersection of the line (x − 2)/3 = (y + 1)/4 = (z − 2)/12 and the plane x − y + z = 5.',
        approach: [
          'General point: (3λ + 2, 4λ − 1, 12λ + 2).',
          'Substitute: (3λ + 2) − (4λ − 1) + (12λ + 2) = 5 ⇒ 11λ + 5 = 5 ⇒ λ = 0, giving (2, −1, 2).',
          'Distance from (−1, −5, −10) = √(3² + 4² + 12²) = √169.',
        ],
        answer: '13',
      },
      questions: [
        {
          question: 'The line (x − 1)/2 = (y − 2)/3 = (z − 3)/4 and the plane 2x + 3y + 4z = 7 are related as:',
          options: ['Perpendicular to the plane', 'Parallel to the plane', 'Lies in the plane', 'Inclined at 45°'],
          answer: 'Perpendicular to the plane',
          difficulty: 'Easy',
          hint: 'Compare the direction of the line with the normal of the plane.',
          solution: 'Direction (2, 3, 4) equals the normal (2, 3, 4), so the line is along the normal, i.e. perpendicular to the plane.',
          similar: {
            question: 'The line through (1, 2, 3) with direction (1, 1, −1) and the plane x + y + 2z = 5 are related as:',
            options: ['Parallel to the plane (not lying in it)', 'Lies in the plane', 'Perpendicular to the plane', 'Meets the plane at one point'],
            answer: 'Parallel to the plane (not lying in it)',
            solution: 'b · n = 1 + 1 − 2 = 0 ⇒ parallel. The point (1, 2, 3) gives 1 + 2 + 6 = 9 ≠ 5, so the line does not lie in the plane.',
          },
        },
        {
          question: 'The angle between the line with direction ratios (2, 3, 6) and the plane 10x + 2y − 11z = 3 is:',
          options: ['sin⁻¹(8/21)', 'cos⁻¹(8/21)', 'sin⁻¹(40/21)', 'π/2'],
          answer: 'sin⁻¹(8/21)',
          difficulty: 'Medium',
          hint: 'For a line and a plane, sin φ = |b · n|/(|b||n|).',
          solution: 'b · n = 20 + 6 − 66 = −40. |b| = 7, |n| = √(100 + 4 + 121) = 15. sin φ = 40/105 = 8/21.',
          similar: {
            question: 'The angle between the line with direction ratios (2, 2, 1) and the plane x + 2y + 2z = 4 is:',
            options: ['sin⁻¹(8/9)', 'cos⁻¹(8/9)', 'sin⁻¹(1/9)', 'π/4'],
            answer: 'sin⁻¹(8/9)',
            solution: 'b · n = 2 + 4 + 2 = 8; |b| = |n| = 3. sin φ = 8/9.',
          },
        },
        {
          question: 'The image of the point (1, 2, 3) in the plane x + 2y + 4z = 38 is:',
          options: ['(3, 6, 11)', '(2, 4, 7)', '(−1, −2, −5)', '(3, 6, 10)'],
          answer: '(3, 6, 11)',
          difficulty: 'Hard',
          hint: 'Use the image formula with factor −2.',
          solution:
            '(x − 1)/1 = (y − 2)/2 = (z − 3)/4 = −2(1 + 4 + 12 − 38)/21 = −2(−21)/21 = 2. Image = (1 + 2, 2 + 4, 3 + 8) = (3, 6, 11). (The foot (2, 4, 7) is the midpoint.)',
          similar: {
            question: 'The image of the point (1, 3, 4) in the plane 2x − y + z + 3 = 0 is:',
            options: ['(−3, 5, 2)', '(−1, 4, 3)', '(3, 1, 6)', '(5, 1, 6)'],
            answer: '(−3, 5, 2)',
            solution: 'Ratio = −2(2 − 3 + 4 + 3)/6 = −2. Image = (1 − 4, 3 + 2, 4 − 2) = (−3, 5, 2). The foot is (−1, 4, 3).',
          },
        },
      ],
    },
  ],
};
