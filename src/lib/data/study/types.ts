/**
 * Topic-wise theory + practice content for the Theory section.
 *
 * Text fields may wrap a phrase in `==double equals==` to highlight it as
 * must-remember; the UI renders those spans as highlights.
 */

/** Keys of the SVG diagrams in src/components/study/study-diagrams.tsx. */
export const diagramKeys = [
  // Physics - mechanics
  'projectile',
  'relative-velocity-river',
  'free-body-incline',
  'atwood-machine',
  'circular-motion',
  'vertical-circle',
  'collision-1d',
  'centre-of-mass',
  'rolling-motion',
  'moment-of-inertia',
  'satellite-orbit',
  'stress-strain-curve',
  'bernoulli-pipe',
  'capillary-rise',
  'pv-processes',
  'carnot-cycle',
  'shm-spring',
  'simple-pendulum',
  'transverse-wave',
  'standing-waves-pipes',
  'doppler-effect',
  'heat-transfer',
  // Physics - electricity, magnetism, optics, modern
  'electric-field-lines',
  'electric-dipole',
  'gauss-surface',
  'equipotential-surfaces',
  'parallel-plate-capacitor',
  'rc-charging-curve',
  'kirchhoff-circuit',
  'wheatstone-bridge',
  'potentiometer',
  'magnetic-field-loop',
  'charge-in-magnetic-field',
  'solenoid-field',
  'hysteresis-loop',
  'faraday-induction',
  'lr-growth-curve',
  'lcr-phasor',
  'resonance-curve',
  'transformer',
  'em-wave',
  'em-spectrum',
  'mirror-ray-diagram',
  'lens-ray-diagram',
  'prism-deviation',
  'total-internal-reflection',
  'ydse',
  'single-slit-diffraction',
  'polarisation',
  'photoelectric-graphs',
  'bohr-energy-levels',
  'radioactive-decay-curve',
  'binding-energy-curve',
  'pn-junction',
  'rectifier',
  'logic-gates',
  'vernier-screw-gauge',
  // Chemistry
  'atomic-orbitals',
  'periodic-trends',
  'vsepr-shapes',
  'mo-diagram',
  'hybridisation',
  'gas-isotherms',
  'enthalpy-diagram',
  'equilibrium-approach',
  'titration-curve',
  'buffer-action',
  'galvanic-cell',
  'conductance-dilution',
  'reaction-order-graphs',
  'activation-energy-profile',
  'raoult-plot',
  'crystal-field-splitting',
  'sn1-sn2',
  'inductive-resonance',
  'isomerism-tree',
  'carbonyl-addition',
  'glucose-structure',
  'd-block-trends',
  'xenon-shapes',
  // Mathematics
  'venn-diagram',
  'unit-circle',
  'trig-graphs',
  'argand-plane',
  'quadratic-graph',
  'ap-gp-series',
  'pascal-triangle',
  'straight-line-distance',
  'circle-tangent',
  'parabola',
  'ellipse',
  'hyperbola',
  'limit-graph',
  'function-types',
  'inverse-trig-graphs',
  'matrix-multiplication',
  'continuity-graph',
  'tangent-normal',
  'maxima-minima',
  'area-between-curves',
  'definite-integral-area',
  'slope-field',
  'vector-products',
  'line-plane-3d',
  'probability-tree',
  'binomial-distribution',
  'statistics-spread',
] as const;

export type DiagramKey = (typeof diagramKeys)[number];

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

/** A follow-up question on the same concept, shown when the student gets one wrong. */
export type SimilarQuestion = {
  question: string;
  options: string[];
  answer: string;
  solution: string;
};

export type PracticeQuestion = {
  question: string;
  /** Exactly four options; `answer` must equal one of them verbatim. */
  options: string[];
  answer: string;
  difficulty: Difficulty;
  /** A nudge shown on request before answering. */
  hint: string;
  /** Step-by-step working. */
  solution: string;
  /** Same concept, different numbers/situation - offered after a wrong answer. */
  similar: SimilarQuestion;
};

/** How this topic shows up in past JEE papers and how to attack it. */
export type PyqPattern = {
  exam: 'JEE Main' | 'JEE Advanced' | 'JEE Main & Advanced';
  /** Only real, well-known years; otherwise a description like 'Recurring, most years'. */
  frequency: string;
  /** A representative question in the style that gets asked. */
  question: string;
  /** Steps to solve it. */
  approach: string[];
  answer: string;
};

export type StudyTopic = {
  name: string;
  /** 2-4 short paragraphs separated by \n\n; use ==highlights==. */
  theory: string;
  keyPoints: string[];
  formulas?: string[];
  diagram?: DiagramKey;
  /** Short caption under the diagram. */
  diagramCaption?: string;
  pyq: PyqPattern;
  /** Exactly three questions. */
  questions: PracticeQuestion[];
};

export type StudyChapter = {
  name: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  classLevel: 11 | 12;
  summary: string;
  /** Theory points that come in papers again and again. */
  mostRepeated: string[];
  topics: StudyTopic[];
};
