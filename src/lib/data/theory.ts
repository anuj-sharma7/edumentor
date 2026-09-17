
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
                    {
                        title: 'Ohm\'s Law',
                        explanation: 'An empirical law stating that voltage is proportional to current for many materials.',
                        formula: 'V = IR',
                        derivation: 'A fundamental relationship in circuits.'
                    },
                    {
                        title: 'Kirchhoff\'s Laws',
                        explanation: 'Two fundamental laws for circuit analysis.',
                        formula: 'Junction Rule (KCL): ΣI_in = ΣI_out\nLoop Rule (KVL): ΣV = 0 for any closed loop',
                        derivation: 'KCL is based on conservation of charge, while KVL is based on conservation of energy.'
                    },
                    {
                        title: 'Wheatstone Bridge',
                        explanation: 'A circuit used to measure an unknown electrical resistance by balancing two legs of a bridge circuit.',
                        formula: 'Balanced condition: R₁/R₂ = R₃/R₄',
                        derivation: 'When balanced, the potential difference between the middle points is zero, hence no current flows through the galvanometer.'
                    }
                ]
            },
            {
                name: 'Magnetic Effects',
                concepts: [
                    {
                        title: 'Biot-Savart Law',
                        explanation: 'A fundamental law of magnetostatics that describes the magnetic field generated by a small segment of a current-carrying wire.',
                        formula: 'dB = (μ₀/4π) * (I dL x r̂) / r²',
                        derivation: 'An experimental law analogous to Coulomb\'s law for magnetism.'
                    },
                    {
                        title: 'Ampere\'s Law',
                        explanation: 'Relates the integrated magnetic field around a closed loop to the electric current passing through the loop.',
                        formula: '∮ B · dL = μ₀I_enclosed',
                        derivation: 'Useful for calculating the magnetic field for symmetric current distributions like solenoids and long wires.'
                    },
                    {
                        title: 'Lorentz Force',
                        explanation: 'Describes the total force on a charge q moving with velocity v in an electric field E and magnetic field B.',
                        formula: 'F = q(E + v x B)',
                        derivation: 'A fundamental law combining the electric and magnetic forces on a charge.'
                    }
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
            },
            {
                name: 'Thermodynamics',
                concepts: [
                    {
                        title: 'First Law of Thermodynamics',
                        explanation: 'The heat supplied to a system is used partly to increase its internal energy and partly to do work on the surroundings. It is a statement of conservation of energy applied to thermal processes.',
                        formula: 'ΔQ = ΔU + ΔW',
                        derivation: 'Follows directly from the law of conservation of energy: energy given to the gas as heat cannot disappear, so it is accounted for as a rise in internal energy plus the work done by the gas.'
                    },
                    {
                        title: 'Relation Between Specific Heats (Mayer\'s Relation)',
                        explanation: 'For an ideal gas, the molar specific heat at constant pressure exceeds the molar specific heat at constant volume, because at constant pressure some of the heat supplied goes into doing work as the gas expands.',
                        formula: 'C_p - C_v = R',
                        derivation: 'At constant volume, ΔQ = C_vΔT = ΔU. At constant pressure, ΔQ = C_pΔT = ΔU + PΔV = ΔU + RΔT (using PV=RT for one mole). Subtracting gives C_p - C_v = R.'
                    },
                    {
                        title: 'Carnot Engine Efficiency',
                        explanation: 'The Carnot engine is an idealised, reversible heat engine operating between a source at temperature T₁ and a sink at temperature T₂. No engine operating between the same two temperatures can be more efficient than a Carnot engine.',
                        formula: 'η = 1 - T₂/T₁ = W/Q₁',
                        derivation: 'Efficiency is defined as work output over heat absorbed, η = 1 - Q₂/Q₁. For a Carnot cycle, Q₂/Q₁ = T₂/T₁, so η = 1 - T₂/T₁.'
                    },
                    {
                        title: 'Adiabatic Process',
                        explanation: 'A process in which no heat enters or leaves the system (ΔQ = 0), usually because it happens too quickly for heat exchange, or the system is thermally insulated. All the work done changes the internal energy.',
                        formula: 'PV^γ = constant, TV^(γ-1) = constant',
                        derivation: 'From ΔQ=0, the first law gives dU = -PdV. Combined with the ideal gas law and Cv dT = dU, integrating leads to PV^γ = constant, where γ = C_p/C_v.'
                    }
                ]
            },
            {
                name: 'Oscillations and Waves',
                concepts: [
                    {
                        title: 'Simple Harmonic Motion (SHM)',
                        explanation: 'A periodic motion in which the restoring force (and hence acceleration) is directly proportional to the displacement from the mean position and is always directed towards it.',
                        formula: 'a = -ω²x,  x(t) = A sin(ωt + φ)',
                        derivation: 'For a spring-mass system, Newton\'s second law gives F = -kx = ma, so a = -(k/m)x. Comparing with a = -ω²x gives ω = √(k/m).'
                    },
                    {
                        title: 'Simple Pendulum',
                        explanation: 'A simple pendulum performs SHM for small angular displacements, where the restoring torque is provided by the component of gravity along the arc.',
                        formula: 'T = 2π√(L/g)',
                        derivation: 'For a small angle θ, the restoring force is -mg sinθ ≈ -mgθ = -(mg/L)x. This is of the SHM form with ω² = g/L, giving T = 2π/ω = 2π√(L/g).'
                    },
                    {
                        title: 'Wave Speed',
                        explanation: 'The speed at which a wave profile travels through a medium, related to how fast the medium oscillates (frequency) and how far the pattern repeats in space (wavelength).',
                        formula: 'v = fλ,  v = √(T/μ) for a stretched string',
                        derivation: 'In one time period T, the wave advances exactly one wavelength λ, so v = λ/T = fλ (since f = 1/T).'
                    },
                    {
                        title: 'Doppler Effect',
                        explanation: 'The apparent change in frequency of a wave (commonly sound) heard by an observer when there is relative motion between the source and the observer.',
                        formula: 'f\' = f · v / (v − v_s)  (source approaching a stationary observer)',
                        derivation: 'A source moving towards the observer emits each successive wavefront from a position closer to the observer, compressing the wavelength and hence raising the observed frequency.'
                    }
                ]
            },
            {
                name: 'Kinetic Theory of Gases',
                concepts: [
                    {
                        title: 'Kinetic Interpretation of Pressure',
                        explanation: 'Gas pressure arises from the continuous bombardment of the container walls by molecules; it can be related to the mean square speed of the molecules.',
                        formula: 'P = (1/3)ρv²_rms',
                        derivation: 'Each collision with a wall transfers momentum 2mv_x; summing over all molecules and dividing by wall area and time gives P = (1/3)(N/V)m⟨v²⟩ = (1/3)ρ⟨v²⟩.'
                    },
                    {
                        title: 'RMS Speed of Gas Molecules',
                        explanation: 'The square root of the mean of the squares of the individual molecular speeds; it sets the characteristic speed scale of the gas at a given temperature.',
                        formula: 'v_rms = √(3RT/M)',
                        derivation: 'Combining P = (1/3)ρv²_rms with the ideal gas law PV = nRT and ρ = nM/V gives v²_rms = 3RT/M.'
                    },
                    {
                        title: 'Degrees of Freedom and Specific Heat',
                        explanation: 'By the law of equipartition of energy, each degree of freedom of a molecule contributes (1/2)RT to the molar internal energy. This fixes the molar specific heats from the molecule\'s structure alone.',
                        formula: 'C_v = (f/2)R,  γ = 1 + 2/f',
                        derivation: 'A monatomic gas has f=3 (translation only), giving C_v=(3/2)R and γ=5/3. A rigid diatomic gas adds 2 rotational degrees of freedom (f=5), giving C_v=(5/2)R and γ=7/5.'
                    }
                ]
            },
            {
                name: 'Properties of Solids and Liquids',
                concepts: [
                    {
                        title: 'Young\'s Modulus',
                        explanation: 'A measure of a solid\'s resistance to elastic stretching or compression along its length: the ratio of longitudinal stress to longitudinal strain, valid up to the proportional limit.',
                        formula: 'Y = (F/A) / (ΔL/L)',
                        derivation: 'Definitional, from Hooke\'s law: stress is proportional to strain within the elastic limit, and Y is the constant of proportionality.'
                    },
                    {
                        title: 'Excess Pressure Due to Surface Tension',
                        explanation: 'Surface tension causes the pressure just inside a curved liquid surface to exceed the pressure outside; a soap bubble has two surfaces, so its excess pressure is double that of a single liquid drop of the same radius.',
                        formula: 'Drop: ΔP = 2T/r,   Soap bubble: ΔP = 4T/r',
                        derivation: 'For a drop, the surface tension force 2πrT pulling the hemisphere together balances the excess pressure force ΔP·πr², giving ΔP = 2T/r. A bubble has an inner and outer surface, doubling the result.'
                    },
                    {
                        title: 'Terminal Velocity (Stokes\' Law)',
                        explanation: 'A small sphere falling through a viscous fluid reaches a constant terminal velocity once the viscous drag and buoyant force together balance its weight.',
                        formula: 'v_t = 2r²(ρ − σ)g / (9η)',
                        derivation: 'At terminal velocity, weight = buoyancy + viscous drag: (4/3)πr³ρg = (4/3)πr³σg + 6πηrv, which rearranges to v_t = 2r²(ρ−σ)g/(9η).'
                    }
                ]
            },
            {
                name: 'Capacitors',
                concepts: [
                    {
                        title: 'Series and Parallel Combination',
                        explanation: 'Capacitors combine differently from resistors: in series the reciprocals of capacitance add (charge is common), while in parallel the capacitances themselves add (voltage is common).',
                        formula: 'Series: 1/C_eq = 1/C₁ + 1/C₂ + …    Parallel: C_eq = C₁ + C₂ + …',
                    },
                    {
                        title: 'Energy Stored in a Capacitor',
                        explanation: 'A charged capacitor stores energy in the electric field between its plates. This energy is the work done in building up the charge against the growing potential difference.',
                        formula: 'U = (1/2)CV² = Q²/(2C) = (1/2)QV',
                        derivation: 'At charge q, the voltage is q/C, so the work to add dq is (q/C)dq. Integrating from 0 to Q gives U = Q²/(2C).'
                    },
                    {
                        title: 'Effect of a Dielectric',
                        explanation: 'Inserting an insulating (dielectric) material between the plates of a capacitor increases its capacitance, because the dielectric partially cancels the electric field by polarising in response to it.',
                        formula: 'C\' = K·C',
                        derivation: 'The dielectric constant K quantifies how much the field is reduced (E\' = E/K) for the same free charge; since C = Q/V ∝ 1/E, the capacitance increases by the same factor K.'
                    }
                ]
            },
            {
                name: 'Ray Optics',
                concepts: [
                    {
                        title: 'Mirror Formula',
                        explanation: 'Relates the object distance, image distance and focal length of a spherical mirror, using the Cartesian sign convention (distances measured from the pole, with the direction of incident light taken as positive).',
                        formula: '1/v + 1/u = 1/f'
                    },
                    {
                        title: 'Lens Formula and Magnification',
                        explanation: 'Relates object distance, image distance and focal length for a thin lens, and gives the ratio of image height to object height.',
                        formula: '1/v − 1/u = 1/f,   m = v/u'
                    },
                    {
                        title: 'Refraction and Snell\'s Law',
                        explanation: 'When light passes from one transparent medium to another, it bends at the interface because its speed changes; the relationship between the angles of incidence and refraction is fixed by the refractive indices of the two media.',
                        formula: 'n₁ sinθ₁ = n₂ sinθ₂,   n = c/v'
                    }
                ]
            },
            {
                name: 'Modern Physics',
                concepts: [
                    {
                        title: 'Photoelectric Effect',
                        explanation: 'When light of sufficiently high frequency strikes a metal surface, electrons are ejected instantaneously. Einstein explained this by treating light as discrete photons, each carrying energy hν.',
                        formula: 'KE_max = hν − φ  (eV₀ = hν − φ)',
                        derivation: 'Each photon transfers its entire energy hν to one electron. Part of this energy (the work function φ) frees the electron from the metal; the rest appears as its kinetic energy.'
                    },
                    {
                        title: 'Radioactive Decay Law',
                        explanation: 'Radioactive decay is a random process in which the number of undecayed nuclei falls exponentially with time; the half-life is the time for half the nuclei in a sample to decay.',
                        formula: 'N = N₀e^(−λt),   t_½ = 0.693/λ',
                        derivation: 'The decay rate is proportional to the number of nuclei present, dN/dt = −λN. Integrating gives N = N₀e^(−λt); setting N=N₀/2 gives the half-life.'
                    },
                    {
                        title: 'Mass-Energy Equivalence and Binding Energy',
                        explanation: 'Mass and energy are equivalent. The mass of a nucleus is always slightly less than the sum of the masses of its free constituent nucleons; this mass defect corresponds to the binding energy holding the nucleus together.',
                        formula: 'E = mc²,   E_b = Δm·c²',
                        derivation: 'The mass defect Δm = (sum of masses of free nucleons) − (mass of the nucleus) is converted, via E=mc², into the energy that would be needed to pull the nucleus apart.'
                    }
                ]
            },
        
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
                    {
                        title: 'Law of Mass Action & Kc',
                        explanation: 'The ratio of the product of molar concentrations of the products to that of the reactants, with each concentration term raised to the power of its stoichiometric coefficient.',
                        formula: 'For aA + bB ⇌ cC + dD, K_c = [C]^c[D]^d / [A]^a[B]^b',
                        derivation: 'An empirical law describing the state of dynamic equilibrium.'
                    },
                    {
                        title: 'Relation between Kp and Kc',
                        explanation: 'Relates the equilibrium constant in terms of partial pressures (Kp) to the one in terms of concentrations (Kc).',
                        formula: 'K_p = K_c(RT)^Δn_g',
                        derivation: 'Derived from the ideal gas law, P = (n/V)RT = CRT.'
                    },
                    {
                        title: 'Le Chatelier\'s Principle',
                        explanation: 'If a change of condition is applied to a system in equilibrium, the system will shift in a direction that relieves the stress.',
                        formula: 'N/A',
                        derivation: 'A qualitative principle to predict the effect of changes in concentration, pressure, or temperature on an equilibrium system.'
                    }
                ]
            },
            {
                name: 'Ionic Equilibrium',
                concepts: [
                    {
                        title: 'Henderson-Hasselbalch Equation',
                        explanation: 'Used to calculate the pH of a buffer solution.',
                        formula: 'pH = pKa + log([Conjugate Base]/[Acid])',
                        derivation: 'Derived from the acid dissociation constant (Ka) expression.'
                    },
                    {
                        title: 'Solubility Product (Ksp)',
                        explanation: 'The equilibrium constant for the dissolution of a sparingly soluble salt.',
                        formula: 'For AxBy ⇌ xA⁺ + yB⁻, Ksp = [A⁺]^x[B⁻]^y',
                        derivation: 'An application of the law of mass action to dissolution equilibria.'
                    }
                ]
            },
            {
                name: 'Solutions',
                concepts: [
                    {
                        title: 'Raoult\'s Law',
                        explanation: 'The partial vapor pressure of a component in an ideal solution is equal to the vapor pressure of the pure component multiplied by its mole fraction.',
                        formula: 'P_A = P°_A * x_A',
                        derivation: 'An empirical law defining an ideal solution.'
                    },
                    {
                        title: 'Elevation in Boiling Point',
                        explanation: 'A colligative property where the boiling point of a solvent is elevated upon the addition of a non-volatile solute.',
                        formula: 'ΔT_b = i * K_b * m',
                        derivation: 'Derived from the lowering of vapor pressure by the solute.'
                    },
                    {
                        title: 'Osmotic Pressure',
                        explanation: 'The pressure required to prevent the inward flow of water across a semipermeable membrane.',
                        formula: 'π = i * MRT',
                        derivation: 'Analogous to the ideal gas law, it is a colligative property dependent on molar concentration.'
                    }
                ]
            },
            {
                name: 'Coordination Compounds',
                concepts: [
                    {
                        title: 'Werner\'s Theory',
                        explanation: 'Postulated that metals have two types of linkages (valencies): primary (ionisable, corresponds to oxidation state) and secondary (non-ionisable, corresponds to coordination number).',
                        formula: 'N/A',
                        derivation: 'A foundational theory based on experimental observations of cobalt-ammine complexes.'
                    },
                    {
                        title: 'Valence Bond Theory (VBT)',
                        explanation: 'Describes the formation of coordinate bonds as the overlap of ligand orbitals (containing lone pairs) with vacant hybrid orbitals of the central metal atom.',
                        formula: 'N/A',
                        derivation: 'Uses hybridization (e.g., sp³, dsp², d²sp³) to explain the geometry and magnetic properties of complexes.'
                    },
                    {
                        title: 'Crystal Field Theory (CFT)',
                        explanation: 'An electrostatic model that describes the splitting of the d-orbitals of the central metal ion in the presence of the electric field of the surrounding ligands.',
                        formula: 'Δ_o (octahedral splitting), Δ_t (tetrahedral splitting)',
                        derivation: 'Explains the color and magnetic properties of transition metal complexes based on the energy difference between the split d-orbitals.'
                    }
                ]
            },
            {
                name: 'General Organic Chemistry',
                concepts: [
                    {
                        title: 'Inductive Effect',
                        explanation: 'The permanent displacement of electron density along a chain of sigma bonds, caused by a difference in electronegativity between atoms. Electron-withdrawing groups (e.g. −NO₂, −COOH, halogens) show a −I effect; electron-releasing alkyl groups show a +I effect.',
                    },
                    {
                        title: 'Resonance',
                        explanation: 'When a molecule or ion can be represented by two or more valid Lewis structures differing only in the position of electrons (not atoms), the actual structure is a hybrid of these contributing structures and is more stable than any single one of them.',
                        derivation: 'Delocalisation of π electrons or lone pairs over more than two atoms lowers the overall energy of the system; this stabilisation is called resonance energy, as seen in benzene and the carboxylate ion.'
                    }
                ]
            },
            {
                name: 'Isomerism',
                concepts: [
                    {
                        title: 'Structural Isomerism',
                        explanation: 'Compounds with the same molecular formula but a different arrangement of atoms. The main types are chain isomerism (different carbon skeleton), position isomerism (same skeleton, substituent at a different position), and functional group isomerism (different functional groups entirely, e.g. an alcohol and an ether).',
                    },
                    {
                        title: 'Stereoisomerism',
                        explanation: 'Compounds with the same structural formula but a different spatial arrangement of atoms. Geometrical isomerism (cis-trans) arises from restricted rotation about a double bond or in a ring; optical isomerism arises from a chiral centre whose mirror images cannot be superimposed on each other.',
                    }
                ]
            },
            {
                name: 'Redox Reactions and Electrochemistry',
                concepts: [
                    {
                        title: 'Nernst Equation',
                        explanation: 'Gives the electrode (or cell) potential under non-standard conditions, in terms of the standard potential and the concentrations (activities) of the species involved.',
                        formula: 'E = E° − (0.059/n) log Q   (at 298 K)',
                        derivation: 'Derived from the relation between Gibbs free energy and cell potential, ΔG = −nFE, combined with ΔG = ΔG° + RT ln Q.'
                    },
                    {
                        title: 'Standard Cell EMF',
                        explanation: 'The potential difference of a galvanic cell under standard conditions, found from the standard reduction potentials of the two half-cells.',
                        formula: 'E°_cell = E°_cathode − E°_anode',
                        derivation: 'By convention both electrode potentials are tabulated as reduction potentials; the cell EMF is the difference between the potential of the electrode where reduction occurs (cathode) and the one where oxidation occurs (anode).'
                    },
                    {
                        title: 'Faraday\'s Laws of Electrolysis',
                        explanation: 'The mass of a substance deposited or liberated at an electrode is directly proportional to the quantity of charge passed through the electrolyte.',
                        formula: 'm = (E × I × t) / 96500',
                        derivation: 'One mole of electrons (1 Faraday ≈ 96500 C) deposits one gram-equivalent of a substance, so the mass deposited is proportional to charge It and to the equivalent weight E.'
                    }
                ]
            },
            {
                name: 'p-Block Elements',
                concepts: [
                    {
                        title: 'Anomalous Behaviour of the First Member',
                        explanation: 'The first element of each p-block group (e.g. boron, nitrogen) behaves differently from the rest of its group, because of its unusually small size, high electronegativity, high ionisation enthalpy, and the absence of d-orbitals in its valence shell.',
                    },
                    {
                        title: 'Allotropes of Carbon',
                        explanation: 'Carbon exists in several structural forms. Diamond (sp³, tetrahedral network) is extremely hard and an electrical insulator; graphite (sp², layered hexagonal sheets) is soft and conducts electricity; fullerenes (sp², closed cage structures such as C₆₀) form a third distinct class.',
                    }
                ]
            },
            {
                name: 'd- and f-Block Elements',
                concepts: [
                    {
                        title: 'General Characteristics of Transition Elements',
                        explanation: 'Transition elements typically show variable oxidation states (because the (n−1)d and ns orbitals are close in energy), form coloured ions (due to d-d electronic transitions), act as good catalysts, and are often paramagnetic due to unpaired d electrons.',
                    },
                    {
                        title: 'Lanthanoid Contraction',
                        explanation: 'A steady decrease in the atomic and ionic radii of the lanthanoids with increasing atomic number, caused by the poor shielding of nuclear charge by 4f electrons. Its main consequence is that second and third-row transition elements of the same group (e.g. Zr and Hf) have very similar radii and properties.',
                    }
                ]
            },
        
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
            },
            {
                name: 'Vectors and 3D Geometry',
                concepts: [
                    {
                        title: 'Dot Product (Scalar Product)',
                        explanation: 'An algebraic operation that takes two equal-length sequences of numbers and returns a single number. It is used to find the angle between two vectors.',
                        formula: 'a · b = |a| |b| cos(θ)',
                        derivation: 'Defined geometrically, it provides a way to calculate the projection of one vector onto another.'
                    },
                    {
                        title: 'Cross Product (Vector Product)',
                        explanation: 'A binary operation on two vectors in three-dimensional space. It results in a vector which is perpendicular to both of the vectors being multiplied.',
                        formula: 'a x b = |a| |b| sin(θ) n̂',
                        derivation: 'Its magnitude is equal to the area of the parallelogram spanned by the two vectors.'
                    },
                    {
                        title: 'Equation of a Line in 3D',
                        explanation: 'Represents a straight line in three-dimensional space.',
                        formula: 'Vector form: r = a + λb\nCartesian form: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c',
                        derivation: 'Derived from a point on the line (a) and a direction vector (b).'
                    },
                    {
                        title: 'Equation of a Plane in 3D',
                        explanation: 'Represents a flat, two-dimensional surface in three-dimensional space.',
                        formula: 'Vector form: r · n̂ = d\nCartesian form: ax + by + cz = d',
                        derivation: 'Defined by a normal vector (n) and the perpendicular distance from the origin (d).'
                    }
                ]
            },
            {
                name: 'Trigonometry',
                concepts: [
                    {
                        title: 'Fundamental Trigonometric Identities',
                        explanation: 'The core identities relating the trigonometric ratios of an angle, derived directly from the Pythagorean theorem applied to a right triangle inscribed in a unit circle.',
                        formula: 'sin²θ + cos²θ = 1\n1 + tan²θ = sec²θ\n1 + cot²θ = cosec²θ'
                    },
                    {
                        title: 'Compound Angle Formulas',
                        explanation: 'Express the trigonometric ratio of a sum or difference of two angles in terms of the ratios of the individual angles.',
                        formula: 'sin(A ± B) = sinA cosB ± cosA sinB\ncos(A ± B) = cosA cosB ∓ sinA sinB'
                    },
                    {
                        title: 'General Solution of Trigonometric Equations',
                        explanation: 'Because trigonometric functions are periodic, an equation like sinθ = sinα has infinitely many solutions, all captured by a single general formula.',
                        formula: 'sinθ = sinα ⇒ θ = nπ + (−1)ⁿα\ncosθ = cosα ⇒ θ = 2nπ ± α\ntanθ = tanα ⇒ θ = nπ + α'
                    }
                ]
            },
            {
                name: 'Calculus',
                concepts: [
                    {
                        title: 'Rules of Differentiation',
                        explanation: 'Standard rules for differentiating combinations of functions, which let complex derivatives be built up from the derivatives of simpler pieces.',
                        formula: 'Product rule: (uv)\' = u\'v + uv\'\nQuotient rule: (u/v)\' = (u\'v − uv\')/v²\nChain rule: dy/dx = (dy/du)(du/dx)'
                    },
                    {
                        title: 'Maxima and Minima',
                        explanation: 'The derivative test for locating the local maximum or minimum values of a function: at a turning point the slope of the tangent is zero, and the second derivative tells whether it is a peak or a trough.',
                        formula: 'f\'(x) = 0 at a turning point; f\'\'(x) < 0 ⇒ local max, f\'\'(x) > 0 ⇒ local min'
                    },
                    {
                        title: 'Definite Integral as Area',
                        explanation: 'The definite integral of a function over an interval equals the net signed area between its graph and the x-axis, and can be evaluated using any antiderivative of the function.',
                        formula: '∫[a to b] f(x) dx = F(b) − F(a),  where F\'(x) = f(x)',
                        derivation: 'This is the Fundamental Theorem of Calculus: it connects the two central ideas of calculus, differentiation and the area under a curve.'
                    }
                ]
            },
            {
                name: 'Sets, Relations and Functions',
                concepts: [
                    {
                        title: 'Types of Relations',
                        explanation: 'A relation on a set can have special properties. It is reflexive if every element is related to itself, symmetric if aRb implies bRa, and transitive if aRb and bRc together imply aRc. A relation with all three properties is an equivalence relation.',
                    },
                    {
                        title: 'Types of Functions',
                        explanation: 'A function is one-one (injective) if distinct inputs always give distinct outputs, onto (surjective) if every element of the codomain is the image of some input, and bijective if it is both — in which case it has a well-defined inverse.',
                    },
                    {
                        title: 'Composition of Functions',
                        explanation: 'The composite function (f∘g) applies g first, then f, to the result. Composition of functions is associative but not commutative in general.',
                        formula: '(f∘g)(x) = f(g(x))'
                    }
                ]
            },
            {
                name: 'Probability',
                concepts: [
                    {
                        title: 'Conditional Probability',
                        explanation: 'The probability that an event A occurs, given that another event B is already known to have occurred.',
                        formula: 'P(A|B) = P(A ∩ B) / P(B),  P(B) ≠ 0'
                    },
                    {
                        title: 'Bayes\' Theorem',
                        explanation: 'Lets you reverse a conditional probability: it finds the probability of a cause, given an observed effect, in terms of the probability of the effect given each possible cause.',
                        formula: 'P(A_i|B) = P(B|A_i)P(A_i) / Σ P(B|A_j)P(A_j)',
                        derivation: 'Follows from applying the definition of conditional probability twice, once to P(A_i∩B) and once to expand P(B) using the law of total probability.'
                    },
                    {
                        title: 'Binomial Distribution',
                        explanation: 'Describes the number of successes in n independent trials, each with the same probability p of success — for example, the number of heads in n coin tosses.',
                        formula: 'P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ,   mean = np,   variance = npq'
                    }
                ]
            },
        
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
            },
            {
                name: 'Cell: The Unit of Life',
                concepts: [
                    {
                        title: 'Cell Theory',
                        explanation: 'All living organisms are composed of cells, the cell is the basic structural and functional unit of life, and all cells arise from pre-existing cells. Proposed by Schleiden and Schwann, and extended by Virchow.',
                    },
                    {
                        title: 'Fluid Mosaic Model of the Plasma Membrane',
                        explanation: 'Proposed by Singer and Nicolson, this describes the plasma membrane as a phospholipid bilayer in which proteins are embedded (integral) or attached to the surface (peripheral). The lipids and many proteins can move laterally, making the membrane fluid, and it is selectively permeable.',
                    },
                    {
                        title: 'Mitochondria',
                        explanation: 'A double membrane-bound organelle, with the inner membrane folded into finger-like cristae that increase surface area. It is the principal site of aerobic respiration and ATP synthesis, earning it the name "powerhouse of the cell", and it carries its own DNA.',
                    }
                ]
            },
            {
                name: 'Cell Cycle and Cell Division',
                concepts: [
                    {
                        title: 'Phases of the Cell Cycle',
                        explanation: 'The cell cycle consists of interphase (G1 phase: cell growth; S phase: DNA replication; G2 phase: preparation for division) followed by the M phase, in which the cell actually divides.',
                    },
                    {
                        title: 'Mitosis vs. Meiosis',
                        explanation: 'Mitosis produces two diploid daughter cells genetically identical to the parent, and occurs during growth and repair. Meiosis produces four haploid daughter cells with genetic variation (via crossing over in Prophase I), and occurs during gamete formation.',
                    }
                ]
            },
            {
                name: 'Excretory Products and their Elimination',
                concepts: [
                    {
                        title: 'Structure of a Nephron',
                        explanation: 'The nephron is the structural and functional unit of the kidney. It consists of the Malpighian corpuscle (glomerulus enclosed in Bowman\'s capsule), the proximal convoluted tubule (PCT), the loop of Henle, and the distal convoluted tubule (DCT).',
                    },
                    {
                        title: 'Formation of Urine',
                        explanation: 'Urine forms in three steps: glomerular filtration (blood plasma is filtered into Bowman\'s capsule), reabsorption (useful substances like glucose, amino acids and most water are reclaimed, mainly in the PCT), and tubular secretion (ions such as H⁺, K⁺ and ammonia are added, mainly in the DCT, to maintain ionic and acid-base balance).',
                    }
                ]
            },
            {
                name: 'Locomotion and Movement',
                concepts: [
                    {
                        title: 'Types of Muscle Tissue',
                        explanation: 'The body has three types of muscle: skeletal muscle (striated, voluntary, attached to bones), smooth muscle (unstriated, involuntary, found in internal organs), and cardiac muscle (striated, involuntary, found only in the heart).',
                    },
                    {
                        title: 'Sliding Filament Theory of Muscle Contraction',
                        explanation: 'Muscle contraction occurs when the thin actin filaments slide over the thick myosin filaments, shortening the sarcomere, while the lengths of the individual filaments themselves stay the same. The process is triggered by Ca²⁺ ions binding to troponin, which exposes the myosin-binding sites on actin.',
                    }
                ]
            },
        
        ]
    }
];
