
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
                    { name: 'First Equation of Motion', formula: 'v = u + at', derivation: 'Derived from the definition of acceleration a = (v-u)/t.' },
                    { name: 'Second Equation of Motion', formula: 's = ut + (1/2)at^2', derivation: 'Derived by integrating the velocity equation with respect to time.' },
                    { name: 'Third Equation of Motion', formula: 'v^2 = u^2 + 2as', derivation: 'Derived by eliminating time from the first two equations of motion.' },
                    { name: 'Displacement in nth second', formula: 's_n = u + a(n - 1/2)', derivation: 'Calculated as the difference between displacement in n seconds and (n-1) seconds.' },
                    { name: 'Relative Velocity', formula: 'v_AB = v_A - v_B', derivation: 'Velocity of A with respect to B is the vector difference of their velocities.' },
                    { name: 'Horizontal Range of Projectile', formula: 'R = (u^2 * sin(2θ)) / g', derivation: 'Product of horizontal velocity and time of flight.' },
                    { name: 'Maximum Height of Projectile', formula: 'H = (u^2 * sin^2(θ)) / (2g)', derivation: 'Derived from the third equation of motion in the vertical direction.' },
                    { name: 'Time of Flight of Projectile', formula: 'T = (2u * sin(θ)) / g', derivation: 'Twice the time taken to reach the maximum height.' },
                    { name: 'Centripetal Acceleration', formula: 'a_c = v^2/r = rω^2', derivation: 'Rate of change of the direction of velocity in uniform circular motion.' },
                ]
            },
            {
                name: 'Laws of Motion',
                formulae: [
                     {
                        name: 'Newton\'s Second Law',
                        formula: 'F = ma = dp/dt',
                        derivation: 'This is a fundamental law based on experimental observations. F ∝ dp/dt. The constant of proportionality is taken as 1.'
                    },
                    {
                        name: 'Friction',
                        formula: 'Static Friction: f_s ≤ μ_s * N\nKinetic Friction: f_k = μ_k * N',
                        derivation: 'Friction is an empirical force. The formulas are approximations based on observation. The static friction adjusts itself to be equal to the applied force up to a maximum limit (limiting friction).'
                    },
                     {
                        name: 'Centripetal Force',
                        formula: 'F_c = mv^2/r',
                        derivation: 'Derived from the centripetal acceleration a_c = v²/r, and Newton\'s Second Law, F=ma.'
                    },
                ]
            },
            {
                name: 'Work, Power, and Energy',
                formulae: [
                     {
                        name: 'Work-Energy Theorem',
                        formula: 'W_net = ΔK = (1/2)mv_f^2 - (1/2)mv_i^2',
                        derivation: 'Derived by integrating Newton\'s Second Law with respect to displacement. W = ∫ F dx = ∫ m(dv/dt) dx = ∫ m v dv = (1/2)mv².'
                    },
                    {
                        name: 'Conservation of Mechanical Energy',
                        formula: 'K_i + U_i = K_f + U_f',
                        derivation: 'This follows from the work-energy theorem where the work done by conservative forces is equal to the negative change in potential energy (W_c = -ΔU).'
                    },
                    {
                        name: 'Power',
                        formula: 'P_avg = W/Δt, P_inst = dW/dt = F · v',
                        derivation: 'Power is the time derivative of work. P = d/dt(F·s) = F · (ds/dt) = F·v for a constant force.'
                    }
                ]
            },
            {
                name: 'Rotational Motion',
                formulae: [
                    {
                        name: 'Torque (Moment of Force)',
                        formula: 'τ = r x F = rFsin(θ)',
                        derivation: 'Defined as the cross product of the position vector (r) from the axis of rotation to the point of force application and the force vector (F).'
                    },
                    {
                        name: 'Moment of Inertia',
                        formula: 'I = Σ m_i * r_i^2 (for discrete masses)\nI = ∫ r^2 dm (for continuous bodies)',
                        derivation: 'Derived from the expression for rotational kinetic energy, K_rot = (1/2)Iω², analogous to K_trans = (1/2)mv².'
                    },
                    {
                        name: 'Angular Momentum',
                        formula: 'L = r x p = Iω',
                        derivation: 'For a single particle, L = r x p. For a rigid body rotating about an axis, this simplifies to L = Iω.'
                    },
                    {
                        name: 'Conservation of Angular Momentum',
                        formula: 'If τ_ext = 0, then L = constant (I₁ω₁ = I₂ω₂)',
                        derivation: 'Derived from Newton\'s second law for rotation, τ = dL/dt. If τ = 0, then dL/dt = 0, which means L is constant.'
                    }
                ]
            },
            {
                name: 'Electrostatics',
                formulae: [
                    {
                        title: 'Coulomb\'s Law',
                        explanation: 'Quantifies the amount of force between two stationary, electrically charged particles.',
                        formula: 'F = k * |q₁q₂| / r²',
                        derivation: 'An experimental law that forms the basis of electrostatics. The constant k = 1 / (4πε₀).'
                    },
                    {
                        title: 'Electric Field',
                        explanation: 'A vector field that associates to each point in space the force experienced per unit of positive electric charge.',
                        formula: 'E = F / q',
                        derivation: 'The electric field is defined as the electrostatic force per unit test charge. For a point charge, E = kq/r².'
                    },
                    {
                        title: 'Gauss\'s Law',
                        explanation: 'Relates the distribution of electric charge to the resulting electric field. It states that the total electric flux through any closed surface is proportional to the total electric charge enclosed within that surface.',
                        formula: 'Φ_E = ∫ E · dA = Q_enclosed / ε₀',
                        derivation: 'A fundamental law of electromagnetism, one of Maxwell\'s four equations. It can be derived from Coulomb\'s law and the superposition principle for symmetrical charge distributions.'
                    },
                    {
                        title: 'Capacitance',
                        explanation: 'The ability of a system to store an electric charge. It is the ratio of the change in an electric charge in a system to the corresponding change in its electric potential.',
                        formula: 'C = Q / V. For parallel plates: C = ε₀A/d',
                        derivation: 'The general definition C=Q/V is fundamental. The formula for a parallel plate capacitor is derived by finding the potential difference V between the plates for a given charge Q, using V = Ed and E = σ/ε₀ = Q/Aε₀.'
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
                        name: 'The Mole and Avogadro\'s Number',
                        formula: '1 mole = 6.022 x 10²³ particles',
                        derivation: 'Based on the number of atoms in exactly 12 grams of Carbon-12. It serves as a bridge between the microscopic world of atoms and the macroscopic world of grams.'
                    },
                    {
                        name: 'Molar Mass',
                        formula: 'Molar Mass (M) = Mass (m) / Moles (n)',
                        derivation: 'It is a fundamental conversion factor used in stoichiometry to relate mass to moles.'
                    },
                    {
                        name: 'Empirical and Molecular Formulas',
                        formula: 'Molecular Formula = n * (Empirical Formula)\nn = Molar Mass / Empirical Formula Mass',
                        derivation: 'Determined experimentally through elemental analysis (e.g., combustion analysis) and by knowing the molar mass of the compound.'
                    }
                ]
            },
            {
                name: 'Atomic Structure',
                formulae: [
                    {
                        name: 'Bohr Model of the Atom',
                        formula: 'Energy in nth orbit: E_n = -R_H * (Z^2 / n^2)\nRadius of nth orbit: r_n = (n^2 * a_0) / Z',
                        derivation: 'Derived by combining classical mechanics for circular motion with the quantization of angular momentum (mvr = nh/2π).'
                    },
                    {
                        name: 'Quantum Numbers',
                        formula: 'Principal (n) = 1, 2, 3...\nAzimuthal (l) = 0 to n-1\nMagnetic (m_l) = -l to +l\nSpin (m_s) = +1/2, -1/2',
                        derivation: 'The first three quantum numbers arise as solutions to the Schrödinger wave equation for the hydrogen atom. The spin quantum number was added to explain experimental observations (Stern-Gerlach experiment).'
                    },
                    {
                        name: 'Heisenberg Uncertainty Principle',
                        formula: 'Δx * Δp ≥ h / 4π',
                        derivation: 'A fundamental principle of quantum mechanics, arising from the wave-particle duality of matter. It is not a limitation of measurement devices but an inherent property of nature.'
                    }
                ]
            },
            {
                name: 'Chemical Bonding',
                formulae: [
                    {
                        name: 'VSEPR Theory',
                        formula: 'Repulsion order: Lone Pair-Lone Pair > Lone Pair-Bond Pair > Bond Pair-Bond Pair',
                        derivation: 'Based on the principle that electron pairs in the valence shell of an atom repel each other and will arrange themselves to be as far apart as possible, minimizing repulsion and determining the molecular geometry.'
                    },
                    {
                        name: 'Hybridization',
                        formula: 'sp (linear), sp² (trigonal planar), sp³ (tetrahedral)',
                        derivation: 'A mathematical model proposed to explain the observed bond angles in molecules, such as the 109.5° angle in methane, which cannot be explained by the overlap of simple s and p orbitals.'
                    },
                    {
                        name: 'Molecular Orbital Theory (MOT)',
                        formula: 'Bond Order = 1/2 * (No. of bonding e⁻ - No. of antibonding e⁻)',
                        derivation: 'Based on the linear combination of atomic orbitals (LCAO) approximation. Atomic orbitals combine to form an equal number of molecular orbitals (bonding and antibonding), which are filled by electrons according to the Aufbau principle and Hund\'s rule.'
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


    

    

    

    






