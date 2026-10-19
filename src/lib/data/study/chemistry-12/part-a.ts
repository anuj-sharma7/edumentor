import type { StudyChapter } from '../types';
import { solutions } from './solutions';
import { electrochemistry } from './electrochemistry';
import { chemicalKinetics } from './chemical-kinetics';
import { pBlockElements } from './p-block-elements';
import { dAndFBlockElements } from './d-and-f-block-elements';
import { coordinationCompounds } from './coordination-compounds';

export const chemistry12PartA: StudyChapter[] = [
  solutions,
  electrochemistry,
  chemicalKinetics,
  pBlockElements,
  dAndFBlockElements,
  coordinationCompounds,
];
