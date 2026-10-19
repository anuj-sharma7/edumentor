import type { StudyChapter } from '../types';

export const kineticTheoryOfGases: StudyChapter = {
  name: 'Kinetic Theory of Gases',
  subject: 'Physics',
  classLevel: 11,
  summary:
    'Explains pressure and temperature of a gas from the motion of its molecules, and gives molecular speeds, degrees of freedom, equipartition of energy and mean free path. A short chapter that usually gives one direct question in JEE Main.',
  mostRepeated: [
    'Pressure of an ideal gas ==P = ⅓ρv²_rms = ⅔E== (E = translational KE per unit volume).',
    '==v_rms = √(3RT/M)==; v_rms : v_avg : v_mp = √3 : √(8/π) : √2.',
    'Average KE per molecule ==(3/2)kT==, independent of the nature of the gas.',
    'Each degree of freedom gets ==½kT== per molecule (equipartition).',
    '==γ = 1 + 2/f==: monatomic 5/3, rigid diatomic 7/5.',
    'Mean free path ==λ = kT/(√2 πd²P)==, so λ ∝ 1/P at constant T.',
  ],
  topics: [
    {
      name: 'Ideal Gas Equation and Gas Laws',
      theory:
        'An ideal gas obeys ==PV = nRT = NkT==, where n is the number of moles, N the number of molecules, R = 8.314 J mol⁻¹ K⁻¹ and k = R/N_A = 1.38 × 10⁻²³ J/K (Boltzmann constant). Real gases approach ideal behaviour at low pressure and high temperature.\n\nThe ideal gas equation contains the familiar laws: ==Boyle\'s law== (PV = constant at fixed T), ==Charles\'s law== (V ∝ T at fixed P) and Gay-Lussac\'s law (P ∝ T at fixed V). Temperatures must always be in kelvin. It can also be written as P = ρRT/M, so at fixed P and T the density is proportional to the molar mass.\n\n==Dalton\'s law of partial pressures==: in a mixture of non-reacting ideal gases, the total pressure is the sum of the pressures each gas would exert alone, P = P₁ + P₂ + .... When two vessels at the same temperature are connected, the total number of moles is conserved: P(V₁ + V₂) = P₁V₁ + P₂V₂.',
      keyPoints: [
        '==PV = nRT = NkT==; always use kelvin.',
        'P = ρRT/M ⇒ at given P and T, ρ ∝ M.',
        'Dalton: P_total = ΣP_i (non-reacting gases).',
        'Connected vessels (same T): moles conserved ⇒ PΣV = ΣPᵢVᵢ.',
        'Gas escaping at constant P and V: n ∝ 1/T.',
      ],
      formulas: ['PV = nRT', 'PV = NkT', 'P = ρRT/M', 'P = P₁ + P₂ + ...'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - gas leaking from a heated vessel',
        question:
          'An open vessel contains air at 27 °C. It is heated to 327 °C, the pressure remaining atmospheric. What fraction of the original air escapes?',
        approach: [
          'P and V are fixed, so n ∝ 1/T.',
          'n₂/n₁ = T₁/T₂ = 300/600 = 1/2.',
          'Fraction escaped = 1 − 1/2.',
        ],
        answer: '1/2',
      },
      questions: [
        {
          question: 'A gas at 27 °C and pressure P is heated at constant volume to 327 °C. Its new pressure is:',
          options: ['2P', '12.1P', 'P/2', '4P'],
          answer: '2P',
          difficulty: 'Easy',
          hint: 'P ∝ T at constant volume, with T in kelvin.',
          solution: 'T: 300 K → 600 K, so P doubles to 2P.',
          similar: {
            question: 'A gas at 127 °C occupies volume V. At constant pressure it is heated to 527 °C. New volume:',
            options: ['2V', '4.15V', 'V/2', '4V'],
            answer: '2V',
            solution: 'V ∝ T: 400 K → 800 K, so the volume doubles.',
          },
        },
        {
          question: 'A cylinder of volume 0.0249 m³ contains an ideal gas at 2 × 10⁵ Pa and 300 K. The number of moles is (R = 8.3 J mol⁻¹ K⁻¹):',
          options: ['2 mol', '1 mol', '4 mol', '0.5 mol'],
          answer: '2 mol',
          difficulty: 'Medium',
          hint: 'n = PV/(RT).',
          solution: 'n = (2 × 10⁵ × 0.0249)/(8.3 × 300) = 4980/2490 = 2 mol.',
          similar: {
            question: 'A vessel of 0.0747 m³ holds gas at 10⁵ Pa and 300 K. Number of moles (R = 8.3 J mol⁻¹ K⁻¹):',
            options: ['3 mol', '1.5 mol', '6 mol', '2 mol'],
            answer: '3 mol',
            solution: 'n = (10⁵ × 0.0747)/(8.3 × 300) = 7470/2490 = 3 mol.',
          },
        },
        {
          question: 'Vessel A (2 L) contains a gas at 3 atm and vessel B (3 L) contains the same gas at 2 atm, both at the same temperature. They are connected by a thin tube. The final pressure is:',
          options: ['2.4 atm', '2.5 atm', '5 atm', '1.2 atm'],
          answer: '2.4 atm',
          difficulty: 'Hard',
          hint: 'Total moles (∝ PV at constant T) are conserved.',
          solution: 'P(2 + 3) = 3 × 2 + 2 × 3 = 12 ⇒ P = 12/5 = 2.4 atm.',
          similar: {
            question: 'A 1 L vessel at 4 atm is connected to a 4 L vessel at 1 atm (same gas, same temperature). Final pressure:',
            options: ['1.6 atm', '2.5 atm', '5 atm', '2 atm'],
            answer: '1.6 atm',
            solution: 'P × 5 = 4 × 1 + 1 × 4 = 8 ⇒ P = 1.6 atm.',
          },
        },
      ],
    },
    {
      name: 'Kinetic Theory and Pressure of an Ideal Gas',
      theory:
        'The kinetic model assumes that a gas consists of a very large number of identical molecules of negligible size, in random motion, that ==collide elastically== with each other and with the walls, and exert ==no forces except during collisions==. The time of a collision is negligible compared with the time between collisions.\n\nA molecule of mass m hitting a wall with velocity component vₓ transfers momentum 2mvₓ. Adding the effect of all molecules and using the randomness of motion (⟨vₓ²⟩ = ⟨v²⟩/3) gives ==P = ⅓ (mN/V) v²_rms = ⅓ ρ v²_rms==.\n\nSince the translational kinetic energy per unit volume is E = ½ρv²_rms, the pressure is ==P = ⅔E==. Pressure therefore depends on the number of molecules per unit volume, the mass of each molecule and the mean square speed: P ∝ (N/V) m v²_rms.',
      keyPoints: [
        'Molecules are point masses; collisions are elastic; no intermolecular force.',
        '==P = ⅓ρv²_rms==.',
        '==P = ⅔ × (KE per unit volume)==.',
        'Momentum given to the wall per elastic collision = 2mv cos θ.',
      ],
      formulas: ['P = (1/3)(mN/V)v²_rms', 'P = (1/3)ρv²_rms', 'P = (2/3)E', 'v_rms = √(3P/ρ)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - pressure from molecular impacts',
        question:
          '10²³ molecules per second, each of mass 3.3 × 10⁻²⁷ kg, strike a wall of area 2 cm² at 45° to the normal with speed 10³ m/s and rebound elastically. The pressure on the wall is about:',
        approach: [
          'Momentum change per molecule = 2mv cos 45° = 2 × 3.3 × 10⁻²⁷ × 10³ × 0.707 ≈ 4.67 × 10⁻²⁴ kg m/s.',
          'Force = 10²³ × 4.67 × 10⁻²⁴ ≈ 0.467 N.',
          'Pressure = 0.467/(2 × 10⁻⁴) ≈ 2.33 × 10³ Pa.',
        ],
        answer: '≈ 2.33 × 10³ N/m²',
      },
      questions: [
        {
          question: 'If E is the translational kinetic energy per unit volume of an ideal gas, its pressure is:',
          options: ['2E/3', '3E/2', 'E/3', 'E'],
          answer: '2E/3',
          difficulty: 'Easy',
          hint: 'Compare P = ⅓ρv² with E = ½ρv².',
          solution: 'P = ⅓ρv² = ⅔(½ρv²) = 2E/3.',
          similar: {
            question: 'An ideal gas is at a pressure of 10⁵ Pa. Its translational kinetic energy per cubic metre is:',
            options: ['1.5 × 10⁵ J', '10⁵ J', '6.67 × 10⁴ J', '3 × 10⁵ J'],
            answer: '1.5 × 10⁵ J',
            solution: 'E = 3P/2 = 1.5 × 10⁵ J per m³.',
          },
        },
        {
          question: 'A gas of density 3 kg/m³ is at a pressure of 10⁵ Pa. The rms speed of its molecules is about:',
          options: ['316 m/s', '100 m/s', '183 m/s', '548 m/s'],
          answer: '316 m/s',
          difficulty: 'Medium',
          hint: 'v_rms = √(3P/ρ).',
          solution: 'v_rms = √(3 × 10⁵/3) = √10⁵ ≈ 316 m/s.',
          similar: {
            question: 'A gas of density 4 kg/m³ is at a pressure of 1.2 × 10⁵ Pa. The rms speed is:',
            options: ['300 m/s', '173 m/s', '520 m/s', '150 m/s'],
            answer: '300 m/s',
            solution: 'v_rms = √(3 × 1.2 × 10⁵/4) = √90000 = 300 m/s.',
          },
        },
        {
          question: 'In a closed vessel of fixed volume, the number of molecules is doubled and their rms speed is halved. The pressure becomes:',
          options: ['P/2', 'P', '2P', 'P/4'],
          answer: 'P/2',
          difficulty: 'Hard',
          hint: 'P ∝ (N/V) m v²_rms.',
          solution: 'P′/P = 2 × (1/2)² = 1/2 ⇒ P′ = P/2.',
          similar: {
            question: 'In a fixed volume, the mass of each molecule is halved, the number of molecules is doubled and the rms speed is doubled. The pressure becomes:',
            options: ['4P', '2P', '8P', 'P'],
            answer: '4P',
            solution: 'P ∝ N m v² ⇒ factor = 2 × (1/2) × 4 = 4.',
          },
        },
      ],
    },
    {
      name: 'Kinetic Interpretation of Temperature and Molecular Speeds',
      theory:
        'Combining P = ⅓(mN/V)v²_rms with PV = NkT gives ==½mv²_rms = (3/2)kT==: the average translational kinetic energy of a molecule depends only on the absolute temperature, not on the nature of the gas. Temperature is thus a measure of average molecular KE. Per mole the translational KE is (3/2)RT.\n\nThe ==rms speed v_rms = √(3RT/M) = √(3kT/m)==. At the same temperature lighter molecules move faster (v_rms ∝ 1/√M), which is why hydrogen escapes from the Earth\'s atmosphere more easily than nitrogen.\n\nMolecular speeds follow the ==Maxwell distribution==, which has three characteristic speeds: most probable v_mp = √(2RT/M), average v_avg = √(8RT/πM) and v_rms = √(3RT/M), with ==v_mp < v_avg < v_rms== in the ratio 1.41 : 1.60 : 1.73. As temperature rises, the distribution flattens and its peak shifts to higher speeds while the area under it stays the same.',
      keyPoints: [
        '==Average KE per molecule = (3/2)kT==, same for all gases at the same T.',
        '==v_rms ∝ √(T/M)==.',
        'v_mp : v_avg : v_rms = √2 : √(8/π) : √3.',
        'Equal v_rms for two gases ⇒ T₁/M₁ = T₂/M₂.',
      ],
      formulas: ['½mv²_rms = (3/2)kT', 'v_rms = √(3RT/M)', 'v_avg = √(8RT/πM)', 'v_mp = √(2RT/M)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - KE per molecule',
        question:
          'The average translational kinetic energy of a gas molecule at 27 °C is (k = 1.38 × 10⁻²³ J/K):',
        approach: [
          'Average KE = (3/2)kT with T = 300 K.',
          'KE = 1.5 × 1.38 × 10⁻²³ × 300 = 6.21 × 10⁻²¹ J.',
          'This is the same for every ideal gas at 27 °C.',
        ],
        answer: '≈ 6.21 × 10⁻²¹ J',
      },
      questions: [
        {
          question: 'If the absolute temperature of a gas is made 4 times, the rms speed of its molecules:',
          options: ['Doubles', 'Becomes 4 times', 'Halves', 'Becomes √2 times'],
          answer: 'Doubles',
          difficulty: 'Easy',
          hint: 'v_rms ∝ √T.',
          solution: 'v_rms ∝ √T ⇒ √4 = 2, so it doubles.',
          similar: {
            question: 'A gas is heated from 27 °C to 927 °C. Its rms speed:',
            options: ['Doubles', 'Becomes 4 times', 'Halves', 'Becomes √2 times'],
            answer: 'Doubles',
            solution: 'T: 300 K → 1200 K (4 times) ⇒ v_rms becomes √4 = 2 times.',
          },
        },
        {
          question: 'The ratio of the rms speeds of H₂ and O₂ molecules at the same temperature is:',
          options: ['4 : 1', '1 : 4', '16 : 1', '2 : 1'],
          answer: '4 : 1',
          difficulty: 'Medium',
          hint: 'v_rms ∝ 1/√M at fixed T.',
          solution: 'v_H₂/v_O₂ = √(32/2) = √16 = 4.',
          similar: {
            question: 'The ratio of rms speeds of He and O₂ at the same temperature is:',
            options: ['2√2 : 1', '8 : 1', '1 : 2√2', '2 : 1'],
            answer: '2√2 : 1',
            solution: 'v_He/v_O₂ = √(32/4) = √8 = 2√2.',
          },
        },
        {
          question: 'At what temperature will the rms speed of oxygen molecules equal that of hydrogen molecules at 300 K?',
          options: ['4800 K', '1200 K', '18.75 K', '9600 K'],
          answer: '4800 K',
          difficulty: 'Hard',
          hint: 'Equal v_rms ⇒ T/M must be equal.',
          solution: 'T_O₂/32 = 300/2 ⇒ T_O₂ = 4800 K.',
          similar: {
            question: 'At what temperature will N₂ (M = 28) have the same rms speed as He (M = 4) at 200 K?',
            options: ['1400 K', '28.6 K', '700 K', '2800 K'],
            answer: '1400 K',
            solution: 'T/28 = 200/4 ⇒ T = 1400 K.',
          },
        },
      ],
    },
    {
      name: 'Degrees of Freedom and Law of Equipartition of Energy',
      theory:
        'The ==degrees of freedom f== of a molecule are the independent ways in which it can store energy. A monatomic molecule has 3 (translational). A rigid diatomic or linear molecule has 3 translational + 2 rotational = 5; at high temperature a diatomic molecule also vibrates, adding 2 more (one KE and one PE term) to give 7. A rigid non-linear polyatomic molecule has 6.\n\nThe ==law of equipartition of energy==: in thermal equilibrium each quadratic degree of freedom has an average energy of ==½kT per molecule== (½RT per mole). Hence the internal energy of n moles is ==U = (f/2)nRT==, and C_v = (f/2)R, C_p = (f/2 + 1)R and ==γ = 1 + 2/f==.\n\nFor a mixture of gases, add internal energies: C_v(mix) = (n₁C_v₁ + n₂C_v₂)/(n₁ + n₂), C_p(mix) = C_v(mix) + R and γ_mix = C_p(mix)/C_v(mix). An equivalent form is (n₁ + n₂)/(γ_mix − 1) = n₁/(γ₁ − 1) + n₂/(γ₂ − 1).',
      keyPoints: [
        'f = 3 (monatomic), 5 (rigid diatomic), 6 (rigid non-linear), 7 (vibrating diatomic).',
        '==½kT per degree of freedom== per molecule.',
        'U = (f/2)nRT; C_v = fR/2; ==γ = 1 + 2/f==.',
        'Mixture: weight C_v by moles, then C_p = C_v + R.',
      ],
      formulas: ['U = (f/2)nRT', 'C_v = (f/2)R', 'C_p = (f/2 + 1)R', 'γ = 1 + 2/f', 'C_v,mix = (n₁C_v₁ + n₂C_v₂)/(n₁ + n₂)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - γ and degrees of freedom',
        question: 'For a gas γ = 4/3. Find the number of degrees of freedom of its molecules and identify the type of gas.',
        approach: [
          'γ = 1 + 2/f ⇒ 4/3 = 1 + 2/f.',
          '2/f = 1/3 ⇒ f = 6.',
          'f = 6 corresponds to a rigid non-linear polyatomic molecule (3 translational + 3 rotational).',
        ],
        answer: 'f = 6 (non-linear polyatomic)',
      },
      questions: [
        {
          question: 'The value of γ = C_p/C_v for a rigid diatomic ideal gas is:',
          options: ['7/5', '5/3', '4/3', '9/7'],
          answer: '7/5',
          difficulty: 'Easy',
          hint: 'f = 5 for a rigid diatomic molecule.',
          solution: 'γ = 1 + 2/5 = 7/5.',
          similar: {
            question: 'The value of γ for a monatomic ideal gas is:',
            options: ['5/3', '7/5', '4/3', '3/2'],
            answer: '5/3',
            solution: 'f = 3 ⇒ γ = 1 + 2/3 = 5/3.',
          },
        },
        {
          question: 'Internal energy of 2 moles of oxygen (rigid diatomic) at 300 K is about (R = 8.314 J mol⁻¹ K⁻¹):',
          options: ['12.5 kJ', '7.5 kJ', '17.5 kJ', '5 kJ'],
          answer: '12.5 kJ',
          difficulty: 'Medium',
          hint: 'U = (f/2)nRT with f = 5.',
          solution: 'U = 2.5 × 2 × 8.314 × 300 = 12471 J ≈ 12.5 kJ.',
          similar: {
            question: 'Internal energy of 3 moles of helium at 400 K is about (R = 8.314 J mol⁻¹ K⁻¹):',
            options: ['15 kJ', '25 kJ', '10 kJ', '5 kJ'],
            answer: '15 kJ',
            solution: 'U = 1.5 × 3 × 8.314 × 400 ≈ 14965 J ≈ 15 kJ.',
          },
        },
        {
          question: 'One mole of a monatomic gas is mixed with one mole of a rigid diatomic gas. γ for the mixture is:',
          options: ['1.5', '1.4', '1.67', '1.53'],
          answer: '1.5',
          difficulty: 'Hard',
          hint: 'Average C_v by moles, then C_p = C_v + R.',
          solution: 'C_v = (3R/2 + 5R/2)/2 = 2R. C_p = 3R. γ = 3R/2R = 1.5.',
          similar: {
            question: '2 moles of helium are mixed with 1 mole of hydrogen (rigid diatomic). γ of the mixture is:',
            options: ['17/11', '3/2', '19/13', '5/3'],
            answer: '17/11',
            solution: 'C_v = (2 × 3R/2 + 5R/2)/3 = (11R/2)/3 = 11R/6. C_p = 17R/6. γ = 17/11 ≈ 1.55.',
          },
        },
      ],
    },
    {
      name: 'Mean Free Path',
      theory:
        'Molecules have a finite diameter d, so they collide with one another. The ==mean free path λ== is the average distance a molecule travels between successive collisions. A molecule sweeps out a cylinder of cross-section πd², and taking into account the motion of the other molecules gives ==λ = 1/(√2 π d² n)==, where n = N/V is the number of molecules per unit volume.\n\nUsing n = P/(kT), ==λ = kT/(√2 π d² P)==. So at constant temperature λ ∝ 1/P, at constant pressure λ ∝ T, and in a closed vessel (fixed n) λ does not change with temperature. At normal conditions λ is of the order of 10⁻⁷ m, a few hundred times the molecular diameter.\n\nThe average time between collisions is τ = λ/v_avg and the collision frequency is v_avg/λ.',
      keyPoints: [
        '==λ = 1/(√2 πd²n) = kT/(√2 πd²P)==.',
        'λ ∝ 1/d²; λ ∝ 1/n.',
        'Constant T: λ ∝ 1/P; constant P: λ ∝ T; constant volume: λ independent of T.',
        'Collision time τ = λ/v_avg.',
      ],
      formulas: ['λ = 1/(√2 π d² n)', 'λ = kT/(√2 π d² P)', 'τ = λ/v_avg'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Occasionally - dependence of collision time on T',
        question:
          'An ideal gas is kept at constant pressure. How does the average time between molecular collisions vary with absolute temperature T?',
        approach: [
          'At constant P, n = P/(kT) ⇒ λ ∝ T.',
          'v_avg ∝ √T.',
          'τ = λ/v_avg ∝ T/√T = √T.',
        ],
        answer: 'τ ∝ √T',
      },
      questions: [
        {
          question: 'At constant temperature, the pressure of a gas is doubled. Its mean free path:',
          options: ['Becomes half', 'Doubles', 'Becomes four times', 'Is unchanged'],
          answer: 'Becomes half',
          difficulty: 'Easy',
          hint: 'λ = kT/(√2 πd²P).',
          solution: 'At constant T, λ ∝ 1/P, so doubling P halves λ.',
          similar: {
            question: 'At constant pressure, the absolute temperature of a gas is doubled. Its mean free path:',
            options: ['Doubles', 'Becomes half', 'Becomes √2 times', 'Is unchanged'],
            answer: 'Doubles',
            solution: 'At constant P, λ ∝ T, so it doubles.',
          },
        },
        {
          question: 'If the molecular diameter were doubled at the same number density, the mean free path would become:',
          options: ['λ/4', 'λ/2', '2λ', '4λ'],
          answer: 'λ/4',
          difficulty: 'Medium',
          hint: 'λ ∝ 1/d².',
          solution: 'λ ∝ 1/d² ⇒ (1/2)² = 1/4.',
          similar: {
            question: 'Number density is tripled and molecular diameter halved. The mean free path becomes:',
            options: ['4λ/3', '3λ/4', '12λ', 'λ/12'],
            answer: '4λ/3',
            solution: 'λ ∝ 1/(nd²) ⇒ factor = 1/(3 × 1/4) = 4/3.',
          },
        },
        {
          question: 'Estimate the mean free path of molecules of diameter 2 × 10⁻¹⁰ m at 300 K and 10⁵ Pa (k = 1.38 × 10⁻²³ J/K):',
          options: ['≈ 2.3 × 10⁻⁷ m', '≈ 2.3 × 10⁻⁹ m', '≈ 2.3 × 10⁻⁵ m', '≈ 1.2 × 10⁻⁷ m'],
          answer: '≈ 2.3 × 10⁻⁷ m',
          difficulty: 'Hard',
          hint: 'λ = kT/(√2 πd²P).',
          solution: 'kT = 4.14 × 10⁻²¹ J. √2 πd²P = 1.414 × 3.142 × 4 × 10⁻²⁰ × 10⁵ ≈ 1.78 × 10⁻¹⁴. λ ≈ 4.14 × 10⁻²¹/1.78 × 10⁻¹⁴ ≈ 2.3 × 10⁻⁷ m.',
          similar: {
            question: 'Estimate the mean free path for molecules of diameter 3 × 10⁻¹⁰ m at a number density of 2.5 × 10²⁵ m⁻³:',
            options: ['≈ 1.0 × 10⁻⁷ m', '≈ 1.0 × 10⁻⁹ m', '≈ 3.2 × 10⁻⁷ m', '≈ 1.4 × 10⁻⁷ m'],
            answer: '≈ 1.0 × 10⁻⁷ m',
            solution: 'λ = 1/(√2 πd²n) = 1/(1.414 × 3.142 × 9 × 10⁻²⁰ × 2.5 × 10²⁵) ≈ 1/(1.0 × 10⁷) ≈ 1.0 × 10⁻⁷ m.',
          },
        },
      ],
    },
  ],
};
