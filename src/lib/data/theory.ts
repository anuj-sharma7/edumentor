
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
                        title: 'Equations of Motion (Constant Acceleration)',
                        explanation: 'These are the fundamental equations that describe the motion of an object under constant acceleration.',
                        formula: '1. v = u + at\n2. s = ut + (1/2)at^2\n3. v^2 = u^2 + 2as',
                        derivation: '1. Derived from a = dv/dt. Integrating gives v = at + C. At t=0, v=u, so C=u. Hence v = u + at.\n2. Derived from v = ds/dt. Integrating ds = (u+at)dt gives s = ut + (1/2)at^2.\n3. Derived by eliminating time from the first two equations.'
                    },
                    {
                        title: 'Projectile Motion',
                        explanation: 'Motion of an object thrown into the air, subject only to the acceleration of gravity. It is a 2D motion with constant acceleration.',
                        formula: 'Horizontal Range (R) = (u^2 * sin(2θ)) / g\nMaximum Height (H) = (u^2 * sin^2(θ)) / (2g)\nTime of Flight (T) = (2u * sin(θ)) / g',
                        derivation: 'Derived by analyzing the horizontal (constant velocity) and vertical (constant acceleration) components of motion separately.'
                    },
                    {
                        title: 'Relative Velocity',
                        explanation: 'The velocity of an object or observer B in the rest frame of another object or observer A.',
                        formula: 'v_AB = v_A - v_B',
                        derivation: 'It is the vector difference between the velocities of the two objects.'
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
        chapters: [
            {
                name: 'Mole Concept',
                concepts: [
                    {
                        title: 'The Mole and Avogadro\'s Number',
                        explanation: 'A mole is the amount of a substance that contains exactly 6.022 x 10²³ elementary entities (atoms, molecules, ions, etc.). This number is known as Avogadro\'s constant.',
                        formula: '1 mole = 6.022 x 10²³ particles',
                        derivation: 'Based on the number of atoms in exactly 12 grams of Carbon-12. It serves as a bridge between the microscopic world of atoms and the macroscopic world of grams.'
                    },
                    {
                        title: 'Molar Mass',
                        explanation: 'The mass of one mole of a substance, expressed in grams per mole (g/mol). It is numerically equal to the atomic or molecular weight in atomic mass units (amu).',
                        formula: 'Molar Mass (M) = Mass (m) / Moles (n)',
                        derivation: 'It is a fundamental conversion factor used in stoichiometry to relate mass to moles.'
                    },
                    {
                        title: 'Empirical and Molecular Formulas',
                        explanation: 'The empirical formula gives the simplest whole-number ratio of atoms in a compound. The molecular formula gives the actual number of atoms of each element in a molecule.',
                        formula: 'Molecular Formula = n * (Empirical Formula)\nn = Molar Mass / Empirical Formula Mass',
                        derivation: 'Determined experimentally through elemental analysis (e.g., combustion analysis) and by knowing the molar mass of the compound.'
                    }
                ]
            },
            {
                name: 'Atomic Structure',
                concepts: [
                    {
                        title: 'Bohr Model of the Atom',
                        explanation: 'Proposed that electrons move in fixed circular orbits around the nucleus. The energy of the electron is quantized, meaning it can only exist in specific energy levels.',
                        formula: 'Energy in nth orbit: E_n = -R_H * (Z^2 / n^2)\nRadius of nth orbit: r_n = (n^2 * a_0) / Z',
                        derivation: 'Derived by combining classical mechanics for circular motion with the quantization of angular momentum (mvr = nh/2π).'
                    },
                    {
                        title: 'Quantum Numbers',
                        explanation: 'A set of four numbers (n, l, m_l, m_s) that describe the state (energy, shape, orientation, and spin) of an electron in an atom.',
                        formula: 'Principal (n) = 1, 2, 3...\nAzimuthal (l) = 0 to n-1\nMagnetic (m_l) = -l to +l\nSpin (m_s) = +1/2, -1/2',
                        derivation: 'The first three quantum numbers arise as solutions to the Schrödinger wave equation for the hydrogen atom. The spin quantum number was added to explain experimental observations (Stern-Gerlach experiment).'
                    },
                    {
                        title: 'Heisenberg Uncertainty Principle',
                        explanation: 'It is impossible to simultaneously determine with perfect accuracy both the position and the momentum of a particle.',
                        formula: 'Δx * Δp ≥ h / 4π',
                        derivation: 'A fundamental principle of quantum mechanics, arising from the wave-particle duality of matter. It is not a limitation of measurement devices but an inherent property of nature.'
                    }
                ]
            },
            {
                name: 'Chemical Bonding',
                concepts: [
                    {
                        title: 'VSEPR Theory',
                        explanation: 'Valence Shell Electron Pair Repulsion theory is a model used to predict the 3D geometry of individual molecules from the number of electron pairs surrounding their central atoms.',
                        formula: 'Repulsion order: Lone Pair-Lone Pair > Lone Pair-Bond Pair > Bond Pair-Bond Pair',
                        derivation: 'Based on the principle that electron pairs in the valence shell of an atom repel each other and will arrange themselves to be as far apart as possible, minimizing repulsion and determining the molecular geometry.'
                    },
                    {
                        title: 'Hybridization',
                        explanation: 'The concept of mixing atomic orbitals into new hybrid orbitals suitable for the pairing of electrons to form chemical bonds in valence bond theory.',
                        formula: 'sp (linear), sp² (trigonal planar), sp³ (tetrahedral)',
                        derivation: 'A mathematical model proposed to explain the observed bond angles in molecules, such as the 109.5° angle in methane, which cannot be explained by the overlap of simple s and p orbitals.'
                    },
                    {
                        title: 'Molecular Orbital Theory (MOT)',
                        explanation: 'A method for describing the electronic structure of molecules using quantum mechanics. It describes bonding in terms of molecular orbitals that result from the combination of atomic orbitals.',
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
