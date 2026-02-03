
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
                    {
                        title: 'Ohm\'s Law',
                        explanation: 'States that the current through a conductor between two points is directly proportional to the voltage across the two points, provided the temperature and other physical conditions remain unchanged.',
                        formula: 'V = IR',
                        derivation: 'An empirical law. Microscopically, it can be derived from the drift velocity model: I = nAve, and E = V/L, leading to V = I * (mL/nA²e²τ), where the term in parentheses is resistance R.'
                    },
                    {
                        title: 'Kirchhoff\'s Laws',
                        explanation: 'A set of two rules that deal with the conservation of charge and energy in electrical circuits.',
                        formula: '1. Junction Rule (KCL): ΣI = 0 at any junction.\n2. Loop Rule (KVL): ΣV = 0 for any closed loop.',
                        derivation: 'The Junction Rule is a statement of the conservation of charge. The Loop Rule is a statement of the conservation of energy.'
                    },
                    {
                        title: 'Wheatstone Bridge',
                        explanation: 'An electrical circuit used to measure an unknown electrical resistance by balancing two legs of a bridge circuit, one leg of which includes the unknown component.',
                        formula: 'Balanced condition: R₁/R₂ = R₃/R₄',
                        derivation: 'When the bridge is balanced, the potential difference between the middle points is zero, and no current flows through the galvanometer. Applying Kirchhoff\'s loop rule to the two loops yields the balance condition.'
                    }
                ]
            },
            {
                name: 'Magnetic Effects of Current and Magnetism',
                concepts: [
                    {
                        title: 'Lorentz Force',
                        explanation: 'The combination of electric and magnetic force on a point charge due to electromagnetic fields.',
                        formula: 'F = q(E + v x B)',
                        derivation: 'A fundamental law defining the force on a charge in an electromagnetic field. The magnetic component F_m = q(v x B) is derived from experimental observations.'
                    },
                    {
                        title: 'Biot-Savart Law',
                        explanation: 'Describes the magnetic field generated by a constant electric current. It relates the magnetic field to the magnitude, direction, length, and proximity of the electric current.',
                        formula: 'dB = (μ₀/4π) * (I dL x r̂) / r²',
                        derivation: 'An experimental law, analogous to Coulomb\'s law in electrostatics. It is a fundamental law for magnetostatics.'
                    },
                    {
                        title: 'Ampere\'s Circuital Law',
                        explanation: 'Relates the integrated magnetic field around a closed loop to the electric current passing through the loop.',
                        formula: '∮ B · dL = μ₀I_enclosed',
                        derivation: 'One of Maxwell\'s equations, it can be derived from the Biot-Savart law. It is particularly useful for calculating the magnetic field of symmetric current distributions like a long straight wire or a solenoid.'
                    }
                ]
            },
            {
                name: 'Electromagnetic Induction and AC',
                concepts: [
                     {
                        title: 'Faraday\'s Law of Induction',
                        explanation: 'A basic law of electromagnetism predicting how a magnetic field will interact with an electric circuit to produce an electromotive force (EMF).',
                        formula: 'ε = -dΦ_B/dt',
                        derivation: 'A fundamental experimental law. The negative sign is given by Lenz\'s Law and indicates the direction of the induced EMF.'
                    },
                    {
                        title: 'Self-Inductance and Mutual Inductance',
                        explanation: 'Self-inductance is the property of a current-carrying coil that resists a change in the current flowing through itself. Mutual inductance describes the induction of an EMF in one coil due to a changing current in another nearby coil.',
                        formula: 'Self: ε = -L(dI/dt). Mutual: ε₂ = -M(dI₁/dt)',
                        derivation: 'Derived from Faraday\'s law, where the flux is proportional to the current itself (for self-inductance) or the current in another coil (for mutual inductance).'
                    },
                     {
                        title: 'LCR Series Circuit',
                        explanation: 'An AC circuit containing a resistor, inductor, and capacitor in series. Its behavior depends on the frequency of the AC source.',
                        formula: 'Impedance (Z) = √(R² + (X_L - X_C)²)\nResonant Frequency (ω₀) = 1/√(LC)',
                        derivation: 'Derived using phasor analysis, which treats the voltage and current as rotating vectors. Impedance is the effective resistance of the circuit to AC current.'
                    }
                ]
            },
            {
                name: 'Optics',
                concepts: [
                     {
                        title: 'Mirror Formula & Magnification',
                        explanation: 'Relates the object distance (u), image distance (v), and focal length (f) for a spherical mirror.',
                        formula: '1/f = 1/v + 1/u\nMagnification (m) = -v/u',
                        derivation: 'Derived from geometric principles using similar triangles formed by rays reflected from the mirror.'
                    },
                     {
                        title: 'Lens Maker\'s Formula',
                        explanation: 'Relates the focal length of a thin lens to the refractive index of its material and the radii of curvature of its two surfaces.',
                        formula: '1/f = (n-1)(1/R₁ - 1/R₂)',
                        derivation: 'Derived by applying Snell\'s law at both refracting surfaces of a thin lens and using the approximation for thin lenses.'
                    },
                    {
                        title: 'Young\'s Double-Slit Experiment (YDSE)',
                        explanation: 'A classic experiment that demonstrates the wave nature of light through interference.',
                        formula: 'Fringe Width (β) = λD/d',
                        derivation: 'The fringe width is the distance between two consecutive bright or dark fringes. It is derived from the path difference condition for constructive/destructive interference for small angles.'
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
                    {
                        title: 'Law of Mass Action and Equilibrium Constant',
                        explanation: 'For a reversible reaction at equilibrium, the ratio of the product of the concentrations of the products to that of the reactants, with each concentration term raised to the power of its stoichiometric coefficient, is constant at a given temperature.',
                        formula: 'For aA + bB ⇌ cC + dD, K_c = [C]^c[D]^d / [A]^a[B]^b',
                        derivation: 'Derived from the principle that at equilibrium, the rate of the forward reaction equals the rate of the reverse reaction.'
                    },
                    {
                        title: 'Le Chatelier\'s Principle',
                        explanation: 'States that if a change of condition (like concentration, pressure, or temperature) is applied to a system in equilibrium, the system will shift in a direction that counteracts the change.',
                        formula: 'Qualitative principle, no single formula.',
                        derivation: 'A consequence of the system\'s tendency to seek a new state of minimum Gibbs free energy after being disturbed.'
                    },
                    {
                        title: 'Relationship between Kp and Kc',
                        explanation: 'Relates the equilibrium constant expressed in terms of partial pressures (Kp) to the one expressed in molar concentrations (Kc).',
                        formula: 'K_p = K_c(RT)^Δn_g',
                        derivation: 'Derived from the ideal gas law (P = (n/V)RT = CRT) by substituting partial pressures for concentrations in the equilibrium expression.'
                    }
                ]
            },
            {
                name: 'Solutions',
                concepts: [
                    {
                        title: 'Raoult\'s Law',
                        explanation: 'States that the partial vapor pressure of each component of an ideal mixture of liquids is equal to the vapor pressure of the pure component multiplied by its mole fraction in the mixture.',
                        formula: 'P_A = P°_A * x_A',
                        derivation: 'An empirical law defining an ideal solution, where the partial vapor pressure of a component is proportional to its mole fraction.'
                    },
                    {
                        title: 'Elevation in Boiling Point',
                        explanation: 'The boiling point of a solvent is elevated upon the addition of a non-volatile solute.',
                        formula: 'ΔT_b = i * K_b * m',
                        derivation: 'A colligative property derived from the lowering of vapor pressure. The solution must reach a higher temperature to have its vapor pressure equal the external pressure.'
                    },
                    {
                        title: 'Osmotic Pressure',
                        explanation: 'The external pressure required to be applied to a solution to prevent the inward flow of its pure solvent across a semipermeable membrane.',
                        formula: 'π = i * MRT',
                        derivation: 'Derived from thermodynamic principles, the formula is analogous to the ideal gas law. It is a colligative property dependent on the molar concentration of the solute.'
                    }
                ]
            },
             {
                name: 'Coordination Compounds',
                concepts: [
                    {
                        title: 'Werner\'s Theory',
                        explanation: 'Proposed that metals in coordination compounds have two types of valencies: a primary (ionisable) valency corresponding to the oxidation state and a secondary (non-ionisable) valency corresponding to the coordination number.',
                        formula: 'e.g., [Co(NH₃)₆]Cl₃. Secondary valency = 6. Primary valency = 3.',
                        derivation: 'A foundational theory based on experimental observations of conductivity and precipitation reactions of coordination compounds.'
                    },
                    {
                        title: 'Valence Bond Theory (VBT)',
                        explanation: 'Describes the formation of coordinate bonds as the overlap between filled ligand orbitals and vacant hybrid orbitals of the central metal atom. It is used to predict the geometry and magnetic properties.',
                        formula: 'Examples: [Ni(CN)₄]²⁻ (dsp², square planar), [Ni(CO)₄] (sp³, tetrahedral)',
                        derivation: 'An application of valence bond principles to coordination complexes, involving hybridization to explain observed geometries.'
                    },
                    {
                        title: 'Crystal Field Theory (CFT)',
                        explanation: 'An electrostatic model that describes the splitting of the d-orbitals of a central metal ion in the electric field created by the surrounding ligands. It explains the color and magnetic properties of complexes.',
                        formula: 'For octahedral complexes, d-orbitals split into t₂g (lower energy) and e_g (higher energy) sets. The energy difference is Δ₀.',
                        derivation: 'Based on considering ligands as point charges that repel the d-electrons of the metal ion to different extents depending on the orbital\'s orientation, leading to a splitting of their energy levels.'
                    }
                ]
            }
        ]
    }
];

