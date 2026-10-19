import type { StudyChapter } from '../types';

export const relationsAndFunctions: StudyChapter = {
  name: 'Relations and Functions',
  subject: 'Mathematics',
  classLevel: 12,
  summary:
    'Types of relations (reflexive, symmetric, transitive, equivalence) and types of functions (one-one, onto, bijective), composition and inverse. JEE Main asks one or two quick questions almost every year, usually counting or classification problems.',
  mostRepeated: [
    'Number of relations on a set with n elements is ==2^(n²)==; reflexive relations: 2^(n² − n).',
    'An equivalence relation is ==reflexive, symmetric and transitive==; its classes partition the set.',
    'Number of onto functions from m elements to n elements: ==nᵐ − C(n,1)(n − 1)ᵐ + C(n,2)(n − 2)ᵐ − …==',
    'A function is invertible ==if and only if it is bijective==.',
    '==(g∘f)⁻¹ = f⁻¹∘g⁻¹==; composition is associative but not commutative.',
    'For finite sets with |A| = |B|, ==one-one ⇔ onto==.',
    'A continuous strictly monotonic function is one-one; an odd-degree polynomial from R to R is onto.',
  ],
  topics: [
    {
      name: 'Types of Relations',
      theory:
        'A relation R from A to B is any subset of A × B. A relation on A is a subset of A × A, so a set with n elements has ==2^(n²) relations==. The empty relation (no pairs) and the universal relation (A × A) are the two extremes.\n\nR on A is ==reflexive== if (a, a) ∈ R for every a ∈ A, ==symmetric== if (a, b) ∈ R ⇒ (b, a) ∈ R, and ==transitive== if (a, b), (b, c) ∈ R ⇒ (a, c) ∈ R. Each property must hold for all elements; a single failing pair breaks it.\n\nFor counting, think of the n × n grid of ordered pairs. Reflexive relations fix the n diagonal pairs, leaving n² − n free pairs: ==2^(n² − n)== relations. Symmetric relations choose the diagonal freely and the off-diagonal pairs in matched couples: ==2^(n(n + 1)/2)==. Reflexive and symmetric: 2^(n(n − 1)/2).',
      keyPoints: [
        'Empty relation is symmetric and transitive but not reflexive (on a non-empty set).',
        'Universal relation A × A is an equivalence relation.',
        '==Check transitivity using pairs like (a, b), (b, a) ⇒ (a, a) must be present==.',
        'Number of symmetric relations: 2^(n(n + 1)/2).',
      ],
      formulas: [
        'Total relations on n-element set = 2^(n²)',
        'Reflexive relations = 2^(n² − n)',
        'Symmetric relations = 2^(n(n + 1)/2)',
        'Reflexive and symmetric = 2^(n(n − 1)/2)',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - counting relations with given properties',
        question:
          'Let A = {1, 2, 3}. The number of relations on A containing (1, 2) and (1, 3) which are reflexive and symmetric but not transitive is:',
        approach: [
          'Reflexive forces (1,1), (2,2), (3,3); symmetric forces (2,1) and (3,1) as well.',
          'The only remaining pairs are (2,3) and (3,2), which must come together by symmetry.',
          'Without them: (2,1), (1,3) ∈ R but (2,3) ∉ R, so R is not transitive - valid.',
          'With them: R = A × A, which is transitive - not valid. Hence exactly one relation.',
        ],
        answer: '1',
      },
      questions: [
        {
          question: 'The number of relations on a set A with 3 elements is:',
          options: ['9', '64', '512', '8'],
          answer: '512',
          difficulty: 'Easy',
          hint: 'A relation is any subset of A × A. How many elements does A × A have?',
          solution: 'A × A has 3 × 3 = 9 elements. Each subset is a relation, so the number is 2⁹ = 512.',
          similar: {
            question: 'The number of relations on a set A with 2 elements is:',
            options: ['4', '8', '16', '32'],
            answer: '16',
            solution: 'A × A has 4 elements, so there are 2⁴ = 16 relations.',
          },
        },
        {
          question: 'R = {(1,1), (2,2), (3,3), (1,2), (2,3)} on A = {1, 2, 3} is:',
          options: [
            'Reflexive but neither symmetric nor transitive',
            'Reflexive and transitive but not symmetric',
            'An equivalence relation',
            'Symmetric but not reflexive',
          ],
          answer: 'Reflexive but neither symmetric nor transitive',
          difficulty: 'Medium',
          hint: 'Test each property; for transitivity look at (1,2) and (2,3).',
          solution:
            'All diagonal pairs are present ⇒ reflexive. (1,2) ∈ R but (2,1) ∉ R ⇒ not symmetric. (1,2), (2,3) ∈ R but (1,3) ∉ R ⇒ not transitive.',
          similar: {
            question: 'R = {(1,2), (2,1)} on A = {1, 2, 3} is:',
            options: [
              'Symmetric but neither reflexive nor transitive',
              'Symmetric and transitive',
              'Reflexive and symmetric',
              'An equivalence relation',
            ],
            answer: 'Symmetric but neither reflexive nor transitive',
            solution:
              'No diagonal pair ⇒ not reflexive. (1,2) and (2,1) both present ⇒ symmetric. (1,2), (2,1) ∈ R needs (1,1) ∈ R for transitivity, which is missing ⇒ not transitive.',
          },
        },
        {
          question: 'The number of relations on A = {a, b, c, d} which are both reflexive and symmetric is:',
          options: ['16', '64', '1024', '4096'],
          answer: '64',
          difficulty: 'Hard',
          hint: 'Diagonal pairs are forced; off-diagonal pairs can only be chosen as matched couples {(x, y), (y, x)}.',
          solution:
            'The 4 diagonal pairs must be included. The 12 off-diagonal pairs form 12/2 = 6 couples, each either fully in or fully out. Number = 2⁶ = 64.',
          similar: {
            question: 'The number of relations on a 3-element set which are both reflexive and symmetric is:',
            options: ['8', '64', '16', '27'],
            answer: '8',
            solution: 'Off-diagonal pairs: 3² − 3 = 6, forming 3 couples. Number = 2³ = 8.',
          },
        },
      ],
    },
    {
      name: 'Equivalence Relations and Equivalence Classes',
      theory:
        'A relation that is reflexive, symmetric and transitive is an ==equivalence relation==. It groups elements that are "alike": the equivalence class [a] = {x : x R a}. Two classes are either identical or disjoint, so ==the classes partition the set==, and conversely every partition gives an equivalence relation.\n\nThe standard example is congruence modulo n on Z: a R b ⇔ n | (a − b). It has exactly ==n equivalence classes== [0], [1], …, [n − 1]. Relations on N × N such as (a, b) R (c, d) ⇔ a + d = b + c or ad = bc are also equivalence relations; check them by rewriting as "some expression of (a, b) equals the same expression of (c, d)".\n\nThe number of equivalence relations on a set equals the number of partitions of the set (Bell numbers): ==1, 2, 5, 15, 52== for n = 1, 2, 3, 4, 5. The smallest equivalence relation on A is the identity relation; the largest is A × A.',
      keyPoints: [
        'If a R b ⇔ f(a) = f(b) for some function f, R is automatically an equivalence relation.',
        'Intersection of two equivalence relations is an equivalence relation; ==union need not be== (transitivity can fail).',
        'Equivalence classes are disjoint and their union is the whole set.',
        'Number of equivalence relations on {1, 2, 3} is 5.',
      ],
      formulas: ['[a] = {x ∈ A : x R a}', 'Congruence mod n ⇒ n classes', 'Bell numbers: B₁ = 1, B₂ = 2, B₃ = 5, B₄ = 15'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - often combined with counting',
        question: 'The number of equivalence relations on A = {1, 2, 3} containing (1, 2) and (2, 1) is:',
        approach: [
          'An equivalence relation corresponds to a partition of A.',
          'The pair (1, 2) means 1 and 2 must lie in the same block.',
          'Possible partitions: {1, 2}, {3} or {1, 2, 3}.',
          'Hence there are 2 such equivalence relations.',
        ],
        answer: '2',
      },
      questions: [
        {
          question: 'On Z, a R b ⇔ (a − b) is divisible by 5. The number of distinct equivalence classes is:',
          options: ['1', '4', '5', 'Infinitely many'],
          answer: '5',
          difficulty: 'Easy',
          hint: 'Elements in the same class leave the same remainder on division by 5.',
          solution: 'Classes correspond to remainders 0, 1, 2, 3, 4, so there are 5 classes.',
          similar: {
            question: 'On Z, a R b ⇔ 7 divides (a − b). The number of equivalence classes is:',
            options: ['6', '7', '8', 'Infinitely many'],
            answer: '7',
            solution: 'Remainders 0 to 6 give 7 classes.',
          },
        },
        {
          question: 'The number of equivalence relations on the set {1, 2, 3} is:',
          options: ['3', '5', '8', '27'],
          answer: '5',
          difficulty: 'Medium',
          hint: 'Count the ways to partition a 3-element set.',
          solution:
            'Partitions: {1}{2}{3}; {1,2}{3}; {1,3}{2}; {2,3}{1}; {1,2,3}. Each gives one equivalence relation ⇒ 5.',
          similar: {
            question: 'The number of equivalence relations on the set {1, 2, 3, 4} is:',
            options: ['15', '16', '12', '24'],
            answer: '15',
            solution:
              'Partitions of a 4-set: 1 (all singletons) + 6 (one pair) + 3 (two pairs) + 4 (a triple + single) + 1 (whole set) = 15.',
          },
        },
        {
          question:
            'On N × N, (a, b) R (c, d) ⇔ a + d = b + c. The equivalence class of (2, 5) is:',
          options: ['{(x, y) : y − x = 3}', '{(x, y) : x − y = 3}', '{(x, y) : x + y = 7}', '{(x, y) : xy = 10}'],
          answer: '{(x, y) : y − x = 3}',
          difficulty: 'Hard',
          hint: 'Rewrite a + d = b + c as b − a = d − c.',
          solution:
            '(x, y) R (2, 5) ⇔ x + 5 = y + 2 ⇔ y − x = 3. So the class is all pairs with y − x = 3, e.g. (1, 4), (2, 5), (3, 6).',
          similar: {
            question: 'On N × N, (a, b) R (c, d) ⇔ ad = bc. The equivalence class of (2, 3) is:',
            options: ['{(x, y) : 3x = 2y}', '{(x, y) : 2x = 3y}', '{(x, y) : x + y = 5}', '{(x, y) : y − x = 1}'],
            answer: '{(x, y) : 3x = 2y}',
            solution: '(x, y) R (2, 3) ⇔ 3x = 2y, i.e. x/y = 2/3. Examples: (2, 3), (4, 6).',
          },
        },
      ],
    },
    {
      name: 'One-one, Onto and Bijective Functions',
      theory:
        'A function f : A → B is ==one-one (injective)== if f(x₁) = f(x₂) ⇒ x₁ = x₂, i.e. no two inputs share an output. Graphically, every horizontal line meets the graph at most once. A ==continuous strictly monotonic== function is always one-one; to disprove one-one, find two inputs with the same output.\n\nf is ==onto (surjective)== if its range equals the codomain B. To test, solve y = f(x) for x and check that a valid x exists for every y in B. A function that is both is ==bijective==.\n\nThe codomain matters: f(x) = x² is neither one-one nor onto from R to R, but is a bijection from [0, ∞) to [0, ∞). For finite sets with |A| = |B|, one-one and onto are equivalent.',
      keyPoints: [
        'f′(x) > 0 (or < 0) throughout ⇒ one-one.',
        'Even functions (f(−x) = f(x)) are never one-one on a symmetric domain.',
        '==Range = codomain ⇔ onto==.',
        'Odd-degree polynomial R → R is always onto; it is one-one only if monotonic.',
      ],
      diagram: 'function-types',
      diagramCaption: 'Arrow diagrams of one-one, onto, and bijective mappings.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently in JEE Main',
        question: 'The function f : R → R defined by f(x) = x/(1 + x²) is:',
        approach: [
          'f(2) = 2/5 and f(1/2) = (1/2)/(5/4) = 2/5, so f is not one-one.',
          'Range: y = x/(1 + x²) ⇒ yx² − x + y = 0 has real x ⇔ 1 − 4y² ≥ 0 ⇔ |y| ≤ 1/2.',
          'Range [−1/2, 1/2] ≠ R, so f is not onto.',
        ],
        answer: 'Neither one-one nor onto',
      },
      questions: [
        {
          question: 'f : R → R, f(x) = 3x + 2 is:',
          options: ['One-one but not onto', 'Onto but not one-one', 'Bijective', 'Neither one-one nor onto'],
          answer: 'Bijective',
          difficulty: 'Easy',
          hint: 'Check f(x₁) = f(x₂), then try to solve y = 3x + 2 for x.',
          solution: '3x₁ + 2 = 3x₂ + 2 ⇒ x₁ = x₂ (one-one). For any y, x = (y − 2)/3 ∈ R (onto). Hence bijective.',
          similar: {
            question: 'f : R → R, f(x) = x² is:',
            options: ['One-one but not onto', 'Onto but not one-one', 'Bijective', 'Neither one-one nor onto'],
            answer: 'Neither one-one nor onto',
            solution: 'f(1) = f(−1) ⇒ not one-one. Negative numbers have no pre-image ⇒ not onto.',
          },
        },
        {
          question: 'f : N → N, f(x) = 2x is:',
          options: ['One-one but not onto', 'Onto but not one-one', 'Bijective', 'Neither one-one nor onto'],
          answer: 'One-one but not onto',
          difficulty: 'Medium',
          hint: 'Which natural numbers are outputs of 2x?',
          solution: '2x₁ = 2x₂ ⇒ x₁ = x₂, so one-one. Odd numbers (like 1, 3) are never outputs, so not onto.',
          similar: {
            question: 'f : N → N, f(n) = (n + 1)/2 if n is odd and n/2 if n is even. Then f is:',
            options: ['One-one but not onto', 'Onto but not one-one', 'Bijective', 'Neither one-one nor onto'],
            answer: 'Onto but not one-one',
            solution:
              'f(1) = 1 and f(2) = 1, so not one-one. Any m ∈ N equals f(2m), so f is onto.',
          },
        },
        {
          question: 'f : R → R, f(x) = x³ − 3x is:',
          options: ['One-one but not onto', 'Onto but not one-one', 'Bijective', 'Neither one-one nor onto'],
          answer: 'Onto but not one-one',
          difficulty: 'Hard',
          hint: 'Find the roots of f(x) = 0; then think about the behaviour as x → ±∞.',
          solution:
            'f(0) = f(√3) = f(−√3) = 0, so not one-one. f is a continuous cubic going from −∞ to +∞, so its range is R ⇒ onto.',
          similar: {
            question: 'f : R → R, f(x) = x³ + 3x is:',
            options: ['One-one but not onto', 'Onto but not one-one', 'Bijective', 'Neither one-one nor onto'],
            answer: 'Bijective',
            solution: 'f′(x) = 3x² + 3 > 0, so f is strictly increasing (one-one). Being an odd-degree polynomial, its range is R (onto).',
          },
        },
      ],
    },
    {
      name: 'Counting Functions',
      theory:
        'Let |A| = m and |B| = n. Each of the m elements of A can go to any of the n elements of B, so there are ==nᵐ functions== from A to B.\n\nFor ==one-one functions== (m ≤ n), the first element has n choices, the second n − 1, and so on: ⁿPₘ = n!/(n − m)!. If m > n, no one-one function exists. When m = n, the bijections number n!.\n\nFor ==onto functions== (m ≥ n) use inclusion-exclusion on the images that are missed: ==nᵐ − C(n,1)(n − 1)ᵐ + C(n,2)(n − 2)ᵐ − …==. Two quick cases: onto functions to a 2-element set number 2ᵐ − 2, and to a 3-element set number 3ᵐ − 3·2ᵐ + 3.',
      keyPoints: [
        'Functions A → B: ==n^m== (codomain size raised to domain size).',
        'One-one: ⁿPₘ, only if m ≤ n.',
        'Onto from m to 2 elements: 2ᵐ − 2.',
        'Into (not onto) functions = total − onto.',
      ],
      formulas: [
        'Total functions = nᵐ',
        'One-one functions = n!/(n − m)!',
        'Onto functions = Σ (−1)ᵏ C(n, k)(n − k)ᵐ, k = 0 to n',
        'Bijections (m = n) = n!',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - onto function counting',
        question: 'The number of onto functions from A = {1, 2, 3, 4} to B = {a, b, c} is:',
        approach: [
          'Total functions: 3⁴ = 81.',
          'Subtract those missing at least one element: C(3,1)·2⁴ = 48.',
          'Add back those missing two elements: C(3,2)·1⁴ = 3.',
          'Onto = 81 − 48 + 3 = 36.',
        ],
        answer: '36',
      },
      questions: [
        {
          question: 'If A has 3 elements and B has 4 elements, the number of functions from A to B is:',
          options: ['12', '64', '81', '24'],
          answer: '64',
          difficulty: 'Easy',
          hint: 'Each element of A independently picks an image in B.',
          solution: 'Each of 3 elements has 4 choices ⇒ 4³ = 64.',
          similar: {
            question: 'If A has 2 elements and B has 5 elements, the number of functions from A to B is:',
            options: ['10', '25', '32', '20'],
            answer: '25',
            solution: '5² = 25.',
          },
        },
        {
          question: 'The number of one-one functions from a 3-element set to a 5-element set is:',
          options: ['60', '125', '10', '243'],
          answer: '60',
          difficulty: 'Medium',
          hint: 'Images must be distinct: choose them one by one.',
          solution: '5 × 4 × 3 = ⁵P₃ = 60.',
          similar: {
            question: 'The number of one-one functions from a 2-element set to a 6-element set is:',
            options: ['30', '36', '15', '64'],
            answer: '30',
            solution: '6 × 5 = 30.',
          },
        },
        {
          question: 'The number of onto functions from a 5-element set to a 3-element set is:',
          options: ['150', '243', '60', '180'],
          answer: '150',
          difficulty: 'Hard',
          hint: 'Use inclusion-exclusion: total − (missing one) + (missing two).',
          solution: '3⁵ − C(3,1)·2⁵ + C(3,2)·1⁵ = 243 − 96 + 3 = 150.',
          similar: {
            question: 'The number of onto functions from a 4-element set to a 2-element set is:',
            options: ['14', '16', '8', '12'],
            answer: '14',
            solution: 'Total 2⁴ = 16, minus the 2 constant functions ⇒ 14.',
          },
        },
      ],
    },
    {
      name: 'Composition of Functions',
      theory:
        'For f : A → B and g : B → C, the composite ==(g∘f)(x) = g(f(x))== applies f first, then g. It is defined only when the range of f lies in the domain of g. Composition is ==associative== (h∘(g∘f) = (h∘g)∘f) but ==not commutative==: in general f∘g ≠ g∘f.\n\nUseful facts: the composite of two one-one functions is one-one, and of two onto functions is onto. Conversely, if g∘f is one-one then f must be one-one, and if g∘f is onto then g must be onto.\n\nJEE likes functions that repeat under composition. A Möbius map f(x) = (ax + b)/(cx − a) satisfies ==f(f(x)) = x== (it is its own inverse), and f(x) = 1/(1 − x) satisfies f(f(f(x))) = x. For f(x) = x/√(1 + x²), n-fold composition gives x/√(1 + nx²).',
      keyPoints: [
        '(g∘f)(x) = g(f(x)): ==inner function acts first==.',
        'g∘f one-one ⇒ f one-one; g∘f onto ⇒ g onto.',
        'f(x) = (ax + b)/(cx − a) is self-inverse.',
        'Domain of g∘f = {x ∈ domain f : f(x) ∈ domain g}.',
      ],
      formulas: ['(g∘f)(x) = g(f(x))', 'h∘(g∘f) = (h∘g)∘f', 'f(x) = (ax + b)/(cx − a) ⇒ f∘f(x) = x'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - repeated composition',
        question: 'If f(x) = x/√(1 + x²), then (f∘f∘f)(x) equals:',
        approach: [
          'f(f(x)) = [x/√(1 + x²)] / √(1 + x²/(1 + x²)) = [x/√(1 + x²)] / [√(1 + 2x²)/√(1 + x²)].',
          'So f∘f(x) = x/√(1 + 2x²).',
          'Repeating, each composition adds 1 to the coefficient of x².',
        ],
        answer: 'x/√(1 + 3x²)',
      },
      questions: [
        {
          question: 'If f(x) = x² and g(x) = 2x + 1, then (f∘g)(x) is:',
          options: ['(2x + 1)²', '2x² + 1', '4x² + 1', '2x² + 2x + 1'],
          answer: '(2x + 1)²',
          difficulty: 'Easy',
          hint: 'f∘g means apply g first, then f.',
          solution: '(f∘g)(x) = f(2x + 1) = (2x + 1)².',
          similar: {
            question: 'If f(x) = x + 3 and g(x) = x², then (g∘f)(x) is:',
            options: ['(x + 3)²', 'x² + 3', 'x² + 9', '3x²'],
            answer: '(x + 3)²',
            solution: '(g∘f)(x) = g(x + 3) = (x + 3)².',
          },
        },
        {
          question: 'If f(x) = (3x + 2)/(5x − 3), x ≠ 3/5, then (f∘f)(x) is:',
          options: ['x', '−x', '1/x', '(3x + 2)/(5x − 3)'],
          answer: 'x',
          difficulty: 'Medium',
          hint: 'Notice the form (ax + b)/(cx − a).',
          solution:
            'f(f(x)) = [3(3x + 2)/(5x − 3) + 2] / [5(3x + 2)/(5x − 3) − 3] = (9x + 6 + 10x − 6)/(15x + 10 − 15x + 9) = 19x/19 = x.',
          similar: {
            question: 'If f(x) = (2x + 1)/(3x − 2), then f(f(2)) is:',
            options: ['2', '5/4', '4/5', '1/2'],
            answer: '2',
            solution: 'f has the form (ax + b)/(cx − a), so f∘f is the identity. Check: f(2) = 5/4, f(5/4) = (7/2)/(7/4) = 2.',
          },
        },
        {
          question: 'If f(x) = 1/(1 − x), x ≠ 0, 1, then f(f(f(x))) is:',
          options: ['x', '1/x', '(x − 1)/x', '1/(1 − x)'],
          answer: 'x',
          difficulty: 'Hard',
          hint: 'Compute f(f(x)) first and simplify before applying f again.',
          solution:
            'f(f(x)) = 1/(1 − 1/(1 − x)) = (1 − x)/(−x) = (x − 1)/x. Then f((x − 1)/x) = 1/(1 − (x − 1)/x) = 1/(1/x) = x.',
          similar: {
            question: 'If f(x) = 1/(1 − x), then f(f(2)) is:',
            options: ['1/2', '−1', '2', '−1/2'],
            answer: '1/2',
            solution: 'f(f(x)) = (x − 1)/x, so f(f(2)) = 1/2. (Directly: f(2) = −1, f(−1) = 1/2.)',
          },
        },
      ],
    },
    {
      name: 'Invertible Functions',
      theory:
        'f : A → B is ==invertible iff it is bijective==. The inverse f⁻¹ : B → A is defined by f⁻¹(y) = x ⇔ f(x) = y, so f⁻¹∘f = I_A and f∘f⁻¹ = I_B. To find it, write y = f(x), solve for x in terms of y, then rename the variable.\n\nThe inverse is unique, (f⁻¹)⁻¹ = f, and for a composition ==(g∘f)⁻¹ = f⁻¹∘g⁻¹== (reverse order, like socks and shoes). The graph of f⁻¹ is the ==mirror image of the graph of f in the line y = x==.\n\nFor non-injective formulas such as quadratics, restrict the domain to one side of the vertex: f(x) = (x − h)² + k on [h, ∞) has inverse h + √(x − k). If f is increasing, the curves y = f(x) and y = f⁻¹(x) can meet only on y = x, so solve f(x) = x instead.',
      keyPoints: [
        'Only bijections have inverses.',
        '==Graph of f⁻¹ = reflection of graph of f in y = x==.',
        'Domain of f⁻¹ = range of f.',
        'For increasing f, f(x) = f⁻¹(x) ⇔ f(x) = x.',
      ],
      formulas: ['f⁻¹(y) = x ⇔ f(x) = y', '(g∘f)⁻¹ = f⁻¹∘g⁻¹', 'f⁻¹∘f = I_A, f∘f⁻¹ = I_B'],
      pyq: {
        exam: 'JEE Main & Advanced',
        frequency: 'Classic - repeated in many forms',
        question: 'If f : [1, ∞) → [1, ∞) is f(x) = 2^(x(x − 1)), then f⁻¹(x) is:',
        approach: [
          'Put y = 2^(x(x − 1)) ⇒ x² − x = log₂ y.',
          'Solve the quadratic: x = [1 ± √(1 + 4 log₂ y)]/2.',
          'Since x ≥ 1, take the + sign.',
        ],
        answer: '(1 + √(1 + 4 log₂ x))/2',
      },
      questions: [
        {
          question: 'The inverse of f(x) = 4x + 3 is:',
          options: ['(x − 3)/4', '(x + 3)/4', '4x − 3', '1/(4x + 3)'],
          answer: '(x − 3)/4',
          difficulty: 'Easy',
          hint: 'Solve y = 4x + 3 for x.',
          solution: 'y = 4x + 3 ⇒ x = (y − 3)/4, so f⁻¹(x) = (x − 3)/4.',
          similar: {
            question: 'The inverse of f(x) = (x + 5)/2 is:',
            options: ['2x − 5', '2x + 5', '(x − 5)/2', '(x + 5)/2'],
            answer: '2x − 5',
            solution: 'y = (x + 5)/2 ⇒ x = 2y − 5.',
          },
        },
        {
          question: 'The inverse of f(x) = (2x + 3)/(x − 1), x ≠ 1, is:',
          options: ['(x + 3)/(x − 2)', '(x − 3)/(x + 2)', '(x − 1)/(2x + 3)', '(2x − 3)/(x + 1)'],
          answer: '(x + 3)/(x − 2)',
          difficulty: 'Medium',
          hint: 'Cross-multiply y(x − 1) = 2x + 3 and collect x terms.',
          solution: 'yx − y = 2x + 3 ⇒ x(y − 2) = y + 3 ⇒ x = (y + 3)/(y − 2). So f⁻¹(x) = (x + 3)/(x − 2).',
          similar: {
            question: 'The inverse of f(x) = (x + 1)/(x − 2), x ≠ 2, is:',
            options: ['(2x + 1)/(x − 1)', '(2x − 1)/(x + 1)', '(x − 2)/(x + 1)', '(x + 2)/(x − 1)'],
            answer: '(2x + 1)/(x − 1)',
            solution: 'y(x − 2) = x + 1 ⇒ x(y − 1) = 2y + 1 ⇒ x = (2y + 1)/(y − 1).',
          },
        },
        {
          question: 'f : [1, ∞) → [2, ∞), f(x) = x² − 2x + 3. Then f⁻¹(x) is:',
          options: ['1 + √(x − 2)', '1 − √(x − 2)', '√(x − 2) − 1', '1 + √(x + 2)'],
          answer: '1 + √(x − 2)',
          difficulty: 'Hard',
          hint: 'Complete the square and remember x ≥ 1.',
          solution: 'y = (x − 1)² + 2 ⇒ (x − 1)² = y − 2 ⇒ x − 1 = √(y − 2) (positive root since x ≥ 1). So f⁻¹(x) = 1 + √(x − 2).',
          similar: {
            question: 'f : [−2, ∞) → [−3, ∞), f(x) = x² + 4x + 1. Then f⁻¹(x) is:',
            options: ['−2 + √(x + 3)', '2 + √(x + 3)', '−2 − √(x + 3)', '−2 + √(x − 3)'],
            answer: '−2 + √(x + 3)',
            solution: 'y = (x + 2)² − 3 ⇒ x + 2 = √(y + 3) (since x ≥ −2) ⇒ x = −2 + √(y + 3).',
          },
        },
      ],
    },
  ],
};
