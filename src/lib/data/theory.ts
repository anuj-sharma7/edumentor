
export type TheoryConcept = {
    title: string;
    explanation: string;
    formula?: string;
    derivation?: string;
}

export type TheoryChapter = {
    name: string;
    concepts: TheoryConcept[];
}

export type TheorySubject = {
    subject: string;
    chapters: TheoryChapter[];
}

export const theory: TheorySubject[] = [
    {
        subject: 'Physics',
        chapters: [
            {
                name: 'Kinematics',
                concepts: [
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
                        formula: 'Replace \'a\' with \'-g\' in equations of motion for upward motion, and with \'+g\' for downward motion.',
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
                        explanation: 'Quantifies the amount of force between two stationary, electrically charged particles.',
                        formula: 'F = k * |q₁q₂| / r²',
                        derivation: 'An experimental law that forms the basis of electrostatics. The constant k = 1 / (4πε₀).'
                    },
                    {
                        title: 'Electric Field',
                        explanation: 'A vector field that associates to each point in space the force experienced per unit of positive electric charge.',
                        formula: 'E = F / q. For a point charge: E = kq/r²',
                        derivation: 'The electric field is defined as the electrostatic force per unit test charge.'
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
            },
            {
                name: 'Current Electricity',
                concepts: [
                    { name: 'Ohm\'s Law', explanation: 'Relates voltage, current, and resistance for many materials.', formula: 'V = IR', derivation: 'An empirical law. Microscopically, it can be derived from the drift velocity model.' },
                    { name: 'Kirchhoff\'s Laws', explanation: 'Two fundamental laws dealing with conservation of charge (Junction Rule) and energy (Loop Rule) in electrical circuits.', formula: 'Junction Rule: ΣI = 0\nLoop Rule: ΣV = 0', derivation: 'Direct consequences of the conservation of charge and energy.' },
                ]
            },
            {
                name: 'Magnetic Effects of Current and Magnetism',
                concepts: [
                    { name: 'Lorentz Force', explanation: 'The total force experienced by a charge moving in electric and magnetic fields.', formula: 'F = q(E + v x B)', derivation: 'A fundamental law combining electric and magnetic forces on a charge.' },
                    { name: 'Biot-Savart Law', explanation: 'Calculates the magnetic field generated by a small segment of a current-carrying wire.', formula: 'dB = (μ₀/4π) * (I dL x r̂) / r²', derivation: 'An experimental law for magnetostatics.' },
                    { name: 'Ampere\'s Law', explanation: 'Relates the integrated magnetic field around a closed loop to the total current passing through it.', formula: '∮ B · dL = μ₀I_enclosed', derivation: 'Useful for calculating B-fields in symmetric situations like long wires and solenoids.' },
                ]
            },
            {
                name: 'Electromagnetic Induction and AC',
                concepts: [
                    { name: 'Faraday\'s Law of Induction', explanation: 'States that a changing magnetic flux through a circuit induces an electromotive force (EMF).', formula: 'ε = -dΦ_B/dt', derivation: 'A fundamental experimental law of electromagnetism.' },
                    { name: 'LCR Series Circuit', explanation: 'An AC circuit containing a resistor, inductor, and capacitor. Its behavior is frequency-dependent.', formula: 'Impedance (Z) = √(R² + (X_L - X_C)²)', derivation: 'Derived using phasor analysis to combine resistance and reactance.' },
                ]
            },
            {
                name: 'Optics',
                concepts: [
                    { name: 'Lens Maker\'s Formula', explanation: 'Relates the focal length of a lens to its refractive index and radii of curvature.', formula: '1/f = (n-1)(1/R₁ - 1/R₂)', derivation: 'Derived by applying Snell\'s law at both surfaces of a thin lens.' },
                    { name: 'YDSE Fringe Width', explanation: 'Describes the separation between adjacent bright or dark interference fringes in Young\'s double-slit experiment.', formula: 'β = λD/d', derivation: 'Derived from the path difference condition for constructive/destructive interference for small angles.' },
                ]
            }
        ]
    },
    {
        subject: 'Chemistry',
        chapters: [
            {
                name: 'Mole Concept',
                concepts: [
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


    

    

    

    










