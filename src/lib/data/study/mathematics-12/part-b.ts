import type { StudyChapter } from '../types';
import { indefiniteIntegrals } from './indefinite-integrals';
import { definiteIntegrals } from './definite-integrals';
import { differentialEquations } from './differential-equations';
import { vectorAlgebra } from './vector-algebra';
import { threeDimensionalGeometry } from './three-dimensional-geometry';
import { probability } from './probability';

export const mathematics12PartB: StudyChapter[] = [
  indefiniteIntegrals,
  definiteIntegrals,
  differentialEquations,
  vectorAlgebra,
  threeDimensionalGeometry,
  probability,
];
