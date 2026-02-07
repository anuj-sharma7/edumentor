
import { electrostaticsQuestions } from './data/electrostatics';
import { moleConceptQuestions } from './data/mole-concept';
import { atomicStructureQuestions } from './data/atomic-structure';
import { chemicalBondingQuestions } from './data/chemical-bonding';
import { statesOfMatterQuestions } from './data/states-of-matter';
import { thermodynamicsQuestions } from './data/thermodynamics';
import { chemicalEquilibriumQuestions } from './data/chemical-equilibrium';
import { ionicEquilibriumQuestions } from './data/ionic-equilibrium';
import { solutionsQuestions } from './data/solutions';
import { redoxAndElectrochemistryQuestions } from './data/redox-and-electrochemistry';
import { generalOrganicChemistryQuestions } from './data/general-organic-chemistry';
import { lawsOfMotionQuestions } from './data/laws-of-motion';
import { coordinationCompoundQuestions } from './data/inorganic-chemistry/coordination-compounds';
import { alcoholsPhenolsEthersQuestions } from './data/alcohols-phenols-ethers';
import { workPowerEnergyQuestions } from './data/work-power-energy';
import { rotationalMotionQuestions } from './data/rotational-motion';
import { gravitationQuestions } from './data/gravitation';
import { currentElectricityQuestions } from './data/current-electricity';
import { oscillationsAndWavesQuestions } from './data/oscillations-and-waves';
import { opticsQuestions } from './data/optics';
import { rayOpticsQuestions } from './data/ray-optics';
import { modernPhysicsQuestions } from './data/modern-physics';
import { kinematicsQuestions } from './data/kinematics';
import { capacitorQuestions } from './data/capacitors';
import { magneticEffectsQuestions } from './data/magnetic-effects';
import { emiAcQuestions } from './data/electromagnetic-induction-ac';
import { electromagneticWavesQuestions } from './data/electromagnetic-waves';
import { atomsAndNucleiQuestions } from './data/atoms-and-nuclei';
import { electronicDevicesQuestions } from './data/electronic-devices';
import { communicationSystemsQuestions } from './data/communication-systems';
import { isomerismQuestions } from './data/isomerism';
import { pBlockElementsQuestions } from './data/p-block-elements';
import { dAndFBlockElementsQuestions } from './data/d-and-f-block-elements';
import { sBlockElementsQuestions } from './data/s-block-elements';
import { biologySubject } from './data/biology';
import { algebraQuestions } from './data/algebra';
import { coordinateGeometryQuestions } from './data/coordinate-geometry';
import { probabilityQuestions } from './data/maths-probability';
import { statisticsQuestions } from './data/maths-statistics';
import { vectorQuestions } from './data/maths-vectors';
import { threeDGeometryQuestions } from './data/maths-3d-geometry';
import { anatomyOfFloweringPlantsQuestions } from './data/botany-anatomy-of-flowering-plants';


export type Question = {
  id: number;
  text: string;
  questionType?: 'mcq' | 'numerical';
  options?: string[];
  answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pageReference: number;
  concepts: string[];
  isPastPaper: boolean;
  explanation?: string;
  imageUrl?: string;
  diagramAiHint?: string;
};

export type Chapter = {
  id: number;
  name: string;
  questions: Question[];
};

export type Unit = {
    id: number;
    name: string;
    chapters: Chapter[];
}

export type Subject = {
  id: number;
  name:string;
  units: Unit[];
  chapters: Chapter[]; // Keep flat list for backward compatibility with other components
};

export type Formula = {
    name: string;
    formula: string;
    derivation: string;
}

export type FormulaTopic = {
    name: string;
    formulae: Formula[];
}

export type FormulaSubject = {
    subject: string;
    topics: FormulaTopic[];
}