export const formulas: FormulaSubject[] = [
    {
        subject: 'Physics',
        topics: [
            {
                name: 'Electrostatics',
                formulae: [
                    { name: 'Coulomb\'s Law', formula: 'F = k * |q₁q₂| / r²', derivation: 'Force between two point charges. k = 1 / (4πε₀).' },
                    { name: 'Electric Field (Point Charge)', formula: 'E = kq/r²', derivation: 'Field created by a point charge q.' },
                    { name: 'Gauss\'s Law', formula: 'Φ_E = ∫ E · dA = Q_enclosed / ε₀', derivation: 'Relates electric flux to enclosed charge.' },
                    { name: 'Electric Potential (Point Charge)', formula: 'V = kq/r', derivation: 'Work done per unit charge to bring a charge from infinity.' },
                    { name: 'Capacitance (Parallel Plate)', formula: 'C = Kε₀A/d', derivation: 'Capacitance with dielectric K.' },
                    { name: 'Energy in Capacitor', formula: 'U = (1/2)CV² = Q²/2C', derivation: 'Energy stored in the electric field of a capacitor.' },
                    { name: 'Dipole Moment', formula: 'p = q * 2a', derivation: 'Product of charge and separation distance of a dipole.' },
                    { name: 'Torque on Dipole', formula: 'τ = p x E = pEsinθ', derivation: 'Torque experienced by a dipole in a uniform electric field.' }
                ]
            },
            {
                name: 'Current Electricity',
                formulae: [
                    { name: 'Ohm\'s Law', formula: 'V = IR', derivation: 'Relates voltage, current, and resistance for ohmic conductors.' },
                    { name: 'Resistance & Resistivity', formula: 'R = ρ(L/A)', derivation: 'Resistance in terms of material property (ρ) and geometry.' },
                    { name: 'Drift Velocity', formula: 'I = nAve', derivation: 'Relates current (I) to number density (n), area (A), charge (e), and drift velocity (v).' },
                    { name: 'Kirchhoff\'s Junction Rule (KCL)', formula: 'ΣI = 0', derivation: 'Conservation of charge at a junction.' },
                    { name: 'Kirchhoff\'s Loop Rule (KVL)', formula: 'ΣV = 0', derivation: 'Conservation of energy in a closed loop.' },
                    { name: 'Wheatstone Bridge (Balanced)', formula: 'R₁/R₂ = R₃/R₄', derivation: 'Condition for zero current through the galvanometer.' },
                    { name: 'Potentiometer Principle', formula: 'E₁/E₂ = l₁/l₂', derivation: 'Comparing EMFs using balancing lengths.' }
                ]
            },
            {
                name: 'Magnetic Effects of Current',
                formulae: [
                    { name: 'Lorentz Force', formula: 'F = q(E + v x B)', derivation: 'Total force on a charge in electromagnetic fields.' },
                    { name: 'Biot-Savart Law', formula: 'dB = (μ₀/4π) * (I dL x r̂) / r²', derivation: 'Field from a small current element.' },
                    { name: 'Field (Long Straight Wire)', formula: 'B = μ₀I / 2πr', derivation: 'Derived from Ampere\'s Law.' },
                    { name: 'Field (Center of Circular Loop)', formula: 'B = μ₀I / 2R', derivation: 'Derived from Biot-Savart Law.' },
                    { name: 'Ampere\'s Circuital Law', formula: '∮ B · dL = μ₀I_enclosed', derivation: 'Relates magnetic field circulation to enclosed current.' },
                    { name: 'Force on Current Wire', formula: 'F = I(L x B)', derivation: 'Force on a straight wire of length L in a uniform field B.' }
                ]
            },
            {
                name: 'Electromagnetic Induction & AC',
                formulae: [
                    { name: 'Faraday\'s Law of Induction', formula: 'ε = -dΦ_B/dt', derivation: 'Induced EMF is the rate of change of magnetic flux.' },
                    { name: 'Motional EMF', formula: 'ε = Blv', derivation: 'EMF induced in a conductor moving in a B-field.' },
                    { name: 'Self-Inductance', formula: 'ε = -L(dI/dt)', derivation: 'EMF induced in a coil due to change in its own current.' },
                    { name: 'Inductive Reactance', formula: 'X_L = ωL = 2πfL', derivation: 'Opposition to AC current by an inductor.' },
                    { name: 'Capacitive Reactance', formula: 'X_C = 1/(ωC) = 1/(2πfC)', derivation: 'Opposition to AC current by a capacitor.' },
                    { name: 'Impedance (LCR Circuit)', formula: 'Z = √(R² + (X_L - X_C)²) ', derivation: 'Total opposition to current in a series LCR circuit.' },
                    { name: 'Resonant Frequency', formula: 'f₀ = 1 / (2π√(LC))', derivation: 'Frequency at which X_L = X_C and impedance is minimum.' }
                ]
            },
             {
                name: 'Electromagnetic Waves',
                formulae: [
                    { name: 'Speed in Vacuum', formula: 'c = 1/√(μ₀ε₀)', derivation: 'Derived from Maxwell\'s equations.' },
                    { name: 'Wave Relation', formula: 'c = fλ', derivation: 'Fundamental wave property.' },
                    { name: 'Field Relation', formula: 'E₀ = cB₀', derivation: 'Relation between amplitudes of electric and magnetic fields.' },
                    { name: 'Energy Density', formula: 'u = (1/2)ε₀E² + B²/(2μ₀)', derivation: 'Total energy stored per unit volume in EM fields.' },
                ]
            },
            {
                name: 'Ray and Wave Optics',
                formulae: [
                    { name: 'Mirror Formula', formula: '1/f = 1/v + 1/u', derivation: 'Derived from geometry of reflection for spherical mirrors.' },
                    { name: 'Lens Maker\'s Formula', formula: '1/f = (n-1)(1/R₁ - 1/R₂)', derivation: 'Relates focal length to material and shape of a thin lens.' },
                    { name: 'Thin Lens Formula', formula: '1/f = 1/v - 1/u', derivation: 'Relates object distance, image distance, and focal length for a thin lens.' },
                    { name: 'YDSE Fringe Width', formula: 'β = λD/d', derivation: 'Separation between consecutive bright/dark fringes.' },
                    { name: 'Single Slit Diffraction (Minima)', formula: 'a sinθ = nλ', derivation: 'Condition for destructive interference from a single slit of width a.' },
                    { name: 'Brewster\'s Law', formula: 'n = tan(θ_p)', derivation: 'Relates refractive index to the polarizing angle.' },
                    { name: 'Malus\'s Law', formula: 'I = I₀ cos²θ', derivation: 'Intensity of light transmitted through a second polarizer.' }
                ]
            },
             {
                name: 'Dual Nature of Matter',
                formulae: [
                    { name: 'Photon Energy', formula: 'E = hf = hc/λ', derivation: 'Energy of a single quantum of light.' },
                    { name: 'Photoelectric Equation', formula: 'K_max = hf - φ₀', derivation: 'Einstein\'s equation explaining energy conservation in photoelectric effect.' },
                    { name: 'de Broglie Wavelength', formula: 'λ = h/p = h/mv', derivation: 'Wavelength associated with a moving particle.' }
                ]
            },
            {
                name: 'Atoms',
                formulae: [
                    { name: 'Bohr\'s Radius', formula: 'r_n = (n²h²ε₀)/(πme²Z)', derivation: 'Radius of the nth quantized orbit in a hydrogen-like atom.' },
                    { name: 'Bohr\'s Energy', formula: 'E_n = -(me⁴Z²)/(8ε₀²h²n²)', derivation: 'Energy of the nth quantized orbit.' },
                    { name: 'Rydberg Formula', formula: '1/λ = RZ²(1/n₁² - 1/n₂²)', derivation: 'Calculates the wavelength of spectral lines emitted during electronic transitions.' }
                ]
            },
             {
                name: 'Nuclei',
                formulae: [
                    { name: 'Nuclear Radius', formula: 'R = R₀A^(1/3)', derivation: 'Empirical formula relating nuclear radius to mass number A.' },
                    { name: 'Mass-Energy Equivalence', formula: 'E = mc²', derivation: 'Einstein\'s famous equation relating mass and energy.' },
                    { name: 'Binding Energy', formula: 'B.E. = [Zmp + (A-Z)mn - M_nuc]c²', derivation: 'Energy equivalent of the mass defect.' },
                    { name: 'Law of Radioactive Decay', formula: 'N(t) = N₀e^(-λt)', derivation: 'Describes the exponential decay of radioactive nuclei.' },
                    { name: 'Half-Life', formula: 'T₁/₂ = ln(2)/λ ≈ 0.693/λ', derivation: 'Time taken for half of the nuclei in a sample to decay.' }
                ]
            },
            {
                name: 'Semiconductor Electronics',
                formulae: [
                    { name: 'Transistor Current Gains', formula: 'β = α/(1-α), α = β/(1+β)', derivation: 'Relates the common-base current gain (α) and common-emitter current gain (β).' },
                    { name: 'Voltage Gain (CE Amplifier)', formula: 'A_v = -β (R_out / R_in)', derivation: 'Approximation for the voltage amplification in a common-emitter configuration.' }
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
            },
            {
                name: 'Coordination Compounds',
                formulae: [
                    {
                        name: 'Werner\'s Theory',
                        formula: 'e.g., [Co(NH₃)₆]Cl₃. Secondary valency = 6. Primary valency = 3.',
                        derivation: 'A foundational theory based on experimental observations of conductivity and precipitation reactions of coordination compounds.'
                    },
                    {
                        name: 'Valence Bond Theory (VBT)',
                        formula: 'Examples: [Ni(CN)₄]²⁻ (dsp², square planar), [Ni(CO)₄] (sp³, tetrahedral)',
                        derivation: 'An application of valence bond principles to coordination complexes, involving hybridization to explain observed geometries.'
                    },
                    {
                        name: 'Crystal Field Theory (CFT)',
                        formula: 'For octahedral complexes, d-orbitals split into t₂g (lower energy) and e_g (higher energy) sets. The energy difference is Δ₀.',
                        derivation: 'Based on considering ligands as point charges that repel the d-electrons of the metal ion to different extents depending on the orbital\'s orientation, leading to a splitting of their energy levels.'
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


    

    

    

    








