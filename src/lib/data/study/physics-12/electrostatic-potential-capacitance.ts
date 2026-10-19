import type { StudyChapter } from '../types';

export const electrostaticPotentialCapacitance: StudyChapter = {
  name: 'Electrostatic Potential and Capacitance',
  subject: 'Physics',
  classLevel: 12,
  summary:
    'Potential, potential energy, conductors and capacitors - including dielectrics, combinations and stored energy. Capacitor questions (dielectric slabs, charge sharing, energy loss) appear in almost every JEE Main shift.',
  mostRepeated: [
    'Battery ==disconnected ⇒ Q constant==; battery ==connected ⇒ V constant== - decide this first in every capacitor question.',
    'Dielectric slab of thickness t: ==C = ε₀A/(d − t + t/K)==; a metal slab is the case K → ∞.',
    'Charge sharing: common potential ==V = (C₁V₁ + C₂V₂)/(C₁ + C₂)==, energy loss C₁C₂(V₁ − V₂)²/2(C₁ + C₂).',
    'E = −dV/dr; ==equipotential surfaces are perpendicular to field lines== and no work is done moving along them.',
    'Connected conducting spheres: ==q ∝ R, σ ∝ 1/R== - sharp points have high charge density.',
    'Energy U = ½CV² = Q²/2C; energy density ==½ε₀E²==.',
    'Charging through a resistor: battery supplies CV², ==half is lost as heat== regardless of R.',
  ],
  topics: [
    {
      name: 'Electric Potential and Potential Energy',
      theory:
        'The electric potential at a point is the work done per unit positive charge in bringing a test charge from infinity to that point without acceleration: ==V = W/q₀==. For a point charge, ==V = kq/r==. Potential is a scalar, so the potentials of several charges simply add algebraically.\n\nThe work done in moving a charge q between two points is ==W = q(V_B − V_A)==, independent of path, because the electrostatic field is conservative. Hence no work is done in moving a charge round a closed loop.\n\nThe potential energy of a system of point charges is the work done to assemble them from infinity: ==U = Σ kqᵢqⱼ/rᵢⱼ== taken over every pair once. For a charged particle moving in a field, energy conservation (K + qV = constant) gives speeds and distances of closest approach.',
      keyPoints: [
        'Potential is a scalar; add with signs.',
        '==Work depends only on end points==, never on the path.',
        'System energy: sum over every pair once (3 charges ⇒ 3 pairs, 4 charges ⇒ 6 pairs).',
        'Closest approach: K = kq₁q₂/r_min (head-on).',
      ],
      formulas: ['V = kq/r', 'W = q(V_B − V_A)', 'U = kq₁q₂/r', '1 eV = 1.6 × 10⁻¹⁹ J'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - zero-potential points',
        question: 'Charges 5 μC and −2 μC are placed at x = 0 and x = 6 cm. At which points on the x-axis is the potential zero?',
        approach: [
          'Between the charges (0 < x < 6): 5/x = 2/(6 − x) ⇒ 30 − 5x = 2x ⇒ x = 30/7 ≈ 4.3 cm.',
          'Beyond the smaller charge (x > 6): 5/x = 2/(x − 6) ⇒ 5x − 30 = 2x ⇒ x = 10 cm.',
          'To the left of 5 μC the larger charge always dominates, so no zero there.',
        ],
        answer: 'x ≈ 4.3 cm and x = 10 cm',
      },
      questions: [
        {
          question: 'The potential at 10 cm from a point charge of 2 nC is:',
          options: ['180 V', '18 V', '1800 V', '90 V'],
          answer: '180 V',
          difficulty: 'Easy',
          hint: 'V = kq/r.',
          solution: 'V = 9 × 10⁹ × 2 × 10⁻⁹ / 0.1 = 18/0.1 = 180 V.',
          similar: {
            question: 'The potential at 15 cm from a point charge of 5 nC is:',
            options: ['300 V', '30 V', '3000 V', '450 V'],
            answer: '300 V',
            solution: 'V = 9 × 10⁹ × 5 × 10⁻⁹ / 0.15 = 45/0.15 = 300 V.',
          },
        },
        {
          question: 'Three charges of 1 μC each are at the corners of an equilateral triangle of side 10 cm. The potential energy of the system is:',
          options: ['0.27 J', '0.09 J', '0.81 J', '0.18 J'],
          answer: '0.27 J',
          difficulty: 'Medium',
          hint: 'There are three pairs, each at distance a.',
          solution: 'U = 3kq²/a = 3 × 9 × 10⁹ × 10⁻¹² / 0.1 = 0.027/0.1 = 0.27 J.',
          similar: {
            question: 'Four equal charges q are at the corners of a square of side a. Potential energy of the system is:',
            options: ['(4 + √2)kq²/a', '4kq²/a', '6kq²/a', '(2 + √2)kq²/a'],
            answer: '(4 + √2)kq²/a',
            solution: 'Six pairs: 4 sides at a and 2 diagonals at √2a. U = 4kq²/a + 2kq²/(√2a) = (4 + √2)kq²/a.',
          },
        },
        {
          question:
            'An α-particle of kinetic energy 5 MeV moves head-on towards a gold nucleus (Z = 79). Distance of closest approach:',
          options: ['4.55 × 10⁻¹⁴ m', '2.27 × 10⁻¹⁴ m', '9.1 × 10⁻¹⁴ m', '4.55 × 10⁻¹⁵ m'],
          answer: '4.55 × 10⁻¹⁴ m',
          difficulty: 'Hard',
          hint: 'At closest approach all kinetic energy becomes electric potential energy.',
          solution:
            'K = k(2e)(79e)/r ⇒ r = 9 × 10⁹ × 158 × (1.6 × 10⁻¹⁹)² / (5 × 10⁶ × 1.6 × 10⁻¹⁹) = 9 × 10⁹ × 158 × 1.6 × 10⁻¹⁹ / 5 × 10⁶ ≈ 4.55 × 10⁻¹⁴ m.',
          similar: {
            question: 'A proton of kinetic energy 1 MeV moves head-on towards a nucleus with Z = 50. Distance of closest approach:',
            options: ['7.2 × 10⁻¹⁴ m', '3.6 × 10⁻¹⁴ m', '1.44 × 10⁻¹³ m', '7.2 × 10⁻¹⁵ m'],
            answer: '7.2 × 10⁻¹⁴ m',
            solution: 'r = k(e)(50e)/K = 9 × 10⁹ × 50 × 1.6 × 10⁻¹⁹ / 10⁶ = 7.2 × 10⁻¹⁴ m.',
          },
        },
      ],
    },
    {
      name: 'Potential of Dipoles and Shells, Equipotential Surfaces',
      theory:
        'For a short dipole, ==V = kp cosθ/r²==: maximum on the axis and ==zero everywhere on the equatorial plane== (although the field there is not zero). For a thin charged spherical shell, V = kQ/r outside and ==V = kQ/R (constant) inside==. For a solid uniformly charged sphere, V = kQ(3R² − r²)/2R³ inside, so V_centre = 1.5 V_surface.\n\nField and potential are linked by ==E = −dV/dr==, or in components E = −(∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂). The field points in the direction of fastest decrease of potential.\n\nAn equipotential surface has the same potential everywhere, so ==no work is done moving a charge along it== and the field is always ==perpendicular to it==. Equipotentials of a point charge are concentric spheres; of a uniform field, parallel planes. Equipotentials are closer together where the field is stronger. For concentric shells, the potential difference between them depends only on the inner charge.',
      keyPoints: [
        'Dipole: V = 0 on the equatorial plane, but E ≠ 0 there.',
        'Inside a shell: ==V constant, E zero==.',
        'E = −∇V; field points from high to low potential.',
        'Equipotentials ⟂ field lines; crowded equipotentials ⇒ strong field.',
      ],
      formulas: ['V_dipole = kp cosθ/r²', 'V_shell = kQ/R (inside), kQ/r (outside)', 'E = −dV/dr', 'V_centre (solid sphere) = 3kQ/2R'],
      diagram: 'equipotential-surfaces',
      diagramCaption: 'Equipotential surfaces are everywhere perpendicular to the field lines.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - field from a potential function',
        question: 'The potential in a region is V = 6xy − y + 2yz (volts). The electric field at (1, 1, 0) is:',
        approach: [
          'E = −(∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂).',
          '∂V/∂x = 6y = 6; ∂V/∂y = 6x − 1 + 2z = 5; ∂V/∂z = 2y = 2.',
          'E = −(6î + 5ĵ + 2k̂) V/m.',
        ],
        answer: '−(6î + 5ĵ + 2k̂) V/m',
      },
      questions: [
        {
          question: 'Work done in moving a 3 μC charge between two points on an equipotential surface at 100 V is:',
          options: ['Zero', '300 μJ', '3 × 10⁻⁴ J per metre', '100 J'],
          answer: 'Zero',
          difficulty: 'Easy',
          hint: 'W = qΔV.',
          solution: 'Both points are at the same potential, ΔV = 0 ⇒ W = 0.',
          similar: {
            question: 'The angle between the electric field and an equipotential surface is:',
            options: ['90°', '0°', '45°', '180°'],
            answer: '90°',
            solution: 'If E had a component along the surface, moving along it would need work, contradicting equal potential. So E ⟂ surface.',
          },
        },
        {
          question: 'The potential in a region is V = 5x² − 3y (volts, metres). The field at (1, 2) is:',
          options: ['(−10î + 3ĵ) V/m', '(10î − 3ĵ) V/m', '(−10î − 3ĵ) V/m', '(−5î + 3ĵ) V/m'],
          answer: '(−10î + 3ĵ) V/m',
          difficulty: 'Medium',
          hint: 'E = −∂V/∂x î − ∂V/∂y ĵ.',
          solution: '∂V/∂x = 10x = 10, ∂V/∂y = −3. E = −10î + 3ĵ V/m.',
          similar: {
            question: 'The potential in a region is V = 2xy (volts). The field at (1, 3) is:',
            options: ['(−6î − 2ĵ) V/m', '(6î + 2ĵ) V/m', '(−2î − 6ĵ) V/m', '(−6î + 2ĵ) V/m'],
            answer: '(−6î − 2ĵ) V/m',
            solution: '∂V/∂x = 2y = 6, ∂V/∂y = 2x = 2 ⇒ E = −6î − 2ĵ V/m.',
          },
        },
        {
          question:
            'Concentric thin shells of radii 10 cm and 20 cm carry 2 nC and 5 nC respectively. The potential difference V_inner − V_outer is:',
          options: ['90 V', '405 V', '315 V', '225 V'],
          answer: '90 V',
          difficulty: 'Hard',
          hint: 'The outer shell adds the same potential to every point inside it.',
          solution:
            'V_inner = k(2 × 10⁻⁹/0.1 + 5 × 10⁻⁹/0.2) = 9 × (20 + 25) = 405 V. V_outer = k(7 × 10⁻⁹)/0.2 = 315 V. Difference = 90 V = kq_inner(1/a − 1/b).',
          similar: {
            question: 'Concentric thin shells of radii 10 cm and 20 cm carry 2 nC and −10 nC respectively. The difference V_inner − V_outer is:',
            options: ['90 V (unchanged)', '0 V', '−360 V', '450 V'],
            answer: '90 V (unchanged)',
            solution: 'ΔV = kq_inner(1/a − 1/b) = 9 × 10⁹ × 2 × 10⁻⁹ × (10 − 5) = 90 V. The outer charge raises both potentials equally, so it does not matter.',
          },
        },
      ],
    },
    {
      name: 'Conductors in Electrostatic Equilibrium',
      theory:
        'In electrostatic equilibrium, inside a conductor ==E = 0== and the whole conductor is an ==equipotential==. Any excess charge resides on the ==outer surface==, and the field just outside is σ/ε₀, normal to the surface.\n\nSurface charge density is larger where the curvature is larger (σ ∝ 1/R), which is why sharp points leak charge (corona discharge, lightning conductors). When two spheres are joined by a thin wire they reach the same potential: kq₁/R₁ = kq₂/R₂, so ==q ∝ R and σ ∝ 1/R==.\n\nA cavity inside a conductor is field-free if it contains no charge - this is ==electrostatic shielding==. If a charge q is placed inside a cavity, −q is induced on the cavity wall (non-uniformly if q is off-centre) and +q appears on the outer surface, distributed uniformly for a spherical conductor, so the outside field does not reveal where q sits.',
      keyPoints: [
        'Inside a conductor: E = 0, V = constant.',
        'Excess charge only on surfaces; E outside is ⟂ surface.',
        'Joined spheres: ==q₁/q₂ = R₁/R₂, σ₁/σ₂ = R₂/R₁==.',
        'Charge q in a cavity ⇒ −q on inner wall, +q on outer surface.',
      ],
      formulas: ['E_surface = σ/ε₀', 'q₁/q₂ = R₁/R₂ (connected spheres)', 'σ₁/σ₂ = R₂/R₁'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - connected spheres',
        question: 'Two charged conducting spheres of radii R₁ and R₂ are connected by a long thin wire. The ratio of electric fields at their surfaces E₁/E₂ is:',
        approach: [
          'Same potential: q₁/R₁ = q₂/R₂.',
          'Surface field E = kq/R² = (kq/R)/R = V/R.',
          'Since V is the same, E ∝ 1/R ⇒ E₁/E₂ = R₂/R₁.',
        ],
        answer: 'E₁/E₂ = R₂/R₁',
      },
      questions: [
        {
          question: 'The electric field inside a charged hollow or solid conductor in electrostatic equilibrium is:',
          options: ['Zero', 'σ/ε₀', 'σ/2ε₀', 'Maximum at the centre'],
          answer: 'Zero',
          difficulty: 'Easy',
          hint: 'Free electrons move until they feel no force.',
          solution: 'If E ≠ 0 inside, free charges would move. In equilibrium they stop, so E = 0 inside.',
          similar: {
            question: 'The excess charge given to an isolated conductor resides:',
            options: ['On its outer surface', 'Uniformly through its volume', 'At its centre', 'Only at sharp points'],
            answer: 'On its outer surface',
            solution: 'A Gaussian surface just inside the conductor has E = 0, so it encloses no net charge; all excess charge is on the surface.',
          },
        },
        {
          question: 'Conducting spheres of radii 2 cm and 6 cm share a total charge of 80 μC after being joined by a wire. Charge on the smaller sphere:',
          options: ['20 μC', '60 μC', '40 μC', '10 μC'],
          answer: '20 μC',
          difficulty: 'Medium',
          hint: 'Equal potentials ⇒ q ∝ R.',
          solution: 'q₁ : q₂ = 2 : 6 = 1 : 3. q₁ = 80 × 1/4 = 20 μC.',
          similar: {
            question: 'Two spheres of radii 1 cm and 3 cm are joined by a wire. Ratio of surface charge densities σ_small : σ_large is:',
            options: ['3 : 1', '1 : 3', '1 : 9', '9 : 1'],
            answer: '3 : 1',
            solution: 'q ∝ R and σ = q/4πR² ∝ 1/R ⇒ σ₁/σ₂ = R₂/R₁ = 3.',
          },
        },
        {
          question: 'A point charge q is placed off-centre inside the cavity of a neutral spherical conducting shell. Charge on the outer surface is:',
          options: ['q, uniformly distributed', 'q, non-uniformly distributed', '−q, uniformly distributed', 'Zero'],
          answer: 'q, uniformly distributed',
          difficulty: 'Hard',
          hint: 'The conductor material shields the outside from the details inside the cavity.',
          solution:
            '−q is induced (non-uniformly) on the cavity wall. Neutrality puts +q on the outer surface; since E = 0 in the metal, the outer charge does not "know" where q is and spreads uniformly over the sphere.',
          similar: {
            question: 'A conducting shell carrying charge Q has a point charge q placed inside its cavity. Charge on the outer surface is:',
            options: ['Q + q', 'Q', 'Q − q', 'q'],
            answer: 'Q + q',
            solution: 'Inner surface gets −q. Total shell charge Q = −q + outer ⇒ outer = Q + q.',
          },
        },
      ],
    },
    {
      name: 'Capacitors and Capacitance',
      theory:
        'A capacitor is two conductors separated by an insulator; it stores charge ±Q with ==C = Q/V==, which depends only on geometry and the medium. Unit: farad (F).\n\nFor a ==parallel-plate capacitor==, the field between the plates is σ/ε₀, V = Ed, so ==C = ε₀A/d==. An isolated sphere has C = 4πε₀R (Earth ≈ 711 μF). A spherical capacitor has C = 4πε₀ab/(b − a), and a cylindrical one C = 2πε₀l/ln(b/a).\n\nIf n parallel plates are connected alternately to the two terminals, they form (n − 1) capacitors in parallel: ==C = (n − 1)ε₀A/d==. When plate separation changes, decide what is constant: an isolated capacitor keeps Q (so E stays the same and V changes); a capacitor connected to a battery keeps V.',
      keyPoints: [
        'C depends on geometry and medium, not on Q or V.',
        '==C = ε₀A/d== for parallel plates.',
        'Isolated: Q constant, E = σ/ε₀ constant when d changes.',
        'n alternately connected plates: (n − 1) capacitors in parallel.',
      ],
      formulas: ['C = Q/V', 'C = ε₀A/d', 'C_sphere = 4πε₀R', 'C_spherical = 4πε₀ab/(b − a)', 'C = (n − 1)ε₀A/d'],
      diagram: 'parallel-plate-capacitor',
      diagramCaption: 'Parallel-plate capacitor: uniform field σ/ε₀ between the plates.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - what stays constant?',
        question: 'A parallel-plate capacitor is charged and then disconnected from the battery. If the plate separation is increased, which quantity remains unchanged?',
        approach: [
          'Disconnected ⇒ charge Q cannot change.',
          'E = σ/ε₀ = Q/(Aε₀) depends only on Q and A ⇒ unchanged.',
          'C = ε₀A/d decreases, so V = Q/C and U = Q²/2C increase.',
        ],
        answer: 'Charge and the electric field between the plates',
      },
      questions: [
        {
          question: 'A parallel-plate capacitor has plate area 0.02 m² and separation 0.5 mm in air. Its capacitance is (ε₀ = 8.85 × 10⁻¹² F/m):',
          options: ['354 pF', '35.4 pF', '3.54 pF', '177 pF'],
          answer: '354 pF',
          difficulty: 'Easy',
          hint: 'C = ε₀A/d with d in metres.',
          solution: 'C = 8.85 × 10⁻¹² × 0.02 / 5 × 10⁻⁴ = 3.54 × 10⁻¹⁰ F = 354 pF.',
          similar: {
            question: 'Plate area 0.01 m², separation 1 mm in air. Capacitance:',
            options: ['88.5 pF', '8.85 pF', '885 pF', '44.3 pF'],
            answer: '88.5 pF',
            solution: 'C = 8.85 × 10⁻¹² × 0.01 / 10⁻³ = 8.85 × 10⁻¹¹ F = 88.5 pF.',
          },
        },
        {
          question: 'Treating the Earth as an isolated conducting sphere of radius 6.4 × 10⁶ m, its capacitance is about:',
          options: ['711 μF', '711 pF', '7.1 F', '71 mF'],
          answer: '711 μF',
          difficulty: 'Medium',
          hint: 'C = 4πε₀R = R/k.',
          solution: 'C = 6.4 × 10⁶ / 9 × 10⁹ = 7.11 × 10⁻⁴ F ≈ 711 μF.',
          similar: {
            question: 'Capacitance of an isolated conducting sphere of radius 9 cm is:',
            options: ['10 pF', '1 pF', '100 pF', '10 μF'],
            answer: '10 pF',
            solution: 'C = R/k = 0.09/9 × 10⁹ = 10⁻¹¹ F = 10 pF.',
          },
        },
        {
          question: 'Five identical plates, each of area A, are placed parallel with equal gaps d; alternate plates are connected together. Capacitance between the two terminals:',
          options: ['4ε₀A/d', '5ε₀A/d', 'ε₀A/4d', 'ε₀A/5d'],
          answer: '4ε₀A/d',
          difficulty: 'Hard',
          hint: 'Count the gaps; each gap is a capacitor and they turn out to be in parallel.',
          solution: 'Five plates form 4 capacitors, each ε₀A/d. Alternate connection puts all of them in parallel: C = 4ε₀A/d.',
          similar: {
            question: 'Seven identical plates with gaps d are connected alternately. Capacitance:',
            options: ['6ε₀A/d', '7ε₀A/d', 'ε₀A/6d', '3ε₀A/d'],
            answer: '6ε₀A/d',
            solution: '(n − 1) = 6 capacitors in parallel ⇒ C = 6ε₀A/d.',
          },
        },
      ],
    },
    {
      name: 'Dielectrics and Polarisation',
      theory:
        'A dielectric is an insulator whose molecules get polarised in an external field. The induced surface charges set up an opposing field, so the field inside is reduced to ==E = E₀/K==, where K (dielectric constant) = ε/ε₀ ≥ 1. Polar molecules (water, HCl) have permanent dipoles that align; non-polar molecules (O₂, H₂) acquire induced dipoles.\n\nFilling a capacitor completely with a dielectric multiplies its capacitance: ==C = Kε₀A/d==. A slab of thickness t (< d) gives ==C = ε₀A/(d − t + t/K)==; a metal slab (K → ∞) gives ε₀A/(d − t).\n\nDielectrics stacked one over another behave like capacitors in ==series==; dielectrics side by side (each filling part of the area) behave like capacitors in ==parallel==. With the battery disconnected, inserting a dielectric reduces V and U by K; with the battery connected, Q and U increase by K.',
      keyPoints: [
        'E inside dielectric = E₀/K; C → KC.',
        '==Slab: C = ε₀A/(d − t + t/K)==.',
        'Stacked layers ⇒ series; side-by-side ⇒ parallel.',
        'Isolated: V → V/K, U → U/K. Battery on: Q → KQ, U → KU.',
      ],
      formulas: ['C = Kε₀A/d', 'C = ε₀A/(d − t + t/K)', 'C_metal slab = ε₀A/(d − t)', 'E = E₀/K'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - almost every year',
        question:
          'A capacitor charged to V₀ is disconnected and a dielectric slab of constant K completely fills the gap. How do the potential difference and stored energy change?',
        approach: [
          'Disconnected ⇒ Q stays the same.',
          'C becomes KC₀, so V = Q/(KC₀) = V₀/K.',
          'U = Q²/(2KC₀) = U₀/K; the lost energy is the work done in pulling the slab in.',
        ],
        answer: 'V becomes V₀/K and energy becomes U₀/K',
      },
      questions: [
        {
          question: 'A 10 μF air capacitor is completely filled with a dielectric of K = 5. New capacitance:',
          options: ['50 μF', '2 μF', '10 μF', '15 μF'],
          answer: '50 μF',
          difficulty: 'Easy',
          hint: 'Filling completely multiplies C by K.',
          solution: 'C = KC₀ = 5 × 10 = 50 μF.',
          similar: {
            question: 'A 4 μF air capacitor is filled with a dielectric of K = 2.5. New capacitance:',
            options: ['10 μF', '1.6 μF', '6.5 μF', '4 μF'],
            answer: '10 μF',
            solution: 'C = 2.5 × 4 = 10 μF.',
          },
        },
        {
          question: 'A slab of thickness d/2 and K = 2 is placed between the plates (separation d) of a capacitor of capacitance C₀. New capacitance:',
          options: ['4C₀/3', '2C₀', '3C₀/2', '3C₀/4'],
          answer: '4C₀/3',
          difficulty: 'Medium',
          hint: 'C = ε₀A/(d − t + t/K).',
          solution: 'd − d/2 + d/4 = 3d/4 ⇒ C = ε₀A/(3d/4) = 4C₀/3.',
          similar: {
            question: 'A metal slab of thickness d/2 is placed between the plates of a capacitor C₀ (separation d). New capacitance:',
            options: ['2C₀', '4C₀/3', 'C₀/2', 'Infinite'],
            answer: '2C₀',
            solution: 'For metal, C = ε₀A/(d − t) = ε₀A/(d/2) = 2C₀.',
          },
        },
        {
          question:
            'The gap of a capacitor C₀ is filled with two layers of equal thickness d/2, of K₁ = 2 and K₂ = 6, one over the other. New capacitance:',
          options: ['3C₀', '4C₀', '8C₀', '1.5C₀'],
          answer: '3C₀',
          difficulty: 'Hard',
          hint: 'Stacked layers act as capacitors in series, each of capacitance 2KC₀.',
          solution: 'C₁ = 2K₁C₀ = 4C₀, C₂ = 2K₂C₀ = 12C₀. Series: 4 × 12/16 C₀ = 3C₀. (General: 2K₁K₂C₀/(K₁ + K₂).)',
          similar: {
            question: 'Instead the two dielectrics K₁ = 2 and K₂ = 6 each fill half the plate area (side by side). New capacitance:',
            options: ['4C₀', '3C₀', '8C₀', '12C₀'],
            answer: '4C₀',
            solution: 'Side by side ⇒ parallel: K₁C₀/2 + K₂C₀/2 = (2 + 6)C₀/2 = 4C₀.',
          },
        },
      ],
    },
    {
      name: 'Combination of Capacitors and Charge Sharing',
      theory:
        'In ==series== the same charge sits on every capacitor and the voltages add: ==1/C = 1/C₁ + 1/C₂ + …==. The voltage divides in inverse ratio of capacitance (smaller C gets larger V). In ==parallel== the voltage is common and charges add: ==C = C₁ + C₂ + …==.\n\nWhen a charged capacitor is connected to another capacitor, charge flows until both reach a ==common potential V = (C₁V₁ + C₂V₂)/(C₁ + C₂)== (with like plates joined). If unlike plates are joined, use (C₁V₁ − C₂V₂). Total charge is conserved, but energy is not - some is lost as heat and radiation.\n\nTo build a combination that has a given C and withstands a voltage larger than the rating of one capacitor, put enough capacitors in series in each row to share the voltage, then put rows in parallel to recover the capacitance.',
      keyPoints: [
        'Series: same Q; V ∝ 1/C.',
        'Parallel: same V; Q ∝ C.',
        '==Common potential = total charge/total capacitance==.',
        'Charge is conserved on joining; energy is not.',
      ],
      formulas: ['1/C_s = Σ 1/Cᵢ', 'C_p = Σ Cᵢ', 'V = (C₁V₁ + C₂V₂)/(C₁ + C₂)', 'V₁ = C₂V/(C₁ + C₂) (two in series)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Occasionally - design-a-combination problems',
        question:
          'Capacitors of 1 μF each can withstand at most 400 V. Minimum number needed to obtain 2 μF that can be used across 1000 V:',
        approach: [
          'Each row must share 1000 V with ≤ 400 V per capacitor ⇒ at least 3 in series (2 would give 500 V each).',
          'One row of 3 has C = 1/3 μF.',
          'Rows needed: m × 1/3 = 2 ⇒ m = 6.',
          'Total = 3 × 6 = 18.',
        ],
        answer: '18 capacitors (6 parallel rows of 3 in series)',
      },
      questions: [
        {
          question: 'Capacitors of 2 μF, 3 μF and 6 μF are connected in series. Equivalent capacitance:',
          options: ['1 μF', '11 μF', '6 μF', '0.5 μF'],
          answer: '1 μF',
          difficulty: 'Easy',
          hint: 'Add reciprocals.',
          solution: '1/C = 1/2 + 1/3 + 1/6 = 1 ⇒ C = 1 μF.',
          similar: {
            question: 'Three 6 μF capacitors are connected in series. Equivalent capacitance:',
            options: ['2 μF', '18 μF', '3 μF', '6 μF'],
            answer: '2 μF',
            solution: '1/C = 3/6 ⇒ C = 2 μF.',
          },
        },
        {
          question: '2 μF and 4 μF capacitors in series are connected across 12 V. Voltage across the 2 μF capacitor:',
          options: ['8 V', '4 V', '6 V', '12 V'],
          answer: '8 V',
          difficulty: 'Medium',
          hint: 'In series, voltage divides inversely as capacitance.',
          solution: 'C_eq = 4/3 μF, Q = 16 μC. V₂μF = 16/2 = 8 V (and 4 V across 4 μF).',
          similar: {
            question: '3 μF and 6 μF in series across 90 V. Voltage across the 3 μF capacitor:',
            options: ['60 V', '30 V', '45 V', '90 V'],
            answer: '60 V',
            solution: 'C_eq = 2 μF, Q = 180 μC. V = 180/3 = 60 V.',
          },
        },
        {
          question: 'A 2 μF capacitor charged to 100 V is connected across an uncharged 3 μF capacitor. Common potential:',
          options: ['40 V', '60 V', '100 V', '50 V'],
          answer: '40 V',
          difficulty: 'Hard',
          hint: 'Charge is conserved: total Q / total C.',
          solution: 'Q = 2 × 100 = 200 μC. V = 200/(2 + 3) = 40 V.',
          similar: {
            question:
              'A 4 μF capacitor at 50 V and a 1 μF capacitor at 100 V are connected with positive plate to positive plate. Common potential:',
            options: ['60 V', '75 V', '20 V', '40 V'],
            answer: '60 V',
            solution: 'Total Q = 200 + 100 = 300 μC; C = 5 μF ⇒ V = 60 V. (Opposite plates would give (200 − 100)/5 = 20 V.)',
          },
        },
      ],
    },
    {
      name: 'Energy Stored in a Capacitor',
      theory:
        'Charging a capacitor needs work against the growing potential; this is stored as ==U = ½CV² = Q²/2C = ½QV==. The energy resides in the field, with ==energy density u = ½ε₀E²== (½ε₀KE² in a dielectric).\n\nWhen a battery charges a capacitor through a resistor, it does work QV = CV², but only ½CV² is stored; ==half is always dissipated== as heat, whatever the resistance. Similarly, when two capacitors at different potentials are connected, energy is lost: ==ΔU = C₁C₂(V₁ − V₂)²/2(C₁ + C₂)==.\n\nThe plates attract each other with force ==F = Q²/(2ε₀A) = ½QE==, where E is the field between the plates - half the field, because a plate does not exert force on itself.',
      keyPoints: [
        'U = ½CV² = Q²/2C = ½QV.',
        'Energy density ½ε₀E².',
        '==Battery work CV², stored ½CV², heat ½CV²==.',
        'Force between plates Q²/2ε₀A.',
      ],
      formulas: ['U = ½CV²', 'u = ½ε₀E²', 'ΔU = C₁C₂(V₁ − V₂)²/2(C₁ + C₂)', 'F = Q²/(2ε₀A)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - force between plates',
        question: 'A parallel-plate capacitor with plate area A carries charge Q. The force of attraction between the plates is:',
        approach: [
          'Field due to one plate = σ/2ε₀ = Q/(2ε₀A).',
          'Force on the other plate = Q × Q/(2ε₀A).',
          'Alternatively F = −dU/dx with U = Q²x/(2ε₀A).',
        ],
        answer: 'F = Q²/(2ε₀A)',
      },
      questions: [
        {
          question: 'Energy stored in a 4 μF capacitor charged to 100 V:',
          options: ['0.02 J', '0.04 J', '0.2 J', '0.01 J'],
          answer: '0.02 J',
          difficulty: 'Easy',
          hint: 'U = ½CV².',
          solution: 'U = ½ × 4 × 10⁻⁶ × 10⁴ = 0.02 J.',
          similar: {
            question: 'Energy stored in a 10 μF capacitor charged to 200 V:',
            options: ['0.2 J', '0.4 J', '2 J', '0.1 J'],
            answer: '0.2 J',
            solution: 'U = ½ × 10⁻⁵ × 4 × 10⁴ = 0.2 J.',
          },
        },
        {
          question: 'A 2 μF capacitor charged to 100 V is connected to an identical uncharged capacitor. Energy lost:',
          options: ['5 mJ', '10 mJ', '2.5 mJ', 'Zero'],
          answer: '5 mJ',
          difficulty: 'Medium',
          hint: 'Compare energy before and after, or use C₁C₂(ΔV)²/2(C₁ + C₂).',
          solution: 'Before: ½ × 2 × 10⁻⁶ × 10⁴ = 10 mJ. After: V = 50 V, ½ × 4 × 10⁻⁶ × 2500 = 5 mJ. Loss = 5 mJ.',
          similar: {
            question: 'A 3 μF capacitor at 100 V is connected to an uncharged 6 μF capacitor. Energy lost:',
            options: ['10 mJ', '15 mJ', '5 mJ', '30 mJ'],
            answer: '10 mJ',
            solution: 'ΔU = C₁C₂V²/2(C₁ + C₂) = 18 × 10⁻¹² × 10⁴ / (2 × 9 × 10⁻⁶) = 10⁻² J = 10 mJ.',
          },
        },
        {
          question: 'A capacitor C is charged to V by a battery through a resistor R. Heat produced in the resistor is:',
          options: ['½CV²', 'CV²', 'Zero', 'Depends on R'],
          answer: '½CV²',
          difficulty: 'Hard',
          hint: 'Compare the work done by the battery with the energy stored.',
          solution: 'Battery work = QV = CV². Stored = ½CV². Heat = CV² − ½CV² = ½CV², independent of R.',
          similar: {
            question: 'While charging a capacitor C to voltage V through a resistor, the energy supplied by the battery is:',
            options: ['CV²', '½CV²', '2CV²', '¼CV²'],
            answer: 'CV²',
            solution: 'The battery moves charge Q = CV through potential V: W = QV = CV².',
          },
        },
      ],
    },
  ],
};
