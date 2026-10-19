import type { JeeSubject } from './types';

export const mathematics12: JeeSubject = {
  subject: 'Mathematics',
  chapters: [
    {
      name: 'Relations and Functions',
      priority: 'Medium',
      weightage: '1 Q',
      difficulty: 'Moderate',
      overview:
        'Types of relations, one-one/onto functions and composition. Often merged with Class 11 sets & functions questions.',
      importantTopics: [
        { name: 'Equivalence relations', hot: true, note: 'Checking reflexive, symmetric, transitive' },
        { name: 'Number of relations / functions', hot: true, note: 'Counting one-one, onto, symmetric relations' },
        { name: 'One-one, onto & invertibility', note: 'Bijective functions and their inverses' },
        { name: 'Composition of functions', note: 'fog, gof, domain of composite' },
        { name: 'Binary operations (basic)', note: 'Commutative, associative, identity' },
      ],
      theory: [
        {
          heading: 'Relations',
          body:
            'A relation R on A is a subset of A × A. ==Reflexive==: (a, a) ∈ R ∀ a. ==Symmetric==: (a, b) ∈ R ⇒ (b, a) ∈ R. ==Transitive==: (a, b), (b, c) ∈ R ⇒ (a, c) ∈ R. Equivalence = all three; it partitions A into disjoint equivalence classes.',
        },
        {
          heading: 'Types of functions',
          body:
            'One-one (injective): f(x₁) = f(x₂) ⇒ x₁ = x₂ (strictly monotonic functions are one-one). Onto (surjective): range = codomain. Bijective = both; ==only bijective functions are invertible==. For finite sets with |A| = |B| = n, one-one ⇔ onto.',
        },
        {
          heading: 'Counting',
          body:
            'If |A| = m, |B| = n: number of relations from A to B = 2^(mn); functions = n^m; one-one functions = ⁿPₘ (n ≥ m). ==Onto functions (m ≥ n) = Σ (−1)^k ⁿCₖ (n − k)^m==. On a set of n elements: reflexive relations = 2^(n² − n), symmetric = 2^(n(n+1)/2).',
        },
        {
          heading: 'Composition and inverse',
          body:
            '(fog)(x) = f(g(x)); generally ==fog ≠ gof==, but composition is associative. If f and g are bijections, (fog)⁻¹ = g⁻¹of⁻¹. Graph of f⁻¹ is the reflection of f in y = x; f(x) = f⁻¹(x) solutions lie on y = x for increasing f.',
        },
      ],
      keyPoints: [
        'The smallest equivalence relation on A is the identity relation {(a, a)}.',
        '==Number of equivalence relations on a set of n elements = Bell number== (n = 3 → 5).',
        'Empty relation is symmetric and transitive but not reflexive (for non-empty A).',
        'Onto functions from a 4-element set to a 3-element set = 36.',
      ],
      formulas: [
        { label: 'Total relations A → B', expr: '2^(mn)' },
        { label: 'Total functions A → B', expr: 'n^m' },
        { label: 'One-one functions', expr: 'ⁿPₘ = n!/(n − m)!' },
        { label: 'Onto functions', expr: 'Σₖ₌₀ⁿ (−1)^k ⁿCₖ (n − k)^m' },
        { label: 'Reflexive relations on A', expr: '2^(n² − n)' },
        { label: 'Symmetric relations on A', expr: '2^(n(n + 1)/2)' },
      ],
      mistakes: [
        'Checking transitivity on only a few pairs - check every chained pair.',
        'Assuming a function is invertible without checking onto-ness w.r.t. given codomain.',
      ],
      pyqTrend:
        'One question on checking equivalence/minimum elements to add to make a relation equivalent, or counting functions/relations.',
    },
    {
      name: 'Inverse Trigonometric Functions',
      priority: 'Medium',
      weightage: '1 Q',
      difficulty: 'Moderate',
      overview:
        'Principal values, properties and series summation using tan⁻¹ telescoping. Short chapter with quick questions.',
      importantTopics: [
        { name: 'Principal value branches', hot: true, note: 'Domain and range of each function' },
        { name: 'Sum/difference formulas', hot: true, note: 'tan⁻¹x + tan⁻¹y with conditions' },
        { name: 'Telescoping series with tan⁻¹', hot: true, note: 'Σ tan⁻¹(1/(1 + r + r²))' },
        { name: 'sin⁻¹(sin x) type graphs', note: 'Simplifying outside principal range' },
        { name: 'Equations involving inverse trig', note: 'Converting all to one function' },
      ],
      theory: [
        {
          heading: 'Principal values',
          body:
            'sin⁻¹: [−1, 1] → ==[−π/2, π/2]==; cos⁻¹: [−1, 1] → ==[0, π]==; tan⁻¹: ℝ → (−π/2, π/2); cot⁻¹: ℝ → (0, π); sec⁻¹: |x| ≥ 1 → [0, π] − {π/2}; cosec⁻¹: |x| ≥ 1 → [−π/2, π/2] − {0}.',
        },
        {
          heading: 'Key identities',
          body:
            '==sin⁻¹x + cos⁻¹x = π/2==, tan⁻¹x + cot⁻¹x = π/2, sec⁻¹x + cosec⁻¹x = π/2. sin⁻¹(−x) = −sin⁻¹x, tan⁻¹(−x) = −tan⁻¹x, but ==cos⁻¹(−x) = π − cos⁻¹x== and cot⁻¹(−x) = π − cot⁻¹x. tan⁻¹(1/x) = cot⁻¹x for x > 0, and cot⁻¹x − π for x < 0.',
        },
        {
          heading: 'Sum formulas',
          body:
            'tan⁻¹x + tan⁻¹y = tan⁻¹((x + y)/(1 − xy)) if xy < 1; add π if xy > 1 and x, y > 0. tan⁻¹x − tan⁻¹y = tan⁻¹((x − y)/(1 + xy)). Telescoping: write the general term as ==tan⁻¹((b − a)/(1 + ab)) = tan⁻¹b − tan⁻¹a==, e.g. tan⁻¹(1/(1 + r + r²)) = tan⁻¹(r + 1) − tan⁻¹r.',
        },
        {
          heading: 'Double angle forms',
          body:
            '2tan⁻¹x = sin⁻¹(2x/(1 + x²)) for |x| ≤ 1; = cos⁻¹((1 − x²)/(1 + x²)) for x ≥ 0; = tan⁻¹(2x/(1 − x²)) for |x| < 1. Outside these ranges extra ±π terms appear - always check the interval.',
        },
      ],
      keyPoints: [
        '==sin⁻¹(sin x) = x only for x ∈ [−π/2, π/2]==; otherwise shift by multiples of π.',
        'sin(sin⁻¹x) = x always for x ∈ [−1, 1].',
        'Substitute x = tanθ, sinθ, cosθ to simplify complex expressions.',
      ],
      formulas: [
        { label: 'Complementary', expr: 'sin⁻¹x + cos⁻¹x = π/2' },
        { label: 'Negative arguments', expr: 'cos⁻¹(−x) = π − cos⁻¹x ,  sin⁻¹(−x) = −sin⁻¹x' },
        { label: 'tan sum', expr: 'tan⁻¹x + tan⁻¹y = tan⁻¹((x + y)/(1 − xy)),  xy < 1' },
        { label: 'tan difference', expr: 'tan⁻¹x − tan⁻¹y = tan⁻¹((x − y)/(1 + xy))' },
        { label: 'Double angle', expr: '2tan⁻¹x = sin⁻¹(2x/(1 + x²)) = cos⁻¹((1 − x²)/(1 + x²))' },
        { label: 'sin sum', expr: 'sin⁻¹x + sin⁻¹y = sin⁻¹(x√(1 − y²) + y√(1 − x²))' },
      ],
      mistakes: [
        'Applying the tan⁻¹ sum formula without checking xy < 1.',
        'Taking sin⁻¹(sin x) = x outside the principal range.',
      ],
      pyqTrend:
        'Telescoping tan⁻¹ series and simplification of sin⁻¹(sin x)-type expressions are most common.',
    },
    {
      name: 'Matrices',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Easy',
      overview:
        'Matrix algebra, types of matrices, adjoint and inverse. Usually combined with determinants - together they give 2-3 questions.',
      importantTopics: [
        { name: 'Properties of adjoint & inverse', hot: true, note: '|adj A| = |A|^(n−1), adj(adj A)' },
        { name: 'Symmetric / skew-symmetric matrices', hot: true, note: 'Every matrix = symmetric + skew' },
        { name: 'Matrix powers & special matrices', hot: true, note: 'Aⁿ by pattern, idempotent, nilpotent, involutory, orthogonal' },
        { name: 'Matrix multiplication & transpose', note: '(AB)ᵀ = BᵀAᵀ' },
        { name: 'Trace properties', note: 'tr(AB) = tr(BA)' },
      ],
      theory: [
        {
          heading: 'Operations',
          body:
            'Multiplication AB is defined if columns of A = rows of B; ==AB ≠ BA in general==, and AB = O does not imply A = O or B = O. (AB)ᵀ = BᵀAᵀ, (AB)⁻¹ = B⁻¹A⁻¹. tr(A + B) = trA + trB, tr(AB) = tr(BA).',
        },
        {
          heading: 'Special matrices',
          body:
            '==Symmetric==: Aᵀ = A. ==Skew-symmetric==: Aᵀ = −A (diagonal elements zero, determinant of odd order is 0). Every square matrix = ½(A + Aᵀ) + ½(A − Aᵀ). Orthogonal: AAᵀ = I. Idempotent: A² = A. Involutory: A² = I. Nilpotent: Aᵏ = O.',
        },
        {
          heading: 'Adjoint and inverse',
          body:
            'adj A = transpose of the cofactor matrix. ==A(adj A) = (adj A)A = |A| I==. A⁻¹ = adj A/|A| exists iff |A| ≠ 0. For an n × n matrix: ==|adj A| = |A|^(n−1)==, adj(adj A) = |A|^(n−2) A, |adj(adj A)| = |A|^((n−1)²), adj(kA) = k^(n−1) adj A.',
        },
        {
          heading: 'Powers of matrices',
          body:
            'Find A², A³ and spot the pattern, or write A = I + N where N is nilpotent and use binomial expansion (I and N commute). Cayley-Hamilton theorem: every matrix satisfies its characteristic equation |A − λI| = 0 - useful to find A⁻¹ or high powers.',
        },
      ],
      keyPoints: [
        '==|kA| = kⁿ|A|== for an n × n matrix.',
        '|Aᵀ| = |A|, |A⁻¹| = 1/|A|, |AB| = |A||B|.',
        'Number of symmetric matrices of order n with entries from a set of k elements: k^(n(n+1)/2).',
        'If A is skew-symmetric, A² is symmetric; AᵀBA is symmetric if B is symmetric.',
      ],
      formulas: [
        { label: 'Adjoint identity', expr: 'A · adj A = |A| I' },
        { label: 'Inverse', expr: 'A⁻¹ = adj A / |A|' },
        { label: '|adj A|', expr: '|adj A| = |A|^(n − 1)' },
        { label: 'adj(adj A)', expr: 'adj(adj A) = |A|^(n − 2) A' },
        { label: 'Scalar multiple', expr: '|kA| = kⁿ|A| ,  adj(kA) = k^(n−1) adj A' },
        { label: 'Transpose & inverse of product', expr: '(AB)ᵀ = BᵀAᵀ ,  (AB)⁻¹ = B⁻¹A⁻¹' },
        { label: 'Decomposition', expr: 'A = ½(A + Aᵀ) + ½(A − Aᵀ)' },
      ],
      mistakes: [
        'Writing |kA| = k|A|.',
        'Cancelling matrices: AB = AC does not imply B = C unless A is invertible.',
      ],
      pyqTrend:
        'Questions on |adj(adj A)|, determinant of expressions involving A and its inverse, and powers of special matrices are very common.',
    },
    {
      name: 'Determinants',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Properties of determinants and solving linear systems (consistency). The system-of-equations question appears in almost every shift.',
      importantTopics: [
        { name: 'System of linear equations - consistency', hot: true, note: 'Unique / infinite / no solution conditions using Cramer\'s rule' },
        { name: 'Properties & evaluation of determinants', hot: true, note: 'Row operations, factor theorem' },
        { name: 'Area of triangle & collinearity', note: '½|det| of coordinates' },
        { name: 'Differentiation of determinants', note: 'Differentiate row by row' },
        { name: 'Homogeneous systems', note: 'Non-trivial solution iff Δ = 0' },
      ],
      theory: [
        {
          heading: 'Properties',
          body:
            'Interchanging two rows changes sign; two identical/proportional rows ⇒ ==Δ = 0==; multiplying a row by k multiplies Δ by k; adding a multiple of one row to another does not change Δ (R₁ → R₁ + kR₂). A determinant can be split as a sum if a row is a sum of terms.',
        },
        {
          heading: 'Solving linear systems',
          body:
            'For a 3 × 3 system with Δ = det of coefficients and Δ₁, Δ₂, Δ₃ by replacing columns: ==Δ ≠ 0 → unique solution== (x = Δ₁/Δ etc.). If ==Δ = 0 and at least one Δᵢ ≠ 0 → no solution==. If Δ = Δ₁ = Δ₂ = Δ₃ = 0 → infinitely many or no solution (check by back substitution / ranks).',
        },
        {
          heading: 'Homogeneous systems',
          body:
            'AX = O always has the trivial solution. It has ==non-trivial solutions iff Δ = 0==. This is used to find parameter values (λ, k) in many JEE questions.',
        },
        {
          heading: 'Applications',
          body:
            'Area of triangle = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|. Points are collinear iff this determinant is zero. Equation of a line through two points can be written as a 3 × 3 determinant equal to zero.',
        },
      ],
      keyPoints: [
        '==Δ = 0 and all Δᵢ = 0 does NOT guarantee infinite solutions== in 3 variables - check consistency.',
        'Determinant of a skew-symmetric matrix of odd order is zero.',
        'Determinant of a triangular matrix = product of diagonal elements.',
        'Use R₁ → R₁ + R₂ + R₃ when each row/column has the same sum.',
      ],
      formulas: [
        { label: 'Cramer\'s rule', expr: 'x = Δ₁/Δ ,  y = Δ₂/Δ ,  z = Δ₃/Δ' },
        { label: 'Area of triangle', expr: 'Area = ½ |det[[x₁, y₁, 1], [x₂, y₂, 1], [x₃, y₃, 1]]|' },
        { label: 'Product rule', expr: '|AB| = |A||B|' },
        { label: 'Cyclic determinant', expr: 'det[[a,b,c],[b,c,a],[c,a,b]] = −(a³ + b³ + c³ − 3abc)' },
        { label: 'Vandermonde', expr: 'det[[1,1,1],[a,b,c],[a²,b²,c²]] = (a − b)(b − c)(c − a)' },
      ],
      mistakes: [
        'Concluding "infinitely many solutions" from Δ = 0 alone.',
        'Sign errors while expanding along a row (check the (−1)^(i+j) pattern).',
      ],
      pyqTrend:
        'Find λ, μ for which a system has infinite/no solutions - asked in nearly every shift. Integer answers are common.',
    },
    {
      name: 'Continuity and Differentiability',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Checking continuity/differentiability of piecewise, modulus and greatest integer functions, and methods of differentiation.',
      importantTopics: [
        { name: 'Continuity & differentiability of piecewise functions', hot: true, note: 'Finding unknown constants, points of non-differentiability' },
        { name: 'Modulus & greatest integer function', hot: true, note: 'Counting points of discontinuity / non-differentiability' },
        { name: 'Logarithmic & implicit differentiation', note: 'xˣ, (sin x)^cos x, implicit curves' },
        { name: 'Parametric differentiation & second derivative', note: 'd²y/dx² in parametric form' },
        { name: 'Derivatives of inverse trig (by substitution)', note: 'x = tanθ substitutions' },
        { name: 'Rolle\'s & Mean Value Theorem', note: 'Conditions and finding c' },
      ],
      theory: [
        {
          heading: 'Continuity',
          body:
            'f is continuous at a if ==LHL = RHL = f(a)==. Sum, product and composition of continuous functions are continuous. Polynomials, sin, cos, eˣ are continuous everywhere; [x] is discontinuous at every integer; tan x at odd multiples of π/2.',
        },
        {
          heading: 'Differentiability',
          body:
            'f is differentiable at a if ==LHD = RHD== (finite). Differentiability ⇒ continuity, but not conversely (|x| is continuous but not differentiable at 0). Graphically, sharp corners and vertical tangents are non-differentiable points. |f(x)| is non-differentiable where f(x) = 0 and f\'(x) ≠ 0 (sign change).',
        },
        {
          heading: 'Methods of differentiation',
          body:
            'Chain rule: d/dx f(g(x)) = f\'(g(x))g\'(x). ==Logarithmic differentiation== for f(x)^g(x): take ln both sides. Implicit: differentiate both sides treating y as a function of x. Parametric: dy/dx = (dy/dt)/(dx/dt) and ==d²y/dx² = d/dt(dy/dx) ÷ (dx/dt)== - not (d²y/dt²)/(d²x/dt²).',
        },
        {
          heading: 'Mean value theorems',
          body:
            'Rolle\'s theorem: f continuous on [a, b], differentiable on (a, b), f(a) = f(b) ⇒ ∃ c with f\'(c) = 0. ==LMVT==: ∃ c ∈ (a, b) with f\'(c) = (f(b) − f(a))/(b − a) - tangent parallel to chord.',
        },
      ],
      keyPoints: [
        '==Differentiable ⇒ continuous==, not the other way round.',
        'Continuous × discontinuous can be continuous (e.g. x·[x] style at some points) - check case by case.',
        'For max/min-type functions (e.g. max{x, x²}) draw the graph and count corners.',
        'd/dx(xˣ) = xˣ(1 + ln x).',
      ],
      formulas: [
        { label: 'Continuity', expr: 'lim(x→a⁻) f = lim(x→a⁺) f = f(a)' },
        { label: 'Derivative (first principle)', expr: 'f\'(a) = lim(h→0) [f(a + h) − f(a)]/h' },
        { label: 'Log differentiation', expr: 'y = u^v ⇒ y\' = u^v (v\' ln u + v u\'/u)' },
        { label: 'Parametric', expr: 'dy/dx = (dy/dt)/(dx/dt)' },
        { label: 'Inverse trig derivatives', expr: '(sin⁻¹x)\' = 1/√(1 − x²),  (tan⁻¹x)\' = 1/(1 + x²)' },
        { label: 'LMVT', expr: 'f\'(c) = [f(b) − f(a)]/(b − a)' },
      ],
      mistakes: [
        'Assuming continuity implies differentiability.',
        'Computing d²y/dx² as ratio of second derivatives in parametric form.',
      ],
      pyqTrend:
        'Counting points of non-differentiability of |f(x)| or [x]-based functions and finding constants for continuity are asked every session.',
    },
    {
      name: 'Application of Derivatives',
      priority: 'Very High',
      weightage: '2 Qs',
      difficulty: 'Moderate',
      overview:
        'Maxima-minima, monotonicity and tangents/normals. A favourite of both JEE Main and Advanced.',
      importantTopics: [
        { name: 'Maxima & minima', hot: true, note: 'First/second derivative tests, optimisation word problems' },
        { name: 'Monotonicity (increasing/decreasing)', hot: true, note: 'Interval finding, parameter for always increasing' },
        { name: 'Tangents & normals', hot: true, note: 'Equation, angle between curves, length of subtangent' },
        { name: 'Rate of change', note: 'Related rates' },
        { name: 'Approximations & errors', note: 'dy = f\'(x)dx' },
        { name: 'Global max/min on closed interval', note: 'Check critical points and endpoints' },
      ],
      theory: [
        {
          heading: 'Rate of change',
          body:
            'dy/dt = (dy/dx)(dx/dt). Typical problems: ballooning sphere (dV/dt = 4πr² dr/dt), ladder sliding, shadow length. Approximation: ==f(x + Δx) ≈ f(x) + f\'(x)Δx==.',
        },
        {
          heading: 'Tangents and normals',
          body:
            'Slope of tangent at (x₁, y₁) = f\'(x₁). Tangent: y − y₁ = m(x − x₁); normal: y − y₁ = (−1/m)(x − x₁). ==Angle between two curves== = angle between their tangents at the point of intersection: tanθ = |(m₁ − m₂)/(1 + m₁m₂)|; orthogonal if m₁m₂ = −1.',
        },
        {
          heading: 'Monotonicity',
          body:
            'f is increasing on I if ==f\'(x) ≥ 0== on I (with equality only at isolated points), decreasing if f\'(x) ≤ 0. For a parameter, "f increasing for all x" usually means the quadratic f\'(x) has discriminant ≤ 0 and positive leading coefficient. Monotonic functions are one-one - useful for counting roots.',
        },
        {
          heading: 'Maxima and minima',
          body:
            'Critical points: f\'(x) = 0 or undefined. ==First derivative test==: sign change + to − ⇒ local max, − to + ⇒ local min. ==Second derivative test==: f\'\'(c) < 0 ⇒ max, > 0 ⇒ min, = 0 ⇒ inconclusive. On [a, b], the absolute extremes occur at critical points or endpoints - compare all values.',
        },
        {
          heading: 'Standard optimisation results',
          body:
            'Rectangle of given perimeter with max area is a ==square==. Cylinder of max volume in a sphere of radius R has height 2R/√3. Cone of max volume in a sphere has height 4R/3. For a closed cylinder of given volume and min surface area, h = 2r. Use AM ≥ GM as a shortcut when possible.',
        },
      ],
      keyPoints: [
        '==f\'(c) = 0 is necessary but not sufficient== for an extremum (e.g. x³ at 0).',
        'Points of inflection: f\'\'(x) changes sign.',
        'Length of subtangent = |y/(dy/dx)|, subnormal = |y·dy/dx|.',
        'Number of real roots: study sign changes of f at local extrema.',
      ],
      formulas: [
        { label: 'Tangent', expr: 'y − y₁ = f\'(x₁)(x − x₁)' },
        { label: 'Normal', expr: 'y − y₁ = −(x − x₁)/f\'(x₁)' },
        { label: 'Angle between curves', expr: 'tanθ = |(m₁ − m₂)/(1 + m₁m₂)|' },
        { label: 'Approximation', expr: 'f(x + Δx) ≈ f(x) + f\'(x)Δx' },
        { label: 'Second derivative test', expr: 'f\'(c) = 0, f\'\'(c) < 0 ⇒ max;  f\'\'(c) > 0 ⇒ min' },
        { label: 'Subtangent / Subnormal', expr: '|y/y\'| ,  |y·y\'|' },
      ],
      mistakes: [
        'Forgetting to check endpoints for absolute maximum/minimum.',
        'Treating f\'(x) = 0 at a point as automatically an extremum.',
      ],
      pyqTrend:
        'Optimisation word problems, intervals of monotonicity and tangent/normal equations appear every session; Advanced loves multi-concept questions here.',
    },
    {
      name: 'Indefinite Integrals',
      priority: 'High',
      weightage: '1 Q',
      difficulty: 'Moderate',
      overview:
        'Techniques of integration - substitution, by parts and partial fractions. Speed here also decides your speed in definite integrals and differential equations.',
      importantTopics: [
        { name: 'Substitution & standard forms', hot: true, note: '∫dx/(a² ± x²), ∫dx/√(a² − x²) etc.' },
        { name: 'Integration by parts', hot: true, note: 'ILATE, ∫eˣ(f + f\')dx = eˣf' },
        { name: 'Partial fractions', note: 'Linear, repeated and quadratic factors' },
        { name: 'Trigonometric integrals', note: '∫dx/(a + b cos x), sinᵐ cosⁿ' },
        { name: 'Special forms', note: '∫(x² ± 1)/(x⁴ + kx² + 1)dx using x ± 1/x substitution' },
      ],
      theory: [
        {
          heading: 'Basic idea',
          body:
            'Integration is the reverse of differentiation: if F\'(x) = f(x) then ∫f dx = F + C. Learn the ==standard integrals list== thoroughly - nearly every question reduces to one of them after substitution.',
        },
        {
          heading: 'Substitution',
          body:
            'Choose t so that dt appears in the integrand. Trig substitutions: √(a² − x²) → x = a sinθ; √(a² + x²) → x = a tanθ; √(x² − a²) → x = a secθ. For ∫dx/(a + b cos x) use ==t = tan(x/2)== (cos x = (1 − t²)/(1 + t²)).',
        },
        {
          heading: 'Integration by parts',
          body:
            '==∫u v dx = u∫v dx − ∫(u\'∫v dx)dx==. Choose u by ILATE: Inverse trig, Log, Algebraic, Trig, Exponential. Special result: ==∫eˣ[f(x) + f\'(x)]dx = eˣf(x) + C==. Cyclic integrals (∫eᵃˣ sin bx dx) are solved by applying by parts twice.',
        },
        {
          heading: 'Partial fractions',
          body:
            'For a proper rational function factor the denominator: (x − a) → A/(x − a); (x − a)² → A/(x − a) + B/(x − a)²; (x² + bx + c) irreducible → (Ax + B)/(x² + bx + c). If the degree of numerator ≥ denominator, divide first.',
        },
      ],
      keyPoints: [
        '==∫eˣ(f + f\')dx = eˣf + C== - spot this pattern quickly.',
        'For ∫(x² + 1)/(x⁴ + 1)dx divide by x² and put t = x − 1/x.',
        'Always add the constant of integration in indefinite integrals.',
        'For ∫(px + q)/(ax² + bx + c)dx write px + q = A(2ax + b) + B.',
      ],
      formulas: [
        { label: 'Power rule', expr: '∫xⁿ dx = xⁿ⁺¹/(n + 1) + C,  n ≠ −1' },
        { label: '1/(x² + a²)', expr: '∫dx/(x² + a²) = (1/a) tan⁻¹(x/a) + C' },
        { label: '1/(x² − a²)', expr: '∫dx/(x² − a²) = (1/2a) ln|(x − a)/(x + a)| + C' },
        { label: '1/√(a² − x²)', expr: '∫dx/√(a² − x²) = sin⁻¹(x/a) + C' },
        { label: '1/√(x² ± a²)', expr: '∫dx/√(x² ± a²) = ln|x + √(x² ± a²)| + C' },
        { label: '√(a² − x²)', expr: '(x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) + C' },
        { label: '√(x² + a²)', expr: '(x/2)√(x² + a²) + (a²/2) ln|x + √(x² + a²)| + C' },
        { label: 'By parts', expr: '∫u v dx = u∫v dx − ∫(u\' ∫v dx) dx' },
        { label: 'eˣ pattern', expr: '∫eˣ[f(x) + f\'(x)] dx = eˣ f(x) + C' },
        { label: 'tan, sec', expr: '∫tan x dx = ln|sec x| + C ,  ∫sec x dx = ln|sec x + tan x| + C' },
        { label: 'Cyclic', expr: '∫eᵃˣ sin bx dx = eᵃˣ(a sin bx − b cos bx)/(a² + b²) + C' },
      ],
      mistakes: [
        'Wrong choice of u in by parts (follow ILATE).',
        'Not dividing first when the rational function is improper.',
      ],
      pyqTrend:
        'One question usually: an integral where the answer is given as a function and you must find constants, or the eˣ(f + f\') pattern.',
    },
    {
      name: 'Definite Integrals and Area Under Curves',
      priority: 'Very High',
      weightage: '2-3 Qs',
      difficulty: 'Tough',
      overview:
        'Highest-weightage calculus topic. Properties of definite integrals, Leibniz rule, limit as a sum and area between curves are tested every shift.',
      importantTopics: [
        { name: 'Properties of definite integrals', hot: true, note: 'King\'s property ∫f(x) = ∫f(a + b − x), even/odd, periodic' },
        { name: 'Area between curves', hot: true, note: 'Parabola-line, circle-parabola, regions with |x|, [x]' },
        { name: 'Leibniz rule (differentiation under integral)', hot: true, note: 'd/dx ∫ from g(x) to h(x)' },
        { name: 'Limit as a sum', note: 'lim (1/n)Σ f(r/n) = ∫₀¹ f(x)dx' },
        { name: 'Integrals with [x], {x}, |x|', note: 'Break at integer/zero points' },
        { name: 'Reduction formulas & Walli\'s formula', note: '∫₀^(π/2) sinⁿx dx' },
      ],
      theory: [
        {
          heading: 'Fundamental theorem',
          body:
            '∫ₐᵇ f(x)dx = F(b) − F(a) where F\' = f. The definite integral represents ==signed area== between the curve and x-axis.',
        },
        {
          heading: 'Key properties',
          body:
            '==King\'s property: ∫ₐᵇ f(x)dx = ∫ₐᵇ f(a + b − x)dx== - adding the two forms often simplifies the integrand (e.g. ∫₀^(π/2) sin x/(sin x + cos x) dx = π/4). ∫₋ₐᵃ f = 2∫₀ᵃ f if f is even, 0 if odd. ∫₀²ᵃ f = 2∫₀ᵃ f if f(2a − x) = f(x). Periodic with period T: ∫₀^(nT) f = n∫₀ᵀ f.',
        },
        {
          heading: 'Leibniz rule',
          body:
            '==d/dx ∫ from g(x) to h(x) of f(t)dt = f(h(x))h\'(x) − f(g(x))g\'(x)==. Used with limits of the form 0/0 (apply L\'Hospital) and to find f(x) from an integral equation.',
        },
        {
          heading: 'Limit as a sum',
          body:
            '==lim(n→∞) (1/n) Σ f(r/n) = ∫₀¹ f(x) dx==. Replace r/n by x and 1/n by dx; the limits come from the smallest and largest values of r/n (e.g. Σ from r = 1 to 2n gives ∫₀²).',
        },
        {
          heading: 'Area under curves',
          body:
            'Area between y = f(x), y = g(x) from a to b = ==∫ₐᵇ |f(x) − g(x)| dx== (upper minus lower). Find intersection points first, sketch the region, and use horizontal strips (integrate in y) if it is simpler. Standard results: area of ellipse πab; area between y² = 4ax and x² = 4by is 16ab/3; area between y² = 4ax and its latus rectum is 8a²/3.',
        },
      ],
      keyPoints: [
        '==Always sketch the region== before writing area integrals.',
        'If the area is below the x-axis take the absolute value.',
        '∫₀^(π/2) ln(sin x)dx = −(π/2) ln 2.',
        'Walli\'s: ∫₀^(π/2) sinⁿx dx = [(n − 1)(n − 3)…]/[n(n − 2)…] × (π/2 if n even, 1 if n odd).',
        'For [x] split the interval at integers; for |f(x)| split at the roots of f.',
      ],
      formulas: [
        { label: 'King\'s property', expr: '∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b − x) dx' },
        { label: 'Even / odd', expr: '∫₋ₐᵃ f = 2∫₀ᵃ f (even),  0 (odd)' },
        { label: 'Half-range', expr: '∫₀²ᵃ f = 2∫₀ᵃ f if f(2a − x) = f(x); 0 if f(2a − x) = −f(x)' },
        { label: 'Periodic', expr: '∫₀^(nT) f(x)dx = n ∫₀ᵀ f(x)dx' },
        { label: 'Leibniz rule', expr: 'd/dx ∫_{g(x)}^{h(x)} f(t)dt = f(h)h\' − f(g)g\'' },
        { label: 'Limit as sum', expr: 'lim (1/n) Σ f(r/n) = ∫₀¹ f(x) dx' },
        { label: 'Area between curves', expr: 'A = ∫ₐᵇ (y_upper − y_lower) dx' },
        { label: 'Ellipse area', expr: 'πab' },
        { label: 'Parabolas y² = 4ax, x² = 4by', expr: 'Area = 16ab/3' },
        { label: 'Walli\'s (n even)', expr: '∫₀^(π/2) sinⁿx dx = [(n−1)(n−3)…1]/[n(n−2)…2] · π/2' },
      ],
      mistakes: [
        'Adding signed areas when the curve crosses the axis.',
        'Wrong limits in limit-as-sum conversion.',
        'Forgetting the chain-rule factor in Leibniz rule.',
      ],
      pyqTrend:
        'King\'s property-based definite integrals and area between parabola/line/circle are asked in literally every session. Expect an integer-type area question.',
    },
    {
      name: 'Differential Equations',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Variable separable, homogeneous and linear differential equations. Formula-driven and scoring once the type is identified.',
      importantTopics: [
        { name: 'Linear differential equations', hot: true, note: 'Integrating factor e^(∫P dx)' },
        { name: 'Homogeneous equations', hot: true, note: 'Substitute y = vx' },
        { name: 'Variable separable', note: 'Including reducible forms dy/dx = f(ax + by + c)' },
        { name: 'Order & degree', note: 'Degree defined only when DE is polynomial in derivatives' },
        { name: 'Formation of DE / family of curves', note: 'Order = number of arbitrary constants' },
        { name: 'Exact differentials', note: 'd(xy), d(y/x), d(ln xy)' },
      ],
      theory: [
        {
          heading: 'Order and degree',
          body:
            'Order = highest derivative present. Degree = power of the highest derivative ==after making the equation polynomial in derivatives==. If derivatives appear inside sin, eˣ, ln etc., the degree is not defined. A family of curves with n arbitrary constants gives a DE of order n.',
        },
        {
          heading: 'Variable separable',
          body:
            'Write as f(y)dy = g(x)dx and integrate both sides. For dy/dx = f(ax + by + c), substitute ==t = ax + by + c== to make it separable.',
        },
        {
          heading: 'Homogeneous equations',
          body:
            'dy/dx = f(x, y) where f is homogeneous of degree 0 (f(λx, λy) = f(x, y)). Put ==y = vx, dy/dx = v + x dv/dx==, then separate variables. Equations of type (a₁x + b₁y + c₁)/(a₂x + b₂y + c₂) are reduced by shifting the origin.',
        },
        {
          heading: 'Linear differential equations',
          body:
            'Form dy/dx + P(x)y = Q(x). ==IF = e^(∫P dx)==; solution: y · IF = ∫Q · IF dx + C. If the equation is linear in x: dx/dy + P(y)x = Q(y), use IF = e^(∫P dy). Bernoulli form dy/dx + Py = Qyⁿ reduces to linear with z = y^(1−n).',
        },
      ],
      keyPoints: [
        '==Identify the type first==: separable → homogeneous → linear → exact.',
        'e^(ln f(x)) = f(x) - simplify IF before multiplying.',
        'Useful exact forms: x dy + y dx = d(xy); (x dy − y dx)/x² = d(y/x); (x dy − y dx)/(x² + y²) = d(tan⁻¹(y/x)).',
        'Growth/decay: dN/dt = kN ⇒ N = N₀e^(kt).',
      ],
      formulas: [
        { label: 'Linear DE', expr: 'dy/dx + Py = Q ⇒ y·e^(∫P dx) = ∫Q e^(∫P dx) dx + C' },
        { label: 'Homogeneous substitution', expr: 'y = vx ,  dy/dx = v + x dv/dx' },
        { label: 'Bernoulli', expr: 'dy/dx + Py = Qyⁿ → z = y^(1 − n)' },
        { label: 'Exact forms', expr: 'd(xy) = x dy + y dx ,  d(y/x) = (x dy − y dx)/x²' },
        { label: 'Exponential growth', expr: 'dN/dt = kN ⇒ N = N₀ e^(kt)' },
      ],
      mistakes: [
        'Stating degree for a DE involving sin(dy/dx) (degree undefined).',
        'Forgetting the constant C before applying initial conditions.',
      ],
      pyqTrend:
        'Linear DE with an initial condition, then finding y at a specific point, is asked almost every shift.',
    },
    {
      name: 'Vector Algebra',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Easy',
      overview:
        'Dot, cross and scalar triple products. Fast and scoring; often combined with 3D geometry.',
      importantTopics: [
        { name: 'Scalar triple product', hot: true, note: 'Volume of parallelepiped, coplanarity' },
        { name: 'Vector triple product', hot: true, note: 'a × (b × c) = (a·c)b − (a·b)c' },
        { name: 'Dot & cross product properties', hot: true, note: 'Angle, projection, area of triangle/parallelogram' },
        { name: 'Section formula & collinearity', note: 'Position vectors' },
        { name: 'Linear independence & coplanarity', note: 'Determinant of components' },
      ],
      theory: [
        {
          heading: 'Dot product',
          body:
            'a·b = |a||b|cosθ = a₁b₁ + a₂b₂ + a₃b₃. ==a·b = 0 ⇔ a ⟂ b== (non-zero vectors). Projection of a on b = (a·b)/|b|. |a + b|² = |a|² + |b|² + 2a·b.',
        },
        {
          heading: 'Cross product',
          body:
            'a × b = |a||b|sinθ n̂, perpendicular to both. ==Area of parallelogram = |a × b|==; triangle = ½|a × b| (for diagonals d₁, d₂: parallelogram area = ½|d₁ × d₂|). a × b = 0 ⇔ a ∥ b. Lagrange identity: |a × b|² + (a·b)² = |a|²|b|².',
        },
        {
          heading: 'Scalar triple product',
          body:
            '[a b c] = a·(b × c) = determinant of components = ==volume of parallelepiped==. Cyclic order does not change the value; swapping two vectors changes sign. ==[a b c] = 0 ⇔ coplanar==. Volume of tetrahedron = (1/6)|[a b c]|. [a × b, b × c, c × a] = [a b c]².',
        },
        {
          heading: 'Vector triple product',
          body:
            '==a × (b × c) = (a·c)b − (a·b)c== - it lies in the plane of b and c. Note (a × b) × c ≠ a × (b × c) in general. These identities solve most "find vector r satisfying …" problems.',
        },
      ],
      keyPoints: [
        '==[a b c] = 0 ⇔ coplanar==; also 4 points coplanar if [AB AC AD] = 0.',
        'Unit vector perpendicular to a and b: ±(a × b)/|a × b|.',
        'Angle bisector direction: â + b̂ (internal).',
        'Components of b along and perpendicular to a: (b·â)â and b − (b·â)â.',
      ],
      formulas: [
        { label: 'Dot product', expr: 'a·b = |a||b|cosθ' },
        { label: 'Cross product', expr: '|a × b| = |a||b|sinθ' },
        { label: 'Projection', expr: 'proj of a on b = (a·b)/|b|' },
        { label: 'Lagrange identity', expr: '|a × b|² = |a|²|b|² − (a·b)²' },
        { label: 'Scalar triple product', expr: '[a b c] = a·(b × c)' },
        { label: 'Vector triple product', expr: 'a × (b × c) = (a·c)b − (a·b)c' },
        { label: 'Tetrahedron volume', expr: 'V = (1/6)|[a b c]|' },
        { label: 'Section formula', expr: 'r = (mb + na)/(m + n)' },
      ],
      mistakes: [
        'Assuming the cross product is associative.',
        'Sign errors in 3 × 3 determinant expansion of a × b.',
      ],
      pyqTrend:
        'Vector triple product equations and |a × b|-type magnitude questions appear every shift, frequently as integer answers.',
    },
    {
      name: 'Three Dimensional Geometry',
      priority: 'Very High',
      weightage: '2-3 Qs',
      difficulty: 'Moderate',
      overview:
        'Lines and planes in 3D. One of the most consistently scoring chapters in JEE Main - questions are formula-based.',
      importantTopics: [
        { name: 'Shortest distance between skew lines', hot: true, note: '|(a₂ − a₁)·(b₁ × b₂)|/|b₁ × b₂|' },
        { name: 'Image / foot of perpendicular of a point', hot: true, note: 'In a line and in a plane' },
        { name: 'Equation of plane', hot: true, note: 'Through 3 points, containing a line, through line of intersection' },
        { name: 'Angle between line & plane / planes', note: 'sinθ for line-plane, cosθ for planes' },
        { name: 'Distance of point from plane & between parallel planes', note: '|ax₁ + by₁ + cz₁ + d|/√(a² + b² + c²)' },
        { name: 'Intersection of line and plane / coplanar lines', note: 'Condition for coplanarity' },
      ],
      theory: [
        {
          heading: 'Direction cosines and ratios',
          body:
            'Direction cosines l, m, n satisfy ==l² + m² + n² = 1==. Direction ratios a, b, c are proportional to them: l = a/√(a² + b² + c²). Angle between lines: cosθ = |l₁l₂ + m₁m₂ + n₁n₂|; perpendicular if a₁a₂ + b₁b₂ + c₁c₂ = 0.',
        },
        {
          heading: 'Lines',
          body:
            'Vector form r = a + λb; Cartesian (x − x₁)/a = (y − y₁)/b = (z − z₁)/c. Any point on the line: (x₁ + aλ, y₁ + bλ, z₁ + cλ) - ==use this general point for foot/image problems==. Shortest distance between skew lines: ==|(a₂ − a₁)·(b₁ × b₂)| / |b₁ × b₂|==; for parallel lines |(a₂ − a₁) × b|/|b|. Lines intersect (coplanar) iff (a₂ − a₁)·(b₁ × b₂) = 0.',
        },
        {
          heading: 'Planes',
          body:
            'Normal form r·n = d; Cartesian ax + by + cz + d = 0 with normal (a, b, c). Intercept form x/a + y/b + z/c = 1. Plane through 3 points: determinant form. ==Plane through the line of intersection of P₁ = 0 and P₂ = 0: P₁ + λP₂ = 0==. Distance of point from plane = |ax₁ + by₁ + cz₁ + d|/√(a² + b² + c²); between parallel planes |d₁ − d₂|/√(a² + b² + c²).',
        },
        {
          heading: 'Angles and images',
          body:
            'Angle between planes = angle between normals (cosθ). ==Angle between a line and a plane: sinθ = |b·n|/(|b||n|)==. Image of (x₁, y₁, z₁) in plane ax + by + cz + d = 0: (x − x₁)/a = (y − y₁)/b = (z − z₁)/c = −2(ax₁ + by₁ + cz₁ + d)/(a² + b² + c²); for foot of perpendicular replace −2 by −1.',
        },
      ],
      keyPoints: [
        '==Line ∥ plane ⇔ b·n = 0==; line ⟂ plane ⇔ b ∥ n.',
        'Line lies in the plane if b·n = 0 and one point of the line satisfies the plane.',
        'Bisector planes of two planes: (a₁x + … + d₁)/√(Σa₁²) = ±(a₂x + … + d₂)/√(Σa₂²).',
        'Plane containing two intersecting lines has normal b₁ × b₂.',
      ],
      formulas: [
        { label: 'Direction cosines', expr: 'l² + m² + n² = 1' },
        { label: 'Line (Cartesian)', expr: '(x − x₁)/a = (y − y₁)/b = (z − z₁)/c' },
        { label: 'Skew lines SD', expr: 'd = |(a₂ − a₁)·(b₁ × b₂)| / |b₁ × b₂|' },
        { label: 'Parallel lines distance', expr: 'd = |(a₂ − a₁) × b| / |b|' },
        { label: 'Plane (normal form)', expr: 'ax + by + cz + d = 0' },
        { label: 'Point-plane distance', expr: 'D = |ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²)' },
        { label: 'Parallel planes distance', expr: 'D = |d₁ − d₂| / √(a² + b² + c²)' },
        { label: 'Angle line-plane', expr: 'sinθ = |b·n| / (|b||n|)' },
        { label: 'Image in plane', expr: '(x−x₁)/a = (y−y₁)/b = (z−z₁)/c = −2(ax₁+by₁+cz₁+d)/(a²+b²+c²)' },
        { label: 'Family of planes', expr: 'P₁ + λP₂ = 0' },
        { label: 'Coplanar lines', expr: '(a₂ − a₁)·(b₁ × b₂) = 0' },
      ],
      mistakes: [
        'Using cosθ instead of sinθ for angle between a line and a plane.',
        'Not normalising both planes to the same coefficients before finding distance between parallel planes.',
      ],
      pyqTrend:
        'Shortest distance between lines and image of a point in a plane/line are near-certain in every shift. 2-3 questions combined with vectors.',
    },
    {
      name: 'Probability',
      priority: 'Very High',
      weightage: '2 Qs',
      difficulty: 'Tough',
      overview:
        'Conditional probability, Bayes\' theorem and binomial distribution. High weightage; requires practice to avoid conceptual traps.',
      importantTopics: [
        { name: 'Bayes\' theorem', hot: true, note: 'Urns/bags, reverse conditional probability' },
        { name: 'Conditional probability & multiplication rule', hot: true, note: 'P(A|B), independent events' },
        { name: 'Binomial distribution', hot: true, note: 'P(X = r), mean np, variance npq, "at least one"' },
        { name: 'Random variables - mean & variance', note: 'Probability distribution tables' },
        { name: 'Total probability theorem', note: 'Partition of sample space' },
        { name: 'Independent vs mutually exclusive', note: 'Common conceptual trap' },
      ],
      theory: [
        {
          heading: 'Conditional probability',
          body:
            '==P(A|B) = P(A ∩ B)/P(B)==, P(B) ≠ 0. Multiplication rule: P(A ∩ B) = P(B)P(A|B). A and B are ==independent iff P(A ∩ B) = P(A)P(B)==; then A\', B\' etc. are also independent. Mutually exclusive events (with non-zero probability) can never be independent.',
        },
        {
          heading: 'Total probability and Bayes\' theorem',
          body:
            'If E₁, …, Eₙ partition the sample space: P(A) = Σ P(Eᵢ)P(A|Eᵢ). ==Bayes: P(Eᵢ|A) = P(Eᵢ)P(A|Eᵢ) / Σ P(Eⱼ)P(A|Eⱼ)== - the probability that a known result came from a particular cause. Draw a tree diagram to avoid mistakes.',
        },
        {
          heading: 'Random variables',
          body:
            'Discrete random variable X with probabilities pᵢ (Σpᵢ = 1). ==Mean E(X) = Σxᵢpᵢ==, variance Var(X) = E(X²) − [E(X)]². E(aX + b) = aE(X) + b, Var(aX + b) = a²Var(X).',
        },
        {
          heading: 'Binomial distribution',
          body:
            'n independent Bernoulli trials with success probability p: ==P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ==, q = 1 − p. Mean np, variance npq (variance < mean). "At least one success" = 1 − qⁿ. Most probable value (mode) lies near (n + 1)p.',
        },
      ],
      keyPoints: [
        '==Independent ≠ mutually exclusive==.',
        'For "at least" problems always use the complement.',
        'P(A ∪ B) = P(A) + P(B) − P(A ∩ B); for 3 events add the triple intersection.',
        'Number of trials needed so that P(at least one success) ≥ k: solve 1 − qⁿ ≥ k.',
      ],
      formulas: [
        { label: 'Conditional probability', expr: 'P(A|B) = P(A ∩ B) / P(B)' },
        { label: 'Independence', expr: 'P(A ∩ B) = P(A) · P(B)' },
        { label: 'Total probability', expr: 'P(A) = Σ P(Eᵢ) P(A|Eᵢ)' },
        { label: 'Bayes\' theorem', expr: 'P(Eᵢ|A) = P(Eᵢ)P(A|Eᵢ) / Σ P(Eⱼ)P(A|Eⱼ)' },
        { label: 'Mean & variance', expr: 'μ = Σxp ,  σ² = Σx²p − μ²' },
        { label: 'Binomial', expr: 'P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ' },
        { label: 'Binomial mean / variance', expr: 'μ = np ,  σ² = npq' },
      ],
      mistakes: [
        'Confusing P(A|B) with P(B|A).',
        'Treating mutually exclusive events as independent.',
        'Forgetting that binomial needs independent trials with constant p.',
      ],
      pyqTrend:
        'Bayes\' theorem and binomial distribution (mean/variance or at-least-one) questions appear every session. Random variable mean/variance tables are also common.',
    },
  ],
};
