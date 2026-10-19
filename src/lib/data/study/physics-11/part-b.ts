import type { StudyChapter } from '../types';
import { mechanicalPropertiesOfSolids } from './mechanical-properties-of-solids';
import { mechanicalPropertiesOfFluids } from './mechanical-properties-of-fluids';
import { thermalPropertiesOfMatter } from './thermal-properties-of-matter';
import { thermodynamics } from './thermodynamics';
import { kineticTheoryOfGases } from './kinetic-theory-of-gases';
import { oscillations } from './oscillations';
import { waves } from './waves';

export const physics11PartB: StudyChapter[] = [
  mechanicalPropertiesOfSolids,
  mechanicalPropertiesOfFluids,
  thermalPropertiesOfMatter,
  thermodynamics,
  kineticTheoryOfGases,
  oscillations,
  waves,
];
