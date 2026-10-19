import type { JeeSubject } from './types';

export const physics12: JeeSubject = {
  subject: 'Physics',
  chapters: [
    {
      name: 'Electric Charges and Fields',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Foundation of the whole electrostatics unit. Coulomb\'s law, field of continuous charge distributions and Gauss\'s law are tested every year, usually as calculation questions.',
      importantTopics: [
        { name: 'Gauss\'s Law & its applications', hot: true, note: 'Field of sphere (solid/hollow), infinite wire, infinite sheet, flux through cube faces' },
        { name: 'Electric field of continuous charge distributions', hot: true, note: 'Ring on axis, arc, semi-infinite rod, disc' },
        { name: 'Electric dipole', hot: true, note: 'Field on axial/equatorial line, torque, PE, oscillation of dipole in field' },
        { name: 'Coulomb\'s law & superposition', note: 'Equilibrium of three charges, charges in a medium' },
        { name: 'Electric flux', note: 'Flux through a hemisphere / cube when charge is at corner or edge' },
        { name: 'Field lines & properties', note: 'Conceptual MCQs' },
      ],
      theory: [
        {
          heading: 'Electric charge',
          body:
            'Charge is ==quantised (q = ne, e = 1.6 × 10⁻¹⁹ C)==, ==conserved== and ==additive==. Charging happens by friction, conduction and induction; induction never transfers charge to the body, it only redistributes it. Charge is relativistically invariant - it does not depend on the speed of the body.',
        },
        {
          heading: 'Coulomb\'s law and superposition',
          body:
            'The force between two point charges is F = kq₁q₂/r² along the line joining them, k = 1/(4πε₀) = 9 × 10⁹ N m² C⁻². In a medium of dielectric constant K the force becomes ==F/K==. When many charges act, the net force is the ==vector sum== of individual forces (superposition principle) - each pair interacts independently.',
        },
        {
          heading: 'Electric field',
          body:
            'E = F/q₀ is the force per unit positive test charge. For continuous distributions integrate dE = k dq/r² and use symmetry to cancel components. For a ring of charge Q and radius R, the field on the axis at distance x is ==E = kQx/(R² + x²)^(3/2)==, which is maximum at ==x = R/√2==. For a finite rod, use the angle form E⊥ = (kλ/r)(sinθ₁ + sinθ₂).',
        },
        {
          heading: 'Electric dipole',
          body:
            'Two equal and opposite charges separated by 2a; dipole moment p = q(2a), directed from ==−q to +q==. Far field falls as 1/r³. In a uniform field the net force is zero but torque τ = p × E acts; potential energy U = −p·E. Stable equilibrium at θ = 0, unstable at θ = 180°. In a non-uniform field a dipole also experiences a net force F = p (dE/dx).',
        },
        {
          heading: 'Electric flux and Gauss\'s law',
          body:
            'Flux φ = ∮E·dA. Gauss\'s law: ==∮E·dA = q_enclosed/ε₀==. Only the enclosed charge decides flux, but the field E at the surface is due to ALL charges. Pick a Gaussian surface where E is constant or perpendicular to the surface (sphere, cylinder, pillbox). Charge at the centre of a cube gives q/6ε₀ per face; at a corner, total flux through the cube is ==q/8ε₀==.',
        },
        {
          heading: 'Conductors in electrostatics',
          body:
            'Inside a conductor E = 0, net charge resides on the outer surface, the field just outside is ==σ/ε₀== and perpendicular to the surface. Surface charge density is larger where the radius of curvature is smaller (sharp points) - this is why lightning conductors are pointed.',
        },
      ],
      keyPoints: [
        '==Field inside a uniformly charged hollow sphere is zero==; inside a solid (non-conducting) sphere it grows linearly: E = kQr/R³.',
        'Field due to an infinite sheet σ/2ε₀ is ==independent of distance==; between two oppositely charged sheets it is σ/ε₀.',
        'Infinite line charge: E = λ/(2πε₀r) - falls as 1/r.',
        'Dipole: axial field is ==twice== the equatorial field at the same distance, and they point in opposite directions relative to p.',
        'Work done to rotate a dipole from θ₁ to θ₂: W = pE(cosθ₁ − cosθ₂).',
        'Field lines never cross, start on +ve and end on −ve charge, and never form closed loops in electrostatics.',
      ],
      formulas: [
        { label: 'Coulomb\'s law', expr: 'F = (1/4πε₀) · q₁q₂ / r²' },
        { label: 'Field of point charge', expr: 'E = kq / r²' },
        { label: 'Ring (on axis)', important: true, expr: 'E = kQx / (R² + x²)^(3/2)', note: 'Max at x = R/√2' },
        { label: 'Finite line charge', expr: 'E⊥ = (kλ/r)(sinθ₁ + sinθ₂),  E∥ = (kλ/r)(cosθ₂ − cosθ₁)' },
        { label: 'Infinite line charge', important: true, expr: 'E = λ / (2πε₀ r)' },
        { label: 'Infinite sheet', expr: 'E = σ / 2ε₀' },
        { label: 'Charged disc (axis)', expr: 'E = (σ/2ε₀)[1 − x/√(x² + R²)]' },
        { label: 'Dipole - axial', important: true, expr: 'E = 2kp / r³' },
        { label: 'Dipole - equatorial', expr: 'E = kp / r³' },
        { label: 'Dipole - general point', expr: 'E = (kp/r³)√(1 + 3cos²θ)' },
        { label: 'Torque & PE on dipole', important: true, expr: 'τ = pE sinθ,  U = −pE cosθ' },
        { label: 'Gauss\'s law', important: true, expr: '∮E·dA = q_enc / ε₀' },
        { label: 'Solid sphere (inside)', important: true, expr: 'E = kQr / R³' },
      ],
      mistakes: [
        'Using total charge instead of ==enclosed charge== in Gauss\'s law.',
        'Forgetting that a dipole in a uniform field has zero net force but non-zero torque.',
        'Adding fields as scalars instead of vectors in superposition problems.',
      ],
      pyqTrend:
        'Gauss\'s law with non-uniform charge density ρ = kr, ring/arc fields, and dipole torque questions appear almost every session. Often clubbed with potential in a single question.',
    },
    {
      name: 'Electrostatic Potential and Capacitance',
      priority: 'Very High',
      weightage: '2-3 Qs',
      difficulty: 'Moderate',
      overview:
        'One of the highest-scoring chapters of Class 12. Capacitor circuits, dielectrics and energy questions are guaranteed in almost every shift.',
      importantTopics: [
        { name: 'Capacitors with dielectric slabs', hot: true, note: 'Partial filling, series/parallel combinations of dielectrics' },
        { name: 'Combination of capacitors & charge redistribution', hot: true, note: 'Common potential, energy loss on connecting' },
        { name: 'Energy stored & energy density', hot: true, note: 'Change in energy when battery is connected/disconnected' },
        { name: 'Potential due to charge distributions', note: 'Ring, sphere, dipole, potential at centre of arc' },
        { name: 'Equipotential surfaces & E = −dV/dr', note: 'Finding field from given V(x, y, z)' },
        { name: 'RC circuits (charging/discharging)', hot: true, note: 'Often counted under current electricity too' },
        { name: 'Work done in moving charges & potential energy of system' },
      ],
      theory: [
        {
          heading: 'Electric potential',
          body:
            'Potential V is the work done per unit positive charge in bringing it from infinity to the point: V = kq/r. It is a ==scalar==, so potentials add algebraically. Field and potential are related by ==E = −∇V== (E = −dV/dr in one dimension) - field points in the direction of decreasing potential. Potential difference between two points: V_B − V_A = −∫E·dr.',
        },
        {
          heading: 'Potential of standard distributions',
          body:
            'For a conducting sphere (or shell), V = kQ/R everywhere inside and kQ/r outside - ==potential inside is constant but not zero==. For a non-conducting solid sphere, V inside = kQ(3R² − r²)/2R³, so V at centre = ==1.5 × V at surface==. On the axis of a ring: V = kQ/√(R² + x²).',
        },
        {
          heading: 'Equipotential surfaces',
          body:
            'All points have the same potential; ==no work== is done in moving a charge along them. Field lines are always ==perpendicular== to equipotentials. Closely spaced equipotentials mean strong field. For a point charge they are concentric spheres; for a uniform field they are parallel planes.',
        },
        {
          heading: 'Capacitance and parallel plate capacitor',
          body:
            'C = Q/V depends only on geometry and medium, not on Q or V. For a parallel plate capacitor ==C = ε₀A/d==. Inserting a dielectric of constant K completely gives C = Kε₀A/d. A slab of thickness t (< d) gives ==C = ε₀A/(d − t + t/K)==; a metal slab is the case K → ∞, giving ε₀A/(d − t).',
        },
        {
          heading: 'Battery connected vs disconnected',
          body:
            'If the battery stays ==connected, V is constant== - inserting a dielectric increases Q and U by K. If the battery is ==disconnected, Q is constant== - inserting a dielectric decreases V and U by factor K. This single idea solves most "what changes" questions.',
        },
        {
          heading: 'Combination and charge sharing',
          body:
            'Series: 1/C = Σ1/Cᵢ, same charge on each. Parallel: C = ΣCᵢ, same voltage. When two charged capacitors are joined, charge flows until potentials equalise: common potential V = (C₁V₁ + C₂V₂)/(C₁ + C₂). Energy is always ==lost== (as heat/radiation): ΔU = C₁C₂(V₁ − V₂)²/2(C₁ + C₂).',
        },
      ],
      keyPoints: [
        '==E = −dV/dr==: if V is given as a function of x, y, z, take partial derivatives with a minus sign.',
        'Potential inside a conducting shell is constant and equals the surface value; field inside is zero.',
        'Work done by external agent = q(V_final − V_initial) = ΔU of the system.',
        'Potential energy of a system of charges: U = Σ kqᵢqⱼ/rᵢⱼ over ==every pair once==.',
        'Force between plates of a capacitor: F = Q²/2ε₀A (uses field of ONE plate, σ/2ε₀).',
        'For a spherical capacitor C = 4πε₀ab/(b − a); isolated sphere C = 4πε₀R.',
        'Wheatstone-bridge style capacitor networks: if balanced (C₁/C₂ = C₃/C₄), remove the middle capacitor.',
      ],
      formulas: [
        { label: 'Potential of point charge', expr: 'V = kq / r' },
        { label: 'Field from potential', important: true, expr: 'E = −dV/dr,  E⃗ = −(∂V/∂x î + ∂V/∂y ĵ + ∂V/∂z k̂)' },
        { label: 'Dipole potential', expr: 'V = kp cosθ / r²' },
        { label: 'PE of two charges', expr: 'U = kq₁q₂ / r' },
        { label: 'Parallel plate capacitor', expr: 'C = Kε₀A / d' },
        { label: 'Partial dielectric slab', important: true, expr: 'C = ε₀A / (d − t + t/K)' },
        { label: 'Energy stored', important: true, expr: 'U = ½CV² = Q²/2C = ½QV' },
        { label: 'Energy density', expr: 'u = ½ε₀E²  (in medium: ½ε₀KE²)' },
        { label: 'Series / Parallel', expr: '1/C = 1/C₁ + 1/C₂ … ,  C = C₁ + C₂ …' },
        { label: 'Common potential', important: true, expr: 'V = (C₁V₁ + C₂V₂)/(C₁ + C₂)' },
        { label: 'Energy loss on sharing', important: true, expr: 'ΔU = C₁C₂(V₁ − V₂)² / 2(C₁ + C₂)' },
        { label: 'RC charging', important: true, expr: 'q = CV(1 − e^(−t/RC)),  τ = RC' },
        { label: 'RC discharging', expr: 'q = q₀ e^(−t/RC)' },
        { label: 'Spherical capacitor', expr: 'C = 4πε₀ ab/(b − a)' },
      ],
      mistakes: [
        'Not checking whether the battery is ==connected or disconnected== before applying changes.',
        'Assuming potential inside a conductor is zero (it is constant, equal to the surface value).',
        'Counting each pair twice while computing potential energy of a system of charges.',
      ],
      pyqTrend:
        'Dielectric slab problems, capacitor networks and energy loss on connecting capacitors are the top three. Expect at least one numerical-value (integer) question from here.',
    },
    {
      name: 'Current Electricity',
      priority: 'Very High',
      weightage: '2-3 Qs',
      difficulty: 'Moderate',
      overview:
        'Highest-weightage chapter of Class 12 Physics along with Electrostatics. Kirchhoff\'s laws, meter bridge/potentiometer and drift velocity are asked very frequently.',
      importantTopics: [
        { name: 'Kirchhoff\'s laws & complex circuits', hot: true, note: 'Multi-loop circuits, finding current in a branch' },
        { name: 'Meter bridge & Potentiometer', hot: true, note: 'Balancing length, internal resistance, comparing EMFs' },
        { name: 'Drift velocity, mobility & current density', hot: true, note: 'vd = I/neA, effect of changing length/area' },
        { name: 'Combination of cells', note: 'Series, parallel, mixed - max current condition' },
        { name: 'Wheatstone bridge & equivalent resistance', note: 'Symmetry tricks, infinite ladders' },
        { name: 'Temperature dependence of resistance', note: 'R = R₀(1 + αΔT)' },
        { name: 'Electrical power, heating & colour code', note: 'Bulbs in series/parallel, carbon resistor colour code' },
      ],
      theory: [
        {
          heading: 'Current and drift velocity',
          body:
            'Current I = dq/dt. In a conductor, free electrons drift opposite to E with a small average velocity ==v_d = eEτ/m== (τ = relaxation time). Current I = neAv_d and current density J = I/A = nev_d = σE (microscopic Ohm\'s law). Mobility μ = v_d/E = eτ/m.',
        },
        {
          heading: 'Ohm\'s law and resistivity',
          body:
            'V = IR for ohmic conductors. R = ρl/A, where resistivity ==ρ = m/(ne²τ)== depends on material and temperature but NOT on dimensions. When a wire is stretched to n times its length (volume constant), its resistance becomes ==n² times==. For metals ρ increases with temperature; for semiconductors it decreases.',
        },
        {
          heading: 'Kirchhoff\'s laws',
          body:
            'Junction rule (KCL): ΣI = 0 at a node - charge conservation. Loop rule (KVL): ΣΔV = 0 around any closed loop - energy conservation. Sign convention: going across a resistor in the direction of current, potential ==drops by IR==; going from − to + terminal of a cell, potential rises by ε.',
        },
        {
          heading: 'Cells, EMF and internal resistance',
          body:
            'A cell of EMF ε and internal resistance r delivering current I has terminal voltage ==V = ε − Ir== (discharging) and V = ε + Ir while charging. Power delivered to external R is maximum when ==R = r==, with P_max = ε²/4r. n identical cells in series: I = nε/(R + nr); in parallel: I = ε/(R + r/n).',
        },
        {
          heading: 'Wheatstone bridge, meter bridge and potentiometer',
          body:
            'Wheatstone bridge is balanced when ==P/Q = R/S== - then no current flows through the galvanometer. Meter bridge applies this with a 100 cm wire: R/S = l/(100 − l). A potentiometer measures EMF without drawing current (ideal voltmeter): ε₁/ε₂ = l₁/l₂, and internal resistance ==r = R(l₁ − l₂)/l₂==. Its sensitivity increases with length of wire (smaller potential gradient).',
        },
      ],
      keyPoints: [
        'For a fixed potential difference V across a wire, ==v_d = eVτ/(ml) depends on length but NOT on area==.',
        'Stretching a wire n times: R becomes n²R. Equivalently R ∝ l² ∝ 1/A².',
        'Bulbs in series: the one with ==higher rated power glows dimmer== (lower resistance). In parallel the higher power one glows brighter.',
        'Potentiometer at balance draws no current from the cell being measured.',
        'For equivalent resistance, look for points at the same potential (symmetry) and merge or remove them.',
        'Colour code: ==B B R O Y G B V G W== (0-9), gold ±5%, silver ±10%.',
      ],
      formulas: [
        { label: 'Current', important: true, expr: 'I = neAv_d' },
        { label: 'Drift velocity', important: true, expr: 'v_d = eEτ / m' },
        { label: 'Resistivity', expr: 'ρ = m / (ne²τ),  R = ρl/A' },
        { label: 'Current density', expr: 'J = σE = nev_d' },
        { label: 'Temperature dependence', expr: 'R_T = R₀(1 + αΔT)' },
        { label: 'Terminal voltage', important: true, expr: 'V = ε − Ir' },
        { label: 'Max power transfer', expr: 'R = r,  P_max = ε²/4r' },
        { label: 'Cells in parallel (different)', important: true, expr: 'ε_eq = (ε₁/r₁ + ε₂/r₂)/(1/r₁ + 1/r₂)' },
        { label: 'Wheatstone balance', important: true, expr: 'P/Q = R/S' },
        { label: 'Meter bridge', important: true, expr: 'R/S = l/(100 − l)' },
        { label: 'Potentiometer - EMF compare', expr: 'ε₁/ε₂ = l₁/l₂' },
        { label: 'Potentiometer - internal resistance', important: true, expr: 'r = R(l₁ − l₂)/l₂' },
        { label: 'Power', expr: 'P = VI = I²R = V²/R' },
      ],
      mistakes: [
        'Wrong sign convention in KVL - fix a loop direction and stick to it.',
        'Forgetting internal resistance of the cell when it is given.',
        'Assuming v_d depends on area for constant V (it depends on area only for constant I).',
      ],
      pyqTrend:
        'Meter bridge/potentiometer appear as experiment-based questions; Kirchhoff circuits and drift velocity numericals are very common. Expect 1 integer-type question.',
    },
    {
      name: 'Moving Charges and Magnetism',
      priority: 'Very High',
      weightage: '2-3 Qs',
      difficulty: 'Moderate',
      overview:
        'Biot-Savart law, Ampere\'s law, force on moving charges and galvanometer conversion. Very high weightage in both JEE Main and Advanced.',
      importantTopics: [
        { name: 'Biot-Savart law applications', hot: true, note: 'Field at centre of arcs, combination of straight wires and loops' },
        { name: 'Motion of charge in magnetic field', hot: true, note: 'Radius, time period, helical path, pitch' },
        { name: 'Ampere\'s circuital law', hot: true, note: 'Thick wire, solenoid, toroid, coaxial cable' },
        { name: 'Force between parallel currents & force on wire', note: 'Force on curved wire = force on straight line joining ends' },
        { name: 'Torque on current loop & magnetic moment', note: 'M = NIA' },
        { name: 'Moving coil galvanometer → ammeter / voltmeter', hot: true, note: 'Shunt and series resistance' },
        { name: 'Cyclotron & Lorentz force (E and B together)', note: 'Velocity selector v = E/B' },
      ],
      theory: [
        {
          heading: 'Biot-Savart law',
          body:
            'The field due to a current element is ==dB = (μ₀/4π)·I(dl × r̂)/r²==. For a finite straight wire: B = (μ₀I/4πd)(sinθ₁ + sinθ₂); infinite wire ==B = μ₀I/2πd==. At the centre of a circular loop B = μ₀I/2R; for an arc of angle θ, B = (μ₀I/4πR)·θ. Direction is given by the right-hand thumb rule.',
        },
        {
          heading: 'Ampere\'s circuital law',
          body:
            '==∮B·dl = μ₀I_enclosed==. Useful only for symmetric current distributions. Inside a long solid wire B = μ₀Ir/2πR² (linear), outside μ₀I/2πr. Long solenoid: ==B = μ₀nI== inside (uniform), ≈ 0 outside; at the ends it is half. Toroid: B = μ₀NI/2πr inside the core, zero outside.',
        },
        {
          heading: 'Lorentz force and motion in B',
          body:
            'F = q(E + v × B). Magnetic force is ==always perpendicular to v, so it does no work== and speed stays constant. For v ⟂ B the path is a circle with r = mv/qB and T = 2πm/qB (independent of speed). If v makes angle θ with B, the path is a helix with pitch = (2πm/qB)·v cosθ. A velocity selector passes only particles with v = E/B undeflected.',
        },
        {
          heading: 'Force and torque on current-carrying conductors',
          body:
            'F = I(l × B). Force on any curved wire in a uniform field equals the force on the ==straight wire joining its ends==, so a closed loop in a uniform field feels zero net force. Two parallel wires: F/l = μ₀I₁I₂/2πd - attractive for same direction currents. Torque on a loop: τ = M × B with M = NIA.',
        },
        {
          heading: 'Moving coil galvanometer and conversions',
          body:
            'Deflection θ = (NAB/k)I. Current sensitivity = NAB/k; voltage sensitivity = NAB/kG. To make an ==ammeter, add a small shunt S = I_gG/(I − I_g) in parallel==. To make a ==voltmeter, add a large resistance R = V/I_g − G in series==. A radial field (concave pole pieces) keeps the plane of the coil always parallel to B.',
        },
      ],
      keyPoints: [
        '==Magnetic force does no work== - kinetic energy of a charge in pure B stays constant.',
        'Time period in a magnetic field T = 2πm/qB is independent of speed and radius - the basis of the cyclotron.',
        'Radius in terms of KE: r = √(2mK)/qB; for particles accelerated through V: r = √(2mV/q)/B.',
        'Field on the axis of a loop: B = μ₀IR²/2(R² + x²)^(3/2).',
        'Increasing current sensitivity does not necessarily increase voltage sensitivity (G may also increase).',
        'Magnetic moment of a revolving electron: M = evr/2 = (e/2m)L.',
      ],
      formulas: [
        { label: 'Biot-Savart law', expr: 'dB = (μ₀/4π) · I dl sinθ / r²' },
        { label: 'Finite straight wire', important: true, expr: 'B = (μ₀I/4πd)(sinθ₁ + sinθ₂)' },
        { label: 'Infinite wire', expr: 'B = μ₀I / 2πd' },
        { label: 'Centre of loop / arc', important: true, expr: 'B = μ₀NI/2R ,  B_arc = μ₀Iθ/4πR' },
        { label: 'Axis of loop', expr: 'B = μ₀NIR² / 2(R² + x²)^(3/2)' },
        { label: 'Solenoid / Toroid', important: true, expr: 'B = μ₀nI ,  B = μ₀NI/2πr' },
        { label: 'Lorentz force', expr: 'F = q(E + v × B)' },
        { label: 'Radius & period', important: true, expr: 'r = mv/qB ,  T = 2πm/qB' },
        { label: 'Pitch of helix', important: true, expr: 'p = (2πm/qB) v cosθ' },
        { label: 'Force on wire', expr: 'F = I l × B' },
        { label: 'Parallel wires', important: true, expr: 'F/l = μ₀I₁I₂ / 2πd' },
        { label: 'Torque on loop', expr: 'τ = NIAB sinθ = M × B' },
        { label: 'Shunt (ammeter)', important: true, expr: 'S = I_g G / (I − I_g)' },
        { label: 'Series resistance (voltmeter)', expr: 'R = V/I_g − G' },
        { label: 'Cyclotron frequency', expr: 'f = qB / 2πm' },
      ],
      mistakes: [
        'Using the infinite wire formula for a finite wire - check the angles.',
        'Wrong direction in v × B for negative charges (reverse it).',
        'Forgetting that field at the end of a solenoid is μ₀nI/2.',
      ],
      pyqTrend:
        'Field at the centre of composite loops (arc + straight wires), charged particle in B (radius/pitch) and galvanometer conversion are near-certain. Advanced likes combined E and B motion.',
    },
    {
      name: 'Magnetism and Matter',
      priority: 'Medium',
      weightage: '0-1 Q',
      difficulty: 'Easy',
      overview:
        'Short theory-based chapter. Mostly direct questions on properties of dia/para/ferromagnetic materials, bar magnet and hysteresis.',
      importantTopics: [
        { name: 'Dia, para and ferromagnetism', hot: true, note: 'Susceptibility values, Curie law' },
        { name: 'Bar magnet as equivalent solenoid', note: 'Axial and equatorial field' },
        { name: 'Hysteresis curve', note: 'Retentivity, coercivity, soft vs hard materials' },
        { name: 'Magnetisation, intensity & susceptibility', note: 'B = μ₀(H + M), μr = 1 + χ' },
        { name: 'Magnetic dipole in uniform field', note: 'Torque, PE, time period of oscillation' },
      ],
      theory: [
        {
          heading: 'Bar magnet',
          body:
            'A bar magnet behaves like a solenoid with magnetic moment M = m × 2l. Field on the axial line ==B = μ₀2M/4πr³==, on the equatorial line μ₀M/4πr³ (same structure as an electric dipole). Torque τ = M × B, PE U = −M·B. Small oscillations in a field: T = 2π√(I/MB).',
        },
        {
          heading: 'Magnetic quantities',
          body:
            'Magnetisation M = net magnetic moment per unit volume. Magnetic intensity H = B₀/μ₀. Total field ==B = μ₀(H + M)==. Susceptibility χ = M/H; relative permeability μr = 1 + χ.',
        },
        {
          heading: 'Classification of materials',
          body:
            '==Diamagnetic==: χ small and negative, μr slightly < 1, weakly repelled, independent of temperature (Bi, Cu, water, superconductors with χ = −1). ==Paramagnetic==: χ small positive, weakly attracted, obeys Curie law χ ∝ 1/T (Al, Na, O₂). ==Ferromagnetic==: χ very large positive, have domains, become paramagnetic above Curie temperature (Fe, Co, Ni).',
        },
        {
          heading: 'Hysteresis',
          body:
            'The B-H loop shows that B lags behind H. ==Retentivity== = B left when H = 0; ==coercivity== = reverse H needed to make B zero. Area of the loop = energy lost per cycle per unit volume. ==Soft iron== (low coercivity, narrow loop) is used for electromagnets and transformer cores; ==steel== (high coercivity, high retentivity) for permanent magnets.',
        },
      ],
      keyPoints: [
        'Superconductors are perfect diamagnets (χ = −1) - Meissner effect.',
        '==Curie law==: χ = C/T for paramagnets; Curie-Weiss: χ = C/(T − Tc) for ferromagnets above Tc.',
        'Diamagnetism is present in all materials but masked in para/ferro.',
        'Cutting a bar magnet perpendicular to its length into n parts: each has M/n; along its length: each has M/n too, but pole strength changes.',
      ],
      formulas: [
        { label: 'Axial field', important: true, expr: 'B = (μ₀/4π) 2M / r³' },
        { label: 'Equatorial field', expr: 'B = (μ₀/4π) M / r³' },
        { label: 'Torque & PE', expr: 'τ = MB sinθ ,  U = −MB cosθ' },
        { label: 'Oscillation period', important: true, expr: 'T = 2π √(I / MB)' },
        { label: 'Total field', expr: 'B = μ₀(H + M) = μ₀μr H' },
        { label: 'Permeability', important: true, expr: 'μr = 1 + χ' },
        { label: 'Curie law', expr: 'χ = C / T' },
      ],
      mistakes: [
        'Mixing up retentivity and coercivity.',
        'Saying diamagnetic susceptibility depends on temperature (it does not).',
      ],
      pyqTrend:
        'Usually one easy statement-based or matching question (materials ↔ properties). Good chapter for quick marks.',
    },
    {
      name: 'Electromagnetic Induction',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Faraday\'s law, motional EMF and self/mutual inductance. LR circuits are frequently combined with this chapter.',
      importantTopics: [
        { name: 'Motional EMF', hot: true, note: 'Rod on rails, rotating rod (½Bωl²), rod in non-uniform field' },
        { name: 'Faraday\'s & Lenz\'s law', hot: true, note: 'Changing flux, direction of induced current' },
        { name: 'Self & mutual inductance', note: 'Solenoid L = μ₀n²Al, coaxial solenoids' },
        { name: 'LR circuit growth & decay', hot: true, note: 'Time constant L/R, current at t = 0 and t = ∞' },
        { name: 'Energy stored in inductor', note: 'U = ½LI², energy density B²/2μ₀' },
        { name: 'Eddy currents', note: 'Applications: damping, induction furnace' },
      ],
      theory: [
        {
          heading: 'Faraday\'s and Lenz\'s laws',
          body:
            'Induced EMF ==ε = −dΦ/dt==, where Φ = B·A = BA cosθ. Flux can change through B, area or angle. Lenz\'s law: the induced current ==opposes the change== that produces it (consequence of energy conservation). Induced charge q = ΔΦ/R depends only on the change in flux, not on how fast it changes.',
        },
        {
          heading: 'Motional EMF',
          body:
            'A rod of length l moving with velocity v perpendicular to B develops ==ε = Blv==. On rails with resistance R, current I = Blv/R and a retarding force B²l²v/R acts on the rod; with no applied force velocity decays exponentially. A rod rotating about one end: ==ε = ½Bωl²==. A disc rotating: same formula with l = radius.',
        },
        {
          heading: 'Self and mutual induction',
          body:
            'Φ = LI and ε = −L dI/dt. For a long solenoid ==L = μ₀n²Al== = μ₀N²A/l. Mutual inductance M: Φ₂ = MI₁, ε₂ = −M dI₁/dt; for coaxial solenoids M = μ₀n₁n₂πr₁²l (r₁ = inner radius). M = k√(L₁L₂), coupling coefficient k ≤ 1.',
        },
        {
          heading: 'LR circuits',
          body:
            'Growth: ==I = I₀(1 − e^(−t/τ))== with τ = L/R, I₀ = ε/R. Decay: I = I₀e^(−t/τ). At t = 0 an inductor acts like an ==open circuit== (opposes sudden change); at steady state it acts like a plain wire. Energy stored U = ½LI².',
        },
      ],
      keyPoints: [
        '==Induced EMF exists even in an open circuit==; induced current needs a closed path.',
        'Inductor opposes change in current: at switching instant, current through it is continuous.',
        'Eddy currents cause damping in galvanometers and heating in transformer cores (reduced by lamination).',
        'Inductors in series: L = L₁ + L₂ (no mutual coupling); parallel: 1/L = 1/L₁ + 1/L₂.',
      ],
      formulas: [
        { label: 'Faraday\'s law', expr: 'ε = −N dΦ/dt' },
        { label: 'Motional EMF', important: true, expr: 'ε = Blv' },
        { label: 'Rotating rod', important: true, expr: 'ε = ½ Bωl²' },
        { label: 'Induced charge', important: true, expr: 'q = NΔΦ / R' },
        { label: 'Self-inductance (solenoid)', important: true, expr: 'L = μ₀N²A / l' },
        { label: 'Mutual inductance', expr: 'M = μ₀N₁N₂A / l ,  M = k√(L₁L₂)' },
        { label: 'LR growth', important: true, expr: 'I = (ε/R)(1 − e^(−Rt/L))' },
        { label: 'LR decay', expr: 'I = I₀ e^(−Rt/L)' },
        { label: 'Energy in inductor', important: true, expr: 'U = ½LI² ,  u = B²/2μ₀' },
        { label: 'Rotating coil EMF', expr: 'ε = NBAω sin ωt' },
      ],
      mistakes: [
        'Applying Blv when v is not perpendicular to both l and B (use (v × B)·l).',
        'Treating the inductor as a short circuit at t = 0.',
      ],
      pyqTrend:
        'Rod on rails / rotating rod EMF and LR circuit transients are most common. Advanced combines EMI with mechanics (terminal velocity of rod).',
    },
    {
      name: 'Alternating Current',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'LCR circuits, phasors, resonance and power factor. Formula-based and very scoring if phasor diagrams are clear.',
      importantTopics: [
        { name: 'Series LCR circuit & impedance', hot: true, note: 'Phase angle, voltage across each element' },
        { name: 'Resonance & quality factor', hot: true, note: 'ω₀ = 1/√LC, bandwidth, Q = ω₀L/R' },
        { name: 'Power in AC & power factor', hot: true, note: 'P = VrmsIrms cosφ, wattless current' },
        { name: 'RMS and average values', note: 'For sinusoidal and non-sinusoidal waves' },
        { name: 'Transformer', note: 'Turns ratio, efficiency, energy losses' },
        { name: 'LC oscillations', note: 'Analogy with SHM, energy exchange' },
      ],
      theory: [
        {
          heading: 'RMS and average values',
          body:
            'For I = I₀ sin ωt, ==I_rms = I₀/√2== and the average over half a cycle is 2I₀/π (zero over a full cycle). AC ammeters and voltmeters read RMS values; household 220 V is RMS (peak ≈ 311 V).',
        },
        {
          heading: 'Pure R, L and C circuits',
          body:
            'Resistor: V and I in phase. Inductor: reactance X_L = ωL, ==current lags voltage by 90°==. Capacitor: X_C = 1/ωC, ==current leads voltage by 90°==. Memory trick: "==CIVIL==" - in C, I leads V; in L, V leads I. Average power in pure L or C is zero.',
        },
        {
          heading: 'Series LCR circuit',
          body:
            'Impedance ==Z = √(R² + (X_L − X_C)²)==, phase angle tanφ = (X_L − X_C)/R. Voltages across L and C are 180° out of phase, so V = √(V_R² + (V_L − V_C)²) - individual voltages can exceed the source voltage. If X_L > X_C the circuit is inductive; if X_C > X_L it is capacitive.',
        },
        {
          heading: 'Resonance',
          body:
            'At ==ω₀ = 1/√(LC)==, X_L = X_C, Z = R (minimum), current is maximum and in phase with voltage (power factor = 1). Quality factor Q = ω₀L/R = (1/R)√(L/C) measures sharpness; bandwidth Δω = R/L. Half-power frequencies are ω₀ ± R/2L.',
        },
        {
          heading: 'Power and transformer',
          body:
            'Average power ==P = V_rms I_rms cosφ==, cosφ = R/Z is the power factor. Current component I sinφ does no work (wattless current). Transformer: V_s/V_p = N_s/N_p = I_p/I_s (ideal). Losses: copper (I²R), eddy current (reduced by lamination), hysteresis (soft iron core), flux leakage.',
        },
      ],
      keyPoints: [
        '==At resonance, Z = R and power factor = 1==; V_L and V_C cancel each other.',
        'Inductor blocks high frequency; capacitor blocks DC and low frequency.',
        'LC oscillation: charge oscillates with ω = 1/√LC, total energy q₀²/2C is conserved.',
        'Transformer works only on AC; step-up raises voltage but lowers current.',
      ],
      formulas: [
        { label: 'RMS value', expr: 'I_rms = I₀/√2 ,  V_rms = V₀/√2' },
        { label: 'Reactances', expr: 'X_L = ωL ,  X_C = 1/ωC' },
        { label: 'Impedance', important: true, expr: 'Z = √(R² + (X_L − X_C)²)' },
        { label: 'Phase angle', important: true, expr: 'tanφ = (X_L − X_C)/R' },
        { label: 'Resonant frequency', important: true, expr: 'ω₀ = 1/√(LC) ,  f₀ = 1/2π√(LC)' },
        { label: 'Quality factor', important: true, expr: 'Q = ω₀L/R = (1/R)√(L/C)' },
        { label: 'Average power', important: true, expr: 'P = V_rms I_rms cosφ' },
        { label: 'Power factor', important: true, expr: 'cosφ = R/Z' },
        { label: 'Transformer', expr: 'V_s/V_p = N_s/N_p = I_p/I_s' },
        { label: 'LC oscillations', expr: 'q = q₀ cos(ωt) ,  ω = 1/√LC' },
      ],
      mistakes: [
        'Adding V_R, V_L, V_C arithmetically instead of as phasors.',
        'Using peak values in power formula instead of RMS (or forgetting the ½).',
      ],
      pyqTrend:
        'Resonance/Q-factor and power factor numericals are asked in nearly every session. Transformer efficiency is a common easy question.',
    },
    {
      name: 'Electromagnetic Waves',
      priority: 'Medium',
      weightage: '1 Q',
      difficulty: 'Easy',
      overview:
        'Short, fact-based chapter: displacement current, properties of EM waves and the EM spectrum. Almost always one easy question.',
      importantTopics: [
        { name: 'EM spectrum - order & uses', hot: true, note: 'Wavelength ranges, sources and applications' },
        { name: 'Energy density & intensity of EM waves', hot: true, note: 'I = ½ε₀E₀²c, E₀ = cB₀' },
        { name: 'Displacement current', note: 'I_d = ε₀ dΦ_E/dt inside a charging capacitor' },
        { name: 'Properties of EM waves', note: 'Transverse, E ⟂ B ⟂ direction of propagation' },
        { name: 'Radiation pressure & momentum', note: 'p = U/c' },
      ],
      theory: [
        {
          heading: 'Displacement current',
          body:
            'Maxwell added ==I_d = ε₀ dΦ_E/dt== to Ampere\'s law to make it consistent for a charging capacitor: ∮B·dl = μ₀(I_c + I_d). Between capacitor plates the conduction current is zero but the displacement current equals the circuit current.',
        },
        {
          heading: 'Nature of EM waves',
          body:
            'Produced by ==accelerated charges==. E and B oscillate in phase, perpendicular to each other and to the direction of propagation (E × B gives direction). Speed in vacuum c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s; in a medium v = c/n. ==E₀ = cB₀==. They need no medium.',
        },
        {
          heading: 'Energy and intensity',
          body:
            'Average energy density is shared equally between E and B: u = ½ε₀E₀² (total average). Intensity ==I = ½ε₀E₀²c== = E_rms²/(μ₀c). Momentum delivered p = U/c (absorbed) or 2U/c (reflected) - giving radiation pressure I/c or 2I/c.',
        },
        {
          heading: 'EM spectrum',
          body:
            'Increasing frequency: ==Radio → Microwave → Infrared → Visible → UV → X-rays → γ-rays== (mnemonic: "Raman Married In Very Unusual X-mas Gifts"). Uses: radio - communication, microwave - radar/ovens, IR - remote/heat therapy (greenhouse effect), UV - sterilisation (absorbed by ozone), X-ray - medical imaging, γ - cancer treatment (nuclear origin).',
        },
      ],
      keyPoints: [
        '==E₀/B₀ = c== in vacuum.',
        'Electric and magnetic energy densities are equal in an EM wave.',
        'Visible range ≈ 400-700 nm; X-rays ≈ 1 nm-10⁻³ nm; γ < 10⁻³ nm.',
        'Wave equation form: E = E₀ sin(kx − ωt) ĵ means propagation along +x.',
      ],
      formulas: [
        { label: 'Speed of light', expr: 'c = 1/√(μ₀ε₀)' },
        { label: 'Field relation', important: true, expr: 'E₀ = cB₀' },
        { label: 'Displacement current', expr: 'I_d = ε₀ dΦ_E/dt' },
        { label: 'Energy density (avg)', expr: 'u = ½ε₀E₀²' },
        { label: 'Intensity', important: true, expr: 'I = ½ε₀cE₀² = P/4πr² (point source)' },
        { label: 'Radiation pressure', important: true, expr: 'P = I/c (absorbing),  2I/c (reflecting)' },
      ],
      mistakes: [
        'Assuming magnetic energy is smaller because B is numerically small - energy densities are equal.',
        'Getting the order of the spectrum reversed (frequency vs wavelength).',
      ],
      pyqTrend:
        'One question per shift is common: either spectrum matching or E₀/B₀/intensity numerical. Direction of B from given E and propagation is a favourite.',
    },
    {
      name: 'Ray Optics and Optical Instruments',
      priority: 'Very High',
      weightage: '2-3 Qs',
      difficulty: 'Moderate',
      overview:
        'One of the most consistently asked chapters. Refraction at curved surfaces, lens/mirror combinations, prism and TIR dominate.',
      importantTopics: [
        { name: 'Refraction through lenses & lens maker formula', hot: true, note: 'Lens in different media, silvered lens' },
        { name: 'Prism - deviation & dispersion', hot: true, note: 'Minimum deviation, thin prism, achromatic combination' },
        { name: 'Total internal reflection', hot: true, note: 'Critical angle, optical fibre, apparent depth' },
        { name: 'Refraction at spherical surfaces', note: 'μ₂/v − μ₁/u = (μ₂ − μ₁)/R' },
        { name: 'Mirror formula & magnification', note: 'Moving object/mirror, velocity of image' },
        { name: 'Combination of lenses & mirrors', note: 'Power addition, displacement method' },
        { name: 'Microscope & telescope', hot: true, note: 'Magnifying power, length of tube' },
      ],
      theory: [
        {
          heading: 'Reflection from spherical mirrors',
          body:
            'Mirror formula ==1/v + 1/u = 1/f== with f = R/2, using the New Cartesian sign convention (distances measured from pole, along incident light positive). Magnification m = −v/u. For a moving object, v_image (along axis) = −m² v_object.',
        },
        {
          heading: 'Refraction and TIR',
          body:
            'Snell\'s law: μ₁ sin i = μ₂ sin r. Apparent depth = real depth/μ; the shift ==d(1 − 1/μ)== for a slab. Total internal reflection happens when light goes from denser to rarer medium and the angle exceeds the critical angle ==sin C = 1/μ==. Applications: optical fibres, diamond sparkle, mirage, totally reflecting prisms.',
        },
        {
          heading: 'Lenses',
          body:
            'Refraction at a curved surface: μ₂/v − μ₁/u = (μ₂ − μ₁)/R. Applying it twice gives the ==lens maker formula 1/f = (μ − 1)(1/R₁ − 1/R₂)== and the thin lens formula ==1/v − 1/u = 1/f==. In a medium, replace (μ − 1) by (μ_lens/μ_medium − 1) - a convex lens can behave as diverging if immersed in a denser medium. Power P = 1/f (in metres); lenses in contact: P = P₁ + P₂.',
        },
        {
          heading: 'Prism',
          body:
            'Deviation δ = i + e − A, with r₁ + r₂ = A. At ==minimum deviation, i = e and r₁ = r₂ = A/2==, giving μ = sin((A + δm)/2)/sin(A/2). For a thin prism δ = (μ − 1)A. Dispersion: angular dispersion = (μ_v − μ_r)A; dispersive power ω = (μ_v − μ_r)/(μ_y − 1). Achromatic combination: ω₁A₁(μ₁ − 1) + ω₂A₂(μ₂ − 1) = 0 (zero dispersion).',
        },
        {
          heading: 'Optical instruments',
          body:
            'Simple microscope: M = 1 + D/f (image at D), D/f (at infinity). Compound microscope: ==M = (v₀/u₀)(D/fₑ)== for normal adjustment. Astronomical telescope: ==M = f₀/fₑ== (normal adjustment), tube length f₀ + fₑ. Large objective aperture increases resolving power and light gathering.',
        },
      ],
      keyPoints: [
        '==Always use sign convention== - most errors come from signs, not physics.',
        'Silvered lens / plano-convex silvered: treat as a mirror with 1/F = 2/f_lens + 1/f_mirror (powers add).',
        'Displacement method: f = (D² − x²)/4D, and object size = √(I₁I₂).',
        'Minimum distance between object and its real image for a convex lens is 4f.',
        'Red light has least deviation (lowest μ); violet the most.',
        'Lateral shift by a glass slab: t sin(i − r)/cos r.',
      ],
      formulas: [
        { label: 'Mirror formula', important: true, expr: '1/v + 1/u = 1/f ,  m = −v/u' },
        { label: 'Snell\'s law', expr: 'μ₁ sin i = μ₂ sin r' },
        { label: 'Critical angle', important: true, expr: 'sin C = 1/μ (denser→rarer: μ_r/μ_d)' },
        { label: 'Apparent shift', expr: 'Δ = t(1 − 1/μ)' },
        { label: 'Single spherical surface', important: true, expr: 'μ₂/v − μ₁/u = (μ₂ − μ₁)/R' },
        { label: 'Lens maker', important: true, expr: '1/f = (μ_rel − 1)(1/R₁ − 1/R₂)' },
        { label: 'Thin lens', important: true, expr: '1/v − 1/u = 1/f ,  m = v/u' },
        { label: 'Power', expr: 'P = 1/f(m) ,  P = P₁ + P₂' },
        { label: 'Prism (min deviation)', important: true, expr: 'μ = sin((A + δm)/2) / sin(A/2)' },
        { label: 'Thin prism', expr: 'δ = (μ − 1)A' },
        { label: 'Dispersive power', expr: 'ω = (μ_v − μ_r)/(μ_y − 1)' },
        { label: 'Compound microscope', expr: 'M = (v₀/u₀)(1 + D/fₑ) or (v₀/u₀)(D/fₑ)' },
        { label: 'Telescope', important: true, expr: 'M = f₀/fₑ ,  L = f₀ + fₑ' },
      ],
      mistakes: [
        'Not converting the refractive index to relative index when the lens is in a medium.',
        'Using cm in P = 1/f (power needs metres).',
        'Forgetting the minus sign for magnification of mirrors.',
      ],
      pyqTrend:
        'At least 2 questions every shift. Lens in liquid, prism minimum deviation and TIR/critical angle are the most repeated themes.',
    },
    {
      name: 'Wave Optics',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'YDSE is the core of this chapter. Single slit diffraction, polarisation (Brewster, Malus) and Huygens principle follow.',
      importantTopics: [
        { name: 'Young\'s Double Slit Experiment', hot: true, note: 'Fringe width, shift due to glass slab, intensity at a point' },
        { name: 'Intensity in interference', hot: true, note: 'I = I₁ + I₂ + 2√(I₁I₂)cosφ, Imax/Imin' },
        { name: 'Single slit diffraction', note: 'Width of central maximum, position of minima' },
        { name: 'Polarisation - Malus law & Brewster\'s law', hot: true, note: 'Polaroids at angles, tan i_p = μ' },
        { name: 'Huygens principle', note: 'Derivation of reflection/refraction laws' },
        { name: 'Resolving power', note: 'Microscope and telescope' },
      ],
      theory: [
        {
          heading: 'Huygens principle',
          body:
            'Every point on a wavefront acts as a source of secondary wavelets; the new wavefront is the forward envelope of these wavelets. It explains reflection and refraction and gives ==μ = c/v==. Light slows down in a denser medium (contrary to Newton\'s corpuscular theory).',
        },
        {
          heading: 'Interference and YDSE',
          body:
            'Sustained interference needs ==coherent sources== (constant phase difference). Path difference Δx = yd/D. Bright fringes: Δx = nλ; dark: (2n − 1)λ/2. ==Fringe width β = λD/d==, angular width λ/d. In a medium of index μ, β becomes β/μ. Introducing a thin sheet (thickness t, index μ) shifts the pattern by ==(μ − 1)tD/d== towards the covered slit, without changing fringe width.',
        },
        {
          heading: 'Intensity',
          body:
            'Resultant intensity ==I = I₁ + I₂ + 2√(I₁I₂) cosφ==; for equal intensities I = 4I₀cos²(φ/2). Imax/Imin = (√I₁ + √I₂)²/(√I₁ − √I₂)². Phase difference φ = (2π/λ)Δx. Energy is only redistributed, not created or destroyed.',
        },
        {
          heading: 'Diffraction at a single slit',
          body:
            'Minima at ==a sinθ = nλ==. Central maximum has angular width 2λ/a and linear width 2λD/a - ==twice the width== of secondary maxima. Secondary maxima at a sinθ ≈ (n + ½)λ with rapidly decreasing intensity. Fresnel distance z_F = a²/λ is the limit up to which ray optics works.',
        },
        {
          heading: 'Polarisation',
          body:
            'Only transverse waves can be polarised. Malus\'s law: ==I = I₀cos²θ==. Unpolarised light through a polaroid gives I₀/2. Brewster\'s law: at the polarising angle ==tan i_p = μ==, reflected light is completely polarised and the reflected and refracted rays are perpendicular (i_p + r = 90°).',
        },
      ],
      keyPoints: [
        '==β = λD/d==: increases with λ and D, decreases with d.',
        'In white light YDSE, the central fringe is white and the others coloured.',
        'Thin film interference: 2μt cos r = nλ (dark in reflected light, after accounting for the π phase change on reflection from denser medium).',
        'Three polaroids: I = (I₀/2)cos²θ₁cos²θ₂.',
        'Resolving power of telescope ∝ D/λ; limit of resolution = 1.22λ/D.',
      ],
      formulas: [
        { label: 'Fringe width', important: true, expr: 'β = λD / d' },
        { label: 'Position of nth bright', expr: 'yₙ = nλD / d' },
        { label: 'Path ↔ phase', expr: 'φ = (2π/λ) Δx' },
        { label: 'Resultant intensity', important: true, expr: 'I = I₁ + I₂ + 2√(I₁I₂) cosφ' },
        { label: 'Equal sources', expr: 'I = 4I₀ cos²(φ/2)' },
        { label: 'Fringe shift (sheet)', important: true, expr: 'Δy = (μ − 1) t D / d' },
        { label: 'Single slit minima', important: true, expr: 'a sinθ = nλ ,  central width = 2λD/a' },
        { label: 'Malus\'s law', important: true, expr: 'I = I₀ cos²θ' },
        { label: 'Brewster\'s law', important: true, expr: 'tan i_p = μ' },
        { label: 'Resolving limit (telescope)', expr: 'Δθ = 1.22 λ / D' },
      ],
      mistakes: [
        'Forgetting the factor of ½ when unpolarised light passes through the first polaroid.',
        'Using β = λD/d in a medium without dividing λ by μ.',
      ],
      pyqTrend:
        'YDSE fringe width/shift and intensity ratio questions are near-certain. Malus law with multiple polaroids is a common integer question.',
    },
    {
      name: 'Dual Nature of Radiation and Matter',
      priority: 'Very High',
      weightage: '1-2 Qs',
      difficulty: 'Easy',
      overview:
        'Very scoring, formula-driven chapter. Photoelectric effect graphs and de Broglie wavelength questions appear in nearly every paper.',
      importantTopics: [
        { name: 'Einstein\'s photoelectric equation', hot: true, note: 'KE_max, stopping potential, threshold frequency' },
        { name: 'Photoelectric graphs', hot: true, note: 'I vs V, V₀ vs ν (slope h/e), effect of intensity vs frequency' },
        { name: 'de Broglie wavelength', hot: true, note: 'For electron accelerated through V, proton, α particle' },
        { name: 'Photon momentum & radiation force', note: 'Number of photons emitted per second' },
        { name: 'Davisson-Germer experiment', note: 'Confirms wave nature of electrons' },
      ],
      theory: [
        {
          heading: 'Photoelectric effect - observations',
          body:
            'Electrons are emitted only if the frequency exceeds the ==threshold frequency ν₀==, regardless of intensity. Emission is ==instantaneous==. Photocurrent ∝ intensity. Maximum KE (and stopping potential) depends ==only on frequency==, not intensity. These cannot be explained by wave theory.',
        },
        {
          heading: 'Einstein\'s photoelectric equation',
          body:
            'Light consists of photons of energy E = hν. One photon is absorbed by one electron: ==hν = φ + KE_max==, where φ = hν₀ is the work function. Stopping potential: eV₀ = KE_max = hν − φ. A V₀ vs ν graph is a straight line with ==slope h/e== (same for all metals) and intercept ν₀ on the frequency axis.',
        },
        {
          heading: 'Photocurrent graphs',
          body:
            'For the I-V curve: increasing intensity raises the saturation current but the stopping potential stays the same; increasing frequency makes the stopping potential more negative but saturation current (same intensity) is unchanged.',
        },
        {
          heading: 'Matter waves',
          body:
            'de Broglie: every moving particle has wavelength ==λ = h/p = h/mv = h/√(2mK)==. For an electron accelerated through V volts: ==λ = 12.27/√V Å==. For a charged particle through V: λ = h/√(2mqV). For thermal particles: λ = h/√(3mkT). Davisson-Germer experiment (electron diffraction from nickel crystal at 54 V, θ = 50°) confirmed matter waves.',
        },
      ],
      keyPoints: [
        '==hc = 1240 eV·nm== - fastest way to convert wavelength to energy: E(eV) = 1240/λ(nm).',
        'Doubling intensity doubles current but leaves V₀ unchanged.',
        'Photon momentum p = h/λ = E/c; force on a fully absorbing surface F = P/c.',
        'Number of photons per second n = Pλ/hc.',
        'For same KE, λ ∝ 1/√m; for same V, λ ∝ 1/√(mq).',
      ],
      formulas: [
        { label: 'Photon energy', expr: 'E = hν = hc/λ' },
        { label: 'Quick conversion', important: true, expr: 'E(eV) = 1240 / λ(nm)' },
        { label: 'Einstein\'s equation', important: true, expr: 'hν = φ + KE_max' },
        { label: 'Stopping potential', important: true, expr: 'eV₀ = hν − hν₀' },
        { label: 'Photon momentum', expr: 'p = h/λ = E/c' },
        { label: 'de Broglie', important: true, expr: 'λ = h/p = h/√(2mK)' },
        { label: 'Electron through V', important: true, expr: 'λ = 12.27/√V Å' },
        { label: 'Photons per second', expr: 'n = P/(hν) = Pλ/hc' },
      ],
      mistakes: [
        'Thinking intensity affects KE_max (it does not).',
        'Mixing up eV and J - keep units consistent.',
      ],
      pyqTrend:
        'Almost every shift has a photoelectric numerical or graph question and a de Broglie wavelength ratio question. Easy marks.',
    },
    {
      name: 'Atoms',
      priority: 'High',
      weightage: '1 Q',
      difficulty: 'Easy',
      overview:
        'Bohr model and hydrogen spectrum. Formula-based and quick to solve - also overlaps with Atomic Structure in Chemistry.',
      importantTopics: [
        { name: 'Bohr model - radius, velocity, energy', hot: true, note: 'Dependence on n and Z' },
        { name: 'Hydrogen spectrum series', hot: true, note: 'Lyman (UV), Balmer (visible), Paschen (IR); max/min wavelength' },
        { name: 'Ionisation & excitation energy', note: 'For H and H-like ions (He⁺, Li²⁺)' },
        { name: 'Rutherford\'s α-scattering', note: 'Distance of closest approach, impact parameter' },
        { name: 'Number of spectral lines', note: 'n(n − 1)/2' },
      ],
      theory: [
        {
          heading: 'Rutherford model',
          body:
            'α-particle scattering showed that the positive charge is concentrated in a tiny nucleus. Distance of closest approach ==r₀ = 2kZe²/K== (head-on collision). Number scattered N(θ) ∝ 1/sin⁴(θ/2). The model could not explain atomic stability or line spectra.',
        },
        {
          heading: 'Bohr\'s postulates',
          body:
            'Electrons move in stationary orbits where angular momentum is quantised: ==mvr = nh/2π==. They radiate only when jumping between orbits, emitting hν = E_i − E_f. Results for hydrogen-like atoms: ==rₙ = 0.529 n²/Z Å==, vₙ = 2.18 × 10⁶ Z/n m/s, ==Eₙ = −13.6 Z²/n² eV==.',
        },
        {
          heading: 'Hydrogen spectrum',
          body:
            '1/λ = RZ²(1/n₁² − 1/n₂²), R = 1.097 × 10⁷ m⁻¹. ==Lyman (n₁ = 1, UV), Balmer (n₁ = 2, visible), Paschen (3), Brackett (4), Pfund (5) - all IR==. Number of lines from level n to ground: n(n − 1)/2. The longest wavelength of a series comes from the transition n₁+1 → n₁; the shortest (series limit) from ∞ → n₁.',
        },
      ],
      keyPoints: [
        '==KE = −E, PE = 2E== in Bohr orbits (E is total energy, negative).',
        'r ∝ n²/Z, v ∝ Z/n, E ∝ Z²/n², T ∝ n³/Z², frequency of revolution ∝ Z²/n³.',
        'Ionisation energy of H = 13.6 eV; of He⁺ = 54.4 eV; Li²⁺ = 122.4 eV.',
        'Recoil of atom on emission: v = hν/mc (usually negligible).',
      ],
      formulas: [
        { label: 'Bohr radius', important: true, expr: 'rₙ = 0.529 n²/Z Å' },
        { label: 'Orbital velocity', expr: 'vₙ = 2.18 × 10⁶ (Z/n) m/s' },
        { label: 'Energy', important: true, expr: 'Eₙ = −13.6 Z²/n² eV' },
        { label: 'Rydberg formula', important: true, expr: '1/λ = RZ²(1/n₁² − 1/n₂²)' },
        { label: 'Spectral lines', important: true, expr: 'N = n(n − 1)/2' },
        { label: 'Closest approach', expr: 'r₀ = (1/4πε₀) · 2Ze² / K' },
        { label: 'Angular momentum', expr: 'L = nh/2π' },
      ],
      mistakes: [
        'Forgetting Z² for hydrogen-like ions.',
        'Using n(n − 1)/2 for a single atom (a single atom gives at most n − 1 lines).',
      ],
      pyqTrend:
        'One question per shift on ratios (r, v, E for different n/Z) or spectral series wavelengths.',
    },
    {
      name: 'Nuclei',
      priority: 'High',
      weightage: '1 Q',
      difficulty: 'Easy',
      overview:
        'Radioactivity, binding energy and nuclear reactions. Short chapter with direct numericals.',
      importantTopics: [
        { name: 'Radioactive decay law & half-life', hot: true, note: 'N = N₀e^(−λt), mean life, activity' },
        { name: 'Mass defect & binding energy', hot: true, note: 'BE per nucleon curve, Q-value' },
        { name: 'Nuclear radius & density', note: 'R = R₀A^(1/3), density is constant' },
        { name: 'α, β, γ decay', note: 'Change in A and Z, displacement law' },
        { name: 'Fission & fusion', note: 'Energy release, chain reaction' },
      ],
      theory: [
        {
          heading: 'Nuclear size and density',
          body:
            'R = R₀A^(1/3), R₀ ≈ 1.2 fm. Volume ∝ A, so ==nuclear density is the same for all nuclei== (≈ 2.3 × 10¹⁷ kg/m³). Nuclear force is short-range, strongest attractive force, charge independent and saturating.',
        },
        {
          heading: 'Mass defect and binding energy',
          body:
            'Δm = [Zm_p + (A − Z)m_n] − M_nucleus; ==BE = Δm × 931.5 MeV== (Δm in u). The BE/A curve peaks near ==Fe-56 (≈ 8.8 MeV)==: light nuclei release energy by fusion and heavy nuclei by fission. Q-value = (mass of reactants − mass of products)c² = BE(products) − BE(reactants).',
        },
        {
          heading: 'Radioactivity',
          body:
            '==N = N₀e^(−λt)==, activity A = λN. Half-life ==T½ = 0.693/λ==, mean life τ = 1/λ = 1.44 T½. After n half-lives N = N₀/2ⁿ. α decay: A − 4, Z − 2. β⁻ decay: Z + 1 (neutron → proton + e⁻ + antineutrino). γ decay: no change in A or Z.',
        },
      ],
      keyPoints: [
        '==1 u = 931.5 MeV/c²==.',
        'Activity unit: 1 Ci = 3.7 × 10¹⁰ Bq.',
        'Parallel decay: λ_eff = λ₁ + λ₂.',
        'Number of α and β particles in a decay chain: from ΔA find α, then use ΔZ to find β.',
      ],
      formulas: [
        { label: 'Nuclear radius', important: true, expr: 'R = R₀ A^(1/3)' },
        { label: 'Binding energy', important: true, expr: 'BE = Δm × 931.5 MeV' },
        { label: 'Decay law', important: true, expr: 'N = N₀ e^(−λt) = N₀ (½)^(t/T½)' },
        { label: 'Half-life / Mean life', important: true, expr: 'T½ = 0.693/λ ,  τ = 1/λ' },
        { label: 'Activity', expr: 'A = λN = A₀ e^(−λt)' },
        { label: 'Q-value', expr: 'Q = (Σm_reactants − Σm_products)c²' },
      ],
      mistakes: [
        'Using atomic mass vs nuclear mass inconsistently (electrons must cancel).',
        'Confusing mean life with half-life.',
      ],
      pyqTrend:
        'Half-life fraction questions and binding energy/Q-value numericals are most frequent.',
    },
    {
      name: 'Semiconductor Electronics',
      priority: 'Very High',
      weightage: '1-2 Qs',
      difficulty: 'Easy',
      overview:
        'Logic gates and p-n junction diodes give guaranteed easy marks. Usually one question on gates and one on diodes/rectifiers.',
      importantTopics: [
        { name: 'Logic gates & truth tables', hot: true, note: 'Combination circuits, NAND/NOR as universal gates' },
        { name: 'p-n junction diode - biasing & I-V', hot: true, note: 'Ideal diode circuits, which diode conducts' },
        { name: 'Rectifiers', note: 'Half-wave & full-wave, output frequency' },
        { name: 'Zener diode as voltage regulator', hot: true, note: 'Current through Zener, load current' },
        { name: 'Intrinsic & extrinsic semiconductors', note: 'n-type, p-type, nₑnₕ = nᵢ²' },
        { name: 'Special diodes', note: 'LED, photodiode (reverse bias), solar cell' },
      ],
      theory: [
        {
          heading: 'Semiconductors',
          body:
            'Band gap: conductors overlap, semiconductors ≈ 1 eV (Si 1.1 eV, Ge 0.7 eV), insulators > 3 eV. Intrinsic: nₑ = nₕ = nᵢ. Doping with pentavalent (P, As, Sb) gives ==n-type== (electrons majority); trivalent (B, Al, In) gives ==p-type== (holes majority). Law of mass action: ==nₑ nₕ = nᵢ²==. Conductivity σ = e(nₑμₑ + nₕμₕ).',
        },
        {
          heading: 'p-n junction',
          body:
            'Diffusion creates a ==depletion layer== with a barrier potential. Forward bias reduces the barrier (current flows after knee voltage ≈ 0.7 V for Si); reverse bias widens it (tiny saturation current until breakdown). An ideal diode is a short circuit in forward bias and open circuit in reverse bias.',
        },
        {
          heading: 'Rectifiers and Zener',
          body:
            'Half-wave rectifier output frequency = f; ==full-wave output frequency = 2f==. Zener diode works in ==reverse breakdown== and keeps voltage constant: I_Z = I_source − I_load, where I_source = (V_in − V_Z)/R_s.',
        },
        {
          heading: 'Optoelectronic devices',
          body:
            'Photodiode - operated in ==reverse bias==, current changes with light intensity. LED - forward bias, emits light when electrons and holes recombine (band gap decides colour). Solar cell - no external bias, works on photovoltaic effect; I-V curve lies in the fourth quadrant.',
        },
        {
          heading: 'Logic gates',
          body:
            'OR: Y = A + B; AND: Y = A·B; NOT: Y = Ā. NAND = NOT of AND; NOR = NOT of OR. ==NAND and NOR are universal gates==. XOR: output 1 when inputs differ. De Morgan: NOT(A + B) = Ā·B̄ and NOT(A·B) = Ā + B̄. Solve combination circuits by writing the Boolean expression stage by stage.',
        },
      ],
      keyPoints: [
        '==nₑnₕ = nᵢ²== holds even after doping (at thermal equilibrium).',
        'Photodiode is reverse biased because the fractional change in reverse current with light is larger.',
        'Diode in reverse bias = open switch, forward bias (ideal) = closed switch.',
        'NAND with both inputs shorted = NOT gate.',
      ],
      formulas: [
        { label: 'Mass action law', important: true, expr: 'nₑ nₕ = nᵢ²' },
        { label: 'Conductivity', expr: 'σ = e(nₑμₑ + nₕμₕ)' },
        { label: 'Zener current', important: true, expr: 'I_Z = (V_in − V_Z)/R_s − V_Z/R_L' },
        { label: 'Photon emitted by LED', expr: 'λ = hc / E_g' },
        { label: 'De Morgan', important: true, expr: '¬(A + B) = Ā · B̄ ,  ¬(A · B) = Ā + B̄' },
      ],
      mistakes: [
        'Reading the gate symbol wrongly (the small bubble means NOT).',
        'Forgetting the 0.7 V drop when a non-ideal Si diode is specified.',
      ],
      pyqTrend:
        'Logic gate combination output is asked almost every shift. Zener current and diode circuit questions are next. Transistors are now mostly out of the JEE Main syllabus.',
    },
  ],
};