export const subjects: Subject[] = [
  {
    id: 1,
    name: 'Physics',
    units: [
        {
            id: 10,
            name: 'Mechanics 1',
            chapters: [
              kinematicsQuestions,
              lawsOfMotionQuestions,
              workPowerEnergyQuestions,
            ]
        },
        {
            id: 11,
            name: 'Mechanics 2',
            chapters: [
                rotationalMotionQuestions,
                gravitationQuestions,
            ]
        },
        {
            id: 12,
            name: 'Thermodynamics & Gases',
            chapters: [
                thermodynamicsQuestions,
                statesOfMatterQuestions,
                { id: 108, name: 'Kinetic Theory of Gases', questions: [] },
            ]
        },
        {
            id: 13,
            name: 'Waves & Optics',
            chapters: [
                 oscillationsAndWavesQuestions,
                 rayOpticsQuestions,
                 opticsQuestions,
            ]
        },
        {
            id: 14,
            name: 'Electromagnetism',
            chapters: [
                electrostaticsQuestions,
                currentElectricityQuestions,
                capacitorQuestions,
                magneticEffectsQuestions,
                emiAcQuestions,
                electromagneticWavesQuestions,
            ]
        },
        {
            id: 15,
            name: 'Modern Physics',
            chapters: [
                 modernPhysicsQuestions,
                 atomsAndNucleiQuestions,
                 electronicDevicesQuestions,
            ]
        },
        {
            id: 16,
            name: 'Miscellaneous',
            chapters: [
                communicationSystemsQuestions,
            ]
        }
    ],
    chapters: [
      kinematicsQuestions,
      lawsOfMotionQuestions,
      workPowerEnergyQuestions,
      rotationalMotionQuestions,
      gravitationQuestions,
      {
        id: 106,
        name: 'Properties of Solids and Liquids',
        questions: []
      },
      thermodynamicsQuestions,
      {
        id: 108,
        name: 'Kinetic Theory of Gases',
        questions: []
      },
      oscillationsAndWavesQuestions,
      electrostaticsQuestions,
      currentElectricityQuestions,
      capacitorQuestions,
      magneticEffectsQuestions,
      emiAcQuestions,
      electromagneticWavesQuestions,
      opticsQuestions,
      rayOpticsQuestions,
      modernPhysicsQuestions,
      atomsAndNucleiQuestions,
      electronicDevicesQuestions,
      communicationSystemsQuestions,
    ]
  },
  {
    id: 2,
    name: 'Chemistry',
    units: [
        {
            id: 20,
            name: 'Physical Chemistry 1',
            chapters: [
                moleConceptQuestions,
                atomicStructureQuestions,
                statesOfMatterQuestions,
                thermodynamicsQuestions,
            ]
        },
        {
            id: 21,
            name: 'Physical Chemistry 2',
            chapters: [
                chemicalEquilibriumQuestions,
                ionicEquilibriumQuestions,
                solutionsQuestions,
                redoxAndElectrochemistryQuestions,
            ]
        },
        {
            id: 22,
            name: 'Inorganic Chemistry',
            chapters: [
                chemicalBondingQuestions,
                coordinationCompoundQuestions,
                pBlockElementsQuestions,
                dAndFBlockElementsQuestions,
                sBlockElementsQuestions,
            ]
        },
        {
            id: 23,
            name: 'Organic Chemistry',
            chapters: [
                generalOrganicChemistryQuestions,
                isomerismQuestions,
                alcoholsPhenolsEthersQuestions,
            ]
        },
    ],
    chapters: [
      moleConceptQuestions,
      atomicStructureQuestions,
      chemicalBondingQuestions,
      statesOfMatterQuestions,
      thermodynamicsQuestions,
      chemicalEquilibriumQuestions,
      ionicEquilibriumQuestions,
      solutionsQuestions,
      redoxAndElectrochemistryQuestions,
      generalOrganicChemistryQuestions,
      coordinationCompoundQuestions,
      alcoholsPhenolsEthersQuestions,
      isomerismQuestions,
      pBlockElementsQuestions,
      dAndFBlockElementsQuestions,
      sBlockElementsQuestions,
    ]
  },
  {
    id: 3,
    name: 'Mathematics',
    units: [
        {
            id: 30,
            name: 'Algebra & Functions',
            chapters: [
                { id: 301, name: 'Sets, Relations and Functions', questions: [] },
                algebraQuestions,
            ]
        },
         {
            id: 31,
            name: 'Trigonometry',
            chapters: [
                { id: 302, name: 'Trigonometry', questions: [] },
            ]
        },
         {
            id: 32,
            name: 'Calculus',
            chapters: [
                { id: 303, name: 'Calculus', questions: [] }
            ]
        },
        {
            id: 33,
            name: 'Coordinate Geometry',
            chapters: [
                coordinateGeometryQuestions
            ]
        },
        {
            id: 34,
            name: 'Vectors & 3D Geometry',
            chapters: [
                vectorQuestions,
                threeDGeometryQuestions,
            ]
        },
        {
            id: 35,
            name: 'Statistics & Probability',
            chapters: [
                statisticsQuestions,
                probabilityQuestions,
            ]
        }
    ],
    chapters: [
      { id: 301, name: 'Sets, Relations and Functions', questions: [] },
      { id: 302, name: 'Trigonometry', questions: [] },
      { id: 303, name: 'Calculus', questions: [] },
      algebraQuestions,
      coordinateGeometryQuestions,
      probabilityQuestions,
      statisticsQuestions,
      vectorQuestions,
      threeDGeometryQuestions
    ]
  },
  biologySubject
];

