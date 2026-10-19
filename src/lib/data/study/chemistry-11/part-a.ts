import type { StudyChapter } from '../types';
import { moleConcept } from './mole-concept';
import { structureOfAtom } from './structure-of-atom';
import { periodicProperties } from './periodic-properties';
import { chemicalBonding } from './chemical-bonding';
import { gaseousState } from './gaseous-state';
import { pBlock13To14 } from './p-block-13-14';

export const chemistry11PartA: StudyChapter[] = [
  moleConcept,
  structureOfAtom,
  periodicProperties,
  chemicalBonding,
  gaseousState,
  pBlock13To14,
];
