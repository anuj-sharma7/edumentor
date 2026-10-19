import type { StudyChapter } from '../types';

export const electricChargesFields: StudyChapter = {
  name: 'Electric Charges and Fields',
  subject: 'Physics',
  classLevel: 12,
  summary:
    'Coulomb\'s law, electric field, dipoles and Gauss\'s law form the foundation of all of electrostatics. Expect at least one question every paper, usually on Gauss\'s law, dipoles or field of continuous charge distributions.',
  mostRepeated: [
    'Flux through a closed surface depends ==only on the charge enclosed==: Φ = q_enc/ε₀, not on the shape or size of the surface.',
    'Charge at the centre of a cube: ==q/6ε₀ through each face==; at a corner: q/8ε₀ through the whole cube.',
    'Dipole field: ==axial 2kp/r³, equatorial kp/r³== (antiparallel to p) - ratio 2 : 1 at equal distances.',
    'Torque on a dipole ==τ = pE sinθ==; potential energy U = −pE cosθ; net force is zero in a uniform field.',
    'Field on the axis of a ring is ==maximum at x = R/√2== and zero at the centre.',
    'Infinite sheet: ==σ/2ε₀==; just outside a conductor: ==σ/ε₀==; inside a shell or conductor: zero.',
    'Identical conducting spheres touched together ==share the total charge equally==.',
  ],
  topics: [
    {
      name: 'Electric Charge and Coulomb\'s Law',
      theory:
        'Electric charge is ==quantised== (q = ne, e = 1.6 × 10⁻¹⁹ C), ==conserved== in every process and additive (a scalar). Charging by friction transfers electrons; charging by induction needs no contact and leaves the inducing body unchanged.\n\nCoulomb\'s law gives the force between two point charges: ==F = kq₁q₂/r²== with k = 1/4πε₀ = 9 × 10⁹ N m² C⁻². The force acts along the line joining the charges, is attractive for unlike and repulsive for like charges, and obeys Newton\'s third law. In a medium of dielectric constant K the force becomes ==F/K==.\n\nWhen several charges act on one charge, the ==principle of superposition== applies: add the individual forces as vectors. For a free third charge to be in equilibrium between two like charges, it lies between them, closer to the smaller one; for unlike charges the null point lies outside, beyond the smaller charge.',
      keyPoints: [
        'Charge is quantised, conserved and invariant (does not depend on speed).',
        '==F ∝ 1/r²== and acts along the line joining the charges.',
        'In a medium, F_medium = F_air/K.',
        'Touching identical conductors ==share charge equally==: q = (q₁ + q₂)/2 each.',
        'Null point for unlike charges lies ==outside, near the smaller charge==.',
      ],
      formulas: ['F = q₁q₂/(4πε₀r²)', 'k = 9 × 10⁹ N m² C⁻²', 'q = ne', 'F_medium = F/K'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - charged pendulum problems',
        question:
          'Two identical charged balls hang from a common point by equal strings. When immersed in a liquid of density σ and dielectric constant K, the angle between the strings is unchanged. The density ρ of the balls is:',
        approach: [
          'In air: tan θ = F/(mg).',
          'In liquid: electric force becomes F/K and effective weight becomes mg(1 − σ/ρ) due to buoyancy.',
          'Equal angles: F/mg = (F/K)/[mg(1 − σ/ρ)] ⇒ K(1 − σ/ρ) = 1.',
          'Solve: ρ = Kσ/(K − 1).',
        ],
        answer: 'ρ = Kσ/(K − 1)',
      },
      questions: [
        {
          question: 'Two point charges 2 μC and 3 μC are 30 cm apart in air. The force between them is:',
          options: ['0.6 N', '6 N', '0.06 N', '1.8 N'],
          answer: '0.6 N',
          difficulty: 'Easy',
          hint: 'Use F = kq₁q₂/r² with r in metres.',
          solution: 'F = 9 × 10⁹ × 2 × 10⁻⁶ × 3 × 10⁻⁶ / (0.3)² = 0.054/0.09 = 0.6 N.',
          similar: {
            question: 'Two point charges 4 μC and 5 μC are 20 cm apart in air. The force between them is:',
            options: ['4.5 N', '0.45 N', '9 N', '2.25 N'],
            answer: '4.5 N',
            solution: 'F = 9 × 10⁹ × 20 × 10⁻¹² / 0.04 = 0.18/0.04 = 4.5 N.',
          },
        },
        {
          question:
            'Two identical conducting spheres carry +8 μC and −2 μC and attract with force F. They are touched and put back at the same separation. The new force is:',
          options: ['9F/16, repulsive', '9F/16, attractive', '16F/9, repulsive', 'F/4, attractive'],
          answer: '9F/16, repulsive',
          difficulty: 'Medium',
          hint: 'After contact each sphere has half of the algebraic sum of charges.',
          solution:
            'Initially F ∝ 8 × 2 = 16. After contact each has (8 − 2)/2 = +3 μC, so F\' ∝ 3 × 3 = 9 and the charges are alike. F\' = 9F/16, repulsive.',
          similar: {
            question:
              'Identical conducting spheres with +6 μC and −2 μC attract with force F. After touching and returning to the same separation, the force is:',
            options: ['F/3, repulsive', 'F/3, attractive', '3F, repulsive', '2F/3, repulsive'],
            answer: 'F/3, repulsive',
            solution: 'Initially F ∝ 12. After contact each has +2 μC, F\' ∝ 4 ⇒ F\' = F/3, repulsive (like charges).',
          },
        },
        {
          question:
            'Charges +q and −4q are fixed at x = 0 and x = d. A third charge is placed on the x-axis so that the net force on it is zero. Its position is:',
          options: ['x = −d', 'x = d/3', 'x = 2d', 'x = d/2'],
          answer: 'x = −d',
          difficulty: 'Hard',
          hint: 'For unlike charges the null point lies outside the pair, on the side of the smaller charge.',
          solution:
            'Between the charges both forces point the same way, so no balance there. Let the point be at distance x to the left of +q: kq/x² = k(4q)/(x + d)² ⇒ x + d = 2x ⇒ x = d. Position x = −d.',
          similar: {
            question:
              'Charges +q and +4q are fixed at x = 0 and x = 3a. Where should a third charge be placed on the x-axis to be in equilibrium?',
            options: ['x = a', 'x = 2a', 'x = −3a', 'x = 1.5a'],
            answer: 'x = a',
            solution:
              'For like charges the point lies between them: q/x² = 4q/(3a − x)² ⇒ 3a − x = 2x ⇒ x = a (closer to the smaller charge).',
          },
        },
      ],
    },
    {
      name: 'Electric Field and Field Lines',
      theory:
        'The electric field at a point is the force per unit positive test charge: ==E = F/q₀==. For a point charge, ==E = kq/r²==, directed away from a positive charge and towards a negative one. Fields of several charges add vectorially.\n\nA charge q in a uniform field E experiences a constant force qE, so it moves with uniform acceleration a = qE/m, exactly like a projectile under gravity. An electron and a proton in the same field feel the same force but very different accelerations.\n\nField lines are a picture of the field: the tangent gives the direction and the ==density of lines gives the strength==. They start on positive charges and end on negative charges, ==never intersect== (the field would have two directions at a point), do not form closed loops in electrostatics, and meet a conductor surface at right angles.',
      keyPoints: [
        'E is a vector; superpose fields of individual charges.',
        'A charge in uniform E moves like a projectile: a = qE/m.',
        '==Field lines never cross== and never form closed loops.',
        'Crowded lines ⇒ strong field; parallel equally spaced lines ⇒ uniform field.',
      ],
      formulas: ['E = F/q₀', 'E = kq/r²', 'a = qE/m', 'tan θ = qE/mg (charged pendulum)'],
      diagram: 'electric-field-lines',
      diagramCaption: 'Field lines leave the positive charge and end on the negative charge; their density shows field strength.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - charged bob in a field',
        question:
          'A small ball of mass m and charge q hangs from a thread in a uniform horizontal electric field E. The angle made by the thread with the vertical in equilibrium is:',
        approach: [
          'Forces on the ball: weight mg down, electric force qE horizontal, tension along the thread.',
          'Resolve: T cos θ = mg and T sin θ = qE.',
          'Divide: tan θ = qE/mg.',
        ],
        answer: 'θ = tan⁻¹(qE/mg)',
      },
      questions: [
        {
          question: 'The electric field at a distance of 30 cm from a point charge of 2 nC is:',
          options: ['200 N/C', '60 N/C', '2000 N/C', '600 N/C'],
          answer: '200 N/C',
          difficulty: 'Easy',
          hint: 'E = kq/r².',
          solution: 'E = 9 × 10⁹ × 2 × 10⁻⁹ / (0.3)² = 18/0.09 = 200 N/C.',
          similar: {
            question: 'The electric field at 50 cm from a point charge of 5 nC is:',
            options: ['180 N/C', '90 N/C', '18 N/C', '360 N/C'],
            answer: '180 N/C',
            solution: 'E = 9 × 10⁹ × 5 × 10⁻⁹ / 0.25 = 45/0.25 = 180 N/C.',
          },
        },
        {
          question: 'Which of the following is NOT a property of electrostatic field lines?',
          options: [
            'They form closed loops',
            'They start on positive charges',
            'They never intersect',
            'They are normal to a conductor surface',
          ],
          answer: 'They form closed loops',
          difficulty: 'Easy',
          hint: 'Electrostatic field is conservative - think about what a closed loop would imply.',
          solution:
            'Electrostatic field lines begin on positive and end on negative charges, so they cannot be closed loops. The other three are genuine properties.',
          similar: {
            question: 'Two electric field lines never cross each other because:',
            options: [
              'The field would have two directions at that point',
              'Field lines repel each other',
              'Charges cannot exist at that point',
              'The field is zero there',
            ],
            answer: 'The field would have two directions at that point',
            solution: 'The tangent to a field line gives the field direction; at a crossing there would be two tangents, which is impossible for a unique field.',
          },
        },
        {
          question:
            'An electron is released from rest in a uniform field of 2 × 10⁴ N/C. Time taken to travel 1.5 cm (m_e = 9.1 × 10⁻³¹ kg):',
          options: ['2.9 × 10⁻⁹ s', '1.3 × 10⁻⁷ s', '2.9 × 10⁻⁶ s', '8.5 × 10⁻¹⁸ s'],
          answer: '2.9 × 10⁻⁹ s',
          difficulty: 'Hard',
          hint: 'Find a = eE/m, then use s = ½at².',
          solution:
            'a = eE/m = 1.6 × 10⁻¹⁹ × 2 × 10⁴ / 9.1 × 10⁻³¹ ≈ 3.5 × 10¹⁵ m/s². t = √(2s/a) = √(0.03/3.5 × 10¹⁵) ≈ 2.9 × 10⁻⁹ s.',
          similar: {
            question:
              'A proton is released from rest in a uniform field of 2 × 10⁴ N/C. Time to travel 1.5 cm (m_p = 1.67 × 10⁻²⁷ kg):',
            options: ['1.25 × 10⁻⁷ s', '2.9 × 10⁻⁹ s', '1.25 × 10⁻⁵ s', '5.4 × 10⁻⁸ s'],
            answer: '1.25 × 10⁻⁷ s',
            solution:
              'a = 1.6 × 10⁻¹⁹ × 2 × 10⁴ / 1.67 × 10⁻²⁷ ≈ 1.92 × 10¹² m/s². t = √(0.03/1.92 × 10¹²) ≈ 1.25 × 10⁻⁷ s - much longer than for the electron because the proton is heavier.',
          },
        },
      ],
    },
    {
      name: 'Field of Continuous Charge Distributions',
      theory:
        'For a continuous distribution, divide it into small elements dq (λ dl, σ dA or ρ dV), write dE = k dq/r² and ==integrate using symmetry== - components that cancel by symmetry are dropped first.\n\nOn the axis of a uniformly charged ring of radius R at distance x: ==E = kQx/(x² + R²)^(3/2)==. It is zero at the centre, ==maximum at x = R/√2== (E_max = 2kQ/(3√3R²)), and for x ≫ R it reduces to kQ/x², like a point charge.\n\nFor a straight line charge, the perpendicular field at distance r is E = (kλ/r)(sin α + sin β), which gives ==2kλ/r for an infinite wire==. For a circular arc of radius R subtending angle φ, the field at the centre is ==2kλ sin(φ/2)/R==; a semicircle gives 2kλ/R and a full ring gives zero.',
      keyPoints: [
        'Use symmetry to cancel components before integrating.',
        'Ring: E = 0 at centre, ==maximum at x = R/√2==.',
        'Infinite line charge: E = 2kλ/r = λ/(2πε₀r).',
        'Arc of angle φ: E_centre = 2kλ sin(φ/2)/R.',
      ],
      formulas: [
        'E_ring(axis) = kQx/(x² + R²)^(3/2)',
        'E_max = 2kQ/(3√3 R²) at x = R/√2',
        'E_line = (kλ/r)(sin α + sin β)',
        'E_arc = 2kλ sin(φ/2)/R',
      ],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - ring and arc fields',
        question: 'At what distance from the centre, along the axis of a uniformly charged ring of radius R, is the electric field maximum?',
        approach: [
          'Write E(x) = kQx/(x² + R²)^(3/2).',
          'Set dE/dx = 0: (x² + R²)^(3/2) − 3x²(x² + R²)^(1/2) = 0.',
          'Simplify: x² + R² = 3x² ⇒ x = R/√2.',
        ],
        answer: 'x = R/√2',
      },
      questions: [
        {
          question: 'The electric field at the centre of a uniformly charged circular ring is:',
          options: ['Zero', 'kQ/R²', 'kQ/2R²', 'Infinite'],
          answer: 'Zero',
          difficulty: 'Easy',
          hint: 'Pair each element with the diametrically opposite one.',
          solution: 'Fields of diametrically opposite elements are equal and opposite, so they cancel in pairs. Net field at the centre is zero.',
          similar: {
            question: 'At a point on the axis of a charged ring very far from it (x ≫ R), the field behaves like:',
            options: ['kQ/x²', 'kQ/R²', 'kQx/R³', 'Zero'],
            answer: 'kQ/x²',
            solution: 'E = kQx/(x² + R²)^(3/2); for x ≫ R, (x² + R²)^(3/2) ≈ x³, so E ≈ kQ/x² - a point charge.',
          },
        },
        {
          question: 'The maximum value of the electric field on the axis of a uniformly charged ring (charge Q, radius R) is:',
          options: ['2kQ/(3√3 R²)', 'kQ/R²', 'kQ/(2R²)', 'kQ/(2√2 R²)'],
          answer: '2kQ/(3√3 R²)',
          difficulty: 'Medium',
          hint: 'The maximum occurs at x = R/√2; substitute it into the axial formula.',
          solution:
            'At x = R/√2: x² + R² = 3R²/2, so (x² + R²)^(3/2) = (3/2)^(3/2) R³. E = kQ(R/√2)/[(3√3/(2√2))R³] = 2kQ/(3√3 R²).',
          similar: {
            question: 'On the axis of a charged ring of radius R, the field is maximum at a distance:',
            options: ['R/√2', 'R', '√2 R', 'R/2'],
            answer: 'R/√2',
            solution: 'Differentiating E = kQx/(x² + R²)^(3/2) and setting it to zero gives x² + R² = 3x², i.e. x = R/√2.',
          },
        },
        {
          question: 'A charge Q is spread uniformly over a semicircular wire of radius R. The field at the centre is:',
          options: ['Q/(2π²ε₀R²)', 'Q/(4π²ε₀R²)', 'Q/(4πε₀R²)', 'Zero'],
          answer: 'Q/(2π²ε₀R²)',
          difficulty: 'Hard',
          hint: 'For a semicircle E = 2kλ/R with λ = Q/(πR).',
          solution:
            'Horizontal components cancel; summing vertical components gives E = 2kλ/R. With λ = Q/πR: E = 2Q/(4πε₀ · πR²) = Q/(2π²ε₀R²).',
          similar: {
            question: 'A charge Q is spread uniformly over a quarter-circle arc of radius R. The field at the centre is:',
            options: ['Q/(√2 π²ε₀R²)', 'Q/(2π²ε₀R²)', 'Q/(4πε₀R²)', '√2 Q/(π²ε₀R²)'],
            answer: 'Q/(√2 π²ε₀R²)',
            solution:
              'E = 2kλ sin(φ/2)/R with φ = π/2 and λ = Q/(πR/2) = 2Q/(πR). E = 2k(2Q/πR)(1/√2)/R = 2√2 kQ/(πR²) = Q/(√2 π²ε₀R²).',
          },
        },
      ],
    },
    {
      name: 'Electric Dipole',
      theory:
        'Two equal and opposite charges ±q separated by 2a form an electric dipole with ==dipole moment p = q(2a)==, directed from −q to +q. For a short dipole, the field on the axial line is ==E = 2kp/r³== (along p) and on the equatorial line ==E = kp/r³== (opposite to p). At a general point E = (kp/r³)√(1 + 3cos²θ). Dipole fields fall as 1/r³.\n\nIn a uniform field E the forces on the two charges cancel (==net force zero==), but they form a couple: ==τ = p × E, |τ| = pE sinθ==. The potential energy is ==U = −pE cosθ==, minimum (stable) at θ = 0 and maximum (unstable) at θ = 180°. Work to rotate from θ₁ to θ₂ is W = pE(cosθ₁ − cosθ₂); from stable to unstable it is 2pE.\n\nSlightly displaced from θ = 0, a dipole performs angular SHM with period T = 2π√(I/pE). In a non-uniform field a dipole feels a net force as well as a torque.',
      keyPoints: [
        'p points from −q to +q; SI unit C m.',
        '==E_axial : E_equatorial = 2 : 1== at the same distance.',
        'Uniform field: zero net force, torque pE sinθ.',
        'Work from θ = 0 to 180° is ==2pE==.',
        'Small oscillations: T = 2π√(I/pE).',
      ],
      formulas: ['p = q × 2a', 'E_axial = 2kp/r³', 'E_eq = kp/r³', 'τ = pE sinθ', 'U = −pE cosθ', 'W = pE(cosθ₁ − cosθ₂)'],
      diagram: 'electric-dipole',
      diagramCaption: 'An electric dipole: field along the axial line is parallel to p, on the equatorial line it is antiparallel.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - work and energy of dipoles',
        question: 'A dipole of moment 5 × 10⁻⁹ C m is aligned with a uniform field of 4 × 10⁵ N/C. Work needed to rotate it by 180° is:',
        approach: [
          'Use W = pE(cosθ₁ − cosθ₂) with θ₁ = 0, θ₂ = 180°.',
          'W = pE(1 − (−1)) = 2pE.',
          'W = 2 × 5 × 10⁻⁹ × 4 × 10⁵ = 4 × 10⁻³ J.',
        ],
        answer: '4 × 10⁻³ J',
      },
      questions: [
        {
          question: 'For a short dipole, the ratio of field on the axial line to that on the equatorial line at the same distance is:',
          options: ['2 : 1', '1 : 2', '1 : 1', '4 : 1'],
          answer: '2 : 1',
          difficulty: 'Easy',
          hint: 'Compare 2kp/r³ and kp/r³.',
          solution: 'E_axial/E_eq = (2kp/r³)/(kp/r³) = 2.',
          similar: {
            question: 'On the equatorial line of a dipole, the electric field is directed:',
            options: ['Opposite to p', 'Along p', 'Perpendicular to p', 'Radially outward'],
            answer: 'Opposite to p',
            solution: 'On the equatorial line the components along the line cancel and the remaining component points from +q towards −q, i.e. antiparallel to p.',
          },
        },
        {
          question: 'A dipole of moment 4 × 10⁻⁹ C m makes 30° with a uniform field of 5 × 10⁴ N/C. The torque on it is:',
          options: ['10⁻⁴ N m', '2 × 10⁻⁴ N m', '1.73 × 10⁻⁴ N m', '0.5 × 10⁻⁴ N m'],
          answer: '10⁻⁴ N m',
          difficulty: 'Medium',
          hint: 'τ = pE sinθ.',
          solution: 'τ = 4 × 10⁻⁹ × 5 × 10⁴ × sin30° = 2 × 10⁻⁴ × 0.5 = 10⁻⁴ N m.',
          similar: {
            question: 'A dipole of moment 2 × 10⁻⁸ C m makes 60° with a uniform field of 10⁴ N/C. The torque is:',
            options: ['√3 × 10⁻⁴ N m', '10⁻⁴ N m', '2 × 10⁻⁴ N m', '√3 × 10⁻⁸ N m'],
            answer: '√3 × 10⁻⁴ N m',
            solution: 'τ = 2 × 10⁻⁸ × 10⁴ × sin60° = 2 × 10⁻⁴ × (√3/2) = √3 × 10⁻⁴ N m.',
          },
        },
        {
          question:
            'A dipole of moment p and moment of inertia I is slightly rotated from its stable position in a uniform field E and released. Its period of oscillation is:',
          options: ['2π√(I/pE)', '2π√(pE/I)', '2π√(2I/pE)', 'π√(I/pE)'],
          answer: '2π√(I/pE)',
          difficulty: 'Hard',
          hint: 'For small θ, the restoring torque is τ ≈ −pEθ. Compare with Iα = −Cθ.',
          solution: 'Iα = −pE sinθ ≈ −pEθ ⇒ ω² = pE/I ⇒ T = 2π√(I/pE).',
          similar: {
            question: 'A dipole oscillates in a uniform field with period T. If the field is made 4 times, the period becomes:',
            options: ['T/2', '2T', 'T/4', '4T'],
            answer: 'T/2',
            solution: 'T = 2π√(I/pE) ∝ 1/√E. E → 4E ⇒ T → T/2.',
          },
        },
      ],
    },
    {
      name: 'Electric Flux and Gauss\'s Law',
      theory:
        'Electric flux through a surface is ==Φ = ∮E · dA = EA cosθ== for a uniform field, where θ is the angle between E and the area vector (normal). Flux is a scalar measured in N m²/C; flux entering a closed surface is negative and leaving is positive.\n\n==Gauss\'s law==: the total flux through any closed surface equals the charge enclosed divided by ε₀, ==Φ = q_enc/ε₀==. Charges outside contribute zero net flux, although they do change the field at points on the surface.\n\nSymmetry tricks are popular in JEE. A charge q at the centre of a cube gives ==q/6ε₀ through each face==. A charge at a corner is shared by 8 cubes, so the flux through one cube is q/8ε₀ and through each of the three far faces q/24ε₀ (the three faces touching the charge get zero). A charge at distance a/2 above the centre of a square of side a gives q/6ε₀ through the square.',
      keyPoints: [
        'Φ depends only on enclosed charge, not on the shape of the surface.',
        'Uniform field through any closed surface: ==net flux zero==.',
        'Cube: centre q/6ε₀ per face; corner q/8ε₀ total, q/24ε₀ per far face.',
        'Hemisphere in uniform field E along its axis: flux through curved part = πR²E.',
      ],
      formulas: ['Φ = EA cosθ', 'Φ = q_enc/ε₀', 'Φ_face (charge at cube centre) = q/6ε₀'],
      diagram: 'gauss-surface',
      diagramCaption: 'A closed Gaussian surface: net outward flux equals enclosed charge/ε₀.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - flux through cube in a non-uniform field',
        question:
          'The field in a region is E_x = αx^(1/2), E_y = E_z = 0 with α = 800 N/C m^(−1/2). A cube of side 0.1 m has faces at x = 0.1 m and x = 0.2 m. Find the net flux and the charge inside.',
        approach: [
          'Only the faces perpendicular to x carry flux: Φ = E(2a)a² − E(a)a².',
          'Φ = α a²(√(2a) − √a) = 800 × 0.01 × (√0.2 − √0.1) ≈ 1.05 N m²/C.',
          'q = ε₀Φ = 8.85 × 10⁻¹² × 1.05 ≈ 9.3 × 10⁻¹² C.',
        ],
        answer: 'Φ ≈ 1.05 N m²/C, q ≈ 9.3 × 10⁻¹² C',
      },
      questions: [
        {
          question: 'A closed surface encloses charges +2 μC and −5 μC; a charge +1 μC lies outside. Net flux through the surface:',
          options: ['−3 × 10⁻⁶/ε₀', '−2 × 10⁻⁶/ε₀', '3 × 10⁻⁶/ε₀', '−4 × 10⁻⁶/ε₀'],
          answer: '−3 × 10⁻⁶/ε₀',
          difficulty: 'Easy',
          hint: 'Only enclosed charges count.',
          solution: 'q_enc = 2 − 5 = −3 μC. Φ = −3 × 10⁻⁶/ε₀ (the outside charge contributes nothing).',
          similar: {
            question: 'A closed surface encloses +4 μC and −1 μC, with −6 μC outside. Net flux:',
            options: ['3 × 10⁻⁶/ε₀', '−3 × 10⁻⁶/ε₀', '−3 × 10⁻⁶ ε₀', '9 × 10⁻⁶/ε₀'],
            answer: '3 × 10⁻⁶/ε₀',
            solution: 'q_enc = 4 − 1 = +3 μC ⇒ Φ = 3 × 10⁻⁶/ε₀.',
          },
        },
        {
          question: 'A point charge q is placed at one corner of a cube. Total flux through the cube is:',
          options: ['q/(8ε₀)', 'q/(6ε₀)', 'q/ε₀', 'q/(24ε₀)'],
          answer: 'q/(8ε₀)',
          difficulty: 'Medium',
          hint: 'How many identical cubes would surround the corner completely?',
          solution: 'Eight cubes meeting at the corner would enclose q fully, so each cube gets q/(8ε₀).',
          similar: {
            question: 'A point charge q is at a corner of a cube. Flux through each face NOT touching the charge is:',
            options: ['q/(24ε₀)', 'q/(8ε₀)', 'q/(6ε₀)', 'Zero'],
            answer: 'q/(24ε₀)',
            solution: 'Faces touching the corner have E in their plane ⇒ zero flux. The q/8ε₀ is shared by 3 far faces: q/(24ε₀) each.',
          },
        },
        {
          question: 'A point charge q is at a distance a/2 directly above the centre of a square of side a. Flux through the square is:',
          options: ['q/(6ε₀)', 'q/(4ε₀)', 'q/(2ε₀)', 'q/(8ε₀)'],
          answer: 'q/(6ε₀)',
          difficulty: 'Hard',
          hint: 'Imagine the square as one face of a cube with the charge at its centre.',
          solution: 'The charge is at the centre of a cube of side a of which the square is one face. By symmetry each face gets q/(6ε₀).',
          similar: {
            question: 'A point charge q is at the centre of the flat face of a hemisphere. Flux through the curved surface is:',
            options: ['q/(2ε₀)', 'q/ε₀', 'q/(4ε₀)', 'Zero'],
            answer: 'q/(2ε₀)',
            solution: 'Complete the sphere: total flux q/ε₀ is split equally between the two hemispheres (no flux through the flat face, where E is tangential). Curved surface: q/(2ε₀).',
          },
        },
      ],
    },
    {
      name: 'Applications of Gauss\'s Law',
      theory:
        'Gauss\'s law gives fields quickly when there is symmetry. For an ==infinite line charge== a cylindrical Gaussian surface gives E = λ/(2πε₀r). For an ==infinite plane sheet== a pill-box gives E = σ/(2ε₀), independent of distance. Two oppositely charged parallel sheets give σ/ε₀ between them and zero outside. Just outside a ==charged conductor== the field is σ/ε₀, normal to the surface.\n\nFor a ==uniformly charged thin spherical shell==, E = kQ/r² outside (as if all charge were at the centre) and ==E = 0 inside==. For a ==uniformly charged solid (non-conducting) sphere==, E = kQr/R³ = ρr/(3ε₀) inside, rising linearly to kQ/R² at the surface and then falling as 1/r².\n\nFor non-uniform charge density ρ(r), find the enclosed charge q(r) = ∫ρ 4πr² dr first and then apply E · 4πr² = q(r)/ε₀.',
      keyPoints: [
        'Line: λ/(2πε₀r); sheet: σ/2ε₀; conductor surface: ==σ/ε₀==.',
        'Shell: ==zero inside==, kQ/r² outside.',
        'Solid sphere: E ∝ r inside, ∝ 1/r² outside; maximum at the surface.',
        'Two parallel sheets ±σ: field σ/ε₀ between them, ==zero outside==.',
      ],
      formulas: ['E_line = λ/(2πε₀r)', 'E_sheet = σ/(2ε₀)', 'E_conductor = σ/ε₀', 'E_inside sphere = kQr/R³ = ρr/(3ε₀)', 'E_outside = kQ/r²'],
      pyq: {
        exam: 'JEE Main & Advanced',
        frequency: 'Recurring - non-uniform charge densities',
        question:
          'A sphere of radius R has charge density ρ = ρ₀r/R. The electric field at a distance r < R from the centre is:',
        approach: [
          'Enclosed charge: q(r) = ∫₀^r (ρ₀r\'/R) 4πr\'² dr\' = πρ₀r⁴/R.',
          'Gauss\'s law: E · 4πr² = q(r)/ε₀.',
          'E = (πρ₀r⁴/R)/(4πε₀r²) = ρ₀r²/(4ε₀R).',
        ],
        answer: 'E = ρ₀r²/(4ε₀R)',
      },
      questions: [
        {
          question: 'The electric field inside a uniformly charged thin spherical shell is:',
          options: ['Zero', 'kQ/R²', 'kQr/R³', 'Uniform and non-zero'],
          answer: 'Zero',
          difficulty: 'Easy',
          hint: 'A Gaussian sphere inside the shell encloses no charge.',
          solution: 'For r < R, q_enc = 0, so E · 4πr² = 0 ⇒ E = 0 everywhere inside.',
          similar: {
            question: 'The electric field just outside the surface of a charged conductor with surface charge density σ is:',
            options: ['σ/ε₀', 'σ/(2ε₀)', '2σ/ε₀', 'Zero'],
            answer: 'σ/ε₀',
            solution: 'A pill-box with one face inside the conductor (E = 0) gives EA = σA/ε₀ ⇒ E = σ/ε₀.',
          },
        },
        {
          question: 'An infinite line charge has λ = 2 μC/m. The field at 9 cm from it is:',
          options: ['4 × 10⁵ N/C', '2 × 10⁵ N/C', '8 × 10⁵ N/C', '4 × 10⁴ N/C'],
          answer: '4 × 10⁵ N/C',
          difficulty: 'Medium',
          hint: 'E = λ/(2πε₀r) = 2kλ/r.',
          solution: 'E = 2 × 9 × 10⁹ × 2 × 10⁻⁶ / 0.09 = 3.6 × 10⁴/0.09 = 4 × 10⁵ N/C.',
          similar: {
            question: 'An infinite line charge has λ = 3 μC/m. The field at 18 cm from it is:',
            options: ['3 × 10⁵ N/C', '1.5 × 10⁵ N/C', '6 × 10⁵ N/C', '3 × 10⁴ N/C'],
            answer: '3 × 10⁵ N/C',
            solution: 'E = 2kλ/r = 2 × 9 × 10⁹ × 3 × 10⁻⁶ / 0.18 = 5.4 × 10⁴/0.18 = 3 × 10⁵ N/C.',
          },
        },
        {
          question:
            'For a uniformly charged solid sphere of radius R, the field at r = R/2 equals the field at an outside point at distance:',
          options: ['√2 R', '2R', '4R', 'R/√2'],
          answer: '√2 R',
          difficulty: 'Hard',
          hint: 'Inside E = kQr/R³; outside E = kQ/r².',
          solution: 'At R/2: E = kQ(R/2)/R³ = kQ/(2R²). Outside: kQ/r² = kQ/(2R²) ⇒ r = √2 R.',
          similar: {
            question: 'For a uniformly charged solid sphere of radius R, the field at r = R/3 equals the field outside at distance:',
            options: ['√3 R', '3R', '9R', 'R/√3'],
            answer: '√3 R',
            solution: 'At R/3: E = kQ/(3R²). Outside: kQ/r² = kQ/(3R²) ⇒ r = √3 R.',
          },
        },
      ],
    },
  ],
};
