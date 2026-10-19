import type { StudyChapter } from '../types';

export const currentElectricity: StudyChapter = {
  name: 'Current Electricity',
  subject: 'Physics',
  classLevel: 12,
  summary:
    'Drift velocity, resistance, cells, Kirchhoff\'s laws, bridges and electrical power. One of the highest-weightage Class 12 chapters in JEE Main, with 2-3 questions in most papers.',
  mostRepeated: [
    'Drift velocity ==v_d = I/(neA)==; for a given current, v_d ∝ 1/A along a non-uniform wire.',
    'Stretching a wire to n times its length makes ==R → n²R== (volume constant).',
    'Terminal voltage V = E − Ir; ==maximum power to load when R = r==, P_max = E²/4r.',
    'Balanced Wheatstone bridge ==P/Q = R/S== - the galvanometer arm can be removed.',
    'In series the ==lower-wattage bulb glows brighter==; in parallel the higher-wattage one does.',
    'Resistor colour code (BB ROY of Great Britain had Very Good Wife) - asked frequently in JEE Main.',
    'In steady state ==no current flows through a capacitor branch==.',
  ],
  topics: [
    {
      name: 'Electric Current, Drift Velocity and Ohm\'s Law',
      theory:
        'Electric current is the rate of flow of charge, I = dq/dt. In a metal, free electrons move randomly at high speeds, but an applied field gives them a small average ==drift velocity v_d = eEτ/m== opposite to E, where τ is the mean relaxation time. This gives ==I = neAv_d==, with n the free-electron density.\n\nCurrent density J = I/A = nev_d = σE, which is the microscopic form of ==Ohm\'s law==. Here conductivity σ = ne²τ/m and resistivity ρ = 1/σ = m/(ne²τ). Mobility μ = v_d/E = eτ/m.\n\nDrift speeds are tiny (~10⁻⁴ m/s), yet a bulb lights instantly because the field is set up along the whole wire almost at the speed of light. Along a wire of varying cross-section the current is the same everywhere, so v_d and J are larger where the wire is thinner.',
      keyPoints: [
        '==I = neAv_d==; v_d ~ 10⁻⁴ m/s.',
        'v_d = eEτ/m = μE; mobility μ = eτ/m.',
        'Same current in a non-uniform wire ⇒ v_d ∝ 1/A.',
        'v_d = eVτ/(ml): doubling both V and l leaves v_d unchanged.',
      ],
      formulas: ['I = neAv_d', 'v_d = eEτ/m', 'J = σE', 'ρ = m/(ne²τ)', 'μ = v_d/E = eτ/m'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - drift velocity dependence',
        question: 'The potential difference across a conductor is doubled and its length is also doubled. The drift velocity of electrons:',
        approach: [
          'v_d = eEτ/m and E = V/l.',
          'V → 2V and l → 2l ⇒ E unchanged.',
          'Hence v_d is unchanged.',
        ],
        answer: 'Remains the same',
      },
      questions: [
        {
          question: 'A copper wire of cross-section 1 mm² carries 1.5 A. If n = 8.5 × 10²⁸ m⁻³, the drift speed is about:',
          options: ['1.1 × 10⁻⁴ m/s', '1.1 × 10⁻² m/s', '1.1 × 10⁻⁶ m/s', '3 × 10⁸ m/s'],
          answer: '1.1 × 10⁻⁴ m/s',
          difficulty: 'Easy',
          hint: 'v_d = I/(neA), with A in m².',
          solution: 'v_d = 1.5 / (8.5 × 10²⁸ × 1.6 × 10⁻¹⁹ × 10⁻⁶) = 1.5/13600 ≈ 1.1 × 10⁻⁴ m/s.',
          similar: {
            question: 'A wire of cross-section 2 mm² carries 3.4 A; n = 8.5 × 10²⁸ m⁻³. Drift speed:',
            options: ['1.25 × 10⁻⁴ m/s', '2.5 × 10⁻⁴ m/s', '6.25 × 10⁻⁵ m/s', '1.25 × 10⁻² m/s'],
            answer: '1.25 × 10⁻⁴ m/s',
            solution: 'v_d = 3.4 / (8.5 × 10²⁸ × 1.6 × 10⁻¹⁹ × 2 × 10⁻⁶) = 3.4/27200 = 1.25 × 10⁻⁴ m/s.',
          },
        },
        {
          question: 'A wire has radius at end A twice that at end B. Ratio of drift speeds v_A : v_B is:',
          options: ['1 : 4', '4 : 1', '1 : 2', '2 : 1'],
          answer: '1 : 4',
          difficulty: 'Medium',
          hint: 'Current is the same at every cross-section.',
          solution: 'v_d ∝ 1/A ∝ 1/r². r_A = 2r_B ⇒ A_A = 4A_B ⇒ v_A : v_B = 1 : 4.',
          similar: {
            question: 'At section P the area of a wire is 3 times that at Q. Ratio of drift speeds v_P : v_Q:',
            options: ['1 : 3', '3 : 1', '1 : 9', '1 : 1'],
            answer: '1 : 3',
            solution: 'Same I ⇒ v_d ∝ 1/A ⇒ 1 : 3.',
          },
        },
        {
          question: 'If the relaxation time of electrons in a metal is 2.5 × 10⁻¹⁴ s, the electron mobility is about (m_e = 9.1 × 10⁻³¹ kg):',
          options: ['4.4 × 10⁻³ m² V⁻¹ s⁻¹', '4.4 × 10⁻⁵ m² V⁻¹ s⁻¹', '2.2 × 10⁻³ m² V⁻¹ s⁻¹', '4.4 × 10⁻¹ m² V⁻¹ s⁻¹'],
          answer: '4.4 × 10⁻³ m² V⁻¹ s⁻¹',
          difficulty: 'Hard',
          hint: 'μ = eτ/m.',
          solution: 'μ = 1.6 × 10⁻¹⁹ × 2.5 × 10⁻¹⁴ / 9.1 × 10⁻³¹ ≈ 4.4 × 10⁻³ m² V⁻¹ s⁻¹.',
          similar: {
            question: 'Electrons in a conductor have mobility 4 × 10⁻³ m² V⁻¹ s⁻¹. Drift speed in a field of 5 V/m:',
            options: ['2 × 10⁻² m/s', '8 × 10⁻⁴ m/s', '1.25 × 10³ m/s', '2 × 10⁻⁴ m/s'],
            answer: '2 × 10⁻² m/s',
            solution: 'v_d = μE = 4 × 10⁻³ × 5 = 2 × 10⁻² m/s.',
          },
        },
      ],
    },
    {
      name: 'Resistivity, Temperature Dependence and Colour Code',
      theory:
        'Resistance of a uniform wire is ==R = ρl/A==; ρ depends only on the material and temperature. When a wire is stretched its volume stays constant, so lA is fixed and ==R ∝ l²== (or ∝ 1/r⁴): stretching to n times the length makes the resistance n² times.\n\nFor metals, resistivity increases with temperature: ==ρ_T = ρ₀(1 + αΔT)==, with α positive (more collisions, smaller τ). Semiconductors and insulators have negative α because n increases sharply with temperature. Alloys like nichrome and manganin have high ρ and very small α, so they are used in heaters and standard resistors.\n\nCarbon resistors are marked with the ==colour code==: Black 0, Brown 1, Red 2, Orange 3, Yellow 4, Green 5, Blue 6, Violet 7, Grey 8, White 9. The first two bands are digits, the third is the power of 10 multiplier, and the fourth is tolerance (gold 5%, silver 10%, none 20%).',
      keyPoints: [
        'R = ρl/A; ρ is a material property.',
        '==Stretch to n× length ⇒ R → n²R==.',
        'Metals: α > 0; semiconductors: α < 0.',
        'Colour code: digit, digit, multiplier, tolerance.',
      ],
      formulas: ['R = ρl/A', 'R_T = R₀(1 + αΔT)', 'R ∝ l² (fixed volume)', 'R ∝ 1/r⁴ (fixed volume)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - colour code',
        question: 'A carbon resistor has bands yellow, violet, orange and silver. Its resistance is:',
        approach: [
          'Yellow = 4, violet = 7 ⇒ digits 47.',
          'Orange = 3 ⇒ multiplier 10³.',
          'Silver ⇒ tolerance ±10%.',
        ],
        answer: '47 kΩ ± 10%',
      },
      questions: [
        {
          question: 'A wire of resistance R is stretched uniformly to double its length. New resistance:',
          options: ['4R', '2R', 'R/2', 'R'],
          answer: '4R',
          difficulty: 'Easy',
          hint: 'Volume stays the same, so area halves.',
          solution: 'l → 2l, A → A/2 ⇒ R = ρ(2l)/(A/2) = 4R.',
          similar: {
            question: 'A wire is stretched until its radius becomes half. Its resistance becomes:',
            options: ['16 times', '4 times', '8 times', '2 times'],
            answer: '16 times',
            solution: 'r → r/2 ⇒ A → A/4 ⇒ l → 4l (volume constant). R ∝ l/A ⇒ 4 × 4 = 16 times.',
          },
        },
        {
          question: 'A nichrome wire (ρ = 1.1 × 10⁻⁶ Ω m) is 2 m long with cross-section 1 mm². Its resistance:',
          options: ['2.2 Ω', '1.1 Ω', '4.4 Ω', '0.22 Ω'],
          answer: '2.2 Ω',
          difficulty: 'Medium',
          hint: 'R = ρl/A with A = 10⁻⁶ m².',
          solution: 'R = 1.1 × 10⁻⁶ × 2 / 10⁻⁶ = 2.2 Ω.',
          similar: {
            question: 'A copper wire (ρ = 1.7 × 10⁻⁸ Ω m) is 10 m long with cross-section 0.5 mm². Resistance:',
            options: ['0.34 Ω', '0.17 Ω', '3.4 Ω', '0.034 Ω'],
            answer: '0.34 Ω',
            solution: 'R = 1.7 × 10⁻⁸ × 10 / 5 × 10⁻⁷ = 0.34 Ω.',
          },
        },
        {
          question: 'A coil has resistance 5 Ω at 50 °C and 6 Ω at 100 °C. Its resistance at 0 °C is:',
          options: ['4 Ω', '4.5 Ω', '3 Ω', '3.5 Ω'],
          answer: '4 Ω',
          difficulty: 'Hard',
          hint: 'Write R = R₀(1 + αt) for both temperatures and divide.',
          solution: '6/5 = (1 + 100α)/(1 + 50α) ⇒ 6 + 300α = 5 + 500α ⇒ α = 0.005 /°C. R₀ = 5/1.25 = 4 Ω.',
          similar: {
            question: 'A wire has resistance 12 Ω at 25 °C and 14 Ω at 75 °C. Its resistance at 0 °C is:',
            options: ['11 Ω', '10 Ω', '11.5 Ω', '9 Ω'],
            answer: '11 Ω',
            solution: '14(1 + 25α) = 12(1 + 75α) ⇒ 2 = 550α ⇒ α = 1/275. R₀ = 12/(1 + 25/275) = 12/(12/11) = 11 Ω.',
          },
        },
      ],
    },
    {
      name: 'Combination of Resistors',
      theory:
        'In ==series== the current is common and resistances add: R = R₁ + R₂ + …; voltage divides in proportion to resistance. In ==parallel== the voltage is common: 1/R = 1/R₁ + 1/R₂ + …; current divides in inverse proportion to resistance, and the equivalent is smaller than the smallest resistor.\n\nFor complicated networks, look for ==symmetry== (points at equal potential can be joined or a resistor between them removed), a balanced Wheatstone bridge, or redraw the circuit by labelling node potentials.\n\nUseful results: a wire of resistance R cut into n equal parts and joined in parallel gives ==R/n²==. A wire bent into a circle has resistance between two points that divide it into fractions f and (1 − f) of R equal to f(1 − f)R; across a diameter it is R/4. Twelve equal resistors R on the edges of a cube give 5R/6 across a body diagonal.',
      keyPoints: [
        'Series: same I; parallel: same V.',
        'n equal parts in parallel ⇒ ==R/n²==.',
        'Ring across diameter ⇒ R/4.',
        'Use symmetry and equipotential points to simplify networks.',
      ],
      formulas: ['R_s = ΣRᵢ', '1/R_p = Σ1/Rᵢ', 'Two in parallel: R₁R₂/(R₁ + R₂)', 'Cube (body diagonal) = 5R/6'],
      pyq: {
        exam: 'JEE Main & Advanced',
        frequency: 'Recurring - symmetric networks',
        question: 'Twelve equal resistors R form the edges of a cube. Equivalent resistance between the ends of a body diagonal:',
        approach: [
          'From the entry corner current I splits equally into 3 edges (I/3 each).',
          'Each of those 3 corners sends I/6 into 2 edges (6 middle edges).',
          'They recombine into 3 edges of I/3 into the exit corner.',
          'V = (I/3)R + (I/6)R + (I/3)R = 5IR/6 ⇒ R_eq = 5R/6.',
        ],
        answer: '5R/6',
      },
      questions: [
        {
          question: 'A 3 Ω and a 6 Ω resistor in parallel are connected in series with a 4 Ω resistor. Equivalent resistance:',
          options: ['6 Ω', '13 Ω', '2 Ω', '4.5 Ω'],
          answer: '6 Ω',
          difficulty: 'Easy',
          hint: 'Do the parallel pair first.',
          solution: '3 ∥ 6 = 18/9 = 2 Ω. Total = 2 + 4 = 6 Ω.',
          similar: {
            question: 'Three 6 Ω resistors in parallel. Equivalent resistance:',
            options: ['2 Ω', '18 Ω', '3 Ω', '6 Ω'],
            answer: '2 Ω',
            solution: '1/R = 3/6 ⇒ R = 2 Ω.',
          },
        },
        {
          question: 'A 64 Ω wire is cut into 4 equal parts which are then connected in parallel. Equivalent resistance:',
          options: ['4 Ω', '16 Ω', '1 Ω', '256 Ω'],
          answer: '4 Ω',
          difficulty: 'Medium',
          hint: 'Each piece is R/n; n of them in parallel.',
          solution: 'Each piece = 16 Ω. Four in parallel = 16/4 = 4 Ω (= R/n²).',
          similar: {
            question: 'A 50 Ω wire is cut into 5 equal parts joined in parallel. Equivalent resistance:',
            options: ['2 Ω', '10 Ω', '250 Ω', '5 Ω'],
            answer: '2 Ω',
            solution: 'R/n² = 50/25 = 2 Ω.',
          },
        },
        {
          question: 'A uniform wire of resistance 32 Ω is bent into a circle. Resistance between two points separated by a 90° arc:',
          options: ['6 Ω', '8 Ω', '4 Ω', '24 Ω'],
          answer: '6 Ω',
          difficulty: 'Hard',
          hint: 'The two arcs (quarter and three-quarters) are in parallel.',
          solution: 'Arcs: 8 Ω and 24 Ω in parallel ⇒ 8 × 24/32 = 6 Ω.',
          similar: {
            question: 'An 18 Ω wire is bent into a circle. Resistance between two points separated by a 120° arc:',
            options: ['4 Ω', '6 Ω', '4.5 Ω', '12 Ω'],
            answer: '4 Ω',
            solution: 'Arcs 6 Ω and 12 Ω in parallel ⇒ 72/18 = 4 Ω.',
          },
        },
      ],
    },
    {
      name: 'EMF, Internal Resistance and Combination of Cells',
      theory:
        'The emf E of a cell is the work done per unit charge by the cell; it equals the terminal voltage only when no current flows. A cell has internal resistance r, so while delivering current I to a load R: ==I = E/(R + r)== and terminal voltage ==V = E − Ir==. While being charged, V = E + Ir.\n\nPower delivered to the external resistor is P = E²R/(R + r)², which is ==maximum when R = r==, giving P_max = E²/4r (efficiency then only 50%).\n\nn identical cells in ==series==: emf nE, resistance nr. If m of them are reversed, emf becomes (n − 2m)E but resistance stays nr. n identical cells in ==parallel==: emf E, resistance r/n. Two different cells in parallel: ==E_eq = (E₁/r₁ + E₂/r₂)/(1/r₁ + 1/r₂)==, r_eq = r₁r₂/(r₁ + r₂).',
      keyPoints: [
        'V = E − Ir (discharging), V = E + Ir (charging).',
        '==Maximum power transfer at R = r==.',
        'Reversed cells subtract emf but still add resistance.',
        'Parallel cells: E_eq is the weighted average of E/r.',
      ],
      formulas: ['I = E/(R + r)', 'V = E − Ir', 'P_max = E²/4r', 'E_eq = (E₁r₂ + E₂r₁)/(r₁ + r₂)', 'r_eq = r₁r₂/(r₁ + r₂)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - wrongly connected cells',
        question: 'Twelve identical cells, each of emf E and internal resistance r, are in series, but 3 of them are connected the wrong way. They drive current through an external R. The current is:',
        approach: [
          'Each reversed cell cancels one correct cell: net emf = (12 − 2 × 3)E = 6E.',
          'Internal resistance is unaffected by direction: 12r.',
          'I = 6E/(R + 12r).',
        ],
        answer: 'I = 6E/(R + 12r)',
      },
      questions: [
        {
          question: 'A cell of emf 2 V and internal resistance 0.5 Ω is connected across a 3.5 Ω resistor. Terminal voltage:',
          options: ['1.75 V', '2 V', '0.25 V', '1.5 V'],
          answer: '1.75 V',
          difficulty: 'Easy',
          hint: 'Find I first, then V = IR or V = E − Ir.',
          solution: 'I = 2/(3.5 + 0.5) = 0.5 A. V = 0.5 × 3.5 = 1.75 V.',
          similar: {
            question: 'A 12 V battery of internal resistance 1 Ω is connected across 5 Ω. Terminal voltage:',
            options: ['10 V', '12 V', '2 V', '11 V'],
            answer: '10 V',
            solution: 'I = 12/6 = 2 A. V = 12 − 2 × 1 = 10 V.',
          },
        },
        {
          question: 'Maximum power that a 6 V cell with internal resistance 2 Ω can deliver to an external resistor:',
          options: ['4.5 W', '9 W', '18 W', '3 W'],
          answer: '4.5 W',
          difficulty: 'Medium',
          hint: 'Maximum power when R = r.',
          solution: 'P_max = E²/4r = 36/8 = 4.5 W.',
          similar: {
            question: 'Maximum power a 12 V source of internal resistance 3 Ω can deliver to a load:',
            options: ['12 W', '24 W', '48 W', '6 W'],
            answer: '12 W',
            solution: 'P_max = 144/(4 × 3) = 12 W.',
          },
        },
        {
          question: 'Cells of 2 V (r = 1 Ω) and 4 V (r = 2 Ω) are connected in parallel with like terminals together. Equivalent emf:',
          options: ['8/3 V', '3 V', '6 V', '2 V'],
          answer: '8/3 V',
          difficulty: 'Hard',
          hint: 'E_eq = (E₁/r₁ + E₂/r₂)/(1/r₁ + 1/r₂).',
          solution: 'E_eq = (2/1 + 4/2)/(1 + 1/2) = 4/1.5 = 8/3 V ≈ 2.67 V.',
          similar: {
            question: 'Cells of 6 V (r = 2 Ω) and 3 V (r = 1 Ω) in parallel, like terminals together. Equivalent emf:',
            options: ['4 V', '4.5 V', '9 V', '3 V'],
            answer: '4 V',
            solution: 'E_eq = (6/2 + 3/1)/(1/2 + 1) = 6/1.5 = 4 V.',
          },
        },
      ],
    },
    {
      name: 'Kirchhoff\'s Laws',
      theory:
        '==Junction rule (KCL)==: the sum of currents entering a junction equals the sum leaving - a statement of ==conservation of charge==. ==Loop rule (KVL)==: the algebraic sum of potential changes around any closed loop is zero - a statement of ==conservation of energy==.\n\nSign convention for KVL: going through a resistor along the current, potential drops by IR; going from − to + terminal of a cell, potential rises by E. Assume current directions; a negative answer simply means the actual direction is opposite.\n\nA fast alternative is the ==node-potential method==: set one node at 0 V, write the other node voltage as V, and apply KCL as Σ(Eᵢ − V)/Rᵢ = 0 type equations. In steady DC, a branch containing a ==capacitor carries no current==; find the capacitor voltage from the potential difference across its ends.',
      keyPoints: [
        'KCL ⇒ charge conservation; KVL ⇒ energy conservation.',
        'Negative current means the assumed direction was wrong.',
        'Node method: one unknown per node instead of per loop.',
        '==Capacitor branch: zero current in steady state==.',
      ],
      formulas: ['ΣI_in = ΣI_out', 'ΣΔV (closed loop) = 0', 'Node: Σ(Eᵢ − V)/Rᵢ = 0'],
      diagram: 'kirchhoff-circuit',
      diagramCaption: 'A two-loop circuit solved by applying the junction and loop rules.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - capacitor in a DC circuit',
        question:
          'A 6 V battery of negligible internal resistance is connected to 2 Ω and 4 Ω in series. A 5 μF capacitor is connected across the 4 Ω resistor. Charge on the capacitor in steady state:',
        approach: [
          'In steady state no current enters the capacitor branch.',
          'I = 6/(2 + 4) = 1 A.',
          'V across 4 Ω = 4 V ⇒ Q = CV = 5 × 4 = 20 μC.',
        ],
        answer: '20 μC',
      },
      questions: [
        {
          question: 'Kirchhoff\'s loop rule is a consequence of the conservation of:',
          options: ['Energy', 'Charge', 'Momentum', 'Mass'],
          answer: 'Energy',
          difficulty: 'Easy',
          hint: 'Taking a charge round a closed loop and back to the start.',
          solution: 'The net work done on a charge taken round a closed loop in a conservative field is zero, so the potential changes sum to zero - energy conservation.',
          similar: {
            question: 'Kirchhoff\'s junction rule is a consequence of the conservation of:',
            options: ['Charge', 'Energy', 'Momentum', 'Angular momentum'],
            answer: 'Charge',
            solution: 'Charge cannot accumulate at a junction, so what flows in must flow out.',
          },
        },
        {
          question:
            'Two branches are connected in parallel across a 2 Ω resistor: branch 1 is a 12 V cell in series with 3 Ω; branch 2 is a 6 V cell in series with 6 Ω (both positive terminals to the same node). Current through the 2 Ω resistor:',
          options: ['2.5 A', '3 A', '1.5 A', '5 A'],
          answer: '2.5 A',
          difficulty: 'Medium',
          hint: 'Let the top node be at potential V and apply KCL.',
          solution: '(12 − V)/3 + (6 − V)/6 = V/2. Multiply by 6: 24 − 2V + 6 − V = 3V ⇒ V = 5 V. Current = 5/2 = 2.5 A.',
          similar: {
            question:
              'Branch 1: 8 V cell with 2 Ω; branch 2: 4 V cell with 2 Ω; both in parallel across a 4 Ω resistor (like terminals together). Current through 4 Ω:',
            options: ['1.2 A', '1.5 A', '3 A', '2.4 A'],
            answer: '1.2 A',
            solution: '(8 − V)/2 + (4 − V)/2 = V/4 ⇒ 16 − 2V + 8 − 2V = V ⇒ V = 4.8 V. I = 4.8/4 = 1.2 A.',
          },
        },
        {
          question:
            'A 10 V cell (r = 2 Ω) and a 4 V cell (r = 1 Ω) are connected in parallel (like terminals together) across a 2 Ω resistor. The current through the 4 V cell is:',
          options: ['0.5 A, cell is being charged', '0.5 A, cell is discharging', '4 A, cell is discharging', 'Zero'],
          answer: '0.5 A, cell is being charged',
          difficulty: 'Hard',
          hint: 'Find the common terminal voltage V; if V exceeds the cell\'s emf, current enters its positive terminal.',
          solution:
            '(10 − V)/2 + (4 − V)/1 = V/2 ⇒ 10 − V + 8 − 2V = V ⇒ V = 4.5 V. Current out of the 4 V cell = (4 − 4.5)/1 = −0.5 A, i.e. 0.5 A flows into it: it is being charged.',
          similar: {
            question:
              'A 12 V cell (r = 1 Ω) and a 6 V cell (r = 2 Ω) are in parallel (like terminals together) across a 6 Ω resistor. Current through the 6 V cell:',
            options: ['1.5 A, cell is being charged', '1.5 A, cell is discharging', '3 A, cell is being charged', 'Zero'],
            answer: '1.5 A, cell is being charged',
            solution: '(12 − V)/1 + (6 − V)/2 = V/6 ⇒ 72 − 6V + 18 − 3V = V ⇒ V = 9 V. (6 − 9)/2 = −1.5 A ⇒ 1.5 A flows into the 6 V cell (charging).',
          },
        },
      ],
    },
    {
      name: 'Wheatstone Bridge and Metre Bridge',
      theory:
        'A Wheatstone bridge has four resistors P, Q, R, S in a loop with a galvanometer across one diagonal and a cell across the other. It is ==balanced (no galvanometer current) when P/Q = R/S==. Then the two ends of the galvanometer are at the same potential, and ==any resistor in that arm can be removed== when finding equivalent resistance. The balance condition does not depend on the cell emf or the galvanometer resistance; interchanging cell and galvanometer keeps it balanced.\n\nThe ==metre bridge== is a practical Wheatstone bridge using a 1 m uniform wire. With unknown X in the left gap and known R in the right gap, the null point at distance l from the left end gives ==X/R = l/(100 − l)== (l in cm).\n\nThe bridge is most sensitive when the null point is near the middle. End resistances (at the copper strips) are removed by repeating the measurement with X and R interchanged.',
      keyPoints: [
        '==Balance: P/Q = R/S==; galvanometer arm carries no current.',
        'In a balanced bridge the middle resistor can be ignored.',
        'Metre bridge: X/R = l/(100 − l).',
        'Null point near the middle gives the least error.',
      ],
      formulas: ['P/Q = R/S', 'X = R·l/(100 − l)', 'ρ = XπD²/(4L) (specific resistance)'],
      diagram: 'wheatstone-bridge',
      diagramCaption: 'Wheatstone bridge: balanced when P/Q = R/S and no current flows through G.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - bridge networks',
        question:
          'Resistances 2 Ω and 4 Ω form one arm pair and 3 Ω and 6 Ω the other, with a 5 Ω resistor across the middle (bridge arm). Equivalent resistance between the input terminals:',
        approach: [
          'Check balance: 2/4 = 3/6 ⇒ balanced, so the 5 Ω arm carries no current.',
          'Remove it: (2 + 4) = 6 Ω in parallel with (3 + 6) = 9 Ω.',
          'R = 6 × 9/15 = 3.6 Ω.',
        ],
        answer: '3.6 Ω',
      },
      questions: [
        {
          question: 'In a Wheatstone bridge, P = 10 Ω, Q = 20 Ω and R = 15 Ω. For balance S must be:',
          options: ['30 Ω', '7.5 Ω', '15 Ω', '45 Ω'],
          answer: '30 Ω',
          difficulty: 'Easy',
          hint: 'P/Q = R/S.',
          solution: 'S = RQ/P = 15 × 20/10 = 30 Ω.',
          similar: {
            question: 'P = 5 Ω, Q = 10 Ω, S = 12 Ω. For balance R must be:',
            options: ['6 Ω', '24 Ω', '12 Ω', '3 Ω'],
            answer: '6 Ω',
            solution: 'R = PS/Q = 5 × 12/10 = 6 Ω.',
          },
        },
        {
          question: 'In a metre bridge, X is in the left gap and 6 Ω in the right gap. The null point is at 40 cm from the left end. X =',
          options: ['4 Ω', '9 Ω', '2.4 Ω', '6 Ω'],
          answer: '4 Ω',
          difficulty: 'Medium',
          hint: 'X/R = l/(100 − l).',
          solution: 'X = 6 × 40/60 = 4 Ω.',
          similar: {
            question: 'X in the left gap, 10 Ω in the right gap, null point at 60 cm. X =',
            options: ['15 Ω', '6.67 Ω', '10 Ω', '25 Ω'],
            answer: '15 Ω',
            solution: 'X = 10 × 60/40 = 15 Ω.',
          },
        },
        {
          question:
            'In a metre bridge with X in the left gap and 10 Ω in the right gap, the null point is at 50 cm. When X is shunted by a resistance S, the null point shifts to 40 cm. S =',
          options: ['20 Ω', '10 Ω', '6.67 Ω', '30 Ω'],
          answer: '20 Ω',
          difficulty: 'Hard',
          hint: 'First find X; then the new left-gap resistance is X ∥ S.',
          solution: 'X = 10 Ω. New: (X ∥ S)/10 = 40/60 ⇒ X ∥ S = 20/3 Ω. 10S/(10 + S) = 20/3 ⇒ 30S = 200 + 20S ⇒ S = 20 Ω.',
          similar: {
            question:
              'X and a 12 Ω resistor give a null point at 50 cm. When X is shunted by S, the null point moves to 25 cm. S =',
            options: ['6 Ω', '4 Ω', '12 Ω', '3 Ω'],
            answer: '6 Ω',
            solution: 'X = 12 Ω. (X ∥ S)/12 = 25/75 ⇒ X ∥ S = 4 Ω. 12S/(12 + S) = 4 ⇒ 8S = 48 ⇒ S = 6 Ω.',
          },
        },
      ],
    },
    {
      name: 'Electrical Energy, Power and Heating Effect',
      theory:
        'The power dissipated in a resistor is ==P = VI = I²R = V²/R==, and the heat produced in time t is ==H = I²Rt== (Joule\'s law). Commercial energy is measured in kilowatt-hours: 1 kWh = 3.6 × 10⁶ J.\n\nAn appliance rated (P, V) has resistance ==R = V²/P==. When operated at a different voltage V\', its power is P(V\'/V)², assuming R is unchanged.\n\nIn ==series==, the same current flows, so P ∝ R: the ==lower-wattage bulb (higher R) glows brighter==. In ==parallel==, the same voltage acts, so P ∝ 1/R: the higher-wattage bulb is brighter. For bulbs of the same rated voltage, series total power: 1/P = 1/P₁ + 1/P₂; parallel: P = P₁ + P₂. Similarly, heater coils that boil water in t₁ and t₂ take t₁ + t₂ in series and t₁t₂/(t₁ + t₂) in parallel.',
      keyPoints: [
        'R = V²/P for a rated appliance.',
        '==Series: low-wattage bulb brighter==; parallel: high-wattage brighter.',
        'Series (same rated V): 1/P = Σ1/Pᵢ; parallel: P = ΣPᵢ.',
        '1 kWh = 3.6 × 10⁶ J.',
      ],
      formulas: ['P = VI = I²R = V²/R', 'H = I²Rt', 't_series = t₁ + t₂', 't_parallel = t₁t₂/(t₁ + t₂)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - heater coil combinations',
        question: 'One heater coil boils a kettle of water in 10 min and another in 15 min. If both coils are connected in parallel to the same supply, the water boils in:',
        approach: [
          'Heat needed H = V²t/R ⇒ R ∝ t.',
          'Parallel: 1/R = 1/R₁ + 1/R₂ ⇒ 1/t = 1/t₁ + 1/t₂.',
          't = 10 × 15/25 = 6 min (in series it would be 25 min).',
        ],
        answer: '6 min',
      },
      questions: [
        {
          question: 'Resistance of a 100 W, 220 V bulb is:',
          options: ['484 Ω', '2.2 Ω', '22 Ω', '220 Ω'],
          answer: '484 Ω',
          difficulty: 'Easy',
          hint: 'R = V²/P.',
          solution: 'R = 220²/100 = 48400/100 = 484 Ω.',
          similar: {
            question: 'Resistance of a 60 W, 240 V bulb is:',
            options: ['960 Ω', '4 Ω', '240 Ω', '400 Ω'],
            answer: '960 Ω',
            solution: 'R = 240²/60 = 57600/60 = 960 Ω.',
          },
        },
        {
          question: 'A 100 W and a 60 W bulb (both 220 V) are connected in series across 220 V. Which glows brighter?',
          options: ['60 W bulb', '100 W bulb', 'Both equally', 'Neither glows'],
          answer: '60 W bulb',
          difficulty: 'Medium',
          hint: 'In series the current is common, so P = I²R.',
          solution: 'R = V²/P, so the 60 W bulb has the larger resistance. With the same current, P = I²R is larger for it, so it glows brighter.',
          similar: {
            question: 'The same 100 W and 60 W (220 V) bulbs are connected in parallel across 220 V. Which glows brighter?',
            options: ['100 W bulb', '60 W bulb', 'Both equally', 'Neither glows'],
            answer: '100 W bulb',
            solution: 'In parallel each gets its rated 220 V, so each dissipates its rated power: the 100 W bulb is brighter.',
          },
        },
        {
          question: 'Bulbs rated 100 W and 25 W (both 220 V) are connected in series across 220 V. Total power consumed:',
          options: ['20 W', '125 W', '62.5 W', '80 W'],
          answer: '20 W',
          difficulty: 'Hard',
          hint: 'For same rated voltage in series, 1/P = 1/P₁ + 1/P₂.',
          solution: 'R₁ = 484 Ω, R₂ = 1936 Ω; I = 220/2420 = 1/11 A. P = 220 × 1/11 = 20 W. (Check: 1/P = 1/100 + 1/25 = 1/20.)',
          similar: {
            question: 'Two 100 W, 220 V bulbs are connected in series across 220 V. Total power consumed:',
            options: ['50 W', '200 W', '100 W', '25 W'],
            answer: '50 W',
            solution: '1/P = 1/100 + 1/100 ⇒ P = 50 W.',
          },
        },
      ],
    },
  ],
};