export const formulas: FormulaSubject[] = [
    {
        subject: 'Physics',
        topics: [
            {
                name: 'Kinematics',
                formulae: [
                    {
                        title: 'Displacement vs. Distance',
                        explanation: 'Distance is the total path length covered by an object. It is a scalar quantity. Displacement is the shortest distance between the initial and final points. It is a vector quantity, having both magnitude and direction.',
                        formula: 'Distance ≥ |Displacement|',
                        derivation: 'Displacement is a vector connecting the start and end points, while distance is the scalar length of the actual path taken. The shortest path is a straight line, so distance is always greater than or equal to the magnitude of displacement.'
                    },
                    {
                        title: 'Speed and Velocity',
                        explanation: 'Speed is the rate of change of distance (a scalar), while velocity is the rate of change of displacement (a vector). Instantaneous velocity is the derivative of position with respect to time.',
                        formula: 'Average Speed = Total Distance / Total Time\nAverage Velocity = Total Displacement / Total Time\nInstantaneous Velocity (v) = ds/dt',
                        derivation: 'These are definitional. Instantaneous velocity is the limit of the average velocity as the time interval approaches zero.'
                    },
                    {
                        title: 'Acceleration',
                        explanation: 'Acceleration is the rate of change of velocity. It is a vector quantity. A body accelerates if its speed, direction, or both change.',
                        formula: 'Average Acceleration (a_avg) = Δv / Δt\nInstantaneous Acceleration (a) = dv/dt = d²s/dt²',
                        derivation: 'Definitional. Instantaneous acceleration is the limit of average acceleration as the time interval approaches zero. It is the second derivative of position.'
                    },
                    { 
                        title: 'Equations of Motion (Constant Acceleration)',
                        explanation: 'These are the fundamental equations that describe the motion of an object under constant acceleration.',
                        formula: '1. v = u + at\n2. s = ut + (1/2)at^2\n3. v^2 = u^2 + 2as\n4. Displacement in nth second: s_n = u + a(n - 1/2)',
                        derivation: '1. Derived from a = dv/dt. Integrating gives v = at + C. At t=0, v=u, so C=u. Hence v = u + at.\n2. Derived from v = ds/dt. Integrating ds = (u+at)dt gives s = ut + (1/2)at^2.\n3. Derived by eliminating time from the first two equations.\n4. s_n = s(n) - s(n-1).'
                    },
                    {
                        title: 'Motion Under Gravity',
                        explanation: 'A special case of motion with constant acceleration, where the acceleration is due to gravity (g ≈ 9.8 m/s²), acting downwards.',
                        formula: 'Replace \'a\' with \'-g\' for upward motion, and with \'+g\' for downward motion.',
                        derivation: 'This is a direct application of the equations of motion where the acceleration is constant and equal to g.'
                    },
                    {
                        title: 'Projectile Motion',
                        explanation: 'Motion of an object thrown into the air, subject only to the acceleration of gravity. It is a 2D motion with constant vertical acceleration and zero horizontal acceleration.',
                        formula: 'Trajectory: y = x tan(θ) - (gx²) / (2u² cos²(θ))\nHorizontal Range (R) = (u² * sin(2θ)) / g\nMaximum Height (H) = (u² * sin²(θ)) / (2g)\nTime of Flight (T) = (2u * sin(θ)) / g',
                        derivation: 'Derived by analyzing the horizontal (constant velocity) and vertical (constant acceleration) components of motion separately.'
                    },
                    {
                        title: 'Circular Motion',
                        explanation: 'Motion of an object along the circumference of a circle. If the speed is constant, it is Uniform Circular Motion (UCM). A force directed towards the center (centripetal force) is required to maintain this motion.',
                        formula: 'Relation: v = ωr\nCentripetal Acceleration (a_c) = v²/r = ω²r\nCentripetal Force (F_c) = mv²/r',
                        derivation: 'Centripetal acceleration is derived from the change in the direction of the velocity vector. The force is derived from Newton\'s Second Law, F=ma_c.'
                    },
                    {
                        title: 'Relative Velocity',
                        explanation: 'The velocity of an object or observer B in the rest frame of another object or observer A.',
                        formula: 'v_AB = v_A - v_B',
                        derivation: 'It is the vector difference between the velocities of the two objects. This concept is useful in solving problems involving motion in two dimensions, like river-boat or rain-man problems.'
                    }
                ]
            },
            {
                name: 'Laws of Motion',
                concepts: [
                     {
                        title: 'Newton\'s Second Law',
                        explanation: 'The rate of change of momentum of a body is directly proportional to the force applied, and this change in momentum takes place in the direction of the applied force.',
                        formula: 'F = ma = dp/dt',
                        derivation: 'This is a fundamental law based on experimental observations. F ∝ dp/dt. The constant of proportionality is taken as 1.'
                    },
                    {
                        title: 'Friction',
                        explanation: 'A force that opposes relative motion between surfaces in contact.',
                        formula: 'Static Friction: f_s ≤ μ_s * N\nKinetic Friction: f_k = μ_k * N',
                        derivation: 'Friction is an empirical force. The formulas are approximations based on observation. The static friction adjusts itself to be equal to the applied force up to a maximum limit (limiting friction).'
                    },
                     {
                        title: 'Centripetal Force',
                        explanation: 'A force that acts on a body moving in a circular path and is directed towards the center around which the body is moving.',
                        formula: 'F_c = mv^2/r',
                        derivation: 'Derived from the centripetal acceleration a_c = v²/r, and Newton\'s Second Law, F=ma.'
                    },
                ]
            },
            {
                name: 'Work, Power, and Energy',
                concepts: [
                     {
                        title: 'Work-Energy Theorem',
                        explanation: 'The net work done by the forces on an object equals the change in its kinetic energy.',
                        formula: 'W_net = ΔK = (1/2)mv_f^2 - (1/2)mv_i^2',
                        derivation: 'Derived by integrating Newton\'s Second Law with respect to displacement. W = ∫ F dx = ∫ m(dv/dt) dx = ∫ m v dv = (1/2)mv².'
                    },
                    {
                        title: 'Conservation of Mechanical Energy',
                        explanation: 'If only conservative forces are doing work on an object, its total mechanical energy (sum of kinetic and potential energy) remains constant.',
                        formula: 'K_i + U_i = K_f + U_f',
                        derivation: 'This follows from the work-energy theorem where the work done by conservative forces is equal to the negative change in potential energy (W_c = -ΔU).'
                    },
                    {
                        title: 'Power',
                        explanation: 'The rate at which work is done or energy is transferred.',
                        formula: 'P_avg = W/Δt, P_inst = dW/dt = F · v',
                        derivation: 'Power is the time derivative of work. P = d/dt(F·s) = F · (ds/dt) = F·v for a constant force.'
                    }
                ]
            },
            {
                name: 'Rotational Motion',
                concepts: [
                    {
                        title: 'Torque (Moment of Force)',
                        explanation: 'The rotational equivalent of force. It is a measure of the tendency of a force to cause an object to rotate about an axis.',
                        formula: 'τ = r x F = rFsin(θ)',
                        derivation: 'Defined as the cross product of the position vector (r) from the axis of rotation to the point of force application and the force vector (F).'
                    },
                    {
                        title: 'Moment of Inertia',
                        explanation: 'The rotational equivalent of mass. It measures an object\'s resistance to angular acceleration.',
                        formula: 'I = Σ m_i * r_i^2 (for discrete masses)\nI = ∫ r^2 dm (for continuous bodies)',
                        derivation: 'Derived from the expression for rotational kinetic energy, K_rot = (1/2)Iω², analogous to K_trans = (1/2)mv².'
                    },
                    {
                        title: 'Angular Momentum',
                        explanation: 'The rotational equivalent of linear momentum.',
                        formula: 'L = r x p = Iω',
                        derivation: 'For a single particle, L = r x p. For a rigid body rotating about an axis, this simplifies to L = Iω.'
                    },
                    {
                        title: 'Conservation of Angular Momentum',
                        explanation: 'If the net external torque on a system is zero, its total angular momentum remains constant.',
                        formula: 'If τ_ext = 0, then L = constant (I₁ω₁ = I₂ω₂)',
                        derivation: 'Derived from Newton\'s second law for rotation, τ = dL/dt. If τ = 0, then dL/dt = 0, which means L is constant.'
                    }
                ]
            },
             {
                name: 'Gravitation',
                concepts: [
                    {
                        title: 'Newton\'s Law of Universal Gravitation',
                        explanation: 'Every particle attracts every other particle in the universe with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.',
                        formula: 'F = G * (m₁m₂ / r²)',
                        derivation: 'A fundamental empirical law derived from observations of planetary motion.'
                    },
                    {
                        title: 'Gravitational Potential Energy',
                        explanation: 'The energy an object possesses because of its position in a gravitational field.',
                        formula: 'U = -G * (Mm / r)',
                        derivation: 'Calculated as the work done by the gravitational force in bringing a mass m from infinity to a distance r from a mass M. W = ∫ F·dr.'
                    },
                    {
                        title: 'Escape Velocity',
                        explanation: 'The minimum speed needed for a free, non-propelled object to escape from the gravitational influence of a massive body.',
                        formula: 'v_e = √(2GM / R) = √(2gR)',
                        derivation: 'Derived by equating the initial kinetic energy of the object to the magnitude of its gravitational potential energy at the surface of the massive body. (1/2)mv_e² = GMm/R.'
                    }
                ]
            },
             {
                name: 'Electrostatics',
                concepts: [
                    {
                        title: 'Coulomb\'s Law',
                        explanation: 'An experimental law that forms the basis of electrostatics. The constant k = 1 / (4πε₀).',
                        formula: 'F = k * |q₁q₂| / r²',
                        derivation: 'Describes the force between two point charges.'
                    },
                    {
                        title: 'Electric Field',
                        explanation: 'The electric field is defined as the electrostatic force per unit test charge.',
                        formula: 'E = F / q. For a point charge: E = kq/r²',
                        derivation: 'Represents the influence of a charge on the space around it.'
                    },
                    {
                        title: 'Gauss\'s Law',
                        explanation: 'A fundamental law of electromagnetism that relates the electric flux through a closed surface to the charge enclosed.',
                        formula: 'Φ_E = ∫ E · dA = Q_enclosed / ε₀',
                        derivation: 'A more general form of Coulomb\'s law, useful for symmetric charge distributions.'
                    },
                    {
                        title: 'Capacitance',
                        explanation: 'Defined as charge stored per unit potential difference. The parallel plate formula is derived using Gauss\'s law to find the electric field.',
                        formula: 'C = Q / V. For parallel plates: C = ε₀A/d',
                        derivation: 'A measure of a capacitor\'s ability to store charge.'
                    }
                ]
            },
            {
                name: 'Current Electricity',
                concepts: [
                    { name: 'Ohm\'s Law', formula: 'V = IR', derivation: 'An empirical law stating that voltage is proportional to current for many materials.' },
                    { name: 'Resistance & Resistivity', formula: 'R = ρ(L/A)', derivation: 'Resistance (R) depends on the material\'s resistivity (ρ) and its geometry (length L, area A).' },
                    { name: 'Kirchhoff\'s Junction Rule (KCL)', formula: 'ΣI_in = ΣI_out', derivation: 'Based on the conservation of electric charge at any junction in a circuit.' },
                    { name: 'Kirchhoff\'s Loop Rule (KVL)', formula: 'ΣV = 0 for any closed loop', derivation: 'Based on the conservation of energy in a circuit. The sum of potential rises and drops around any closed loop is zero.' }
                ]
            },
            {
                name: 'Magnetic Effects',
                concepts: [
                    { name: 'Lorentz Force', formula: 'F = q(E + v x B)', derivation: 'A fundamental law describing the total force on a charge q moving with velocity v in electric field E and magnetic field B.' },
                    { name: 'Biot-Savart Law', formula: 'dB = (μ₀/4π) * (I dL x r̂) / r²', derivation: 'A fundamental law of magnetostatics that describes the magnetic field generated by a small segment of a current-carrying wire.' },
                    { name: 'Ampere\'s Law', formula: '∮ B · dL = μ₀I_enclosed', derivation: 'Relates the integrated magnetic field around a closed loop to the electric current passing through the loop. Useful for symmetric current distributions.' }
                ]
            },
             {
                name: 'Electromagnetic Induction & AC',
                concepts: [
                    {
                        title: 'Faraday\'s Law of Induction',
                        explanation: 'States that a changing magnetic flux through a circuit induces an electromotive force (EMF).',
                        formula: 'ε = -dΦ_B/dt',
                        derivation: 'A fundamental law describing how a changing magnetic field creates an electric field.'
                    },
                    {
                        title: 'Lenz\'s Law',
                        explanation: 'The direction of the induced current is such that it opposes the change in magnetic flux that produced it. This is represented by the negative sign in Faraday\'s Law.',
                        formula: 'ε = -dΦ_B/dt',
                        derivation: 'A consequence of the conservation of energy.'
                    },
                    {
                        title: 'LCR Circuit Impedance',
                        explanation: 'Impedance (Z) is the total opposition to current flow in an AC circuit, combining resistance and reactance.',
                        formula: 'Z = √[R² + (X_L - X_C)²]',
                        derivation: 'Derived using phasor diagrams to vectorially add the resistance and reactances.'
                    }
                ]
            }
        ]
    },
    {
        subject: 'Chemistry',
        topics: [
            {
                name: 'Mole Concept',
                formulae: [
                    {
                        title: 'The Mole and Avogadro\'s Number',
                        explanation: 'A mole represents 6.022 x 10²³ particles (Avogadro\'s number), a fundamental unit for measuring the amount of a substance.',
                        formula: '1 mole = 6.022 x 10²³ particles',
                        derivation: 'Based on the number of atoms in exactly 12 grams of Carbon-12.'
                    },
                    {
                        title: 'Molar Mass',
                        explanation: 'The mass in grams of one mole of a substance. It is numerically equal to the atomic or molecular mass in amu.',
                        formula: 'Molar Mass (M) = Mass (m) / Moles (n)',
                        derivation: 'A fundamental conversion factor used in stoichiometry.'
                    },
                    {
                        title: 'Empirical & Molecular Formulas',
                        explanation: 'The empirical formula is the simplest whole-number ratio of atoms in a compound, while the molecular formula shows the actual number of atoms of each element.',
                        formula: 'Molecular Formula = n * (Empirical Formula)\nn = Molar Mass / Empirical Formula Mass',
                        derivation: 'Determined experimentally through elemental analysis.'
                    }
                ]
            },
             {
                name: 'Atomic Structure',
                concepts: [
                    {
                        title: 'Bohr Model Energy',
                        explanation: 'Describes the quantized energy levels of an electron in a hydrogen-like atom.',
                        formula: 'E_n = -R_H * (Z^2 / n^2)',
                        derivation: 'Derived by combining classical mechanics with the quantization of angular momentum.'
                    },
                    {
                        title: 'de Broglie Wavelength',
                        explanation: 'Proposes that all matter has wave-like properties, relating a particle\'s wavelength to its momentum.',
                        formula: 'λ = h / mv = h / p',
                        derivation: 'Postulated by de Broglie to describe the wave-particle duality of matter.'
                    },
                    {
                        title: 'Heisenberg Uncertainty Principle',
                        explanation: 'A fundamental principle of quantum mechanics stating that it is impossible to simultaneously know the exact position and momentum of a particle.',
                        formula: 'Δx * Δp ≥ h / 4π',
                        derivation: 'A core concept of quantum mechanics, reflecting the wave nature of particles.'
                    }
                ]
            },
            {
                name: 'Chemical Bonding',
                concepts: [
                    {
                        title: 'Formal Charge',
                        explanation: 'A charge assigned to an atom in a molecule, assuming electrons in bonds are shared equally. It helps in selecting the most stable Lewis structure.',
                        formula: 'FC = (Valence e⁻) - (Non-bonding e⁻) - (1/2 * Bonding e⁻)',
                        derivation: 'A bookkeeping method for electrons in a Lewis structure.'
                    },
                    {
                        title: 'Bond Order (MOT)',
                        explanation: 'A measure of the number of chemical bonds between two atoms, calculated using Molecular Orbital Theory.',
                        formula: 'Bond Order = 1/2 * (Bonding e⁻ - Antibonding e⁻)',
                        derivation: 'A key concept in MOT that correlates with bond strength and length.'
                    },
                    {
                        title: 'Dipole Moment',
                        explanation: 'A measure of the polarity of a chemical bond or an entire molecule, arising from a separation of positive and negative charges.',
                        formula: 'μ = q × d',
                        derivation: 'Defined as the product of the magnitude of the charge (q) and the distance of separation (d).'
                    }
                ]
            },
            {
                name: 'Thermodynamics',
                concepts: [
                    {
                        title: 'First Law of Thermodynamics',
                        explanation: 'The law of conservation of energy, which states that energy can neither be created nor destroyed, only transferred or changed from one form to another.',
                        formula: 'ΔU = q + w',
                        derivation: 'A fundamental conservation law. ΔU is the change in internal energy, q is the heat added to the system, and w is the work done on the system.'
                    },
                    {
                        title: 'Gibbs Free Energy',
                        explanation: 'A thermodynamic potential that can be used to calculate the maximum reversible work that may be performed by a thermodynamic system at a constant temperature and pressure. It is the ultimate criterion for spontaneity.',
                        formula: 'G = H - TS\nΔG = ΔH - TΔS',
                        derivation: 'Defined to combine the enthalpy (H) and entropy (S) of a system into a single value. A negative ΔG indicates a spontaneous process.'
                    },
                    {
                        title: 'Hess\'s Law',
                        explanation: 'States that the total enthalpy change for a reaction is the same, no matter how many steps the reaction is carried out in.',
                        formula: 'ΔH_reaction = ΣΔH_f(products) - ΣΔH_f(reactants)',
                        derivation: 'A direct consequence of enthalpy being a state function. The total change depends only on the initial and final states, not the path between them.'
                    }
                ]
            },
            {
                name: 'States of Matter',
                concepts: [
                    {
                        title: 'Ideal Gas Law',
                        explanation: 'An equation of state for a hypothetical ideal gas. It is a good approximation of the behavior of many gases under many conditions.',
                        formula: 'PV = nRT',
                        derivation: 'A combination of Boyle\'s Law, Charles\'s Law, and Avogadro\'s Law.'
                    },
                    {
                        title: 'van der Waals Equation',
                        explanation: 'An equation of state that extends the ideal gas law to account for the finite volume of gas molecules and the attractive forces between them.',
                        formula: '(P + an²/V²)(V - nb) = nRT',
                        derivation: 'A modification of the ideal gas law with correction factors for intermolecular attraction (a) and molecular volume (b).'
                    }
                ]
            },
            {
                name: 'Chemical Equilibrium',
                concepts: [
                    { name: 'Kp and Kc Relation', formula: 'K_p = K_c(RT)^Δn_g', derivation: 'Derived from the ideal gas law (P = CRT) by substituting partial pressures for concentrations in the equilibrium expression.' },
                    { name: 'Gibbs Energy and Equilibrium', formula: 'ΔG° = -RT ln(K)', derivation: 'A fundamental equation linking the standard Gibbs free energy change to the equilibrium constant.' },
                    { name: 'Henderson-Hasselbalch Equation', formula: 'pH = pKa + log([A⁻]/[HA])', derivation: 'Derived from the acid dissociation constant (Ka) expression, it is used to calculate the pH of a buffer solution.' },
                    { name: 'Solubility Product (Ksp)', formula: 'For AxBy ⇌ xA⁺ + yB⁻, Ksp = [A⁺]^x[B⁻]^y', derivation: 'The equilibrium constant for the dissolution of a sparingly soluble salt.' }
                ]
            },
            {
                name: 'Solutions',
                concepts: [
                    { name: 'Raoult\'s Law', formula: 'P_A = P°_A * x_A', derivation: 'An empirical law defining an ideal solution, where the partial vapor pressure of a component is proportional to its mole fraction.' },
                    { name: 'Boiling Point Elevation', formula: 'ΔT_b = i * K_b * m', derivation: 'A colligative property derived from the lowering of vapor pressure by a non-volatile solute.' },
                    { name: 'Freezing Point Depression', formula: 'ΔT_f = i * K_f * m', derivation: 'A colligative property where a solute disrupts the crystal lattice formation of the solvent.' },
                    { name: 'Osmotic Pressure', formula: 'π = i * MRT', derivation: 'The pressure required to prevent osmosis, analogous to the ideal gas law.' }
                ]
            }
        ]
    },
    {
        subject: 'Mathematics',
        chapters: [
            {
                name: 'Algebra',
                concepts: [
                    {
                        title: 'Complex Numbers',
                        explanation: 'A number that can be expressed in the form a + bi, where a and b are real numbers, and i is the imaginary unit.',
                        formula: 'Modulus: |z| = √(a² + b²)\nConjugate: z̅ = a - bi',
                        derivation: 'An extension of the real number system to include the square root of -1.'
                    },
                    {
                        title: 'Quadratic Equations',
                        explanation: 'An equation of the second degree, meaning it contains at least one term that is squared.',
                        formula: 'Roots: x = [-b ± √(b² - 4ac)] / 2a\nSum of roots: α+β = -b/a\nProduct of roots: αβ = c/a',
                        derivation: 'The quadratic formula is derived by completing the square.'
                    },
                    {
                        title: 'Arithmetic Progression (A.P.)',
                        explanation: 'A sequence of numbers such that the difference between the consecutive terms is constant.',
                        formula: 'nth term: a_n = a + (n-1)d\nSum of n terms: S_n = n/2 * [2a + (n-1)d]',
                        derivation: 'Definitional formulas for sequences with a common difference (d).'
                    },
                    {
                        title: 'Geometric Progression (G.P.)',
                        explanation: 'A sequence of non-zero numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio.',
                        formula: 'nth term: a_n = ar^(n-1)\nSum of n terms: S_n = a(r^n - 1)/(r-1)\nSum to infinity: S_∞ = a/(1-r) for |r|<1',
                        derivation: 'Definitional formulas for sequences with a common ratio (r).'
                    },
                     {
                        title: 'Permutations & Combinations',
                        explanation: 'Permutations are arrangements of items where order matters. Combinations are selections of items where order does not matter.',
                        formula: 'Permutation: nPr = n! / (n-r)!\nCombination: nCr = n! / [r!(n-r)!]',
                        derivation: 'Derived from the fundamental principle of counting.'
                    }
                ]
            },
            {
                name: 'Coordinate Geometry',
                concepts: [
                    {
                        title: 'Distance Formula',
                        explanation: 'Calculates the distance between two points in a plane.',
                        formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)²]',
                        derivation: 'An application of the Pythagorean theorem.'
                    },
                    {
                        title: 'Equation of a Line',
                        explanation: 'Different forms to represent a straight line.',
                        formula: 'Slope-intercept: y = mx + c\nPoint-slope: y - y₁ = m(x - x₁)\nGeneral form: Ax + By + C = 0',
                        derivation: 'Algebraic representations of the geometric properties of a line.'
                    },
                    {
                        title: 'Equation of a Circle',
                        explanation: 'The set of all points in a plane that are at a given distance from a given point, the center.',
                        formula: 'Standard form: (x - h)² + (y - k)² = r²\nGeneral form: x² + y² + 2gx + 2fy + c = 0',
                        derivation: 'Derived from the distance formula.'
                    },
                    {
                        title: 'Equation of a Parabola',
                        explanation: 'A curve where any point is at an equal distance from a fixed point (the focus) and a fixed straight line (the directrix).',
                        formula: 'Standard forms: y² = 4ax, x² = 4ay',
                        derivation: 'Derived from the definition of a parabola using the distance formula.'
                    }
                ]
            }
        ]
    },
    {
        subject: 'Biology',
        chapters: [
            {
                name: 'Human Physiology - Digestion and Absorption',
                concepts: [
                    {
                        title: 'Role of Saliva',
                        explanation: 'Saliva, secreted by salivary glands, contains enzymes like salivary amylase (ptyalin) that begin the digestion of carbohydrates (starch) into maltose. It also contains electrolytes and lysozyme for antibacterial action.',
                        formula: 'Starch --(Salivary Amylase, pH 6.8)--> Maltose'
                    },
                    {
                        title: 'Gastric Glands and HCl',
                        explanation: 'The stomach lining has gastric glands with three main cell types: Mucus neck cells (secrete mucus), Peptic or chief cells (secrete proenzyme pepsinogen), and Parietal or oxyntic cells (secrete HCl and intrinsic factor). HCl provides the acidic pH (1.8) needed to convert pepsinogen into the active protein-digesting enzyme, pepsin.',
                        formula: 'Pepsinogen --(HCl)--> Pepsin'
                    },
                    {
                        title: 'Role of Bile and Emulsification',
                        explanation: 'Bile, produced by the liver and stored in the gall bladder, contains bile salts. It does not contain enzymes but is crucial for fat digestion. It breaks down large fat globules into very small micelles, a process called emulsification. This increases the surface area for lipases to act upon.',
                        formula: 'Fats --(Bile)--> Emulsified Fats (Micelles)'
                    },
                    {
                        title: 'Absorption in the Small Intestine',
                        explanation: 'The final products of digestion (glucose, fructose, amino acids, fatty acids, glycerol) are absorbed through the mucosa of the small intestine into the bloodstream and lymph. Villi and microvilli vastly increase the surface area for absorption.',
                        formula: 'Glucose, Amino Acids -> Blood Capillaries\nFatty Acids, Glycerol -> Lacteals (Lymph)',
                        derivation: 'Absorption occurs via simple diffusion, facilitated transport, and active transport depending on the substance.'
                    }
                ]
            },
            {
                name: 'Human Physiology - Breathing and Exchange of Gases',
                concepts: [
                    {
                        title: 'Mechanism of Breathing',
                        explanation: 'Breathing involves inspiration (active process) and expiration (passive process). Inspiration occurs when the diaphragm and external intercostal muscles contract, increasing thoracic volume and decreasing pressure, causing air to enter. Expiration occurs upon their relaxation.',
                        formula: 'Inspiration: Intra-pulmonary pressure < Atmospheric pressure\nExpiration: Intra-pulmonary pressure > Atmospheric pressure'
                    },
                    {
                        title: 'Oxygen-Haemoglobin Dissociation Curve',
                        explanation: 'A sigmoid (S-shaped) curve that plots the proportion of hemoglobin in its saturated form on the vertical axis against the prevailing oxygen tension on the horizontal axis. It shows the affinity of hemoglobin for oxygen.',
                        formula: 'Shift to Right (Bohr Effect): Caused by ↓pH, ↑pCO₂, ↑Temp, ↑2,3-BPG. Indicates ↓affinity, O₂ released.\nShift to Left: Caused by ↑pH, ↓pCO₂, ↓Temp. Indicates ↑affinity, O₂ held.',
                        derivation: 'The cooperative binding of oxygen to the four subunits of hemoglobin gives the curve its characteristic sigmoidal shape.'
                    },
                    {
                        title: 'Transport of Carbon Dioxide',
                        explanation: 'CO₂ is transported in three main forms: dissolved in plasma (7%), bound to hemoglobin as carbaminohemoglobin (20-25%), and as bicarbonate ions (HCO₃⁻) in the plasma (70%).',
                        formula: 'CO₂ + H₂O <-- (Carbonic Anhydrase) --> H₂CO₃ ⇌ H⁺ + HCO₃⁻',
                        derivation: 'The conversion to bicarbonate is very rapid inside RBCs due to the enzyme carbonic anhydrase. The bicarbonate ions are then transported out into the plasma in exchange for chloride ions (Chloride Shift).'
                    }
                ]
            },
            {
                name: 'Anatomy of Flowering Plants',
                concepts: [
                    {
                        title: 'Meristematic Tissues',
                        explanation: 'Tissues in plants containing undifferentiated cells (meristematic cells), found in zones of the plant where growth can take place. Apical meristems are at the tips of roots and shoots for primary growth. Lateral meristems (cambium) are responsible for secondary growth (increase in girth).',
                        formula: 'N/A'
                    },
                    {
                        title: 'Simple and Complex Tissues',
                        explanation: 'Simple tissues are made of only one type of cell (Parenchyma, Collenchyma, Sclerenchyma). Complex tissues are made of more than one type of cell and work together as a unit (Xylem and Phloem).',
                        formula: 'Xylem: Tracheids, Vessels, Xylem Fibres, Xylem Parenchyma (Water transport)\nPhloem: Sieve tubes, Companion cells, Phloem parenchyma, Phloem fibres (Food transport)'
                    },
                    {
                        title: 'Dicot and Monocot Anatomy',
                        explanation: 'Key anatomical differences exist between dicots and monocots in their root, stem, and leaf structures.',
                        formula: 'Stem: Dicot (ring of vascular bundles, open), Monocot (scattered vascular bundles, closed)\nRoot: Dicot (tetrarch xylem), Monocot (polyarch xylem)',
                        derivation: 'These differences arise from their distinct evolutionary paths and growth patterns.'
                    }
                ]
            }
        ]
    }
];

