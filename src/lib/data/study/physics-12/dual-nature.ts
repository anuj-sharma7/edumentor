import type { StudyChapter } from '../types';

export const dualNature: StudyChapter = {
  name: 'Dual Nature of Radiation and Matter',
  subject: 'Physics',
  classLevel: 12,
  summary:
    'Light behaves as particles (photons) in the photoelectric effect, and moving particles behave as waves (de Broglie). Short, formula-driven and among the easiest scoring chapters of Class 12.',
  mostRepeated: [
    '==KE_max and stopping potential depend only on frequency==, never on intensity.',
    'Photocurrent (saturation current) is proportional to ==intensity==.',
    'Slope of the V₀ vs ν graph is ==h/e== and is the same for every metal.',
    'Electron accelerated through V volts: ==λ = 12.27/√V Å==.',
    'For the same kinetic energy, λ ∝ 1/√m; for the same accelerating voltage, λ ∝ 1/√(mq).',
    'Use ==E(eV) = 1240/λ(nm)== for quick photon-energy conversions.',
  ],
  topics: [
    {
      name: 'Photoelectric Effect and Einstein\'s Equation',
      theory:
        'When light of suitable frequency falls on a metal surface, electrons are emitted. Experiments show that there is a ==threshold frequency ν₀== below which no electron is emitted however intense the light is, and that emission is ==instantaneous== (no time lag).\n\nWave theory cannot explain this. Einstein proposed that light consists of photons of energy E = hν, and that ==one photon is absorbed by one electron==. Part of the energy is used to overcome the work function φ = hν₀, and the rest appears as kinetic energy: ==hν = φ + KE_max==.\n\nThe stopping potential V₀ is the reverse voltage that just stops the fastest electrons, so eV₀ = KE_max = hν − φ. Increasing intensity increases the number of photons (and hence electrons) but not the energy of each photon.',
      keyPoints: [
        'Threshold wavelength λ₀ = hc/φ; light with λ > λ₀ cannot eject electrons.',
        '==Intensity ↑ ⇒ current ↑==, stopping potential unchanged.',
        '==Frequency ↑ ⇒ KE_max and V₀ ↑==, current (for same intensity) roughly unchanged.',
        'Work function is a property of the metal surface; alkali metals have low φ (Cs ≈ 2.1 eV).',
      ],
      formulas: ['E = hν = hc/λ', 'hν = φ + KE_max', 'eV₀ = hν − hν₀', 'E(eV) = 1240 / λ(nm)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - almost every year',
        question:
          'When light of wavelength λ falls on a metal the stopping potential is V. With wavelength 2λ it becomes V/4. The threshold wavelength is:',
        approach: [
          'Write Einstein\'s equation for both cases: eV = hc/λ − φ and eV/4 = hc/2λ − φ.',
          'Multiply the second by 4: eV = 2hc/λ − 4φ.',
          'Equate with the first: hc/λ − φ = 2hc/λ − 4φ ⇒ 3φ = hc/λ ⇒ φ = hc/3λ.',
          'Threshold wavelength λ₀ = hc/φ = 3λ.',
        ],
        answer: '3λ',
      },
      questions: [
        {
          question: 'Light of wavelength 310 nm falls on a metal of work function 2 eV. The stopping potential is:',
          options: ['1 V', '2 V', '3 V', '4 V'],
          answer: '2 V',
          difficulty: 'Easy',
          hint: 'Convert wavelength to energy with E(eV) = 1240/λ(nm).',
          solution: 'E = 1240/310 = 4 eV. KE_max = 4 − 2 = 2 eV, so eV₀ = 2 eV ⇒ V₀ = 2 V.',
          similar: {
            question: 'Light of wavelength 248 nm falls on a metal of work function 3 eV. The stopping potential is:',
            options: ['1 V', '2 V', '3 V', '5 V'],
            answer: '2 V',
            solution: 'E = 1240/248 = 5 eV. KE_max = 5 − 3 = 2 eV ⇒ V₀ = 2 V.',
          },
        },
        {
          question: 'The intensity of incident light is doubled keeping its frequency fixed. Which of these doubles?',
          options: ['Stopping potential', 'Maximum kinetic energy', 'Saturation photocurrent', 'Work function'],
          answer: 'Saturation photocurrent',
          difficulty: 'Easy',
          hint: 'Intensity changes the number of photons, not the energy of each photon.',
          solution: 'Doubling intensity doubles the photons per second and therefore the electrons emitted per second, so saturation current doubles. KE_max and V₀ depend only on frequency.',
          similar: {
            question: 'The frequency of incident light is increased keeping intensity fixed (above threshold). Which of these increases?',
            options: ['Saturation photocurrent', 'Stopping potential', 'Work function', 'Threshold frequency'],
            answer: 'Stopping potential',
            solution: 'eV₀ = hν − φ, so a higher ν gives a higher stopping potential. Work function and threshold frequency are properties of the metal.',
          },
        },
        {
          question: 'The threshold wavelength of a metal is 620 nm. Its work function is:',
          options: ['1 eV', '2 eV', '3 eV', '4 eV'],
          answer: '2 eV',
          difficulty: 'Medium',
          hint: 'φ = hc/λ₀; use 1240 eV nm for hc.',
          solution: 'φ = 1240/620 = 2 eV.',
          similar: {
            question: 'A metal has work function 2.48 eV. Its threshold wavelength is:',
            options: ['400 nm', '500 nm', '600 nm', '310 nm'],
            answer: '500 nm',
            solution: 'λ₀ = 1240/φ = 1240/2.48 = 500 nm.',
          },
        },
      ],
    },
    {
      name: 'Photoelectric Graphs',
      theory:
        'Two graphs are asked repeatedly. In the ==photocurrent vs anode potential== graph, current rises and saturates for positive potential; for negative potential it falls to zero at −V₀. Curves for ==different intensities (same ν)== meet the axis at the same −V₀ but have different saturation currents. Curves for ==different frequencies (same intensity)== have the same saturation current but different stopping potentials.\n\nThe ==stopping potential vs frequency== graph is a straight line V₀ = (h/e)ν − φ/e. Its slope h/e is the same for every metal, its x-intercept is the threshold frequency ν₀, and its y-intercept is −φ/e. Lines for different metals are therefore parallel.',
      keyPoints: [
        'Same ν, different intensity ⇒ same V₀, different saturation current.',
        'Same intensity, different ν ⇒ same saturation current, different V₀.',
        '==V₀-ν lines for all metals are parallel== (slope h/e).',
        'KE_max vs ν has slope h and x-intercept ν₀.',
      ],
      formulas: ['V₀ = (h/e)ν − φ/e', 'slope = h/e', 'x-intercept = ν₀'],
      diagram: 'photoelectric-graphs',
      diagramCaption: 'Left: photocurrent vs potential for two intensities. Right: stopping potential vs frequency for two metals (parallel lines).',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - graph-based statements',
        question:
          'Stopping potential vs frequency graphs are drawn for two metals A and B (φ_A < φ_B). Which statement is correct?',
        approach: [
          'Write V₀ = (h/e)ν − φ/e for each metal.',
          'The slope h/e does not depend on the metal, so the lines are parallel.',
          'The x-intercept is ν₀ = φ/h, so the metal with smaller φ (A) cuts the axis at a lower frequency.',
        ],
        answer: 'The lines are parallel and A has the smaller threshold frequency.',
      },
      questions: [
        {
          question: 'The slope of the stopping potential vs frequency graph is:',
          options: ['h', 'e/h', 'h/e', 'φ/e'],
          answer: 'h/e',
          difficulty: 'Easy',
          hint: 'Rearrange eV₀ = hν − φ for V₀.',
          solution: 'V₀ = (h/e)ν − φ/e, a straight line with slope h/e.',
          similar: {
            question: 'The slope of the KE_max vs frequency graph for a metal is:',
            options: ['h/e', 'h', 'φ', 'e'],
            answer: 'h',
            solution: 'KE_max = hν − φ, so the slope is h.',
          },
        },
        {
          question: 'Two photocurrent-voltage curves have the same stopping potential but different saturation currents. The two beams differ in:',
          options: ['Frequency only', 'Intensity only', 'Both frequency and intensity', 'Neither'],
          answer: 'Intensity only',
          difficulty: 'Medium',
          hint: 'Which quantity fixes the stopping potential?',
          solution: 'Same V₀ ⇒ same frequency. Different saturation current ⇒ different intensity.',
          similar: {
            question: 'Two curves have the same saturation current but different stopping potentials. The beams differ in:',
            options: ['Intensity only', 'Frequency only', 'Both', 'Neither'],
            answer: 'Frequency only',
            solution: 'Different V₀ means different frequency; equal saturation current means equal photon flux (intensity).',
          },
        },
        {
          question: 'For a metal, the V₀-ν graph cuts the frequency axis at 5 × 10¹⁴ Hz. Its work function (h = 6.6 × 10⁻³⁴ J s) is about:',
          options: ['1.06 eV', '2.06 eV', '3.3 eV', '0.5 eV'],
          answer: '2.06 eV',
          difficulty: 'Medium',
          hint: 'The x-intercept is the threshold frequency; φ = hν₀.',
          solution: 'φ = hν₀ = 6.6 × 10⁻³⁴ × 5 × 10¹⁴ = 3.3 × 10⁻¹⁹ J = 3.3 × 10⁻¹⁹ / 1.6 × 10⁻¹⁹ ≈ 2.06 eV.',
          similar: {
            question: 'The V₀-ν graph of a metal cuts the frequency axis at 6 × 10¹⁴ Hz. Work function (h = 6.6 × 10⁻³⁴ J s) is about:',
            options: ['2.48 eV', '1.65 eV', '3.96 eV', '4.2 eV'],
            answer: '2.48 eV',
            solution: 'φ = 6.6 × 10⁻³⁴ × 6 × 10¹⁴ = 3.96 × 10⁻¹⁹ J ≈ 2.48 eV.',
          },
        },
      ],
    },
    {
      name: 'Photon Energy, Momentum and Radiation Pressure',
      theory:
        'A photon has energy E = hν, momentum ==p = h/λ = E/c== and zero rest mass. It always travels at c in vacuum.\n\nA source of power P emitting light of wavelength λ sends out ==n = Pλ/hc photons per second==. When this light falls on a surface it transfers momentum: a perfectly absorbing surface feels force F = P/c, a perfectly reflecting surface (normal incidence) feels ==F = 2P/c== because the momentum reverses.',
      keyPoints: [
        'Photon momentum p = h/λ; higher frequency ⇒ more momentum.',
        '==Reflecting surface gets double the force== of an absorbing one.',
        'Number of photons per second n = P/(hν).',
      ],
      formulas: ['p = h/λ = E/c', 'n = Pλ/hc', 'F = P/c (absorbing), 2P/c (reflecting)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - photon count and force numericals',
        question: 'A 100 W source emits light of wavelength 662 nm. Number of photons emitted per second (h = 6.62 × 10⁻³⁴ J s):',
        approach: [
          'Energy of one photon E = hc/λ = (6.62 × 10⁻³⁴ × 3 × 10⁸)/(662 × 10⁻⁹) = 3 × 10⁻¹⁹ J.',
          'Photons per second n = P/E = 100/(3 × 10⁻¹⁹).',
        ],
        answer: '≈ 3.3 × 10²⁰ per second',
      },
      questions: [
        {
          question: 'Momentum of a photon of energy 3 eV (c = 3 × 10⁸ m/s):',
          options: ['1.6 × 10⁻²⁷ kg m/s', '1.6 × 10⁻²⁸ kg m/s', '4.8 × 10⁻¹⁹ kg m/s', '9 × 10⁻²⁷ kg m/s'],
          answer: '1.6 × 10⁻²⁷ kg m/s',
          difficulty: 'Medium',
          hint: 'p = E/c; convert eV to joule first.',
          solution: 'E = 3 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J. p = 4.8 × 10⁻¹⁹/3 × 10⁸ = 1.6 × 10⁻²⁷ kg m/s.',
          similar: {
            question: 'Momentum of a photon of energy 6 eV (c = 3 × 10⁸ m/s):',
            options: ['3.2 × 10⁻²⁷ kg m/s', '1.6 × 10⁻²⁷ kg m/s', '9.6 × 10⁻¹⁹ kg m/s', '3.2 × 10⁻²⁸ kg m/s'],
            answer: '3.2 × 10⁻²⁷ kg m/s',
            solution: 'E = 9.6 × 10⁻¹⁹ J. p = E/c = 3.2 × 10⁻²⁷ kg m/s.',
          },
        },
        {
          question: 'A 30 W beam falls normally on a perfectly reflecting mirror. Force on the mirror:',
          options: ['10⁻⁷ N', '2 × 10⁻⁷ N', '10⁻⁸ N', '9 × 10⁹ N'],
          answer: '2 × 10⁻⁷ N',
          difficulty: 'Medium',
          hint: 'Reflection reverses the momentum, so the force is 2P/c.',
          solution: 'F = 2P/c = 60/(3 × 10⁸) = 2 × 10⁻⁷ N.',
          similar: {
            question: 'A 60 W beam falls normally on a perfectly absorbing surface. Force on it:',
            options: ['2 × 10⁻⁷ N', '4 × 10⁻⁷ N', '10⁻⁷ N', '6 × 10⁻⁸ N'],
            answer: '2 × 10⁻⁷ N',
            solution: 'Absorbing: F = P/c = 60/(3 × 10⁸) = 2 × 10⁻⁷ N.',
          },
        },
        {
          question: 'Two photons have wavelengths 400 nm and 800 nm. Ratio of their momenta p₁ : p₂ is:',
          options: ['1:2', '2:1', '1:4', '4:1'],
          answer: '2:1',
          difficulty: 'Easy',
          hint: 'p = h/λ.',
          solution: 'p ∝ 1/λ ⇒ p₁/p₂ = 800/400 = 2.',
          similar: {
            question: 'Two photons have energies 2 eV and 6 eV. Ratio of their momenta p₁ : p₂ is:',
            options: ['1:3', '3:1', '1:9', '1:1'],
            answer: '1:3',
            solution: 'p = E/c ∝ E ⇒ 2:6 = 1:3.',
          },
        },
      ],
    },
    {
      name: 'de Broglie Wavelength and Matter Waves',
      theory:
        'de Broglie proposed that every moving particle has an associated wave of wavelength ==λ = h/p = h/mv==. Using K = p²/2m, ==λ = h/√(2mK)==. For a charge q accelerated from rest through V volts, K = qV, so λ = h/√(2mqV).\n\nFor an electron this simplifies to ==λ = 12.27/√V Å==. Matter waves are noticeable only for tiny masses (electrons, neutrons); for everyday objects λ is far too small to detect.\n\nThe ==Davisson-Germer experiment== (electrons of 54 eV scattered from a nickel crystal, strong peak at 50°) confirmed the wave nature of electrons, giving λ ≈ 1.67 Å in agreement with de Broglie\'s formula.',
      keyPoints: [
        'Same KE: λ ∝ 1/√m (proton has smaller λ than electron).',
        'Same V: λ ∝ 1/√(mq) (α-particle: m = 4m_p, q = 2e).',
        'Same momentum ⇒ same λ, irrespective of mass.',
        'Thermal neutrons: λ = h/√(3mkT).',
      ],
      formulas: ['λ = h/p = h/mv', 'λ = h/√(2mK)', 'λ = h/√(2mqV)', 'λ_e = 12.27/√V Å'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - ratio questions',
        question:
          'A proton and an α-particle are accelerated through the same potential difference. Ratio of their de Broglie wavelengths λ_p : λ_α is:',
        approach: [
          'For acceleration through V, λ = h/√(2mqV), so λ ∝ 1/√(mq).',
          'm_α = 4m_p and q_α = 2e ⇒ m_αq_α = 8 m_p e.',
          'λ_p/λ_α = √(m_αq_α/m_pq_p) = √8 = 2√2.',
        ],
        answer: '2√2 : 1',
      },
      questions: [
        {
          question: 'de Broglie wavelength of an electron accelerated through 100 V:',
          options: ['12.27 Å', '1.227 Å', '0.1227 Å', '122.7 Å'],
          answer: '1.227 Å',
          difficulty: 'Easy',
          hint: 'Use λ = 12.27/√V Å.',
          solution: 'λ = 12.27/√100 = 1.227 Å.',
          similar: {
            question: 'de Broglie wavelength of an electron accelerated through 400 V:',
            options: ['0.613 Å', '1.227 Å', '0.307 Å', '6.13 Å'],
            answer: '0.613 Å',
            solution: 'λ = 12.27/√400 = 12.27/20 ≈ 0.613 Å.',
          },
        },
        {
          question: 'An electron and a proton have the same kinetic energy. Which has the longer de Broglie wavelength?',
          options: ['Electron', 'Proton', 'Both equal', 'Depends on the energy'],
          answer: 'Electron',
          difficulty: 'Easy',
          hint: 'λ = h/√(2mK).',
          solution: 'For equal K, λ ∝ 1/√m. The electron is lighter, so its wavelength is longer.',
          similar: {
            question: 'An electron and a proton have the same momentum. Their de Broglie wavelengths are:',
            options: ['Equal', 'Electron\'s is longer', 'Proton\'s is longer', 'Cannot be compared'],
            answer: 'Equal',
            solution: 'λ = h/p, so equal momentum gives equal wavelength regardless of mass.',
          },
        },
        {
          question: 'If the kinetic energy of a particle is made 4 times, its de Broglie wavelength becomes:',
          options: ['4 times', '2 times', 'Half', 'One-fourth'],
          answer: 'Half',
          difficulty: 'Medium',
          hint: 'λ ∝ 1/√K.',
          solution: 'λ = h/√(2mK) ⇒ λ ∝ 1/√K = 1/√4 = 1/2.',
          similar: {
            question: 'If the momentum of a particle is doubled, its de Broglie wavelength becomes:',
            options: ['Double', 'Half', 'Four times', 'Unchanged'],
            answer: 'Half',
            solution: 'λ = h/p, so doubling p halves λ.',
          },
        },
      ],
    },
  ],
};
