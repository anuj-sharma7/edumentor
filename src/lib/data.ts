
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
                        name: 'Coulomb\'s Law',
                        formula: 'F = k * |q₁q₂| / r²',
                        derivation: 'An experimental law that forms the basis of electrostatics. The constant k = 1 / (4πε₀).'
                    },
                    {
                        name: 'Electric Field',
                        formula: 'E = F / q. For a point charge: E = kq/r²',
                        derivation: 'The electric field is defined as the electrostatic force per unit test charge.'
                    },
                    {
                        name: 'Gauss\'s Law',
                        formula: 'Φ_E = ∫ E · dA = Q_enclosed / ε₀',
                        derivation: 'A fundamental law of electromagnetism. It relates the electric flux through a closed surface to the charge enclosed.'
                    },
                    {
                        name: 'Capacitance',
                        formula: 'C = Q / V. For parallel plates: C = ε₀A/d',
                        derivation: 'Defined as charge stored per unit potential difference. The parallel plate formula is derived using Gauss\'s law to find the electric field.'
                    }
                ]
            },
            {
                name: 'Current Electricity',
                formulae: [
                    { name: 'Ohm\'s Law', formula: 'V = IR', derivation: 'An empirical law stating that voltage is proportional to current for many materials.' },
                    { name: 'Resistance & Resistivity', formula: 'R = ρ(L/A)', derivation: 'Resistance (R) depends on the material\'s resistivity (ρ) and its geometry (length L, area A).' },
                    { name: 'Kirchhoff\'s Junction Rule (KCL)', formula: 'ΣI_in = ΣI_out', derivation: 'Based on the conservation of electric charge at any junction in a circuit.' },
                    { name: 'Kirchhoff\'s Loop Rule (KVL)', formula: 'ΣV = 0 for any closed loop', derivation: 'Based on the conservation of energy in a circuit. The sum of potential rises and drops around any closed loop is zero.' }
                ]
            },
            {
                name: 'Magnetic Effects',
                formulae: [
                    { name: 'Lorentz Force', formula: 'F = q(E + v x B)', derivation: 'A fundamental law describing the total force on a charge q moving with velocity v in electric field E and magnetic field B.' },
                    { name: 'Biot-Savart Law', formula: 'dB = (μ₀/4π) * (I dL x r̂) / r²', derivation: 'A fundamental law of magnetostatics that describes the magnetic field generated by a small segment of a current-carrying wire.' },
                    { name: 'Ampere\'s Law', formula: '∮ B · dL = μ₀I_enclosed', derivation: 'Relates the integrated magnetic field around a closed loop to the electric current passing through the loop. Useful for symmetric current distributions.' }
                ]
            },
            {
                name: 'Optics',
                formulae: [
                    { name: 'Mirror Formula', formula: '1/f = 1/v + 1/u', derivation: 'Derived using geometry and the laws of reflection for spherical mirrors.' },
                    { name: 'Lens Maker\'s Formula', formula: '1/f = (n-1)(1/R₁ - 1/R₂)', derivation: 'Relates the focal length of a thin lens to the refractive index of its material and the radii of curvature of its two surfaces.' },
                    { name: 'Fringe Width (YDSE)', formula: 'β = λD/d', derivation: 'In Young\'s double-slit experiment, this formula gives the separation between adjacent bright or dark fringes, derived from the path difference condition.' }
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
                        derivation: 'Based on the number of atoms in exactly 12 grams of Carbon-12.'
                    },
                    {
                        name: 'Molar Mass',
                        formula: 'Molar Mass (M) = Mass (m) / Moles (n)',
                        derivation: 'A fundamental conversion factor used in stoichiometry.'
                    },
                    {
                        name: 'Empirical & Molecular Formulas',
                        formula: 'Molecular Formula = n * (Empirical Formula)\nn = Molar Mass / Empirical Formula Mass',
                        derivation: 'Determined experimentally through elemental analysis.'
                    }
                ]
            },
            {
                name: 'Atomic Structure',
                formulae: [
                    {
                        name: 'Bohr Model Energy',
                        formula: 'E_n = -R_H * (Z^2 / n^2)',
                        derivation: 'Derived by combining classical mechanics with the quantization of angular momentum.'
                    },
                    {
                        name: 'de Broglie Wavelength',
                        formula: 'λ = h / mv = h / p',
                        derivation: 'Postulated by de Broglie to describe the wave-particle duality of matter.'
                    },
                    {
                        name: 'Heisenberg Uncertainty Principle',
                        formula: 'Δx * Δp ≥ h / 4π',
                        derivation: 'A fundamental principle of quantum mechanics.'
                    }
                ]
            },
            {
                name: 'Chemical Bonding',
                formulae: [
                    {
                        name: 'Formal Charge',
                        formula: 'FC = (Valence e⁻) - (Non-bonding e⁻) - (1/2 * Bonding e⁻)',
                        derivation: 'A method for keeping track of electrons in a Lewis structure.'
                    },
                    {
                        name: 'Bond Order (MOT)',
                        formula: 'Bond Order = 1/2 * (Bonding e⁻ - Antibonding e⁻)',
                        derivation: 'A key concept in Molecular Orbital Theory that correlates with bond strength and length.'
                    },
                    {
                        name: 'Dipole Moment',
                        formula: 'μ = q × d',
                        derivation: 'Defined as the product of the magnitude of the charge (q) and the distance of separation (d). It measures the polarity of a bond.'
                    }
                ]
            },
            {
                name: 'Thermodynamics',
                formulae: [
                    {
                        name: 'First Law of Thermodynamics',
                        formula: 'ΔU = q + w',
                        derivation: 'A statement of the conservation of energy.'
                    },
                    {
                        name: 'Enthalpy',
                        formula: 'H = U + PV\nΔH = ΔU + Δn_gRT',
                        derivation: 'Defined for convenience, especially for processes at constant pressure where ΔH = q_p.'
                    },
                    {
                        name: 'Gibbs Free Energy',
                        formula: 'ΔG = ΔH - TΔS',
                        derivation: 'The criterion for spontaneity at constant temperature and pressure. A negative ΔG indicates a spontaneous process.'
                    }
                ]
            },
            {
                name: 'Equilibrium',
                formulae: [
                    { name: 'Kp and Kc Relation', formula: 'K_p = K_c(RT)^Δn_g', derivation: 'Derived from the ideal gas law (P = CRT) by substituting partial pressures for concentrations in the equilibrium expression.' },
                    { name: 'Gibbs Energy and Equilibrium', formula: 'ΔG° = -RT ln(K)', derivation: 'A fundamental equation linking the standard Gibbs free energy change to the equilibrium constant.' },
                    { name: 'Henderson-Hasselbalch Equation', formula: 'pH = pKa + log([A⁻]/[HA])', derivation: 'Derived from the acid dissociation constant (Ka) expression, it is used to calculate the pH of a buffer solution.' },
                    { name: 'Solubility Product (Ksp)', formula: 'For AxBy ⇌ xA⁺ + yB⁻, Ksp = [A⁺]^x[B⁻]^y', derivation: 'The equilibrium constant for the dissolution of a sparingly soluble salt.' }
                ]
            },
            {
                name: 'Solutions',
                formulae: [
                    { name: 'Raoult\'s Law', formula: 'P_A = P°_A * x_A', derivation: 'An empirical law defining an ideal solution, where the partial vapor pressure of a component is proportional to its mole fraction.' },
                    { name: 'Boiling Point Elevation', formula: 'ΔT_b = i * K_b * m', derivation: 'A colligative property derived from the lowering of vapor pressure by a non-volatile solute.' },
                    { name: 'Freezing Point Depression', formula: 'ΔT_f = i * K_f * m', derivation: 'A colligative property where a solute disrupts the crystal lattice formation of the solvent.' },
                    { name: 'Osmotic Pressure', formula: 'π = i * MRT', derivation: 'The pressure required to prevent osmosis, analogous to the ideal gas law.' }
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


    

    

    

    