export const conceptMaps = [
    {
        subject: 'Physics',
        maps: [
            { name: 'Kinematics', imageUrl: 'https://picsum.photos/seed/kinematics/600/400', 'data-ai-hint': 'kinematics mindmap' },
            { name: 'Laws of Motion', imageUrl: 'https://picsum.photos/seed/newton-laws/600/400', 'data-ai-hint': 'force motion diagram' },
            { name: 'Work, Power & Energy', imageUrl: 'https://picsum.photos/seed/work-energy/600/400', 'data-ai-hint': 'energy conservation' },
            { name: 'Rotational Motion', imageUrl: 'https://picsum.photos/seed/rotation/600/400', 'data-ai-hint': 'torque angular momentum' },
            { name: 'Electrostatics', imageUrl: 'https://picsum.photos/seed/electrostatics/600/400', 'data-ai-hint': 'electric field' },
        ]
    },
    {
        subject: 'Chemistry',
        maps: [
            { name: 'Types of Chemical Bonds', imageUrl: 'https://picsum.photos/seed/chem-bonds/600/400', 'data-ai-hint': 'chemistry mindmap' },
            { name: 'Mole Concept & Stoichiometry', imageUrl: 'https://picsum.photos/seed/mole-concept/600/400', 'data-ai-hint': 'stoichiometry flowchart' },
            { name: 'Thermodynamics', imageUrl: 'https://picsum.photos/seed/thermo/600/400', 'data-ai-hint': 'energy diagram' },
            { name: 'Chemical Equilibrium', imageUrl: 'https://picsum.photos/seed/equilibrium/600/400', 'data-ai-hint': 'reaction equilibrium' },
        ]
    }
]


    

    

    

    








